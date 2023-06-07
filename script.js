// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Typewriter effect for the header
  const typewriterText = "Swastik Sinha - Technology Enthusiast";
  const headerTextElement = document.querySelector('header h1');
  let typewriterIndex = 0;
  
  function typewriter() {
    if (typewriterIndex < typewriterText.length) {
      headerTextElement.textContent += typewriterText.charAt(typewriterIndex);
      typewriterIndex++;
      setTimeout(typewriter, 100);
    }
  }
  
  typewriter();
  
  // Add fade-in animation to sections on scroll
  const sections = document.querySelectorAll('section');
  
  function animateSections() {
    for (let section of sections) {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;
  
      if (window.pageYOffset >= sectionTop - window.innerHeight / 2 &&
          window.pageYOffset <= sectionBottom) {
        section.classList.add('fade-in');
      }
    }
  }
  
  animateSections();
  
  window.addEventListener('scroll', animateSections);
  
  // Revealing effect on click
  const sectionCovers = document.querySelectorAll('.cover-photo');
  
  sectionCovers.forEach(cover => {
    const content = cover.nextElementSibling;
  
    cover.addEventListener('click', () => {
      content.classList.toggle('reveal');
    });
  });
  
  // Interactive buttons
  const buttons = document.querySelectorAll('.interactive-button');
  
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      alert('Button clicked!'); // Replace with your desired functionality
    });
  });
  