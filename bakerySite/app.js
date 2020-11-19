const express = require('express');
const path = require('path');

const app = express();


app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')))


//setting up ejs
app.set('views', './src/views')
app.set('view engine', 'ejs');

const bookRouter = require('./src/routes/bookRoutes')
app.use('/menu', bookRouter); 

const storyRouter = require('./src/routes/storyRoutes');
app.use('/story', storyRouter);

const infoRouter = require('./src/routes/infoRoutes');
app.use('/info', infoRouter);

app.get('/', (req, res) => {
    //res.sendFile(path.join(__dirname, '/views/index.html'));
    res.render('index', 
    
    {
        nav: [
            {link:'/', title:"HOME"},
            {link:'/menu', title:"MENUS"}, 
            {link:'/story', title:"OUR STORY"},
            {link:'/info', title:"INFO"}]
    
    
    })
})

app.listen(3000, () => {
    console.log('Server listening on port 3000');
})