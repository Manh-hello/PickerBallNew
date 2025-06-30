const newsData = [
  {
    image:"./asset/img/uploads/news/news1/luat-choi-pickleball-cho-nguoi-moi.webp",
    link:"luat-choi-pickleball-cho-nguoi-moi.html",
    title:"7 luật chơi môn pickleball cơ bản mà bạn cần nắm rõ",
    description:"Cho dù bạn là người mới bắt đầu hay là người chơi dày dạn kinh nghiệm muốn làm mới lại cách chơi pickleball , bài viết này đều sẽ cho bạn một thông tin chi tiết. Thực hiện theo 7 quy tắc đơn giản này và bạn sẽ chơi được ngay thôi."
  },{
    image: "./asset/img/uploads/news/news21/new21.webp",
    link:"tham-khao-ngay-luat-choi-mon-pickleball.html",
    title:"Tham khảo ngay luật chơi môn Pickleball",
    description:"Pickleballlà một môn thể thao mới lạ đang được ưa chuộng tại Việt Nam trong những năm gần đây. Được biết đến từ năm 1965 tại Mỹ, Pickleball đã nhanh chóng lan rộng ra khắp các quốc gia trên thế giới và trở thành một môn thể thao phổ biến.",
  },{
    image: "./asset/img/uploads/news/news2/pickleball_la_gi_luat_choi_va_ky_thuat_co_ban_cua_pickleball_ma_ban_can_nam_1_50be5ab70a.webp",
    link:"pickleball-la-gi-luat-choi-va-ky-thuat-co-ban-cua-pickleball-ma-ban-can-nam.html",
    title: "Pickleball là gì? Luật chơi và kỹ thuật cơ bản bạn cần nắm",
    description: "Pickleball là gì khi thời gian gần đây bỗng trở thành một hiện tượng mới trong làng thể thao, có thể thấy pickleball xuất hiện khắp mọi nơi và độ hấp dẫn của bộ môn thể thao này đã thu hút rất nhiều người tham gia.",
  },
  {
    image: "./asset/img/uploads/news/news3/dbbceac04ab4-29-116183524-read-only-1732756883797817033393.webp",
    link: "pickleball-bao-phat-lieu-co-bao-tan.html",
    title: "Pickleball: Bạo phát liệu có bạo tàn?",
    description: "TTCT -Đông đảo người Việt Nam lần đầu biết đến khái niệm pickleball chỉ mới cách đây 2 năm. Nhưng giờ đây, môn thể thao yêu thích của Bill Gates xuất hiện khắp nơi, từ Sài Gòn đến Hà Nội.",
  },
  {
    image: "./asset/img/uploads/news/news4/10_znews.webp",
    link: "nguoi-choi-pickleball-kiem-duoc-bao-nhieu-tien.html",
    title: "Người chơi pickleball kiếm được bao nhiêu tiền?",
    description: "Môn thể thao phát triển nhanh nhất nước Mỹ không chỉ thu hút người chơi nghiệp dư, mà còn tạo ra thu nhập đáng kể cho các VĐV chuyên nghiệp.",
  },
  {
    image: "./asset/img/uploads/news/news5/new5.webp",
    title: "Andre Agassi và Joola công bố quan hệ đối tác để nâng tầm pickleball",
    description: "Thành phố New York, NY – Ngày 19 tháng 8 năm 2024 – Trong một sự hợp tác được thiết lập để định hình lại bối cảnh thể thao, huyền thoại quần vợt Andre...",
  },
  {
    image: "./asset/img/uploads/news/news6/new6.webp",
    title: "UPA-A Certified chứng chỉ vợt pickleball chuyên nghiệp toàn cầu",
    description: "Hiệp hội Pickleball Hoa Kỳ (UPA-A) hôm thứ Ba đã công bố việc thành lập Chương trình chứng nhận UPA hợp tác với tổ chức thử nghiệm thiết bị độc lập...",
  },
  {
    image:"./asset/img/uploads/news/news7/new7.webp",
    title: "UPA là gì? UPA-A Certified là gì tìm hiểu về chứng chỉ UPA-A",
    description: "UPA của Hoa Kỳ (UPA-A) được công bố là Cơ quan quản lý Pickleball toàn cầu trực thuộc Hiệp hội Pickleball thống nhất để bảo vệ, phát triển và ủng hộ...",
  },
  {
    image:"./asset/img/uploads/news/news8/new8.webp",
    title:"Những lợi ích khi mua vợt pickleball Joola từ Đại lý ủy quyền",
    description:"Việc mua bán vợt pickleball ngày nay trở nên đơn giản hơn bao giờ hết. Người dùng chỉ cần có 1 chiếc điện thoại hoặc máy tính truy cập vào mạng là có...",
  },
  {
    image:"./asset/img/uploads/news/news9/new9.webp",
    title:"Những cây vợt pickleball giá tầm 799k đến 1500k bạn không nên bỏ qua",
    description:"Vợt pickleball là một dụng cụ quan trọng bậc nhất góp phần vào sự thành công của mỗi người chơi. Tuy nhiên, việc lựa chọn một cây vợt phù hợp với...",
  },
  {
    image: "./asset/img/uploads/news/news10/new10.webp",
    title:"Top 5 cây vợt pickleball được ưa chuộng nhất hiện nay",
    description:"Tổng quan 5 cây vợt Pickleball bán chạy nhất năm 2024 Thời điểm hiện tai Pickleball đang là môn thể thao vô cùng HOT, nhận được rất nhiều những sự..."
  },{
    image: "./asset/img/uploads/news/news11/new11.webp",
    title:"Kinh nghiệm lựa chọn bóng pickleball chất lượng chính hãng giá tốt",
    description:"Pickleball là một môn thể thao đang trở nên phổ biến trên toàn thế giới, đặc biệt là ở Việt Nam. Với sự phát triển nhanh chóng của môn này, nhu cầu về...",
  },{
    image:"./asset/img/uploads/news/news12/new12.webp",
    title:"Joola pickleball công bố nhà nhập khẩu và phân phối chính hãng tại Việt Nam",
    description:"JOOLA Pickleball, thương hiệu nổi tiếng thế giới về các sản phẩm, dụng cụ thể thao Pickleball, vừa chính thức công bố Pickleball Việt Nam là đại lý...",
  },{
    image: "./asset/img/uploads/news/news13/new13.webp",
    title:"Đăng ký vợt Pickleball JOola thế hệ 3 bằng chip NFC",
    description:"Công nghệ JOOLA Gen 3 Với việc ra mắt dòng sản phẩm vợt Gen 3 tiên tiến, Joola giới thiệu công nghệ chip Giao tiếp trường gần (NFC) mang tính cách...",
  },{
    image:"./asset/img/uploads/news/news14/new14.webp",
    title:"Bảng báo giá vợt Joola Gen 3 mới nhất từ Pickleball Việt Nam",
    description:"Joola có sự đầu tư mạnh mẽ vào việc phát triển dòng sản phẩm Vợt Pickleball, đem đến sự đa dạng và chất lượng cho cộng đồng người chơi. Hiện nay, các...",
  },{
    image:"./asset/img/uploads/news/news15/new15.webp",
    title:"Joola chào mừng Tyson McGuffin đến với đội Pickleball Joola",
    description:"Tyson McGuffin đến với đội Pickleball Joola Với thành tích ấn tượng và phong cách chơi lôi cuốn, Tyson McGuffin đã thu hút được sự chú ý của người...",
  },{
    image: "./asset/img/uploads/news/news16/new16.webp",
    title:"Joola ra mắt dòng sản phẩm Gen 3 với công nghệ mang tính cách mạng",
    description:"Rockville, MD (16/4/24) - JOola Pickleball vui mừng được giới thiệu cuộc cách mạng mới nhất về công nghệ vợt pickleball cho mùa giải 2024. Không chỉ...",
  },{
    image: "./asset/img/uploads/news/news17/new17.webp",
    title:"Cách kiểm tra vợt Pickleball Joola chính hãng với công nghệ NFC của Joola",
    description:"Trên thị trường hiện nay hiện tượng hàng nhái, kém chất lượng hoặc hàng xách tay (không được bảo hành và hỗ trợ bởi Joola tại Việt Nam) đang tràn lan...",
  },{
    image:"./asset/img/uploads/news/news18/new18.webp",
    title:"Tìm hiểu về Pickleball bộ môn giới trẻ đang yêu thích tại Việt Nam",
    description:"Tìm hiểu tổng quan về bộ môn PicklebalL đang được mọi người yêu thích Pickleball là một môn thể thao kết hợp các yếu tố của quần vợt, cầu lông và...",
  },{
    image: "./asset/img/uploads/news/news19/new19.webp",
    title:"Tìm hiểu những đặc trưng nổi bật chỉ có trên Vợt Pickleball",
    description:"Tìm hiểu về vợt Pickleball và những mẫu vợt Pickleball phổ biến Pickleball là một môn thể thao vợt giữa hai hoặc bốn người, sử dụng vợt và quả bóng...",
  },{
    image: "./asset/img/uploads/news/news20/new20.webp",
    title:"Những trang bị không thể thiếu trong bộ môn Pickleball",
    description:"Chơi Pickleball cần có những dụng cụ gì? Pickleball là một môn thể thao bóng vợt đang ngày càng phổ biến trên khắp thế giới. Trò chơi này dễ chơi,...",
  },{
    image: "./asset/img/uploads/news/news22/new22.webp",
    title:"Tìm hiểu kỹ thuật chơi pickleball cho người mới bắt đầu",
    description:"Kỹ thuật chơi pickleball dành cho người mới bắt đầu Pickleball là một môn thể thao vợt mới được nhiều người yêu thích, bởi lẽ nó phù hợp với nhiều...",
  },{
    image: "./asset/img/uploads/news/news23/new23.webp",
    title:"TOP 5 cây Vợt Pickleball Joola HOT nhất hiện nay",
    description:"Tìm hiểu những mẫu Vợt Pickleball Joola được ưa chuộng nhất hiện nay Pickleball là môn thể thao đang ngày càng phổ biến tại Việt Nam cũng như trên...",
  },{
    image: "./asset/img/uploads/news/news24/new24.webp",
    title:"Hướng dẫn chọn vợt pickleball Joola phù hợp với nhu cầu",
    description:"Cách chọn vợt pickleball Joola phù hợp với nhu cầu Pickleball là một môn thể thao tương đối mới nhưng đang nhanh chóng trở nên phổ biến trên khắp...",
  },{
    image: "./asset/img/uploads/news/news25/new25.webp",
    title:"TOP 5 vợt pickleball Head phổ biến trên thị trường",
    description:"Pickleball là một môn thể thao vợt đang ngày càng được ưa chuộng tại Việt Nam và trên toàn thế giới. Với sự phát triển nhanh chóng của môn thể thao...",
  },{
    image: "./asset/img/uploads/news/news26/new26.webp",
    title:"Sử dụng và Bảo quản Vợt pickleball Head như nào cho đúng?",
    description:"Sử dụng và bảo quản vợt pickleball Head như nào đúng cách? Pickleball là một môn thể thao vợt tương đối mới, nhưng nó đã nhanh chóng trở nên phổ...",
  },{
    image: "./asset/img/uploads/news/news27/new27.webp",
    title:"Giải đáp vợt pickleball Head có tốt không?",
    description:"Pickleball là một môn thể thao vợt đang ngày càng phổ biến trên thế giới, bao gồm cả Việt Nam. Với sự phát triển của môn thể thao này, nhu cầu sử dụng...",
  },{
    image: "./asset/img/uploads/news/news28/new28.webp",
    title:"Vợt pickleball Wilson có cấu tạo đặc biệt như thế nào?",
    description:"Tìm hiểu cấu tạo của Vợt pickleball Wilson Pickleball là một môn thể thao mới nổi, được phát triển từ năm 1965 tại Mỹ và hiện đang ngày càng được...",
  },{
    image: "./asset/img/uploads/news/news29/new29.webp",
    title:"TOP 3 Vợt pickleball Wilson lý tưởng cho người mới chơi",
    description:"Những cây Vợt pickleball Wilson bất cứ ai cũng không thể bỏ qua Pickleball là một môn thể thao đang ngày càng trở nên phổ biến trên toàn thế giới....",
  },{
    image: "./asset/img/uploads/news/news30/new30.webp",
    title:"Có nên sử dụng vợt Pickleball Wilson?",
    description:"Vợt pickleball Wilson là một trong những sản phẩm được yêu thích và tin dùng nhất trên thị trường hiện nay. Được ra mắt vào năm 1914, Wilson đã trở...",
  },{
    image: "./asset/img/uploads/news/news31/new31.webp",
    title:"TOP 4 cây vợt pickleball Babolat người chơi nào cũng nên thử",
    description:"Giới thiệu đôi nét về bộ môn Pickleball Pickleball là một môn thể thao đang ngày càng được ưa chuộng tại Việt Nam. Điều đặc biệt của môn thể thao...",
  },{
    image: "./asset/img/uploads/news/news32/new32.webp",
    title:"Những điều bạn có thể biết về thương hiệu Pickleball Babolat",
    description:"Tổng quan về dòng vợt pickleball Babolat Pickleball là một trò chơi thể thao đang ngày càng trở nên phổ biến trên toàn thế giới, và Babolat là một...",
  },{
    image: "./asset/img/uploads/news/news33/new33.webp",
    title:"Tại sao Vợt pickleball Babolat được đánh giá cao trong cộng đồng người chơi?",
    description:"Pickleball là một môn thể thao đang phát triển nhanh chóng trên toàn thế giới, và Vợt pickleball Babolat là một trong những thương hiệu được ưa chuộng...",
  },{
    image: "./asset/img/uploads/news/news34/new34.webp",
    title:"Những đặc trưng nổi bật của vợt Pickleball Babolat",
    description:"Khám phá đặc điểm nổi bật của vợt pickleball Babolat Vợt pickleball Babolat là một trong những loại vợt được nhiều người ưa chuộng nhất trong môn...",
  },{
    image: "./asset/img/uploads/news/news35/new35.webp",
    title:"Bí quyết lựa chọn và sử dụng Vợt pickleball Babolat hiệu quả",
    description:"Lựa chọn và sử dụng Vợt pickleball Babolat như nào hiệu quả? Pickleball là một môn thể thao chơi vợt đang ngày càng trở nên phổ biến trên khắp thế...",
  },{
    image: "./asset/img/uploads/news/news36/new36.webp",
    title:"Hướng dẫn chọn vợt PicklebalL Beesoul phù hợp",
    description:"Cách chọn vợt PicklebalL Beesoul phù hợp Pickleball là một môn thể thao đang ngày càng phổ biến trên thế giới, trong đó người chơi sử dụng vợt để...",
  },{
    image: "./asset/img/uploads/news/news37/new37.webp",
    title:"Những công nghệ độc nhất chỉ có trên vợt Pickleball Beesoul",
    description:"Cấu tạo, công nghệ và thông số kỹ thuật vợt Pickleball Beesoul Pickleball là một môn thể thao mới nổi đang được ưa chuộng tại Việt Nam. Với sự phát...",
  },{
    image: "./asset/img/uploads/news/news38/new38.webp",
    title:"Địa chỉ mua vợt PicklebalL Beesoul uy tín cho mọi người chơi",
    description:"Mua vợt PicklebalL Beesoul ở đâu? Pickleball là một môn thể thao kết hợp giữa bóng bàn, quần vợt và cầu lông đang ngày càng phổ biến trên thế giới....",
  },{
    image: "./asset/img/uploads/news/news39/new39.webp",
    title:"Những điều bạn có thể biết về vợt PicklebalL Beesoul",
    description:"Tìm hiểu chi tiết sản phẩm Vợt PicklebalL Beesoul Pickleball là một môn thể thao hấp dẫn kết hợp yếu tố của quần vợt, bóng bàn. Trò chơi này được...",
  },{
    image: "./asset/img/uploads/news/news40/new40.webp",
    title:"Vợt Pickleball Passion Kinh Nghiệm Sử Dụng, So Sánh và Lời Khuyên",
    description:"Nếu bạn đang tìm kiếm một vợt pickleball chất lượng, vợt pickleball Passion có thể là một sự lựa chọn tuyệt vời cho bạn. Với hơn 60 năm kinh nghiệm...",
  },{
    image: "./asset/img/uploads/news/news41/new41.webp",
    title:"Bảo dưỡng và bảo quản vợt pickleball head - Các bước cần thiết",
    description:"Vợt pickleball head là một trong những loại vợt phổ biến nhất trên thị trường hiện nay. Nó được thiết kế đặc biệt để đáp ứng các yêu cầu của trò chơi...",
  },{
    image: "./asset/img/uploads/news/news42/new42.webp",
    title:"Vợt Pickleball Head Tổng Quan, Lịch Sử, Thiết Kế, Công Nghệ Sản Xuất, Tính Năng và Cách Chọn",
    description:"Pickleball là một trò chơi tương đối mới và được yêu thích của nhiều người trên toàn thế giới. Để chơi pickleball tốt, việc sử dụng một vợt chất lượng...",
  },{
    image: "./asset/img/uploads/news/news43/new43.webp",
    title:"Vợt pickleball Joola - Lưu ý sử dụng và đánh giá sản phẩm từ người dùng",
    description:"Những lưu ý khi sử dụng và bảo quản Vợt pickleball Joola Vợt pickleball Joola là một trong những thương hiệu nổi tiếng nhất trong giới chơi...",
  },{
    image: "./asset/img/uploads/news/news44/new44.webp",
    title:"Vợt pickleball Joola - Công nghệ và thiết kế mới nhất",
    description:"Pickleball là một trò chơi rất phổ biến ở Mỹ và gần đây đã khá phát triển tại Việt Nam. Để có thể chơi tốt pickleball, bạn cần có một chiếc vợt tốt....",
  },{
    image: "./asset/img/uploads/news/news45/new45.webp",
    title:"Tìm hiểu về vợt pickleball Joola các loại phổ biến và lựa chọn phù hợp",
    description:"Nếu bạn là một người yêu thích môn thể thao pickleball, việc sở hữu một chiếc vợt pickleball khác biệt có thể giúp tăng cường trải nghiệm chơi của...",
  },{
    image: "./asset/img/uploads/news/news46/new46.webp",
    title:"Dạy Pickleball Những Kỹ Năng, Chiến Lược Và Phương Pháp Hiệu Quả",
    description:"Pickleball là một trong những môn thể thao nổi tiếng và được yêu thích tại Mỹ. Tuy nhiên, điều đó không có nghĩa là bạn không thể dạy và chơi...",
  },{
    image: "./asset/img/uploads/news/news47/new47.webp",
    title:"Các hãng vợt pickleball tìm hiểu về các thương hiệu nổi tiếng",
    description:"Pickleball là một trò chơi quần vợt đang ngày càng phổ biến tại Việt Nam. Một trong những yếu tố quan trọng để thành công trong trò chơi này là sự lựa...",
  },{
    image: "./asset/img/uploads/news/news48/new48.webp",
    title:"Cách cầm vợt pickleball để đánh hiệu quả và những lỗi phổ biến",
    description:"Pickleball là một trò chơi vận động mới nổi tại Việt Nam. Nó yêu cầu sự kết hợp giữa bóng rổ, bóng bàn và quần vợt. Mặc dù trò chơi này khá mới, nhưng...",
  },{
    image: "./asset/img/uploads/news/news49/new49.webp",
    title:"Các kỹ thuật đánh trong pickleball mà bạn cần biết",
    description:"Pickleball là một trò chơi vận động mới lạ, tương đối mới so với các môn thể thao khác. Được phát minh vào những năm 1960 bởi Joel Pritchard, Bill...",
  },{
    image: "./asset/img/uploads/news/news50/new50.webp",
    title:"Luật chơi pickleball cách tính điểm, quy tắc trang phục và kỹ năng cần thiết",
    description:"Pickleball là một trò chơi thể thao mới mẻ và đang ngày càng được ưa chuộng tại Việt Nam. Nó có thể được mô tả như là một sự kết hợp giữa tennis, bóng...",
  },
];

const pageSize = 30;
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
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <div class="news-meta">
                    <a href="${item.link}" class="news-btn">Xem chi tiết</a>
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
