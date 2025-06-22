const tournamentData = [
  {
    image: "https://images.pexels.com/photos/8007401/pexels-photo-8007401.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
    title: "Giải Pickleball Mở Rộng Đà Nẵng 2024",
    description: "Giải đấu quy tụ các tay vợt hàng đầu miền Trung với nhiều hạng mục thi đấu hấp dẫn.",
    date: "20/12/2024",
    location: "Trung tâm Thể thao Đà Nẵng",
    prize: "100 triệu VNĐ",
    participants: "200 vận động viên tham gia",
    categories: "5 hạng mục thi đấu",
    status: "upcoming"
  },
  {
    image: "https://images.pexels.com/photos/8007398/pexels-photo-8007398.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
    title: "Cup Pickleball Trẻ Toàn Quốc",
    description: "Giải đấu dành riêng cho lứa tuổi trẻ U18 và U21, tạo sân chơi bổ ích cho thế hệ tương lai.",
    date: "25/12/2024",
    location: "Cung thể thao Rạch Miễu, Hà Nội",
    prize: "50 triệu VNĐ",
    participants: "150 vận động viên trẻ",
    categories: "4 hạng mục theo độ tuổi",
    status: "upcoming"
  },
  {
    image: "https://images.pexels.com/photos/8007399/pexels-photo-8007399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
    title: "Giải Pickleball Doanh Nhân TP.HCM",
    description: "Giải đấu dành cho cộng đồng doanh nhân yêu thích pickleball, kết hợp thể thao và networking.",
    date: "30/12/2024",
    location: "CLB Pickleball Saigon",
    prize: "80 triệu VNĐ",
    participants: "100 doanh nhân tham gia",
    categories: "3 hạng mục thi đấu",
    status: "upcoming"
  },
  {
    image: "https://images.pexels.com/photos/8007400/pexels-photo-8007400.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
    title: "Giải Vô Địch Pickleball Việt Nam 2024",
    description: "Giải đấu lớn nhất năm đang diễn ra vòng tứ kết với những trận đấu kịch tính.",
    date: "Đang diễn ra",
    location: "Nhà thi đấu Phú Thọ, TP.HCM",
    stage: "Tứ Kết",
    stream: "Trực tiếp trên YouTube",
    viewers: "5,200 người đang xem",
    status: "ongoing"
  },
  {
    image: "https://images.pexels.com/photos/8007401/pexels-photo-8007401.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
    title: "Giải Pickleball Mở Rộng Cần Thơ 2024",
    description: "Giải đấu đã kết thúc thành công với nhiều trận đấu hấp dẫn và những kỷ lục mới.",
    date: "10/12/2024",
    location: "Trung tâm Thể thao Cần Thơ",
    winner: "Nguyễn Văn A",
    participants: "180 VĐV tham gia",
    status: "completed"
  },
  {
    image: "https://images.pexels.com/photos/8007398/pexels-photo-8007398.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
    title: "Cup Pickleball Hà Nội Mở Rộng",
    description: "Giải đấu quy tụ 250 vận động viên từ khắp miền Bắc với nhiều hạng mục thi đấu.",
    date: "05/12/2024",
    location: "Cung thể thao Rạch Miễu",
    winner: "Trần Thị B",
    participants: "250 VĐV tham gia",
    status: "completed"
  },
  {
    image: "https://images.pexels.com/photos/8007399/pexels-photo-8007399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
    title: "US Open Pickleball Championships 2025",
    description: "Giải đấu pickleball lớn nhất thế giới sẽ diễn ra tại Florida với sự tham gia của các tay vợt hàng đầu.",
    date: "12-19/04/2025",
    location: "Naples, Florida, USA",
    prize: "$2.5 triệu USD",
    participants: "2000+ VĐV quốc tế",
    status: "international"
  },
  {
    image: "https://images.pexels.com/photos/8007400/pexels-photo-8007400.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
    title: "Asian Pickleball Championships 2025",
    description: "Giải vô địch pickleball châu Á lần đầu tiên tổ chức tại Singapore, Việt Nam sẽ cử đội tuyển tham dự.",
    date: "15-22/06/2025",
    location: "Singapore Sports Centre",
    prize: "$500,000 USD",
    participants: "15 quốc gia tham gia",
    status: "international"
  }
];

document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");

    tabButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const selectedTab = btn.getAttribute("data-tab");

            // Toggle active class
            tabButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            // Toggle tab content visibility
            tabContents.forEach(content => {
                if (content.id === selectedTab) {
                    content.classList.add("active");
                } else {
                    content.classList.remove("active");
                }
            });

            // Filter data by status
            const filtered = tournamentData.filter(item => item.status === selectedTab);

            // Render tournaments
            const tabContainer = document.getElementById(selectedTab);
            tabContainer.innerHTML = `
                <div class="tournament-grid">
                    ${filtered.map(item => `
                        <div class="tournament-card ${item.status}">
                            <div class="tournament-image">
                                <img src="${item.image}" alt="${item.title}">
                            </div>
                            <div class="tournament-info">
                                <h3>${item.title}</h3>
                                <p>${item.description}</p>
                                <div class="tournament-details">
                                    ${item.location ? `<div class="detail-item"><span class="detail-icon">📍</span><span>${item.location}</span></div>` : ""}
                                    ${item.prize ? `<div class="detail-item"><span class="detail-icon">💰</span><span>${item.prize}</span></div>` : ""}
                                    ${item.stage ? `<div class="detail-item"><span class="detail-icon">🏆</span><span>Đang ở vòng: ${item.stage}</span></div>` : ""}
                                    ${item.winner ? `<div class="detail-item"><span class="detail-icon">🏆</span><span>Vô địch: ${item.winner}</span></div>` : ""}
                                    ${item.participants ? `<div class="detail-item"><span class="detail-icon">👥</span><span>${item.participants}</span></div>` : ""}
                                    ${item.categories ? `<div class="detail-item"><span class="detail-icon">🏅</span><span>${item.categories}</span></div>` : ""}
                                    ${item.stream ? `<div class="detail-item"><span class="detail-icon">📺</span><span>${item.stream}</span></div>` : ""}
                                    ${item.viewers ? `<div class="detail-item"><span class="detail-icon">👁️</span><span>${item.viewers}</span></div>` : ""}
                                    ${item.date ? `<div class="detail-item"><span class="detail-icon">📅</span><span>${item.date}</span></div>` : ""}
                                </div>
                                <div class="tournament-actions">
                                    <a href="#" class="tournament-btn primary">Xem Chi Tiết</a>
                                </div>
                            </div>
                        </div>
                    `).join("")}
                </div>
            `;
        });
    });

    // Load tab đầu tiên mặc định
    tabButtons[0].click();
});
