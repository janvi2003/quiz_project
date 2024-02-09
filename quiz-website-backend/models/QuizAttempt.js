const mongoose = require('mongoose');

const quizAttemptSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    quizName: { type: String, required: true },
    time: { type: Date, default: Date.now },
    score: { type: Number, required: true },
    correctAnswers: { type: Number, required: true }
});

const QuizAttempt = mongoose.model('QuizAttempt', quizAttemptSchema);

module.exports = QuizAttempt;
