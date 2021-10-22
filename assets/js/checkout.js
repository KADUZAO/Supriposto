//NUMBERS

const plusOne = document.querySelector(".select1 .minus");
const minusOne = document.querySelector(".select1 .plus");
const numOne = document.querySelector(".select1 .num");
const priceOne = document.querySelector(".select1 .de strong");
const priceOneDesconto = document.querySelector(".select1 .price .price");
const priceOneParcela = document.querySelector(".select1 .parcela");

let indexNumOne = 1;
let indexPriceOne = 2000;
let indexPriceOneDesconto = 1280;
let indexPriceOneParcela = Math.round(((indexPriceOneDesconto * 0.1106) + indexPriceOneDesconto) / 12 + 0.60);
priceOneParcela.innerText = `ou até 12x R$ ${indexPriceOneParcela},00`;

plusOne.addEventListener("click", () => {
    indexNumOne++;
    indexNumOne = (indexNumOne < 10) ? "0" + indexNumOne : indexNumOne;
    numOne.innerText = indexNumOne;
    priceOne.innerText = `R$ ${indexPriceOne * indexNumOne},00`
    priceOneDesconto.innerText = `R$ ${indexPriceOneDesconto * indexNumOne},00`
    priceOneParcela.innerText = `ou até 12x R$ ${indexPriceOneParcela * indexNumOne},00`
})

minusOne.addEventListener("click", () => {
    if(indexNumOne > 1) {
        indexNumOne--;
        indexNumOne = (indexNumOne < 10) ? "0" + indexNumOne : indexNumOne;
        numOne.innerText = indexNumOne;
        priceOne.innerText = `R$ ${indexPriceOne * indexNumOne},00`
        priceOneDesconto.innerText = `R$ ${indexPriceOneDesconto * indexNumOne},00`
        priceOneParcela.innerText = `ou até 12x R$ ${indexPriceOneParcela * indexNumOne},00`
    }
})

const plusTwo = document.querySelector(".select2 .minus");
const minusTwo = document.querySelector(".select2 .plus");
const numTwo = document.querySelector(".select2 .num");
const priceTwo = document.querySelector(".select2 .de strong");
const priceTwoDesconto = document.querySelector(".select2 .price .price");
const priceTwoParcela = document.querySelector(".select2 .parcela");

let indexNumTwo = 1;
let indexPriceTwo = 3000;
let indexPriceTwoDesconto = 2650;
let indexPriceTwoParcela = Math.round(((indexPriceTwoDesconto * 0.1106) + indexPriceTwoDesconto) / 12 + 0.60);
priceTwoParcela.innerText = `ou até 12x R$ ${indexPriceTwoParcela},00`

plusTwo.addEventListener("click", () => {
    indexNumTwo++;
    indexNumTwo = (indexNumTwo < 10) ? "0" + indexNumTwo : indexNumTwo;
    numTwo.innerText = indexNumTwo;
    priceTwo.innerText = `R$ ${indexPriceTwo * indexNumTwo},00`
    priceTwoDesconto.innerText = `R$ ${indexPriceTwoDesconto * indexNumTwo},00`
    priceTwoParcela.innerText = `ou até 12x R$ ${indexPriceTwoParcela * indexNumTwo},00`
})

minusTwo.addEventListener("click", () => {
    if(indexNumTwo > 1) {
        indexNumTwo--;
        indexNumTwo = (indexNumTwo < 10) ? "0" + indexNumTwo : indexNumTwo;
        numTwo.innerText = indexNumTwo;
        priceTwo.innerText = `R$ ${indexPriceTwo * indexNumTwo},00`
        priceTwoDesconto.innerText = `R$ ${indexPriceTwoDesconto * indexNumTwo},00`
        priceTwoParcela.innerText = `ou até 12x R$ ${indexPriceTwoParcela * indexNumTwo},00`
    }
})