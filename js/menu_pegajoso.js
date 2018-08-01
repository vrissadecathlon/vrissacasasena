var flag = false;
var scroll;
$(window).scroll(function(){
    scroll = $(window).scrollTop();
    if(scroll > 100){
        
        $("#menu").css({"background":"#00789B"})
			;
    }else{
        $("#menu").css({"background":"#00789B"});
    }
    
});