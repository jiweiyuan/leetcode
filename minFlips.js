//

function minFlips(s) {

}

function getFlipsWith(str, starting) {

}
    function flip(ch)
    {
        return (ch == '0') ? '1' : '0';
    }

    //  Utility method to get minimum flips when
    //  alternate string starts with expected char
    function getFlipWithStartingCharcter(str,expected)
    {
        let flipCount = 0;
        for (let i = 0; i < str.length; i++)
    {
        //  if current character is not expected,
        // increase flip count
        if (str.charAt(i) != expected)
        flipCount++;

        //  flip expected character each time
        expected = flip(expected);
    }
        return flipCount;
    }

    // method return minimum flip to make binary
    // string alternate
    function minFlipToMakeStringAlternate(str)
    {
        //  return minimum of following two
        //  1) flips when alternate string starts with 0
        //  2) flips when alternate string starts with 1
        return Math.min(getFlipWithStartingCharcter(str, '0'),
        getFlipWithStartingCharcter(str, '1'));
    }

console.log(minFlips('01001001101')) // => 2
