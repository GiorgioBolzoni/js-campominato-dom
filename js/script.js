/*
al click su btn
generare 64 quadratini

al click sul quadratino lo sfondo del quadratino stesso deve diventare verde

*/


/* 
<div class="square"></div> 
*/
"use strict";


const select = document.querySelector('select')
const option = document.querySelector('option')
const easy = document.getElementById('easy')
const medium = document.getElementById('medium')
const hard = document.getElementById('hard')





const btn = document.querySelector('button');
let numSquare;
const totalBombs = 16;
const bombsList = [];

let score = 0;
let scoreCounter = document.querySelector('.score-counter');
let maxScore = numSquare - totalBombs;

btn.addEventListener('click', function () {

    if (btn.classList.contains('btn-clicked')) location.reload();
    // if (btn.classList.contains('btn-clicked')) return; per impedire di ricliccare


    //numero di quadratini da generare
    if (easy.selected) {
        numSquare = 100;
    } else if (medium.selected) {
        numSquare = 81;
    } else if (hard.selected) {
        numSquare = 49;
    };

    // Generare TOT bombe casuali
    while (bombsList.length < totalBombs) {
        const number = Math.floor(Math.random() * numSquare) + 1;
        if (!bombsList.includes(number)) bombsList.push(number);
    }
    console.log(bombsList);

    // mi prendo la griglia di gioco
    const playground = document.getElementById('playground');
    //ciclo per stampare i quadratini


    for (let i = 1; i <= numSquare; i++) {
        //genero quadratino
        let square = drawSquare(i, numSquare);
        // console.log(square);

        //appendo il quadratino alla griglia (playground)
        playground.append(square);
        btn.classList.add('btn-clicked');

        function drawSquare(i, numSquare) {
            let squareWidth = Math.sqrt(numSquare);
            // console.log(squareWidth);
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.width = `calc(100% / ${squareWidth})`;
            square.style.height = `calc(100% / ${squareWidth})`;
            square.innerHTML = i;
            square.addEventListener('click', function () {
                // ! Controllo che la cella non sia stata già cliccata
                if (square.classList.contains('active')) return;
                // console.log(this)
                square.style.color = 'black';

                if (bombsList.includes(i)) {
                    // Se è una bomba....
                    square.classList.add('square-bomb');
                    revealAllBombs();

                } else {
                    // Se non lo è...
                    square.classList.add('active');
                    updateScore();
                }
            });
            return square;
        };
    };
});


// Funzione per aggiornare il punteggio
function updateScore(i) {

    score++;
    // Lo inserisco nel contatore
    scoreCounter.innerHTML = String(score).padStart(5, 0);
    // if (score === maxScore) return;
}
// // Funzione che rivela tutte le bombe
function revealAllBombs() {
    // Recupero tutte le celle
    const square = document.querySelectorAll('.square');
    for (let i = 1; i <= square.length; i++) {
        //controllo se la cella è una bomba
        if (bombsList.includes(i)) {
            const squareToReveal = square[i - 1];
            squareToReveal.classList.add('square-bomb');
        }
    }
}




