//const taxRate = 0.18;
// const shippingPrice = 25.99;
// const freeShippingPrice = 3000;


window.addEventListener("load", () => {
     // localStorage.setItem("taxRate", taxRate);
    // localStorage.setItem("shippingPrice", shippingPrice);
    // localStorage.setItem("freeShippingPrice", freeShippingPrice);

    ///total cart calc.
    calculaterCartPrice()
})

//!Selector

const navbarList = document.querySelector(".nav-list");
const productList = document.querySelector("div.main-product-painel");

//capturing
navbarList.addEventListener("click", (e) =>{
    if(e.target.getAttribute("class") == "nav-listibtn" || "fa-regular fa-trash-can"){
       //e.target.parentElement.firstElementChild.innerText = "My Cart";
        //e.target.previousElementSibling.innerText = "My Cart";
        //e.target vs. e.currentTarget
        //foreach ==> array, nodeList
        productList.innerText = "No Product";
        e.currentTarget.firstElementChild.innerText = "My Cart";
        calculaterCartPrice();
    }
});

//Capturing
productList.addEventListener("click", (e)=>{
    if(e.target.className == "fa-solid fa-minus"){
        if(e.target.nextElementSibling.innertext > 1){
            e.target.nextElementSibling.innerText --;
            calculaterCartPrice(e.target):
        }
        else{
            if(confirm(`${e.target.closest(".main-product-info").querySelector("h2").innerText} will be removed`)){
                e.target.closest(".main-product").remove();
                calculaterCartPrice()
            }
        }
    }

    //plus
    else if(e.target.classList.contains("fa-plus")){
        e.target.previousElemenSibling.innerText ++;
        calculaterCartPrice(e.target);
    }

    //remove
    else if(e.target.id == "remove-product"){
        if(confirm(`${e.target.closest(".main-product-info").querySelector("h2").innerText} will be removed!`)){
            e.target.closest(".main-product").remove();
            calculaterCartPrice();
        }
    }
    else{
        alert("other element clicked");
    }
    // calculaterCartPrice();
})