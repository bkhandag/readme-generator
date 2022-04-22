// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![License](https://img.shields.io/badge/license-${license}-red.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `\n [License](#license)`

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License
  This project uses the ${license} license
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# readme-generator ${data.projectTitle}

  ${renderLicenseBadge(data.license)}

  ## Description:
  ${data.description}
  
  ## Table of Contents:
  ${data.tableOfContents}
  ${renderLicenseLink(data.license)}
  
  ## Installation Instructions:
  ${data.installationInstructions}
  
  ## Usage:
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
  
  ## Contribution:
  ${data.contribution}
  
  ## Tests:
  ${data.tests}
  
  ## Questions:
  ${data.questions}`
}

module.exports = generateMarkdown;
