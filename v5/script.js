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
     RESPONSIVE
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
     SCREEN 02 — ELEMENTS
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


  /* SCROLL CUE */

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
     SCREEN 02 — DESKTOP
     RESTAURADO COMO ESTAVA
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

      /* indicador começa */

      .to(".tools-scroll-progress i", {
        scaleX: 0.35,
        duration: 0.35,
        ease: "none"
      })


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


      /* ferramentas aparecem */

      .to(
        toolWords,
        {
          autoAlpha: 0.46,
          duration: 0.34,
          stagger: 0.025
        },
        "-=0.14"
      )


      /* progresso */

      .to(".tools-scroll-progress i", {
        scaleX: 0.72,
        duration: 0.30,
        ease: "none"
      })


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


      /* barra completa */

      .to(".tools-scroll-progress i", {
        scaleX: 1,
        duration: 0.28,
        ease: "none"
      })


      /* indicador sai */

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


      /* MAIS FERRAMENTAS */

      .to(titleParts[0], {
        autoAlpha: 1,
        y: 0,
        duration: 0.48
      })


      /* NÃO SIGNIFICAM */

      .to(
        titleParts[1],
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.48
        },
        "-=0.12"
      )


      /* MAIS ESTRUTURA */

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


      /* respiro */

      .to({}, {
        duration: 0.45
      });

  });



  /* ======================================================
     SCREEN 02 — MOBILE
     BARRA LIGADA AO SCROLL REAL
  ====================================================== */

  mm.add("(max-width: 640px)", () => {

    const mobileWords = toolWords.filter(
      (word) => getComputedStyle(word).display !== "none"
    );


    const toolsMobileTimeline = gsap.timeline({

      scrollTrigger: {

        trigger: ".tools-section",

        start: "top top",

        end: "+=165%",

        pin: ".tools-stage",

        scrub: 0.65,

        anticipatePin: 1,

        invalidateOnRefresh: true,


        onUpdate: (self) => {

          const progress = self.progress;

          const cueProgress = Math.min(
            progress / 0.28,
            1
          );


          gsap.set(".tools-scroll-progress i", {
            scaleX: cueProgress
          });


          gsap.set(".tools-orbit-ring-1", {
            scale: 1 + cueProgress * 1.5,
            autoAlpha:
              0.8 - cueProgress * 0.68
          });


          gsap.set(".tools-orbit-ring-2", {
            scale: 1 + cueProgress * 2.1,
            autoAlpha:
              0.45 - cueProgress * 0.42
          });


          let cueOpacity = 1;


          if (progress > 0.22) {

            cueOpacity =
              1 -
              Math.min(
                (progress - 0.22) / 0.10,
                1
              );

          }


          gsap.set(".tools-scroll-cue", {
            autoAlpha: cueOpacity,
            scale: 1 + cueProgress * 0.04
          });

        },


        onLeave: () => {

          gsap.set(".tools-scroll-cue", {
            autoAlpha: 0
          });

        }

      }

    });


    toolsMobileTimeline

      /* ferramentas */

      .to(
        mobileWords,
        {
          autoAlpha: 0.40,
          duration: 0.32,
          stagger: 0.025
        }
      )


      /* respiro inicial */

      .to(
        {},
        {
          duration: 0.58
        }
      )


      /* kicker */

      .to(
        ".tools-kicker",
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.32
        }
      )


      /* MAIS FERRAMENTAS */

      .to(
        titleParts[0],
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.42
        }
      )


      /* NÃO SIGNIFICAM */

      .to(
        titleParts[1],
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.42
        },
        "-=0.10"
      )


      /* MAIS ESTRUTURA */

      .to(
        titleParts[2],
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.45
        },
        "-=0.10"
      )


      /* ferramentas somem */

      .to(
        mobileWords,
        {
          x: (index) => [
            -42,
            38,
            -35,
            42,
            -38,
            40
          ][index] || 0,

          y: (index) => [
            -28,
            -36,
            18,
            14,
            34,
            38
          ][index] || 0,

          autoAlpha: 0.055,

          scale: 1.05,

          filter: "blur(3px)",

          duration: 0.72,

          stagger: 0.015
        },
        "-=0.22"
      )


      /* frase final */

      .to(
        ".tools-reveal",
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.42
        },
        "-=0.26"
      )


      /* respiro */

      .to(
        {},
        {
          duration: 0.34
        }
      );

  });



  /* ======================================================
     REFRESH
  ====================================================== */

  window.addEventListener("load", () => {

    ScrollTrigger.refresh();

  });

});
