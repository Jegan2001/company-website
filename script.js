// scripts/script.js
document.getElementById('year').textContent = new Date().getFullYear();
const menuToggle = document.getElementById('menuToggle');
menuToggle?.addEventListener('click', ()=>{
  const nav = document.querySelector('.nav');
  if(!nav) return;
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
form?.addEventListener('submit', async (e) => {
  e.preventDefault();
  status.textContent = 'Sending...';
  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value
  };
  try {
    await fetch('https://example.com/api/contact', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(data)
    });
    status.textContent = 'Message sent — we will reply soon.';
    form.reset();
  } catch (err) {
    status.textContent = 'Could not send. Replace URL with your backend or form service.';
  }
});
