const fs = require('fs');

// Read a file

function readFile(filePath) {

  fs.readFile(filePath, (err, data) => {

    if (err) {

      console.error(err);

      return;

    }

    console.log(data);

  });

}

// Write to a file

function writeFile(filePath, data) {

  fs.writeFile(filePath, data, err => {

    if (err) {

      console.error(err);

      return;

    }

    console.log('File saved');

  });

}

// Delete a file

function deleteFile(filePath) {

  fs.unlink(filePath, err => {

    if (err) {

      console.error(err);

      return;

    }

    console.log('File deleted');

  });

}

