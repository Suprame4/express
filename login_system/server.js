const { resolveNaptr } = require('dns');
const express = require('express');
const path = require('path');
const

const app = express();
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index.ejs')
    res.end;
})
app.get('/login', (req, res) => {
    res.render('login.ejs');
})

app.get('/register', (req, res) =>{
    res.render('register.ejs')
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
});