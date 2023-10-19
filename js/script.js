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
// const scoreCounter = document.querySelector('.score-counter');
// const endGameScreen = document.querySelector('.end-game-screen');
// const endGameText = document.querySelector('.end-game-text');

// btn.addEventListener('click', play);






const btn = document.querySelector('button');

btn.addEventListener('click', function () {

    if (btn.classList.contains('btn-clicked')) location.reload();
    // if (btn.classList.contains('btn-clicked')) return; per impedire di ricliccare

    //numero di quadratini da generare
    let numSquare;

    if (easy.selected) {
        numSquare = 100;
    } else if (medium.selected) {
        numSquare = 81;
    } else if (hard.selected) {
        numSquare = 49;
    };


    // // Genero TOT bombe casuali
    const totalBombs = 16;
    const bombsList = [];
    while (bombsList.length <= totalBombs) {
        let bomb = getRndInteger(1, numSquare);
        for (let i = 0; i < bombsList.length; i++) {
            if (bombsList[i] !== bomb) {
                bombsList.push(bomb);
            }
        }
    }
    console.log(bombsList);
    // oppure
    // switch (level) {
    //     case 'medium':
    //         numSquare = 81;
    //         break;
    //     case 'hard':
    //         numSquare = 49;
    //         break;
    //     default:
    //         numSquare = 100;
    // }


    // mi prendo la griglia di gioco
    const playground = document.getElementById('playground');
    //ciclo per stampare i quadratini

    for (let i = 0; i < numSquare; i++) {
        //genero quadratino
        let square = drawSquare(i, numSquare);
        // console.log(square);

        //appendo il quadratino alla griglia (playground)
        playground.append(square);
        btn.classList.add('btn-clicked');
    };
    function drawSquare(squareIndex, numSquare) {
        let squareWidth = Math.sqrt(numSquare);
        // console.log(squareWidth);
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `calc(100% / ${squareWidth})`;
        square.style.height = `calc(100% / ${squareWidth})`;
        square.innerHTML = squareIndex + 1;
        square.addEventListener('click', function () {
            square.classList.add('active');
            console.log(this)
            square.style.color = 'black';
        });

        return square;
    };
});

