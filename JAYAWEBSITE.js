


const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});


const links = document.querySelectorAll('nav a[href^="#"]'); 

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); 
        
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            
            window.scrollTo({
                top: targetElement.offsetTop - 60,
                behavior: 'smooth'
            });
        }
    });
});

// 3. Change header background color when scrolling
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'; // Darker background
    } else {
        header.style.backgroundColor = 'rgba(26, 26, 26, 1)'; // Original background
    }
});
