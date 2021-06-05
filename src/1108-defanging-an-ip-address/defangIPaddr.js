// https://leetcode.com/problems/defanging-an-ip-address/

function defangIPaddr(address) {
    let result = ''

    for (const s of address) {
        if (s === '.') {
            result += '[.]'
        } else {
            result += s
        }
    }

    return result
}
