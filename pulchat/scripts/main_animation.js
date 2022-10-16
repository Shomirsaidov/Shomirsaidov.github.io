    var rounds = 0;
    var counter = 0;
    var counter_img = 0;
    function animate() {
        var animation = setInterval(function() {
            $('.load_img').eq(counter_img).addClass('load_anim');
            counter_img += 1;
            counter += 1;
            if (counter == 16) {
                rounds += 1;
                if (rounds == 2) {
                    clearInterval(animation);
                    $('.load').css('display', 'none');
                    $('.wrapper').css('display', 'block');
                } else {
                    counter = 0;
                    counter_img = 0;
                    $('.load_anim').eq(counter).addClass('load_img');
                    $('.load_anim').eq(counter).removeClass('load_anim');
                }
            } else {
                $('.load_anim').eq(counter).addClass('load_img');
                $('.load_anim').eq(counter).removeClass('load_anim');
            }
        }, 120);
    }
    function increase_likes(decrease) {
        var aim = $(event_heart.target).parent().children().eq(2);
        if (!decrease) {
            var sum = $(aim).text();
            sum = (Number(sum));
            sum ++;
            $(aim).text(sum);
            

        } else if (decrease == 'true') {
            var sum = $(aim).text();
            sum = (Number(sum));
            sum --;
            $(aim).text(sum);
        }
    }

    function increase_dislikes(decrease) {
        var aim = $(event_dislike.target).parent().children().eq(2);
        var sum = $(aim).text();
        sum = (Number(sum));
        if (!decrease) {
            sum ++;        
        } else {
            sum --;
        }

        $(aim).text(sum);
    }

    animate();
    $('.dots').click(function (event) {
        // var aim = $(event.target);
        // var aim_2 = $(aim).next();

        $(event.target).next().slideToggle();
    })

    var event_heart;
    var event_dislike;

    const approve_like = function approve_like() {
        var aim = $(event_heart.target).parent().next().children().eq(1);
        if ($(aim).css('display') == 'block') {
           return 'disliked'; 
        } else {
            return 'free';
        }
    }

    const approve_dislike = function approve_dislike() {
        var aim = $(event_dislike.target).parent().prev().children().eq(0);
        console.log(aim);
        if ($(aim).css('display') == 'block') {
           return 'liked'; 
        } else {
            return 'free';
        }
    }

    const animate_hearts = function animate_hearts() {
        var target = $(event_heart.target);
        var target_2 = '';
        var aim_dislike_bold = $(target).parent().next().children().eq(1);
        var aim_dislike = $(target).parent().next().children().eq(0);

        if ($(target).attr('id') == 'heart_bold') {
            target_2 = target.next();
        } else {
            target_2 = target.prev();
        }
        target_2 = $(target_2);

        $(target).css('display', 'block');
        $(target).css('transform', 'scale(0.8)');
        setTimeout(function() {
            $(target).css('transform', 'scale(1)');
        }, 300);
        setTimeout(function() {
            $(target).css('display', 'none');            
        }, 500);
        setTimeout(function() {
            target_2.css('display', 'block');
        }, 500);


        if (approve_like() == 'disliked') {
            $(aim_dislike_bold).css('display', 'none');
            $(aim_dislike).css('display', 'block');
            plus_minus_dislikes('minus');
        }
    }

    const animate_dislike = function animate_dislie() {
        var target = event_dislike.target;
        var target = $(event_dislike.target);
        var target_2 = '';
        if ($(target).attr('id') == 'dislike') {
            target_2 = target.next();
        } else {
            target_2 = target.prev();
        }
        target_2 = $(target_2);


        $(target).css('display', 'block');
        $(target).css('transform', 'scale(0.8)');
        setTimeout(function() {
            $(target).css('transform', 'scale(1)');
        }, 300);
        setTimeout(function() {
            $(target).css('display', 'none');            
        }, 500);
        setTimeout(function() {
            $(target_2).css('display', 'block');
        }, 500);

        var aim = $(event_dislike.target).parent().prev().children().eq(0);
        var aim_2 = $(event_dislike.target).parent().prev().children().eq(1);

        if (approve_dislike() == 'liked') {
            $(aim).css('display', 'none');
            $(aim_2).css('display', 'block');
            plus_minus_likes('minus');
        }
    }


    var heart = $('#heart');
    var dislike = $('#dislike');
    var d_bold = $('#dislike_bold');


    const plus_minus_likes = function plus_minus_likes(plus_minus) {
        var aim = $(event_heart.target).parent().children().eq(2);
        var likes_amount = $(aim).text();

        if (plus_minus == 'plus') {
            likes_amount ++;
        } else {
            likes_amount --;
        }
        $(aim).text(likes_amount);
    }

    const plus_minus_dislikes = function plus_minus_dislikes(plus_minus) {
        var aim = $(event_dislike.target).parent().children().eq(2);
        var dislikes_amount = $(aim).text();

        if (plus_minus == 'plus') {
            dislikes_amount ++;
        } else {
            dislikes_amount --;
        }
        $(aim).text(dislikes_amount);
    }

    const like = function like() {
        var h_bold = $(event_heart.target);
        animate_hearts();
        if ($(h_bold).attr('id') == 'heart') {
            plus_minus_likes('plus');
        } else {
            plus_minus_likes('minus');
        }
    }

    const dislike_ = function dislike() {
        animate_dislike();
        var aim = $(event_dislike.target);
        if ($(aim).attr('id') == 'dislike') {
            plus_minus_dislikes('plus');   
        } else {
            plus_minus_dislikes('minus');               
        }
    }

    $('.hearts').click(function(event) {
        event_heart = event;
        like();
    });

    $('.dislikes').click(function(event) {
        event_dislike = event;
        dislike_();
    })



function setMobileNav() {
    $('.mobile_nav').css('position', 'fixed');
    $('.upper_nav_mob').css('display', 'none');

    if(window.scrollY == 0) {
        $('.upper_nav_mob').css('display', 'block');
    }
}


$(window).scroll(function() {

    setMobileNav();

    $('.navbar_left').css('top', '65px');
    $('.navbar_left').css('left', '0px');
    if (window.scrollY == 0) {
        console.log('hi');
        $('.navbar_left').attr('style', 'top: 65px;');
    }
});


$('.start_image').dblclick(function(event) {
    event.target.requestFullscreen();
})
var toggler = 1
$('#s_mob').click(function() {
    if(toggler % 2 == 0) {
        $('.site_name').show(800);
        $('#search_mob').hide();
    } else {
        $('.site_name').hide();
        $('#search_mob').show(800);
    }
    toggler ++;
})

