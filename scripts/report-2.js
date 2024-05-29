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

const SOUNDS = {
  DANCE: new Audio("https://microcosm.pro/content/files/sounds/dance.mp3"),
  SARASATE: new Audio(
    "https://microcosm.pro/content/files/sounds/sarasate.mp3"
  ),
};

SOUNDS.DANCE.muted = true;
SOUNDS.SARASATE.muted = true;

const toggleAudio = () => {
  SOUNDS.DANCE.muted = !SOUNDS.DANCE.muted;
  console.log(SOUNDS.DANCE.muted);
};
const toggleAudio1 = () => {
  SOUNDS.SARASATE.muted = !SOUNDS.SARASATE.muted;
  console.log(SOUNDS.SARASATE.muted);
};

const playSarasa = () => {
  if (!SOUNDS.SARASATE.muted) {
    SOUNDS.SARASATE.play();
    SOUNDS.SARASATE.volume = 0.99;
  }
};

const playDanse = () => {
  if (!SOUNDS.DANCE.muted) {
    SOUNDS.DANCE.play();
    SOUNDS.DANCE.volume = 0.99;
  }
};

const toggleWPlayAudio1 = () => {
  toggleAudio1();
  if (!SOUNDS.SARASATE.muted) {
    SOUNDS.SARASATE.play();
    SOUNDS.SARASATE.volume = 0.99;
  }
};

const toggleWPlayAudio = () => {
  toggleAudio();
  if (!SOUNDS.DANCE.muted) {
    SOUNDS.DANCE.play();
    SOUNDS.DANCE.volume = 0.99;
  }
};

let config = { strength: 0 };

gsap.to(".slide--312", {
  ease: "none",
  scrollTrigger: {
    trigger: ".s22",
    scrub: true,
    start: "top center",
    end: "center top",
    onEnter: () => {
      console.log("onEnter");
      playDanse();
    },
    onLeaveBack: () => {
      console.log("onLeaveBack");
      var fadeOut = setInterval(function () {
        if (SOUNDS.DANCE.volume > 0.1) {
          SOUNDS.DANCE.volume -= 0.1;
        } else {
          clearInterval(fadeOut);
          SOUNDS.DANCE.pause();
        }
      }, 100);
    },
    onLeave: () => {
      console.log("onLeave");
      var fadeOut = setInterval(function () {
        if (SOUNDS.DANCE.volume > 0.1) {
          SOUNDS.DANCE.volume -= 0.1;
        } else {
          clearInterval(fadeOut);
          SOUNDS.DANCE.pause();
        }
      }, 100);
    },
    onEnterBack: () => {
      console.log("onEnterBack");
      playDanse();
    },
  },
});

// intro 3

gsap.fromTo(
  ".header",
  {
    scrollTrigger: {
      trigger: ".s10",
      start: "top bottom",
      end: "top center",
      scrub: true,
    },
    y: "-100vh",
    opacity: 0,
    ease: "expo.inOut",
  },
  {
    scrollTrigger: {
      trigger: ".s10",
      start: "top bottom",
      end: "top center",
      scrub: true,
    },
    y: "0vh",
    opacity: 1,
    ease: "expo.inOut",
  },
  2
);

gsap.from(
  ".slide--30 .intro__content",
  {
    scrollTrigger: {
      trigger: ".s10",
      start: "top bottom",
      end: "top center",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    x: "100vw",
    opacity: 0,
    ease: "expo.inOut",
  },
  2
);

gsap.from(
  ".slide--30 .intro__img_bl2",
  {
    scrollTrigger: {
      trigger: ".s10",
      start: "top bottom",
      end: "top center",
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
      trigger: ".s10",
      start: "bottom bottom",
      toggleActions: "play none reverse none",
      end: "bottom center",
      toggleActions: "play none reverse none",
      scrub: true,
    },
    y: "0vh",
    opacity: 1,
    ease: "expo.inOut",
  },
  {
    scrollTrigger: {
      trigger: ".s10",
      start: "bottom bottom",
      toggleActions: "play none reverse none",
      end: "bottom center",
      toggleActions: "play none reverse none",
      scrub: true,
    },
    y: "-100vh",
    opacity: 0,
    ease: "expo.inOut",
  },
  2
);

gsap.fromTo(
  ".header",
  {
    scrollTrigger: {
      trigger: ".s50",
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
      trigger: ".s50",
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
  ".slide--30",
  {
    scrollTrigger: {
      trigger: ".s10",
      scrub: true,
      start: "bottom bottom",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    width: "0px",
    y: "-100vh",
    ease: "expo.inOut",
  },
  2
);

gsap.to(
  ".slide--30",
  {
    scrollTrigger: {
      trigger: ".s10",
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

// slide 3 1

gsap.fromTo(
  ".slide--31 .s3_text",
  {
    scrollTrigger: {
      trigger: ".s11",
      start: "top bottom",
      end: "top center",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    y: "100vh",
    opacity: 0,
    ease: "expo.inOut",
  },
  {
    scrollTrigger: {
      trigger: ".s11",
      start: "top bottom",
      end: "top center",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    y: "-20vh",
    opacity: 1,
    ease: "expo.inOut",
  },
  2
);

gsap.fromTo(
  ".slide--31 .s3_text",
  {
    scrollTrigger: {
      trigger: ".s11",
      start: "top bottom",
      end: "top center",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    y: "-20vh",
    transform: "scale(1)",
    ease: "expo.inOut",
  },
  {
    scrollTrigger: {
      trigger: ".s11",
      start: "center center+=200",
      end: "center center",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    transform: "scale(0.6)",
    y: "0vh",
    ease: "expo.inOut",
  },
  2
);

gsap.from(
  ".slide--31 .slide--31__img1",
  {
    scrollTrigger: {
      trigger: ".s11",
      start: "center center+=200",
      end: "center center",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    y: "-100vh",
    ease: "expo.inOut",
  },
  2
);

gsap.to(
  ".slide--31 .slide__content",
  {
    scrollTrigger: {
      trigger: ".s11",
      start: "bottom bottom",
      end: "bottom center",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    y: "-100vh",
    ease: "expo.inOut",
  },
  2
);

gsap.to(
  ".slide--31",
  {
    scrollTrigger: {
      trigger: ".s11",
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

// slide 3 2

gsap.fromTo(
  ".slide--32 .s3_text",
  {
    scrollTrigger: {
      trigger: ".s12",
      start: "center 100%",
      end: "center 70%",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    y: "200vw",
    ease: "expo.inOut",
  },
  {
    scrollTrigger: {
      trigger: ".s12",
      start: "center 100%",
      end: "center 70%",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    y: "-30vw",
    opacity: 1,
    ease: "expo.inOut",
  },
  2
);

gsap.fromTo(
  ".slide--32 .s3_text",
  {
    scrollTrigger: {
      trigger: ".s12",
      start: "top bottom",
      end: "top center",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    y: "-30vw",
    transform: "scale(1)",
    ease: "expo.inOut",
  },
  {
    scrollTrigger: {
      trigger: ".s12",
      start: "center center+=200",
      end: "center center",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    transform: "scale(0.6)",
    y: "0vw",
    ease: "expo.inOut",
  },
  2
);

gsap.from(
  ".slide--32 .slide--32__img1",
  {
    scrollTrigger: {
      trigger: ".s12",
      start: "center center+=200",
      end: "center center",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    y: -500,
    ease: "expo.inOut",
  },
  2
);

gsap.to(
  ".slide--32 .slide__content",
  {
    scrollTrigger: {
      trigger: ".s12",
      start: "center 50%",
      end: "center 20%",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    y: "-100vh",
    ease: "expo.inOut",
  },
  2
);

gsap.to(
  ".slide--32",
  {
    scrollTrigger: {
      trigger: ".s12",
      scrub: true,
      start: "top -20%",
      end: "top -20%",
      toggleActions: "play none reverse none",
    },
    display: "none",
    ease: "expo.inOut",
  },
  2
);

// slide 3 3

gsap.fromTo(
  ".slide--33 .lcol",
  {
    scrollTrigger: {
      trigger: ".s13",
      scrub: true,
      start: "top 80%",
      end: "top 70%",
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    ease: "expo.inOut",
  },
  {
    scrollTrigger: {
      trigger: ".s13",
      scrub: true,
      start: "top 80%",
      end: "top 70%",
      toggleActions: "play none reverse none",
    },
    opacity: 1,
    ease: "expo.inOut",
  },
  2
);

gsap.fromTo(
  ".slide--33 .slide--33__img2",
  {
    scrollTrigger: {
      trigger: ".s13",
      scrub: true,
      start: "top 70%",
      end: "top 40%",
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    ease: "expo.inOut",
  },
  {
    scrollTrigger: {
      trigger: ".s13",
      scrub: true,
      start: "top 70%",
      end: "top 40%",
      toggleActions: "play none reverse none",
    },
    opacity: 1,
    ease: "expo.inOut",
  },
  2
);

gsap.from(
  ".slide--33__content .rcol .s3_h3",
  {
    scrollTrigger: {
      trigger: ".s13",
      scrub: true,
      start: "top 70%",
      end: "top 40%",
      toggleActions: "play none reverse none",
    },
    x: "100vw",
    ease: "expo.inOut",
  },
  2
);

gsap.from(
  ".slide--33__content .rcol p",
  {
    scrollTrigger: {
      trigger: ".s13",
      scrub: true,
      start: "top 50%",
      end: "top 20%",
      toggleActions: "play none reverse none",
    },
    height: 0,
    opacity: 0,
    ease: "expo.inOut",
  },
  2
);

// gsap.to(
//   ".slide--33 .lcol",
//   {
//     scrollTrigger: {
//       trigger: ".s13",
//       start: "bottom center+=100",
//       end: "bottom center",
//       toggleActions: "play none reverse none",
//     },
//     y: "-100vh",
//     ease: "expo.inOut",
//     duration: 1,
//   },
//   2
// );
// gsap.to(
//   ".slide--33 .rcol",
//   {
//     scrollTrigger: {
//       trigger: ".s13",
//       start: "bottom 60%",
//       end: "bottom 40%",
//       toggleActions: "play none reverse none",
//     },
//     opacity: 0,
//     ease: "expo.inOut",
//   },
//   2
// );

// gsap.to(
//   ".slide--33",
//   {
//     scrollTrigger: {
//       trigger: ".s13",
//       start: "center 0%",
//       end: "center 0%",
//       toggleActions: "play none reverse none",
//     },
//     display: "none",
//     ease: "expo.inOut",
//   },
//   2
// );

gsap.to(
  ".slide--33 .slide__content",
  {
    scrollTrigger: {
      trigger: ".s13",
      start: "top 20%",
      end: "top 0%",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    y: "-100vh",
    ease: "expo.inOut",
  },
  2
);

gsap.to(
  ".slide--33",
  {
    scrollTrigger: {
      trigger: ".s13",
      scrub: true,
      start: "top 0%",
      end: "top 0%",
      toggleActions: "play none reverse none",
    },
    display: "none",
    ease: "expo.inOut",
  },
  2
);

// slide 3 4

gsap.from(
  ".slide--34",
  {
    scrollTrigger: {
      trigger: ".s14",
      start: "top 100%",
      end: "top 80%",
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    y: "100vh",
    ease: "expo.inOut",
  },
  2
);

gsap.to("#slide-34-img2", {
  scrollTrigger: {
    trigger: ".s14",
    start: "50% 70%", // Начало анимации
    end: "60% 30%", // Конец анимации
    scrub: true,
    toggleActions: "play none reverse none",
  },
  opacity: 0, // Конечное значение прозрачности
  ease: "expo.inOut", // Тип эйзинга
});

gsap.fromTo(
  ".slide--34",
  {
    scrollTrigger: {
      trigger: ".s14",
      start: "60% 20%",
      end: "60% 0%",
      scrub: true,

      toggleActions: "play none reverse none",
    },
    opacity: 1,
    y: "0vh",
    ease: "expo.inOut",
  },
  {
    scrollTrigger: {
      trigger: ".s14",
      start: "50% 20%",
      end: "50% 0%",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    y: "-100vh",
    ease: "expo.inOut",
  },
  2
);

gsap.to(
  ".slide--34",
  {
    scrollTrigger: {
      trigger: ".s14",
      scrub: true,
      start: "50% 0%",
      end: "50% 0%",
      toggleActions: "play none reverse none",
    },
    display: "none",
    ease: "expo.inOut",
  },
  2
);

// slide 3 5

gsap.fromTo(
  ".slide--35 .s3_text",
  {
    scrollTrigger: {
      trigger: ".s15",
      scrub: true,
      start: "center 100%",
      end: "center 70%",
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    y: "100vh",
    ease: "expo.inOut",
  },
  {
    scrollTrigger: {
      trigger: ".s15",
      scrub: true,
      start: "center 100%",
      end: "center 70%",
      toggleActions: "play none reverse none",
    },
    y: "-20vh",
    opacity: 1,
    ease: "expo.inOut",
  },
  2
);

gsap.fromTo(
  ".slide--35 .s3_text",
  {
    scrollTrigger: {
      trigger: ".s15",
      scrub: true,
      start: "center 100%",
      end: "center 70%",
      toggleActions: "play none reverse none",
    },
    y: "-20vh",
    transform: "scale(1)",
    ease: "expo.inOut",
  },
  {
    scrollTrigger: {
      trigger: ".s15",
      scrub: true,
      start: "center 80%",
      end: "center 50%",
      toggleActions: "play none reverse none",
    },
    y: "0vh",
    transform: "scale(0.6)",
    ease: "expo.inOut",
  },
  2
);

gsap.from(
  ".slide--35 .slide--35__img1",
  {
    scrollTrigger: {
      trigger: ".s15",
      scrub: true,
      start: "center 80%",
      end: "center 50%",
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    y: "-100vw",
    ease: "expo.inOut",
  },
  2
);

gsap.to(
  ".slide--35",
  {
    scrollTrigger: {
      trigger: ".s15",
      scrub: true,
      start: "bottom 100%",
      end: "bottom 50%",
      toggleActions: "play none reverse none",
    },
    y: "-100vw",
    width: "0px",
    opacity: 0,
    ease: "expo.inOut",
  },
  2
);

gsap.to(
  ".slide--35",
  {
    scrollTrigger: {
      trigger: ".s15",
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

// slide 3 6

gsap.fromTo(
  ".slide--36 .pair-txt",
  {
    scrollTrigger: {
      trigger: ".s16",
      start: "top 50%",
      end: "top 20%",
      toggleActions: "play none reverse none",
      scrub: true,
    },
    opacity: 0,
    y: "100vh",
    ease: "expo.inOut",
  },
  {
    scrollTrigger: {
      trigger: ".s16",
      start: "top 50%",
      end: "top 20%",
      toggleActions: "play none reverse none",
      scrub: true,
    },
    opacity: 1,
    y: "0vh",
    ease: "expo.inOut",
  },
  2
);

gsap.fromTo(
  ".slide--36 .pair-txt",
  {
    scrollTrigger: {
      trigger: ".s16",
      start: "top bottom",
      end: "top center",
      toggleActions: "play none reverse none",
      scrub: true,
    },
    transform: "scale(1)",
    ease: "expo.inOut",
  },
  {
    scrollTrigger: {
      trigger: ".s16",
      start: "center center+=200",
      end: "center center",
      toggleActions: "play none reverse none",
      scrub: true,
    },
    transform: "scale(0.8)",
    ease: "expo.inOut",
  },
  2
);

gsap.fromTo(
  ".slide--36 .slide--36__img1",
  {
    scrollTrigger: {
      trigger: ".s16",
      start: "center 80%",
      end: "center 50%",
      scrub: true,
    },
    opacity: 0,
    maxHeight: "0vh",
    ease: "expo.inOut",
  },
  {
    scrollTrigger: {
      trigger: ".s16",
      start: "center 80%",
      end: "center 50%",
      scrub: true,
    },
    opacity: 1,
    maxHeight: "90vh",
    ease: "expo.inOut",
  },
  2
);

gsap.fromTo(
  ".slide--36 .slide--36__img1",
  {
    scrollTrigger: {
      trigger: ".s16",
      start: "center 80%",
      end: "center 50%",
      scrub: true,
    },
    opacity: 0,
    x: "100vw",
    ease: "expo.inOut",
  },
  {
    scrollTrigger: {
      trigger: ".s16",
      start: "center 80%",
      end: "center 50%",
      scrub: true,
    },
    opacity: 1,
    x: "0vw",
    ease: "expo.inOut",
  },
  2
);

gsap.to(
  ".slide--36 .slide__content",
  {
    scrollTrigger: {
      trigger: ".s16",
      start: "bottom bottom",
      end: "bottom center",
      scrub: true,
    },
    opacity: 0,
    ease: "expo.inOut",
  },
  2
);

gsap.to(
  ".slide--36",
  {
    scrollTrigger: {
      trigger: ".s16",
      scrub: true,
      start: "bottom center+=200",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    y: "-100vh",
    ease: "expo.inOut",
  },
  2
);
gsap.to(
  ".slide--36",
  {
    scrollTrigger: {
      trigger: ".s16",
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

// slide 3 7

gsap.from(
  ".slide--37 .col-txt",
  {
    scrollTrigger: {
      trigger: ".s17",
      start: "center bottom",
      end: "center center",
      scrub: true,
    },
    opacity: 0,
    ease: "expo.inOut",
  },
  2
);

gsap.fromTo(
  ".slide--37 .imgl",
  {
    scrollTrigger: {
      trigger: ".s17",
      start: "center bottom",
      end: "center center",
      scrub: true,
    },
    opacity: 0,
    x: "-100vw",
    ease: "expo.inOut",
  },
  {
    scrollTrigger: {
      trigger: ".s17",
      start: "center bottom",
      end: "center center",
      scrub: true,
    },
    opacity: 1,
    x: "0vw",
    ease: "expo.inOut",
  },
  2
);

gsap.fromTo(
  ".slide--37 .imgr",
  {
    scrollTrigger: {
      trigger: ".s17",
      start: "center bottom",
      end: "center center",
      scrub: true,
    },
    opacity: 0,
    x: "100vw",
    ease: "expo.inOut",
  },
  {
    scrollTrigger: {
      trigger: ".s17",
      start: "center bottom",
      end: "center center",
      scrub: true,
    },
    opacity: 1,
    x: "0vw",
    ease: "expo.inOut",
  },
  2
);

gsap.to(
  ".txt-1",
  {
    scrollTrigger: {
      trigger: ".s17",
      start: "center center",
      end: "center center-=200",
      scrub: true,
    },
    opacity: 0,
    height: 0,
    // y: "-100vw",
    ease: "expo.inOut",
  },
  2
);

gsap.from(
  ".txt-2",
  {
    scrollTrigger: {
      trigger: ".s17",
      start: "center center",
      end: "center center-=200",
      scrub: true,
    },
    opacity: 0,
    height: 0,
    // y: "100vw",
    ease: "expo.inOut",
  },
  2
);

gsap.to(
  ".slide--37",
  {
    scrollTrigger: {
      trigger: ".s17",
      scrub: true,
      start: "bottom center+=200",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    y: "-100vh",
    ease: "expo.inOut",
  },
  2
);
gsap.to(
  ".slide--37",
  {
    scrollTrigger: {
      trigger: ".s17",
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

// slide 3 8

gsap.fromTo(
  ".slide--38 .s3_text",
  {
    scrollTrigger: {
      trigger: ".s18",
      start: "center bottom",
      end: "center center",
      scrub: true,
    },
    opacity: 0,
    y: "100vw",
    ease: "expo.inOut",
  },
  {
    scrollTrigger: {
      trigger: ".s18",
      start: "center bottom",
      end: "center center",
      scrub: true,
    },
    y: "0vh",
    opacity: 1,
    ease: "expo.inOut",
  },
  2
);

gsap.from(
  ".slide--38 .slide--38__img1",
  {
    scrollTrigger: {
      trigger: ".s18",
      start: "center center+=200",
      end: "center center",
      scrub: true,
    },
    opacity: 0,
    height: "0vh",
    y: "100vh",
    ease: "expo.inOut",
  },
  2
);

gsap.to(
  ".slide--38 .slide--38__img1",
  {
    scrollTrigger: {
      trigger: ".s18",
      start: "center center+=200",
      end: "center center",
      scrub: true,
    },
    y: "0vh",
    ease: "expo.inOut",
  },
  2
);

gsap.to(
  ".slide--38 .slide__content",
  {
    scrollTrigger: {
      trigger: ".s18",
      start: "bottom bottom",
      end: "bottom center",
      scrub: true,
    },
    y: "-100vh",
    ease: "expo.inOut",
  },
  2
);

gsap.to(
  ".slide--38",
  {
    scrollTrigger: {
      trigger: ".s18",
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

// slide 3 9

gsap.fromTo(
  ".slide--39 .pair-txt",
  {
    scrollTrigger: {
      trigger: ".s19",
      start: "center bottom",
      end: "center center",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    y: "200vh",
    ease: "expo.inOut",
  },
  {
    scrollTrigger: {
      trigger: ".s19",
      start: "center bottom",
      end: "center center",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    y: "-20vh",
    opacity: 1,
    ease: "expo.inOut",
  },
  2
);

gsap.fromTo(
  ".slide--39 .pair-txt",
  {
    scrollTrigger: {
      trigger: ".s19",
      start: "center bottom",
      end: "center center-=200",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    y: "-20vh",
    transform: "scale(1)",
    ease: "expo.inOut",
  },
  {
    scrollTrigger: {
      trigger: ".s19",
      start: "center center",
      end: "center center-=200",
      toggleActions: "play none reverse none",
      scrub: true,
    },
    transform: "scale(0.8)",
    y: "0vh",
    ease: "expo.inOut",
  },
  2
);

gsap.from(
  ".slide--39 .slide--39__img1",
  {
    scrollTrigger: {
      trigger: ".s19",
      start: "center center",
      end: "center center-=200",
      toggleActions: "play none reverse none",
      scrub: true,
    },
    opacity: 0,
    y: "-100vw",
    ease: "expo.inOut",
  },
  2
);

gsap.to(
  ".slide--39",
  {
    scrollTrigger: {
      trigger: ".s19",
      scrub: true,
      start: "bottom center+=200",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    y: "-100vh",
    ease: "expo.inOut",
  },
  2
);
gsap.to(
  ".slide--39",
  {
    scrollTrigger: {
      trigger: ".s19",
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

// slide 3 10

gsap.from(
  ".slide--310 .imgl",
  {
    scrollTrigger: {
      trigger: ".s20",
      start: "center bottom",
      end: "center bottom-=200",
      scrub: true,
    },
    opacity: 0,
    x: "-100vw",
    ease: "expo.inOut",
  },
  2
);
gsap.from(
  ".slide--310 .imgr",
  {
    scrollTrigger: {
      trigger: ".s20",
      start: "center bottom",
      end: "center bottom-=200",
      scrub: true,
    },
    opacity: 0,
    x: "100vw",
    ease: "expo.inOut",
  },
  2
);
gsap.from(
  ".slide--310 .col-txt",
  {
    scrollTrigger: {
      trigger: ".s20",
      start: "center center+=200",
      end: "center center",
      scrub: true,
    },
    opacity: 0,
    y: "100vw",
    ease: "expo.inOut",
  },
  2
);

gsap.to(
  ".slide--310",
  {
    scrollTrigger: {
      trigger: ".s20",
      scrub: true,
      start: "bottom center+=200",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    y: "-100vh",
    ease: "expo.inOut",
  },
  2
);
gsap.to(
  ".slide--310",
  {
    scrollTrigger: {
      trigger: ".s20",
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

// slide 3 11

gsap.from(
  ".slide--311 .s3_h3",
  {
    scrollTrigger: {
      trigger: ".s21",
      start: "20% 100%",
      end: "50% 60%",
      scrub: true,
    },
    opacity: 0,
    ease: "expo.inOut",
  },
  2
);
gsap.to(
  ".slide--311",
  {
    scrollTrigger: {
      trigger: ".s21",
      scrub: true,
      start: "center bottom",
      end: "center center",
      toggleActions: "play none reverse none",
    },
    y: "-100vh",
    ease: "expo.inOut",
  },
  2
);
gsap.to(
  ".slide--311",
  {
    scrollTrigger: {
      trigger: ".s21",
      scrub: true,
      start: "center center",
      end: "center center",
      toggleActions: "play none reverse none",
    },
    display: "none",
    ease: "expo.inOut",
  },
  2
);

// slide 3 11
gsap.from(
  ".slide--312",
  {
    scrollTrigger: {
      trigger: ".s22",
      start: "top bottom",
      end: "top bottom",
      scrub: true,
    },
    opacity: 0,
    y: "100vh",
    ease: "expo.inOut",
  },
  2
);

gsap.fromTo(
  ".slide--312 .nw",
  {
    scrollTrigger: {
      trigger: ".s22",
      start: "0% 100%",
      end: "10% 80%",
      scrub: true,
    },
    opacity: 0,
    transform: "scale(1)",
    y: "100%",
    x: "100vw",
    ease: "expo.inOut",
  },
  {
    scrollTrigger: {
      trigger: ".s22",
      start: "0% 100%",
      end: "10% 80%",

      scrub: true,
      toggleActions: "play none reverse none",
    },
    opacity: 1,
    ease: "expo.inOut",
    transform: "scale(1)",
    x: "0vw",
    y: "0%",
  },
  2
);

gsap.fromTo(
  ".slide--312 .nred",
  {
    scrollTrigger: {
      trigger: ".s22",
      start: "0% 100%",
      end: "10% 80%",
      scrub: true,
    },
    opacity: 0,
    transform: "scale(1) ",
    y: "100%",
    x: "-100vw",
    ease: "expo.inOut",
  },
  {
    scrollTrigger: {
      trigger: ".s22",
      start: "0% 100%",
      end: "10% 80%",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    opacity: 1,
    x: "0vw",
    y: "0%",
    transform: "scale(1) ",
    ease: "expo.inOut",
  },
  2
);

// 1 - 2
gsap.fromTo(
  ".slide--312 .nred",
  {
    scrollTrigger: {
      trigger: ".s22",
      start: "0% 100%",
      end: "10% 80%",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    x: "0vw",
    y: "0%",
    transform: "scale(1) ",
    ease: "expo.inOut",
  },
  {
    scrollTrigger: {
      trigger: ".s22",
      start: "10% 80%",
      end: "20% 60%",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    x: "50vw",
    y: "-250%",
    transform: "scale(3) ",
    ease: "expo.inOut",
  },
  2
);

// 2-3
gsap.fromTo(
  ".slide--312 .nred",
  {
    scrollTrigger: {
      trigger: ".s22",
      start: "10% 80%",
      end: "20% 60%",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    x: "50vw",
    y: "-250%",
    transform: "scale(3) ",
    ease: "expo.inOut",
  },
  {
    scrollTrigger: {
      trigger: ".s22",
      start: "20% 60%",
      end: "30% 40%",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    x: "10vw",
    y: "-50%",
    transform: "scale(4)",
    ease: "expo.inOut",
    duration: 2,
  },
  2
);

// 3-4
gsap.fromTo(
  ".slide--312 .nred",
  {
    scrollTrigger: {
      trigger: ".s22",
      start: "20% 61%",
      end: "30% 41%",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    x: "10vw",
    y: "-50%",
    transform: "scale(4)",
    ease: "expo.inOut",
    duration: 2,
  },
  {
    scrollTrigger: {
      trigger: ".s22",
      start: "30% 40%",
      end: "40% 20%",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    x: "60vw",
    y: "-25%",
    transform: "scale(6) rotateY(180deg)",
    ease: "expo.inOut",
    duration: 2,
  },
  2
);

// 4-5
gsap.fromTo(
  ".slide--312 .nred",
  {
    scrollTrigger: {
      trigger: ".s22",
      start: "30% 40%",
      end: "40% 20%",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    x: "60vw",
    y: "-25%",
    transform: "scale(6) rotateY(180deg)",
    ease: "expo.inOut",
    duration: 2,
  },
  {
    scrollTrigger: {
      trigger: ".s22",
      start: "40% 25%",
      end: "50% 10%",
      toggleActions: "play none reverse none",
      scrub: true,
    },
    x: "50vw",
    y: "20%",
    transform: "rotateY(180deg) scale(10)",
    ease: "expo.inOut",
    duration: 2,
  },
  2
);

// 5-6
gsap.fromTo(
  ".slide--312 .nred",
  {
    scrollTrigger: {
      trigger: ".s22",
      start: "40% 25%",
      end: "50% 10%",
      toggleActions: "play none reverse none",
      scrub: true,
    },
    x: "50vw",
    y: "20%",
    transform: "rotateY(180deg) scale(10)",
    ease: "expo.inOut",
    duration: 2,
  },
  {
    scrollTrigger: {
      trigger: ".s22",
      start: "50% 10%",
      end: "70% 0%",
      toggleActions: "play none reverse none",
      scrub: true,
    },
    x: "140vw",
    y: "-1200%",
    transform: "rotateY(180deg) scale(64,200)",
    ease: "expo.inOut",
    duration: 2,
  },
  2
);

// 1-2
gsap.fromTo(
  ".slide--312 .nw",
  {
    scrollTrigger: {
      trigger: ".s22",
      start: "0% 100%",
      end: "10% 80%",

      scrub: true,
      toggleActions: "play none reverse none",
    },

    ease: "expo.inOut",
    transform: "scale(1) ",
    x: "0vw",
    y: "0%",
  },
  {
    scrollTrigger: {
      trigger: ".s22",
      start: "10% 80%",
      end: "20% 60%",

      scrub: true,
      toggleActions: "play none reverse none",
    },
    x: "-50vw",
    y: "-150%",
    transform: "scale(2) rotateY(180deg)",
    ease: "expo.inOut",
  },
  2
);

// 2-3
gsap.fromTo(
  ".slide--312 .nw",
  {
    scrollTrigger: {
      trigger: ".s22",
      start: "10% 80%",
      end: "20% 60%",

      scrub: true,
      toggleActions: "play none reverse none",
    },
    x: "-50vw",
    y: "-150%",
    transform: "scale(2) rotateY(180deg)",
    ease: "expo.inOut",
  },
  {
    scrollTrigger: {
      trigger: ".s22",
      start: "20% 60%",
      end: "30% 40%",

      scrub: true,
      toggleActions: "play none reverse none",
    },
    x: "-10vw",
    y: "-250%",
    transform: "scale(3)",
    ease: "expo.inOut",
  },
  2
);

// 3-4
gsap.fromTo(
  ".slide--312 .nw",
  {
    scrollTrigger: {
      trigger: ".s22",
      start: "20% 60%",
      end: "30% 40%",

      scrub: true,
      toggleActions: "play none reverse none",
    },
    x: "-10vw",
    y: "-250%",
    transform: "scale(3)",
    ease: "expo.inOut",
  },
  {
    scrollTrigger: {
      trigger: ".s22",
      start: "30% 40%",
      end: "40% 20%",

      scrub: true,
      toggleActions: "play none reverse none",
    },
    x: "-50vw",
    y: "-25%",
    zIndex: -1,
    transform: "scale(6) rotateY(180deg)",
    ease: "expo.inOut",
  },
  2
);

// 4-5
gsap.fromTo(
  ".slide--312 .nw",
  {
    scrollTrigger: {
      trigger: ".s22",
      start: "30% 40%",
      end: "40% 20%",

      scrub: true,
      toggleActions: "play none reverse none",
    },
    x: "-50vw",
    y: "-25%",
    zIndex: -1,
    transform: "scale(6) rotateY(180deg)",
    ease: "expo.inOut",
  },
  {
    scrollTrigger: {
      trigger: ".s22",
      start: "40% 20%",
      end: "50% 0%",

      toggleActions: "play none reverse none",
      scrub: true,
    },
    x: "50vw",
    y: "20%",
    zIndex: -1,
    transform: " rotateY(180deg) scale(10)",
    ease: "expo.inOut",
  },
  2
);

gsap.fromTo(
  ".slide--312",
  {
    scrollTrigger: {
      trigger: ".s22",
      scrub: true,
      start: "bottom bottom",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    opacity: 1,
    ease: "expo.inOut",
  },
  {
    scrollTrigger: {
      trigger: ".s22",
      scrub: true,
      start: "bottom bottom",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    ease: "expo.inOut",
  },
  2
);

gsap.to(
  ".slide--312",
  {
    scrollTrigger: {
      trigger: ".s22",
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

// slide 3 13 1
gsap.fromTo(
  ".slide--3131 .imgl",
  {
    scrollTrigger: {
      trigger: ".s231",
      start: "center 100%",
      end: "center 60%",
      scrub: true,
    },
    opacity: 0,
    y: "100vh",
    ease: "expo.inOut",
  },
  {
    scrollTrigger: {
      trigger: ".s231",
      start: "center 100%",
      end: "center 60%",
      scrub: true,
    },
    opacity: 1,
    y: "0vh",
    ease: "expo.inOut",
  },
  2
);

gsap.fromTo(
  ".slide--3131",
  {
    scrollTrigger: {
      trigger: ".s231",
      scrub: true,
      start: "bottom bottom",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    x: "0vw",
    width: "100vw",
    ease: "expo.inOut",
  },
  {
    scrollTrigger: {
      trigger: ".s231",
      scrub: true,
      start: "bottom bottom",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    x: "-100vw",
    width: "0vw",
    ease: "expo.inOut",
  },
  2
);
gsap.to(
  ".slide--3131",
  {
    scrollTrigger: {
      trigger: ".s231",
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

// slide 3 13

gsap.fromTo(
  ".slide--313 .s3_text",
  {
    scrollTrigger: {
      trigger: ".s23",
      scrub: true,
      start: "top 100%",
      end: "top 130%",
      toggleActions: "play none reverse none",
    },
    x: "100vw",
    opacity: 0,
    ease: "expo.inOut",
  },
  {
    scrollTrigger: {
      trigger: ".s23",
      scrub: true,
      start: "top 100%",
      end: "top 80%",
      toggleActions: "play none reverse none",
    },
    x: "0vw",
    opacity: 1,
    ease: "expo.inOut",
  },
  2
);

gsap.fromTo(
  ".slide--313 .imgr",
  {
    scrollTrigger: {
      trigger: ".s23",
      scrub: true,
      start: "center 80%",
      end: "center 50%",
      toggleActions: "play none reverse none",
    },
    width: "0vw",
    x: "100vh",
    opacity: 0,
    ease: "expo.inOut",
  },
  {
    scrollTrigger: {
      trigger: ".s23",
      scrub: true,
      start: "center 80%",
      end: "center 50%",
      toggleActions: "play none reverse none",
    },
    width: "80vw",
    x: "0vh",
    opacity: 1,
    ease: "expo.inOut",
  },
  2
);

gsap.to(
  ".slide--313",
  {
    scrollTrigger: {
      trigger: ".s23",
      scrub: true,
      start: "bottom bottom",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    y: "100vh",
    ease: "expo.inOut",
  },
  2
);
gsap.to(
  ".slide--313",
  {
    scrollTrigger: {
      trigger: ".s23",
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

// slide 3 14

gsap.fromTo(
  ".slide--314 .gal-3",
  {
    scrollTrigger: {
      trigger: ".s24",
      scrub: true,
      start: "center 100%",
      end: "center 60%",
      toggleActions: "play none reverse none",
    },
    x: "-200vw",
    opacity: 0,
  },
  {
    scrollTrigger: {
      trigger: ".s24",
      scrub: true,
      start: "center 100%",
      end: "center 60%",
      toggleActions: "play none reverse none",
    },
    x: "0vw",
    opacity: 1,
    ease: "expo.inOut",
  },
  2
);

gsap.fromTo(
  ".slide--314 .gal-3",
  {
    scrollTrigger: {
      trigger: ".s24",
      scrub: true,
      start: "center 60%",
      end: "center 30%",
      toggleActions: "play none reverse none",
    },
    x: "0vw",
    opacity: 1,
    ease: "expo.inOut",
  },
  {
    scrollTrigger: {
      trigger: ".s24",
      scrub: true,
      start: "center 60%",
      end: "center 30%",
      toggleActions: "play none reverse none",
    },
    transform: "scale(1.2)",
    x: "0vw",
    ease: "expo.inOut",
  },
  2
);

gsap.from(
  ".slide--314 .s3_h2",
  {
    scrollTrigger: {
      trigger: ".s24",
      scrub: true,
      start: "center 60%",
      end: "center 30%",
      toggleActions: "play none reverse none",
    },
    y: "-50vh",
    opacity: 0,
    ease: "expo.inOut",
  },
  2
);

gsap.to(
  ".slide--314",
  {
    scrollTrigger: {
      trigger: ".s24",
      scrub: true,
      start: "bottom bottom",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    y: "-100vh",
    ease: "expo.inOut",
  },
  2
);
gsap.to(
  ".slide--314",
  {
    scrollTrigger: {
      trigger: ".s24",
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

// slide 3 15

gsap.fromTo(
  ".slide--315 .s3_h3",
  {
    scrollTrigger: {
      trigger: ".s25",
      start: "top 80%",
      end: "top 40%",
      scrub: true,
    },
    opacity: 0,
    y: "100vh",
    width: "0vw",
    ease: "expo.inOut",
  },
  {
    scrollTrigger: {
      trigger: ".s25",
      start: "top 80%",
      end: "top 40%",
      scrub: true,
    },
    opacity: 1,
    y: "0vh",
    width: "90vw",
    ease: "expo.inOut",
  },
  2
);

gsap.from(
  ".slide--315 .slide--315__img1",
  {
    scrollTrigger: {
      trigger: ".s25",
      start: "center 60%",
      end: "center 30%",
      scrub: true,
    },
    width: "0vw",
    opacity: 0,
    x: "-100vw",
    ease: "expo.inOut",
  },
  2
);

gsap.to(
  ".slide--315",
  {
    scrollTrigger: {
      trigger: ".s25",
      scrub: true,
      start: "center 20%",
      end: "center 0%",
      toggleActions: "play none reverse none",
    },
    y: "-100vh",
    ease: "expo.inOut",
  },
  2
);
gsap.to(
  ".slide--315",
  {
    scrollTrigger: {
      trigger: ".s25",
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

// slide 3 16

gsap.fromTo(
  ".slide--316 .s3_h3",
  {
    scrollTrigger: {
      trigger: ".s26",
      start: "center 100%",
      end: "center 80%",
      scrub: true,
    },
    opacity: 0,
    y: "100vh",
    width: "0vw",
    ease: "expo.inOut",
  },
  {
    scrollTrigger: {
      trigger: ".s26",
      start: "center 100%",
      end: "center 80%",
      scrub: true,
    },
    width: "90vw",
    opacity: 1,
    y: "0vh",
    ease: "expo.inOut",
  },
  2
);

gsap.to(
  ".slide--316",
  {
    scrollTrigger: {
      trigger: ".s26",
      scrub: true,
      start: "bottom bottom",
      end: "bottom center",
      toggleActions: "play none reverse none",
    },
    y: "-100vh",
    ease: "expo.inOut",
  },
  2
);
gsap.to(
  ".slide--316",
  {
    scrollTrigger: {
      trigger: ".s26",
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

// slide 3 17

gsap.fromTo(
  ".slide--317 .slide--317__img1",
  {
    scrollTrigger: {
      trigger: ".s27",
      start: "center 100%",
      end: "center 80%",
      scrub: true,
    },
    opacity: 0,
    y: "100vh",
    transform: "scale(1.3)",
    ease: "expo.inOut",
  },
  {
    scrollTrigger: {
      trigger: ".s27",
      start: "center 100%",
      end: "center 80%",
      scrub: true,
    },
    opacity: 1,
    y: "0vh",
    transform: "scale(1.3)",
    ease: "expo.inOut",
  },
  2
);

gsap.fromTo(
  ".slide--317 .slide--317__img1",
  {
    scrollTrigger: {
      trigger: ".s27",
      start: "center 80%",
      end: "center 40%",
      scrub: true,
    },
    y: "0vh",
    transform: "scale(1.3)",
    ease: "expo.inOut",
  },
  {
    scrollTrigger: {
      trigger: ".s27",
      start: "center 80%",
      end: "center 40%",
      scrub: true,
    },
    transform: "scale(1)",
    y: "0vh",
    ease: "expo.inOut",
  },
  2
);

gsap.from(
  ".slide--317 .s3_text",
  {
    scrollTrigger: {
      trigger: ".s27",
      start: "center 80%",
      end: "center 40%",
      scrub: true,
    },
    opacity: 0,
    y: "100vh",
    ease: "expo.inOut",
  },
  2
);

gsap.to(
  ".slide--317",
  {
    scrollTrigger: {
      trigger: ".s27",
      scrub: true,
      start: "center 20%",
      end: "center 0%",
      toggleActions: "play none reverse none",
    },
    y: "-100vh",
    ease: "expo.inOut",
  },
  2
);
gsap.to(
  ".slide--317",
  {
    scrollTrigger: {
      trigger: ".s27",
      scrub: true,
      start: "center 0%",
      end: "center 0%",
      toggleActions: "play none reverse none",
    },
    display: "none",
    ease: "expo.inOut",
  },
  2
);

// slide 3 18

gsap.from(
  ".slide--318 .p1",
  {
    scrollTrigger: {
      trigger: ".s28",
      start: "center 100%",
      end: "center 60%",
      scrub: true,
    },
    opacity: 0,
    ease: "expo.inOut",
  },
  2
);

gsap.from(
  ".slide--318 .p2",
  {
    scrollTrigger: {
      trigger: ".s28",
      start: "center 50%",
      end: "center 20%",
      scrub: true,
    },
    opacity: 0,
    height: 0,
    ease: "expo.inOut",
  },
  2
);
