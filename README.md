# CREATIVE SPACE - 个人创意空间

## 项目简介
CREATIVE SPACE 是一个现代简约风格的个人创意展示网站，专注于展示文章、摄影作品和视频内容。网站采用响应式设计，确保在各种设备上都能提供良好的浏览体验。

## 源代码
- GitHub: https://github.com/sanuei/sonic-space-personal-website
- 在线预览: https://sanuei.github.io/sonic-space-personal-website

## 主要功能
- 文章展示与阅读
- 摄影作品展示（支持图片预览）
- 视频内容展示（支持 YouTube 视频嵌入）
- 后台管理系统
- 响应式设计

## 技术栈
- HTML5
- CSS3 (使用现代CSS特性如Grid, Flexbox)
- JavaScript (原生JS)
- Font Awesome (图标库)
- Google Fonts (Montserrat字体)
- TailwindCSS (原子化CSS框架)
- Alpine.js (轻量级JavaScript框架)

## 项目结构 
- creative-space/
- ├── index.html # 主页
- ├── articles.html # 文章列表页
- ├── article-detail.html # 文章详情页
- ├── photography.html # 摄影作品页
- ├── videos.html # 视频作品页
- ├── login.html # 管理员登录页
- ├── styles/
│ ├── main.css # 主要样式
│ ├── index.css # 首页样式
│ ├── articles.css # 文章页样式
│ ├── article-detail.css # 文章详情页样式
│ ├── photography.css # 摄影页样式
│ ├── videos.css # 视频页样式
│ ├── login.css # 登录页样式
│ └── admin.css # 管理后台样式
├── js/
│ ├── background.js # 背景动画效果
│ ├── login.js # 登录功能
│ ├── admin.js # 管理后台功能
│ └── utils.js # 工具函数
└── admin/
    ├── dashboard.html # 管理后台页面
    └── components/ # 后台组件
        ├── sidebar.html
        └── header.html

## 特色功能
1. 动态背景效果
   - 渐变色动画
   - 粒子效果

2. 现代化导航
   - 固定导航栏
   - 平滑滚动
   - 响应式菜单

3. 内容展示
   - 文章分页展示
   - 摄影作品网格布局
   - 视频嵌入播放

4. 管理功能
   - 管理员登录
   - 内容管理
   - 作品上传

5. 性能优化
   - 图片懒加载
   - 代码分割
   - 资源预加载
   - 缓存策略

6. 开发工具
   - Vite (构建工具)
   - ESLint (代码检查)
   - Prettier (代码格式化)

## 页面布局
- **首页**: 三大板块预览
- **文章页**: 列表式布局，支持分页
- **摄影页**: 网格布局，每页9张作品
- **视频页**: 网格布局，每页6个视频

## 响应式设计断点
- 大屏幕 (> 1200px)
- 中等屏幕 (992px - 1200px)
- 平板 (768px - 992px)
- 手机 (< 768px)

## 安装和使用
1. 克隆项目到本地

bash
git clone [repository-url]

2. 打开项目

bash
cd creative-space


3. 使用本地服务器运行项目（例如使用 Live Server）

## 注意事项
- 需要替换视频页面中的 YouTube 视频 ID
- 需要配置后端 API 以支持登录功能
- 建议将 Unsplash 图片下载到本地使用

## 未来计划
- [ ] 添加图片预加载功能
- [ ] 实现深色模式
- [ ] 添加评论功能
- [ ] 优化图片加载性能
- [ ] 添加搜索功能
- [ ] 集成 CI/CD 流程
- [ ] 添加单元测试
- [ ] PWA 支持
- [ ] 国际化支持

## 开发指南
1. 安装依赖

npm install

2. 启动开发服务器

npm run dev

3. 构建生产版本

npm run build

4. 代码检查

npm run lint

## 贡献指南
欢迎提交 Pull Request 或创建 Issue。

## 许可证
MIT License

## 联系方式
- sanuei.yann@gmail.com
