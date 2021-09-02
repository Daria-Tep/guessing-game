class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() { // поиск центра диапазона

        this.center = Math.ceil((this.max + this.min) / 2);
        return this.center;
    }

    lower() { // если центр больше ответа, идти влево
        this.max = this.center; //центр становится максимальным значением 

    }

    greater() { // если центр меньше ответа, идти 
        this.min = this.center; //центр становится минимальным значением
    }

}

module.exports = GuessingGame;