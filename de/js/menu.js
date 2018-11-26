var nbOptions = 8;
var angleStart = -360;

// jquery rotate animation
function rotate(li,d,button,c) {
    $({d:angleStart}).animate({d:d}, {
        step: function(now) {
            $(li)
               .css({ transform: 'rotate('+now+'deg)' })
               .find('li')
                  .css({ transform: 'rotate('+(-now)+'deg)' });
        }, duration: 0
    });
	$({c:angleStart}).animate({c:c}, {
        step: function(now) {
            $(button)
               .css({ transform: 'rotate('+now+'deg)' })
               .find('button')
                  .css({ transform: 'rotate('+(-now)+'deg)' });
        }, duration: 0
    });
}

// show / hide the options
function toggleOptions(s) {
    $(s).toggleClass('open');
    var li = $(s).find('li');
    var button = $(s).find('button');
    var deg = $(s).hasClass('half') ? 180/(button.length-1) : 360/button.length;
    var deg = $(s).hasClass('half') ? 180/(li.length-1) : 360/li.length;
    for(var i=0; i<li.length; i++) {
        var d = $(s).hasClass('half') ? (i*deg)-120 : i*deg;
        $(s).hasClass('open') ? rotate(li[i],d) : rotate(li[i],angleStart);
    } 
	for(var i=0; i<button.length; i++) {
        var c = $(s).hasClass('half') ? (i*deg)-120 : i*deg;
        $(s).hasClass('open') ? rotate(button[i],c) : rotate(button[i],angleStart);
    }
}

$('.selector button').click(function(e) {
    toggleOptions($(this).parent());
});

setTimeout(function() { toggleOptions('.selector'); }, 100);


var burgerOpen = false;

function toggleBurger(){
    if(burgerOpen != true){
        $(".right").css("width", "90%"); // 250% before always on top after 90%
        burgerOpen = true;
    }
    else{
        $(".right").css("width", "0%");
        burgerOpen = false;
    }
}

function toggleBurgerMain(){
    if(burgerOpen != true){
        $(".right").css("width", "60%");
        $(".right").css("z-index", "2");
        burgerOpen = true;
    }
    else{
        $(".right").css("width", "0%");
        setTimeout(function(){$(".right").css("z-index", "0");}, 700);
        burgerOpen = false;
    }
}