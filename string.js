let str = prompt("Enter a String")
document.write("Entered string is: " + str + " <br>")
function Reversestring(str) {
    return str.split('').reverse().join('')
}
function checkPalindrome(str) {

    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

document.write("Reverse string is: " + Reversestring(str))
document.write(" <br> " + checkPalindrome(str))