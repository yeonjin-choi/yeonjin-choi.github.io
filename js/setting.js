let container;
let stage;

window.addEventListener('DOMContentLoaded', function () {


    gsap.registerPlugin(ScrollTrigger);

    Scrollbar.use(OverscrollPlugin);

    const overscrollOptions = {
        enable: true,
        effect: navigator.userAgent.match(/Android/) ? 'glow' : 'glow',
        damping: 0.11,
        maxOverscroll: navigator.userAgent.match(/Android/) ? 150 : 100,
        glowColor: 'transparent',
    };


    const options = {
        damping: 0.1,
        continuousScrolling: true,
        alwaysShowTracks: false,
        renderByPixels: !('ontouchstart' in document),
        plugins: {
            overscroll: { ...overscrollOptions },
        },
    };


    stage = document.querySelector('#container');


    container = Scrollbar.init(stage, {
        ...options,
        delegateTo: stage,
    });


    ScrollTrigger.scrollerProxy("#container", {

        scrollTop(value) {

            if (arguments.length) {
                container.scrollTop = value;
            }

            return container.scrollTop;

        }
    });


    container.addListener(ScrollTrigger.update);
    ScrollTrigger.defaults({ scroller: stage });

    container.setPosition(0, 0);
    container.track.xAxis.element.remove();
    // Scrollbar.detachStyle();





    $('.top_button').click(function () {

        container.scrollTo(0, 0, 600, {
            callback: () => console.log('done!'),
            easing: easing.easeInOutCirc,
        });


    });


    (function () {


        let v = 0;

        gsap.to(".scroll-content", {
            scrollTrigger: {
                trigger: ".scroll-content",
                start: "top top",
                end: 'bottom bottom',
                scrub: true,
                onUpdate: self => {
                    // console.log("progress:", self.progress)
                    // v = Math.floor(self.progress * 5);
                    // console.log(v)

                }
            }
        });

/*


        gsap.to('.fix_section', {
            rotation: 360,
            // x: -innerWidth*3,
            scrollTrigger: {
                trigger: "#section02",
                start: "top top",
                // end: () => "+=" + 300,
                end: 'bottom bottom',
                pin: true,
                // pinSpace:false,
                pinSpacing: false,
                scrub: true,
                markers: true
            }
        });


        let sc02 = gsap.timeline();
        ScrollTrigger.create({
            animation: sc02,
            trigger: "#section02",
            start: "top top",
            end: "bottom bottom",
            pin:true,
            pinSpacing: false,
            scrub: 1,
        });

        sc02.to(".box",{x:100},0);
        sc02.to(".box2",{y:100},1);


*/


    })();


    // Only necessary to correct marker position - not needed in production
    if (document.querySelector('.gsap-marker-scroller-start')) {
        const markers = gsap.utils.toArray('[class *= "gsap-marker"]');

        container.addListener(({ offset }) => {
            gsap.set(markers, { marginTop: -offset.y })
            $('.posNum').html(offset.y);
        });
    }



})


