let vowels = ["A", "E", "I", " O", "U"];
var arr = [0, 0, 0, 0, 0];

function getVowels(string) {
    var string = string.toLowerCase();
    for (var i = 0; i <= string.length; i++) {

        //if a vowel, add to vowel count
        if (string.charAt(i) == "a")
            arr[0] = arr[0] + 1;
        if (string.charAt(i) == "e")
            arr[1] = arr[1] + 1;
        if (string.charAt(i) == "i")
            arr[2] = arr[2] + 1;
        if (string.charAt(i) == "o")
            arr[3] = arr[3] + 1;
        if (string.charAt(i) == "u")
            arr[4] = arr[4] + 1;

    }

    return arr;
}
result = getVowels("Hey This is Skillsanta JS Training")
for (var i in vowels)
    document.write(" " + vowels[i] + " " + result[i] + "<br>");


