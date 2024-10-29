// 检查登录状态
function checkAuth() {
    const token = localStorage.getItem('authToken');
    if (!token) {
        window.location.href = '/login.html';
    }
}

// 切换内容区域
document.querySelectorAll('.admin-menu a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const section = e.target.dataset.section;
        
        // 隐藏所有section
        document.querySelectorAll('.content-section').forEach(sec => {
            sec.style.display = 'none';
        });
        
        // 显示选中的section
        document.getElementById(section).style.display = 'block';
    });
});

// 退出登录
document.getElementById('logoutBtn').addEventListener('click', () => {
    localStorage.removeItem('authToken');
    window.location.href = '/login.html';
});

// 页面加载时检查登录状态
checkAuth(); 