// https://leetcode.com/problems/count-items-matching-a-rule/

function countMatches(items, ruleKey, ruleValue) {
    const itemKeys = ['type', 'color', 'name']

    let index = itemKeys.findIndex(key => key === ruleKey)

    let matchedArray = items.filter(item => item[index] === ruleValue)

    return matchedArray.length
}

const items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"

console.log(countMatches(items, ruleKey, ruleValue))
