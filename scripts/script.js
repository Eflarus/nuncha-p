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

// project 2

// slide 5 0
gsap.from(
  ".slide--50 .intro__img_bl5",
  {
    scrollTrigger: {
      trigger: ".s50",
      start: "0% 50%",
      end: "50% 60%",
      scrub: true,
    },
    x: "-50vw",
    opacity: 0,
    ease: "expo.inOut",
  },
  2
);

gsap.from(
  ".slide--50 .intro__content",
  {
    scrollTrigger: {
      trigger: ".s50",
      start: "0% 50%",
      end: "50% 60%",
      scrub: true,
    },
    x: "50vw",
    opacity: 0,
    ease: "expo.inOut",
  },
  2
);

gsap.to(
  ".slide--50",
  {
    scrollTrigger: {
      trigger: ".s50",
      scrub: true,
      start: "80% 70%",
      end: "100% 20%",
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    y: "-100vh",
    ease: "expo",
  },
  2
);

gsap.to(
  ".slide--50",
  {
    scrollTrigger: {
      trigger: ".s50",
      scrub: true,
      start: "100% 50%",
      end: "100% 50%",
      toggleActions: "play none reverse none",
    },
    display: "none",
    ease: "expo.inOut",
  },
  2
);

// slide 5 0 i

gsap.from(
  ".slide--50i .s3_text",
  {
    scrollTrigger: {
      trigger: ".s50i",
      start: "0% 50%",
      end: "50% 60%",
      scrub: true,
    },
    y: "100vh",
    opacity: 0,
    ease: "expo",
  },
  2
);

gsap.to(
  ".slide--50i",
  {
    scrollTrigger: {
      trigger: ".s50i",
      scrub: true,
      start: "80% 70%",
      end: "100% 20%",
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    y: "-100vh",
    ease: "expo.out",
  },
  2
);

gsap.to(
  ".slide--50i",
  {
    scrollTrigger: {
      trigger: ".s50i",
      scrub: true,
      start: "100% 50%",
      end: "100% 50%",
      toggleActions: "play none reverse none",
    },
    display: "none",
    ease: "expo.inOut",
  },
  2
);

// slide 5 1

gsap.from(
  ".slide--51 .s3_title",
  {
    scrollTrigger: {
      trigger: ".s51",
      start: "0% 50%",
      end: "50% 60%",
      scrub: true,
    },
    y: "100vh",
    opacity: 0,
    ease: "expo",
  },
  2
);

gsap.from(
  ".slide--51 .pair-txt",
  {
    scrollTrigger: {
      trigger: ".s51",
      start: "50% 50%",
      end: "80% 60%",
      scrub: true,
    },
    y: "50vh",
    height: 0,
    opacity: 0,
    ease: "expo",
  },
  2
);

gsap.to(
  ".slide--51",
  {
    scrollTrigger: {
      trigger: ".s51",
      scrub: true,
      start: "80% 70%",
      end: "100% 20%",
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    y: "-100vh",
    ease: "expo.out",
  },
  2
);

gsap.to(
  ".slide--51",
  {
    scrollTrigger: {
      trigger: ".s51",
      scrub: true,
      start: "100% 50%",
      end: "100% 50%",
      toggleActions: "play none reverse none",
    },
    display: "none",
    ease: "expo.inOut",
  },
  2
);

// slide 5 2

gsap.from(
  ".slide--52 .lcol",
  {
    scrollTrigger: {
      trigger: ".s52",
      start: "0% 50%",
      end: "50% 60%",
      scrub: true,
    },
    x: "-50vh",
    opacity: 0,
    ease: "expo",
  },
  2
);

gsap.from(
  ".slide--52 .rcol",
  {
    scrollTrigger: {
      trigger: ".s52",
      start: "0% 50%",
      end: "50% 60%",
      scrub: true,
    },
    x: "50vh",
    opacity: 0,
    ease: "expo",
  },
  2
);

gsap.from(
  ".slide--52 .mdh",
  {
    scrollTrigger: {
      trigger: ".s52",
      start: "0% 50%",
      end: "50% 60%",
      scrub: true,
    },
    x: "-50vh",
    opacity: 0,
    ease: "expo",
  },
  2
);

gsap.to(
  ".slide--52",
  {
    scrollTrigger: {
      trigger: ".s52",
      scrub: true,
      start: "80% 70%",
      end: "100% 20%",
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    y: "-100vh",
    ease: "expo.out",
  },
  2
);

gsap.to(
  ".slide--52",
  {
    scrollTrigger: {
      trigger: ".s52",
      scrub: true,
      start: "100% 50%",
      end: "100% 50%",
      toggleActions: "play none reverse none",
    },
    display: "none",
    ease: "expo.inOut",
  },
  2
);

// slide 5 3

gsap.from(
  ".slide--53 .lcol",
  {
    scrollTrigger: {
      trigger: ".s53",
      start: "0% 50%",
      end: "50% 60%",
      scrub: true,
    },
    x: "-50vh",
    opacity: 0,
    ease: "expo",
  },
  2
);

gsap.from(
  ".slide--53 .rcol",
  {
    scrollTrigger: {
      trigger: ".s53",
      start: "0% 50%",
      end: "50% 60%",
      scrub: true,
    },
    x: "50vh",
    opacity: 0,
    ease: "expo",
  },
  2
);

gsap.fromTo(
  ".slide--53 .rcol",
  {
    scrollTrigger: {
      trigger: ".s53",
      scrub: true,
      start: "80% 70%",
      end: "100% 20%",
      toggleActions: "play none reverse none",
    },
    x: "0vw",
    ease: "expo",
  },
  {
    scrollTrigger: {
      trigger: ".s53",
      scrub: true,
      start: "80% 70%",
      end: "100% 20%",
      toggleActions: "play none reverse none",
    },
    x: "100vw",
    ease: "expo",
  },
  2
);

gsap.fromTo(
  ".slide--53 .lcol",
  {
    scrollTrigger: {
      trigger: ".s53",
      scrub: true,
      start: "80% 70%",
      end: "100% 20%",
      toggleActions: "play none reverse none",
    },
    x: "0vw",
    ease: "expo",
  },
  {
    scrollTrigger: {
      trigger: ".s53",
      scrub: true,
      start: "80% 70%",
      end: "100% 20%",
      toggleActions: "play none reverse none",
    },
    x: "-100vw",
    ease: "expo",
  },
  2
);

gsap.to(
  ".slide--53",
  {
    scrollTrigger: {
      trigger: ".s53",
      scrub: true,
      start: "100% 50%",
      end: "100% 50%",
      toggleActions: "play none reverse none",
    },
    display: "none",
    ease: "expo.inOut",
  },
  2
);

// slide 5 4

// gsap.from(
//   ".slide--54 .rcol .s3_title",
//   {
//     scrollTrigger: {
//       trigger: ".s54",
//       start: "0% 50%",
//       end: "40% 60%",
//       scrub: true,
//     },
//     y: "50vh",
//     opacity: 0,
//     ease: "expo",
//   },
//   2
// );
gsap.from(
  ".slide--54 .rcol .s3_text",
  {
    scrollTrigger: {
      trigger: ".s54",
      start: "0% 50%",
      end: "40% 60%",
      scrub: true,
    },
    y: "-50vh",
    opacity: 0,
    ease: "expo",
  },
  2
);

gsap.from(
  ".slide--54 .lcol",
  {
    scrollTrigger: {
      trigger: ".s54",
      start: "40% 60%",
      end: "70% 60%",
      scrub: true,
    },
    flex: "0 0 0",
    opacity: 0,
    ease: "expo",
  },
  2
);

gsap.fromTo(
  ".slide--54 .lcol img",
  {
    scrollTrigger: {
      trigger: ".s54",
      start: "40% 60%",
      end: "70% 60%",
      scrub: true,
    },
    maxWidth: "0vw",
    maxHeight: "0vh",
    opacity: 0,
    ease: "expo",
  },
  {
    scrollTrigger: {
      trigger: ".s54",
      start: "40% 60%",
      end: "70% 60%",
      scrub: true,
    },
    maxWidth: "80vw",
    maxHeight: "80vh",
    opacity: 1,
    ease: "expo",
  },
  2
);

gsap.fromTo(
  ".slide--54 .rcol",
  {
    scrollTrigger: {
      trigger: ".s54",
      scrub: true,
      start: "70% 70%",
      end: "100% 20%",
      toggleActions: "play none reverse none",
    },
    x: "0vw",
    ease: "expo",
  },
  {
    scrollTrigger: {
      trigger: ".s54",
      scrub: true,
      start: "80% 70%",
      end: "100% 20%",
      toggleActions: "play none reverse none",
    },
    x: "100vw",
    ease: "expo",
  },
  2
);

gsap.fromTo(
  ".slide--54 .lcol",
  {
    scrollTrigger: {
      trigger: ".s54",
      scrub: true,
      start: "70% 70%",
      end: "100% 20%",
      toggleActions: "play none reverse none",
    },
    x: "0vw",
    ease: "expo",
  },
  {
    scrollTrigger: {
      trigger: ".s54",
      scrub: true,
      start: "80% 70%",
      end: "100% 20%",
      toggleActions: "play none reverse none",
    },
    x: "-100vw",
    ease: "expo",
  },
  2
);

gsap.to(
  ".slide--54",
  {
    scrollTrigger: {
      trigger: ".s54",
      scrub: true,
      start: "100% 50%",
      end: "100% 50%",
      toggleActions: "play none reverse none",
    },
    display: "none",
    ease: "expo.inOut",
  },
  2
);

// slide 5 5

gsap.from(
  ".slide--55 .lcol .s3_title",
  {
    scrollTrigger: {
      trigger: ".s55",
      start: "0% 50%",
      end: "40% 60%",
      scrub: true,
    },
    y: "-50vh",
    opacity: 0,
    ease: "expo",
  },
  2
);
gsap.from(
  ".slide--55 .lcol .s3_text",
  {
    scrollTrigger: {
      trigger: ".s55",
      start: "0% 50%",
      end: "40% 60%",
      scrub: true,
    },
    y: "50vh",
    opacity: 0,
    ease: "expo",
  },
  2
);

gsap.to(
  ".slide--55 .lcol",
  {
    scrollTrigger: {
      trigger: ".s55",
      start: "40% 60%",
      end: "70% 60%",
      scrub: true,
    },
    transform: "scale(0.8)",
    ease: "expo",
  },
  2
);

gsap.from(
  ".slide--55 .rcol",
  {
    scrollTrigger: {
      trigger: ".s55",
      start: "40% 60%",
      end: "70% 60%",
      scrub: true,
    },
    x: "50vw",
    flex: "0 0 0",
    opacity: 0,
    ease: "expo",
  },
  2
);
gsap.from(
  ".slide--55 .rcol img",
  {
    scrollTrigger: {
      trigger: ".s55",
      start: "40% 60%",
      end: "70% 60%",
      scrub: true,
    },
    x: "50vw",
    maxWidth: "0px",
    maxHeight: "0px",
    opacity: 0,
    ease: "expo",
  },
  2
);

gsap.fromTo(
  ".slide--55 .rcol",
  {
    scrollTrigger: {
      trigger: ".s55",
      scrub: true,
      start: "80% 70%",
      end: "100% 20%",
      toggleActions: "play none reverse none",
    },
    x: "0vw",
    ease: "expo",
  },
  {
    scrollTrigger: {
      trigger: ".s55",
      scrub: true,
      start: "80% 70%",
      end: "100% 20%",
      toggleActions: "play none reverse none",
    },
    x: "100vw",
    ease: "expo",
  },
  2
);

gsap.fromTo(
  ".slide--55 .lcol",
  {
    scrollTrigger: {
      trigger: ".s55",
      scrub: true,
      start: "80% 70%",
      end: "100% 20%",
      toggleActions: "play none reverse none",
    },
    x: "0vw",
    ease: "expo",
  },
  {
    scrollTrigger: {
      trigger: ".s55",
      scrub: true,
      start: "80% 70%",
      end: "100% 20%",
      toggleActions: "play none reverse none",
    },
    x: "-100vw",
    ease: "expo",
  },
  2
);

gsap.to(
  ".slide--55",
  {
    scrollTrigger: {
      trigger: ".s55",
      scrub: true,
      start: "100% 50%",
      end: "100% 50%",
      toggleActions: "play none reverse none",
    },
    display: "none",
    ease: "expo.inOut",
  },
  2
);

// slide 5 6

gsap.from(
  ".slide--56 .lcol",
  {
    scrollTrigger: {
      trigger: ".s56",
      start: "0% 50%",
      end: "50% 60%",
      scrub: true,
    },
    x: "-50vh",
    opacity: 0,
    ease: "expo",
  },
  2
);

gsap.from(
  ".slide--56 .rcol",
  {
    scrollTrigger: {
      trigger: ".s56",
      start: "0% 50%",
      end: "50% 60%",
      scrub: true,
    },
    x: "50vh",
    opacity: 0,
    ease: "expo",
  },
  2
);

gsap.fromTo(
  ".slide--56 .rcol",
  {
    scrollTrigger: {
      trigger: ".s56",
      scrub: true,
      start: "80% 70%",
      end: "100% 20%",
      toggleActions: "play none reverse none",
    },
    x: "0vw",
    ease: "expo",
  },
  {
    scrollTrigger: {
      trigger: ".s56",
      scrub: true,
      start: "80% 70%",
      end: "100% 20%",
      toggleActions: "play none reverse none",
    },
    x: "100vw",
    ease: "expo",
  },
  2
);

gsap.fromTo(
  ".slide--56 .lcol",
  {
    scrollTrigger: {
      trigger: ".s56",
      scrub: true,
      start: "80% 70%",
      end: "100% 20%",
      toggleActions: "play none reverse none",
    },
    x: "0vw",
    ease: "expo",
  },
  {
    scrollTrigger: {
      trigger: ".s56",
      scrub: true,
      start: "80% 70%",
      end: "100% 20%",
      toggleActions: "play none reverse none",
    },
    x: "-100vw",
    ease: "expo",
  },
  2
);

gsap.to(
  ".slide--56",
  {
    scrollTrigger: {
      trigger: ".s56",
      scrub: true,
      start: "100% 50%",
      end: "100% 50%",
      toggleActions: "play none reverse none",
    },
    display: "none",
    ease: "expo.inOut",
  },
  2
);

// slide 5 7

gsap.from(
  ".slide--57 .lcol",
  {
    scrollTrigger: {
      trigger: ".s58",
      start: "0% 50%",
      end: "40% 60%",
      scrub: true,
    },
    x: "-50vh",
    opacity: 0,
    ease: "expo",
  },
  2
);

gsap.from(
  ".slide--57 .rcol",
  {
    scrollTrigger: {
      trigger: ".s58",
      start: "0% 50%",
      end: "40% 60%",
      scrub: true,
    },
    x: "50vh",
    opacity: 0,
    ease: "expo",
  },
  2
);

gsap.from(
  ".slide--57 .ccol",
  {
    scrollTrigger: {
      trigger: ".s58",
      start: "45% 50%",
      end: "75% 60%",
      scrub: true,
    },
    width: 0,
    height: "0svh",
    // flex: "0% 0 0",
    opacity: 0,
    ease: "expo",
  },
  2
);

gsap.from(
  ".slide--57 .ccol img",
  {
    scrollTrigger: {
      trigger: ".s58",
      start: "45% 50%",
      end: "75% 60%",
      scrub: true,
    },
    width: 0,
    maxHeight: 0,
    opacity: 0,
    ease: "expo",
  },

  2
);

// slide 5 8

gsap.from(
  ".slide--58 .rcol .s3_text",
  {
    scrollTrigger: {
      trigger: ".s57",
      start: "0% 50%",
      end: "40% 60%",
      scrub: true,
    },
    y: "50vh",
    opacity: 0,
    ease: "expo",
  },
  2
);

gsap.from(
  ".slide--58 .rcol .s3_title",
  {
    scrollTrigger: {
      trigger: ".s57",
      start: "0% 50%",
      end: "40% 60%",
      scrub: true,
    },
    y: "50vh",
    opacity: 0,
    ease: "expo",
  },
  2
);

gsap.from(
  ".slide--58 .lcol",
  {
    scrollTrigger: {
      trigger: ".s57",
      start: "40% 60%",
      end: "70% 60%",
      scrub: true,
    },

    x: "-50vw",
    flex: "0 0 0",
    opacity: 0,
    ease: "expo.out",
  },
  2
);

gsap.from(
  ".slide--58 .lcol img",
  {
    scrollTrigger: {
      trigger: ".s57",
      start: "40% 60%",
      end: "70% 60%",
      scrub: true,
    },

    maxWidth: 0,
    maxHeight: 0,
    opacity: 0,
    ease: "expo.out",
  },
  2
);

gsap.fromTo(
  ".slide--58 .rcol",
  {
    scrollTrigger: {
      trigger: ".s57",
      scrub: true,
      start: "80% 70%",
      end: "100% 20%",
      toggleActions: "play none reverse none",
    },
    x: "0vw",
    ease: "expo",
  },
  {
    scrollTrigger: {
      trigger: ".s57",
      scrub: true,
      start: "80% 70%",
      end: "100% 20%",
      toggleActions: "play none reverse none",
    },
    x: "100vw",
    ease: "expo",
  },
  2
);

gsap.fromTo(
  ".slide--58 .lcol",
  {
    scrollTrigger: {
      trigger: ".s57",
      scrub: true,
      start: "80% 70%",
      end: "100% 20%",
      toggleActions: "play none reverse none",
    },
    x: "0vw",
    ease: "expo",
  },
  {
    scrollTrigger: {
      trigger: ".s57",
      scrub: true,
      start: "80% 70%",
      end: "100% 20%",
      toggleActions: "play none reverse none",
    },
    x: "-100vw",
    ease: "expo",
  },
  2
);

gsap.to(
  ".slide--58",
  {
    scrollTrigger: {
      trigger: ".s57",
      scrub: true,
      start: "100% 50%",
      end: "100% 50%",
      toggleActions: "play none reverse none",
    },
    display: "none",
    ease: "expo.inOut",
  },
  2
);

// slide 5 9

gsap.from(
  ".slide--59  .s3_text",
  {
    scrollTrigger: {
      trigger: ".s59",
      start: "0% 50%",
      end: "40% 60%",
      scrub: true,
    },
    y: "50vh",
    opacity: 0,
    ease: "expo",
  },
  2
);

gsap.fromTo(
  ".slide--59 .q2",
  {
    scrollTrigger: {
      trigger: ".s59",
      start: "0% 50%",
      end: "40% 60%",
      scrub: true,
    },
    y: "-50vh",
    opacity: 0,
    ease: "expo",
  },
  {
    scrollTrigger: {
      trigger: ".s59",
      start: "0% 50%",
      end: "40% 60%",
      scrub: true,
    },
    y: "0vh",
    opacity: 1,
    ease: "expo",
  },
  2
);

gsap.from(
  ".slide--59 .q1",
  {
    scrollTrigger: {
      trigger: ".s59",
      start: "0% 50%",
      end: "40% 60%",
      scrub: true,
    },
    y: "20vh",
    transform: "scale(0.5)",
    opacity: 0,
    ease: "expo",
  },
  2
);

gsap.fromTo(
  ".slide--59 .q2",
  {
    scrollTrigger: {
      trigger: ".s59",
      start: "40% 60%",
      end: "70% 60%",
      scrub: true,
    },
    y: "0svh",
    ease: "expo",
  },
  {
    scrollTrigger: {
      trigger: ".s59",
      start: "40% 60%",
      end: "70% 60%",
      scrub: true,
    },
    y: "-40svh",
    ease: "expo",
  },
  2
);

gsap.to(
  ".slide--59 .q2",
  {
    scrollTrigger: {
      trigger: ".s59",
      start: "40% 60%",
      end: "70% 60%",
      scrub: true,
    },
    height: 0,
    ease: "expo",
  },
  2
);

gsap.fromTo(
  ".slide--59 .s3_text",
  {
    scrollTrigger: {
      trigger: ".s59",
      start: "40% 60%",
      end: "70% 60%",
      scrub: true,
    },
    transform: "scale(1)",
    height: "40svh",
    ease: "expo",
  },
  {
    scrollTrigger: {
      trigger: ".s59",
      start: "40% 60%",
      end: "70% 60%",
      scrub: true,
    },
    transform: "scale(0.6)",
    height: "10svh",
    ease: "expo",
  },
  2
);

gsap.from(
  ".slide--59 .slide--59__img",
  {
    scrollTrigger: {
      trigger: ".s59",
      start: "40% 60%",
      end: "70% 60%",
      scrub: true,
    },
    opacity: 0,
    maxHeight: 0,
    y: "-100vh",
    ease: "expo",
  },
  2
);

gsap.fromTo(
  ".slide--59",
  {
    scrollTrigger: {
      trigger: ".s58",
      scrub: true,
      start: "80% 70%",
      end: "100% 20%",
      toggleActions: "play none reverse none",
    },
    y: "0vh",
    opacity: 1,
    ease: "expo",
  },
  {
    scrollTrigger: {
      trigger: ".s59",
      scrub: true,
      start: "80% 70%",
      end: "100% 20%",
      toggleActions: "play none reverse none",
    },
    y: "-100vh",
    opacity: 0,
    ease: "expo",
  },
  2
);

gsap.to(
  ".slide--59",
  {
    scrollTrigger: {
      trigger: ".s59",
      scrub: true,
      start: "100% 50%",
      end: "100% 50%",
      toggleActions: "play none reverse none",
    },
    display: "none",
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
