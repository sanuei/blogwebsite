document.addEventListener('DOMContentLoaded', () => {
    const articlesPerPage = 3;
    const articles = document.querySelectorAll('.article-item');
    const pagination = document.querySelector('.pagination');
    const totalPages = Math.ceil(articles.length / articlesPerPage);

    function showPage(pageNumber) {
        articles.forEach((article, index) => {
            const shouldShow = index >= (pageNumber - 1) * articlesPerPage && 
                             index < pageNumber * articlesPerPage;
            article.style.display = shouldShow ? 'flex' : 'none';
        });

        // 更新分?按?状?
        const pageLinks = document.querySelectorAll('.page-link');
        pageLinks.forEach(link => {
            link.classList.remove('active');
            if (link.textContent === pageNumber.toString()) {
                link.classList.add('active');
            }
        });
    }

    // 初始化分?
    showPage(1);

    // 添加分?点?事件
    pagination.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.classList.contains('page-link')) {
            const pageNumber = parseInt(e.target.textContent);
            if (!isNaN(pageNumber)) {
                showPage(pageNumber);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    });
}); 