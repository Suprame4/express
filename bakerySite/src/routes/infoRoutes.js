const express = require('express');
const infoRouter = express.Router();

infoRouter.route('/')
    .get((req, res) => {
        res.render('info', 
        {
            nav: [
                {link:'/', title:"HOME"},
                {link:'/menu', title:"MENUS"}, 
                {link:'/story', title:"OUR STORY"},
                {link:'/info', title:"INFO"}]
        }
        );
    });

module.exports = infoRouter; 