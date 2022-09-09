var quizQuestions = [
  {
question: "JavaScript is one of the few languages that run in a ____________",
a: "Smart Phone",
b: "Dumb Phone",
c: "Web Browser",
D: "Marathon",
correct: "c"
  },

  {
  question: "What does API stand for? ",
a: "Apple Product Instruction",
b: "Application Programming Interface",
c: "Application Programming Interference",
D: "Apple Pie Installation",
correct: "b"
  },

  {
    question: "What does CSS stand for? ",
  a: "Cascading Style Sheets",
  b: "Cascading Style Software",
  c: "Correct Color Scheme",
  D: "Color Correcting Software",
  correct: "a"
    },

    {
      question: "Inside of which element do we place the link to our Javascript file? ",
    a: "<javascript>",
    b: "<JSCRIPT>",
    c: "<sscript>",
    D: "<script>",
    correct: "d"
      },

      {
        question: "The condition in an if/else statement is enclosed with ___________ ",
      a: "quotes",
      b: "parenthesis",
      c: "curly brackets",
      D: "square brackers",
      correct: "b"
        },
];
let quiz= document.getElementById('quiz')
let answer=document.querySelectorAll('answer')
let questionCl= document.getElementById('question')
let qA = document.getElementById('a_text')
let qB = document.getElementById('b_text')
let qC = document.getElementById('c_text')
let qD = document.getElementById('d_text')
let submitBtn = document.getElementById('submit')


let actualQuiz= 0
let score = 0

startQuiz()
function startQuiz(){
  unselectAnswer()
  let actualQuizData = quizQuestions[actualQuiz]
  questionCl.innertext = actualQuiz.question
}