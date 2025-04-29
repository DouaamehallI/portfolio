// Typing Effect for the About Section
const typingEffect = () => {
    const textElement = document.querySelector('.typing-effect p');
    const text = "Welcome to Douaa's Portfolio";
    let index = 0;
  
    const type = () => {
      if (index < text.length) {
        textElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100); // Adjust typing speed (100ms per character)
      }
    };
  
    type();
  };
  
  // Smooth Scrolling for Navigation Links
  const smoothScroll = () => {
    const links = document.querySelectorAll('.header-links a');
  
    links.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  };
  
  // Initialize Functions
  document.addEventListener('DOMContentLoaded', () => {
    typingEffect();
    smoothScroll();
  });