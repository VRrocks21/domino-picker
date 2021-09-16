//  I want to create an app
// which picks a random domino for users
// Dates back to the 1200's

function domRandomNumber (min, max) {// min and max num included
    // Source: https://stackoverflow.com/a/7228322/1034856
    // License: https://creativecommons.org/licenses/by-sa/4.0
    return Math.floor(Math.random() * (max - min + 1) + min);
    }

"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,:;'\"()[]{}*&^%$#@!\\/|`~<>?-_=+"

let mainDomElement = document.querySelectorAll("main");
console.log(mainDomElement);

let domSet = "🁣 🁤 🁥 🁦 🁧 🁨 🁩 🁪 🁫 🁬 🁭 🁮 🁯 🁰 🁱 🁲 🁳 🁴 🁵 🁶 🁷 🁸 🁹 🁺 🁻 🁼 🁽 🁾 🁿 🂀 🂁 🂂 🂃 🂄 🂅 🂆 🂇 🂈 🂉 🂊 🂋 🂌 🂍 🂎 🂏 🂐 🂑 🂒 🂓"
let domList = Array.from(domSet);
console.log(domList);

let domIndexA = 0;
let domIndexB = domList.length -1;
//Run test for random number between A & B Index
let randomDomIndex = domRandomNumber(domIndexA, domIndexB);
let domElement = domList[randomDomIndex];
//console.log(domSet);

for (let index = 0; index < domList.length; index += 1) {
    let currentDomino = domList[index]
    
let domElement = document.createElement("div") // <div></div> 
domElement.append(currentDomino); // <div>🁶</div>;
domElement.classList.add("domino"); // <div class="domino selected">🁶</div>;

let mainDomElement = document.querySelector("main"); // <main></main> 
mainDomElement.append(domElement) // <main><div class="domino selected">🁶</div></main>
if (currentDomino === mainDomElement) {
    domElement.classList.add("selected");
console.log(mainDomElement);
}
}





