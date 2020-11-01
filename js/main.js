$(document).ready(function(){
    //슬라이더

    $('.con01ListWrap').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow:'<div class="slideBtn slidePrev"><img src="images/common/prevBtn.png"></div>',
        nextArrow:'<div class="slideBtn slideNext"><img src="images/common/nextBtn.png"></div>',
    });

    
    $('.con02').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots:true,
        prevArrow:false,
        nextArrow:false,
	});



    
    
    
    
    
    
    
    
})