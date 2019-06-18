/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var uri = "https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json";

//var header = document.querySelector('header');
var section = document.querySelector('section');



var button = document.querySelector('button');
button.addEventListener("click", haalFilmsOp);

button.addEventListener("keydown", buttonIngedrukt);

function haalFilmsOp(){
    button.innerHTML = "Films ophalen...";
    var request = new XMLHttpRequest();
    request.open('get', uri);
    request.responseType = 'json';
    request.send();

    request.addEventListener("load", function(){
        setTimeout(function(){
            button.innerHTML = "Films nog een keer laden";
            var data = request.response;
            //console.log("request is geladen: ",     request.response);
            populateHeader(data[0]);
            populateHeader(data[1]);
            populateHeader(data[2]);
            populateHeader(data[3]);
            populateHeader(data[4]);
            populateHeader(data[5]);
        }, 2000);
    });

    request.timeout = 1000;

    request.ontimeout = function() {
        button.innerHTML = "Mislukt, nog een keer proberen!";
    }
}

function buttonIngedrukt (e){
    if (e.key == "m" || e.key == "s") {
        haalFilmsOp();
    }
}

function populateHeader(jsonObj) {
    var myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['title'];

    var MyPara = document.createElement('p');
    MyPara.textContent = jsonObj['plot'];

    var myImg = document.createElement('img');
    myImg.src = jsonObj['cover'];

   var genre =document.createElement('h2')
   genre.textContent = jsonObj ['genres'];

    var myArticle = document.createElement('article');
    myArticle.appendChild(myH1);
     myArticle.appendChild(genre);
    myArticle.appendChild(myImg);
    myArticle.appendChild(MyPara);

    section.appendChild(myArticle);
}
