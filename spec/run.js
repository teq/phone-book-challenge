const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const chaiHttp = require('chai-http');
const fs = require('fs');
const Mocha = require('mocha');
const path = require('path');

// Register chai plugins
chai.use(chaiAsPromised);
chai.use(chaiHttp);

function listFilesRecursive(fname) {
    let files = [];
    const stat = fs.lstatSync(fname);
    if (stat.isFile()) {
        files.push(fname);
    } else if (stat.isDirectory()) {
        fs.readdirSync(fname).forEach(nested => {
            files = files.concat(listFilesRecursive(path.join(fname, nested)));
        });
    }
    return files;
}

let mocha = new Mocha({ reporter: 'spec', timeout: 10000 });

// Search for spec files recursively
listFilesRecursive(__dirname)
    .filter(fname => fname.endsWith('spec.js'))
    .forEach(fname => mocha.addFile(fname));

mocha.run(failureCount => {
    process.exitCode = failureCount > 0 ? 1 : 0;
});
