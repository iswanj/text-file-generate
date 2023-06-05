import { Worker } from "worker_threads";

const directoryPath = "files/worker_thread";

export const generateW = (header, filePath, fileSizeInBytes) => {
  return new Promise((resolve, reject) => {
    const start = Date.now();
    const worker = new Worker("./worker.js", {
      workerData: {
        header,
        directoryPath,
        filePath,
        fileSizeInBytes,
      },
    });

    worker.once("message", (data) => {
      console.log(`worker [${worker.threadId}]: generate file done in [${Date.now() - start}ms]`);
      resolve("done");
    });

    worker.once("error", (err) => reject(err));
  });
};
