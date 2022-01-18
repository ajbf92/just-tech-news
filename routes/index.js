const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);
// if we make a request to any endpoint that doesn't exist
// we have requested an incorrect resource
router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;