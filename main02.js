let arrayString = ["a", "xin chào", "hello world", "Thầy Phước", "c"];
function checkMax(arrayString) {
  let Max = arrayString[0];
  for (let i = 0; i < arrayString.length; i++) {
    if (arrayString[i].length > Max.length) {
      Max = arrayString[i];
    }
  }
  return Max;
}
console.log("String dài nhất trong Array là ", checkMax(arrayString));
