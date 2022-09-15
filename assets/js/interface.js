document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".bloco")

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })
})

function handleClick(event) {
    let square = event.target;

    let position = square.id;

    if (handleMove(position)) {
        setTimeout(() => {
            alert('GAME OVER')
        }, 10)
        setTimeout(() => {
            reset()
        }, 10)
    }
    updateSquare(position);
}

function updateSquare(position) {
    let square = document.getElementById(position.toString())
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`
}

function updateSquares() {
    let squares = document.querySelectorAll(".bloco")

    squares.forEach((square) => {

        if (symbols != '') {
            square.innerHTML = ''
        }
    });
}

function reset() {
    board = ['', '', '', '', '', '', '', '', ''];
    playerTime = 0;
    gameOver = false;
    updateSquares()
}

// function placar() {
//     let x = document.querySelector('.spanRigth invisible')
//     let o = document.querySelector('.spanleft invisible')

//     if (playerTime == 1) {
//         winner.x.push(1)
//         x.classList.remove('invisible');
//         let num = winner.x.length()
//         x.innerHTML = parseInt(num)
//     }
//     if (playerTime == 0) {
//         winner.o.push(1)
//         o.classList.remove('invisible');
//         let num = winner.o.length()
//         o.innerHTML = num
//     }

//     console.log(winner)
// }