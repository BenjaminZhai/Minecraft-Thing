// MINECRAFT FISHING SIM

// Variables to store HTML elements
let steveImgEl = document.getElementById("steveimg")
let alexImgEl = document.getElementById("aleximg")
let fishBtnEl = document.getElementById("fishbtn")
let resultImgEl = document.getElementById("img-result")
let codImgEl = document.getElementById("numcod")
let samImgEl = document.getElementById("numsam")
let tropImgEl = document.getElementById("numtrop")
let puffImgEl = document.getElementById("numpuff")

// Global Variables
let character = "Steve";
let numcod = 0;
let numsam = 0;
let numtrop = 0;
let numpuff = 0;


// event listeners
steveImgEl.addEventListener("click", steve);
alexImgEl.addEventListener("click", alex);
fishBtnEl.addEventListener("click", fishone)
// event functions
function steve(){
    // update active border
    steveImgEl.classList.add("active");
    alexImgEl.classList.remove("active");
    character = "Steve";
}

function alex(){
    // update active border
    steveImgEl.classList.remove("active");
    alexImgEl.classList.add("active");

    // update char select variable
    character = "Alex";
}

function fishone() {
    // test character
    if (character === "Steve"){
        // use steve probability for fishing
        let ranum = Math.random();
        console.log (ranum)
        if (ranum < 0.7){
            numcod++
            resultImgEl.src = "img/Raw-Cod.png";
            codImgEl.innerHTML = numcod
        } else if(ranum < 0.9){
            numsam++
            resultImgEl.src = "img/Raw-Salmon.png";
            samImgEl.innerHTML = numsam

        } else if (ranum < 0.95){
            numtrop++
            resultImgEl.src = "img/Tropical-Fish.png";
            tropImgEl.innerHTML = numtrop

        } else {
            numpuff++
            resultImgEl.src = "img/Pufferfish.png";
            puffImgEl.innerHTML = numpuff
        }
    } else {
        // use alex probability for fishing
        let ranum = Math.random();
        console.log (ranum)
        if (ranum < 0.1){
            numcod++
            resultImgEl.src = "img/Raw-Cod.png";
            codImgEl.innerHTML = numcod
        } else if(ranum < 0.2){
            numsam++
            resultImgEl.src = "img/Raw-Salmon.png";
            samImgEl.innerHTML = numsam

        } else if (ranum < 0.5){
            numtrop++
            resultImgEl.src = "img/Tropical-Fish.png";
            tropImgEl.innerHTML = numtrop

        } else {
            numpuff++
            resultImgEl.src = "img/Pufferfish.png";
            puffImgEl.innerHTML = numpuff
    }
    }}
