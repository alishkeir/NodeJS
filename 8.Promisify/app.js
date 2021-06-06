const { readFile } = require('fs');
const { promisify } = require('util');

readFile('../5.Callback/app.js', 'utf8', (err, data) => {
    if (err) {
        console.log(err)
        return;
    }
    else {
        console.log(data)
    }
});

const read = promisify(readFile);

read('../5.Callback/app.js', 'utf8')
    .then(data => console.log(data))
    .catch(err => console.log(err))