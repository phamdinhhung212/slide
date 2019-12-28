//  click chuyển ảnh 
$(document).ready(function() {
    var firstImg = $(".slide:first").index() + 1; // = 0
    var lastImg = $(".slide:last").index() + 1; // = 10
    var position_first_ulOne = $(".list-slide-show ul.list-slide.one li:first-child").index()+1;
    var position_first_ulTwo = $(".list-slide-show ul.list-slide.two li:first-child").index()+1;
    var position_first_ulThree = $(".list-slide-show ul.list-slide.three li:first-child").index()+1;
    var position_last_ulOne = $(".list-slide-show ul.list-slide.one li:last-child").index()+1;
    var position_last_ulTwo = $(".list-slide-show ul.list-slide.two li:last-child").index()+1;
    var position_last_ulThree = $(".list-slide-show ul.list-slide.three li:last-child").index()+1;
    var vt = 0;
    $(".btn-slide .btn-next").click(function() {
        if( vt == lastImg ) {
            vt = firstImg - 1;
        }
        vt ++ ;
        $(".slide").stop().fadeOut(500).removeClass('active');
        $(".slide").eq(vt).stop().fadeIn(1000).addClass('active');
        // --------------------------------
        // xử lí thêm active cho li next
        $(".list-slide-show ul.list-slide.one li").removeClass('active-li');
        $(".list-slide-show ul.list-slide.one li:nth-child("+( position_first_ulOne + 1 )+")").addClass('active-li');
        position_first_ulOne ++;
        if( position_first_ulOne > position_last_ulOne) {
            // 10 > 9
            $(".list-slide-show ul.list-slide.two li").removeClass('active-li');
            $(".list-slide-show ul.list-slide.two li:nth-child("+( position_first_ulTwo )+")").addClass('active-li');
            position_first_ulTwo ++ ;
            if( position_first_ulTwo > position_last_ulTwo) {
                console.log(position_first_ulTwo);
                console.log(position_last_ulTwo);
                // 10 > 9
                $(".list-slide-show ul.list-slide.three li").removeClass('active-li');
                $(".list-slide-show ul.list-slide.three li:nth-child("+ (position_first_ulThree - 1)+")").addClass('active-li');
                position_first_ulThree ++ ;
            }
        }
        // --------------------------------
    });
    $(".btn-slide .btn-prev").click(function() {
        if( vt == firstImg ) {
            vt = lastImg + 1;
        }
        vt -- ;
        $(".slide").stop().fadeOut(500).removeClass('active');
        $(".slide").eq(vt).stop().fadeIn(1000).addClass('active');
        // --------------------------------
        // xử lí active cho li prev

        // --------------------------------
    });
});
// ----------- end ------------







// auto chuyển chuyển ảnh liên tục
$(document).ready(function() {
    $(".auto-next").click(function() {
        setInterval(function() {
            $(".btn-slide .btn-next").click();
        },2000)
        $(this).stop().fadeOut(500);
    })
});
// --------------- end ------------------





// xử lí click chuyển danh sách ảnh
$(document).ready(function() {
    // btn - next 
    $(".btn-slide-show span.btn-next").click(function() {
        var slide_after = $(".active-ul").next();
        if( slide_after.length != 0) {
            $(".active-ul").addClass('lost-on-left').one('webkitAnimationEnd',function() {
                $(".lost-on-left").removeClass('lost-on-left').removeClass('active-ul');
            });
            slide_after.addClass('active-ul').addClass('go-to-left').one('webkitAnimationEnd',function() {
                $('.go-to-left').removeClass('go-to-left');
            });
        }
        else {
            $(".active-ul").addClass('lost-on-left').one('webkitAnimationEnd',function() {
                $(".lost-on-left").removeClass('lost-on-left').removeClass('active-ul');
            });
            $(".list-slide-show ul.list-slide:first").addClass('active-ul').addClass('go-to-left').one('webkitAnimationEnd',function() {
                $('.go-to-left').removeClass('go-to-left');
            });
        }
    });
    // btn - prev 
    $(".btn-slide-show span.btn-prev").click(function() {
        var slide_before = $(".active-ul").prev();
        if( slide_before.length != 0 ) {
            $(".active-ul").addClass('lost-on-right').one('webkitAnimationEnd',function() {
                $('.lost-on-right').removeClass('lost-on-right').removeClass('active-ul');
            });
            slide_before.addClass('active-ul').addClass('go-to-right').one('webkitAnimationEnd',function() {
                $(".go-to-right").removeClass('go-to-right');
            });
        }
        else {
            $(".active-ul").addClass('lost-on-right').one('webkitAnimationEnd',function() {
                $('.lost-on-right').removeClass('lost-on-right').removeClass('active-ul');
            });
            $(".list-slide-show ul.list-slide:last").addClass('active-ul').addClass('go-to-right').one('webkitAnimationEnd',function() {
                $('.go-to-right').removeClass('go-to-right');
            });
        }
    });
    $(".btn-slide-show span").click(function() {
        $(".btn-slide-show span").removeClass('background');
        $(this).addClass('background');
    });
});
// ------------ end ----------------