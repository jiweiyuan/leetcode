// https://leetcode.com/problems/available-captures-for-rook/

function numRookCaptures(board) {
    let position = findPosition(board)

    let result = 0

    if (canAttackPawns(board, position, 'north')) result++
    if (canAttackPawns(board, position, 'east')) result++
    if (canAttackPawns(board, position, 'west')) result++
    if (canAttackPawns(board, position, 'south')) result++

    return result
}

function findPosition(board) {
    let position
    // find the position of 'R'
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === 'R') {
                position = [i, j]
            }
        }
    }

    return position
}

function canAttackPawns(board, position, direction) {
    let [i, j] = position

    if (direction === 'north') {
        while (i >= 0) {
            if (board[i][j] === 'p') return true
            if (board[i][j] === 'B') return false
            i--
        }
        return false
    }

    if (direction === 'south') {
        while (i <= board.length - 1) {
            if (board[i][j] === 'p') return true
            if (board[i][j] === 'B') return false
            i++
        }
        return false
    }

    if (direction === 'east') {
        while (j <= board[0].length - 1) {
            if (board[i][j] === 'p') return true
            if (board[i][j] === 'B') return false
            j++
        }
        return false
    }

    if (direction === 'west') {
        while (j >= 0) {
            if (board[i][j] === 'p') return true
            if (board[i][j] === 'B') return false
            j--
        }
        return false
    }
}

console.log(numRookCaptures([[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","p",".",".",".","."],["p","p",".","R",".","p","B","."],[".",".",".",".",".",".",".","."],[".",".",".","B",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."]]))
