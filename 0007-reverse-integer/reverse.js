const reverse = (x) => {
    if (x === 0) return 0

    const maxInteger = Math.pow(2, 31) - 1
    const minInteger = -Math.pow(2, 31)
    const isNegative = x < 0

    x = Math.abs(x)
    let result = null

    while(Math.abs(x) >= 1) {
        let remainder = x % 10
        x = Math.floor(x / 10)

        if (result === null) {
            result = remainder === 0 ? result : remainder
        } else {
            result = result * 10 + remainder
        }
    }

    result = isNegative ? -result : result

    if(result > maxInteger || result < minInteger) return 0
    return result
};

console.log(reverse(1534236469))
console.log(reverse(1200))