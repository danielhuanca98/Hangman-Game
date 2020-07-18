// HTTP (Hypertext Transfer Protocol)
// Request - What do we want to do
// Response - What was actually done

let game1
const wordHeader = document.querySelector('#word')
const remaining = document.querySelector('#remaining')


window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.guess(guess)
    render()
})

const render = () => {
    remaining.textContent = game1.statusMessage
    wordHeader.innerHTML = ''
    game1.puzzle.split('').forEach((letter) => {
        const letterSpan = document.createElement('span')
        letterSpan.textContent = letter
        wordHeader.appendChild(letterSpan)
    })
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()






