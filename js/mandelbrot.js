class MandelbrotSet {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.maxIterations = 100;
        this.zoom = 1;
        this.offsetX = 0;
        this.offsetY = 0;
        this.init();
    }

    init() {
        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());
        this.animate();
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.draw();
    }

    mapRange(value, fromLow, fromHigh, toLow, toHigh) {
        return toLow + (value - fromLow) * (toHigh - toLow) / (fromHigh - fromLow);
    }

    draw() {
        const imageData = this.ctx.createImageData(this.canvas.width, this.canvas.height);
        const data = imageData.data;

        for (let x = 0; x < this.canvas.width; x++) {
            for (let y = 0; y < this.canvas.height; y++) {
                const index = (x + y * this.canvas.width) * 4;
                
                // ¾­²èÉÛºÁ?±Ç¼ÍÅþ?Ê¿ÌÌ
                const a = this.mapRange(x, 0, this.canvas.width, -2 / this.zoom + this.offsetX, 1 / this.zoom + this.offsetX);
                const b = this.mapRange(y, 0, this.canvas.height, -1.5 / this.zoom + this.offsetY, 1.5 / this.zoom + this.offsetY);

                const [iteration, smooth] = this.mandelbrot(a, b);
                const color = this.getColor(iteration, smooth);

                data[index] = color.r;
                data[index + 1] = color.g;
                data[index + 2] = color.b;
                data[index + 3] = 255;
            }
        }

        this.ctx.putImageData(imageData, 0, 0);
    }

    mandelbrot(a, b) {
        let ca = a;
        let cb = b;
        let za = 0;
        let zb = 0;
        let n = 0;

        while (n < this.maxIterations) {
            const aa = za * za - zb * zb;
            const bb = 2 * za * zb;
            
            za = aa + ca;
            zb = bb + cb;
            
            if (za * za + zb * zb > 4) {
                const smooth = n + 1 - Math.log(Math.log(Math.sqrt(za * za + zb * zb))) / Math.log(2);
                return [n, smooth];
            }
            n++;
        }
        return [n, n];
    }

    getColor(iteration, smooth) {
        if (iteration === this.maxIterations) {
            return { r: 0, g: 0, b: 0 };
        }

        const hue = (smooth * 10) % 360;
        return this.hslToRgb(hue, 70, 50);
    }

    hslToRgb(h, s, l) {
        s /= 100;
        l /= 100;
        const k = n => (n + h / 30) % 12;
        const a = s * Math.min(l, 1 - l);
        const f = n => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
        return {
            r: Math.round(255 * f(0)),
            g: Math.round(255 * f(8)),
            b: Math.round(255 * f(4))
        };
    }

    animate() {
        this.zoom *= 1.01;
        if (this.zoom > 200) this.zoom = 1;
        
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
}

// Åö?ÌÌ²Ã?´°À®¹¡½é»Ï²½ÒØùþËÖ?ÆÃ½¸¹ç
window.addEventListener('load', () => {
    const canvas = document.getElementById('mandelbrotCanvas');
    new MandelbrotSet(canvas);
}); 