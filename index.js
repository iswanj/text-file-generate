import { generateW } from "./generateW.js";

const headers = ["Header 1", "Header 2", "Header 3", "Header 4", "Header 5"];
const fileSizeInBytes = 1024 * 1000;

async function Main() {
  try {
    const start = Date.now();

    for (let i = 0; i < headers.length; i++) {
      const header = headers[i];
      const filePath = `text_file_${i + 1}.txt`;
      await generateW(header, filePath, fileSizeInBytes);
    }

    console.log("Total time spent: ", Date.now() - start, "ms");
  } catch (error) {
    console.error("Error generating text files:", error);
  }
}

Main();
