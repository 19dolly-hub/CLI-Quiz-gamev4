const readlineSync = require('readline-sync');
const chalk = require('ansi-colors');

// SCORES DATA
let score = 0;
let highScoreArr = [
  {
    name : 'Anirudh Sahu',
    scored : 5
  },
  {
    name : 'Example',
    scored : 2
  },
  {
    name : 'Anjali',
    scored : 1
  }
];

// THE QUESTONS AND ANSWERS
let quizArr = [
  { 
    question : 'Which river is known as the "Lifeline of India"? ',
    options : ['The Ganga', 'The Yamuna', 'The Saraswati', 'The Kaveri'],
    answer : 'The Ganga'
  }, 
  { 
    question : 'Who is known as the "Father of Nation" in India? ',
    options : ['CS Ajad', 'Bhagat Singh', 'Mahatma Gandhi', 'SC Bose'],
    answer : 'Mahatma Gandhi'
  },
  { 
    question : 'Which is the highest civilian award in India? ',
    options : ['Padma Bhushan', 'The Bharat Ratna', 'Oscar', 'None of these'],
    answer : 'The Bharat Ratna'
  }, 
  { 
    question : 'In which year did India gain independence from British Rule? ',
    options : [1967, 1948, 1947, 1957],
    answer : 1947
  }, 
  { 
    question : 'Who wrote the Indian National Anthem? ',
    options : ['Bankim Chandra Chatterjee', 'Swami Vivekananda', 'Atal Bihari Bajpayee', 'Rabindranath Tagore'],
    answer : 'Rabindranath Tagore'
  },
];

// REPEATED CODE
function breakLine() {
  console.log(chalk.yellow('==============='));
  console.log('');
};

// WELCOME
function welcome() {
  
  console.log(chalk.yellowBright('Welcome to the CLI Quiz-Game!'));
  
  console.log(chalk.yellowBright('What is your Name?'));
  
  let userName = readlineSync.question(chalk.gray('*press ENTER(<--) after the name... '));

  breakLine();
  
  console.log('Hello! ' + userName.toUpperCase());
  
  let funArr =['Ready', 'Steady', 'Go!'];
  
  for (let i=0; i<funArr.length; i++) {
    console.log(funArr[i]);
  };

  console.log(chalk.grey('*write 1/ 2/ 3 or 4 for your answer...'));
  breakLine();
};

// THE GAME
function checkAnswer(input, answer) {
  
  if (input !== undefined && input === answer) {
    
    console.log(chalk.green('Right answer!'));
    score++;
    
  } 
  else if (input === undefined) {
    
    console.log(chalk.redBright('You missed it!'));
  }
  else {
    
    console.log(chalk.red('Wrong answer!'));
  }

  breakLine();
}


function promptQuestion(quiz) {
  
  let index = readlineSync.keyInSelect(quiz.options, quiz.question, {cancel: "I don't know!"});
  
  console.log('You selected: ' + quiz.options[index]);
  
  checkAnswer(quiz.options[index], quiz.answer);
}


function prompt() {
  
  for (let i = 0; i < quizArr.length; i++) {
    
    let quiz = quizArr[i];
    
    promptQuestion(quiz);
  }
}

// GAME END
function conclude() {
  
  console.log(chalk.bgBlackBright('Thanks! for playing the quiz.'));
  
  console.log('Your score is ' + score);
  breakLine();

  for (let i=0; i<highScoreArr.length; i++) {
    
    let highScore = highScoreArr[i];

    console.log('High-score : ' + highScore.scored + ' scored by ' + highScore.name);
    
  }
  
    if(score >= highScoreArr[0].scored) {

    console.log(chalk.cyan('Congrats!! You have beaten the High-score.'));

      console.log(chalk.cyan('Send me a screenshot, so that I update the High-score.'));

      breakLine();

      console.log(chalk.grey('*updation may take upto 24hrs...'));
      
    }
    
  breakLine();
  
};

welcome();
prompt();
conclude();
