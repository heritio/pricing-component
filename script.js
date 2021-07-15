
let slider = document.querySelector("#myRange");

let priceAmount = document.querySelector(".component__price-amount");

let pageViews = document.querySelector(".component__pageview");

let yearlyBillingDiscount = document.querySelector(".component__switch-slider-checkbox");

slider.addEventListener("input", ()=>{
    let x = slider.value;
    var color = `linear-gradient(90deg, var(--soft-cyan-full-slider-bar) ${x}%, var(--light-grayish-blue-empty-slider-bar) ${x}%)`;
    slider.style.background = color;
})

slider.addEventListener("change" ,()=>{
    
    if(yearlyBillingDiscount.checked == true){
       var discount = ((slider.value / 3.125) * 25) / 100;
    }else{
        discount = 0;
    }
    pageViews.textContent = `${slider.value * 2}`
    priceAmount.textContent = `$${Math.round((slider.value / 3.125) - discount)}`
})
