// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'No License') {
  return ``
} else {
  return `![License:${license}](https://img.shields.io/badge/license-${license}-blue.png)`
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `[MIT License](https://opensource.org/licenses/MIT)`
  } else if (license === 'Apache 2.0') {
    return `[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === 'BSD') {
    return `[BSD (3-Clause) License](https://opensource.org/licenses/BSD-3-Clause)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}
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
  ${renderLicenseLink(data.license)}









`;
}

module.exports = generateMarkdown;
