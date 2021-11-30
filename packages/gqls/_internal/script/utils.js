const {spawn} = require('child_process');
const baseRimraf = require('rimraf');

/**
 * rm -rf
 * @param {string | PathLike} path
 */
exports.rimraf = (path) => {
  return new Promise((resolve, reject) => {
    baseRimraf(path, {silent: true}, (err) => {
      if (err) {
        return reject();
      }

      return resolve();
    });
  });
};

/**
 * Run shell command and pipe it's stdout
 * @param {string} command
 * @param {Array<string>} options
 */
exports.runCommand = (command, options) => {
  return new Promise((resolve, reject) => {
    const child = spawn(command, options);
    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stdout);
    child.on('close', (code) => {
      console.log(`child process exited with code ${code}`);
      if (code > 0) {
        return reject();
      }

      return resolve();
    });
  });
};
