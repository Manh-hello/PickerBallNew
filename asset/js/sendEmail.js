// Khởi tạo EmailJS (với SDK mới)
(function () {
    emailjs.init("wC1YEAQmW0koP4_SD");
})();

// Lắng nghe submit form
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Lấy giá trị các trường
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Kiểm tra nếu có trường nào rỗng
    if (!name || !email || !phone || !subject || !message) {
        alert("Vui lòng điền đầy đủ tất cả các trường trước khi gửi.");
        return;
    }

    // Gửi email
    emailjs.send("service_hzne0fq", "template_m5kiuhs", {
        name: name,
        email: email,
        phone: phone,
        subject: subject,
        message: message
    }).then(
        function (response) {
            alert("Gửi thành công! 🎉");
            document.getElementById("contactForm").reset();
        },
        function (error) {
            alert("Có lỗi xảy ra khi gửi: " + JSON.stringify(error));
        }
    );
});
