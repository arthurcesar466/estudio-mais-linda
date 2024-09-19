const nav = document.querySelector(".nav");
const btnMenu = document.querySelector(".btn-menu");
const menu = document.querySelector(".menu");

function handleButtonClick(event) {
  if (event.type === "touchstart") event.preventDefault();
  event.stopPropagation();
  nav.classList.toggle("active");
  handleClickOutside(menu, () => {
    nav.classList.remove("active");
    setAria();
  });
  setAria();
}

function handleClickOutside(targetElement, callback) {
  const html = document.documentElement;
  function handleHTMLClick(event) {
    if (!targetElement.contains(event.target)) {
      targetElement.removeAttribute("data-target");
      html.removeEventListener("click", handleHTMLClick);
      html.removeEventListener("touchstart", handleHTMLClick);
      callback();
    }
  }
  if (!targetElement.hasAttribute("data-target")) {
    html.addEventListener("click", handleHTMLClick);
    html.addEventListener("touchstart", handleHTMLClick);
    targetElement.setAttribute("data-target", "");
  }
}

function setAria() {
  const isActive = nav.classList.contains("active");
  btnMenu.setAttribute("aria-expanded", isActive);
  if (isActive) {
    btnMenu.setAttribute("aria-label", "Fechar Menu");
  } else {
    btnMenu.setAttribute("aria-label", "Abrir Menu");
  }
}

btnMenu.addEventListener("click", handleButtonClick);
btnMenu.addEventListener("touchstart", handleButtonClick);


document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
      const tab = button.getAttribute('data-tab');
      const content = document.getElementById(tab);
  
      if (button.classList.contains('active')) {
        // Se a aba já estiver ativa, remova a classe active para fechar
        button.classList.remove('active');
        content.classList.remove('active');
      } else {
        // Caso contrário, ative a aba clicada e desative as outras
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
  
        button.classList.add('active');
        content.classList.add('active');
      }
    });
  });
  
  document.addEventListener('click', (event) => {
    const isClickInside = event.target.closest('.tabs, .tab-content');
  
    if (!isClickInside) {
      document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    }
  });
  
  

//BUTTON DE + E X//

document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
      const target = button.getAttribute('data-tab');
      const content = document.getElementById(target);
      const icon = button.querySelector('i');
  
      if (content.style.display === 'block') {
        content.style.display = 'none';
        icon.classList.remove('fi-br-cross');
        icon.classList.add('fi-rs-plus');
      } else {
        document.querySelectorAll('.tab-content').forEach(content => content.style.display = 'none');
        document.querySelectorAll('.tab-button i').forEach(icon => {
          icon.classList.remove('fi-br-cross');
          icon.classList.add('fi-rs-plus');
        });
        
        content.style.display = 'block';
        icon.classList.remove('fi-rs-plus');
        icon.classList.add('fi-br-cross');
      }
    });
  });

  //whatsapp movel//

  const whatsappFixed = document.getElementById('whatsapp-fixed');

whatsappFixed.addEventListener('touchstart', startDrag);
whatsappFixed.addEventListener('touchmove', drag);
whatsappFixed.addEventListener('touchend', endDrag);

let offsetX, offsetY;

function startDrag(e) {
  const touch = e.touches[0];
  offsetX = touch.clientX - whatsappFixed.getBoundingClientRect().left;
  offsetY = touch.clientY - whatsappFixed.getBoundingClientRect().top;
  whatsappFixed.style.cursor = 'grabbing';
}

function drag(e) {
  e.preventDefault();
  const touch = e.touches[0];
  whatsappFixed.style.left = `${touch.clientX - offsetX}px`;
  whatsappFixed.style.top = `${touch.clientY - offsetY}px`;
}

function endDrag() {
  whatsappFixed.style.cursor = 'grab';
}
