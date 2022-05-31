const inquirer = require("inquirer");
// const fs = require("fs");
// const generatePage = require("./src/page-template.js");

inquirer
  .prompt([
    {
      // pass questions here
      type: "input",
      name: "name",
      message: "What is your name?",
    },
  ])

  .then((answers) => console.log(answers));
// {
//     // you will use the user input from here
//   });
// fs.writeFile("./index.html", generatePage(name, github), (err) => {
//   if (err) throw new Error(err);

//   console.log("Portfolio complete! Check out index.html to see the output!");
// });
