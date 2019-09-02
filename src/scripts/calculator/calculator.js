module.exports = {
    read:function(...numbers)
    {
        numbers.forEach(element => {
            if(isNaN(element))
            {
                throw new TypeError("not a Number! --> NaN found")
            }
        });
        this.numbers = numbers
    },

    sum:function()
    {
        let sum = 0
        this.numbers.forEach(element => {
            sum += Number(element)
        });
        return sum
    },

    mul:function()
    {
        let product = 1
        this.numbers.forEach(element => {
            product *= Number(element)
        });
        return product
    }
};
