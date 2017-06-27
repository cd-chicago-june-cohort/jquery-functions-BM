

$(document).ready(function(){

$('#click').click(function(){
    alert ("You just clicked a button, now you get a cookie.");
})

$('#hide').click(function(){
    $('.goAway').hide(2000, function(){
        $('.goAway').show(2000, function(){
            $('.goAway').text("And.......They're back.")
        });
    });
})

$('#show').click(function(){
    $('.comeGo').toggle();
    })

$('#slidedown').click(function(){
    $('.slideDown').slideDown();
})

$('#slideUp').click(function(){
    $('.slideUp').slideUp();
})

$('#slideToggle').click(function(){
    $('.slideToggle').slideToggle();
})

$('#fadeIn').click(function(){
    $('.fadeIn').fadeIn(2000);
})

$('#fadeOut').click(function(){
    $('.fadeOut').fadeOut(2000);
})

$('#addClass').click(function(){
    $('.addClass').toggleClass('red')
})

$('#before').click(function(){
    $('.before').before('<p>To the victor go<p>');
})

$('#after').click(function(){
    $('.after').after("<p>if you don't eat your meat?<p>");
})

$('#after').click(function(){
    $('.after').after("<p>if you don't eat your meat?<p>");
})

$('#append').click(function(){
    $('.append').append("<p>You're appended.<p>");
})

$('#html').click(function(){
    $('.html').html('Click the button, change <em>YOUR LIFE.</em>');
})

$('#attr').click(function(){
    $('.attrbox img').attr('width', '120');
})

$('#val').click(function(){
    $('.val').val('Is my name, too.');
})

$('#text').click(function(){
    $('.text').text('BOOM!  Life=Changed.')
})

$("#data").click(function(){
        $("div").data("data", "Soak it up in a data method.");
});
    $("#data2").click(function(){
        alert($("div").data("data"));
    });

$('#byebye').click(function(){
    $('.container').hide(2000, function(){    
    });
})

});

