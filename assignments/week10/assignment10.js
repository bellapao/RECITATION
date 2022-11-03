// Problem 1: JSON for each employee

var Sam = {
    "name": "Sam",
    "department":"Tech",
    "designation": "Manager",
    "salary":40000,
    "raise eligible": "true"
}
var Mary = {
    "name":"Mary",
    "department":"Finance",
    "designation":"Trainee",
    "salary":18500,
    "raise eligible":"true"
}
var Bill = {
    "name":"Bill",
    "department":"HR",
    "designation":"Executive",
    "salary":21200,
    "raise eligible":"false"
}
console.log (Sam);
console.log(Mary);
console.log(Bill);

// Problem 2: Q2 JSON for the company 
const companyInfo =
    {
        "companyName" : "Tech Stars",
        "website" : "www.techstars.site",
        "employees": [Sam,Mary,Bill]
    }

console.log(companyInfo);

// Problem 3: new employee => push 

var Anna =
    {
      "name":"Anna",
      "department":"Tech",
      "designation":"Executive",
      "salary":25600,
      "raise eligible":"false"
    }
console.log(Anna)

companyInfo.employees.push(Anna);
console.log(companyInfo);

// Problem 4: total salary 
var totalSalary = (
    string0 = (Sam["salary"]),
    string1 = (Mary["salary"]),
    string2 = (Bill["salary"]),
    string3 = (Anna["salary"])
);
console.log(totalSalary);

// Problem 5: 
/* It's raise time. If an employee is raise eligible, increase their salary by 10%. 
Given the JSON of the company and its employees, write a function to update the salary for each employee who is raised eligible, 
then set their eligibility to false. */

console.log(companyInfo['employees'][0])

function raiseTime(employeeInfo) {
    let salary = employeeInfo['salary'];
    let raise = employeeInfo['raise eligible'];

    if (raise == 'true') {
        salary = salary * 1.1;
        raise = 'false';
    }

    console.log(salary);
    console.log(raise);
    return;
}

raiseTime(companyInfo['employees'][0]);
raiseTime(companyInfo['employees'][1]);
raiseTime(companyInfo['employees'][2]);
raiseTime(companyInfo['employees'][3]);

//Problem 6: 
/*
Q6
Some employees have decided to work from home. 
The following array indicates who is working from home. 
Use the array to update the company JSON. 
For each employee, add another property called 'wfh' and set it to true or false
Working from home: ['Anna', 'Sam']



notes: 
object = {
   "" name:{
        "haha":"value",
        "hehe":"a  different value",
        "jajaja",
    }
    department:{

    }
}
object.name["jajaja"]
object.department
object["name"]
*/
