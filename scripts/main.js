// document.addEventListener("DOMContentLoaded", function () {
//   let isFirstScroll = true;

//   // window.addEventListener("scroll", function () {
//   //   if (isFirstScroll) {
//   //     const bg = document.querySelector(".slide--m0__img");
//   //     if (bg) {
//   //       // bg.classList.add("blur10");
//   //       bg.style.filter = "blur(10px)";
//   //     }
//   //     const title = document.querySelector(".slide--m0__title");
//   //     // if (title) {
//   //     //   // title.classList.remove("mv-to-bottom");
//   //     //   title.style.transform = "translateY(0)";
//   //     // }
//   //     const subtitle = document.querySelector(".slide--m0__subtitle");
//   //     if (subtitle) {
//   //       // subtitle.classList.remove("hide-to-bottom");
//   //       subtitle.style.transform = "translateY(0)";
//   //       subtitle.style.opacity = "1";
//   //     }
//   //     const header = document.querySelector(".header");
//   //     if (header) {
//   //       // header.classList.remove("hide-to-top");
//   //       header.style.transform = "translateY(0)";
//   //       header.style.opacity = "1";
//   //     }
//   //     console.log("first scroll");
//   //     isFirstScroll = false;
//   //   }
//   // });

//   const section1 = document.getElementById("slide-m1");
//   const observer1 = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.intersectionRatio > 0) {
//           // Находим дочерние элементы с нужными классами и удаляем их
//           const imgElement = entry.target.querySelector(".hide-to-left");
//           const contentElement = entry.target.querySelector(".hide-to-right");

//           if (imgElement) {
//             // imgElement.classList.remove("hide-to-left");
//             imgElement.style.transform = "translateX(0)";
//             imgElement.style.opacity = "1";
//           }
//           if (contentElement) {
//             // contentElement.classList.remove("hide-to-right");
//             contentElement.style.transform = "translateX(0)";
//             contentElement.style.opacity = "1";
//           }

//           observer1.unobserve(section1);
//         }
//       });
//     },
//     { threshold: 0.3 }
//   );

//   observer1.observe(section1);

//   const section2 = document.getElementById("slide-m2");
//   const observer2 = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.intersectionRatio > 0) {
//           const elementsToAnimate = Array.from(
//             entry.target.querySelectorAll(".hide-to-right")
//           );
//           elementsToAnimate.forEach((element, index) => {
//             setTimeout(() => {
//               //   element.classList.remove("hide-to-right");
//               element.style.transform = "translateX(0)";
//               element.style.opacity = "1";
//             }, index * 500);
//           });

//           observer2.unobserve(section2);
//         }
//       });
//     },
//     { threshold: 0.3 }
//   );

//   observer2.observe(section2);

//   const section3 = document.getElementById("slide-m3");
//   const observer3 = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.intersectionRatio > 0) {
//           const elementsToAnimate = Array.from(
//             entry.target.querySelectorAll(".hide-to-bottom")
//           );
//           elementsToAnimate.forEach((element, index) => {
//             setTimeout(() => {
//               //   element.classList.remove("hide-to-bottom");
//               element.style.transform = "translateY(0)";
//               element.style.opacity = "1";
//             }, index * 500);
//           });

//           observer3.unobserve(section3);
//         }
//       });
//     },
//     { threshold: 0.3 }
//   );

//   observer3.observe(section3);
// });

const {
  gsap: { timeline, set },
  gsap,
  ScrollTrigger,
} = window;

ScrollTrigger.defaults({
  toggleActions: "restart none reverse none",
});

gsap.registerPlugin(ScrollTrigger);

gsap.to(
  ".slide--m0 .slide--m0__title",
  {
    scrollTrigger: {
      trigger: ".s01",
      start: "55% 50%",
      end: "65% 60%",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    y: 0,
    ease: "expo",
  },
  2
);
gsap.to(
  ".slide--m0 .slide--m0__subtitle",
  {
    scrollTrigger: {
      trigger: ".s01",
      start: "55% 50%",
      end: "65% 60%",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    y: 0,
    opacity: 1,
    ease: "expo",
  },
  2
);
gsap.to(
  ".slide--m0 .slide--m0__img",
  {
    scrollTrigger: {
      trigger: ".s01",
      start: "55% 50%",
      end: "65% 60%",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    filter: "blur(10px)",
    ease: "expo",
  },
  2
);

gsap.to(
  ".slide--m0",
  {
    scrollTrigger: {
      trigger: ".s01",
      scrub: true,
      start: "90% 50%",
      end: "100% 50%",
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    // y: "-100vh",
    ease: "expo.in",
  },
  2
);


gsap.to(
  ".slide--m0",
  {
    scrollTrigger: {
      trigger: ".s01",
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


gsap.to(
  ".slide--m1 .hide-to-hide",
  {
    scrollTrigger: {
      trigger: ".s02",
      start: "5% 50%",
      end: "15% 60%",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    x: 0,
    opacity: 1,
    ease: "expo",
  },
  2
);

gsap.to(
  ".slide--m1 .hide-to-left",
  {
    scrollTrigger: {
      trigger: ".s02",
      start: "25% 50%",
      end: "45% 60%",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    x: 0,
    opacity: 1,
    ease: "expo",
  },
  2
);


gsap.to(
  ".slide--m1",
  {
    scrollTrigger: {
      trigger: ".s02",
      scrub: true,
      start: "90% 50%",
      end: "100% 50%",
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    y: "-50vh",
    ease: "expo.in",
  },
  2
);


gsap.to(
  ".slide--m1",
  {
    scrollTrigger: {
      trigger: ".s02",
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

gsap.to(
  ".slide--m2 .sk1",
  {
    scrollTrigger: {
      trigger: ".s03",
      start: "5% 50%",
      end: "20% 60%",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    x: 0,
    opacity: 1,
    ease: "expo",
  },
  2
);
gsap.to(
  ".slide--m2 .sk2",
  {
    scrollTrigger: {
      trigger: ".s03",
      start: "20% 50%",
      end: "40% 60%",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    x: 0,
    opacity: 1,
    ease: "expo",
  },
  2
);

gsap.to(
  ".slide--m2 .sk3",
  {
    scrollTrigger: {
      trigger: ".s03",
      start: "40% 50%",
      end: "60% 60%",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    x: 0,
    opacity: 1,
    ease: "expo",
  },
  2
);

gsap.to(
  ".slide--m2",
  {
    scrollTrigger: {
      trigger: ".s03",
      scrub: true,
      start: "90% 50%",
      end: "100% 50%",
      toggleActions: "play none reverse none",
    },
    opacity: 0,
    y: "-50vh",
    ease: "expo.in",
  },
  2
);


gsap.to(
  ".slide--m2",
  {
    scrollTrigger: {
      trigger: ".s03",
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

gsap.to(
  ".slide--m3 .sk1",
  {
    scrollTrigger: {
      trigger: ".s04",
      start: "5% 50%",
      end: "20% 60%",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    y: 0,
    opacity: 1,
    ease: "expo",
  },
  2
);
gsap.to(
  ".slide--m3 .sk2",
  {
    scrollTrigger: {
      trigger: ".s04",
      start: "20% 50%",
      end: "40% 60%",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    y: 0,
    opacity: 1,
    ease: "expo",
  },
  2
);

gsap.to(
  ".slide--m3 .sk3",
  {
    scrollTrigger: {
      trigger: ".s04",
      start: "40% 50%",
      end: "60% 60%",
      scrub: true,
      toggleActions: "play none reverse none",
    },
    y: 0,
    opacity: 1,
    ease: "expo",
  },
  2
);