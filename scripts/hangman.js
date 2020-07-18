class Hangman {
    constructor (word, guesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = guesses
        this.guessed = []
        this.status = 'playing' 
    }
    get puzzle() { 
        let word = ''
        this.word.forEach((letter) => {
            if (this.guessed.includes(letter) || letter === ' ') {
                word += letter
            } else {
                word += '*'
            }
        })
        return word
    }
    guess(char) {
        if (!this.status === 'playing') {
            return
        }
        char = char.toLowerCase()
        const isUnique = !this.guessed.includes(char)
        const isBadGuess = !this.word.includes(char)
    
        if (isUnique) {
            this.guessed.push(char)
        }
    
        if (isUnique && isBadGuess) {
            this.remainingGuesses--
        }
        this.calcStatus()
    }
    calcStatus() {
        let completed = true
        this.word.forEach((letter) => {
            if (!this.guessed.includes(letter) && letter !== ' ') {
                completed = false
            }
        })
    
        if (this.remainingGuesses < 1) {
            this.status = 'failed'
        } else if (completed) {
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }
        console.log(this.status)
    }
    get statusMessage() {
        if (this.status === 'playing') {
            return `Guesses left: ${this.remainingGuesses}.`
        } else if(this.status === 'failed') {
            return `Nice try! The word was "${this.word.join('')}".`
        } else {
            return 'Great work! You guessed the word.'
        }
    }
}

 

