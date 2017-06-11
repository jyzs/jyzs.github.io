/* 
Google Maps
*/
var map = '';
var center;

function initialize() {
    var mapOptions = {
      zoom: 16,
      center: new google.maps.LatLng(13.758468, 100.567481),
      scrollwheel: false
    };
  
    map = new google.maps.Map(document.getElementById('map-canvas'),  mapOptions);

    google.maps.event.addDomListener(map, 'idle', function() {
        calculateCenter();
    });
  
    google.maps.event.addDomListener(window, 'resize', function() {
        map.setCenter(center);
    });
}

function calculateCenter() {
  center = map.getCenter();
}

function loadGoogleMap(){
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' + 'callback=initialize';
    document.body.appendChild(script);
}

/* HTML document is loaded. DOM is ready. 
-------------------------------------------*/
$(function(){
  /* FlexSlider */
  //$(".slides").find("img").css("height",($(window).height()-65)+"px");
  $("#home").css("height",($(window).height()>700?$(window).height():700)+"px");
  $("#about").css("height",($(window).height()>700?$(window).height():720)+"px");
  $("#team").css("height",($(window).height()>700?$(window).height():700)+"px");
  var $wimg = $(".work_thumb");
  $wimg.css("height",($wimg.width()*0.75)+"px");
  $('.flexslider').flexslider({
      animation: "fade",
      directionNav: false
  });

  $(".work_thumb").zoom();
  $(".rotate").textrotator();

  new WOW().init();

  $(window).resize(function() {
    $("#home").css("height",($(window).height()>700?$(window).height():700)+"px");
    $("#about").css("height",($(window).height()>700?$(window).height():720)+"px");
    $("#team").css("height",($(window).height()>700?$(window).height():700)+"px");
    if($("#about").width()<768){
        $("#about").css("height","1000px");
    }
    var $wimg = $(".work_thumb").find("img");
    $wimg.css("height",($wimg.width()*0.75)+"px");
  });
  //loadGoogleMap();
});