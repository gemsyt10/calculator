/*====================
=====    DOM     =====
====================*/
const TextContainer = document.querySelector("h1");

const btn1 = document.getElementById("1");
const btn2 = document.getElementById("2");
const btn3 = document.getElementById("3");
const btn4 = document.getElementById("4");
const btn5 = document.getElementById("5");
const btn6 = document.getElementById("6");
const btn7 = document.getElementById("7");
const btn8 = document.getElementById("8");
const btn9 = document.getElementById("9");
const btn0 = document.getElementById("0");

const btnAdd = document.getElementById("+");
const btnSubtract = document.getElementById("-");
const btnShare = document.getElementById("÷");
const btnMultiply = document.getElementById("×");
const btnToDecide = document.getElementById("equal")
const resetBtn = document.getElementById("reset-btn")
const bindBtn = document.getElementById("bind")
const clearBtn = document.getElementById("clear-btn")
const interestBtn = document.getElementById("interest")
let TextContent = "";

function TextContentCalculator(symbol){
    TextContent += symbol
    TextContainer.textContent= `${TextContent}`
}
function removeSymbolFromCalculator() {
  let textFromArray = Array.from(TextContent)
  return textFromArray.slice(0,-1)
}

btn1.addEventListener("click", () => TextContentCalculator('1'));
btn2.addEventListener("click", () => TextContentCalculator('2'));
btn3.addEventListener("click", () => TextContentCalculator('3'));
btn4.addEventListener("click", () => TextContentCalculator('4'));
btn5.addEventListener("click", () => TextContentCalculator('5'));
btn6.addEventListener("click", () => TextContentCalculator('6'));
btn7.addEventListener("click", () => TextContentCalculator('7'));
btn8.addEventListener("click", () => TextContentCalculator('8'));
btn9.addEventListener("click", () => TextContentCalculator('9'));
btn0.addEventListener("click", () => TextContentCalculator('0'));
btnAdd.addEventListener("click", () => TextContentCalculator('+'));
btnSubtract.addEventListener("click", () => TextContentCalculator('-'));
btnShare.addEventListener("click", () => TextContentCalculator('/'));
btnMultiply.addEventListener("click", () => TextContentCalculator('*'));
interestBtn.addEventListener("click", () =>{
   try {
      TextContent = eval(TextContent)/100+""
      TextContainer.textContent = TextContent
      if(TextContent == NaN) {
          TextContent = ''
          TextContainer.textContent = ''
      }
   }catch(err) {
       TextContainer.textContent = "Ошибка"
       TextContent = ''
   }
})
btnToDecide.addEventListener("click", () => {
    try {
        TextContent = eval(TextContent)+"";
        TextContainer.textContent = TextContent;
        if(TextContent == "undefined"){
            TextContainer.textContent= ''
            TextContent = ''
        }
    } catch (err) {
        TextContainer.textContent = "Ошибка";
        TextContent = "";
    }
});
resetBtn.addEventListener("click", () => {
    TextContent = ''
    TextContainer.textContent = ''
})
bindBtn.addEventListener("click", () => TextContentCalculator('.'))
clearBtn.addEventListener("click", ()=> {
TextRemSymbol= removeSymbolFromCalculator();
TextContent = TextRemSymbol.join("")
TextContainer.textContent = TextContent;
})
