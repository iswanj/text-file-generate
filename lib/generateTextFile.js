import { writeFile } from "fs/promises";
import fs from "fs";

function generateRandomText(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

export const generateTextFile = async (header, filePath, fileSizeInBytes) => {
  const writableStream = fs.createWriteStream(filePath);

  // Write the header as the first line
  writableStream.write(header + "\n");

  let bytesWritten = header.length + 1;
  while (bytesWritten < fileSizeInBytes) {
    const line = generateRandomText(100) + "\n";
    await writeFile(filePath, line, { flag: "a" });
    bytesWritten += line.length;
  }
};
