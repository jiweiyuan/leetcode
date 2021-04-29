// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/

function kidsWithCandies(candies, extraCandies) {
    const max = Math.max(...candies)

    return candies.reduce((result, candy) => {
        result.push(candy + extraCandies >= max)
        return result
    }, [])
}

console.log(kidsWithCandies([4, 2, 1, 1, 2], 1))