const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const myDate = require(`${__dirname}/data.js`)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"));

app.set('view engine', 'ejs');

var news = [];
let workList = []

app.get('/home', (req, res) => {
    res.render('home')
});


app.get('/work', (req, res) => {
    let day = myDate()
   
    res.render('list', { listItem: myDate(), newItem: workList });
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/services', (req, res) => {
    res.render('services')
})

app.get('/blog', (req, res) => {
    res.render('blog')
})
app.post('/add', (req, res) => {
    const item = req.body.added_item;
    news.push(item);
    res.redirect('/')
})

app.listen(4000, () => console.log('Example app listening on port 4000!'));

