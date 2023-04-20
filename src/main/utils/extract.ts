import path from 'path';
import StreamZip from 'node-stream-zip';
import fs from 'fs';
import util from 'util';

async function getEntries(filePath: string): Promise<StreamZip.ZipEntry[]> {
  const zip = new StreamZip.async({ file: filePath });
  const entries = await zip.entries();
  const files: StreamZip.ZipEntry[] = [];

  // eslint-disable-next-line no-restricted-syntax, guard-for-in
  for (const entryName in entries) {
    if (!entryName.startsWith('__MACOSX/')) {
      files.push(entries[entryName]);
    }
  }

  await zip.close();
  return files;
}

const mkdir = util.promisify(fs.mkdir);

async function extractEntry(
  filePath: string,
  entry: StreamZip.ZipEntry,
  destination: string
): Promise<number> {
  const zip = new StreamZip.async({ file: filePath });
  const outputPath = path.join(destination, entry.name);

  // Create the directory if it doesn't exist
  const outputDir = path.dirname(outputPath);
  await mkdir(outputDir, { recursive: true });

  await zip.extract(entry.name, outputPath);
  await zip.close();

  return entry.size; // Return the entry size
}

async function processEntriesInChunks(
  filePath: string,
  entries: StreamZip.ZipEntry[],
  destination: string,
  progressCallback: (percent: number) => void,
  concurrency: number
): Promise<void> {
  const chunks: StreamZip.ZipEntry[][] = [];

  let accumulatedSize = 0;
  let chunkIndex = 0;
  const maxSize = 10 * 1024 * 1024;
  chunks.push([]);
  for (let i = 0; i < entries.length; i += 1) {
    chunks[chunkIndex].push(entries[i]);
    accumulatedSize += entries[i].size;
    if (accumulatedSize > maxSize || chunks[chunkIndex].length >= concurrency) {
      console.log(
        `chunk formed, size:${accumulatedSize}, count:${chunks[chunkIndex].length}`
      );
      chunkIndex += 1;
      accumulatedSize = 0;
      chunks.push([]);
    }
  }

  let counter = 0;
  // eslint-disable-next-line no-restricted-syntax
  for (const chunk of chunks) {
    counter += 1;
    const totalSize = chunk.reduce((prev, next) => prev + next.size, 0);
    progressCallback(totalSize);

    const extractPromises = chunk.map((entry) =>
      extractEntry(filePath, entry, destination)
    );
    await Promise.all(extractPromises);
  }
}

export async function extractWithProgress(
  filePath: string,
  destination: string,
  progressCallback: (chunkSize: number, percent: number) => void
): Promise<void> {
  const entries = (await getEntries(filePath))
    .filter((item) => item.size > 0)
    .sort((a, b) => b.name.length - a.name.length);

  const totalSize = entries.reduce((sum, entry) => sum + entry.size, 0);

  let extractedSize = 0;

  const concurrency = 100;

  await processEntriesInChunks(
    filePath,
    entries,
    destination,
    (chunkSize: number) => {
      extractedSize += chunkSize;
      const percent = (extractedSize / totalSize) * 100;
      progressCallback(extractedSize, percent);
    },
    concurrency
  );
}
