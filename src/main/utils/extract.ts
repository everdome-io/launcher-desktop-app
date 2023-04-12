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
  // Change the return type to Promise<number>
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

  const sizes = entries.map((entry) => entry.size);
  console.log(`entry sizes ${JSON.stringify(sizes)}`);

  for (let i = 0; i < entries.length; i += concurrency) {
    chunks.push(entries.slice(i, i + concurrency));
  }

  let counter = 0;
  // eslint-disable-next-line no-restricted-syntax
  for (const chunk of chunks) {
    counter += 1;
    console.log(`chunk ${counter}`);
    const extractPromises = chunk.map((entry) =>
      extractEntry(filePath, entry, destination)
    );
    const extractedSizes = await Promise.all(extractPromises);
    console.log(`extractedSizes ${JSON.stringify(extractedSizes)}`);

    const chunkSize = extractedSizes.reduce((sum, size) => sum + size, 0);
    console.log(`total chunk size ${chunkSize}`);
    progressCallback(chunkSize);
  }
}

export async function extractWithProgress(
  filePath: string,
  destination: string,
  progressCallback: (percent: number) => void
): Promise<void> {
  const entries = await getEntries(filePath);
  console.log(`entries count=${entries.length}`);
  const totalSize = entries.reduce((sum, entry) => sum + entry.size, 0);

  let extractedSize = 0;

  const concurrency = 100;

  await processEntriesInChunks(
    filePath,
    entries,
    destination,
    (chunkSize: number) => {
      console.log(`chunk processed size=${chunkSize}`);
      extractedSize += chunkSize;
      const percent = (extractedSize / totalSize) * 100;
      progressCallback(percent);
    },
    concurrency
  );
}
