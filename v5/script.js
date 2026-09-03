document.addEventListener("DOMContentLoaded", () => {

  gsap.registerPlugin(ScrollTrigger);

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;


  /* ======================================================
     REDUCED MOTION
  ====================================================== */

  if (reduceMotion) {

    gsap.set([
      ".hero-eyebrow",
      ".hero-line",
      ".hero-description",
      ".hero-actions",
      ".hero-pact",
      ".tools-kicker",
      ".tools-title > *",
      ".tools-reveal"
    ], {
      clearProps: "all",
      autoAlpha: 1
    });

    return;
  }


  /* ======================================================
     LENIS
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
     HERO VIDEO INTRO
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
     HERO INTRO
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
     HERO SCROLL INDICATOR
  ====================================================== */

  gsap.to(".scroll-line i", {
    y: 76,
    duration: 1.4,
    ease: "none",
    repeat: -1,
    repeatDelay: 0.2
  });



  /* ======================================================
     RESPONSIVE MOTION
  ====================================================== */

  const mm = gsap.matchMedia();



  /* ======================================================
     HERO — DESKTOP
  ====================================================== */

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
     HERO — MOBILE
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



  /* ======================================================
     SCREEN 02 — INITIAL STATE
  ====================================================== */

  const toolWords = gsap.utils.toArray(".tool-word");
  const titleParts = gsap.utils.toArray(".tools-title > *");


  gsap.set(".tools-kicker", {
    autoAlpha: 0,
    y: 18
  });


  gsap.set(titleParts, {
    autoAlpha: 0,
    y: 42
  });


  gsap.set(".tools-reveal", {
    autoAlpha: 0,
    y: 24
  });


  gsap.set(toolWords, {
    autoAlpha: 0.22
  });
/* SCROLL CUE INITIAL STATE */

gsap.set(".tools-scroll-cue", {
  autoAlpha: 1,
  scale: 1
});

gsap.set(".tools-scroll-progress i", {
  scaleX: 0
});

gsap.set(".tools-orbit-ring-1", {
  scale: 1,
  autoAlpha: 0.8
});

gsap.set(".tools-orbit-ring-2", {
  scale: 1,
  autoAlpha: 0.45
});


  /* ======================================================
     SCREEN 02 — DESKTOP CINEMATIC SCROLL
  ====================================================== */

  mm.add("(min-width: 641px)", () => {

    const wordX = [
      -150,
      130,
      -120,
      150,
      -130,
      150,
      90,
      -80
    ];


    const wordY = [
      -55,
      -70,
      40,
      20,
      65,
      70,
      -80,
      80
    ];


    const toolsTimeline = gsap.timeline({

      scrollTrigger: {

        trigger: ".tools-section",

        start: "top top",

        end: "+=180%",

        pin: ".tools-stage",

        scrub: 1,

        anticipatePin: 1,

        invalidateOnRefresh: true

      }

    });


    toolsTimeline

  /* usuário entende que existe algo para explorar */

  .to(".tools-scroll-progress i", {
    scaleX: 0.35,
    duration: 0.35,
    ease: "none"
  })


  /* núcleo começa a crescer */

  .to(
    ".tools-orbit-ring-1",
    {
      scale: 1.7,
      autoAlpha: 0.5,
      duration: 0.42,
      ease: "none"
    },
    "<"
  )


  .to(
    ".tools-orbit-ring-2",
    {
      scale: 2.1,
      autoAlpha: 0.22,
      duration: 0.42,
      ease: "none"
    },
    "<"
  )


  /* ferramentas ganham presença */

  .to(
    toolWords,
    {
      autoAlpha: 0.46,
      duration: 0.34,
      stagger: 0.025
    },
    "-=0.14"
  )


  /* progresso continua */

  .to(".tools-scroll-progress i", {
    scaleX: 0.72,
    duration: 0.30,
    ease: "none"
  })


  /* anéis crescem mais */

  .to(
    ".tools-orbit-ring-1",
    {
      scale: 2.5,
      autoAlpha: 0.22,
      duration: 0.30,
      ease: "none"
    },
    "<"
  )


  .to(
    ".tools-orbit-ring-2",
    {
      scale: 3.1,
      autoAlpha: 0.08,
      duration: 0.30,
      ease: "none"
    },
    "<"
  )


  /* progresso completa */

  .to(".tools-scroll-progress i", {
    scaleX: 1,
    duration: 0.28,
    ease: "none"
  })


  /* cue sai */

  .to(
    ".tools-scroll-cue",
    {
      autoAlpha: 0,
      scale: 1.08,
      duration: 0.28
    },
    "-=0.08"
  )


  /* kicker */

  .to(".tools-kicker", {
    autoAlpha: 1,
    y: 0,
    duration: 0.35
  })


  /* primeira linha */

  .to(titleParts[0], {
    autoAlpha: 1,
    y: 0,
    duration: 0.48
  })


  /* segunda linha */

  .to(
    titleParts[1],
    {
      autoAlpha: 1,
      y: 0,
      duration: 0.48
    },
    "-=0.12"
  )


  /* verde */

  .to(
    titleParts[2],
    {
      autoAlpha: 1,
      y: 0,
      duration: 0.52
    },
    "-=0.12"
  )


      /* ferramentas se afastam */

      .to(
        toolWords,
        {
          x: (index) => wordX[index] || 0,
          y: (index) => wordY[index] || 0,

          scale: 1.1,

          autoAlpha: 0.055,

          filter: "blur(7px)",

          duration: 0.95,

          stagger: 0.02
        },
        "-=0.3"
      )


      /* frase final */

      .to(
        ".tools-reveal",
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.48
        },
        "-=0.34"
      )


      /* pequeno respiro antes de liberar */

      .to({}, {
        duration: 0.45
      });


  });



  /* ======================================================
     SCREEN 02 — MOBILE CINEMATIC SCROLL
  ====================================================== */

  mm.add("(max-width: 640px)", () => {

    const wordXMobile = [
      -50,
      45,
      -40,
      50,
      -45,
      45
    ];


    const wordYMobile = [
      -35,
      -45,
      20,
      15,
      40,
      45
    ];


    const mobileWords = toolWords.filter(
      (word) => getComputedStyle(word).display !== "none"
    );


    const toolsMobileTimeline = gsap.timeline({

      scrollTrigger: {

        trigger: ".tools-section",

        start: "top top",

        end: "+=145%",

        pin: ".tools-stage",

        scrub: 0.85,

        anticipatePin: 1,

        invalidateOnRefresh: true

      }

    });


    toolsMobileTimeline

      .to(".tools-scroll-progress i", {
  scaleX: 0.4,
  duration: 0.28,
  ease: "none"
})

.to(
  ".tools-orbit-ring-1",
  {
    scale: 1.7,
    autoAlpha: 0.45,
    duration: 0.28
  },
  "<"
)

.to(
  ".tools-orbit-ring-2",
  {
    scale: 2.1,
    autoAlpha: 0.18,
    duration: 0.28
  },
  "<"
)

.to(mobileWords, {
  autoAlpha: 0.40,
  duration: 0.30,
  stagger: 0.025
})

.to(".tools-scroll-progress i", {
  scaleX: 1,
  duration: 0.38,
  ease: "none"
})

.to(
  ".tools-orbit-ring-1",
  {
    scale: 2.8,
    autoAlpha: 0.08,
    duration: 0.38
  },
  "<"
)

.to(
  ".tools-orbit-ring-2",
  {
    scale: 3.4,
    autoAlpha: 0,
    duration: 0.38
  },
  "<"
)

.to(
  ".tools-scroll-cue",
  {
    autoAlpha: 0,
    scale: 1.05,
    duration: 0.24
  },
  "-=0.12"
)


      .to(".tools-kicker", {
        autoAlpha: 1,
        y: 0,
        duration: 0.32
      })


      .to(titleParts[0], {
        autoAlpha: 1,
        y: 0,
        duration: 0.42
      })


      .to(titleParts[1], {
        autoAlpha: 1,
        y: 0,
        duration: 0.42
      }, "-=0.1")


      .to(titleParts[2], {
        autoAlpha: 1,
        y: 0,
        duration: 0.45
      }, "-=0.1")


      .to(
        mobileWords,
        {
          x: (index) => wordXMobile[index] || 0,
          y: (index) => wordYMobile[index] || 0,

          autoAlpha: 0.05,

          scale: 1.05,

          duration: 0.75,

          stagger: 0.015
        },
        "-=0.25"
      )


      .to(
        ".tools-reveal",
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.42
        },
        "-=0.28"
      )


      .to({}, {
        duration: 0.35
      });

  });



  /* ======================================================
     RECALCULATE
  ====================================================== */

  window.addEventListener("load", () => {

    ScrollTrigger.refresh();

  });

});
