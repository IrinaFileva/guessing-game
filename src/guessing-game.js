class GuessingGame {
    constructor() {
        this.max;
        this.min;
    }

    setRange(min, max) {
        this.max = max;
        this.min = min;
    }

    guess() {
        return this.candidate = Math.ceil((this.min + this.max) / 2)
    }

    lower() {
        this.max = this.candidate
    }

    greater() {
        this.min = this.candidate
    }
}

module.exports = GuessingGame;
