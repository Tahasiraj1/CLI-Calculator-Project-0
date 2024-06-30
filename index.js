import inquirer from "inquirer";
let answer = await inquirer.prompt([{
        name: "num1",
        type: "number",
        message: "Enter Your First Number",
    },
    {
        name: "num2",
        type: "number",
        message: 'Enter Your Second Number',
    },
    {
        type: "list",
        name: "operator",
        message: 'Choose the Operator You Want To Perfrom',
        choices: ["addition", "subtraction", "multiplication", "division", "exponentiation", "modulus", "BMI"]
    }]);
let result;
switch (answer.operator) {
    case "addition":
        result = answer.num1 + answer.num2;
        console.log("The answer for addition is:" + result);
        break;
    case "subtraction":
        result = answer.num1 - answer.num2;
        console.log("The answer for subtraction is:" + result);
        break;
    case "multiplication":
        result = answer.num1 * answer.num2;
        console.log("The answer for multiplication is:" + result);
        break;
    case "division":
        result = answer.num1 / answer.num2;
        console.log("The answer for division is:" + result);
        break;
    case "exponentiation":
        result = answer.num1 * answer.num2;
        console.log("The answe for exponentiations is:" + result);
        break;
    case "modulus":
        result = answer.num1 % answer.num2;
        console.log("The answer for modulus is:" + result);
        break;
    case "BMI":
        let height = answer.num1;
        let weight = answer.num2;
        let BMI = weight / (height * height);
        console.log("Your BMI is:" + BMI);
        break;
    default:
        console.log("unsupported operation");
        break;
}
;
