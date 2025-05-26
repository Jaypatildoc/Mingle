document.addEventListener('DOMContentLoaded', function() {
    // Initialize Swiper carousel for brand reels section if on projects page
    if (document.querySelector('.reelsSwiper1')) {
        const reelsSwiper1 = new Swiper('.reelsSwiper1', {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            pagination: {
                el: '.reelsSwiper1 .swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.reelsSwiper1 .swiper-button-next',
                prevEl: '.reelsSwiper1 .swiper-button-prev',
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            },
            autoplay: {
                delay: 3500,
                disableOnInteraction: false,
            },
            effect: 'coverflow',
            coverflowEffect: {
                rotate: 5,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
            },
        });
    }

    // Enhanced magnification effect for full-screen graphic design section
    const magnifyContainers = document.querySelectorAll('.magnify-container');
    const fullscreenContainer = document.querySelector('.magnify-container.fullscreen');
    
    // Apply special handling for the fullscreen container if it exists
    if (fullscreenContainer) {
        fullscreenContainer.addEventListener('mousemove', function(e) {
            const rect = fullscreenContainer.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const img = fullscreenContainer.querySelector('img');
            const centerX = fullscreenContainer.offsetWidth / 2;
            const centerY = fullscreenContainer.offsetHeight / 2;
            
            // Calculate the transform based on mouse position with enhanced effect
            const moveX = (x - centerX) / 8; // More subtle movement
            const moveY = (y - centerY) / 8;
            
            img.style.transform = `scale(1.3) translate(${-moveX}px, ${-moveY}px)`;
        });
        
        fullscreenContainer.addEventListener('mouseleave', function() {
            const img = fullscreenContainer.querySelector('img');
            img.style.transform = 'scale(1)';
        });
    }
    
    // Regular magnification for other containers
    magnifyContainers.forEach(container => {
        container.addEventListener('mousemove', function(e) {
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const img = container.querySelector('img');
            const centerX = container.offsetWidth / 2;
            const centerY = container.offsetHeight / 2;
            
            // Calculate the transform based on mouse position
            const moveX = (x - centerX) / 10;
            const moveY = (y - centerY) / 10;
            
            img.style.transform = `scale(1.2) translate(${-moveX}px, ${-moveY}px)`;
        });
        
        container.addEventListener('mouseleave', function() {
            const img = container.querySelector('img');
            img.style.transform = 'scale(1)';
        });
    });

    // Play button animation for reels
    const reelItems = document.querySelectorAll('.reel-item');
    
    reelItems.forEach(item => {
        item.addEventListener('click', function() {
            // Here you would typically open a modal with the video
            // For now, we'll just add a simple animation
            const playButton = item.querySelector('.play-button');
            playButton.style.transform = 'translate(-50%, -50%) scale(1.2)';
            
            setTimeout(() => {
                playButton.style.transform = 'translate(-50%, -50%) scale(1)';
                alert('Video would play in a modal here');
            }, 200);
        });
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
});