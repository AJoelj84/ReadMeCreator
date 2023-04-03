// Constant Variables to load Inquirer and FS
const inquirer = require('inquirer');
const fs = require('fs');
// Question Array for Inquirer Prompt
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter the Title of your Project.',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a Description of your Project.',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter Installation Instructions for your Project.',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter Usage Information for your Project.',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Enter Contribution Guidelines for your Project.',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter Test Instructions for your Project.',
  },
  {
    type: 'input',
    name: 'githubname',
    message: 'Enter Your GitHub Username.',
  },
  {
    type: 'input',
    name: 'githublink',
    message: 'Enter Your GitHub Profile Link.',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter Your Email Address.',
  },
  {
    type: 'input',
    name: 'contact',
    message: 'Enter Instructions on How to Contact you, that will be displayed below your GitHub and Email Information.'
  },
  {
    type: 'list',
    message: 'Please Choose a License for your Project.',
    name: 'license',
    choices: ['MIT','GNU General Public','Creative Commons Zero','Mozilla Public'],
  },
];

// Code to Generate Badges for each type of License available in the ReadMe creator
function generateBadge(license) {
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'GNU General Public':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'Creative Commons Zero':
      return '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)';
    case 'Mozilla Public':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    default:
      return '';
  }
}
// Prompt for Inquirer to Generate and Ask for User Input
inquirer.prompt(questions)
  .then((answers) => {
    const license = answers.license;
    const badge = generateBadge(license);
// Constant Variable for the ReadMe file Generation
    const readmeContent = `
${badge}

# ${answers.title}

${answers.description}

# Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contribution Guidelines](#contribution-guidelines)
- [Test Instructions](#tests)
- [Questions](#questions)
- [License](#license)

# Installation

${answers.installation}

# Usage

${answers.usage}

# Contribution Guidelines

${answers.contribution}

# Test Instructions

${answers.tests}

# Questions

${answers.githubname}

${answers.githublink}

${answers.email}

${answers.contact}

# License

This project is licensed under the ${license} License.
`;
// fs.writeFile to Write the ReadMe.md file to the directory after all questions have been answered by the User
    fs.writeFile('README.md', readmeContent, (err) => {
      if (err) throw err;
      console.log('README.md file created successfully.');
    });
  });