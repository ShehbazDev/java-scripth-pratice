// const inputyear = '1991';
// console.log(Number(inputyear),inputyear);
// console.log(inputyear + 18)

// console.log('i am' + 23 + 'yeras old')

// console.log('23' - '10' - 3)

// console.log('23' / '2')

// let n = '1' + 1;
// n = n - 1;
// console.log(n);

// const money = 100;
// if (money) {
//     console.log("dont ")
// } else {
//     console.log("djjsd")
// }

// const hasdrivelinces = true;
// const hasgoodvision = true;
// const istired = false;
// console.log(hasdrivelinces && hasgoodvision)
// console.log(hasdrivelinces || hasgoodvision)
// console.log(!hasgoodvision)

// if (hasdrivelinces && hasgoodvision && !istired) {
//     console.log('shabaz is good boy ... is ka condition true ha')
// } else {
//     console.log('shebaz is bad boy ... is ka condition false ha')
// }

// const shabaz = true;
// const abid = true;
// const meraj = false;

// if (shabaz && abid && !meraj) {
//     console.log('this is true valve...')
// } else (
//     console.log('this is false value...')
// )

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// if(scoreDolphins > scoreKoalas) {
//     console.log("Dolphins win the trophy 🏆")
// } else if (scoreKoalas > scoreDolphins) {
//     console.log("Koalas win the trophy 🏆")
// } else {
//     console.log("Both win the trophy 🎉");
//   }

//   console.log("Dolphins Average:", scoreDolphins);
// console.log("Koalas Average:", scoreKoalas);

//  const day = 'friday';

//  switch (day) {
//     case 'monday':
//     console.log('plane course structure');
//     console.log('go to coding meetup');
//     break;
//     case 'tuesday':
//     console.log('preapre theory videos');
//     break;
//     case 'wednesday':
//     case 'thursday':
//     console.log('write code examples');
//     break;
//     case 'friday':
//     console.log('recode vides');
//     break;
//     case 'saturday':
//     case 'sunday':
//     console.log('Enjoy the weekend :D');
//     break;
//     default:
//     console.log('not a valid day!')
//  }

// const age = 30;

// const drink = age >= 18 ? 'I Like drink wine' : 'water';
// console.log(drink);

// let age = 20;

// let drink = age >= 30 ? 'i like drink water ' : 'i dont Like drink  water';
// console.log(drink)

// const bill = 275;
// const tip = bill <= 300 && bill <=50 ? bill * 0.05:
// bill * 0.2;
// console.log(`the bill was ${bill}, the tip was ${tip},
// and the total value ${bill + tip}`);

// SECTION 2

// function loger () {
//     console.log("what is your name")
// }

// loger();
// loger();

// function fruit(apple, banana) {
//     const juice = `juice with ${apple} apple and ${banana} banana.`
//     return juice;
// }
// const applejuice = fruit(5, 2)
// console.log(applejuice)
// const appleappleorange = fruit(5, 7)
// console.log(appleappleorange)

// function calsAge1(birthYeh) {
//     return 2025 - birthYeh;
// }
// const age1 = calsAge1(2004)

// console.log(age1)

// const calcAverage = (a, b, c) => (a + b + c) / 3;

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);

// const checkWinner = (avgDolphins, avgKoalas) => {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//     } else {
//         console.log("No team wins...");
//     }
// };

// checkWinner(scoreDolphins, scoreKoalas);

// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);

// checkWinner(scoreDolphins, scoreKoalas);

// const friends = ['one', 'steven', 'peter'];
// friends.push('jay');
// friends.unshift('john')
// friends.pop();
// friends.shift();

// console.log(friends)

// const shebaz = {
//     first : "Abid",
//     last :"Hussain",
//     age : 2037 - 1991,
//     job : "triangle",
//     frends : ["Ali", "shan", "sara"]
// },

// console.log(shebaz)
// console.log(shebaz.last)
// console.log(shebaz['last']);

// const interin = prompt('what do you want to know about ? choose between first, last, job, and friends');
// console.log(shebaz[interin])

// const yearsUntiRetirement = function (birthYeah, firstName) {
//     const age = 2037 - birthYeah;
//     const retirement - 65 - age;

//     return `${firstName} retires is ${retirement} yeras`;
// }

// console.log(`${shebaz.first} has ${shebaz.frends.length} frends and best frend is called ${shebaz.frends[0]}`);

// const  shebaz = [
//     "Abid",
//     "Hussain",
//     2037 - 1991,
//     "triangle",
//     ["Ali", "shan", "sara"]
// ];

// const types = []

// for (let i = 0; i < shebaz.length; i++) {

//   console.log(shebaz[i], typeof shebaz[i]);

//   types[i] =typeof shebaz[i];
// }
// console.log(types);

// const classinfo = [
//   {
//     name : "aman",
//     grade :"A",
//     city :"delhi"
//   },

//   {
//     name :"ashia",
//     grade : "A+",
//     city: "gilgit"
//   },

//   {
//     name:"bushra",
//     grade :"first",
//     city :"chalt"
//   }
// ];
// console.log(classinfo)

// console.log(classinfo[2].gender = "female")

// let num = Math.floor(Math.random() * 5);

// console.log(num + 21)

// let num = Math.floor(Math.random() * 5)

// console.log(num + 21)




// const max = prompt("Enter the max number");
// const random = Math.floor(Math.random() * max) + 1;
// let guess = prompt("guess the number");
// while (true) {
//   if (guess == "quit") {
//     console.log("user quit");
//     break;
//   }
//   if (guess == random) {
//     console.log("you are right ! congrats", random);
//     break;
//   } else if (guess < random) {
//     guess = prompt(" hint :your guess was too small please try again");
//   } else {
//     guess = promt("hint :you guess was large .please try again");
//   }
// }




// const max = prompt(":enter the number");
// const random = Math.floor(Math.random() * max) + 1;
// let guess = prompt("guess the number");

// while (true) {
//   if (guess == "quet") {
//     console.log("user quit");
//     break;
//   }
//   if (guess == random) {
//     console.log("you are right ! congrats ", random);
//     break;
//   } else if (guess < random) {
//     guess = prompt("hint: your guess was too small plese try agaie");
//   } else {
//     guess = prompt("hint: your guess was large . please try again");
//   }
// }



// function multiplegreet(func, count) {
//     for(let i=1; i<=count; i++) {
//         func();
//     }
// }

// let greet = function() {
//     console.log("Hello I am muhammad")
// }

// multiplegreet(greet, 10000)




//  const student = {
//     name : "shada",
//     age : "40",
//     phy : "20",
//     eng : "94",
//     getAvg() {
//         console.log(this);
//         let avg = (this.eng+ this.phy+ this.age + this.name) /3;
//         console.log(`${this.name} got avg marks = ${this.phy}`);
//     }
//  }


// console.log("hello");
// console.log("hello");
// let a = 4;

// try {
//     console.log(a);
// } catch {
//     console.log("caught error .. a is not definded")
// }

// console.log("hello");
// console.log("hello");
// console.log("hello");


// const name = "muhammad"
// console.log(name)



// const sum = (a , b) => {
//     console.log(a+b);
// }

// sum(10, 30)
// console.log(sum)


// const cube= (n) => n* n * n;

