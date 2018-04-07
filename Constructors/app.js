console.log("hello world");

var Person = function (firstName, lastName, address, hairColor, eyeColor) {

    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.hairColor = hairColor;
    this.eyeColor = eyeColor

    this.fullName = function () {
        return this.firstName + " " + this.lastName;
    };


}

var Brooke = new Person("Brooke", "Bezoza", "New York", "brown", "brown")
var Sakina = new Person("Sakina", "Shivji", "Tampa", "brown", "black")

console.log(Brooke, Brooke.fullName())
console.log(Sakina.fullName())

// Adding it to the body of page using jquery
$("body").text("Full Names: " +  Brooke.fullName() + " " + Sakina.fullName())
