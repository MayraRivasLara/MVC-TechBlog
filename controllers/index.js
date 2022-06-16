const router = require('express').Router();

const {router: homeRoute} = require('./web/home');

router.use(homeRoute);


module.exports = router;