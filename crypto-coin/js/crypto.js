const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msgSpan = document.querySelector(".container .msg");
const coinList = document.querySelector(".ajax-section .container .coins")

//Apı-Key coinranking30e252f11e6a42ab9c9cce0cf7a8eaa9e5a75a462e1f40b9
//!----Events-----//
//Locelstrage
localStorage.setItem("apiKey", EncryptStringAES("coinranking30e252f11e6a42ab9c9cce0cf7a8eaa9e5a75a462e1f40b9"));
form.addEventListener("submit", (e) => {
    e.preventDefault();
    getCoinDataFromApi();
    //form.reset == e.target.reset
    e.target.reset();
})






//!----Function-----//
const getCoinDataFromApi = async () => {
    // alert("Get Coin Data!");
    const apiKey = DecryptStringAES(localStorage.getItem("apiKey"));
    //!template literal
    const url = `https://api.coinranking.com/v2/coins?search=${input.value}&limit=1`;
    const options = {
        headers: {
            'x-access-token': apiKey,
        },
    };
    // fetch vs. axios
    //const respons = await fetch(url, options)
    //then((response) =>  respons.json())
    //then ((result) => console.log(result.data.coins[0]));

    try{
        const response = await axios(url,options);
        // console.log(response.data.data.coins[0])
        //obj.dest.
        const {price, name, change, iconUrl, symbol} = response.data
        // console.log(iconUrl)

        //!Coin Control!!!
        const coinNameSpans = coinList.querySelector("h2 span")
        //filter vs. map(array)
        if(coinNameSpans.length > 0){
            const filteredArray = [...coinNameSpans].filter(span => span.innerText == name);
            console.log(filteredArray);
            if(filteredArray.length > 0){
                msgSpan.innerText = `You already know data for ${name}, Please search for another coin 🤑`;
                setTimeout( () => {
                    msgSpan.innerText = "";
                }, 3000);
                return;
            }
        }

        //continue xxxx return
        const createdLi = document.createElement("li");
        createdLi.classList.add("coin");
        createdLi.innerHTML =`
        <h2 class="coin-name" data-name=${name}>
            <span>${name}</span>
            <sup>${symbol}</sup>
        </h2>
        <div class="coin-temp">$${Number(price).toFixed(6)}</div>
        <figure>
            <img class="coin-icon" src=${iconUrl}>                
            <figcaption style='color:${change < 0 ? "red" : "green"}'>
                <span><i class="fa-solid fa-chart-line"></i></span>
                <span>${change}%</span>
            </figcaption>
        </figure>
        <span class="remove-icon">
            <i class="fas fa-window-close" style="color:red"></i>
        </span>`;
        
        //apend vs. prepend
        //apen vs. appendchild
        coinList.prepend(createdLi);

        //!remove func.
        createdLi.querySelector(".remove-icon").addEventListener("click", () => {
            createdLi.remove();
        });
    }
    catch(error){
     //error loging
     //postErrorlog("crypto.js", "getCoinDataFromApi", new Date(), error...);
     msgSpan.innerText = `Coin not found!`;
     setTimeout(() => {
        msgSpan.innerText = "";
     }, 3000)
    }

}

