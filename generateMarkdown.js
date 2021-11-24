// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `https://img.shields.io/github/${license}/${username}/<Repository>`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${data.license}
  ### Description:
  ${data.description}

  ### Installation:
  ${data.installation}

  ### Usage:
  ${data.usage}

  ### Contributing:
  ${data.contributing}

  ### Tests:
  ${data.tests}

  ### Questions:


  ---
  ___

  # License

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)






`;
}

module.exports = generateMarkdown;
