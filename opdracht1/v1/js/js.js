/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/


//Huis1
var huisA = document.querySelector('.infoA');

var formulier = document.querySelector('.filterform');

//console.log(formulier);

function openA() {
    formulier.classList.toggle('active');

}

huisA.addEventListener('click', openA);


//Huis2

var huisB = document.querySelector('.infoB');

var formulier2 = document.querySelector('.filterform2');

function openB() {
    formulier2.classList.toggle('active');

}
huisB.addEventListener('click', openB);


//Huis3

var huisC = document.querySelector('.infoC');

var formulier3 = document.querySelector('.filterform3');

function openC() {
    formulier3.classList.toggle('active');

}
huisC.addEventListener('click', openC);


//Huis 4


var huisD = document.querySelector('.infoD');

var formulier4 = document.querySelector('.filterform4');

function openD() {
    formulier4.classList.toggle('active');

}
huisD.addEventListener('click', openD);



//Huis 5

var huisE = document.querySelector('.infoE');

var formulier5 = document.querySelector('.filterform5');

function openE() {
    formulier5.classList.toggle('active');

}
huisE.addEventListener('click', openE);


//Huis 6

var huisF = document.querySelector('.infoF');

var formulier6 = document.querySelector('.filterform6');

function openF() {
    formulier6.classList.toggle('active');

}
huisF.addEventListener('click', openF);
