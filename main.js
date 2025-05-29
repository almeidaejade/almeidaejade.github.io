const parallax = document.getElementById("home-img-lg");
const parallax1 = document.getElementById("parallax1");
const parallax2 = document.getElementById("parallax2");

window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionX = offset*(-0.3)-100 + "px";
})


window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    offset-=3100;
    parallax1.style.backgroundPositionY = offset*(0.1) + "px";
})

window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    offset-=4800;
    parallax2.style.backgroundPositionY = offset*(-0.1) + "px";
})

function myFunction() {
    document.getElementById("check").checked = false;
  }


  
function reveal() {
var reveals = document.querySelectorAll(".reveal");
  
for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
}

window.addEventListener("scroll", reveal);

// Contador regressivo
function updateCountdown() {
  const weddingDate = new Date('2025-06-06T22:00:00');
  const now = new Date();
  const diff = weddingDate - now;
  
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
  document.getElementById('countdown-days').textContent = days;
  document.getElementById('countdown-hours').textContent = hours;
  document.getElementById('countdown-minutes').textContent = minutes;
  document.getElementById('countdown-seconds').textContent = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Botão voltar ao topo
window.addEventListener('scroll', function() {
  const backToTop = document.querySelector('.back-to-top');
  if (window.pageYOffset > 300) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});

document.querySelector('.back-to-top').addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Efeito de confete
function createConfetti() {
  const confetti = document.createElement('div');
  confetti.className = 'confetti';
  confetti.style.left = Math.random() * window.innerWidth + 'px';
  confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  document.body.appendChild(confetti);
  
  const animation = confetti.animate([
    { top: '0', opacity: 1 },
    { top: window.innerHeight + 'px', opacity: 0 }
  ], {
    duration: 2000 + Math.random() * 3000,
    easing: 'cubic-bezier(0.1, 0.8, 0.3, 1)'
  });
  
  animation.onfinish = () => confetti.remove();
}

// Disparar confete em momentos especiais
window.addEventListener('scroll', function() {
  if (window.pageYOffset > document.getElementById('story').offsetTop && 
      window.pageYOffset < document.getElementById('story').offsetTop + 300) {
    if (Math.random() > 0.7) createConfetti();
  }
});

function myFunction() {
    // Fecha o menu mobile
    document.getElementById("check").checked = false;
    
    // Obtém o ID do alvo do link clicado
    const targetId = event.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
        // Calcula a posição com offset ajustado para o cabeçalho
        const headerHeight = 80; // Ajuste conforme a altura do seu cabeçalho
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        // Scroll suave
        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });
    }
    
    // Previne o comportamento padrão do link
    event.preventDefault();
}