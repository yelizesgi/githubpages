const form = document.querySelector("top-banner form");
const input = document.querySelector("top-banner input");
const msgSpan = document.querySelector(".container .msg");
const coinList = document.querySelector("ajax-section .container .coins")


//!----Events-----//
form.addEventListener("submit", (e)=>{
    e.preventDefault()
    getCoinDataFromApi();
    //form.reset() == e.target.reset() == 
    e.target.reset()
})






//!----Function-----//
const getCoinDataFromApi = () =>{
    // alert("Get Coin Data!");
    const apiKey = window.localStorage.getItem("apiKey")
}