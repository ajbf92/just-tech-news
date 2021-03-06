// using the index.js file to collect all of the API routes and package them up for us.
const router = require('express').Router();

const userRoutes = require('./user-routes.js');

router.use('/users', userRoutes);

module.exports = router;