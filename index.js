const express = require('express');
const path = require('path');
const app = express();


// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, './'));
// })

app.use('/',express.static(path.join(__dirname, 'build')));

app.listen(1031, () => console.log('started on port 1031'));