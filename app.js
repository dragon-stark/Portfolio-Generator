const profileDataArgs = process.argv.slice(2, process.argv.length);
// const name = profileDataArgs[0];
// const github = profileDataArgs[1];
// const printProfileData = (profileDataArr) => {
//   // This...
//   for (let i = 0; i < profileDataArr.length; i += 1) {
//     console.log(profileDataArr[i]);
//   }

//   console.log("================");

//   // Is the same as this...
//   profileDataArr.forEach((profileItem) => console.log(profileItem));
// };

// printProfileData(profileDataArgs);

// const generatePage = () => "Name: Jane, Github: Janehub";
// console.log(generatePage());
// this variable but with template literals is written like this;

// const generatePage = (userName, githubName) =>
//   `Name: ${userName}, Github; ${githubName}`;

// Now we can create multi-line input for our previous example by refactoring it this way:

const [name, github] = profileDataArgs;
const generatePage = (userName, githubName) => {
  return `
 <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
  </head>

  <body>
    <h1>${name}</h1>
    <h2><a href="https://github.com/${github}">Github</a></h2>
  </body>
  </html>
      `;
};
console.log(name, github);
console.log(generatePage(name, github));
