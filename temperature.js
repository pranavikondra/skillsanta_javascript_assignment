function cToF(t1) {
    var cTemp = t1;
    var cToFahr = cTemp * 9 / 5 + 32;
    document.write("temperature in celsius is  " + cTemp + " \xB0C  when converted to fahrenheit is " + cToFahr + " \xB0F ")
}

function fToC(t2) {
    var fTemp = t2;
    var fToCel = (fTemp - 32) * 5 / 9;
    document.write("<br> temperature in fahrenheit is  " + fTemp + " \xB0F  when converted to celsius is " + fToCel + " \xB0C ")

}
let t1 = prompt("Enter temperature in celsius")
let t2 = prompt("Enter temperature in fahrenheit")
cToF(t1);
fToC(t2);