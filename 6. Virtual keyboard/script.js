const keyBoard = [
  113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93,13,  97, 115, 100,
  102, 103, 104, 106, 107, 108, 59, 39,  122, 120, 99, 118, 98, 110, 109, 44,
  46, 47,32
];



let textLine = '';
const inputText = document.getElementById('input');
const spaceButton = document.getElementById('34');
let backspaceButton = 'Back Space';




function init() {
  let out = '';
  for (i = 0; i < keyBoard.length; i++) {
    if(i === 13 || i === 24 || i === 34) {
      out += '<div class = "clearfix"></div>';
    }
    out +='<div class = "k-key" id = "key'+ [i] +'" data = "'+keyBoard[i]+'">' +
     String.fromCharCode(keyBoard[i])
      + '</div>';
      
  }

  document.querySelector('#keyboard').innerHTML = out;
}


init();


document.querySelectorAll('#keyboard .k-key').forEach(function (element)  {
  element.onclick = function (event) {
    document.querySelectorAll('#keyboard .k-key').forEach(function (element) {  
    }) ;
    let code = this.getAttribute('data');
    textLine += String.fromCharCode(code);
    inputText.value = textLine;
    console.log(textLine)
  }
});


document.getElementById("key12").innerHTML = backspaceButton;
document.getElementById("key34").innerHTML = spaceButton;
document.getElementById("key12").onclick = backspace; 

function backspace(){
  textLine = textLine.substring(0 , textLine.length -1);
  document.querySelector("#input").value = textLine;
  
}

function buttonSpace () {
  textLine += ' ';
}

