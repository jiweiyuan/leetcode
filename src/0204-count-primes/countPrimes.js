// https://leetcode.com/problems/count-primes/

function countPrimes(n) {
    if (n <= 2) return 0

    let nums = new Array(n).fill(true)
    nums[0] = false
    nums[1] = false

    // count the primes less math.sqrt(n)
    let primes = []

    for (let i = 2; i * i < n; i++) {
       if (isPrime(i)) primes.push(i)
    }

    // Sieve of Eratosthenes
   for (let prime of primes) {
       let i = 2
       while (i * prime < n) {
           nums[i * prime] = false
           i++
       }
   }

   return nums.filter(num => num).length
}

function isPrime(num) {
    if (num < 1) return false

    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false
    }

    return true
}

console.log(countPrimes(100000)) // => 4
