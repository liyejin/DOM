//<h1>1. 노드 선택방법</h1>------------------------------------------

window.addEventListener("load", function () {
  var section = document.getElementById("s1");
  var input = section.getElementsByClassName("input")[0];
  var button = section.getElementsByClassName("button")[0];

  button.onclick = function () {
    input.value = "안녕하세요";
  };
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
