/* HTML document is loaded. DOM is ready. 
-------------------------------------------*/
$(function(){
  /* FlexSlider */
  //$(".slides").find("img").css("height",($(window).height()-65)+"px");
  $("#home").css("height",($(window).height()>700?$(window).height():700)+"px");
  $("#about").css("height",($(window).height()>700?$(window).height():720)+"px");
  $("#team").css("height",($(window).height()>700?$(window).height():700)+"px");
  $("#JoinUS").css("height",($(window).height()>700?$(window).height():700)+"px");
  var $wimg = $(".work_thumb").find("img"),$wx1=$("#wx1").find("img"),$wx2=$("#wx2").find("img");
  $wimg.css("height",($wimg.width()*0.75)+"px");
  $("#wx1").css("height",$wx1.height()+20+"px");
  $("#wx2").css("height",$wx2.height()+"px");
  $('.flexslider').flexslider({
      animation: "fade",
      directionNav: false
  });

  $(".work_thumb").zoom();
  $(".rotate").textrotator();

  new WOW().init();

  $(window).resize(function() {
    $('.work_thumb').trigger('zoom.destroy');
    $("#home").css("height",($(window).height()>700?$(window).height():700)+"px");
    $("#about").css("height",($(window).height()>700?$(window).height():720)+"px");
    $("#team").css("height",($(window).height()>700?$(window).height():700)+"px");
    if($("#about").width()<768){
        $("#about").css("height","1680px");
    }
    var $wimg = $(".work_thumb").find("img"),$wx1=$("#wx1").find("img"),$wx2=$("#wx2").find("img");
    $(".work_thumb").css("height",$wimg.width()*0.75+"px");
    $wimg.css("height",($wimg.width()*0.75)+"px");
    $("#wx1").css("height",$wx1.height()+20+"px");
    $("#wx2").css("height",$wx2.height()+"px");
    $(".work_thumb").zoom();
  });
  //loadGoogleMap();
});
$(window).ready(function(){
    if($("#about").width()<768){
        $("#about").css("height","1680px");
    }
    var $wx1=$("#wx1"),$wx2=$("#wx2");
    $("#wx1").css("height",$wx1.width()*0.45+20+"px");
    $("#wx2").css("height",$wx2.width()*0.45+"px");
});
