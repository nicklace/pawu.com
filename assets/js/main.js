jQuery(document).ready(function () {

  wow = new WOW(
    {
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       0,          // default
      mobile:       false,       // default
      live:         true        // default
    }
  )
  wow.init();

  /* Scroll */
  jQuery(".scroll").on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        jQuery('html, body').animate({
        scrollTop: jQuery(hash).offset().top
        }, 500, function(){
        window.location.hash = hash;
        });
    }
});

});

/******************** */
