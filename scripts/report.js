const {
  gsap: { timeline, set },
  gsap,
  ScrollTrigger,
} = window;

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

ScrollTrigger.defaults({
  toggleActions: "restart none reverse none",
});

// Slide link 9

gsap.from(
  ".slide--500__img_link",
  {
    scrollTrigger: {
      trigger: ".sLink0",
      start: "30% 100%",
      end: "40% 40%",
      scrub: true,
      toggleActions: "play none reverse none",

      onLeave: () => {
        setTimeout(() => {
          console.log("onLeaveLink");
          window.scrollTo(0, 1);
          window.location.href = "./project.html";
        }, 500);
      },
    },
    width: "0vw",
    ease: "ease",
  },
  2
);

gsap.from(
  "#sound_button_sm1",
  {
    ease: "power4",
    scrollTrigger: {
      trigger: ".s2",
      scrub: true,
      start: "top center",
      end: "top top",
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    height: "0px",
  },
  0
);

gsap.fromTo(
  "#sound_button_sm1",
  {
    ease: "power4",
    scrollTrigger: {
      trigger: ".s2",
      scrub: true,
      start: "top center",
      end: "top top",
      toggleActions: "play none reverse none",
    },
    x: "100vw",
  },
  {
    ease: "power4",
    scrollTrigger: {
      trigger: ".s2",
      scrub: true,
      start: "top center",
      end: "top top",
      toggleActions: "play none reverse none",
    },
    x: "0vw",
  },
  0
);

gsap.fromTo(
  "#sound_button_sm1",
  {
    ease: "power4",
    scrollTrigger: {
      trigger: ".s9",
      scrub: true,
      start: "center center",
      end: "center top",
      toggleActions: "play none reverse none",
    },
    x: "0vw",
    display: "block",
  },
  {
    ease: "power4",
    scrollTrigger: {
      trigger: ".s9",
      scrub: true,
      start: "center center",
      end: "center top",
      toggleActions: "play none reverse none",
    },
    x: "100vw",
    opacity: 0,
    display: "none",
  },
  0
);

gsap.fromTo(
  ".colScroll",
  {
    ease: "none",
    scrollTrigger: {
      trigger: ".s1",
      scrub: true,
      start: "top center",
      end: "center top",
      onEnter: () => {
        console.log("onEnter");
        playSarasa();
      },
      onEnterBack: () => {
        console.log("onEnterBack");
        playSarasa();
      },
    },
  },
  {
    ease: "none",
    scrollTrigger: {
      trigger: ".s9",
      scrub: true,
      start: "top center",
      end: "center top",

      onLeave: () => {
        console.log("onLeave");
        var fadeOut = setInterval(function () {
          if (SOUNDS.SARASATE.volume > 0.1) {
            SOUNDS.SARASATE.volume -= 0.1;
          } else {
            clearInterval(fadeOut);
            SOUNDS.SARASATE.pause();
          }
        }, 100);
      },
      onEnterBack: () => {
        console.log("onEnterBack");
        playSarasa();
      },
    },
  },
  0
);

// Intro slide
gsap.to(
  ".slide--0 .intro__content",
  {
    scrollTrigger: {
      trigger: ".s1",
      start: "top top",
      end: "bottom center",
      scrub: true,
    },
    x: "100vw",
    opacity: 0,
    ease: "expo.inOut",
    toggleActions: "play none reverse none",
  },
  2
);

gsap.to(
  ".slide--0 .intro__img_bl",
  {
    scrollTrigger: {
      trigger: ".s1",
      start: "top top",
      end: "bottom center",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    x: "-100vw",
    opacity: 0,
    ease: "expo.inOut",
  },
  2
);

gsap.fromTo(
  ".header",
  {
    scrollTrigger: {
      trigger: ".s1",
      start: "bottom bottom",
      end: "bottom center",
      scrub: true,
    },
    y: "0vh",
    opacity: 1,
    ease: "expo.inOut",
  },
  {
    scrollTrigger: {
      trigger: ".s1",
      start: "bottom bottom",
      end: "bottom center",
      scrub: true,
    },
    y: "-100vh",
    opacity: 0,
    ease: "expo.inOut",
  },
  2
);

gsap.to(
  ".slide--0",
  {
    scrollTrigger: {
      trigger: ".s1",
      scrub: true,
      start: "bottom center",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    display: "none",
    ease: "expo.inOut",
  },
  2
);

// slide 1

gsap.from(
  ".slide--1 .imgl",
  {
    scrollTrigger: {
      trigger: ".s2",
      start: "top 50%",
      end: "50% 60%",
      scrub: true,
    },
    x: "-100vw",
    y: "100vh",
    ease: "expo.inOut",
  },
  2
);

gsap.from(
  ".slide--1 .imgr",
  {
    scrollTrigger: {
      trigger: ".s2",
      start: "top 50%",
      end: "50% 60%",
      scrub: true,
    },
    x: "100vw",
    ease: "expo.inOut",
  },
  2
);

gsap.to(
  ".slide--1 .slide__bg__img",
  {
    scrollTrigger: {
      trigger: ".s2",
      scrub: true,
      start: "40% 60%",
      end: "60% 50%",
      toggleActions: "play none reverse none",
    },
    opacity: 1,
    filter: "blur(0px)",
    ease: "expo.inOut",
  },
  2
);

gsap.to(
  ".slide--1 .bordered",
  {
    scrollTrigger: {
      trigger: ".s2",
      scrub: true,
      start: "40% 60%",
      end: "60% 40%",
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    ease: "expo.inOut",
  },
  2
);

gsap.to(
  ".slide--1",
  {
    scrollTrigger: {
      trigger: ".s2",
      scrub: true,
      start: "80% 70%",
      end: "bottom 20%",
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    ease: "expo.out",
  },
  2
);

gsap.to(
  ".slide--1",
  {
    scrollTrigger: {
      trigger: ".s2",
      scrub: true,
      start: "bottom center",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    display: "none",
    ease: "expo.inOut",
  },
  2
);

// Slide 2

gsap.from(
  ".slide--2 .imgl",
  {
    scrollTrigger: {
      trigger: ".s3",
      start: "top 50%",
      end: "50% 60%",
      scrub: true,
    },
    x: "-100vw",
    y: "-100vh",
    ease: "expo.inOut",
  },
  2
);

gsap.from(
  ".slide--2 .imgr",
  {
    scrollTrigger: {
      trigger: ".s3",
      start: "top 50%",
      end: "50% 60%",
      scrub: true,
    },
    x: "100vw",
    ease: "expo.inOut",
  },
  2
);

gsap.to(
  ".slide--2 .slide__bg__img",
  {
    scrollTrigger: {
      trigger: ".s3",
      scrub: true,
      start: "40% 60%",
      end: "60% 50%",
      toggleActions: "play none reverse none",
    },
    opacity: 1,
    filter: "blur(0px)",
    ease: "expo.inOut",
  },
  2
);
gsap.to(
  ".slide--2 .bordered",
  {
    scrollTrigger: {
      trigger: ".s3",
      scrub: true,
      start: "40% 60%",
      end: "60% 40%",
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    ease: "expo.inOut",
  },
  2
);

gsap.to(
  ".slide--2",
  {
    scrollTrigger: {
      trigger: ".s3",
      scrub: true,
      start: "80% 70%",
      end: "bottom 20%",
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    ease: "expo.out",
  },
  2
);

gsap.to(
  ".slide--2",
  {
    scrollTrigger: {
      trigger: ".s3",
      scrub: true,
      start: "bottom center",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    display: "none",
    ease: "expo.inOut",
  },
  2
);

// Slide 3

gsap.from(
  ".slide--3 .imgl",
  {
    scrollTrigger: {
      trigger: ".s4",
      start: "top 50%",
      end: "50% 60%",
      scrub: true,
    },
    x: "-100vw",
    y: "-100vh",
    ease: "expo.inOut",
  },
  2
);

gsap.from(
  ".slide--3 .imgr",
  {
    scrollTrigger: {
      trigger: ".s4",
      start: "top 50%",
      end: "50% 60%",
      scrub: true,
    },
    x: "100vw",
    ease: "expo.inOut",
  },
  2
);
gsap.to(
  ".slide--3 .slide__bg__img",
  {
    scrollTrigger: {
      trigger: ".s4",
      scrub: true,
      start: "40% 60%",
      end: "60% 50%",
      toggleActions: "play none reverse none",
    },
    opacity: 1,
    filter: "blur(0px)",
    ease: "expo.inOut",
  },
  2
);
gsap.to(
  ".slide--3 .bordered",
  {
    scrollTrigger: {
      trigger: ".s4",
      scrub: true,
      start: "40% 60%",
      end: "60% 40%",
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    ease: "expo.inOut",
  },
  2
);

gsap.to(
  ".slide--3",
  {
    scrollTrigger: {
      trigger: ".s4",
      scrub: true,
      start: "80% 70%",
      end: "bottom 20%",
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    ease: "expo.out",
  },
  2
);

gsap.to(
  ".slide--3",
  {
    scrollTrigger: {
      trigger: ".s4",
      scrub: true,
      start: "bottom center",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    display: "none",
    ease: "expo.inOut",
  },
  2
);

// Slide 4

gsap.from(
  ".slide--4 .imgr",
  {
    scrollTrigger: {
      trigger: ".s5",
      start: "top 50%",
      end: "50% 60%",
      scrub: true,
    },
    x: "100vw",
    ease: "expo.inOut",
  },
  2
);

gsap.from(
  ".slide--4 .imgl",
  {
    scrollTrigger: {
      trigger: ".s5",
      start: "top 50%",
      end: "50% 60%",
      scrub: true,
    },
    x: "-100vw",
    y: "-100vh",
    ease: "expo.inOut",
  },
  2
);

gsap.to(
  ".slide--4 .slide__bg__img",
  {
    scrollTrigger: {
      trigger: ".s5",
      scrub: true,
      start: "40% 60%",
      end: "60% 50%",
      toggleActions: "play none reverse none",
    },
    opacity: 1,
    filter: "blur(0px)",
    ease: "expo.inOut",
  },
  2
);

gsap.to(
  ".slide--4 .bordered",
  {
    scrollTrigger: {
      trigger: ".s5",
      scrub: true,
      start: "40% 60%",
      end: "60% 40%",
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    ease: "expo.inOut",
  },
  2
);

gsap.to(
  ".slide--4",
  {
    scrollTrigger: {
      trigger: ".s5",
      scrub: true,
      start: "80% 70%",
      end: "bottom 20%",
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    ease: "expo.out",
  },
  2
);

gsap.to(
  ".slide--4",
  {
    scrollTrigger: {
      trigger: ".s5",
      scrub: true,
      start: "bottom center",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    display: "none",
    ease: "expo.inOut",
  },
  2
);

// Slide 5

gsap.from(
  ".slide--5 .imgr",
  {
    scrollTrigger: {
      trigger: ".s6",
      start: "top 50%",
      end: "50% 60%",
      scrub: true,
    },
    x: "100vw",
    ease: "expo.inOut",
  },
  2
);

gsap.from(
  ".slide--5 .imgl",
  {
    scrollTrigger: {
      trigger: ".s6",
      start: "top 50%",
      end: "50% 60%",
      scrub: true,
    },
    x: "-100vw",
    y: "-100vh",
    ease: "expo.inOut",
  },
  2
);
gsap.to(
  ".slide--5 .slide__bg__img",
  {
    scrollTrigger: {
      trigger: ".s6",
      scrub: true,
      start: "40% 60%",
      end: "60% 50%",
      toggleActions: "play none reverse none",
    },
    opacity: 1,
    filter: "blur(0px)",
    ease: "expo.inOut",
  },
  2
);

gsap.to(
  ".slide--5 .bordered",
  {
    scrollTrigger: {
      trigger: ".s6",
      scrub: true,
      start: "40% 60%",
      end: "60% 40%",
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    ease: "expo.inOut",
  },
  2
);

gsap.to(
  ".slide--5",
  {
    scrollTrigger: {
      trigger: ".s6",
      scrub: true,
      start: "80% 70%",
      end: "bottom 20%",
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    y: "100vh",
    ease: "expo.out",
  },
  2
);

gsap.to(
  ".slide--5",
  {
    scrollTrigger: {
      trigger: ".s6",
      scrub: true,
      start: "bottom center",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    display: "none",
    ease: "expo.inOut",
  },
  2
);

// Slide 6

gsap.from(
  ".slide--6 .imgr",
  {
    scrollTrigger: {
      trigger: ".s7",
      start: "top 50%",
      end: "50% 60%",
      scrub: true,
    },
    x: "100vw",
    ease: "expo.inOut",
  },
  2
);

gsap.from(
  ".slide--6 .imgl",
  {
    scrollTrigger: {
      trigger: ".s7",
      start: "top 50%",
      end: "50% 60%",
      scrub: true,
    },
    x: "-100vw",
    y: "-100vh",
    ease: "expo.inOut",
  },
  2
);

gsap.to(
  ".slide--6 .slide__bg__img",
  {
    scrollTrigger: {
      trigger: ".s7",
      scrub: true,
      start: "40% 60%",
      end: "60% 50%",
      toggleActions: "play none reverse none",
    },
    opacity: 1,
    filter: "blur(0px)",
    ease: "expo.inOut",
  },
  2
);

gsap.to(
  ".slide--6 .nobordered",
  {
    scrollTrigger: {
      trigger: ".s7",
      scrub: true,
      start: "40% 60%",
      end: "60% 40%",
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    ease: "expo.inOut",
  },
  2
);

gsap.to(
  ".slide--6",
  {
    scrollTrigger: {
      trigger: ".s7",
      scrub: true,
      start: "80% 70%",
      end: "bottom 20%",
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    ease: "expo.out",
  },
  2
);

gsap.to(
  ".slide--6",
  {
    scrollTrigger: {
      trigger: ".s7",
      scrub: true,
      start: "bottom center",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    display: "none",
    ease: "expo.inOut",
  },
  2
);

// Slide 7

gsap.from(
  ".slide--7 .imgr",
  {
    scrollTrigger: {
      trigger: ".s8",
      start: "top 50%",
      end: "50% 60%",
      scrub: true,
    },
    x: "100vw",
    ease: "expo.inOut",
  },
  2
);

gsap.from(
  ".slide--7 .imgl",
  {
    scrollTrigger: {
      trigger: ".s8",
      start: "top 50%",
      end: "50% 60%",
      scrub: true,
    },
    x: "-100vw",
    y: "-100vh",
    ease: "expo.inOut",
  },
  2
);

gsap.to(
  ".slide--7 .slide__bg__img",
  {
    scrollTrigger: {
      trigger: ".s8",
      scrub: true,
      start: "40% 60%",
      end: "60% 50%",
      toggleActions: "play none reverse none",
    },
    opacity: 1,
    filter: "blur(0px)",
    ease: "expo.inOut",
  },
  2
);

gsap.to(
  ".slide--7 .nobordered",
  {
    scrollTrigger: {
      trigger: ".s8",
      scrub: true,
      start: "40% 60%",
      end: "60% 40%",
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    ease: "expo.inOut",
  },
  2
);

gsap.to(
  ".slide--7",
  {
    scrollTrigger: {
      trigger: ".s8",
      scrub: true,
      start: "80% 70%",
      end: "bottom 20%",
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    ease: "expo.out",
  },
  2
);

gsap.to(
  ".slide--7",
  {
    scrollTrigger: {
      trigger: ".s8",
      scrub: true,
      start: "bottom center",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    display: "none",
    ease: "expo.inOut",
  },
  2
);

// Slide 8

gsap.from(
  ".slide--8 .imgr",
  {
    scrollTrigger: {
      trigger: ".s9",
      start: "top 50%",
      end: "50% 60%",
      scrub: true,
    },
    x: "100vw",
    ease: "expo.inOut",
  },
  2
);

gsap.from(
  ".slide--8 .imgl",
  {
    scrollTrigger: {
      trigger: ".s9",
      start: "top 50%",
      end: "50% 60%",
      scrub: true,
    },
    x: "-100vw",
    y: "-100vh",
    ease: "expo.inOut",
  },
  2
);

gsap.to(
  ".slide--8 .slide__bg__img",
  {
    scrollTrigger: {
      trigger: ".s9",
      scrub: true,
      start: "40% 60%",
      end: "60% 50%",
      toggleActions: "play none reverse none",
    },
    opacity: 1,
    filter: "blur(0px)",
    ease: "expo.inOut",
  },
  2
);

gsap.to(
  ".slide--8 .bordered",
  {
    scrollTrigger: {
      trigger: ".s9",
      scrub: true,
      start: "40% 60%",
      end: "60% 40%",
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    ease: "expo.inOut",
  },
  2
);

gsap.to(
  ".slide--8",
  {
    scrollTrigger: {
      trigger: ".s9",
      scrub: true,
      start: "80% 70%",
      end: "bottom 40%",
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    y: "-100vh",
    width: 0,
    ease: "expo.out",
  },
  2
);

gsap.to(
  ".slide--8",
  {
    scrollTrigger: {
      trigger: ".s9",
      scrub: true,
      start: "bottom center",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    display: "none",
    ease: "expo.inOut",
  },
  2
);

// reds
gsap.fromTo(
  " .redp",
  {
    scrollTrigger: {
      trigger: ".s1",
      start: "0% 100%",
      end: "0% 80%",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    ease: "expo.inOut",
  },
  {
    scrollTrigger: {
      trigger: ".s4",
      start: "0% 100%",
      end: "0% 80%",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    opacity: 1,
    ease: "expo.inOut",
  },
  2
);

gsap.to(
  " .redp",
  {
    scrollTrigger: {
      trigger: ".s4",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    transform: "rotate(90deg)",
    ease: "expo.inOut",
  },
  2
);

gsap.fromTo(
  " .redp",
  {
    scrollTrigger: {
      trigger: ".s5",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    transform: "scale(1)",
    ease: "expo.inOut",
  },
  {
    scrollTrigger: {
      trigger: ".s5",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    transform: "scale(1.5)",
    ease: "expo.inOut",
  },
  2
);

gsap.fromTo(
  " .redp",
  {
    scrollTrigger: {
      trigger: ".s4",
      start: "80% 70%",
      end: "100% 40%",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    opacity: 1,
    ease: "expo.inOut",
  },
  {
    scrollTrigger: {
      trigger: ".s4",
      start: "80% 70%",
      end: "100% 40%",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    ease: "expo.inOut",
  },
  2
);

gsap.fromTo(
  " .redp",
  {
    scrollTrigger: {
      trigger: ".s7",
      start: "top 100%",
      end: "top 50%",
      toggleActions: "play none reverse none",
      scrub: true,
    },
    opacity: 0,
    transform: "scale(1)",
    y: "0%",
    ease: "expo.inOut",
  },
  {
    scrollTrigger: {
      trigger: ".s7",
      start: "top bottom",
      end: "top center",
      toggleActions: "play none reverse none",
      scrub: true,
    },
    opacity: 1,
    transform: "scale(0.5)",
    y: "-50%",
    ease: "expo.inOut",
  },
  2
);

gsap.to(
  " .redp",
  {
    scrollTrigger: {
      trigger: ".s7",
      start: "top center",
      end: "top top",
      toggleActions: "play none reverse none",
      scrub: true,
    },
    y: "50%",
    ease: "expo.inOut",
  },
  2
);

gsap.to(
  " .redp",
  {
    scrollTrigger: {
      trigger: ".s8",
      start: "top bottom",
      end: "top center",
      toggleActions: "play none reverse none",
      scrub: true,
    },
    y: "0%",
    transform: "scale(1.2)",
    ease: "expo.inOut",
  },
  2
);

gsap.to(
  " .redp",
  {
    scrollTrigger: {
      trigger: ".s8",
      start: "top bottom",
      end: "top center",
      toggleActions: "play none reverse none",
      scrub: true,
    },
    x: "-50%",
    y: "30%",
    transform: "scale(0.8)",
    ease: "expo.inOut",
  },
  2
);

gsap.to(
  " .redp2",
  {
    scrollTrigger: {
      trigger: ".s8",
      start: "top bottom",
      end: "top center",
      toggleActions: "play none reverse none",
      scrub: true,
    },
    opacity: 1,
    transform: "scale(0.5)",
    y: "-10%",
    x: "50%",
    ease: "expo.inOut",
  },
  2
);

gsap.to(
  " .redp2",
  {
    scrollTrigger: {
      trigger: ".s8",
      start: "center center",
      end: "center top",
      toggleActions: "play none reverse none",
      scrub: true,
    },
    opacity: 1,
    transform: "scale(1)",
    opacity: 0,
    ease: "expo.inOut",
  },
  2
);

gsap.to(
  " .redp",
  {
    scrollTrigger: {
      trigger: ".s8",
      start: "center center",
      end: "center top",
      toggleActions: "play none reverse none",
      scrub: true,
    },
    opacity: 1,
    transform: "scale(1)",
    x: 0,
    y: 0,
    opacity: 0,
    ease: "expo.inOut",
  },
  2
);
