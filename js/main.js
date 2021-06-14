// Header Active //
$(window).scroll(function () {
  if ($(this).scrollTop() > 20 ) {
    $('header').addClass("header--active");
  } else {
    $('header').removeClass("header--active");
  }
});

// Hero HalfCircle //
$(".progress").each(function(){
  
  var $bar = $(this).find(".bar");
  var $val = $(this).find("span");
  var perc = parseInt( $val.text(), 10);

  $({p:0}).animate({p:perc}, {
    duration: 3000,
    easing: "swing",
    step: function(p) {
      $bar.css({
        transform: "rotate("+ (45+(p*1.8)) +"deg)",
      });
      $val.text(p|0);
    }
  });
});

// Tabs //
function openTab(evt, cityName) {

  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("webdesign-process-tab-text");

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  
  tablinks = document.getElementsByClassName("webdesign-process-tab__link");

  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("tab--active", "");
  }

  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " tab--active";
}

// Modal //
let modal = {
  closeButton: $('.modal__close'),
  closeOverlay: $('.modal'),
  can: 1,
  init: function () {
      this.events();
  },
  openModal: function (id) {
      let modalWindow = $(id);
      modalWindow.fadeIn();
      modalWindow.find('.modal__content').removeClass('animate-away').addClass('animate-in');
  },

  closeModal: function (id) {
      let modalWindow = $(id);
      modalWindow.find('.modal__content').removeClass('animate-in').addClass('animate-away');
      modalWindow.fadeOut();
  },

  events: function () {
      $(document).on('click', '.modalTrigger', function (e) {
          e.preventDefault();
          let self = $(this),
              target = self.attr('data-modal');
          modal.openModal(target);

      });

      $(document).on('click', '.modal', function (event) {
          let self = '#' + $(this).attr('id');
          if (event.target.className == 'modal__body') {
              modal.closeModal(self);
          }
      });

      $(document).on('click', '.modal__close', function () {
          let self = '#' + $(this).closest('.modal').attr('id');
          modal.closeModal(self);
      });
  }
};

$( document ).ready(
  modal.init()
)

// Media 1200px //
if(window.matchMedia('(max-width: 1200px)').matches){

  // Switch NavButton //
  $('.nav__btn').html('Contact Us');

  // Dropdown //
  $('.icon-icon__arrow').click(function() {
    $('.dropdown').addClass('dropdown--active');
    $(['.nav__contacts', '.nav__btn']).toggleClass('is-hidden');
  });
  $('.mobile__back').click(function() {
    $('.dropdown').removeClass('dropdown--active');
    $(['.nav__contacts', '.nav__btn']).toggleClass('is-hidden');
  });

  // WebDesign Description //
  $('.webdesign-hero-container').children('.webdesign-hero-text').removeClass('is-hidden');
  $('.webdesign-hero-text').children('.site__description').addClass('is-hidden');
  $('.webdesign-hero-text').children('.site__subtitle').addClass('is-hidden');

} else {
  
  // Switch NavButton //
  $('.nav__btn').html('Write Us');

  // Dropdown //
  $('.dropdown__btn').mouseover(function() {
    $('.dropdown').addClass('dropdown--active');
  });
  $('.dropdown').mouseleave(function() {
    setTimeout(function() {
      $('.dropdown').removeClass('dropdown--active')
    }, 1000);
  });

  // WebDesign Description //
  $('.webdesign-hero-text').children('.site__description').removeClass('is-hidden');
  $('.webdesign-hero-text').children('.site__subtitle').removeClass('is-hidden');
  $('.webdesign-hero-container').children('.webdesign-hero-text').addClass('is-hidden');

};

// Clients Slider //
const swiper = new Swiper('.swiper-clients', {
  loop: true,
  centeredSlides: true,
  spaceBetween: 0,
  navigation: {
    nextEl: '.swiper-clients-next',
    prevEl: '.swiper-clients-prev',
  },
  breakpoints: {
    1201: {
      slidesPerView: 3,
    },
    320: {
      slidesPerView: 1,
    },
  }
});

AOS.init({
  once: true,
});