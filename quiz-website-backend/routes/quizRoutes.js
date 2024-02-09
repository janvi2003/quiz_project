const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');

router.get('/attempts', quizController.getAttempts);
router.post('/attempt', quizController.addAttempt);
router.get('/questions', quizController.getQuestions);

module.exports = router;
