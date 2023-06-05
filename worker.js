import { workerData, parentPort } from "worker_threads";
import { generateTextFile } from "./lib/generateTextFile.js";

const { header, filePath, fileSizeInBytes } = workerData;

function gen(param) {
  generateTextFile(header, filePath, fileSizeInBytes);
}

gen();

parentPort.postMessage("done");
