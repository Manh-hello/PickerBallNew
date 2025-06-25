// Khởi tạo EmailJS (với SDK mới)
(function () {
    emailjs.init("wC1YEAQmW0koP4_SD");
})();

// Lắng nghe submit form
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.send("service_hzne0fq", "template_m5kiuhs", {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,     
        subject: document.getElementById("subject").value,   
        message: document.getElementById("message").value
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
