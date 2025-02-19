const fs = require("fs-extra");

async function createFolder(folderName) {
  await fs.ensureDir(folderName);
}

async function createFile(folderName, fileName, content) {
  await fs.outputFile(`${folderName}/${fileName}`, content);
}

async function moveFile(src, dest) {
  await fs.move(src, dest);
}

async function copyFile(src, dest) {
  await fs.copy(src, dest);
}

async function removeFile(filePath) {
  await fs.remove(filePath);
}

async function removeFolder(folderName) {
  await fs.remove(folderName);
}

async function main() {
  await createFolder("folder1");
  await createFile("folder1", "file.txt", "Hello, World!");
  await createFolder("folder2");
  await moveFile("folder1/file.txt", "folder2/file.txt");
  await createFolder("folder3");
  await copyFile("folder2/file.txt", "folder3/file.txt");
  await removeFile("folder2/file.txt");
  await removeFolder("folder1");
  await removeFolder("folder2");
  await removeFolder("folder3");
}

main().catch(console.error);
