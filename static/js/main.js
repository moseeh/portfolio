// static/js/main.js
document.addEventListener('DOMContentLoaded', () => {
    // Navigation scroll effect
    const nav = document.querySelector('nav');
    const navHeight = nav.offsetHeight;
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add/remove nav background based on scroll
        if (currentScroll > 50) {
            nav.classList.add('nav-scrolled');
        } else {
            nav.classList.remove('nav-scrolled');
        }
        
        lastScroll = currentScroll;
    });

    // Smooth scrolling with offset
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const targetPosition = target.offsetTop - navHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections and project cards
    document.querySelectorAll('section, .project-card').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // Add hover effect to skill tags
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        tag.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Project card hover effect
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.transform = `
                perspective(1000px)
                rotateX(${(y - rect.height/2) / 20}deg)
                rotateY(${-(x - rect.width/2) / 20}deg)
                translateY(-8px)
            `;
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = 'none';
        });
    });

    // Mobile menu toggle
    const menuButton = document.createElement('button');
    menuButton.classList.add('menu-toggle');
    menuButton.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;
    
    const nav1 = document.querySelector('.nav-content');
    const navLinks = document.querySelector('.nav-links');
    
    if (window.innerWidth <= 768) {
        nav1.insertBefore(menuButton, navLinks);
        
        menuButton.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuButton.classList.toggle('active');
        });
    }
});

// Add this CSS for the menu button
const style = document.createElement('style');
style.textContent = `
    .menu-toggle {
        display: none;
        flex-direction: column;
        justify-content: space-around;
        width: 30px;
        height: 25px;
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 0;
        z-index: 10;
    }

    .menu-toggle span {
        width: 30px;
        height: 3px;
        background: var(--text-color);
        border-radius: 10px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;
    }

    @media (max-width: 768px) {
        .menu-toggle {
            display: flex;
        }
    }
`;
document.head.appendChild(style);