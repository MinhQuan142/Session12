let myString = " chuỗi ký tự bất kỳ";
function vietHoa(str) {
  str = str.trim();
  // Tách chuỗi thành các từ 1
  let words = str.split(" ");
  // duyetj qua tuwfnng từ và viết chữ cái đầu
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  //   Nối các từ đã vieestt hao xong thành 1 chuỗi mới
  let chuoiVietHoa = words.join(" ");
  return chuoiVietHoa;
}
// gọi hàm và in kết quả
let chuoiMoi = vietHoa(myString);
console.log("Chuỗi mới đã được viết hoa những chữ cái đầu: ", chuoiMoi);
