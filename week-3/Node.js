const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/getData', (req, res) => {
    const number = req.query.number;
    let dataMessage;
    if (!number) {
        dataMessage = "Lack of paramas.";
    } else if (isNaN(number)) {
        dataMessage = "Wrong Parameter";
    } else {
        var answer = 0;
        for (var i = 0; i < number; i += 1) {
            answer += i + 1;
        };
        dataMessage = "The answer is " + answer;
    };
    res.render('getData', { dataMessage });
});

app.get('/myName', (req, res) => {
    const name = req.cookies.name;
    if (name) {
        res.render('myName',{name});
    } else {
        res.redirect('/trackName');
    }
})

app.get('/trackName', (req, res) => {
    const name = req.query.name;
    res.cookie('name',req.query.name);
    if (name) {
        res.redirect('/myName')
    } else {
        res.render('trackName')
    }
});

app.post('/trackName', (req, res) => {
    res.cookie('name',req.body.username)
    res.redirect('/myName');
})


app.listen(3000, () => {
    console.log('The application is running on localhost:3000')
});