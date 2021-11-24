// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
  return `![License: MIT](<https://img.shields.io/badge/License-MIT-yellow.svg>)`
} else if (license === 'Apache 2.0') {
  return `![License: Apache 2.0](<https://img.shields.io/badge/License-Apache_2.0-blue.svg>)`
} else if (license === 'BSD') {
  return `![License: BSD](<https://img.shields.io/badge/License-BSD_3--Clause-blue.svg>)`
} else {
  return ``
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
  } else {
    return ``
  }
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if (license === 'No License') {
  return ``
} else {
  return `# License
  ### ${license}
  This project is licensed under the ${renderLicenseLink(license)}.`
}


}

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

${renderLicenseSection(data.license)}










`;
}

module.exports = generateMarkdown;
