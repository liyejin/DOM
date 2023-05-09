//[#page load event]
function printResult() {
  var x = prompt("x의 값을 입력하세요");
  var y = prompt("y의 값을 입력하세요");

  x = parseInt(x);
  y = parseInt(y);

  console.log(x + y);
}
window.onload = function () {
  btnPrint.onclick = printResult;
};
