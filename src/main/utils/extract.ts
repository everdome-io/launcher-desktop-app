import path from 'path';
import StreamZip from 'node-stream-zip';

async function getEntries(filePath: string): Promise<StreamZip.ZipEntry[]> {
  const zip = new StreamZip.async({ file: filePath });
  const entries = await zip.entries();
  const files: StreamZip.ZipEntry[] = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const entryName in entries) {
    if (!entryName.startsWith('__MACOSX/')) {
      files.push(entries[entryName]);
    }
  }

  await zip.close();
  return files;
}

async function extractEntry(
  filePath: string,
  entry: StreamZip.ZipEntry,
  destination: string
): Promise<void> {
  const zip = new StreamZip.async({ file: filePath });
  const outputPath = path.join(destination, entry.name);

  await zip.extract(entry.name, outputPath);
  await zip.close();
}

export async function extractWithProgress(
  filePath: string,
  destination: string,
  progressCallback: (percent: number) => void
): Promise<void> {
  const entries = await getEntries(filePath);
  const totalSize = entries.reduce((sum, entry) => sum + entry.size, 0);

  let extractedSize = 0;

  // eslint-disable-next-line no-restricted-syntax
  for (const entry of entries) {
    try {
      await extractEntry(filePath, entry, destination);
      extractedSize += entry.size;
      const percent = (extractedSize / totalSize) * 100;
      progressCallback(percent);
    } catch (error) {
      console.error('Error during extraction:', error);
    }
  }
}
