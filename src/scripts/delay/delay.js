function delay(delay, message) {
    return new Promise(function(resolve, reject){
        setTimeout(() => resolve(message), delay)
    })
} 

module.exports = delay