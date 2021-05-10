let num1 = prompt("Enter number 1")
let num2 = prompt("Enter number 2")
let num3 = prompt("Enter number 3")
try {
    if (num1 > num2 && num1 > num3) {
        document.write(num1 ? "The Greatest num is " + num1 : " ")
    }

    else if (num2 > num3) {
        document.write(num2 ? "The Greatest num is " + num2 : " ")
    } else {
        document.write(num3 ? "The Greatest num is " + num3 : " ")

    }
}
catch (e) {
    document.write("error: " + e);
}