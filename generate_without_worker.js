import { generateTextFile } from "./lib/generateTextFile.js";

const headers = ["Header 1", "Header 2", "Header 3", "Header 4", "Header 5"];
const fileSizeInBytes = 1024 * 1000;
const directoryPath = "files/main_thread";

async function main() {
  try {
    const start = Date.now();

    for (let i = 0; i < headers.length; i++) {
      const startTime = Date.now();
      const header = headers[i];
      const filePath = `text_file_${i + 1}.txt`;
      await generateTextFile(header, directoryPath, filePath, fileSizeInBytes);
      console.log(`file ${i + 1} generated in [${Date.now() - startTime}ms]`);
    }

    console.log("Total time spent to generate: ", Date.now() - start, "ms");
  } catch (error) {
    console.error("Error generating text files:", error);
  }
}

main();
