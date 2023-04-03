const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createDocument } = require('./logo');
const {Circle, Triangle, Square} = require("./shapes")

class CLI {
  constructor() {
    this.shape;
  }
  run() {
    return this.addLogo()
      .then(() => {
        
        return writeFile(
          join(__dirname, '..', 'output', 'logo.svg'),
          this.shape.render()
        );
      })
      .then(() => console.log('Created logo file'))
      .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
      });
  }

  addLogo() {
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'color',
          message: 'Choose a color for your background.',
        },
        {
          type: 'input',
          name: 'text',
          message: 'Enter 3 letters for your logo.',
        },
        {
          type: 'input',
          name: 'text color',
          message: 'Choose letter color.',
        },
        {
          type: 'list',
          name: 'shape',
          message: 'What shape do you want for your logo?',
          choices: ['circle', 'square', 'triangle'],   
        },
       
      ])
      .then(({ text, color, shape }) => {
        //set this.shape = to the shape the user selected
        switch (shape){
          case "circle": 
            this.shape = new Circle();
            break;
          case "triangle":
            this.shape = new Triangle();
            break;
          case "square":
            this.shape = new Square();
            break;

        }

        this.shape.setColor(color);
        this.text.setColor(color);

      });
  }
}

module.exports = CLI;
