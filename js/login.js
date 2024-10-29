document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    try {
        // 这里应该连接到实际的后端API
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });
        
        if (response.ok) {
            const data = await response.json();
            // 保存登录token
            localStorage.setItem('authToken', data.token);
            // 跳转到管理后台
            window.location.href = '/admin/dashboard.html';
        } else {
            alert('登录失败，请检查用户名和密码');
        }
    } catch (error) {
        console.error('登录错误:', error);
        alert('登录过程中出现错误');
    }
}); 