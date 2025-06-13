// Initialize Locomotive Scroll and GSAP ScrollTrigger
function show() {
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}

show();

// Existing Bottle Animations (Unchanged)
gsap.to("#bottle", {
    rotate: -15,
    scrollTrigger: {
        trigger: "#bottle",
        scroller: "#main",
        start: "top 5%",
        end: "top -416%",
        scrub: true,
        pin: true
    }
});

gsap.to("#bottle", {
    scale: 0.5,
    scrollTrigger: {
        trigger: "#page5 h1",
        scroller: "#main",
        start: "top 430%",
        end: "top -430%",
        scrub: true,
        pin: true
    }
});

// Existing Timeline (Modified to Remove Commented-Out Elements)
let t1 = gsap.timeline();
t1.from("#bottle", {
    opacity: 0,
    duration: 1,
    scale: 0.2
});
// Removed #page1_dog_image and #nav_top>button animations since they are commented out in HTML

// Existing Button Animations (Corrected Typos and Selectors)
gsap.from("#page2_part1 button", {
    scrollTrigger: {
        trigger: "#page2_part1 button",
        scroller: "#main",
        start: "top 70%"
    },
    xPercent: -300, // Corrected: xPrecent -> xPercent
    duration: 1
});

gsap.from("#page6_part2 button", { // Corrected selector: #page6_part6 -> #page6_part2
    scrollTrigger: {
        trigger: "#page6_part2 button",
        scroller: "#main",
        start: "top 70%"
    },
    xPercent: 600, // Corrected: xPrecent -> xPercent
    duration: 1
});

// New Animations for Other Sections
// Page 1: Core Collection Heading Fade and Slide
gsap.from("#page1 h1", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        start: "top 80%",
        end: "top 50%",
        scrub: false
    }
});

// Page 2: Cosmic IPA Content Animation (Excluding Button)
gsap.from("#page2_part1 h3, #page2_part1 h1, #page2_part1 p", {
    opacity: 0,
    y: 30,
    stagger: 0.2,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#page2_part1",
        scroller: "#main",
        start: "top 80%",
        end: "top 50%",
        scrub: false
    }
});

gsap.from("#page2_part2 h3, #page2_part2 h5, #page2_part2 #box", {
    opacity: 0,
    x: 50,
    stagger: 0.3,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#page2_part2",
        scroller: "#main",
        start: "top 80%",
        end: "top 50%",
        scrub: false
    }
});

// Page 3: Taste Profile Animation
gsap.from("#page3 h1, #page3_text_part1, #page3_text_part2", {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
        trigger: "#page3",
        scroller: "#main",
        start: "top 80%",
        end: "top 50%",
        scrub: false
    }
});

// Page 4: Taste Profile Colors (Staggered Slide-in)
gsap.from("#page4_color1, #page4_color2, #page4_color3", {
    opacity: 0,
    x: -100,
    stagger: 0.3,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#page4",
        scroller: "#main",
        start: "top 80%",
        end: "top 50%",
        scrub: false
    }
});

gsap.from("#page4_color_image4", {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    ease: "elastic.out(1, 0.5)",
    scrollTrigger: {
        trigger: "#page4",
        scroller: "#main",
        start: "top 60%",
        end: "top 30%",
        scrub: false
    }
});

// Page 5: Availability Bottles (Staggered Fade-in)
gsap.from(".page5_extraimage, #page5_bottel", {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#page5",
        scroller: "#main",
        start: "top 80%",
        end: "top 50%",
        scrub: false
    }
});

// Page 6: Food & Brew Animation (Excluding Button)
gsap.from("#page6_part2 h5, #page6_part2 h1, #page6_part2 p", {
    opacity: 0,
    y: 30,
    stagger: 0.2,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#page6_part2",
        scroller: "#main",
        start: "top 80%",
        end: "top 50%",
        scrub: false
    }
});

gsap.from("#page6_part1 img", {
    opacity: 0,
    scale: 1.2,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
        trigger: "#page6_part1",
        scroller: "#main",
        start: "top 80%",
        end: "top 50%",
        scrub: false
    }
});

// Navigation Menu Icon Animation
gsap.from("#nav_top i", {
    opacity: 0,
    x: 50,
    duration: 1,
    ease: "power2.out",
    delay: 0.5
}); 