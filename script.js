var burger = document.querySelector('.burger');
var menu = document.querySelector('.menu__nav');
burger.addEventListener('click', function(event) {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
  document.documentElement.classList.toggle('lock');
});
function closeNav() {
  var closemenu = document.querySelector('.menu__nav');
  var closeburger = document.querySelector('.burger');
  closemenu.classList.remove('active');
  closeburger.classList.remove('active');
  document.documentElement.classList.remove('lock');
}


document.addEventListener('DOMContentLoaded', function() {
  const detailsBtn1 = document.querySelector('.details-btn-1');
  const detailsText1 = document.querySelector('.details-text-1');

  const detailsBtn2 = document.querySelector('.details-btn-2');
  const detailsText2 = document.querySelector('.details-text-2');

  const detailsBtn3 = document.querySelector('.details-btn-3');
  const detailsText3 = document.querySelector('.details-text-3');

  if (detailsBtn1 && detailsText1) {
    detailsBtn1.addEventListener('click', function() {
      if (detailsText1.style.display === 'none') {
        detailsText1.style.display = 'block';
        detailsBtn1.textContent = 'Hide Details';
      } else {
        detailsText1.style.display = 'none';
        detailsBtn1.textContent = 'Details';
      }
    });
  }

  if (detailsBtn2 && detailsText2) {
    detailsBtn2.addEventListener('click', function() {
      if (detailsText2.style.display === 'none') {
        detailsText2.style.display = 'block';
        detailsBtn2.textContent = 'Hide Details';
      } else {
        detailsText2.style.display = 'none';
        detailsBtn2.textContent = 'Details';
      }
    });
  }

  if (detailsBtn3 && detailsText3) {
    detailsBtn3.addEventListener('click', function() {
      if (detailsText3.style.display === 'none') {
        detailsText3.style.display = 'block';
        detailsBtn3.textContent = 'Hide Details';
      } else {
        detailsText3.style.display = 'none';
        detailsBtn3.textContent = 'Details';
      }
    });
  }
});


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4.4,
  breakpoints: {
    374:{
      slidesPerView: 1.4,
    },
    768:{
      slidesPerView: 2.4,
    },
    992: {
      slidesPerView: 3.4,
      },
    1200: {
      slidesPerView: 4.4,
    }
  }
});

document.addEventListener("mousemove", parallax);
function parallax(event) {
  const windowHeight = window.innerHeight;
  if (event.pageY >= windowHeight) {
    return;
  }

  this.querySelectorAll(".parallax").forEach((shift) => {
    const position = shift.getAttribute("value");
    const x = (window.innerWidth - event.pageX * position) / 90;
    const y = (windowHeight - event.pageY * position) / 90;
    shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}