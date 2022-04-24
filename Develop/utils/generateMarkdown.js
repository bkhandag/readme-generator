// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return (license!="None" ? `![License](https://img.shields.io/badge/license-${license}-red.svg)` : ``);
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return (license!="None" ? `\n [License](#license)` : ``);

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return (license!="None" ? `License:
  This project uses the ${license} license` : ``);
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# Title: ${data.projectTitle}

  ${renderLicenseBadge(data.license)}

  ## Description:
  ${data.description}
  
  ## Table of Contents:
  \n * [Description](#description)
  \n * [Installation Instructions](#installation)
  \n * [Usage](#usage)
  \n * [Contribution](#contribution)
  \n * [Tests](#tests)
  \n * [Questions](#questions)

  ## Installation Instructions:
  ${data.installationInstructions}
  
  ## Usage:
  ${data.usage}
  
  ## ${renderLicenseSection(data.license)}
  
  ## Contribution:
  ${data.contribution}
  
  ## Tests:
  ${data.tests}
  
  ## Questions:
  For additional questions, reach out to me:
  \n Github: https://github.com/${data.githubUsername}
  \n Email: ${data.email}
  `
}

module.exports = generateMarkdown;
