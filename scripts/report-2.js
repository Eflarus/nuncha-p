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
  LIFE: new Audio("https://microcosm.pro/content/files/sounds/nuncha_life.mp3"),
  CHILD : new Audio("https://microcosm.pro/content/files/sounds/nuncha_child.mp3"),
  HEART: new Audio("https://microcosm.pro/content/files/sounds/nuncha_heart.mp3"),
  MADONNA: new Audio("https://microcosm.pro/content/files/sounds/nuncha_madonna.mp3"),
  POEM: new Audio("https://microcosm.pro/content/files/sounds/nuncha_poem.mp3"),
};

SOUNDS.DANCE.muted = SOUNDS.LIFE.muted = SOUNDS.CHILD.muted = SOUNDS.HEART.muted = SOUNDS.MADONNA.muted = SOUNDS.POEM.muted = true;


const toggleAudio = () => {
  SOUNDS.DANCE.muted = SOUNDS.LIFE.muted = SOUNDS.CHILD.muted = SOUNDS.HEART.muted = SOUNDS.MADONNA.muted = SOUNDS.POEM.muted = !SOUNDS.DANCE.muted;
  console.log(SOUNDS.DANCE.muted, SOUNDS.LIFE.muted, SOUNDS.CHILD.muted, SOUNDS.HEART.muted, SOUNDS.MADONNA.muted, SOUNDS.POEM.muted);

  
};

const toggleSoundIcon = (() => {
  var soundButton = document.querySelectorAll('.sound_button');
  for (var i = 0; i < soundButton.length; i++) {
      const btn = soundButton[i]
        console.log("toggleSoundIcon", i);
          if (!btn.classList.contains('active_sound')) {
              btn.classList.add('active_sound');
                
          } else {
              btn.classList.remove('active_sound');
          }
  }
  
});


const playDanse = () => {
  if (!SOUNDS.DANCE.muted) {
    SOUNDS.DANCE.play();
    SOUNDS.DANCE.volume = 0.99;
  }
};

const playLife = () => {

  if (!SOUNDS.LIFE.muted) {
    SOUNDS.LIFE.play();
    SOUNDS.LIFE.volume = 0.99;
  }
};

const playChild = () => {

  if (!SOUNDS.CHILD.muted) {
    SOUNDS.CHILD.play();
    SOUNDS.CHILD.volume = 0.99;
  }
};

const playHeart = () => {

  if (!SOUNDS.HEART.muted) {
    SOUNDS.HEART.play();
    SOUNDS.HEART.volume = 0.99;
  }
};

const playMadonna = () => {

  if (!SOUNDS.MADONNA.muted) {
    SOUNDS.MADONNA.play();
    SOUNDS.MADONNA.volume = 0.99;
  }
};

const playPoem = () => {

  if (!SOUNDS.POEM.muted) {
    SOUNDS.POEM.play();
    SOUNDS.POEM.volume = 0.99;
  }
};





let config = { strength: 0 };


// S22 DANCE
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

document.addEventListener('DOMContentLoaded', function() {
  var soundButton = document.getElementById('sound_button_sm_dance');
  soundButton.addEventListener('click', function() {
      toggleAudio();
      toggleSoundIcon();
      playDanse();
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var soundButton = document.getElementById('sound_button_sm_life');
  soundButton.addEventListener('click', function() {
      toggleAudio();
      toggleSoundIcon();
      playLife();
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var soundButton = document.getElementById('sound_button_sm_heart');
  soundButton.addEventListener('click', function() {
      toggleAudio();
      toggleSoundIcon();
      playHeart();
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var soundButton = document.getElementById('sound_button_sm_child');
  soundButton.addEventListener('click', function() {
      toggleAudio();
      toggleSoundIcon();
      playChild();
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var soundButton = document.getElementById('sound_button_sm_madonna');
  soundButton.addEventListener('click', function() {
      toggleAudio();
      toggleSoundIcon();
      playMadonna();
  });
});


document.addEventListener('DOMContentLoaded', function() {
  var soundButton = document.getElementById('sound_button_sm_poem');
  soundButton.addEventListener('click', function() {
      toggleAudio();
      toggleSoundIcon();
      playPoem();
  });
});


document.addEventListener('DOMContentLoaded', function() {
  var soundButton = document.getElementById('sound_button_sm_poem_restart');
  soundButton.addEventListener('click', function() {
      restartPoem();
  });
});


const restartPoem = () => {
  SOUNDS.POEM.currentTime = 0;
};





// S14 MADONNA
gsap.to(".slide--34", {
  ease: "none",
  scrollTrigger: {
    trigger: ".s14",
    scrub: true,
    start: "top center",
    end: "center top",
    onEnter: () => {
      console.log("onEnter");
      playMadonna();
    },
    onLeaveBack: () => {
      console.log("onLeaveBack");
      var fadeOut = setInterval(function () {
        if (SOUNDS.MADONNA.volume > 0.1) {
          SOUNDS.MADONNA.volume -= 0.1;
        } else {
          clearInterval(fadeOut);
          SOUNDS.MADONNA.pause();
        }
      }, 100);
    },
    onLeave: () => {
      console.log("onLeave");
      var fadeOut = setInterval(function () {
        if (SOUNDS.MADONNA.volume > 0.1) {
          SOUNDS.MADONNA.volume -= 0.1;
        } else {
          clearInterval(fadeOut);
          SOUNDS.MADONNA.pause();
        }
      }, 100);
    },
    onEnterBack: () => {
      console.log("onEnterBack");
      playMadonna();
    },
  },
});


// S15 LIFE
gsap.to(".slide--35", {
  ease: "none",
  scrollTrigger: {
    trigger: ".s15",
    scrub: true,
    start: "top center",
    end: "bottom top",
    onEnter: () => {
      console.log("onEnter");
      playLife();
    },
    onLeaveBack: () => {
      console.log("onLeaveBack");
      var fadeOut = setInterval(function () {
        if (SOUNDS.LIFE.volume > 0.1) {
          SOUNDS.LIFE.volume -= 0.1;
        } else {
          clearInterval(fadeOut);
          SOUNDS.LIFE.pause();
        }
      }, 100);
    },
    onLeave: () => {
      console.log("onLeave");
      var fadeOut = setInterval(function () {
        if (SOUNDS.LIFE.volume > 0.1) {
          SOUNDS.LIFE.volume -= 0.1;
        } else {
          clearInterval(fadeOut);
          SOUNDS.LIFE.pause();
        }
      }, 100);
    },
    onEnterBack: () => {
      console.log("onEnterBack");
      playLife();
    },
  },
});


// S17 POEM
gsap.to(".slide--37", {
  ease: "none",
  scrollTrigger: {
    trigger: ".s17",
    scrub: true,
    start: "top center",
    end: "bottom top",
    onEnter: () => {
      console.log("onEnter");
      playPoem();
    },
    onLeaveBack: () => {
      console.log("onLeaveBack");
      var fadeOut = setInterval(function () {
        if (SOUNDS.POEM.volume > 0.1) {
          SOUNDS.POEM.volume -= 0.1;
        } else {
          clearInterval(fadeOut);
          SOUNDS.POEM.pause();
        }
      }, 100);
    },
    onLeave: () => {
      console.log("onLeave");
      var fadeOut = setInterval(function () {
        if (SOUNDS.POEM.volume > 0.1) {
          SOUNDS.POEM.volume -= 0.1;
        } else {
          clearInterval(fadeOut);
          SOUNDS.POEM.pause();
        }
      }, 100);
    },
    onEnterBack: () => {
      console.log("onEnterBack");
      playPoem();
    },
  },
});

// S20 HEART
gsap.to(".slide--310", {
  ease: "none",
  scrollTrigger: {
    trigger: ".s20",
    scrub: true,
    start: "top center",
    end: "bottom top",
    onEnter: () => {
      console.log("onEnter");
      playHeart();
    },
    onLeaveBack: () => {
      console.log("onLeaveBack");
      var fadeOut = setInterval(function () {
        if (SOUNDS.HEART.volume > 0.1) {
          SOUNDS.HEART.volume -= 0.1;
        } else {
          clearInterval(fadeOut);
          SOUNDS.HEART.pause();
        }
      }, 100);
    },
    onLeave: () => {
      console.log("onLeave");
      var fadeOut = setInterval(function () {
        if (SOUNDS.HEART.volume > 0.1) {
          SOUNDS.HEART.volume -= 0.1;
        } else {
          clearInterval(fadeOut);
          SOUNDS.HEART.pause();
        }
      }, 100);
    },
    onEnterBack: () => {
      console.log("onEnterBack");
      playHeart();
    },
  },
});


// S24 CHILD
gsap.to(".slide--314", {
  ease: "none",
  scrollTrigger: {
    trigger: ".s24",
    scrub: true,
    start: "top center",
    end: "bottom top",
    onEnter: () => {
      console.log("onEnter");
      playChild();
    },
    onLeaveBack: () => {
      console.log("onLeaveBack");
      var fadeOut = setInterval(function () {
        if (SOUNDS.CHILD.volume > 0.1) {
          SOUNDS.CHILD.volume -= 0.1;
        } else {
          clearInterval(fadeOut);
          SOUNDS.CHILD.pause();
        }
      }, 100);
    },
    onLeave: () => {
      console.log("onLeave");
      var fadeOut = setInterval(function () {
        if (SOUNDS.CHILD.volume > 0.1) {
          SOUNDS.CHILD.volume -= 0.1;
        } else {
          clearInterval(fadeOut);
          SOUNDS.CHILD.pause();
        }
      }, 100);
    },
    onEnterBack: () => {
      console.log("onEnterBack");
      playChild();
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
    ease: "expo",
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
    ease: "expo",
  },
  2
);

gsap.from(
  ".slide--30 .intro__content",
  {
    scrollTrigger: {
      trigger: ".s10",
      start: "0% 50%",
      end: "50% 60%",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    x: "50vw",
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
      start: "0% 50%",
      end: "50% 60%",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    x: "-50vw",
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
      end: "bottom center",
      scrub: true,
    },
    y: "0vh",
    opacity: 1,
    ease: "expo",
  },
  {
    scrollTrigger: {
      trigger: ".s10",
      start: "bottom bottom",
      end: "bottom center",
      scrub: true,
    },
    y: "-100vh",
    opacity: 0,
    ease: "expo",
  },
  2
);

gsap.to(
  ".slide--30",
  {
    scrollTrigger: {
      trigger: ".s10",
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
  ".slide--30",
  {
    scrollTrigger: {
      trigger: ".s10",
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

// slide 3 1

gsap.fromTo(
  ".slide--31 .s3_text",
  {
    scrollTrigger: {
      trigger: ".s11",
      start: "0% 50%",
      end: "50% 60%",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    y: "100vh",
    opacity: 0,
    ease: "expo",
  },
  {
    scrollTrigger: {
      trigger: ".s11",
      start: "0% 50%",
      end: "50% 60%",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    y: "-20vh",
    opacity: 1,
    ease: "ease",
  },
  2
);

gsap.fromTo(
  ".slide--31 .s3_text",
  {
    scrollTrigger: {
      trigger: ".s11",
      start: "0% 50%",
      end: "50% 60%",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    y: "-20vh",
    transform: "scale(1)",
    ease: "expo",
  },
  {
    scrollTrigger: {
      trigger: ".s11",
      start: "50% 50%",
      end: "80% 60%",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    transform: "scale(0.6)",
    y: "0vh",
    ease: "ease",
  },
  2
);

gsap.from(
  ".slide--31 .slide--31__img1",
  {
    scrollTrigger: {
      trigger: ".s11",
      start: "50% 50%",
      end: "80% 60%",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    y: "-100vh",
    ease: "ease",
  },
  2
);

gsap.to(
  ".slide--31 .slide__content",
  {
    scrollTrigger: {
      trigger: ".s11",
      start: "80% 60%",
      end: "100% 20%",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    y: "-100vh",
    opacity: 0,
    ease: "ease",
  },
  2
);

gsap.to(
  ".slide--31",
  {
    scrollTrigger: {
      trigger: ".s11",
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

// slide 3 2

gsap.fromTo(
  ".slide--32 .s3_text",
  {
    scrollTrigger: {
      trigger: ".s12",
      start: "0% 50%",
      end: "50% 60%",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    y: "200vw",
    ease: "expo",
  },
  {
    scrollTrigger: {
      trigger: ".s12",
      start: "0% 50%",
      end: "50% 60%",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    y: "-30vw",
    opacity: 1,
    ease: "expo",
  },
  2
);

gsap.fromTo(
  ".slide--32 .s3_text",
  {
    scrollTrigger: {
      trigger: ".s12",
      start: "0% 50%",
      end: "50% 60%",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    y: "-30vw",
    transform: "scale(1)",
    ease: "ease",
  },
  {
    scrollTrigger: {
      trigger: ".s12",
      start: "50% 50%",
      end: "80% 60%",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    transform: "scale(0.6)",
    y: "0vw",
    ease: "ease",
  },
  2
);

gsap.from(
  ".slide--32 .slide--32__img1",
  {
    scrollTrigger: {
      trigger: ".s12",
      start: "50% 50%",
      end: "80% 60%",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    y: "-50vh",
    ease: "ease",
  },
  2
);

gsap.to(
  ".slide--32 .slide__content",
  {
    scrollTrigger: {
      trigger: ".s12",
      start: "80% 70%",
      end: "100% 20%",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    y: "-100vh",
    ease: "expo.out",
  },
  2
);

gsap.to(
  ".slide--32",
  {
    scrollTrigger: {
      trigger: ".s12",
      scrub: true,
      start: "100% 50%",
      end: "100% 50%",
      toggleActions: "play none reverse none",
    },
    display: "none",
    ease: "expo",
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
      start: "0% 50%",
      end: "40% 70%",
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    ease: "expo",
  },
  {
    scrollTrigger: {
      trigger: ".s13",
      scrub: true,
      start: "0% 50%",
      end: "40% 70%",
      toggleActions: "play none reverse none",
    },
    opacity: 1,
    ease: "expo",
  },
  2
);

gsap.from(
  ".slide--33 .slide--33__img2",
  {
    scrollTrigger: {
      trigger: ".s13",
      scrub: true,
      start: "40% 80%",
      end: "80% 50%",
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    ease: "ease",
  },
  4
);

gsap.from(
  ".slide--33__content .rcol .s3_h3",
  {
    scrollTrigger: {
      trigger: ".s13",
      scrub: true,
      start: "0% 50%",
      end: "40% 60%",
      toggleActions: "play none reverse none",
    },
    x: "50vw",
    ease: "expo",
  },
  2
);

gsap.from(
  ".slide--33__content .rcol p",
  {
    scrollTrigger: {
      trigger: ".s13",
      scrub: true,
      start: "40% 50%",
      end: "80% 60%",
      toggleActions: "play none reverse none",
    },
    height: 0,
    opacity: 0,
    ease: "expo",
  },
  2
);

gsap.to(
  ".slide--33",
  {
    scrollTrigger: {
      trigger: ".s13",
      start: "80% 70%",
      end: "100% 20%",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    y: "-100vh",
    ease: "ease",
  },
  2
);

gsap.to(
  ".slide--33",
  {
    scrollTrigger: {
      trigger: ".s13",
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

// slide 3 4

gsap.from(
  ".slide--34__content",
  {
    scrollTrigger: {
      trigger: ".s14",
      start: "0% 50%",
      end: "50% 60%",
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    y: "100vh",
    ease: "expo",
  },
  2
);

gsap.fromTo(
  "#slide-34-img2",
  {
    scrollTrigger: {
      trigger: ".s14",
      start: "50% 50%",
      end: "80% 60%",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    opacity: 1,
    ease: "expo",
  },
  {
    scrollTrigger: {
      trigger: ".s14",
      start: "50% 50%",
      end: "80% 60%",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    ease: "ease",
  },
  2
);

gsap.to(
  ".slide--34",
  {
    scrollTrigger: {
      trigger: ".s14",
      start: "80% 70%",
      end: "100% 20%",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    y: "-100vh",
    ease: "ease",
  },
  2
);

gsap.to(
  ".slide--34",
  {
    scrollTrigger: {
      trigger: ".s14",
      scrub: true,
      start: "100% 50%",
      end: "100% 50%",
      toggleActions: "play none reverse none",
    },
    display: "none",
    ease: "expo",
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
      start: "0% 50%",
      end: "50% 60%",
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    y: "100vh",
    ease: "expo",
  },
  {
    scrollTrigger: {
      trigger: ".s15",
      scrub: true,
      start: "0% 50%",
      end: "50% 60%",
      toggleActions: "play none reverse none",
    },
    opacity: 1,
    y: "-20vh",
    ease: "expo",
  },
  2
);

gsap.fromTo(
  ".slide--35 .s3_text",
  {
    scrollTrigger: {
      trigger: ".s15",
      scrub: true,
      start: "0% 50%",
      end: "50% 60%",
      toggleActions: "play none reverse none",
    },
    y: "-20vh",
    transform: "scale(1)",
    ease: "ease",
  },
  {
    scrollTrigger: {
      trigger: ".s15",
      scrub: true,
      start: "50% 50%",
      end: "80% 60%",
      toggleActions: "play none reverse none",
    },
    y: "0vh",
    transform: "scale(0.6)",
    ease: "ease",
  },
  2
);

gsap.from(
  ".slide--35 .slide--35__img1",
  {
    scrollTrigger: {
      trigger: ".s15",
      scrub: true,
      start: "50% 50%",
      end: "80% 60%",
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    y: "-100vw",
    ease: "ease",
  },
  2
);

gsap.to(
  ".slide--35",
  {
    scrollTrigger: {
      trigger: ".s15",
      scrub: true,
      start: "80% 70%",
      end: "100% 20%",
      toggleActions: "play none reverse none",
    },
    y: "-100vw",
    opacity: 0,
    ease: "ease",
  },
  2
);

gsap.to(
  ".slide--35",
  {
    scrollTrigger: {
      trigger: ".s15",
      scrub: true,
      start: "100% 50%",
      end: "100% 50%",
      toggleActions: "play none reverse none",
    },
    display: "none",
    ease: "expo",
  },
  2
);

// slide 3 6

gsap.fromTo(
  ".slide--36 .pair-txt",
  {
    scrollTrigger: {
      trigger: ".s16",
      start: "0% 50%",
      end: "50% 60%",
      toggleActions: "play none reverse none",
      scrub: true,
    },
    opacity: 0,
    y: "100vh",
    marginTop: "10px",
    marginBottom: "10px",
    ease: "expo",
  },
  {
    scrollTrigger: {
      trigger: ".s16",
      start: "0% 50%",
      end: "50% 60%",
      toggleActions: "play none reverse none",
      scrub: true,
    },
    opacity: 1,
    marginTop: "10px",
    marginBottom: "10px",
    y: "0vh",
    ease: "expo",
  },
  2
);

gsap.fromTo(
  ".slide--36 .pair-txt p",
  {
    scrollTrigger: {
      trigger: ".s16",
      start: "0% 50%",
      end: "50% 60%",
      toggleActions: "play none reverse none",
      scrub: true,
    },
    marginTop: "10px",
    marginBottom: "10px",
    transform: "scale(1)",
    ease: "ease",
  },
  {
    scrollTrigger: {
      trigger: ".s16",
      start: "50% 50%",
      end: "80% 60%",
      toggleActions: "play none reverse none",
      scrub: true,
    },
    marginTop: "0px",
    marginBottom: "0px",
    transform: "scale(0.8)",
    ease: "ease",
  },
  2
);

gsap.fromTo(
  ".slide--36 .slide--36__img1",
  {
    scrollTrigger: {
      trigger: ".s16",
      start: "0% 50%",
      end: "50% 60%",
      scrub: true,
    },
    opacity: 0,
    maxHeight: "0vh",
    ease: "ease",
  },
  {
    scrollTrigger: {
      trigger: ".s16",
      start: "50% 50%",
      end: "80% 60%",
      scrub: true,
    },
    opacity: 1,
    maxHeight: "90vh",
    ease: "ease",
  },
  2
);

gsap.to(
  ".slide--36",
  {
    scrollTrigger: {
      trigger: ".s16",
      start: "80% 70%",
      end: "100% 20%",
      scrub: true,
    },
    opacity: 0,
    y: "-100vh",
    ease: "ease",
  },
  2
);

gsap.to(
  ".slide--36",
  {
    scrollTrigger: {
      trigger: ".s16",
      scrub: true,
      start: "100% 50%",
      end: "100% 50%",
      toggleActions: "play none reverse none",
    },
    display: "none",
    ease: "expo",
  },
  2
);

// slide 3 7

gsap.from(
  ".slide--37 .col-txt",
  {
    scrollTrigger: {
      trigger: ".s17",
      start: "0% 50%",
      end: "50% 60%",
      scrub: true,
    },
    opacity: 0,
    ease: "expo",
  },
  2
);

gsap.fromTo(
  ".slide--37 .imgl",
  {
    scrollTrigger: {
      trigger: ".s17",
      start: "0% 50%",
      end: "50% 60%",
      scrub: true,
    },
    opacity: 0,
    x: "-50vw",
    ease: "expo",
  },
  {
    scrollTrigger: {
      trigger: ".s17",
      start: "0% 50%",
      end: "50% 60%",
      scrub: true,
    },
    opacity: 1,
    x: "0vw",
    ease: "expo",
  },
  2
);

gsap.fromTo(
  ".slide--37 .imgr",
  {
    scrollTrigger: {
      trigger: ".s17",
      start: "0% 50%",
      end: "50% 60%",
      scrub: true,
    },
    opacity: 0,
    x: "50vw",
    ease: "expo",
  },
  {
    scrollTrigger: {
      trigger: ".s17",
      start: "0% 50%",
      end: "50% 60%",
      scrub: true,
    },
    opacity: 1,
    x: "0vw",
    ease: "expo",
  },
  2
);

gsap.to(
  ".txt-1",
  {
    scrollTrigger: {
      trigger: ".s17",
      start: "50% 50%",
      end: "80% 60%",
      scrub: true,
    },
    opacity: 0,
    height: 0,
    ease: "expo",
  },
  2
);

gsap.from(
  ".txt-2",
  {
    scrollTrigger: {
      trigger: ".s17",
      start: "50% 50%",
      end: "80% 60%",
      scrub: true,
    },
    opacity: 0,
    height: 0,
    ease: "expo",
  },
  2
);

gsap.to(
  ".slide--37",
  {
    scrollTrigger: {
      trigger: ".s17",
      scrub: true,
      start: "80% 70%",
      end: "100% 20%",
      toggleActions: "play none reverse none",
    },
    y: "-100vh",
    opacity: 0,
    ease: "ease",
  },
  2
);

gsap.to(
  ".slide--37",
  {
    scrollTrigger: {
      trigger: ".s17",
      scrub: true,
      start: "100% 50%",
      end: "100% 50%",
      toggleActions: "play none reverse none",
    },
    display: "none",
    ease: "expo",
  },
  2
);

// slide 3 8

gsap.fromTo(
  ".slide--38 .s3_text",
  {
    scrollTrigger: {
      trigger: ".s18",
      start: "0% 50%",
      end: "50% 60%",
      scrub: true,
    },
    opacity: 0,
    y: "100vw",
    ease: "expo",
  },
  {
    scrollTrigger: {
      trigger: ".s18",
      start: "0% 50%",
      end: "50% 60%",
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
      start: "50% 50%",
      end: "80% 60%",
      scrub: true,
    },
    opacity: 0,
    maxHeight: "0vh",
    y: "100vh",
    ease: "ease",
  },
  2
);

gsap.to(
  ".slide--38",
  {
    scrollTrigger: {
      trigger: ".s18",
      start: "80% 70%",
      end: "100% 20%",
      scrub: true,
    },
    y: "-100vh",
    opacity: 0,
    ease: "ease",
  },
  2
);

gsap.to(
  ".slide--38",
  {
    scrollTrigger: {
      trigger: ".s18",
      scrub: true,
      start: "100% 50%",
      end: "100% 50%",
      toggleActions: "play none reverse none",
    },
    display: "none",
    ease: "expo",
  },
  2
);

// slide 3 9

gsap.fromTo(
  ".slide--39 .pair-txt",
  {
    scrollTrigger: {
      trigger: ".s19",
      start: "0% 50%",
      end: "50% 60%",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    y: "200vh",
    ease: "expo",
  },
  {
    scrollTrigger: {
      trigger: ".s19",
      start: "0% 50%",
      end: "50% 60%",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    y: "-20vh",
    opacity: 1,
    ease: "expo",
  },
  2
);

gsap.fromTo(
  ".slide--39 .pair-txt",
  {
    scrollTrigger: {
      trigger: ".s19",
      start: "0% 50%",
      end: "50% 60%",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    y: "-20vh",
    transform: "scale(1)",
    ease: "expo",
  },
  {
    scrollTrigger: {
      trigger: ".s19",
      start: "50% 50%",
      end: "80% 60%",
      toggleActions: "play none reverse none",
      scrub: true,
    },
    transform: "scale(0.8)",
    y: "0vh",
    ease: "expo",
  },
  2
);

gsap.from(
  ".slide--39 .slide--39__img1",
  {
    scrollTrigger: {
      trigger: ".s19",
      start: "50% 50%",
      end: "80% 60%",
      toggleActions: "play none reverse none",
      scrub: true,
    },
    opacity: 0,
    y: "-50vw",
    ease: "ease",
  },
  2
);

gsap.to(
  ".slide--39",
  {
    scrollTrigger: {
      trigger: ".s19",
      scrub: true,
      start: "80% 70%",
      end: "100% 20%",
      toggleActions: "play none reverse none",
    },
    y: "-100vh",
    ease: "ease",
  },
  2
);

gsap.to(
  ".slide--39",
  {
    scrollTrigger: {
      trigger: ".s19",
      scrub: true,
      start: "100% 50%",
      end: "100% 50%",
      toggleActions: "play none reverse none",
    },
    display: "none",
    ease: "expo",
  },
  2
);

// slide 3 10

gsap.from(
  ".slide--310 .imgl",
  {
    scrollTrigger: {
      trigger: ".s20",
      start: "0% 50%",
      end: "50% 60%",
      scrub: true,
    },
    opacity: 0,
    x: "-50vw",
    ease: "expo",
  },
  2
);
gsap.from(
  ".slide--310 .imgr",
  {
    scrollTrigger: {
      trigger: ".s20",
      start: "0% 50%",
      end: "50% 60%",
      scrub: true,
    },
    opacity: 0,
    x: "50vw",
    ease: "expo",
  },
  2
);
gsap.from(
  ".slide--310 .col-txt",
  {
    scrollTrigger: {
      trigger: ".s20",
      start: "50% 50%",
      end: "80% 60%",
      scrub: true,
    },
    opacity: 0,
    y: "50vh",
    ease: "expo",
  },
  2
);

gsap.fromTo(
  ".slide--310 .col-sm",
  {
    scrollTrigger: {
      trigger: ".s20",
      start: "50% 50%",
      end: "80% 60%",
      scrub: true,
    },
    width: "65vw",
    ease: "expo",
  },
  {
    scrollTrigger: {
      trigger: ".s20",
      start: "50% 50%",
      end: "80% 60%",
      scrub: true,
    },
    width: "60vw",
    ease: "expo",
  },
  2
);

gsap.to(
  ".slide--310",
  {
    scrollTrigger: {
      trigger: ".s20",
      scrub: true,
      start: "80% 70%",
      end: "100% 20%",
      toggleActions: "play none reverse none",
    },
    y: "-100vh",
    opacity: 0,
    ease: "ease",
  },
  2
);

gsap.to(
  ".slide--310",
  {
    scrollTrigger: {
      trigger: ".s20",
      scrub: true,
      start: "100% 50%",
      end: "100% 50%",
      toggleActions: "play none reverse none",
    },
    display: "none",
    ease: "expo",
  },
  2
);

// slide 3 11

gsap.from(
  ".slide--311 .s3_h3",
  {
    scrollTrigger: {
      trigger: ".s21",
      start: "0% 50%",
      end: "50% 60%",
      scrub: true,
    },
    opacity: 0,
    ease: "ease",
  },
  2
);
gsap.to(
  ".slide--311",
  {
    scrollTrigger: {
      trigger: ".s21",
      scrub: true,
      start: "80% 70%",
      end: "100% 20%",
      toggleActions: "play none reverse none",
    },
    y: "-100vh",
    ease: "ease",
  },
  2
);
gsap.to(
  ".slide--311",
  {
    scrollTrigger: {
      trigger: ".s21",
      scrub: true,
      start: "100% 50%",
      end: "100% 50%",
      toggleActions: "play none reverse none",
    },
    display: "none",
    ease: "expo",
  },
  2
);

// slide 3 11
gsap.from(
  ".slide--312",
  {
    scrollTrigger: {
      trigger: ".s22",
      start: "10% 80%",
      end: "20% 90%",
      toggleActions: "play none reverse none",
      scrub: true,
    },
    opacity: 0,
    y: "100vh",
    ease: "expo",
  },
  2
);

gsap.fromTo(
  ".slide--312 .nw",
  {
    scrollTrigger: {
      trigger: ".s22",
      start: "0% 120%",
      end: "10% 80%",
      toggleActions: "play none reverse none",
      scrub: true,
    },
    opacity: 0,
    transform: "scale(1) rotateY(0deg)",
    y: "100%",
    x: "100vw",
    ease: "expo",
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
    ease: "expo",
    transform: "scale(1) rotateY(0deg)",
    x: "0vw",
    y: "0%",
    // clearProps: "all"
  },
  2
);

gsap.fromTo(
  ".slide--312 .nred",
  {
    scrollTrigger: {
      trigger: ".s22",
      start: "0% 120%",
      end: "10% 80%",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    transform: "scale(1) ",
    y: "100%",
    x: "-100vw",
    ease: "expo",
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
    ease: "expo",
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
    ease: "ease",
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
    transform: "scale(2) ",
    ease: "ease",
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
    transform: "scale(2) ",
    ease: "ease",
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
    ease: "ease",
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
      end: "30% 40%",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    x: "10vw",
    y: "-50%",
    transform: "scale(4) rotateY(0deg)",
    ease: "ease",
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
    ease: "ease",
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
    ease: "ease",
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
    ease: "ease",
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
    ease: "power4.in",
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
    ease: "power4.in",
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

    ease: "ease",
    transform: "scale(1) rotateY(0deg)",
    x: "0vw",
    y: "0%",
    // clearProps: "all"
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
    ease: "ease",
    // clearProps: "all"
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
    ease: "ease",
    // clearProps: "all"
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
    transform: "scale(3) rotateY(0deg)",
    ease: "ease",
    // clearProps: "all"
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
    transform: "scale(3) rotateY(0deg)",
    ease: "ease",
    // clearProps: "all"
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
    ease: "ease",
    // clearProps: "all"
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
    ease: "ease",
    // clearProps: "all"
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
    transform: "scale(10) rotateY(180deg) ",
    ease: "ease",
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
    ease: "ease",
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
    ease: "ease",
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
    ease: "ease",
  },
  2
);

// slide 3 13 1
gsap.from(
  ".slide--3131 .imgl",
  {
    scrollTrigger: {
      trigger: ".s231",
      start: "0% 50%",
      end: "50% 60%",
      scrub: true,
    },
    opacity: 0,
    y: "50vh",
    ease: "expo",
  },
  2
);

gsap.to(
  ".slide--3131",
  {
    scrollTrigger: {
      trigger: ".s231",
      scrub: true,
      start: "50% 60%",
      end: "100% 50%",
      toggleActions: "play none reverse none",
    },
    x: "-100vw",
    width: "0vw",
    ease: "expo",
  },
  2
);

gsap.to(
  ".slide--3131",
  {
    scrollTrigger: {
      trigger: ".s231",
      scrub: true,
      start: "100% 50%",
      end: "100% 50%",
      toggleActions: "play none reverse none",
    },
    display: "none",
    ease: "expo",
  },
  2
);

// slide 3 13

gsap.from(
  ".slide--313 .imgr",
  {
    scrollTrigger: {
      trigger: ".s23",
      scrub: true,
      start: "0% 50%",
      end: "50% 60%",
      toggleActions: "play none reverse none",
    },
    maxWidth: "0vw",
    // x: "100vh",
    opacity: 0,
    ease: "ease",
  },
  2
);

gsap.to(
  ".slide--313",
  {
    scrollTrigger: {
      trigger: ".s23",
      scrub: true,
      start: "50% 70%",
      end: "100% 20%",
      toggleActions: "play none reverse none",
    },
    y: "-100vh",
    opacity: 0,
    ease: "ease",
  },
  2
);
gsap.to(
  ".slide--313",
  {
    scrollTrigger: {
      trigger: ".s23",
      scrub: true,
      start: "100% 50%",
      end: "100% 50%",
      toggleActions: "play none reverse none",
    },
    display: "none",
    ease: "expo",
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
      start: "0% 50%",
      end: "50% 60%",
      toggleActions: "play none reverse none",
    },
    x: "-200vw",
    opacity: 0,
  },
  {
    scrollTrigger: {
      trigger: ".s24",
      scrub: true,
      start: "0% 50%",
      end: "50% 60%",
      toggleActions: "play none reverse none",
    },
    x: "0vw",
    opacity: 1,
    ease: "expo",
  },
  2
);

gsap.fromTo(
  ".slide--314 .gal-3",
  {
    scrollTrigger: {
      trigger: ".s24",
      scrub: true,
      start: "50% 50%",
      end: "80% 60%",
      toggleActions: "play none reverse none",
    },
    transform: "scale(1)",
    ease: "expo",
  },
  {
    scrollTrigger: {
      trigger: ".s24",
      scrub: true,
      start: "50% 50%",
      end: "80% 60%",
      toggleActions: "play none reverse none",
    },
    transform: "scale(0.9)",
    ease: "expo",
  },
  2
);

gsap.from(
  ".slide--314 .s3_h2",
  {
    scrollTrigger: {
      trigger: ".s24",
      scrub: true,
      start: "50% 60%",
      end: "50 30%",
      toggleActions: "play none reverse none",
    },
    y: "50vh",
    opacity: 0,
    ease: "expo",
  },
  2
);

gsap.to(
  ".slide--314",
  {
    scrollTrigger: {
      trigger: ".s24",
      scrub: true,
      start: "50% 30%",
      end: "100% 20%",
      toggleActions: "play none reverse none",
    },
    y: "-100vh",
    opacity: 0,
    ease: "ease",
  },
  2
);
gsap.to(
  ".slide--314",
  {
    scrollTrigger: {
      trigger: ".s24",
      scrub: true,
      start: "100% 50%",
      end: "100% 50%",
      toggleActions: "play none reverse none",
    },
    display: "none",
    ease: "expo",
  },
  2
);

// slide 3 15

gsap.from(
  ".slide--315 .s3_h3",
  {
    scrollTrigger: {
      trigger: ".s25",
      start: "0% 50%",
      end: "50% 60%",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    y: "50vh",
    ease: "expo",
  },
  2
);

gsap.from(
  ".slide--315 .slide--315__img1",
  {
    scrollTrigger: {
      trigger: ".s25",
      start: "50% 50%",
      end: "80% 60%",
      scrub: true,
    },
    width: "0vw",
    opacity: 0,
    ease: "expo",
  },
  2
);

gsap.to(
  ".slide--315",
  {
    scrollTrigger: {
      trigger: ".s25",
      scrub: true,
      start: "80% 60%",
      end: "100% 20%",
      toggleActions: "play none reverse none",
    },
    y: "-100vh",
    ease: "ease",
  },
  2
);
gsap.to(
  ".slide--315",
  {
    scrollTrigger: {
      trigger: ".s25",
      scrub: true,
      start: "100% 50%",
      end: "100% 50%",
      toggleActions: "play none reverse none",
    },
    display: "none",
    ease: "expo",
  },
  2
);

// slide 3 16

gsap.from(
  ".slide--316 .s3_h3",
  {
    scrollTrigger: {
      trigger: ".s26",
      start: "0% 50%",
      end: "50% 60%",
      scrub: true,
    },
    opacity: 0,
    y: "100vh",
    ease: "expo",
  },
  2
);

gsap.to(
  ".slide--316",
  {
    scrollTrigger: {
      trigger: ".s26",
      scrub: true,
      start: "70% 70%",
      end: "100% 20%",
      toggleActions: "play none reverse none",
    },
    y: "-100vh",
    opacity: 0,
    ease: "ease",
  },
  2
);
gsap.to(
  ".slide--316",
  {
    scrollTrigger: {
      trigger: ".s26",
      scrub: true,
      start: "100% 50%",
      end: "100% 50%",
      toggleActions: "play none reverse none",
    },
    display: "none",
    ease: "expo",
  },
  2
);

// slide 3 17

gsap.fromTo(
  ".slide--317 .slide--317__img1",
  {
    scrollTrigger: {
      trigger: ".s27",
      start: "0% 50%",
      end: "50% 60%",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    y: "100vh",
    transform: "scale(1.3)",
    ease: "expo",
  },
  {
    scrollTrigger: {
      trigger: ".s27",
      start: "0% 50%",
      end: "50% 60%",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    opacity: 1,
    y: "0vh",
    transform: "scale(1.3)",
    ease: "expo",
  },
  2
);

gsap.fromTo(
  ".slide--317 .slide--317__img1",
  {
    scrollTrigger: {
      trigger: ".s27",
      start: "0% 50%",
      end: "50% 60%",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    y: "0vh",
    transform: "scale(1.3)",
    ease: "ease",
  },
  {
    scrollTrigger: {
      trigger: ".s27",
      start: "50% 50%",
      end: "80% 60%",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    transform: "scale(1)",
    y: "0vh",
    ease: "ease",
  },
  2
);

gsap.from(
  ".slide--317 .s3_text",
  {
    scrollTrigger: {
      trigger: ".s27",
      start: "50% 50%",
      end: "80% 60%",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    y: "100vh",
    ease: "expo",
  },
  2
);

gsap.to(
  ".slide--317",
  {
    scrollTrigger: {
      trigger: ".s27",
      scrub: true,
      start: "80% 60%",
      end: "100% 20%",
      toggleActions: "play none reverse none",
    },
    y: "-100vh",
    ease: "ease",
  },
  2
);
gsap.to(
  ".slide--317",
  {
    scrollTrigger: {
      trigger: ".s27",
      scrub: true,
      start: "100% 50%",
      end: "100% 50%",
      toggleActions: "play none reverse none",
    },
    display: "none",
    ease: "expo",
  },
  2
);

// slide 3 18

gsap.from(
  ".slide--318 .p1",
  {
    scrollTrigger: {
      trigger: ".s28",
      start: "10% 50%",
      end: "50% 60%",
      scrub: true,
    },
    opacity: 0,
    ease: "ease",
  },
  2
);

gsap.from(
  ".slide--318 .p2",
  {
    scrollTrigger: {
      trigger: ".s28",
      start: "50% 50%",
      end: "90% 60%",
      scrub: true,
    },
    opacity: 0,
    height: 0,
    ease: "ease",
  },
  2
);
