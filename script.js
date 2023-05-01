let counter = 0;
let counterText = document.querySelector(".counter");
let meaning = 0;

const btn = document.querySelector(".btn-counter");
const btn_reset = document.querySelector(".btn-reset");

btn.addEventListener('click', function(){
    counter = counter + 1;
    console.log(counter);
    counterText.innerText = counter;
});

btn_reset.addEventListener('click', function(){
    counter = meaning;
    counterText.innerText = meaning;
});