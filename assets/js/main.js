jQuery(document).ready(function () {

  if($(".swiper-container").length){
    const swiper = new Swiper('.swiper-container', {
      // Optional parameters
      loop: true,
      effect: "fade",

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    });
  }

  $(".chatTrigger").on('click', function(event) {
    event.preventDefault();
    $('#chat').toggleClass('show');
  });

  /* Menu */
  $('.navbar').on('shown.bs.collapse', function () {
    $('body').addClass('open');
  });
  $('.navbar').on('hidden.bs.collapse', function () {
    $('body').removeClass('open');
  })


  var vpWidth = $( window ).width();

  if(vpWidth>990){
    openMenu();
  }

  if (vpWidth<1025 ){
    subMenuMobile();
  }

  $( window ).resize(function() {
    var vpWidth = $( window ).width();
    if (vpWidth<1025 ){
      subMenuMobile();
    }
    if(vpWidth>990){
      openMenu();
    }
  });

  // when any modal is opening
  $('.modal').on('show.bs.modal', function (e) {
    $('html').addClass('modal-opened');
  })

  // when any modal is closing
  $('.modal').on('hide.bs.modal', function (e) {
    $('html').removeClass('modal-opened');
  })

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  function subMenuMobile(){

    if (vpWidth<1025 && vpWidth>767){
      $(".companiesPlaceHolder").wrap("<div class='col-6 companiesPlaceHolderParent fakeDiv'></div>");
      $(".companiesHolder").detach().insertBefore(".companiesPlaceHolderParent").addClass('fakeDiv');
      $( ".fakeDiv" ).wrapAll( "<div class='row' ></div>");
    }

    $(".navbar-collapse.collapse:not(.show) .dropdown-toggle").on('click', function(event) {
      event.preventDefault();
      $('body').addClass('open');
      $('.navbar-collapse.collapse').addClass('show');
      $('.navbar-toggler').removeClass('collapsed');
    });

  }

  function openMenu(){
    $('.showOnly').each(function(){
      $(this).addClass('show');
    });
  }


  /* Select */
  jQuery('select').each(function(){
      var jQuerythis = jQuery(this), numberOfOptions = jQuery(this).children('option').length;

      jQuerythis.addClass('select-hidden'); 
      jQuerythis.wrap('<div class="select"></div>');
      jQuerythis.after('<div class="select-styled"></div>');

      var jQuerystyledSelect = jQuerythis.next('div.select-styled');
      jQuerystyledSelect.text(jQuerythis.children('option').eq(0).text());

      var jQuerylist = jQuery('<ul />', {
          'class': 'select-options'
      }).insertAfter(jQuerystyledSelect);

      for (var i = 1; i < numberOfOptions; i++) {
          jQuery('<li />', {
              text: jQuerythis.children('option').eq(i).text(),
              rel: jQuerythis.children('option').eq(i).val()
          }).appendTo(jQuerylist);
      }

      var jQuerylistItems = jQuerylist.children('li');

      jQuerystyledSelect.click(function(e) {
          e.stopPropagation();
          jQuery('div.select-styled.active').not(this).each(function(){
              jQuery(this).removeClass('active').next('ul.select-options').hide();
          });
          jQuery(this).toggleClass('active').next('ul.select-options').toggle();
      });

      jQuerylistItems.click(function(e) {
          e.stopPropagation();
          jQuerystyledSelect.text(jQuery(this).text()).removeClass('active');
          jQuerythis.val(jQuery(this).attr('rel'));
          jQuerylist.hide();
          //console.log(jQuerythis.val());
      });

      jQuery(document).click(function() {
          jQuerystyledSelect.removeClass('active');
          jQuerylist.hide();
      });

  });

});

/******************** */
