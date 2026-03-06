const contactForm = document.getElementById('contact-form');
const feedback = document.getElementById('form-feedback');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  feedback.textContent = "✅ Thank you for reaching out! We'll get back to you soon.";
  feedback.style.color = "green";
  contactForm.reset();
});
