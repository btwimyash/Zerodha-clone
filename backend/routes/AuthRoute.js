const { Signup, Login, userVerification } = require('../controllers/AuthController');
const router = require('express').Router();

router.post('/signup', Signup);
router.post('/login', Login);
router.post('/verify', userVerification);

module.exports = router;
