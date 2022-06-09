const deck = {
    cards: [],
    shuffle() {
        for (i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = temp;
        }
    },
    draw() {
        if (this.cards.length == 0) {
            return "No cards to draw";
        }
        return this.cards.shift();
    },
    reset() {
        for (i = 1; i <= 13; i++) {
            this.cards.push({
                suit: "hearts",
                number: i
            })
        }
        for (i = 1; i <= 13; i++) {
            this.cards.push({
                suit: "spades",
                number: i
            })
        }
        for (i = 1; i <= 13; i++) {
            this.cards.push({
                suit: "diamonds",
                number: i
            })
        }
        for (i = 1; i <= 13; i++) {
            this.cards.push({
                suit: "clubs",
                number: i
            })
        }
    }
}


deck.reset();
deck.shuffle();
console.log(deck.cards);
deck.reset();
console.log(deck.cards);
