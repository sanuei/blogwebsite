class GridAnimation {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.gridSize = 40;
        this.points = [];
        this.time = 0;
        this.init();
    }

    init() {
        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());
        this.animate();
    }

    resizeCanvas() {
        const container = this.canvas.parentElement;
        this.canvas.width = container.offsetWidth;
        this.canvas.height = container.offsetHeight;
        this.generatePoints();
    }

    generatePoints() {
        this.points = [];
        for (let x = this.gridSize; x <= this.canvas.width - this.gridSize; x += this.gridSize) {
            for (let y = this.gridSize; y <= this.canvas.height - this.gridSize; y += this.gridSize) {
                this.points.push({
                    x: x,
                    y: y,
                    originalX: x,
                    originalY: y
                });
            }
        }
    }

    draw() {
        // 清除画布
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // ?取中心点坐?
        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;

        // ?制点和??
        this.points.forEach(point => {
            // 添加?微的?画效果
            point.x = point.originalX + Math.sin(this.time + point.originalX * 0.01) * 2;
            point.y = point.originalY + Math.cos(this.time + point.originalY * 0.01) * 2;

            // ?制点
            this.ctx.beginPath();
            this.ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
            this.ctx.arc(point.x, point.y, 1.5, 0, Math.PI * 2);
            this.ctx.fill();

            // ?制??
            this.ctx.beginPath();
            this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
            this.ctx.moveTo(point.x, point.y);
            this.ctx.lineTo(centerX, centerY);
            this.ctx.stroke();
        });

        // ?制中心点
        this.ctx.beginPath();
        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        this.ctx.arc(centerX, centerY, 2, 0, Math.PI * 2);
        this.ctx.fill();
    }

    animate() {
        this.time += 0.02;
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
}

// 当?面加?完成后初始化网格?画
window.addEventListener('load', () => {
    const canvas = document.getElementById('gridCanvas');
    new GridAnimation(canvas);
}); 