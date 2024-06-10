// Khai báo mảng số nguyên
let arr = [1, 5, 2, 3, 9, 7];

// Yêu cầu người dùng nhập số nguyên
let targetSum = Number(prompt("Nhập số nguyên bất kỳ:"));

// Hàm tìm cặp số có tổng bằng targetSum
function findPairWithSum(arr, targetSum) {
  // Sử dụng Set để lưu các số đã duyệt qua
  let numSet = new Set();

  for (let num of arr) {
    let complement = targetSum - num; // Số còn lại cần tìm

    if (numSet.has(complement)) {
      // Nếu số còn lại đã tồn tại trong Set, trả về cặp số
      return [num, complement];
    }

    numSet.add(num); // Thêm số hiện tại vào Set
  }

  return null; // Không tìm thấy cặp số phù hợp
}

// Gọi hàm và in kết quả
const result = findPairWithSum(arr, targetSum);
if (result) {
  console.log("Cặp số có tổng bằng", targetSum, "là:", result);
} else {
  console.log("Không tìm thấy cặp số phù hợp.");
}
