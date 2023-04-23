const { exec } = require('child_process');

const dir1 = './Dashboard';
const dir2 = './client/my-app';
const dir3 = './miner'
const dir4 = './prices'
const dir5 = './balance'

exec(`cd ${dir1} && nodemon app.js`, (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stdout);
});

exec(`cd ${dir2} && npm start`, (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stdout);
});

exec(`cd ${dir3} && nodemon main.js`, (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stdout);
});

exec(`cd ${dir4} && npm start`, (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stdout);
});

exec(`cd ${dir5} && nodemon main.js`, (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
  });