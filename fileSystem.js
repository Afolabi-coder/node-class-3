const fs = require('fs');

const path = require('path');

const readFilePromise = (pathToFile) => {
  return new Promise((resolve, reject) => {
    return fs.readFile(pathToFile, 'utf-8', (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

const writeFilePromise = (pathToFIle, dataToWrite) =>
  new Promise((resolve, reject) => {
    return fs.writeFile(pathToFIle, dataToWrite, (err) => {
      if (err) reject(err);
      resolve('File written to ...');
    });
  });

// readFilePromise('./one.txt')
//   .then((result) => {
//     return writeFilePromise('./li.txt', result);
//   })
//   .then(() => {
//     return readFilePromise('./li.txt');
//   })
//   .then((result3) => console.log(result3))
//   .catch((err) => console.log(err));

const files = async () => {
  try {
    const dataOne = await readFilePromise('./un.txt');
    const newFile = await writeFilePromise('./afile.txt', dataOne);
    const dataTwo = await readFilePromise('./afile.txt');
    console.log('file two: \n ', dataTwo);
    console.log(newFile);
  } catch (error) {
    console.log(error);
  }
};

files();

// console.log('...about to read a file');
// fs.readFile(path.join(__dirname, '/one.txt'), 'utf-8', (err, dataOne) => {
//   if (err) throw err;
//   console.log(dataOne);

//   fs.writeFile('./two.txt', dataOne, (err) => {
//     if (err) throw err;
//     console.log('...file has been written to');

//     fs.readFile(path.join(__dirname, '/two.txt'), 'utf-8', (err, dataTwo) => {
//       if (err) throw err;
//       console.log(dataTwo);
//     });
//   });
// });
// console.log('..file read');
