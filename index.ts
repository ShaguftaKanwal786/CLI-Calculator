

import inquirer from "inquirer"

const  num = await inquirer.prompt([{

 name : "first" , type :"number" , message: "Enter first number"},
{ name : "second" , type :"number" , message: "Enter second number"},
{ name :"operator",
  type : "list",
  message :" select operation",
 choices:["Addition","Subtraction","Multiplication","Division"]
}
]);

if (num.operator === "Addition"){
    console.log(num.first + num.second)
}else if (num.operator === "Subtraction"){
    console.log(num.first - num.second);
}else if (num.operator === "Multiplication"){
    console.log(num.first * num.second)
} else if (num.operator === "Division"){
    console.log(num.first / num.second)
    
}else{

    console.log("invalid input");
    
}

