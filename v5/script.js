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
   SCREEN 03 — PACT INTERACTION
====================================================== */

const pactNodes =
  document.querySelectorAll(".pact-node");

const pactPanels =
  document.querySelectorAll(".pact-panel-content");

const pactConnections =
  document.querySelectorAll(".pact-connection");


let activePillar = "p";
let pactIsChanging = false;



/* ======================================================
   INITIAL STATE
====================================================== */

pactNodes.forEach((node) => {

  const pillar =
    node.dataset.pillar;

  node.setAttribute(
    "aria-pressed",
    pillar === activePillar
      ? "true"
      : "false"
  );

});


const initialConnection =
  document.querySelector(
    `.pact-connection-${activePillar}`
  );


if (initialConnection) {
  initialConnection.classList.add("active");
}



/* ======================================================
   CHANGE PILLAR
====================================================== */

function changePactPillar(pillar) {

  /*
    não faz nada se clicar
    novamente no pilar atual
  */

  if (
    pillar === activePillar ||
    pactIsChanging
  ) {
    return;
  }


  const currentPanel =
    document.querySelector(
      ".pact-panel-content.active"
    );


  const nextPanel =
    document.querySelector(
      `.pact-panel-content[data-content="${pillar}"]`
    );


  const nextNode =
    document.querySelector(
      `.pact-node[data-pillar="${pillar}"]`
    );


  const nextConnection =
    document.querySelector(
      `.pact-connection-${pillar}`
    );


  if (
    !currentPanel ||
    !nextPanel ||
    !nextNode
  ) {
    return;
  }


  pactIsChanging = true;



  /* ====================================================
     BUTTON ACTIVE STATE
  ==================================================== */

  pactNodes.forEach((node) => {

    const isActive =
      node.dataset.pillar === pillar;


    node.classList.toggle(
      "active",
      isActive
    );


    node.setAttribute(
      "aria-pressed",
      isActive
        ? "true"
        : "false"
    );

  });



  /* ====================================================
     CONNECTION ACTIVE STATE
  ==================================================== */

  pactConnections.forEach(
    (connection) => {

      connection.classList.remove(
        "active"
      );

    }
  );


  if (nextConnection) {

    nextConnection.classList.add(
      "active"
    );

  }



  /* ====================================================
     NODE CLICK FEEDBACK
  ==================================================== */

  gsap.fromTo(
    nextNode.querySelector(
      ".pact-node-letter"
    ),
    {
      scale: 0.86
    },
    {
      scale: 1,
      duration: 0.46,
      ease: "back.out(1.8)"
    }
  );



  /* ====================================================
     CORE REACTION
  ==================================================== */

  gsap.fromTo(
    ".pact-core-inner",
    {
      scale: 0.94
    },
    {
      scale: 1,
      duration: 0.52,
      ease: "back.out(1.5)"
    }
  );


  gsap.fromTo(
    ".pact-core-ring-1",
    {
      scale: 0.93,
      autoAlpha: 0.5
    },
    {
      scale: 1,
      autoAlpha: 1,
      duration: 0.65,
      ease: "power3.out"
    }
  );


  gsap.fromTo(
    ".pact-core-ring-2",
    {
      scale: 1.08,
      autoAlpha: 0.35
    },
    {
      scale: 1,
      autoAlpha: 1,
      duration: 0.62,
      ease: "power3.out"
    }
  );



  /* ====================================================
     OLD PANEL OUT
  ==================================================== */

  gsap.to(
    currentPanel,
    {
      autoAlpha: 0,
      y: -14,

      duration: 0.22,

      ease: "power2.in",

      onComplete: () => {


        /* remove antigo */

        currentPanel.classList.remove(
          "active"
        );


        gsap.set(
          currentPanel,
          {
            clearProps:
              "opacity,visibility,transform"
          }
        );



        /* ativa novo */

        nextPanel.classList.add(
          "active"
        );


        const nextTitle =
          nextPanel.querySelector(
            ".pact-panel-main h3"
          );


        const nextDescription =
          nextPanel.querySelector(
            ".pact-panel-main p"
          );


        const nextIndex =
          nextPanel.querySelector(
            ".pact-panel-index"
          );


        const nextTags =
          nextPanel.querySelectorAll(
            ".pact-panel-tags span"
          );



        /* =================================================
           NEW PANEL ENTRANCE
        ================================================= */

        const panelTimeline =
          gsap.timeline({

            defaults: {
              ease: "power3.out"
            },

            onComplete: () => {

              pactIsChanging = false;

            }

          });


        panelTimeline

          .fromTo(
            nextPanel,
            {
              autoAlpha: 0
            },
            {
              autoAlpha: 1,
              duration: 0.18
            }
          )


          .fromTo(
            nextIndex,
            {
              autoAlpha: 0,
              x: -10
            },
            {
              autoAlpha: 1,
              x: 0,
              duration: 0.30
            },
            "-=0.08"
          )


          .fromTo(
            nextTitle,
            {
              autoAlpha: 0,
              y: 24
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.46
            },
            "-=0.12"
          )


          .fromTo(
            nextDescription,
            {
              autoAlpha: 0,
              y: 16
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.38
            },
            "-=0.25"
          )


          .fromTo(
            nextTags,
            {
              autoAlpha: 0,
              y: 10
            },
            {
              autoAlpha: 1,
              y: 0,

              duration: 0.32,

              stagger: 0.045
            },
            "-=0.18"
          );

      }

    }
  );


  activePillar = pillar;

}



/* ======================================================
   CLICK / TAP
====================================================== */

pactNodes.forEach((node) => {

  node.addEventListener(
    "click",
    () => {

      changePactPillar(
        node.dataset.pillar
      );

    }
  );

});

/* ======================================================
   SCREEN 03 — CINEMATIC ENTRANCE
====================================================== */

mm.add("(min-width: 641px)", () => {

  const pactIntroTimeline = gsap.timeline({

    scrollTrigger: {
      trigger: ".pact-system-section",
      start: "top 72%",
      end: "top 8%",
      scrub: 0.9,
      invalidateOnRefresh: true
    }

  });


  /* estado inicial */

  gsap.set(".pact-system-kicker", {
    autoAlpha: 0,
    y: 18
  });

  gsap.set(".pact-system-title", {
    autoAlpha: 0,
    y: 34
  });

  gsap.set(".pact-system-description", {
    autoAlpha: 0,
    y: 22
  });

  gsap.set(".pact-core-inner", {
    autoAlpha: 0,
    scale: 0.72
  });

  gsap.set(".pact-core-ring-1", {
    autoAlpha: 0,
    scale: 0.55
  });

  gsap.set(".pact-core-ring-2", {
    autoAlpha: 0,
    scale: 0.68
  });

  gsap.set(".pact-connection", {
    autoAlpha: 0,
    scale: 0
  });

  gsap.set(".pact-node", {
    autoAlpha: 0,
    scale: 0.84
  });

  gsap.set(".pact-panel", {
    autoAlpha: 0,
    x: 42
  });

  gsap.set(".pact-system-footer", {
    autoAlpha: 0,
    y: 18
  });


  /* construção */

  pactIntroTimeline

    .to(".pact-system-kicker", {
      autoAlpha: 1,
      y: 0,
      duration: 0.32
    })

    .to(".pact-system-title", {
      autoAlpha: 1,
      y: 0,
      duration: 0.55
    })

    .to(
      ".pact-system-description",
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.38
      },
      "-=0.22"
    )


    /* núcleo */

    .to(
      ".pact-core-inner",
      {
        autoAlpha: 1,
        scale: 1,
        duration: 0.58,
        ease: "back.out(1.45)"
      }
    )


    /* anéis */

    .to(
      ".pact-core-ring-2",
      {
        autoAlpha: 1,
        scale: 1,
        duration: 0.48
      },
      "-=0.30"
    )

    .to(
      ".pact-core-ring-1",
      {
        autoAlpha: 1,
        scale: 1,
        duration: 0.55
      },
      "-=0.34"
    )


    /* conexões */

    .to(
      ".pact-connection",
      {
        autoAlpha: 0.55,
        scale: 1,
        duration: 0.46,
        stagger: 0.07,
        ease: "power2.out"
      },
      "-=0.18"
    )


    /* quatro pilares */

    .to(
      ".pact-node",
      {
        autoAlpha: 1,
        scale: 1,
        duration: 0.42,
        stagger: 0.09,
        ease: "back.out(1.4)"
      },
      "-=0.24"
    )


    /* painel estratégico */

    .to(
      ".pact-panel",
      {
        autoAlpha: 1,
        x: 0,
        duration: 0.58,
        ease: "power3.out"
      },
      "-=0.15"
    )


    /* fechamento */

    .to(
      ".pact-system-footer",
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.34
      },
      "-=0.14"
    );

});

/* ======================================================
   SCREEN 03 — MOBILE ENTRANCE
====================================================== */

mm.add("(max-width: 640px)", () => {

  gsap.set(".pact-system-kicker", {
    autoAlpha: 0,
    y: 14
  });

  gsap.set(".pact-system-title", {
    autoAlpha: 0,
    y: 28
  });

  gsap.set(".pact-system-description", {
    autoAlpha: 0,
    y: 18
  });

  gsap.set(".pact-core", {
    autoAlpha: 0,
    scale: 0.78
  });

  gsap.set(".pact-node", {
    autoAlpha: 0,
    y: 16
  });

  gsap.set(".pact-panel", {
    autoAlpha: 0,
    y: 28
  });

  gsap.set(".pact-system-footer", {
    autoAlpha: 0,
    y: 16
  });


  const pactMobileEntrance = gsap.timeline({

    scrollTrigger: {
      trigger: ".pact-system-section",
      start: "top 78%",
      end: "top 18%",
      scrub: 0.75,
      invalidateOnRefresh: true
    }

  });


  pactMobileEntrance

    .to(".pact-system-kicker", {
      autoAlpha: 1,
      y: 0,
      duration: 0.28
    })

    .to(".pact-system-title", {
      autoAlpha: 1,
      y: 0,
      duration: 0.48
    })

    .to(
      ".pact-system-description",
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.34
      },
      "-=0.20"
    )

    .to(
      ".pact-core",
      {
        autoAlpha: 1,
        scale: 1,
        duration: 0.52,
        ease: "back.out(1.4)"
      }
    )

    .to(
      ".pact-node",
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.34,
        stagger: 0.07
      },
      "-=0.18"
    )

    .to(
      ".pact-panel",
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.46
      },
      "-=0.10"
    )

    .to(
      ".pact-system-footer",
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.30
      },
      "-=0.10"
    );

});

/* ======================================================
   SCREEN 04 — IMPLEMENTATION INTERACTION
====================================================== */

const implementationTabs =
  document.querySelectorAll(
    ".implementation-tab"
  );

const implementationPanels =
  document.querySelectorAll(
    ".implementation-panel"
  );

const implementationLetter =
  document.querySelector(
    ".implementation-letter"
  );


let activeImplementation = "p";
let implementationIsChanging = false;



/* ======================================================
   INITIAL ARIA STATE
====================================================== */

implementationTabs.forEach((tab) => {

  const pillar =
    tab.dataset.implementation;

  const isActive =
    pillar === activeImplementation;


  tab.setAttribute(
    "aria-selected",
    isActive
      ? "true"
      : "false"
  );

});



/* ======================================================
   CHANGE IMPLEMENTATION
====================================================== */

function changeImplementation(pillar) {

  if (
    pillar === activeImplementation ||
    implementationIsChanging
  ) {
    return;
  }


  const currentPanel =
    document.querySelector(
      ".implementation-panel.active"
    );


  const nextPanel =
    document.querySelector(
      `.implementation-panel[data-implementation-content="${pillar}"]`
    );


  const nextTab =
    document.querySelector(
      `.implementation-tab[data-implementation="${pillar}"]`
    );


  if (
    !currentPanel ||
    !nextPanel ||
    !nextTab ||
    !implementationLetter
  ) {
    return;
  }


  implementationIsChanging = true;



  /* ====================================================
     TAB ACTIVE STATE
  ==================================================== */

  implementationTabs.forEach((tab) => {

    const isActive =
      tab.dataset.implementation === pillar;


    tab.classList.toggle(
      "active",
      isActive
    );


    tab.setAttribute(
      "aria-selected",
      isActive
        ? "true"
        : "false"
    );

  });



  /* ====================================================
     TAB FEEDBACK
  ==================================================== */

  gsap.fromTo(
    nextTab.querySelector("strong"),
    {
      scale: 0.78,
      autoAlpha: 0.45
    },
    {
      scale: 1,
      autoAlpha: 1,

      duration: 0.42,

      ease: "back.out(1.7)"
    }
  );



  /* ====================================================
     GIANT LETTER
  ==================================================== */

  const letterTimeline =
    gsap.timeline();


  letterTimeline

    .to(
      implementationLetter,
      {
        autoAlpha: 0.08,

        scale: 0.82,

        y: -18,

        duration: 0.20,

        ease: "power2.in",

        onComplete: () => {

          implementationLetter.textContent =
            pillar.toUpperCase();

        }
      }
    )

    .fromTo(
      implementationLetter,
      {
        autoAlpha: 0.025,

        scale: 1.15,

        y: 24
      },
      {
        autoAlpha: 1,

        scale: 1,

        y: 0,

        duration: 0.62,

        ease: "power3.out"
      }
    );



  /* ====================================================
     CURRENT PANEL OUT
  ==================================================== */

  gsap.to(
    currentPanel,
    {
      autoAlpha: 0,

      y: -18,

      duration: 0.22,

      ease: "power2.in",

      onComplete: () => {


        /* remove painel atual */

        currentPanel.classList.remove(
          "active"
        );


        gsap.set(
          currentPanel,
          {
            clearProps:
              "opacity,visibility,transform"
          }
        );



        /* mostra próximo */

        nextPanel.classList.add(
          "active"
        );


        const nextHead =
          nextPanel.querySelector(
            ".implementation-panel-head"
          );


        const nextTitle =
          nextPanel.querySelector(
            ".implementation-panel-copy h3"
          );


        const nextDescription =
          nextPanel.querySelector(
            ".implementation-panel-copy p"
          );


        const nextCapabilities =
          nextPanel.querySelectorAll(
            ".implementation-capabilities span"
          );



        /* =================================================
           NEXT PANEL ENTRANCE
        ================================================= */

        const implementationTimeline =
          gsap.timeline({

            defaults: {
              ease: "power3.out"
            },

            onComplete: () => {

              implementationIsChanging =
                false;

            }

          });


        implementationTimeline

          /* painel */

          .fromTo(
            nextPanel,
            {
              autoAlpha: 0
            },
            {
              autoAlpha: 1,

              duration: 0.18
            }
          )


          /* índice + categoria */

          .fromTo(
            nextHead,
            {
              autoAlpha: 0,

              y: 10
            },
            {
              autoAlpha: 1,

              y: 0,

              duration: 0.30
            },
            "-=0.08"
          )


          /* headline */

          .fromTo(
            nextTitle,
            {
              autoAlpha: 0,

              y: 28
            },
            {
              autoAlpha: 1,

              y: 0,

              duration: 0.52
            },
            "-=0.10"
          )


          /* descrição */

          .fromTo(
            nextDescription,
            {
              autoAlpha: 0,

              y: 18
            },
            {
              autoAlpha: 1,

              y: 0,

              duration: 0.40
            },
            "-=0.27"
          )


          /* capacidades */

          .fromTo(
            nextCapabilities,
            {
              autoAlpha: 0,

              y: 12
            },
            {
              autoAlpha: 1,

              y: 0,

              duration: 0.32,

              stagger: 0.045
            },
            "-=0.18"
          );

      }

    }
  );


  activeImplementation = pillar;

}



/* ======================================================
   CLICK / TAP
====================================================== */

implementationTabs.forEach((tab) => {

  tab.addEventListener(
    "click",
    () => {

      changeImplementation(
        tab.dataset.implementation
      );

    }
  );

});

/* ======================================================
   SCREEN 05 — PRIORITY / DIAGNOSTIC STORY
====================================================== */

const priorityItems =
  gsap.utils.toArray(
    ".priority-diagnosis-item"
  );


const prioritySignal =
  document.querySelector(
    ".priority-path-signal"
  );


const priorityOriginCore =
  document.querySelector(
    ".priority-origin-core"
  );


const priorityPrescriptionTop =
  document.querySelector(
    ".priority-prescription-top"
  );


const priorityPrescriptionMain =
  document.querySelector(
    ".priority-prescription-main"
  );


const priorityPrescriptionActions =
  document.querySelector(
    ".priority-prescription-actions"
  );


const priorityPrescriptionResult =
  document.querySelector(
    ".priority-prescription-result"
  );



/* ======================================================
   HELPERS
====================================================== */

function clearPriorityState() {

  priorityItems.forEach((item) => {

    item.classList.remove(
      "active",
      "scanning"
    );

  });

}


function scanPriorityPillar(index) {

  clearPriorityState();


  if (priorityItems[index]) {

    priorityItems[index].classList.add(
      "scanning"
    );

  }

}


function resolvePriority() {

  clearPriorityState();


  const acquisition =
    document.querySelector(
      '.priority-diagnosis-item[data-priority="a"]'
    );


  if (acquisition) {

    acquisition.classList.add(
      "active"
    );

  }

}


function restorePriorityDefault() {

  resolvePriority();

}



/* ======================================================
   DESKTOP
====================================================== */

mm.add("(min-width: 641px)", () => {


  /*
    Prescrição existe visualmente,
    mas o conteúdo começa escondido.
  */

  gsap.set(
    [
      priorityPrescriptionTop,
      priorityPrescriptionMain,
      priorityPrescriptionActions,
      priorityPrescriptionResult
    ],
    {
      autoAlpha: 0
    }
  );


  gsap.set(
    priorityPrescriptionMain,
    {
      y: 28
    }
  );


  gsap.set(
    priorityPrescriptionActions,
    {
      y: 18
    }
  );


  gsap.set(
    priorityPrescriptionResult,
    {
      y: 14
    }
  );


  const priorityDesktopTimeline =
    gsap.timeline({

      scrollTrigger: {

        trigger: ".priority-flow",

        start: "top 14%",

        end: "+=210%",

        pin: true,

        scrub: 0.75,

        anticipatePin: 1,

        invalidateOnRefresh: true,


        onEnter: () => {

          clearPriorityState();

        },


        onEnterBack: () => {

          clearPriorityState();

        },


        onUpdate: (self) => {

          const progress =
            self.progress;


          /*
            0 → 14%
            sistema entrando
          */

          if (progress < 0.14) {

            clearPriorityState();

          }


          /*
            14 → 24%
            analisa P
          */

          else if (progress < 0.24) {

            scanPriorityPillar(0);

          }


          /*
            24 → 34%
            analisa A
          */

          else if (progress < 0.34) {

            scanPriorityPillar(1);

          }


          /*
            34 → 44%
            analisa C
          */

          else if (progress < 0.44) {

            scanPriorityPillar(2);

          }


          /*
            44 → 54%
            analisa T
          */

          else if (progress < 0.54) {

            scanPriorityPillar(3);

          }


          /*
            54%+
            diagnóstico resolvido:
            volta para A
          */

          else {

            resolvePriority();

          }

        },


        onLeave: () => {

          resolvePriority();

        },


        onLeaveBack: () => {

          restorePriorityDefault();

        }

      }

    });



  /* ====================================================
     ORIGIN — OBJETIVO
  ==================================================== */

  priorityDesktopTimeline

    .fromTo(
      priorityOriginCore,
      {
        scale: 0.92
      },
      {
        scale: 1.05,

        duration: 0.34,

        ease: "power2.out"
      }
    )


    .to(
      priorityOriginCore,
      {
        scale: 1,

        duration: 0.24
      }
    )



    /* ==================================================
       SINAL PERCORRE O CAMINHO
    ================================================== */

    .fromTo(
      prioritySignal,
      {
        left: "8%",

        autoAlpha: 0.25
      },
      {
        left: "82%",

        autoAlpha: 1,

        duration: 1.25,

        ease: "none"
      },
      "-=0.20"
    )



    /* ==================================================
       TEMPO DE ANÁLISE P / A / C / T
    ================================================== */

    .to(
      {},
      {
        duration: 1.25
      }
    )



    /* ==================================================
       A É ISOLADO COMO PRIORIDADE
    ================================================== */

    .fromTo(
      '.priority-diagnosis-item[data-priority="a"] > span',
      {
        scale: 0.86
      },
      {
        scale: 1,

        duration: 0.42,

        ease: "back.out(1.7)"
      }
    )



    /* ==================================================
       PRESCRIÇÃO SURGE
    ================================================== */

    .to(
      priorityPrescriptionTop,
      {
        autoAlpha: 1,

        duration: 0.28
      }
    )


    .to(
      priorityPrescriptionMain,
      {
        autoAlpha: 1,

        y: 0,

        duration: 0.52,

        ease: "power3.out"
      },
      "-=0.08"
    )


    .to(
      priorityPrescriptionActions,
      {
        autoAlpha: 1,

        y: 0,

        duration: 0.38,

        ease: "power3.out"
      },
      "-=0.20"
    )


    .to(
      priorityPrescriptionResult,
      {
        autoAlpha: 1,

        y: 0,

        duration: 0.38,

        ease: "power3.out"
      },
      "-=0.18"
    )


    /* respiro final */

    .to(
      {},
      {
        duration: 0.45
      }
    );


  return () => {

    restorePriorityDefault();

  };

});



/* ======================================================
   MOBILE
====================================================== */

mm.add("(max-width: 640px)", () => {


  /*
    No mobile NÃO prendemos toda a seção.
    O fluxo acompanha a rolagem natural.
  */


  /* objetivo pulsa ao chegar */

  gsap.fromTo(
    priorityOriginCore,
    {
      scale: 0.91
    },
    {
      scale: 1,

      scrollTrigger: {

        trigger:
          ".priority-origin",

        start:
          "top 72%",

        end:
          "center 45%",

        scrub: 0.7

      }
    }
  );



  /* ====================================================
     CAMINHO VERTICAL
  ==================================================== */

  gsap.fromTo(
    prioritySignal,
    {
      top: "8%",

      height: 20,

      autoAlpha: 0.3
    },
    {
      top: "72%",

      height: 32,

      autoAlpha: 1,

      ease: "none",

      scrollTrigger: {

        trigger:
          ".priority-path",

        start:
          "top 78%",

        end:
          "bottom 38%",

        scrub: 0.65

      }
    }
  );



  /* ====================================================
     ANÁLISE P → A → C → T → A
  ==================================================== */

  ScrollTrigger.create({

    trigger:
      ".priority-diagnosis",

    start:
      "top 68%",

    end:
      "bottom 32%",

    scrub: true,


    onEnter: () => {

      clearPriorityState();

    },


    onEnterBack: () => {

      clearPriorityState();

    },


    onUpdate: (self) => {

      const progress =
        self.progress;


      if (progress < 0.18) {

        scanPriorityPillar(0);

      }

      else if (progress < 0.36) {

        scanPriorityPillar(1);

      }

      else if (progress < 0.54) {

        scanPriorityPillar(2);

      }

      else if (progress < 0.72) {

        scanPriorityPillar(3);

      }

      else {

        resolvePriority();

      }

    },


    onLeave: () => {

      resolvePriority();

    },


    onLeaveBack: () => {

      restorePriorityDefault();

    }

  });



  /* ====================================================
     PRESCRIÇÃO MOBILE
  ==================================================== */

  const mobilePrescriptionTimeline =
    gsap.timeline({

      scrollTrigger: {

        trigger:
          ".priority-prescription",

        start:
          "top 74%",

        end:
          "top 26%",

        scrub: 0.7,

        invalidateOnRefresh: true

      }

    });


  mobilePrescriptionTimeline

    .from(
      priorityPrescriptionTop,
      {
        autoAlpha: 0,

        y: 12,

        duration: 0.25
      }
    )


    .from(
      priorityPrescriptionMain,
      {
        autoAlpha: 0,

        y: 28,

        duration: 0.48
      }
    )


    .from(
      priorityPrescriptionActions,
      {
        autoAlpha: 0,

        y: 18,

        duration: 0.34
      },
      "-=0.18"
    )


    .from(
      priorityPrescriptionResult,
      {
        autoAlpha: 0,

        y: 14,

        duration: 0.32
      },
      "-=0.16"
    );


  return () => {

    restorePriorityDefault();

  };

});

/* ======================================================
   SCREEN 06 — STRATEGIC REASONING STORY
====================================================== */

const reasoningBranches =
  gsap.utils.toArray(
    ".reasoning-branch"
  );


const reasoningTrunk =
  document.querySelector(
    ".reasoning-trunk"
  );


const reasoningConclusion =
  document.querySelector(
    ".reasoning-conclusion"
  );



/* ======================================================
   HELPERS
====================================================== */

function resetReasoningBranches() {

  reasoningBranches.forEach(
    (branch) => {

      branch.classList.remove(
        "is-active",
        "is-muted"
      );

    }
  );

}


function activateReasoningBranch(index) {

  reasoningBranches.forEach(
    (branch, branchIndex) => {

      branch.classList.toggle(
        "is-active",
        branchIndex === index
      );


      branch.classList.toggle(
        "is-muted",
        branchIndex !== index
      );

    }
  );

}


function muteAllReasoningBranches() {

  reasoningBranches.forEach(
    (branch) => {

      branch.classList.remove(
        "is-active"
      );

      branch.classList.add(
        "is-muted"
      );

    }
  );

}



/* ======================================================
   DESKTOP
====================================================== */

mm.add("(min-width: 641px)", () => {

  /*
    linha central nasce verticalmente
  */

  gsap.set(
    reasoningTrunk,
    {
      scaleY: 0,
      transformOrigin: "top center"
    }
  );


  /*
    linha horizontal nasce do centro
  */

  gsap.set(
  ".reasoning-system",
  {
    "--reasoning-line-progress": 0
  }
);


  /*
    ramos entram discretamente
  */

  gsap.set(
    reasoningBranches,
    {
      autoAlpha: 0.34,
      y: 24
    }
  );


  const reasoningDesktopTimeline =
    gsap.timeline({

      scrollTrigger: {

        trigger:
          ".reasoning-system",

        start:
          "top 12%",

        end:
          "+=230%",

        pin: true,

        scrub: 0.8,

        anticipatePin: 1,

        invalidateOnRefresh: true,


        onEnter: () => {

          resetReasoningBranches();

        },


        onEnterBack: () => {

          resetReasoningBranches();

        },


        onUpdate: (self) => {

          const progress =
            self.progress;


          /*
            0 → 22%
            sistema se formando
          */

          if (progress < 0.22) {

            resetReasoningBranches();

          }


          /*
            22 → 42%
            AQUISIÇÃO
          */

          else if (progress < 0.42) {

            activateReasoningBranch(0);

          }


          /*
            42 → 62%
            COMERCIAL
          */

          else if (progress < 0.62) {

            activateReasoningBranch(1);

          }


          /*
            62 → 82%
            TECNOLOGIA
          */

          else if (progress < 0.82) {

            activateReasoningBranch(2);

          }


          /*
            final:
            nenhum deles é "a resposta automática"
          */

          else {

            muteAllReasoningBranches();

          }

        },


        onLeave: () => {

          muteAllReasoningBranches();

        },


        onLeaveBack: () => {

          resetReasoningBranches();

        }

      }

    });



  reasoningDesktopTimeline

    /* linha desce da frase */

    .to(
      reasoningTrunk,
      {
        scaleY: 1,

        duration: 0.34,

        ease: "none"
      }
    )
.to(
  ".reasoning-system",
  {
    "--reasoning-line-progress": 1,

    duration: 0.42,

    ease: "none"
  },
  "-=0.10"
)

    /* três caminhos entram */

    .to(
      reasoningBranches,
      {
        autoAlpha: 1,

        y: 0,

        duration: 0.55,

        stagger: 0.09,

        ease: "power3.out"
      },
      "-=0.10"
    )


    /*
      tempo destinado ao A
    */

    .to(
      {},
      {
        duration: 0.78
      }
    )


    /*
      tempo destinado ao C
    */

    .to(
      {},
      {
        duration: 0.78
      }
    )


    /*
      tempo destinado ao T
    */

    .to(
      {},
      {
        duration: 0.78
      }
    )


    /*
      os três caminhos recuam
      antes da conclusão
    */

    .to(
      reasoningBranches,
      {
        autoAlpha: 0.28,

        scale: 0.985,

        duration: 0.48,

        ease: "power2.out"
      }
    )


    /*
      respiro
    */

    .to(
      {},
      {
        duration: 0.30
      }
    );


  return () => {

    resetReasoningBranches();

  };

});



/* ======================================================
   CONCLUSION — DESKTOP
====================================================== */

mm.add("(min-width: 641px)", () => {

  const conclusionLine =
    document.querySelector(
      ".reasoning-conclusion-line"
    );


  const conclusionFirst =
    document.querySelector(
      ".reasoning-conclusion p"
    );


  const conclusionStrong =
    document.querySelector(
      ".reasoning-conclusion > strong"
    );


  const conclusionSmall =
    document.querySelector(
      ".reasoning-conclusion > small"
    );


  const conclusionTimeline =
    gsap.timeline({

      scrollTrigger: {

        trigger:
          ".reasoning-conclusion",

        start:
          "top 80%",

        end:
          "top 32%",

        scrub: 0.75,

        invalidateOnRefresh: true

      }

    });


  conclusionTimeline

    .from(
      conclusionLine,
      {
        scaleY: 0,

        transformOrigin:
          "top center",

        duration: 0.28
      }
    )


    .from(
      conclusionFirst,
      {
        autoAlpha: 0,

        y: 28,

        duration: 0.42
      }
    )


    .from(
      conclusionStrong,
      {
        autoAlpha: 0,

        y: 34,

        duration: 0.55
      },
      "-=0.16"
    )


    .from(
      conclusionSmall,
      {
        autoAlpha: 0,

        y: 18,

        duration: 0.36
      },
      "-=0.20"
    );

});



/* ======================================================
   MOBILE
====================================================== */

mm.add("(max-width: 640px)", () => {

  /*
    Cada ramo ganha protagonismo
    quando atravessa o centro da tela.
  */

  reasoningBranches.forEach(
    (branch, index) => {

      ScrollTrigger.create({

        trigger: branch,

        start:
          "top 62%",

        end:
          "bottom 38%",

        onEnter: () => {

          activateReasoningBranch(index);

        },


        onEnterBack: () => {

          activateReasoningBranch(index);

        },


        onLeave: () => {

          branch.classList.remove(
            "is-active"
          );

        },


        onLeaveBack: () => {

          branch.classList.remove(
            "is-active"
          );

        }

      });



      /*
        conteúdo sobe suavemente
      */

      gsap.from(
        branch.querySelector(
          ".reasoning-branch-head"
        ),
        {
          autoAlpha: 0,

          y: 24,

          scrollTrigger: {

            trigger: branch,

            start:
              "top 78%",

            end:
              "top 48%",

            scrub: 0.65

          }
        }
      );


      gsap.from(
        branch.querySelector(
          ".reasoning-branch-body"
        ),
        {
          autoAlpha: 0,

          y: 28,

          scrollTrigger: {

            trigger: branch,

            start:
              "top 60%",

            end:
              "center 36%",

            scrub: 0.7

          }
        }
      );

    }
  );



  /* ====================================================
     MOBILE CONCLUSION
  ==================================================== */

  const mobileConclusion =
    gsap.timeline({

      scrollTrigger: {

        trigger:
          ".reasoning-conclusion",

        start:
          "top 76%",

        end:
          "top 30%",

        scrub: 0.7,

        invalidateOnRefresh: true

      }

    });


  mobileConclusion

    .from(
      ".reasoning-conclusion-line",
      {
        scaleY: 0,

        transformOrigin:
          "top center",

        duration: 0.25
      }
    )


    .from(
      ".reasoning-conclusion p",
      {
        autoAlpha: 0,

        y: 24,

        duration: 0.38
      }
    )


    .from(
      ".reasoning-conclusion > strong",
      {
        autoAlpha: 0,

        y: 30,

        duration: 0.50
      },
      "-=0.15"
    )


    .from(
      ".reasoning-conclusion > small",
      {
        autoAlpha: 0,

        y: 16,

        duration: 0.32
      },
      "-=0.18"
    );


  return () => {

    resetReasoningBranches();

  };

});

/* ======================================================
   SCREEN 07 — PROJECT PACT JOURNEY
====================================================== */

const projectSteps =
  gsap.utils.toArray(
    ".project-step"
  );

const projectSignal =
  document.querySelector(
    ".project-progress-signal"
  );

const projectProgress =
  document.querySelector(
    ".project-progress"
  );

const projectProgressActive =
  document.querySelector(
    ".project-progress-active"
  );



/* ======================================================
   STEP STATE
====================================================== */

function setProjectStep(activeIndex) {

  projectSteps.forEach(
    (step, index) => {

      step.classList.toggle(
        "active",
        index === activeIndex
      );


      step.classList.toggle(
        "completed",
        index < activeIndex
      );

    }
  );

}



/* ======================================================
   DESKTOP
====================================================== */

mm.add("(min-width: 641px)", () => {

  if (
    !projectSteps.length ||
    !projectSignal ||
    !projectProgress
  ) {
    return;
  }


  let markerPoints = [];
  let rowShift = 0;


  /* ====================================================
     CALCULATE REAL MARKER POSITIONS
  ==================================================== */

  function calculateProjectPoints() {

    const progressRect =
      projectProgress.getBoundingClientRect();


    markerPoints =
      projectSteps.map((step) => {

        const marker =
          step.querySelector(
            ".project-step-marker"
          );


        const markerRect =
          marker.getBoundingClientRect();


        return {

          x:
            markerRect.left +
            markerRect.width / 2 -
            progressRect.left,

          y:
            markerRect.top +
            markerRect.height / 2 -
            progressRect.top

        };

      });

    if (
  markerPoints[3] &&
  markerPoints[0]
) {

  rowShift =
    markerPoints[3].y -
    markerPoints[0].y;

}

  }



  /* ====================================================
     SIGNAL INITIAL STATE
  ==================================================== */

  gsap.set(
    projectSignal,
    {
      left: 0,
      top: 0,

      xPercent: -50,
      yPercent: -50
    }
  );


  calculateProjectPoints();


  if (markerPoints[0]) {

    gsap.set(
      projectSignal,
      {
        x: markerPoints[0].x,
        y: markerPoints[0].y
      }
    );

  }


  setProjectStep(0);



  /* ====================================================
     SCROLL STORY
  ==================================================== */

  const projectJourneyTrigger =
    ScrollTrigger.create({

      trigger:
  ".project-journey-viewport",

      start:
        "top 14%",

      end:
        "+=230%",

      pin: true,

      scrub: true,

      anticipatePin: 1,

      invalidateOnRefresh: true,


      onRefresh: () => {

        calculateProjectPoints();

      },


      onUpdate: (self) => {

        const progress =
          self.progress;


        /* ==============================================
           ACTIVE STEP
        ============================================== */

        const stepIndex =
          Math.min(
            projectSteps.length - 1,
            Math.floor(
              progress *
              projectSteps.length
            )
          );


        setProjectStep(
          stepIndex
        );
        /* ==============================================
   CAMERA FOLLOWS ROW 01 → ROW 02
============================================== */

const cameraStart = 0.46;
const cameraEnd = 0.60;


const cameraProgress =
  gsap.utils.clamp(
    0,
    1,
    (progress - cameraStart) /
    (cameraEnd - cameraStart)
  );


gsap.set(
  ".project-journey",
  {
    y: -80 * cameraProgress
  }
);



        /* ==============================================
           SIGNAL TRAVELS MARKER → MARKER
        ============================================== */

        if (
          markerPoints.length > 1
        ) {

          const pathProgress =
            progress *
            (markerPoints.length - 1);


          const fromIndex =
            Math.min(
              markerPoints.length - 2,
              Math.floor(pathProgress)
            );


          const toIndex =
            fromIndex + 1;


          const localProgress =
            Math.min(
              1,
              Math.max(
                0,
                pathProgress -
                fromIndex
              )
            );


          const from =
            markerPoints[fromIndex];


          const to =
            markerPoints[toIndex];


          const x =
            from.x +
            (to.x - from.x) *
            localProgress;


          const y =
            from.y +
            (to.y - from.y) *
            localProgress;


          gsap.set(
            projectSignal,
            {
              x,
              y
            }
          );

        }



        /* ==============================================
           FIRST ROW ACTIVE LINE
        ============================================== */

        if (projectProgressActive) {

          const firstRowProgress =
            Math.min(
              progress / 0.40,
              1
            );


          gsap.set(
            projectProgressActive,
            {
              scaleX:
                Math.max(
                  0.03,
                  firstRowProgress
                )
            }
          );

        }

      },


      onLeave: () => {

        setProjectStep(
          projectSteps.length - 1
        );

      },


      onLeaveBack: () => {

        setProjectStep(0);

      }

    });


  return () => {

    setProjectStep(0);

    projectJourneyTrigger.kill();

  };

});



/* ======================================================
   MOBILE
====================================================== */

mm.add("(max-width: 640px)", () => {

  if (
    !projectSteps.length ||
    !projectSignal ||
    !projectProgressActive
  ) {
    return;
  }


  setProjectStep(0);



  /* ====================================================
     VERTICAL PROGRESS
  ==================================================== */

  gsap.fromTo(
    projectProgressActive,
    {
      scaleY: 0
    },
    {
      scaleY: 1,

      ease: "none",

      scrollTrigger: {

        trigger:
          ".project-journey",

        start:
          "top 68%",

        end:
          "bottom 38%",

        scrub: 0.7,

        invalidateOnRefresh: true

      }

    }
  );



  /* ====================================================
     GREEN SIGNAL MOVES DOWN
  ==================================================== */

  gsap.fromTo(
    projectSignal,
    {
      top: "0%"
    },
    {
      top: "100%",

      ease: "none",

      scrollTrigger: {

        trigger:
          ".project-journey",

        start:
          "top 68%",

        end:
          "bottom 38%",

        scrub: 0.7

      }

    }
  );



  /* ====================================================
     EACH STEP BECOMES ACTIVE
  ==================================================== */

  projectSteps.forEach(
    (step, index) => {

      ScrollTrigger.create({

        trigger: step,

        start:
          "top 58%",

        end:
          "bottom 42%",


        onEnter: () => {

          setProjectStep(index);

        },


        onEnterBack: () => {

          setProjectStep(index);

        }

      });



      /* conteúdo entra suavemente */

      gsap.from(
        step.querySelector(
          ".project-step-content"
        ),
        {
          autoAlpha: 0,

          y: 24,

          scrollTrigger: {

            trigger: step,

            start:
              "top 78%",

            end:
              "top 52%",

            scrub: 0.6

          }

        }
      );

    }
  );


  return () => {

    setProjectStep(0);

  };

});
  
  /* ======================================================
     REFRESH
  ====================================================== */
  
  window.addEventListener("load", () => {

    ScrollTrigger.refresh();

  });

});
