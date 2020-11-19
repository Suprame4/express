const express = require('express');
const storyRouter = express.Router();

storyRouter.route('/')
    .get((req, res) => {
        res.render('story', 
        {
            nav: [
                {link:'/', title:"HOME"},
                {link:'/menu', title:"MENUS"}, 
                {link:'/story', title:"OUR STORY"},
                {link:'/info', title:"INFO"}]
        }
        );
    });

module.exports = storyRouter; 
