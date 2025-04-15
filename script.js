let menuBtn = document.getElementById("line");
let mob = document.getElementById("mobile");
let closeBtn = document.getElementById("close");


menuBtn.addEventListener("click", menuBtnFunction);
closeBtn.addEventListener("click", closeBtnFunc);

function menuBtnFunction() {
    mob.style.top = "0px";
};

function closeBtnFunc() {
    mob.style.top = "-400px";
};




