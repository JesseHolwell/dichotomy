// src/CardComponent.js

import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import './CardComponent.css'; // We'll create this CSS file for custom styles

const wordPairs = [
    {"word1": "Introvert", "word2": "Extrovert"},
    {"word1": "Optimist", "word2": "Pessimist"},
    {"word1": "Thinker", "word2": "Feeler"},
    {"word1": "Planner", "word2": "Spontaneous"},
    {"word1": "Confident", "word2": "Shy"}
];

function getRandomPair() {
    const randomIndex = Math.floor(Math.random() * wordPairs.length);
    return wordPairs[randomIndex];
}

const CardComponent = () => {
    const [currentPair, setCurrentPair] = useState(getRandomPair());

    useEffect(() => {
        $('#next-button').click(() => {
            $('#word-card').addClass('slide-up');
            
            setTimeout(() => {
                $('#word-card').removeClass('slide-up');
                setCurrentPair(getRandomPair());
            }, 600);
        });
    }, []);

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card-container">
                        <div className="card text-center" id="word-card">
                            <div className="card-body">
                                <h5 className="card-title" id="word-pair">
                                    <span className="word1">{currentPair.word1}</span> - <span className="word2">{currentPair.word2}</span>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-primary mt-3" id="next-button">Next</button>
                </div>
            </div>
        </div>
    );
};

export default CardComponent;