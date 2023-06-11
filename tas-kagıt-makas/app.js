//*--------Selectors---------*/

const selectionArticle = document.querySelector(".selection")

//? secilen elemanların tasiyicilari/
const yourChoiceDiv = document.getElementById("your-choice")
const pcChoiceDiv = document.getElementById("pc-choice")

//?message
const messagePar = document.querySelector(".message")

//?Score
const scoreCardSection = document.querySelector(".score-card")
const pcScoreSpan = document.getElementById("pc-score")
const yourScoreSpan = document.getElementById("your-score")

//?Modal
const modalCardSection = document.querySelector(".modal-card")
const finalMessagePar = document.getElementById("final-message")
const playAgainBtn = document.getElementById("play-again")





//*-------------Variables-----------*/
let userSelectImg = document.createElement("img")
let pcSelectImg = document.createElement("img")
let pcRandom

//?Colors
const YELLOW = "#f8da5b";
const RED = "#ff0000";
const GREEN = "#40a798";






//*-------------Event Listeners--------------*/
selectionArticle.addEventListener("click", (e) =>{
    if(e.target.id){
        userSelectImg.src = `./assets/${e.target.id}.png`
        userSelectImg.alt = e.target.id
        yourChoiceDiv.appendChild(userSelectImg)
        createPcSelection()
    }
})

playAgainBtn.addEventListener("click", () =>{
    modalCardSection.style.display = "none"
    window.location.reload()
})




//*-------------Functions----------------*/

const createPcSelection = () => {
    const pcArr = ["rock", "paper", "scissor"]
    pcRandom = pcArr[Math.floor(Math.random()*3)]
    pcSelectImg.src = `./assets/${pcRandom}.png`
    pcSelectImg.alt = pcRandom
    pcChoiceDiv.appendChild(pcSelectImg)
    calculateResult()
}

const calculateResult = () => {
    //?Esitlik

    if(userSelectImg.alt === pcRandom){
        draw()
    }else{
        if(userSelectImg.alt === "rock"){
            pcRandom === "paper" ? youLost() : youWin()
        }else if (userSelectImg.alt === "scissor"){
            pcRandom === "rock" ? youLost() : youWin()
        }else if (userSelectImg.alt === "paper"){
            pcRandom === "scissor" ? youLost() : youWin()
        }
    }
    if(pcScoreSpan.textContent === "10" || yourScoreSpan.textContent === "10"){
        openModal()
    }
}

const draw = () => {
    messagePar.textContent = "It's draw"
    scoreCardSection.style.color = YELLOW
    messagePar.style.backgroundColor = YELLOW
} 

const youLost = () => {
    messagePar.textContent = "You Lost"
    scoreCardSection.style.color = RED
    messagePar.style.backgroundColor = RED
    pcScoreSpan.textContent++
}

const youWin = () => {
    messagePar.textContent = "You Win"
    scoreCardSection.style.color = GREEN
    messagePar.style.backgroundColor = GREEN
}


//? modal ac
const openModal = () => {
    modalCardSection.classList.add("show")

    if(yourScoreSpan.textContent === "10"){
        //?eger kullanıcı 10 ulasti ise kullanıcı kazanmistir
        finalMessagePar.textContent = "💃You Win🕺"
        document.querySelector(".modal-card").style.backgroundColor = GREEN
        playAgainBtn.style.color = GREEN
    }else{
        //? eger pc 10 a ulasti ise pc kazanmistir
        finalMessagePar.textContent = "😒You Lost🙄"
    }
}

//! Local Storage'a veri yazma ve okuma
localStorage.setItem("highScore", 5)//?veri yazma 
console.log(localStorage.getItem("highScore")) //?veriokuma