// Code your solution in this file!
//function 'returnFirstTwoDrivers' and assign anonymous function
//assigned function should accept an array of drivers as an argument 
//and return the FIRST TWO drivers in the array
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = function(arrayDrivers){
    return (arrayDrivers.slice(0,2))
    }
 //returns the LAST TWO drivers in array   
const  returnLastTwoDrivers = function (arrayDrivers){
    return (arrayDrivers.slice(-2))
}

//array containing two elements: previously defined returnFirstTwoDrivers() and returnLastTwoDrivers()
const selectingDrivers =[returnFirstTwoDrivers,returnLastTwoDrivers]

// higher-order function with one argument being an integer
//i.e receives an argument of 4, it will return a function that takes in a fare as an argument and quadruples the fare
const createFareMultiplier = function(numberInteger){
        return function(fare){
          return fare * numberInteger
        }
    }

// Invoke createFareMultiplier() st; function accepts a fare as its lone argument and doubles it
const fareDoubler = createFareMultiplier(2)

//Invoke createFareMultiplier() st; the new fareTripler() function accepts a fare as its lone argument and triples it
const fareTripler = createFareMultiplier(3)
    
//function takes 2 arguments i.e; an array of drivers and either the returnFirstTwoDrivers() or returnLastTwoDrivers() function
//return either the first two drivers or the last two drivers
const selectDifferentDrivers = function (arrayOfDrivers, driversToReturn) {
        return driversToReturn(arrayOfDrivers)
      }