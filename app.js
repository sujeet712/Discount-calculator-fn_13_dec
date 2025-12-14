const originalPriceEl = document.getElementById("originalPrice");
const discountPercentageEl = document.getElementById("discountPercentage");
const calculateDiscountBtnEl = document.getElementById("calculateDiscount");
let calculationstepsEl = document.getElementById("discountPercentage");

const discountedPriceEl  = document.getElementById("discountedPrice");
const discountAmountEl  = document.getElementById("discountAmount");
// let a = (originalPriceEl.value);
// const priceValue = parseInt(a);
// console.log(priceValue);

// let b = discountPercentageEl.value;
// const discountValue = parseInt(b);
// console.log(discountValue);


calculateDiscountBtnEl.addEventListener("click", function(){
    let a = (originalPriceEl.value);
    const priceValue = parseInt(a);
    console.log(priceValue);

     let b = discountPercentageEl.value;
const discountValue = parseInt(b);
console.log(discountValue);
     if( priceValue >0 && discountValue > 0){
         let a = (priceValue*discountValue)/100;
         let disPrice =  priceValue - a;
         discountedPriceEl.textContent = disPrice;
         discountAmountEl.textContent = a;
         calculationstepsEl = "";
    }
    else if(priceValue < 0 || discountValue < 0 || priceValue === "" || discountValue===""){
         discountedPriceEl.textContent = "Error";
        discountAmountEl.textContent = "Error";
        calculationstepsEl = "";
    }
    else if ( isNaN(priceValue) || isNaN(discountValue)){
         discountedPriceEl.textContent = "Error";
        discountAmountEl.textContent = "Error";
        calculationstepsEl = "";
    }
   
    // if(!isNaN(priceValue) || !isNaN(discountValue) || priceValue< 0 || discountValue < 0 )
    // {
    //     discountedPriceEl.textContent = "Error";
    //     discountAmountEl.textContent = "Error";
    //     calculationstepsEl = "";
    // }
    // // if(priceValue >0 && discountValue > 0)
    // // {
    // //       let a = (priceValue*discountValue)/100;
    // //      let disPrice =  priceValue - a;
    // //      discountedPriceEl.textContent = disPrice;
    // //      discountAmountEl.textContent = a;
    // //      calculationstepsEl = "";
    // // }
    // else if( priceValue ==="" || discountValue === "" )
    // {
    //     discountedPriceEl.textContent = "Error";
    //     discountAmountEl.textContent = "Error";
    //     calculationstepsEl = "";
    // }
    // else{
    //     let a = (priceValue*discountValue)/100;
    //     let disPrice =  priceValue - a;
    //     discountedPriceEl.textContent = disPrice;
    //     discountAmountEl.textContent = a;
    //     calculationstepsEl = "";
        
    // }
});
