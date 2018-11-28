$(document).ready(function(){

  /*** Different DOM Operations ***/
  jQuery(document).ready(function(){
    /** Switching the Navbar from fixed-bottom to fixed-top and vice-versa depending on resolution **/
    if (jQuery(window).width() < 750) {
      console.log("Window size: " + jQuery(window).width());
      $('#navbar-header').removeClass("navbar-fixed-bottom");
      $('#navbar-header div div a.navbar-brand').removeClass("hidden");
      $('#navbar-header').addClass("navbar-fixed-top");
      $('#navbar ul li').removeClass("hvr-grow");
      $('#navbar ul li').addClass("text-right");
      $('.work-tiles div div.card-container').removeClass('no-padding');
    }else if(jQuery(window).width() > 750) {
      console.log("Window size: " + jQuery(window).width());
      $('#navbar-header div div a.navbar-brand').addClass("hidden");
      $('#navbar-header').removeClass("navbar-fixed-top");
      $('#navbar-header').addClass("navbar-fixed-bottom");
      $('#navbar ul li').addClass("hvr-grow");
      $('#navbar ul li').removeClass("text-right");
      $('.work-tiles div div.card-container').addClass('no-padding');
    }
    /********************************/

    /** Changing the height of the Home section depending on resolution **/
    if (jQuery(window).width() < 974) {
      $('section.home').css("height", "auto");
    }else if(jQuery(window).width() > 974) {
      $('section.home').css("height", "100vh");
    }
    /*******************/

    /** Experience section, the two panels, resizing each column (1 per panel) depending on resolution **/
    if (jQuery(window).width() < 1025) {
      $('.panel-container').removeClass("col-md-6");
      $('.panel-container').addClass("col-md-12");
    }else if(jQuery(window).width() > 1025) {
      $('.panel-container').removeClass("col-md-12");
      $('.panel-container').addClass("col-md-6");
    }
    /****************************/

    /* IPAD PRO & IPAD Bio box position*/
    if(((jQuery(window).height() > 1023 && jQuery(window).height() < 1367)) &&
      ((jQuery(window).width() > 1023 && jQuery(window).width() < 1367))){
      console.log("Viewport Height: " + jQuery(window).height());
      $('.bio-box-col').css("margin", "0");
      $('.bio-box-col').css("position", "absolute");
      $('.bio-box-col').css("top", "25%");
      $('.bio-box-col').css("left", "0");
    }else if(((jQuery(window).height() > 767 && jQuery(window).height() < 1025)) &&
            ((jQuery(window).width() > 767 && jQuery(window).width() < 1025))){
      console.log("Viewport Height: " + jQuery(window).height());
      $('.bio-box-col').css("margin", "0");
      $('.bio-box-col').css("position", "relative");
      $('.bio-box-col').css("top", "0");
      $('.bio-box-col').css("left", "0");
    }
    /********************/
  });

  jQuery(window).resize(function () {
    /** Switching the Navbar from fixed-bottom to fixed-top and vice-versa depending on resolution **/
    if (jQuery(window).width() < 750) {
      console.log("Window re-size: " + jQuery(window).width());
      $('#navbar-header div div a.navbar-brand').removeClass("hidden");
      $('#navbar-header').removeClass("navbar-fixed-bottom");
      $('#navbar-header').addClass("navbar-fixed-top");
      $('#navbar ul li').removeClass("hvr-grow");
      $('#navbar ul li').addClass("text-right");
      $('.work-tiles div div.card-container').removeClass('no-padding');
    }else if(jQuery(window).width() > 750) {
      console.log("Window re-size: " + jQuery(window).width());
      $('#navbar-header div div a.navbar-brand').addClass("hidden");
      $('#navbar-header').removeClass("navbar-fixed-top");
      $('#navbar-header').addClass("navbar-fixed-bottom");
      $('#navbar ul li').addClass("hvr-grow");
      $('#navbar ul li').removeClass("text-right");
      $('.work-tiles div div.card-container').addClass('no-padding');
    }
    /******************************/

    /** Changing the height of the Home section depending on resolution **/
    if (jQuery(window).width() < 974) {
      $('section.home').css("height", "auto");
    }else if(jQuery(window).width() > 974) {
      $('section.home').css("height", "100vh");
    }
    /****************************/

    /** Experience section, the two panels, resizing each column (1 per panel) depending on resolution **/
    if (jQuery(window).width() < 1025) {
      $('.panel-container').removeClass("col-md-6");
      $('.panel-container').addClass("col-md-12");
    }else if(jQuery(window).width() > 1025) {
      $('.panel-container').removeClass("col-md-12");
      $('.panel-container').addClass("col-md-6");
    }
    /************************/

    /* IPAD PRO & IPAD Bio box position*/
    if(((jQuery(window).height() > 1023 && jQuery(window).height() < 1367)) &&
      ((jQuery(window).width() > 1023 && jQuery(window).width() < 1367))){
      console.log("Viewport Height: " + jQuery(window).height());
      $('.bio-box-col').css("margin", "0");
      $('.bio-box-col').css("position", "absolute");
      $('.bio-box-col').css("top", "25%");
      $('.bio-box-col').css("left", "0");
    }else if(((jQuery(window).height() > 767 && jQuery(window).height() < 1025)) &&
            ((jQuery(window).width() > 767 && jQuery(window).width() < 1025))){
      console.log("Viewport Height: " + jQuery(window).height());
      $('.bio-box-col').css("margin", "0");
      $('.bio-box-col').css("position", "relative");
      $('.bio-box-col').css("top", "0");
      $('.bio-box-col').css("left", "0");
    }
    /********************/

  });
  /*****************************************************/

  /** Adding PopOver on 'Open' button, Experience section, under 'My Resume' **/
  $('[data-toggle="popover"]').popover();
  /*******************/

  //Leflet.JS with OpenStreetMap
  var map = L.map('map').setView([40.4976, -74.48849], 10);

  L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: ['a','b','c']
  }).addTo( map );

  L.marker([40.4976, -74.48849]).addTo(map)
		.bindPopup("I'm Here.").openPopup();
  /*****************/

  // Google Maps
  // $('#map')
  //     .gmap3({
  //       address: "Somerset, NJ USA",
  //       zoom: 15,
  //       mapTypeId : google.maps.MapTypeId.ROADMAP
  //     })
  //     .marker(function (map) {
  //       return {
  //         position: map.getCenter(),
  //         icon: 'http://maps.google.com/mapfiles/marker_green.png'
  //       };
  //     })
  //       .on('click', function (marker, event) {
  //         marker.setIcon('http://maps.google.com/mapfiles/marker_orange.png');
  //         setTimeout(function () {
  //           marker.setIcon('http://maps.google.com/mapfiles/marker_green.png');
  //         }, 200);
  //       });
});
