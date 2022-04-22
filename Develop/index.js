// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of our project?',
        name: 'projectTitle',
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?', 
      },
      {
        type: 'input',
        name: 'tableOfContents',
        message: 'What is the Table of Contents?',
      },
      {
          type: 'input',
          name: 'installationInstructions',
          message: 'What are the installation instructions',
        },
        {
          type: 'input',
          name: 'usage',
          message: 'What is Usage?',
        },
        {
          type: 'list', //TODO Change this to list
          name: 'license',
          message: 'What License would you like to add',
          choices: [
              'Apache_License_2.0',
              'MIT_License',
              'GNU_General_Public_License',
              'None',
          ]
        },
        {
          type: 'input',
          name: 'contribution',
          message: 'Who contributed to the project?',
        },
        {
          type: 'input',
          name: 'tests',
          message: 'What tests were run?',
        },
        {
          type: 'input',
          name: 'questions',
          message: 'What are your questions?',
        },
  
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(path.join(process.cwd(), fileName), data, function(err){
        err ? console.error(err) : console.log('Commit logged!')});
}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(questions)
  .then((response) => {
      

    console.log("Now generating your readme.md ...");
    writeToFile("/dist/README.md", generateMarkdown(response))




  });
}

// Function call to initialize app
init();
