const productData = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/8007398/pexels-photo-8007398.jpeg",
    title: "JOOLA Ben Johns Hyperion CFS 16",
    category: "paddle",
    rating: 4.8,
    price: 3800000,
    oldPrice: 4200000,
    badge: "Bán Chạy",
    description: "Vợt được thiết kế bởi Ben Johns - tay vợt số 1 thế giới...",
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/8007399/pexels-photo-8007399.jpeg",
    title: "Paddletek Bantam EX-L Pro",
    category: "paddle",
    rating: 4.7,
    price: 3200000,
    oldPrice: null,
    badge: "Mới",
    description: "Vợt cao cấp với công nghệ PolyCore...",
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/8007400/pexels-photo-8007400.jpeg",
    title: "Dura Fast 40 Outdoor Pickleballs",
    category: "ball",
    rating: 4.9,
    price: 280000,
    unit: "/hộp",
    badge: "Chính Thức",
    description: "Bóng pickleball chính thức dùng trong giải đấu...",
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/8007401/pexels-photo-8007401.jpeg",
    title: "Nike Dri-FIT Pickleball Polo",
    category: "apparel",
    rating: 4.6,
    price: 850000,
    badge: "",
    description: "Áo polo thể thao chuyên dụng...",
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/8007398/pexels-photo-8007398.jpeg",
    title: "ASICS Gel-Rocket 10 Pickleball",
    category: "shoes",
    rating: 4.7,
    price: 2200000,
    oldPrice: 2500000,
    badge: "Khuyến Nghị",
    description: "Giày pickleball chuyên dụng với đệm Gel...",
  },
  {
    id: 6,
    image: "https://images.pexels.com/photos/8007399/pexels-photo-8007399.jpeg",
    title: "Selkirk Tour Bag - Túi Đựng Vợt",
    category: "accessories",
    rating: 4.8,
    price: 1200000,
    badge: "",
    description: "Túi đựng vợt cao cấp chống nước, nhiều ngăn...",
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const categoryBtns = document.querySelectorAll(".category-btn");
  const productList = document.getElementById("product-list");

  // Hàm render
  function renderProducts(data) {
    productList.innerHTML = data.map(item => `
      <div class="product-card" data-category="${item.category}">
        <div class="product-image">
          <img src="${item.image}" alt="${item.title}" />
          ${item.badge ? `<div class="product-badges"><span class="badge">${item.badge}</span></div>` : ""}
        </div>
        <div class="product-content">
          <span class="product-category">${getCategoryName(item.category)}</span>
          <h3>${item.title}</h3>
          <div class="product-rating">
            <span class="stars">${"⭐".repeat(Math.round(item.rating))}</span>
            <span class="rating-text">(${item.rating}/5)</span>
          </div>
          <p>${item.description}</p>
          <div class="product-price">
            <span class="current-price">${item.price.toLocaleString()}đ</span>
            ${item.oldPrice ? `<span class="original-price">${item.oldPrice.toLocaleString()}đ</span>` : ""}
            ${item.unit ? `<span class="unit">${item.unit}</span>` : ""}
          </div>
          <div class="product-actions">
            <a href="chi-tiet-san-pham.html?id=${productData.indexOf(item)}" class="product-btn primary">Xem Chi Tiết</a>
            <button class="wishlist-btn">❤️</button>
          </div>
        </div>
      </div>
    `).join("");
  }

  // Hàm đổi category sang tiếng Việt
  function getCategoryName(key) {
    switch (key) {
      case "paddle": return "Vợt Pickleball";
      case "ball": return "Bóng";
      case "apparel": return "Trang Phục";
      case "shoes": return "Giày";
      case "accessories": return "Phụ Kiện";
      default: return "Sản Phẩm";
    }
  }

  // Gán sự kiện click
  categoryBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      // Active btn
      categoryBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.getAttribute("data-category");
      const filtered = category === "all"
        ? productData
        : productData.filter(item => item.category === category);

      renderProducts(filtered);
    });
  });

  // Tải mặc định tất cả
  renderProducts(productData);
});

