document.addEventListener('DOMContentLoaded', () => {
    // Canvas background animation
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    document.body.insertBefore(canvas, document.body.firstChild);
    
    function setupCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      canvas.style.position = 'fixed';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.zIndex = '-1';
      canvas.style.opacity = '0.5';
    }
    
    setupCanvas();
    window.addEventListener('resize', setupCanvas);
  
    // Particle system
    const particles = [];
    const particleCount = 50;
    
    class Particle {
      constructor() {
        this.reset();
      }
      
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 2;
        this.speedY = (Math.random() - 0.5) * 2;
        this.life = Math.random() * 100 + 100;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life--;
        
        if (this.life <= 0 || 
            this.x < 0 || this.x > canvas.width || 
            this.y < 0 || this.y > canvas.height) {
          this.reset();
        }
      }
      
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 216, 255, ${this.life / 200})`;
        ctx.fill();
      }
    }
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    }
    
    animate();
  
    // Enhanced scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px'
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.transform = 'translateY(0)';
          entry.target.style.opacity = '1';
        }
      });
    }, observerOptions);
  
    // Apply animations to elements
    document.querySelectorAll('section, .project-card, .skill-tag').forEach(el => {
      el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
      el.style.transform = 'translateY(50px)';
      el.style.opacity = '0';
      observer.observe(el);
    });
  
    // Interactive project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = -(x - centerX) / 10;
        
        card.style.transform = `
          perspective(1000px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          scale(1.05)
        `;
        
        // Dynamic shadow
        card.style.boxShadow = `
          ${(x - centerX) / 10}px 
          ${(y - centerY) / 10}px 
          20px rgba(0, 0, 0, 0.3)
        `;
      });
  
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'none';
        card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
      });
    });
  
    // Animated skill tags
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
      tag.addEventListener('mouseover', function() {
        const colors = ['#0077b6', '#00a8e8', '#00d8ff'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        this.style.backgroundColor = randomColor;
        this.style.transform = 'translateY(-5px) rotate(5deg)';
      });
  
      tag.addEventListener('mouseout', function() {
        this.style.backgroundColor = '';
        this.style.transform = 'none';
      });
    });
  
    // Smooth navigation
    const nav = document.querySelector('nav');
    const threshold = 50;
    let lastScroll = 0;
  
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      if (Math.abs(currentScroll - lastScroll) < threshold) return;
      
      if (currentScroll > lastScroll && currentScroll > nav.offsetHeight) {
        nav.style.transform = 'translateY(-100%)';
      } else {
        nav.style.transform = 'translateY(0)';
      }
      
      lastScroll = currentScroll;
    });
  });