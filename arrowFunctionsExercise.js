/* 1 Convert this function to an arrow function
function multiplyNumbers(num1, num2) {
    return num1 * num2;
} */

const multiplyNumbers = (num1, num2) => num1 * num2;
console.log(multiplyNumbers(4, 5));

/* 2 Convert this function to an arrow function
function personOver40(person) {
    return person.age > 40;
} */
const personOver40 = person => person.age > 40;
console.log(personOver40(12)); // Output will always be false;

/* 3 Convert this function to an arrow function
function getFullName(person) {
    return `${person.firstName} ${person.lastName}`;
} */
const getFullName = person => `${person.firstName} ${person.lastName}`;
console.log(getFullName("Alex", "Burgess")); // Not working;

/* 4 Convert this function to an arrow function
function getPersonTitle(person) {
    if (person.preferedTitle) {
        return person.preferedTitle;
    } else if (person.gender == "male") {
        return "Mr.";
    } else if (person.gender == "female") {
        if (person.maritalStatus == "married") {
            return "Mrs.";
        } else if (person.maritalStatus == "unmarried") {
            return "Miss";
        } else {
            return "Ms."
        }
    } else {
        return "Mx."
    }
} */
const getPersonTitle = person =>  {
    if (person.preferedTitle) {
        return person.preferedTitle;
    } else if (person.gender == "male") {
        return "Mr.";
    } else if (person.gender == "female") {
        if (person.maritalStatus == "married") {
            return "Mrs.";
        } else if (person.maritalStatus == "unmarried") {
            return "Miss";
        } else {
            return "Ms."
        }
    } else {
        return "Mx."
    }
}
console.log(getPersonTitle()); // Not working;