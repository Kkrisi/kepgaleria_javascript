import { KEPEK } from "./adatok.js";
import { htmlOsszeAllit } from "./fuggvenyek.js";

/*1. feladat:  galéria kisképeinek elhelyezése */
/* fogd meg a .galeria elemet */
const galeriaELem = document.getElementsByClassName("galeria")[0]
console.log(galeriaELem)

/* írd bele az összeálíltott html képsorozatot */
galeriaELem.innerHTML += htmlOsszeAllit(KEPEK)


/*2. feladat  A .nagykep divben lévő img elem megfogása */
const nagykepImgELem = document.querySelector(".nagykep img")

/* A .nagykep div megfogása */
const nagykepELem = document.querySelector(".nagykep")


/*3. feladat-  eseménykezelő hozzáadása a kisképekhez  */
/* Az előzőekben létrehozott kisképek megfogása (querySelectorAll) - ez egy lista lesz */
const kiskepElemek = document.querySelectorAll(".kep") //lista
for (let i = 0; i < kiskepElemek.length; i++) {
    /* eseménykezelő hozzáadása a kisképekhez, ciklussal */
    kiskepElemek[i].addEventListener("click", function (event){
        console.log(event.target.src)
        nagykepImgELem.src = event.target.src
    }
    )
}




/* Az eseménykezelő függvényében: ha a kisképre kattintunk, akkor a nagykép src attribútumát le kell cserélni a kiskép src attribútumában megadott elérési útvonalra  */

let aktIndex = 0;

/* 4. feladat .bal és a .jobb gombokra kattintva léptessük a galériát */
/* 1. Fogd meg a jobb gombot*/
const jobbElem = document.getElementsByClassName("jobb")[0]
const balElem = document.getElementsByClassName("bal")[0]

/*2. Tegyél rá egy eseménykezelőt*/
jobbElem.addEventListener("click", jobbraKatt)
balElem.addEventListener("click", balraKatt)

/*3. Az eseménykezelőben az aktindex változó értékét növeld*/
/* aktindex változónak megfelelp kép elérési utját cseréld le a nagykepelem img src-jében*/
function jobbraKatt(){
    aktIndex++;
    //aktIndex = aktIndex % KEPEK.length;
    if(aktIndex >= KEPEK.length){
        aktIndex = 0;
    }
    console.log(aktIndex)
    console.log(KEPEK[aktIndex].kep)
    nagykepImgELem.src = KEPEK[aktIndex].kep
}


function balraKatt(){
    aktIndex++;
    if(aktIndex >= 0){
        aktIndex = KEPEK.length;
    }
    console.log(aktIndex)
    console.log(KEPEK[aktIndex].kep)
    nagykepImgELem.src = KEPEK[aktIndex].kep
}


