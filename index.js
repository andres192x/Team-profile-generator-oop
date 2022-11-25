

// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const generateMarkdown=require('./utils/generateMarkdown')

//lib modules
const Manager = require("./lib/manager")
const Intern = require("./lib/intern")
const Engineer = require("./lib/engineer")

// var generateMarkdown = require("./utils/generateMarkdown")
var fs = require("fs")



// TODO: Create an array of questions for user input
const questions = [
    { type: "input", message: "please enter managers name", name: "manager" },
    { type: "input", message: "please enter employee id", name: "id" },
    { type: "input", message: "please enter email address", name: "email" },
    { type: "input", message: "please enter the office number", name: "number" },
];

const menu = [
    { type: "list", message: "would you like to add an engineer or an intern or to finish building my team?", name: "menu", choices: ["engineer", "intern", "finish"] },
]

const engineer = [
    { type: "input", message: "please enter the engineer's name", name: "engName" },
    { type: "input", message: "please enter the engineer's id", name: "engId" },
    { type: "input", message: "please enter the engineer's email", name: "engEmail" },
    { type: "input", message: "please enter the engineer's github username", name: "engGithub" },
]

const intern = [
    { type: "input", message: "please enter the intern's name", name: "intName" },
    { type: "input", message: "please enter the intern's id", name: "intId" },
    { type: "input", message: "please enter the intern's email", name: "intEmail" },
    { type: "input", message: "please enter the intern's school", name: "intSchool" },
]


//answers array
const employees = []

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            console.log(response)
            const newManager = new Manager(response.manager, response.id, response.email, response.number)
            employees.push(newManager)

            mainMenu()
        })
}

function mainMenu() {
    inquirer
        .prompt(menu)
        .then((responses) => {
            // console.log(responses.menu)
            if (responses.menu == "engineer") {
                inquirer
                    .prompt(engineer)
                    .then(responses => {
                        const newEngineer = new Engineer(responses.engName, responses.engId, responses.engEmail, responses.engGithub)
                        employees.push(newEngineer)
                        mainMenu()
                    }).catch(error => console.log(error))
                // console.log(engineer)
            }
            else if (responses.menu == "intern") {
                inquirer
                    .prompt(intern)
                    .then(responses => {
                        const newIntern = new Intern(responses.intName, responses.intId, responses.intEmail, responses.intSchool)
                        employees.push(newIntern)
                        mainMenu()
                    })
            }
            else if (responses.menu == "finish") {
               
                  
                        const markdown = generateMarkdown(employees)
                        fs.writeFile("./utils/index.html", markdown, function (err) { if (err)console.log(err) })
                    
            }

        })

}
// Function call to initialize app
init();

// .then((response) => {
    //     const markdown = generateHtml (response)
    // fs.writeFile("./utils/README.md",markdown, function(err){console.log(err)})
    // } )
