let dob = prompt("ENTER DOB(in format date/month/year)")
document.write("You entered  your date of birth as " + dob + "<br> ")
let age = prompt("Enter your age")
if (age >= 18 && age <= 44) {
    document.write("You are eligible for vaccination!!hurry up!!<br>")
    var str = "click here for registration"
    var registerat = str.link("https://selfregistration.cowin.gov.in");
    document.write(registerat)
    let today = new Date().toLocaleDateString()

    console.log(today)
}
else
    document.write("you are not eligible to take vaccine")
