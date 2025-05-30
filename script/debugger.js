function runCodeFromEditor(editorId, outputId) {
  try {
    // Lấy code từ Monaco editor
    const code = editor.getValue();

    // Xoá nội dung debugOutput trước khi chạy
    const output = document.getElementById(outputId);
    output.textContent = '';

    // Tạo hàm mới với code lấy từ editor, dùng để chạy code an toàn hơn eval
    const result = new Function(code)();

    // Hiển thị kết quả trả về (nếu có)
    if (result !== undefined) {
      output.textContent = String(result);
    } else {
      output.textContent = 'Chạy code thành công (không có kết quả trả về)';
    }
  } catch (err) {
    // Hiển thị lỗi nếu có
    const output = document.getElementById(outputId);
    output.textContent = `Lỗi: ${err.message}`;
  }
}
