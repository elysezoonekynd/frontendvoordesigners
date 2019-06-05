/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var uri = "https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json";

var header = document.querySelector('header');
var section = document.querySelector('section');

console.log("loadimagesmetXHR");
var request = new XMLHttpRequest();
request.open('get', uri);
request.responseType = 'json';
request.send();
button = document.querySelector('button');
button.addEventListener("click", function(){
  var data = request.response;
  console.log("request is geladen: ",request.response);
populateHeader(data[0]);
populateHeader(data[1]);
populateHeader(data[2]);
populateHeader(data[3]);
populateHeader(data[4]);
populateHeader(data[5]);
  //er is data
  //nu kun je iets doen
  //section.textContent = JSON.stringify(data);});
});

function populateHeader(jsonObj) {
  var myH1 = document.createElement('h1');
  myH1.textContent = jsonObj['title'];
  section.appendChild(myH1);

var MyPara = document.createElement('p');
    MyPara.textContent = jsonObj['plot']
    section.appendChild(MyPara);

var myImg = document.createElement('img')
myImg.src = jsonObj['cover'];
    section.appendChild(myImg);
}


