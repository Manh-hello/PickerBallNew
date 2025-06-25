const newsData = [
  {
    image: "https://images.pexels.com/photos/8007398/pexels-photo-8007398.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2",
    category: "Giải Đấu",
    title: "Kết Quả Vòng Bán Kết Giải Pickleball Mở Rộng TP.HCM",
    description: "Những trận đấu kịch tính đã diễn ra tại vòng bán kết với sự tham gia của các tay vợt hàng đầu. Đặc biệt, trận đấu giữa Nguyễn Văn A và Trần Minh B đã kéo dài đến set thứ 3...",
    date: "15/12/2024",
    author: "Trần Thị B",
    views: "1200",
    dataCategory: "tournament"
  },
  {
    image: "https://images.pexels.com/photos/8007399/pexels-photo-8007399.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2",
    category: "Kỹ Thuật",
    title: "Cách Thực Hiện Dink Shot Hiệu Quả Trong Pickleball",
    description: "Dink shot là một trong những kỹ thuật quan trọng nhất mà mọi người chơi pickleball cần nắm vững. Bài viết này sẽ hướng dẫn chi tiết cách thực hiện và luyện tập kỹ thuật này...",
    date: "14/12/2024",
    author: "HLV Minh Tuấn",
    views: "980",
    dataCategory: "technique"
  },
  {
    image: "https://images.pexels.com/photos/8007400/pexels-photo-8007400.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2",
    category: "Sản Phẩm",
    title: "Ra Mắt Dòng Vợt Pickleball Mới Từ Thương Hiệu Selkirk",
    description: "Selkirk vừa công bố dòng vợt pickleball mới với công nghệ T700 Carbon Fiber, hứa hẹn mang lại trải nghiệm chơi tuyệt vời cho người chơi ở mọi trình độ...",
    date: "13/12/2024",
    author: "Chuyên gia Hùng",
    views: "1500",
    dataCategory: "product"
  },
  {
    image: "https://images.pexels.com/photos/8007401/pexels-photo-8007401.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2",
    category: "Cộng Đồng",
    title: "Câu Lạc Bộ Pickleball Hà Nội Tổ Chức Giao Lưu Cuối Năm",
    description: "Sự kiện giao lưu thường niên quy tụ hơn 200 thành viên từ các CLB pickleball tại Hà Nội. Chương trình bao gồm các trận giao hữu và workshop kỹ thuật...",
    date: "12/12/2024",
    author: "Lê Văn C",
    views: "800",
    dataCategory: "community"
  },
  {
    image: "https://images.pexels.com/photos/8007398/pexels-photo-8007398.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2",
    category: "Quốc Tế",
    title: "Ben Johns Bảo Vệ Thành Công Danh Hiệu US Open Pickleball",
    description: "Tay vợt số 1 thế giới Ben Johns đã bảo vệ thành công danh hiệu US Open Pickleball Championships lần thứ 3 liên tiếp sau chiến thắng thuyết phục trong trận chung kết...",
    date: "11/12/2024",
    author: "Biên tập viên",
    views: "2100",
    dataCategory: "international"
  },
  {
    image: "https://images.pexels.com/photos/8007399/pexels-photo-8007399.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2",
    category: "Kỹ Thuật",
    title: "10 Lỗi Thường Gặp Của Người Mới Chơi Pickleball",
    description: "Những lỗi cơ bản mà người mới chơi pickleball thường mắc phải và cách khắc phục. Bài viết tổng hợp từ kinh nghiệm của các huấn luyện viên hàng đầu...",
    date: "10/12/2024",
    author: "HLV Minh Tuấn",
    views: "1800",
    dataCategory: "technique"
  }
];

const pageSize = 4;
let currentPage = 1;
let currentCategory = "all";

function renderNewsList(page = 1) {
    const container = document.querySelector('.news-list');
    container.innerHTML = '';

    const filteredData = currentCategory === 'all'
        ? newsData
        : newsData.filter(item => item.dataCategory === currentCategory);

    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentData = filteredData.slice(startIndex, endIndex);

    currentData.forEach(item => {
        const article = document.createElement('article');
        article.className = 'news-item';
        article.setAttribute('data-category', item.dataCategory);

        article.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="news-item-content">
                <span class="news-category">${item.category}</span>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <div class="news-meta">
                    <span class="news-date">${item.date}</span>
                    <span class="news-author">${item.author}</span>
                    <span class="news-views">👁️ ${item.views} lượt xem</span>
                    <a href="chi-tiet-tin-tuc.html?id=${newsData.indexOf(item)}" class="news-btn">Xem chi tiết</a>
                </div>
            </div>
        `;
        container.appendChild(article);
    });

    updatePaginationUI(page, filteredData.length);
    scrollToSection();
}

function scrollToSection() {
    const section = document.querySelector('.news-list-section');
    const offset = 1000;
    const top = section.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: 'smooth' });
}

function updatePaginationUI(activePage, totalItems) {
    const paginationContainer = document.querySelector('.pagination');
    paginationContainer.innerHTML = '';
    const totalPages = Math.ceil(totalItems / pageSize);

    if (totalPages > 1) {
        const prevBtn = document.createElement('button');
        prevBtn.className = 'page-btn';
        prevBtn.textContent = '←';
        prevBtn.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                renderNewsList(currentPage);
            }
        });
        paginationContainer.appendChild(prevBtn);
    }

    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('button');
        btn.className = 'page-btn';
        if (i === activePage) btn.classList.add('active');
        btn.textContent = i;
        btn.addEventListener('click', () => {
            currentPage = i;
            renderNewsList(i);
        });
        paginationContainer.appendChild(btn);
    }

    if (totalPages > 1) {
        const nextBtn = document.createElement('button');
        nextBtn.className = 'page-btn';
        nextBtn.textContent = '→';
        nextBtn.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                renderNewsList(currentPage);
            }
        });
        paginationContainer.appendChild(nextBtn);
    }
}

function setupCategoryFilter() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.getAttribute('data-category');
            currentPage = 1;
            renderNewsList(currentPage);
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setupCategoryFilter();
    renderNewsList(currentPage);
});
