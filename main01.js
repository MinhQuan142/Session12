let a = Number(prompt("Nhập số a:"));
let b = Number(prompt("Nhập số b:"));
let c = Number(prompt("Nhập số c:"));

function testcl(number) {
  if (number % 2 == 0) console.log(number + "Số chẵn");
  else console.log(number + "Số lẻ");
}
testcl(a);
testcl(b);
testcl(c);
