const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
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
            name: 'installation instructions',
            message: 'Enter Installation Instructions for your Project.',
        },
        {
            type: 'input',
            name: 'usage information',
            message: 'Enter Usage Information for your Project.',
        },
        {
            type: 'input',
            name: 'contribution guidelines',
            message: 'Enter Contribution Guidelines for your Project.',
        },
        {
            type: 'input',
            name: 'test instructions',
            message: 'Enter Test Instructions for your Project.',
        },
        {
            type: 'checkbox',
            message: 'Please Choose a Liscense for your Project.',
            name: 'liscense',
            choices: ['MIT','GNU General Public','Creative Commons Zero','Mozilla Public'],
        }



    ]);