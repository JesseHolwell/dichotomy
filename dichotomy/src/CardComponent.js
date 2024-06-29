// src/CardComponent.js

import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import './CardComponent.css'; // We'll create this CSS file for custom styles
const card = require('./card.png');

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
        $('#word-card').click(() => {
            $(".help-text").hide();
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
                            <div className="card-background"><img src={card} className="card-image"/></div>
                            <div className="card-body">
                                <h5 className="card-title" id="word-pair">
                                    <span className="word word1">{currentPair.word1}</span><span className="word word2">{currentPair.word2}</span>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div>
                        <span class="help-text">tap the card</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardComponent;