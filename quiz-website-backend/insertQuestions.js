require('dotenv').config(); 
const mongoose = require('mongoose');
const Question = require('./models/Question');

// Connect to MongoDB
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        // Define questions to insert
        const questions = [
            {
                questionText: "What is the capital of France?",
                options: ["London", "Paris", "Berlin", "Madrid"],
                correctOption: 1 // Paris
            },
            {
                questionText: "What is the largest planet in our solar system?",
                options: ["Mars", "Jupiter", "Venus", "Saturn"],
                correctOption: 1 // Jupiter
            },
            {
                questionText: "Who wrote the play 'Romeo and Juliet'?",
                options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
                correctOption: 0 // William Shakespeare
            },
            {
                questionText: "What is the chemical symbol for water?",
                options: ["Wa", "H2O", "O2", "CO2"],
                correctOption: 1 // H2O
            },
            {
                questionText: "Which country is known as the 'Land of the Rising Sun'?",
                options: ["China", "Japan", "South Korea", "Thailand"],
                correctOption: 1 // Japan
            },
            {
                questionText: "What is the square root of 144?",
                options: ["12", "14", "16", "18"],
                correctOption: 0 // 12
            },
            {
                questionText: "Who painted the Mona Lisa?",
                options: ["Leonardo da Vinci", "Michelangelo", "Pablo Picasso", "Vincent van Gogh"],
                correctOption: 0 // Leonardo da Vinci
            },
            {
                questionText: "What is the tallest mountain in the world?",
                options: ["Mount Kilimanjaro", "Mount Everest", "Mount Fuji", "Mount McKinley"],
                correctOption: 1 // Mount Everest
            },
            {
                questionText: "What is the capital of Japan?",
                options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
                correctOption: 2 // Tokyo
            },
            {
                questionText: "Who is the author of 'To Kill a Mockingbird'?",
                options: ["Harper Lee", "J.K. Rowling", "George Orwell", "Ernest Hemingway"],
                correctOption: 0 // Harper Lee
            },
            {
                questionText: "What is the chemical symbol for gold?",
                options: ["Go", "Au", "Ag", "Pt"],
                correctOption: 1 // Au
            },
            {
                questionText: "In which year did the Titanic sink?",
                options: ["1908", "1912", "1920", "1930"],
                correctOption: 1 // 1912
            },
            {
                questionText: "Who discovered penicillin?",
                options: ["Alexander Fleming", "Marie Curie", "Albert Einstein", "Isaac Newton"],
                correctOption: 0 // Alexander Fleming
            },
            {
                questionText: "What is the largest ocean on Earth?",
                options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
                correctOption: 2 // Pacific Ocean
            },
            {
                questionText: "Who is known as the father of computers?",
                options: ["Bill Gates", "Steve Jobs", "Alan Turing", "Tim Berners-Lee"],
                correctOption: 2 // Alan Turing
            },
            {
                questionText: "What is the chemical symbol for oxygen?",
                options: ["O2", "O3", "Ox", "Oh"],
                correctOption: 0 // O2
            },
            {
                questionText: "Who is the Greek god of the sea?",
                options: ["Zeus", "Apollo", "Poseidon", "Hades"],
                correctOption: 2 // Poseidon
            },
            {
                questionText: "What is the capital of Brazil?",
                options: ["Rio de Janeiro", "Brasília", "São Paulo", "Buenos Aires"],
                correctOption: 1 // Brasília
            },
            {
                questionText: "What is the boiling point of water in Celsius?",
                options: ["100°C", "0°C", "50°C", "200°C"],
                correctOption: 0 // 100°C
            },
            {
                questionText: "Who was the first man to walk on the moon?",
                options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Alan Shepard"],
                correctOption: 0 // Neil Armstrong
            }
        ];

        // Insert questions into the database
        Question.insertMany(questions)
            .then(() => console.log('Questions inserted successfully'))
            .catch(err => console.error('Error inserting questions:', err))
            .finally(() => mongoose.connection.close());
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB:', err);
    });
