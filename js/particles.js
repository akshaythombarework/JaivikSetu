/* ===================================================================
   JAIVIKSETU HERO PARTICLES & PARALLAX (L2 & L4)
   Floating organic leaves, golden pollen & fireflies with physics
   =================================================================== */

(function initHeroParticles() {
  const canvas = document.getElementById('hero-particles');
  if (!canvas) return;

  // Check prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  let mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

  const isMobile = window.innerWidth < 768;
  const particleCount = isMobile ? 14 : 36;

  function resize() {
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
  }

  window.addEventListener('resize', resize);
  resize();

  // Mouse move listener for parallax
  if (!isMobile) {
    window.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      if (e.clientY <= rect.bottom && e.clientY >= rect.top) {
        mouse.targetX = (e.clientX / window.innerWidth - 0.5) * 35;
        mouse.targetY = (e.clientY / window.innerHeight - 0.5) * 35;
      }
    });
  }

  class Particle {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : height + 20;
      this.type = Math.random() > 0.4 ? 'pollen' : (Math.random() > 0.3 ? 'leaf' : 'firefly');
      
      if (this.type === 'leaf') {
        this.size = Math.random() * 8 + 6;
        this.speedY = -(Math.random() * 0.7 + 0.3);
        this.speedX = Math.random() * 0.8 - 0.2;
        this.angle = Math.random() * Math.PI * 2;
        this.angleSpeed = (Math.random() - 0.5) * 0.04;
        this.opacity = Math.random() * 0.4 + 0.3;
        this.color = Math.random() > 0.5 ? '#7DBE54' : '#A2D068';
      } else if (this.type === 'pollen') {
        this.size = Math.random() * 2.5 + 1;
        this.speedY = -(Math.random() * 0.5 + 0.2);
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.color = '#FFE885';
      } else { // firefly
        this.size = Math.random() * 3 + 2;
        this.speedY = -(Math.random() * 0.4 + 0.1);
        this.speedX = (Math.random() - 0.5) * 0.6;
        this.opacity = Math.random() * 0.6 + 0.3;
        this.color = '#C9FF54';
        this.pulse = Math.random() * Math.PI;
      }
      this.sway = Math.random() * Math.PI * 2;
      this.swaySpeed = Math.random() * 0.03 + 0.01;
    }

    update() {
      this.sway += this.swaySpeed;
      this.y += this.speedY;
      this.x += this.speedX + Math.sin(this.sway) * 0.5;

      if (this.type === 'leaf') {
        this.angle += this.angleSpeed;
      } else if (this.type === 'firefly') {
        this.pulse += 0.05;
        this.currentOpacity = this.opacity * (0.6 + 0.4 * Math.sin(this.pulse));
      }

      if (this.y < -20 || this.x < -20 || this.x > width + 20) {
        this.reset();
      }
    }

    draw() {
      // Apply mouse parallax offset
      const px = this.x - mouse.x * (this.size / 8);
      const py = this.y - mouse.y * (this.size / 8);

      ctx.save();
      ctx.translate(px, py);

      if (this.type === 'leaf') {
        ctx.rotate(this.angle);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.ellipse(0, 0, this.size, this.size * 0.45, 0, 0, Math.PI * 2);
        ctx.fill();
      } else if (this.type === 'pollen') {
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(0, 0, this.size, 0, Math.PI * 2);
        ctx.fill();
      } else { // firefly
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.currentOpacity || this.opacity;
        ctx.shadowColor = '#C9FF54';
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(0, 0, this.size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    }
  }

  // Populate particles
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Smooth mouse parallax easing
    mouse.x += (mouse.targetX - mouse.x) * 0.05;
    mouse.y += (mouse.targetY - mouse.y) * 0.05;

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    requestAnimationFrame(animate);
  }

  animate();
})();
