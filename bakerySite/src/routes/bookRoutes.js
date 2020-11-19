const express = require('express');
const bookRouter = express.Router();

bookRouter.route('/')
    .get((req, res) => {
        res.render('menu', 
        {
            nav: [
                {link:'/', title:"HOME"},
                {link:'/menu', title:"MENUS"}, 
                {link:'/story', title:"OUR STORY"},
                {link:'/info', title:"INFO"}]
        }
        );
    });

module.exports = bookRouter; 
