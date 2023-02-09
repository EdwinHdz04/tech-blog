const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogRoutes = require('./blogRouts');
const commentRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);

module.exports = router;
