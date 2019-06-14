const students = [
    {
        name: "Chris Miller",
        subject: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        subject: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        subject: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        subject: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        subject: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        subject: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        subject: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        subject: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        subject: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        subject: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        subject: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        subject: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
] 

// Iterate the array of students, and apply the correct style to 
// the h1 depending on the score of the student being below 60, 
// or above it.

// const createStudentComponent = function(grade, name, subject, info){
//         return `<div class="student">
//         <h1 class="xx-large ${grade}">${name}</h1>
//         <section class="bordered dashed section--padded">${subject}</section>
//         <aside class="pushRight">${info}</aside>
//         </div>
//         ` 
// }

// const studentContainer = document.querySelector("#container");

// students.forEach( function (student) {
//     let studentComponent= "";
//     if (student.score >= 60) {
//         student.grade = "passing";
//     }
//     else {
//         student.grade = "failing";
//     }
//     studentComponent= createStudentComponent(student.grade, student.name, student.subject, student.info)
//     studentContainer.innerHTML+= studentComponent;
// })

// refactor only using one argument

// const createStudentComponent = function(studentObj){
//     return `<div class="student">
//     <h1 class="xx-large ${studentObj.grade}">${studentObj.name}</h1>
//     <section class="bordered dashed section--padded">${studentObj.subject}</section>
//     <aside class="pushRight">${studentObj.info}</aside>
//     </div>
//     ` 
// }

const studentContainer = document.querySelector("#container");

// students.forEach( function (student) {
// let studentComponent= "";
// if (student.score >= 60) {
//     student.grade = "passing";
// }
// else {
//     student.grade = "failing";
// }
// studentComponent= createStudentComponent(student)
// studentContainer.innerHTML+= studentComponent;
// })

// Write functions that build the sub-components 
// of the larger student component.
// h1
// section
// aside
// Invoke those functions inside the createStudentComponent function to build the parent <div>.


for(i = 0; i < students.length; i++){
    let studentComponent = "";
    studentComponent = createStudentComponent(students[i]);
    studentContainer.innerHTML+=studentComponent
}

function createStudentComponent(studentObj){
    return `
    <div id="student">
        ${h1(studentObj.name)}
        ${section(studentObj.subject)}
        ${aside(studentObj.info)}
    </div>`
}

function h1(student){
    return `<h1>${student}</h1>`
    }

function section(student){
    return `<section>${student}</section>`
}

function aside(student){
    return `<aside> ${student}</aside>`
}
