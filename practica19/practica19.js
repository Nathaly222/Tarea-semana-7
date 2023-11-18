'use strict'
function calculateAge(year){
    let currentYears = 2023;
    let age = currentYears - year;
    alert(age)
}
let yearOfBirth = Number(prompt("Ingrece year of birth"));
calculateAge(yearOfBirth);