function Ladder(){
    this.step = 0;

    this.up = function() {
        this.step++;
        return this;
    },

    this.down = function() {
        this.step--;
        return this;
    },

    this.currentStep = function() {
        return this.step;
    }
}

module.exports = Ladder