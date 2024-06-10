// viết hàm để người dùng nhập vào 1 chuỗi và 1 ký tự bất kỳ
let inputString = prompt("Nhập 1 chuỗi bất kỳ");
let inputChar = prompt("Nhập một lý tự bất kỳ");
// Xây dựng hàm đến ký tự
function demKyTu(Str, Char) {
  // tạo 1 biến  count và gán giá trị ban đầu = 0 để lưu số lần xuất hiện của ký tự

  let count = 0;
  //   tạo 1 vòng lặp for, nếu ký tự trong str mà trùng vs char thì count + 1
  for (let i = 0; i < Str.length; i++)
    if (Str.charAt(i) === Char) {
      count++;
    }
  // kết thúc vòng lặp trả về return
  return count;
}
// tạo 1 biến là Số lần xuất hiện, rồi dùng hàm của vòng lặp for để duyệt
let soLanXuatHien = demKyTu(inputString, inputChar);
// in ra kq
console.log(
  `Số lần xuất hiện của ký tự ${inputChar} trong chuỗi ${inputString} là :`,
  soLanXuatHien
);
