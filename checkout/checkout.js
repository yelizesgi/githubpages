//const taxRate = 0.18;
// const shippingPrice = 25.99;
// const freeShippingPrice = 3000;


window.addEventListener("load", () => {
     // localStorage.setItem("taxRate", taxRate);
    // localStorage.setItem("shippingPrice", shippingPrice);
    // localStorage.setItem("freeShippingPrice", freeShippingPrice);

    ///total cart calc.
    calculateCartPrice()
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
        calculateCartPrice();
    }
});

//Capturing
productList.addEventListener("click", (e)=>{
    if(e.target.className == "fa-solid fa-minus"){
        if(e.target.nextElementSibling.innertext > 1){
            e.target.nextElementSibling.innerText --;
            calculateCartPrice(e.target);
        }
        else{
            if(confirm(`${e.target.closest(".main-product-info").querySelector("h2").innerText} will be removed`)){
                e.target.closest(".main-product").remove();
                calculateCartPrice()
            }
        }
    }

    //plus
    else if(e.target.classList.contains("fa-plus")){
        e.target.previousElemenSibling.innerText ++;
        calculateCartPrice(e.target);
    }

    //remove
    else if(e.target.id == "remove-product"){
        if(confirm(`${e.target.closest(".main-product-info").querySelector("h2").innerText} will be removed!`)){
            e.target.closest(".main-product").remove();
            calculateCartPrice();
        }
    }
    else{
        alert("other element clicked");
    }
    // calculaterCartPrice();
})

//target == minus || plus btn 
const calculateProductPrice = (btn) =>{
    //product line calculations
    const infoDiv =  btn.closest(".main-product-info");
    // console.log(infoDiv);
    const price = infoDiv.querySelector(".main-product-price strong").innerText;
    // console.log(price);
    const quantity = infoDiv.querySelector("#quantity").innerText;
    // console.log(quantity);
    infoDiv.querySelector(".main-product-line-price").innerText = (price * quantity).toFixed(2);
    calculateCartPrice()
}

const calculateCartPrice = () => {
    //cart total calculations
    const productPriceDivs = productList.querySelectorAll(".main-product-line-price");
    let subtotal = 0;
    //reduce calculation
    productPriceDivs.forEach(price=>{
        subtotal += parseFloat(price.innerText);
    });
    console.log(subtotal);
    const taxPrice = parseFloat(subtotal * localStorage.getItem("taxRate")); 
    console.log(taxPrice);

    const shippingPrice = subtotal > 0 && subtotal < localStorage.getItem("freeShippingPrice") ? parseFloat(localStorage.getItem("shippingPrice")) : 0;
    const totalPrice = (subtotal + shippingPrice + taxPrice).toFixed(2);
    console.log(taxPrice)
   
    document.querySelector(".main-total h2").innerText = subtotal.toFixed(2);
    document.querySelector("#cart-shipping span:nth-child(2)").innerText = shippingPrice.toFixed(2);
    document.querySelector("#cart-tax span:nth-child(2)").innerText = taxPrice.toFixed(2);
    document.querySelector("#cart-total").lastElementChild.innerText = totalPrice;

    if(productList.querySelectorAll(".main-product").length == 0){
        productList.innerText = "No Product!";
        navbarList.firstElementChild.innerText = "My Cart";
    }
    else{
        navbarList.firstElementChild.innerText = `My Cart(${productList.querySelectorAll(".main-product").length} Products)`;
    }
}