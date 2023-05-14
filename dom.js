//<h1>3. 이벤트 객체 : 개선된 계산기</h1>------------------------------------------
window.addEventListener("load", function () {
  var section = document.querySelector("#s3");
  var txtInput = section.querySelector("input[type=text]");

  var btnInputs = section.querySelectorAll(".num");
  var buttonClickHandler = function (e) {
    txtInput.value += e.target.value;
  };

  for (var i = 0; i < btnInputs.length; i++)
    btnInputs[i].onclick = buttonClickHandler;
});

//<h1>2. DOM 속성 다루기 : 계산기</h1>------------------------------------------

window.addEventListener("load", function () {
  var section = document.querySelector("#s2");
  var xInput = section.querySelector(".x-input");
  var yInput = section.querySelector(".y-input");
  var button = section.querySelector(".button");
  var resultSpan = section.querySelector("div>span>span");

  button.onclick = function () {
    var x = parseInt(xInput.value);
    var y = parseInt(yInput.value);
    resultSpan.textContent = x + y;
    console.log(x + y);
  };
});

//<h1>1. 노드 선택방법</h1>------------------------------------------

window.addEventListener("load", function () {
  // [#dom이 갖고있는 방법]
  // var section = document.getElementById("s1");
  // var input = section.getElementsByClassName("input")[0];
  // var button = section.getElementsByClassName("button")[0];
  // [#selectors API]
  // var section = document.querySelector("#s1");
  // var input = section.querySelector(".input");
  // var button = section.querySelector(".button");
  // button.onclick = function () {
  //   input.value = "안녕하세요";
  // };
});

//------------------------------------------------------------------

window.addEventListener("load", function () {
  var btnPrint = this.document.getElementById("btn-print");
  btnPrint.onclick = printResult;

  //[#page load event], 함수 지역화(고립)
  function printResult() {
    var x = prompt("x의 값을 입력하세요");
    var y = prompt("y의 값을 입력하세요");

    x = parseInt(x);
    y = parseInt(y);

    console.log(x + y);
  }
});

// window.onload = function () {
//   btnPrint.onclick = printResult;
// };
