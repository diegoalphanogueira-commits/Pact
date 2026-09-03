document.addEventListener("DOMContentLoaded", () => {

  gsap.registerPlugin(ScrollTrigger);

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;


  /* ======================================================
     REDUCED MOTION
  ====================================================== */

  if (reduceMotion) {
    return;
  }


  /* ======================================================
     LENIS — SMOOTH SCROLL
  ====================================================== */

  const lenis = new Lenis({
    lerp: 0.085,
    smoothWheel: true,
    wheelMultiplier: 0.9,
    touchMultiplier: 1
  });


  lenis.on("scroll", ScrollTrigger.update);


  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });


  gsap.ticker.lagSmoothing(0);



  /* ======================================================
     HEADER
  ====================================================== */

  gsap.from(".site-header", {
    y: -24,
    autoAlpha: 0,
    duration: 0.8,
    ease: "power3.out"
  });



  /* ======================================================
     HERO VIDEO — ENTRADA CINEMATOGRÁFICA
  ====================================================== */

  gsap.fromTo(
    ".hero-video",

    {
      scale: 1.08
    },

    {
      scale: 1.02,
      duration: 2.6,
      ease: "power2.out"
    }
  );



  /* ======================================================
     HERO CONTENT — INTRO
  ====================================================== */

  const heroIntro = gsap.timeline({
    defaults: {
      ease: "power3.out"
    }
  });


  heroIntro

    .from(".hero-eyebrow", {
      y: 18,
      autoAlpha: 0,
      duration: 0.65
    })

    .from(
      ".hero-line",
      {
        y: 38,
        autoAlpha: 0,
        duration: 0.85,
        stagger: 0.14
      },
      "-=0.28"
    )

    .from(
      ".hero-description",
      {
        y: 22,
        autoAlpha: 0,
        duration: 0.72
      },
      "-=0.42"
    )

    .from(
      ".hero-actions",
      {
        y: 18,
        autoAlpha: 0,
        duration: 0.68
      },
      "-=0.40"
    )

    .from(
      ".hero-pact",
      {
        y: 14,
        autoAlpha: 0,
        duration: 0.65
      },
      "-=0.32"
    );



  /* ======================================================
     SCROLL INDICATOR
  ====================================================== */

  gsap.to(".scroll-line i", {
    y: 76,
    duration: 1.4,
    ease: "none",
    repeat: -1,
    repeatDelay: 0.2
  });



  /* ======================================================
     DESKTOP SCROLL BEHAVIOUR
  ====================================================== */

  const mm = gsap.matchMedia();


  mm.add("(min-width: 641px)", () => {

    gsap.to(".hero-video", {
      scale: 1.09,
      yPercent: 3,

      ease: "none",

      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 1
      }
    });


    gsap.to(".hero-content", {
      y: -42,
      autoAlpha: 0.52,

      ease: "none",

      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 1
      }
    });

  });



  /* ======================================================
     MOBILE SCROLL BEHAVIOUR
  ====================================================== */

  mm.add("(max-width: 640px)", () => {

    gsap.to(".hero-video", {
      scale: 1.075,
      yPercent: 2,

      ease: "none",

      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 0.8
      }
    });


    gsap.to(".hero-content", {
      y: -20,
      autoAlpha: 0.68,

      ease: "none",

      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 0.8
      }
    });

  });

});
