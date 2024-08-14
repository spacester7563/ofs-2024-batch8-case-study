import readline from "readline-sync";
import { Employee } from "./employee.js";
import fs from "fs";

const readEmployeesFromFile = () => {
  try {
    const fileContent = fs.readFileSync("employee.json", "utf-8");
    return fileContent ? JSON.parse(fileContent) : [];
  } catch (err) {
    return [];
  }
};

let id = readline.question("Enter id: ");
let name = readline.question("Enter name: ");
let salary = readline.question("Enter salary: ");

let employee = new Employee(id, name, parseFloat(salary));

let employees = readEmployeesFromFile();

employees.push(employee);

fs.writeFileSync("employee.json", JSON.stringify(employees, null, 2));

console.log("Saved");

let file = fs.readFileSync("employee.json");
console.log(JSON.parse(file.toString()));
