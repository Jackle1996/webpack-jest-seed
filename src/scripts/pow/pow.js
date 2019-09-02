function pow(a,b) {
    let result = 0
    for(i=0; i < b; i++) {
        if (result == 0) {
            result = a
        }
        else {
            result *= a
        }
    }
    return result
}

module.exports = pow 