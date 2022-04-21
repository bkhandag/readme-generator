const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
inquirer
  .prompt([
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
        type: 'input',
        name: 'license',
        message: 'What is License',
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

  ])
  .then((response) => {
      //The following command shows how to write fil

    console.log(response);
    const bio = `<!DOCTYPE html>
    <html lang="en">
    <head> </head>
    <body> 
    <p> Hi my name is ${response.name}. I live in ${response.location}. 
    I currently do ${response.bio} 
    </p>
    </body>
    </html>`

    fs.writeFile("portfolio.html", bio, function(err){
          err ? console.error(err) : console.log('Commit logged!')});

  });


  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
