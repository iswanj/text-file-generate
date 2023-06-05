import { workerData, parentPort } from "worker_threads";
import { generateTextFile } from "./lib/generateTextFile.js";

const { header, directoryPath, filePath, fileSizeInBytes } = workerData;

function gen(param) {
  generateTextFile(header, directoryPath, filePath, fileSizeInBytes);
}

gen();

parentPort.postMessage("done");
