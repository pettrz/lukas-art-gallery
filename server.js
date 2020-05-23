require('./server/index.js');

const express = require('express');
const multer = require('multer');
const upload = multer({ dest: __dirname + '/uploads/images' });

const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.post('/upload', upload.single('photo'), (req, res) => {
    console.log("whaello")
    if (req.file) {
        console.log("shello")
        res.json(req.file);
        res.redirect("./pages/index.js")
    } else throw 'error';
});

app.listen(PORT, () => {
    console.log('Listening at ' + PORT);
});