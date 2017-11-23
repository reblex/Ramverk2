var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('home', {
        title: 'Hem',
        path: '/'
    });
});

/* GET about page. */
router.get('/om', function(req, res) {
    res.render('about', {
        title: 'Om',
        path: '/om'
    });
});

router.get("/redovisningar", (req, res) => {
    res.render("report", {
        title: 'Redovisningar',
        path: '/redovisningar',
    });
});

router.get("/projektinfo", (req, res) => {
    res.render("projectinfo", {
        title: 'Projektinfo',
        path: '/projektinfo',
    });
});


module.exports = router;
