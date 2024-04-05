'use strict'


const quizData = [
  {
    question: "1. What is HTML? ",
    options: [
        "Hot Tunisian Meals Lombar", 
        "Hyper Text Makeup Language", 
        "How To Make Lasers", 
        "Hyper Text Markup Language"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "2. The color of the sky is?",
    options: ["Cyan", "Yellow", "Blue", "Pastel blue"],
    answer: "Blue"
  },
  {
    question: "3. What is CSS?",
    options: [
    "Cascading Style Sheets", 
    "Cascading Style Sheets", 
    "Cascading Style Sheets", 
    "Cascading Style Sheets"],
    answer: "Cascading Style Sheets"
    },

    {
        question: "4. What is RAM?",
        options: [
        "Random Acess Memory",
        "Random Acces Memory",
        "Random Accesss Memory",
        "Random Access Memory",],
        answer: "Random Access Memory"
    },

    {
        question: "5. What is JavaScript used for?",
        options: [
        "To make web pages fly",
        "To make web pages interactive",
        "To make web pages beautiful",
        "To make web pages function",],  
        answer: "To make web pages interactive"
    }
];


// const nextBtn = document.getElementById('nextBtn');
// const questionEl = document.getElementById('question');

// nextBtn.addEventListener('click', function()  {
//     currentQuestion++;
//     if(currentQuestion < quizData.length){
//         questionEl.innerText = quizData[currentQuestion].question, options;
//         renderOptions(quizData[currentQuestion].options);
//     } else{ }
// });

// document.dispatchEvent(new CustomEvent('questionChange', {
//     detail: {
//         question: quizData[currentQuestion].question,
//         options: quizData[currentQuestion].options
//     }
// }));



let currentQuestion = 0;
let storage = 0;



const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const questionEl = document.getElementById('question');
const optionsList = document.getElementById('options');
const renderedQuiz = document.getElementById('rendered-quiz');
let counter = 0;

// event listener to next and previous buttons to render the questions onclick, 'questionEl' and 'optionsList'were replaced'
// forward
nextBtn.addEventListener('click', function()  {
    let myInputs = document.querySelectorAll("input");
    for (let myInput of myInputs){
        if (myInput.checked) {
            storage = storage + 1;
            break;
    };
    
    }
    console.log(storage);

    if(currentQuestion < quizData.length - 1){
        currentQuestion++;
        // console.log(currentQuestion)
        renderQuiz();
       
       
    }

   
 
   
    
    
});

// backward
prevBtn.addEventListener('click', function()  {
    if(currentQuestion < quizData.length -1){
        currentQuestion--;
        // console.log(currentQuestion)
        renderQuiz();
    }
       
});





















// This function will render the quiz ie the questions and options that were put in a new div
// the innerHTML attribute was used with back ticks to allow the content of the html elements to show up (content only)
// it was give a const which was called on.
function renderQuiz() {         
    renderedQuiz.innerHTML = `

<div id="container" class="flex flex-col justify-center border-2 rounded-md bg-slate-100 w-2/5">
   

    <h2 id="question" class="text-2xl font-semibold text-start p-6 flex justify-between items-center">
        ${quizData[currentQuestion].question}
    
            <span id="counter"> ${currentQuestion +1} of ${quizData.length}</span>
    
        </h2>


    <div id="options" class="flex flex-col  items-center gap-4 p-6">

        <div
            class="border-1 border-slate-500 bg-neutral-200 w-full flex items-center p-2 justify-between rounded-md">
            <label for="option-a">${quizData[currentQuestion].options[0]}</label>
            <input type="radio" name="option" id="option" value="A" required />
        </div>

        <div
            class="border-1 border-slate-500 bg-neutral-200 w-full flex items-center p-2 justify-between rounded-md">
            <label for="option-b">${quizData[currentQuestion].options[1]}</label>
            <input type="radio" name="option" id="option" value="A" required />
        </div>

        <div
            class="border-1 border-slate-500 bg-neutral-200 w-full flex items-center p-2 justify-between rounded-md">
            <label for="option-c">${quizData[currentQuestion].options[2]}</label>
            <input type="radio" name="option" id="option" value="c" required />
        </div>

        <div
            class="border-1 border-slate-500 bg-neutral-200 w-full flex items-center p-2 justify-between rounded-md">
            <label for="option-d">${quizData[currentQuestion].options[3]}</label>
            <input type="radio" name="option" id="option" value="d" required />
        </div>

    </div>
`;
}

renderQuiz();














































// nextBtn.addEventListener('click', function()  {
//     currentQuestion++;
//     if(currentQuestion < quizData.length){
//         questionEl.innerText = quizData[currentQuestion].question;
//         optionsList.innerHTML = '';
//         quizData[currentQuestion].options.forEach(option => {
//             const optionEl = document.createElement('li');
//             optionEl.innerText = option;
//             optionsList.appendChild(optionEl);
//         })
//     }
// });

// prevBtn.addEventListener('click', function()  {
//     currentQuestion--;
//     if(currentQuestion < quizData.length){
//         questionEl.innerText = quizData[currentQuestion].question;
//         optionsList.innerHTML = '';
//         quizData[currentQuestion].options.forEach(option => {
//             const optionEl = document.createElement('li');
//             optionEl.innerText = option;
//             optionsList.appendChild(optionEl);
//         })
//     }
// })






// let currentQuestion = 0;
// const questionElement = document.getElementById('question');
// const optionsElement = document.getElementById('options');
// const nextBtn = document.getElementById('nextBtn');

// function showQuestion() {
//   questionElement.textContent = quizData[currentQuestion].question;
//   optionsElement.innerHTML = '';
//   quizData[currentQuestion].options.forEach(option => {
//     const button = document.createElement('button');
//     button.textContent = option;
//     button.classList.add('bg-white', 'hover:bg-gray-100', 'text-gray-800', 'font-semibold', 'py-2', 'px-4', 'rounded');
//     button.addEventListener('click', () => checkAnswer(option));
//     optionsElement.appendChild(button);
//   });
// }

// function checkAnswer(selectedOption) {
//   if (selectedOption === quizData[currentQuestion].answer) {
//     alert('Correct!');
//   } else {
//     alert('Incorrect!');
//   }
// }

// nextBtn.addEventListener('click', () => {
//   currentQuestion++;
//   if (currentQuestion < quizData.length) {
//     showQuestion();
//   } else {
//     alert('Quiz completed!');
//   }
// });

// showQuestion();
