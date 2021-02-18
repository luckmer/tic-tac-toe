const button = document.querySelector(".button");
const panels = document.querySelectorAll(".panel");
const result = document.querySelector(".result");

let winposition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

let states = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameOn = true;

const Play = (i) => {
    if (gameOn === true && i) {
        let id = i.id;
        if (states[id] !== "") return;
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        result.innerHTML = currentPlayer === "O" ? "X" : "O";
        states[id] = currentPlayer;
        i.innerHTML = currentPlayer;
    }
    CalculateWinner(states);
};

const CalculateWinner = (states) => {
    winposition.forEach((i) => {
        const [a, b, c] = i;
        if (states[a] && states[a] === states[b] && states[a] === states[c]) {
            result.innerHTML = "winner " + states[a];
            gameOn = false;
        } else {
            Draw(states);
        }
    });
};

const Draw = (states) => {
    if (!states.includes("") && result) {
        result.innerHTML = "DRAW";
        gameOn = false;
    }
};

const Reset = () => {
    if (gameOn === false) {
        states = ["", "", "", "", "", "", "", "", ""];
        panels.forEach((panel) => (panel.innerHTML = ""));
        result.innerHTML = "";
        gameOn = true;
    }
};

if (button) {
    button.addEventListener("click", Reset);
}

panels.forEach((i) => {
    if (gameOn === true) i.addEventListener("click", () => Play(i));
});

exports.Draw = Draw;
exports.Play = Play;
exports.winposition = winposition;
exports.states = states;
exports.currentPlayer = currentPlayer;
exports.gameOn = gameOn;
