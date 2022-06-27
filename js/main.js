window.addEventListener('DOMContentLoaded', function () {



    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)





    });

    $(document).ready(function(){

        $("#menu").click(function(){

            var offset = $('#menu').offset(); //선택한 태그의 위치를 반환

            //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함

            $('html').animate({scrollTop : offset.top},2000);

        });

    });




    // $(function () {
    //
    //
    //     const scrollValue = [2060,5798,14454,21991];
    //
    //     $('.menu > div').click(function(){
    //
    //         let idx = $('.left_nav > div').index(this);
    //
    //
    //         myHorizontalScrollbar.scrollTo(scrollValue[idx], 0, 600, {
    //             callback: () => console.log('done!'),
    //             easing: easing.easeInOutCirc,
    //         });
    //
    //
    //     });

    /*  slide,click event section */

    $("#sc01_slider").slick({
        dots: true, //navigation
        arrows: true, //arrow
        prevArrow: $('#section01 .arrow > div:nth-child(1)'), //prev
        nextArrow: $('#section01 .arrow > div:nth-child(2)'), //next
        autoplay: true, // autoplay mode
        autoplaySpeed: 3000, // auto speed
        pauseOnHover: false, // pause on mouse hover
        fade: true, //fade mode only one slider
        speed: 900, // speed
        infinite: true, // infinite mode
        // asNavFor: '.slider2', // another slider
        centerMode: false, // center move
        centerPadding: '0%', // center move padding
        slidesToShow: 1, // show slider number
        slidesToScroll: 1, // next slider number
        swipe: true, // swiper
        focusOnSelect: true, // click to slider
        draggable: true,
        vertical: false, // vertical slider
        verticalSwiping: false, // vertical swiper
        initialSlide: 0,// slider number
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition∑
        variableWidth: false,

    }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {


    }).on('afterChange', function (event, slick, currentSlide, nextSlide) {




    });

    $("#section04 .slider_img").slick({
        dots: $('#section04 .circle'), //navigation
        arrows: true, //arrow
        prevArrow: $('#section04 .btn_prev'), //prev
        nextArrow: $('#section04 .btn_next'), //next
        autoplay: true, // autoplay mode
        autoplaySpeed: 2000, // auto speed
        pauseOnHover:false, // pause on mouse hover
        fade: false, //fade mode only one slider
        speed: 900, // speed
        infinite: true, // infinite mode
        // asNavFor: '.slider2', // another slider
        centerMode: true, // center move
        centerPadding: '0%', // center move padding
        slidesToShow: 3, // show slider number
        slidesToScroll: 1, // next slider number
        swipe: true, // swiper
        focusOnSelect: true, // click to slider
        draggable:true,
        vertical: false, // vertical slider
        verticalSwiping: false, // vertical swiper
        initialSlide:0,// slider number
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition∑
        variableWidth: false,
    });

    $("#section06 .sc06_slider").slick({
        dots: false, //navigation
        arrows: true, //arrow
        prevArrow: $('#section06 .btn_prev'), //prev
        nextArrow: $('#section06 .btn_next'), //next
        autoplay: true, // autoplay mode
        autoplaySpeed: 2000, // auto speed
        pauseOnHover: false, // pause on mouse hover
        fade: false, //fade mode only one slider
        speed: 900, // speed
        infinite: true, // infinite mode
        asNavFor: false, // another slider
        centerMode: true, // center move
        centerPadding: '0%', // center move padding
        slidesToShow: 2, // show slider number
        slidesToScroll: 1, // next slider number
        swipe: true, // swiper
        focusOnSelect: true, // click to slider
        draggable:true,
        vertical: false, // vertical slider
        verticalSwiping: false, // vertical swiper
        initialSlide:0,// slider number
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition∑
        variableWidth: false,


    }).on('beforeChange', function(event, slick, currentSlide, nextSlide){


    }).on('afterChange', function(event, slick, currentSlide, nextSlide){


        // console.log(currentSlide);

        $('#section06 .num > div > img').attr('src',`img/main06/number-0${currentSlide + 1}.png`);


    });


    gsap.to('#section02 .img > div:nth-child(1) img', {
        scale: 1.2,
        // x:
        // y:
        scrollTrigger: {
            trigger: "#section02",
            start: "left -210",
            // end: () => "+=" + 300,
            end: 'right right',
            horizontal: true,
            // pinSpace:false,
            scrub: true
        }
    });
    gsap.to('#section02 .img > div:nth-child(2) img', {
        scale: 1.2,
        // x:
        // y:
        scrollTrigger: {
            trigger: "#section02",
            start: "left -210",
            // end: () => "+=" + 300,
            end: 'right right',
            horizontal: true,
            // pinSpace:false,
            scrub: true
        }
    });
    gsap.to('#section02 .img > div:nth-child(3) img', {
        scale: 1.2,
        // x:
        // y:
        scrollTrigger: {
            trigger: "#section02",
            start: "left -210",
            // end: () => "+=" + 300,
            end: 'right right',
            horizontal: true,
            // pinSpace:false,
            scrub: true
        }
    });
    gsap.to('#section02 .img > div:nth-child(4) img', {
        scale: 1.2,
        // x:
        // y:
        scrollTrigger: {
            trigger: "#section02",
            start: "left -210",
            // end: () => "+=" + 300,
            end: 'right right',
            horizontal: true,
            // pinSpace:false,
            scrub: true
        }
    });

 
















})


