

// import { ReactDOM } from "react-dom";
let scrollContainer=document.getElementById("scrollContainer");

const pgOne= document.getElementById("pgone");

const pgTwo= document.getElementById("pgtwo");
const pgThree= document.getElementById("pgthree");
const pgFour= document.getElementById("pgfour");
const pgFive= document.getElementById("pgfive");
// const pgSix= document.getElementById("pgsix");
// const pgSeven= document.getElementById("pgseven");
// const pgEight= document.getElementById("pgeight");
let scroll= 540;



pgTwo.addEventListener('click' , ()=>{
    window    
});
pgOne.addEventListener('click' , ()=>{
    pgTwo.scroll +=scroll;
})
pgThree.addEventListener('click' , ()=>{
    pgTwo.scroll +=scroll;
})










let scrollAmount=550;

pgOne.addEventListener('click',()=>{
    scrollContainer.scrollTop +=scrollAmount;
});
pgTwo.addEventListener('click',()=>{
    scrollContainer.scrollTop +=scrollAmount;
});
pgThree.addEventListener('click',()=>{
    scrollContainer.scrollTop +=scrollAmount;
});
pgFour.addEventListener('click',()=>{
    scrollContainer.scrollTop +=scrollAmount;
});
pgFive.addEventListener('click',()=>{
    scrollContainer.scrollTop +=scrollAmount;
});


console.log("hi")