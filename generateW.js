import { Worker } from "worker_threads";

export const generateW = (header, filePath, fileSizeInBytes) => {
  return new Promise((resolve, reject) => {
    const start = Date.now();
    const worker = new Worker("./worker.js", {
      workerData: {
        header,
        filePath,
        fileSizeInBytes,
      },
    });

    worker.once("message", (data) => {
      console.log(`worker [${worker.threadId}]: done in ${Date.now() - start}`);
      resolve("done");
    });

    worker.once("error", (err) => reject(err));
  });
};
