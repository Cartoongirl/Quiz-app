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


let currentQuestion = 0;
let storage = 0;
let score = 0;
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const questionEl = document.getElementById('question');
const optionsList = document.getElementById('options');
const renderedQuiz = document.getElementById('rendered-quiz');
let progress= document.getElementById("progress");
let counter = 0;
const timer  = document.getElementById("timer");
let timeLeft = 10;
let timerInterval;
let scoreHistory = [];
renderQuiz();






// event listener to next and previous buttons to render the questions onclick, 'questionEl' and 'optionsList'were replaced'
// forward
nextBtn.addEventListener('click', function () {
    // for storage, to count the correct answers and store them in a variable
    let myInputs = document.querySelectorAll("input");
    for (let myInput of myInputs) {
        if (myInput.checked) {
            storage = storage + 1;
            break;
        };
    }


    console.log(storage);

    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        // console.log(currentQuestion)
        renderQuiz();

    }else{        
        document.getElementById("john").classList.add('hidden');
        renderSummary() 
    }

    updateProgressMeter()

    // Add score to history and store in browser storage
    scoreHistory.push(score);
    if (scoreHistory.length > 5) {
      scoreHistory.shift(); // Keep only the latest 5 scores
    }
    localStorage.setItem("scoreHistory", JSON.stringify(scoreHistory))

});

// // backward
// prevBtn.addEventListener('click', function () {
//     if (currentQuestion < quizData.length - 1) {
//         currentQuestion--;
//         // console.log(currentQuestion)
//         renderQuiz();
//     }

// });


function renderSummary() {
    renderedQuiz.innerHTML =  `
    <div class=" font-semibold">
        <p>You answered ${storage} out of ${quizData.length} questions</p>

        <p>Your score is ${score}</p>
    </div>

    <button id="resetBtn" class="bg-slate-500 text-white p-2 rounded-md">Restart</button>   
    
    <div class="flex flex-col justify-between items-center p-6 bg-slate-500 text-white font-semibold rounded-md ">
        <h3>Score History - Last five attempts</h3>
        <p>check the console</p>
        <ul> ${scoreHistory.map((score, index) => `<li>Attempt ${index + 1} = ${score}</li>`).join('')}
        
        </ul>

    </div>
   
    `;
   

    prevBtn.disabled = true;
    nextBtn.disabled = true;
    nextBtn.remove();
    prevBtn.remove();
    //timerInterval.remove();
    // clearInterval(timerInterval); // Stop the timer at the summary page   
//    corrected reset button code
    const resetBtn = document.getElementById("resetBtn");
    resetBtn.addEventListener('click', function () {
    //   location.reload();  removing this because its reloading the page and not rerendering
      resetQuiz();
    });
    
}

//  // the removed initialization
//  let retakeQuiz = document.getElementById("resetBtn");
//  retakeQuiz.addEventListener('click', resetQuiz);




 function resetQuiz() {
    counter = 0;
    currentQuestion = 0;
    storage = 0;
    score = 0;
        
    document.getElementById('btns').append(nextBtn);
    nextBtn.disabled = false;
    renderQuiz();
  }


function updateProgressMeter(){
    // progress.value = (currentQuestion / quizData.length) * 100;
   let percentage=((currentQuestion +1) / quizData.length) * 100;
    progress.value=percentage;
    
}













// This function will render the quiz ie the questions and options that were put in a new div
// the innerHTML attribute was used with back ticks to allow the content of the html elements to show up (content only)
// it was give a const which was called on.
function renderQuiz() {
    renderedQuiz.innerHTML = `

<div id="container" class="flex flex-col justify-center border-2 rounded-md bg-slate-100 w-2/5 h-2/5">
   

    <h2 id="question" class="text-2xl font-semibold text-start p-6 flex justify-between items-center">
        ${quizData[currentQuestion].question}
    
            <span id="counter"> ${currentQuestion + 1} of ${quizData.length}</span>
    
        </h2>


    <div id="options" class="flex flex-col bg-slate- items-center p-6 gap-10">

        <div
            class="border-1 border-slate-500 bg-neutral-200 w-full flex items-center p-2 justify-between rounded-md">
            <label for="option-a">${quizData[currentQuestion].options[0]}</label>
            <input type="radio" name="option" id="option" value="${quizData[currentQuestion].options[0]}" required />
        </div>

        <div    
            class="border-1 border-slate-500 bg-neutral-200 w-full flex items-center p-2 justify-between rounded-md">
            <label for="option-b">${quizData[currentQuestion].options[1]}</label>
            <input type="radio" name="option" id="option" value="${quizData[currentQuestion].options[1]}" required />
        </div>

        <div
            class="border-1 border-slate-500 bg-neutral-200 w-full flex items-center p-2 justify-between rounded-md">
            <label for="option-c">${quizData[currentQuestion].options[2]}</label>
            <input type="radio" name="option" id="option" value="${quizData[currentQuestion].options[2]}" required />
        </div>

        <div
            class="border-1 border-slate-500 bg-neutral-200 w-full flex items-center p-2 justify-between rounded-md">
            <label for="option-d">${quizData[currentQuestion].options[3]}</label>
            <input type="radio" name="option" id="option" value="${quizData[currentQuestion].options[3]}" required />
        </div>

    </div>

`

// checking if the answer is correct or not
let myInputs = document.querySelectorAll("input");
// console.log(myInputs);
for (let myInput of myInputs) {
    myInput.addEventListener('input', checkAnswer);

}

timeLeft = 10;
clearInterval(timerInterval);
timer.textContent = timeLeft;
timerInterval = setInterval(() => {
  timeLeft--;
  timer.textContent = timeLeft;
  if (timeLeft === 0) {
    clearInterval(timerInterval);
    let clickEvent = new Event("click");
    nextBtn.dispatchEvent(clickEvent);
    checkAnswer();
  }
}, 1000);


function checkAnswer(e) {
    let myAnswer = quizData[currentQuestion].answer;
    // let myInputs = document.querySelectorAll("input");
    // for (let myInput of myInputs) {
    if (e.currentTarget.value === myAnswer) {
        e.currentTarget.parentElement.style.backgroundColor = 'forestgreen';
        e.currentTarget.parentElement.style.color = 'white';
        score = score +1;
        for (let myInput of myInputs) {
            myInput.disabled = true;
        }
    } else {
        e.currentTarget.parentElement.style.backgroundColor = 'darkred';
        e.currentTarget.parentElement.style.color = 'white';
        for (let myInput of myInputs) {
            if (myInput.value === myAnswer) {
                myInput.parentElement.style.backgroundColor = 'forestgreen';
               myInput.parentElement.style.color = 'white';
            }
            myInput.disabled = true;
        }

    }
}

};




















































































































// let myInputs = document.querySelectorAll("input");
// let myAnswer = quizData[currentQuestion].answer;
// let isCorrect = false;

// for (let myInput of myInputs){
//     if (myInput.checked && myInput.value == myAnswer) {
//         isCorrect = true;
//         myInput.parentElement.style.backgroundColor = 'green';
//         break;
//     } else if (myInput.checked && myInput.value != myAnswer) {
//         isCorrect = false;
//         myInput.parentElement.style.backgroundColor = 'red';
//     };
// };

// if (!isCorrect) {
//     let correctAnswer = document.createElement("p");
//     correctAnswer.textContent = `The correct answer was: ${myAnswer}`;
//     optionsList.appendChild(correctAnswer);
// };





































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
