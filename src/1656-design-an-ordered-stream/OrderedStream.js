// https://leetcode.com/problems/design-an-ordered-stream/

class OrderedStream {
    constructor(n) {
        this.map = new Map()
        this.length = n
        this.ptr = 1
    }

    insert(idKey, value) {
        this.map.set(idKey, value)

        let result = []
        while (this.map.get(this.ptr)) {
            result.push(this.map.get(this.ptr))
            this.ptr++
        }

        return result
    }
}

 os = new OrderedStream(5);
console.log(os.insert(3, "ccccc")); // Inserts (3, "ccccc"), returns [].
console.log(os.insert(1, "aaaaa")); // Inserts (1, "aaaaa"), returns ["aaaaa"].
console.log(os.insert(2, "bbbbb")); // Inserts (2, "bbbbb"), returns ["bbbbb", "ccccc"].
console.log(os.insert(5, "eeeee")); // Inserts (5, "eeeee"), returns [].
console.log(os.insert(4, "ddddd")); // Inserts (4, "ddddd"), returns ["ddddd", "eeeee"].