let arrayString = ["viết chương trình khai báo chuỗi bất kỳ"];
function demKyTu(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      count++;
    }
  }
  return count;
}
let soKyTu = demKyTu(arrayString[0]);
console.log(
  "số lượng ký tự trong chuỗi ( không tính khoảng trắng) là: ",
  soKyTu
);
