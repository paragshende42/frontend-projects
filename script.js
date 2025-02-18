gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
        };
    }

    // follwoing line is not required to work pinning on touch screen

    /* pinType: document.querySelector(".smooth-scroll").style.transform
      ? "transform"
      : "fixed"*/
});



ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();





var rightElems = document.querySelectorAll(".right-elem")

rightElems.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {




        gsap.to(elem.childNodes[3], {
            opacity: 1,
            scale: 1
        })
    })
    elem.addEventListener("mouseleave", function () {
        gsap.to(elem.childNodes[3], {
            opacity: 0,
            scale: 0
        })
    })
    elem.addEventListener("mousemove", function (dets) {

        gsap.to(elem.childNodes[3], {
            x: dets.x - elem.getBoundingClientRect().x - 37,
            y: dets.y - elem.getBoundingClientRect().y - 120
        })
    })
})


var page3centre = document.querySelector("#page3-centre")
var video = document.querySelector("video")

page3centre.addEventListener("click", function () {
    video.play()

    gsap.to(video, {
        opacity: 1,
        transform: "scalex(1) scaley(1)",
        borderRadius: "0px",

    })

})

video.addEventListener("click", function () {
    video.pause()

    gsap.to(video, {
        opacity: 0,
        transform: "scalex(0) scaley(0)",
        borderRadius: "50%",
    })
})
var sections = document.querySelectorAll("#sec-right")

sections.forEach(function (elem) {

    elem.addEventListener("mouseenter", function () {
        elem.childNodes[3].style.opacity = 1
        elem.childNodes[3].play()
    })

    elem.addEventListener("mouseleave", function () {
        elem.childNodes[3].style.opacity = 0
        elem.childNodes[3].load()
    })

})




gsap.from("#btm6-part2 h4", {
    x: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: "#btm6-part2",
        scrub: true,
        start: "top 80%",
        end: "top 10%"
    }
})