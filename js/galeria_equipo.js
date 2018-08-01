$(function(){
  $('.modal').hide();
  $('.img1').click(function(galeria){
      galeria.preventDefault();
    $('.modal').slideDown();
  });
  $('.modalcerrar').click(function(cerrar){
    cerrar.preventDefault();
    $('.modal').slideUp();
  });
});

