const Engineer = require("../lib/engineer");

const generateMarkdown = (data) => {

    const generateManager = (manager) => {
        return `
        <div class="card col-3 text-center mt-4">
        <div class="card-header text-white bg-primary bg-gradient ">
        ${manager.getRole()}
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">name:${manager.getName()} </li>
            <li class="list-group-item">id: ${manager.getId()}</li>
            <li class="list-group-item">email: ${manager.getEmail()}</li>
            <li class="list-group-item">office number: ${manager.getOfficeNumber()}</li>
        </ul>
        </div>
        `

    };


    const generateEngineer = (engineer) => {
        return `
        <div class="card col-3 text-center mt-4">
            <div class="card-header text-white bg-primary bg-gradient ">
            ${engineer.getRole()}
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">name:${engineer.getName()} </li>
            <li class="list-group-item">id: ${engineer.getId()}</li>
            <li class="list-group-item">email: ${engineer.getEmail()}</li>
            <li class="list-group-item">github: https://github.com/${engineer.getGitHub()}</li>
        </ul>
        </div>
        `
    };

    const generateIntern = (intern) => {
        return `
        <div class="card col-3 text-center mt-4">
        <div class="card-header text-white bg-primary bg-gradient ">
        ${intern.getRole()}
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">name:${intern.getName()} </li>
            <li class="list-group-item">id: ${intern.getId()}</li>
            <li class="list-group-item">email: ${intern.getEmail()}</li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
        </div>
        `
    };

    const htmlCard = [];

    htmlCard.push(
        data
            .filter((employee) => employee.getRole() === "Manager")
            .map((manager) => generateManager(manager))
    );
    htmlCard.push(
        data
            .filter((employee) => employee.getRole() === "Engineer")
            .map((engineer) => generateEngineer(engineer))
            .join("")
    );
    htmlCard.push(
        data
            .filter((employee) => employee.getRole() === "Intern")
            .map((intern) => generateIntern(intern))
            .join("")
    );

    return htmlCard.join("");
}

module.exports = (data) => {
    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">

    <title>Document</title>
</head>

<body>
    <header>
        <h1 class="text-center mb-5 text-white bg-danger bg-gradient " style="height: 80px">My Team</h1>
    </header>

    <main class = "container"> 
    <div class="row justify-content-md-center">  
        ${generateMarkdown(data)}   
        </div> 
    </main>
</body>

</html>
`

}






// function generateMarkdown(employeesArray) {
//     console.log(employeesArray)
    //[intern,intern,manager,intern,engineer,manager,engineer]
    // you have to filter them so you can loop through the different kinds of employees separately
    //[intern,intern,intern] make a different for loop to create the intern cards
    //[manager,manager]
    //[engineer,engineer]
    //
//     return `
//     <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <!-- CSS only -->
//     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
//         integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">

//     <title>Document</title>
// </head>

// <body>
//     <header>
//         <h1 class="text-center mb-5 text-white bg-danger bg-gradient " style="height: 80px">My Team</h1>
//     </header>

//     <div class="card col-2 text-center mx-auto">
//         <div class="card-header text-white bg-primary bg-gradient ">
//             Manager
//         </div>
//         <ul class="list-group list-group-flush">
//             <li class="list-group-item">name:${employeesArray[0].getName()} </li>
//             <li class="list-group-item">id ${employeesArray[1].getId()}</li>
//             <li class="list-group-item">email ${employeesArray[2].getEmail()}</li>
//             <li class="list-group-item">number</li>
//         </ul>
//     </div>

// </body>

// </html>
// `
// }

// module.exports = generateMarkdown;