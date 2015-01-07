//function for navbar

$(document).ready(function() {
            
            var $nav = $('.nav');
            var $nav2 = $('.link')
            $nav.onePageNav();
            
            $nav2.on('click', 'a', function(e){
                var $link = $('.link a').attr('href');
                
                $('.nav a').each(function(){
                    var $val = $(this).attr('href');
                    if($val == $link){
                        $(this).trigger('click');
                    }
                });
                
                e.preventDefault();
            });
            
});


//funtion for knob for skills

$(function() {
    $('.dial').knob({
        'bgColor':'#2b2b2b',
        'readOnly':true,
        'angleOffset':-125
    });
});

//function for navbar opacity

$(window).scroll(function () {
    if ($(this).scrollTop() > 80) {
        $('.navbar').css({ 'opacity' : 1.0 });  
    }
    
    if ($(this).scrollTop() < 80) {
        $('.navbar').css({ 'opacity' : 0.8 });  
    } 
                   
});


//function for isotope
$(document).ready(function(){
			    var $container = $('.thumbnails');
			    $container.isotope({
			        filter: '*',
			        animationOptions: {
			            duration: 750,
			            easing: 'linear',
			            queue: false,
			        }
			    });
			
				$('#naveed a').click(function(){
				    var selector = $(this).attr('data-filter');
				    $container.isotope({
				        filter: selector,
				        animationOptions: {
				            duration: 750,
				            easing: 'linear',
				            queue: false,
				        }
				    });
				  return false;
				});
			
			});
			



