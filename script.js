// Xử lý sự kiện khi nhấn vào nút
document.getElementById('flowerBtn').addEventListener('click', function() {
  const message = document.getElementById('message');
  message.classList.toggle('hidden'); // Hiện/ẩn thông điệp
});