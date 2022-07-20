const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000', // 9%
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500', // 6%
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750', // 14% but needs to be bumped down to 13%
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000', // no bonus
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000', // no bonus 
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );
console.log('LOOK HERE');
function bonus (array){
//let newObject = {};
  let bonusPercent;
  let employeeNumber = parseInt(array[0].employeeNumber);
  let reviewRating = array[0].reviewRating;
  let annualSalary = parseInt(array[0].annualSalary);
  let employeeName = array[0].name;
  console.log('STATUS');
  if (reviewRating === 3) {
    //annualSalary = annualSalary + annualSalary * bonusPercent;
    bonusPercent = .04;
    if(checkDigits(employees)){
      //annualSalary = annualSalary + (annualSalary * .05);
      console.log('You have been here forever: ' + annualSalary);
      bonusPercent = .09;
    console.log(annualSalary + (annualSalary * bonusPercent));
    }
  } else if(reviewRating <= 2) {
    annualSalary;
    if(checkDigits(employees)){
      annualSalary = annualSalary + (annualSalary * .05);
      console.log('You have been here forever: ' + annualSalary);
    }
  } else if (reviewRating === 4) {
    annualSalary = annualSalary + annualSalary * .06;
    if(checkDigits(employees)){
      annualSalary = annualSalary + (annualSalary * .05);
      console.log('You have been here forever: ' + annualSalary);
    }
  } else if (reviewRating === 5) {
    annualSalary = annualSalary + annualSalary * .10;
    if(checkDigits(employees)){
      annualSalary = annualSalary + (annualSalary * .05);
      console.log('You have been here forever: ' + annualSalary);
    }
  } 
//check if it's 4 digits

  return console.log(reviewRating, annualSalary, employeeName);
}//end of bonus
bonus(employees);
// console.log(bonus(employees));
// console.log(bonus(employees));
console.log('NOW LOOK HERE');
function checkDigits(array){
  let employeeNumberNumber = array[0].employeeNumber; // didn't define array here?
  let employeeNumberLength = employeeNumberNumber.length; 
  let status;
  console.log('employee number length: ' + employeeNumberLength);
  console.log('employee number number: ' + employeeNumberNumber);
  if (employeeNumberLength === 4){
    console.log('you have been here for ever');
    status = true;
  } else if (employeeNumberLength != 4){
    console.log('sucker');
    status = false;
  }
  return status;
}; //testing comment

function bigSalary(array){
  let anyOldSalary = parseInt(array[1].annualSalary);
  if (anyOldSalary > 65000){

  }
}

console.log(checkDigits(employees)); 

checkDigits(employees);

// to do:

/*
- Revise percentages
  - Last two checks (greater than 65000 and no bonus can be over 13%)
- For loop
*/