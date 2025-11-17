// ❓Write a function that checks if a given string (case insensitive) is a palindrome.
//
//     A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

//✅SOLUTION:
function isPalindrome(x) {
    x = x.toLocaleLowerCase();
    for (let i = 0; i < x.length / 2; i++) {
        if (x[i] !== x[x.length - 1 - i]) return false;
    }
    return true;
}

console.log(isPalindrome("racecar"));