const inquirer = require('inquirer');
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
        type: 'checkbox',
        message: 'Please Choose a License for your Project.',
        name: 'license',
        choices: ['MIT','GNU General Public','Creative Commons Zero','Mozilla Public'],
    },
];

const fs = require('fs');
inquirer.prompt(questions)
    .then((answers) =>{
        const readmeContent = `
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

This project is licensed under the ${answers.license} License.

`;

    fs.writeFile('README.md', readmeContent, (err) => {
      if (err) throw err;
      console.log('README.md file created successfully.');
    });
  });