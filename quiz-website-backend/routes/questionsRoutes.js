// questionsRoutes.js
const express = require('express');
const router = express.Router();
const Question = require('../models/Question'); // Import your Question model

// Route to fetch random questions
router.get('/questions', async (req, res) => {
    try {
        const count = parseInt(req.query.count) || 5; // Get the count of questions from query parameter, default to 5
        const questions = await Question.aggregate([{ $sample: { size: count } }]); // Fetch random questions from MongoDB
        res.json(questions);
    } catch (error) {
        console.error('Error fetching questions:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
