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

const implementationImage =
  document.querySelector(
    "#implementationImage"
  );


const implementationImages = {
  p: "images/pact-posicionamento.webp",
  a: "images/pact-aquisicao.webp",
  c: "images/pact-comercial.webp",
  t: "images/pact-tecnologia.webp"
};

  const preloadImplementationImages =
  () => {

    Object.values(
      implementationImages
    ).forEach(
      (src) => {

        const image =
          new Image();

        image.src =
          src;


        if (
          image.decode
        ) {

          image
            .decode()
            .catch(
              () => {}
            );

        }

      }
    );

  };


if (
  "requestIdleCallback" in window
) {

  requestIdleCallback(
    preloadImplementationImages
  );

} else {

  setTimeout(
    preloadImplementationImages,
    900
  );

}


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
    !implementationImage
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
   IMPLEMENTATION IMAGE
==================================================== */

const imageTimeline =
  gsap.timeline();


imageTimeline

  .to(
    implementationImage,
    {
      autoAlpha: 0,

      scale: 1.04,

      duration: 0.22,

      ease: "power2.in",

      onComplete: () => {

        implementationImage.src =
          implementationImages[pillar];

      }
    }
  )

  .fromTo(
    implementationImage,
    {
      autoAlpha: 0,

      scale: 1.06
    },
    {
      autoAlpha: 1,

      scale: 1,

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

  resetReasoningBranches();

}

        },


        onLeave: () => {

  resetReasoningBranches();

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
    autoAlpha: 1,

    scale: 1,

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
    y: -280 * cameraProgress
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
   SCREEN 08 — DIAGNÓSTICO PACT
====================================================== */

const diagnosticPillars =
  gsap.utils.toArray(
    ".diagnostic-pillar"
  );

const diagnosticBars =
  gsap.utils.toArray(
    ".diagnostic-bar-fill"
  );

const diagnosticScoreNumber =
  document.querySelector(
    ".diagnostic-score-core strong"
  );

const diagnosticBottleneck =
  document.querySelector(
    ".diagnostic-bottleneck"
  );



/* ======================================================
   HELPERS
====================================================== */

function clearDiagnosticPillars() {

  diagnosticPillars.forEach(
    (pillar) => {

      pillar.classList.remove(
        "diagnostic-pillar-critical"
      );

    }
  );

}


function activateDiagnosticPillar(index) {

  clearDiagnosticPillars();


  if (diagnosticPillars[index]) {

    diagnosticPillars[index].classList.add(
      "diagnostic-pillar-critical"
    );

  }

}


function resolveDiagnostic() {

  /*
    resultado final do exemplo:
    AQUISIÇÃO
  */

  activateDiagnosticPillar(1);

}



/* ======================================================
   INITIAL STATE
====================================================== */

if (
  diagnosticPillars.length &&
  diagnosticBars.length &&
  diagnosticScoreNumber
) {

  clearDiagnosticPillars();


  diagnosticBars.forEach(
    (bar) => {

      gsap.set(
        bar,
        {
          scaleX: 0,
          transformOrigin:
            "left center"
        }
      );

    }
  );


  diagnosticScoreNumber.textContent =
    "0";


  gsap.set(
    diagnosticBottleneck,
    {
      autoAlpha: 0,
      y: 24
    }
  );



  /* ====================================================
     DIAGNOSTIC STORY
  ==================================================== */

  const scoreState = {
    value: 0
  };


  const diagnosticTimeline =
    gsap.timeline({

      scrollTrigger: {

        trigger:
          ".diagnostic-interface",

        start:
          "top 72%",

        end:
          "bottom 26%",

        scrub: 0.8,

        invalidateOnRefresh: true,


        onUpdate: (self) => {

          const progress =
            self.progress;


          /*
            sistema iniciando
          */

          if (progress < 0.12) {

            clearDiagnosticPillars();

          }


          /*
            P — POSICIONAMENTO
          */

          else if (progress < 0.28) {

            activateDiagnosticPillar(0);

          }


          /*
            A — AQUISIÇÃO
          */

          else if (progress < 0.44) {

            activateDiagnosticPillar(1);

          }


          /*
            C — COMERCIAL
          */

          else if (progress < 0.60) {

            activateDiagnosticPillar(2);

          }


          /*
            T — TECNOLOGIA
          */

          else if (progress < 0.76) {

            activateDiagnosticPillar(3);

          }


          /*
            RESULTADO:
            AQUISIÇÃO é isolada
          */

          else {

            resolveDiagnostic();

          }

        },


        onLeave: () => {

          resolveDiagnostic();

        },


        onLeaveBack: () => {

          clearDiagnosticPillars();

        }

      }

    });



  /* ====================================================
     SCORE NASCE
  ==================================================== */

  diagnosticTimeline

    .fromTo(
      ".diagnostic-score-orbit",
      {
        autoAlpha: 0.35,
        scale: 0.86
      },
      {
        autoAlpha: 1,
        scale: 1,

        duration: 0.55,

        ease: "power3.out"
      }
    )


    .to(
      scoreState,
      {
        value: 59,

        duration: 1.15,

        ease: "none",

        onUpdate: () => {

          diagnosticScoreNumber.textContent =
            Math.round(
              scoreState.value
            );

        }
      },
      "-=0.25"
    );



  /* ====================================================
     P — 68
  ==================================================== */

  diagnosticTimeline.to(
    diagnosticBars[0],
    {
      scaleX: 0.68,

      duration: 0.52,

      ease: "none"
    },
    "-=0.72"
  );



  /* ====================================================
     A — 34
  ==================================================== */

  diagnosticTimeline.to(
    diagnosticBars[1],
    {
      scaleX: 0.34,

      duration: 0.52,

      ease: "none"
    }
  );



  /* ====================================================
     C — 61
  ==================================================== */

  diagnosticTimeline.to(
    diagnosticBars[2],
    {
      scaleX: 0.61,

      duration: 0.52,

      ease: "none"
    }
  );



  /* ====================================================
     T — 74
  ==================================================== */

  diagnosticTimeline.to(
    diagnosticBars[3],
    {
      scaleX: 0.74,

      duration: 0.52,

      ease: "none"
    }
  );



  /* ====================================================
     GARGALO É REVELADO
  ==================================================== */

  diagnosticTimeline.to(
    diagnosticBottleneck,
    {
      autoAlpha: 1,
      y: 0,

      duration: 0.58,

      ease: "power3.out"
    }
  );


  diagnosticTimeline.to(
    {},
    {
      duration: 0.28
    }
  );

}



/* ======================================================
   DELIVERY — ENTRANCE
====================================================== */

gsap.from(
  ".diagnostic-delivery-item",
  {
    autoAlpha: 0,
    y: 28,

    stagger: 0.09,

    scrollTrigger: {

      trigger:
        ".diagnostic-delivery",

      start:
        "top 76%",

      end:
        "top 38%",

      scrub: 0.7

    }

  }
);



/* ======================================================
   CTA — ENTRANCE
====================================================== */

gsap.from(
  ".diagnostic-cta > div",
  {
    autoAlpha: 0,
    y: 28,

    scrollTrigger: {

      trigger:
        ".diagnostic-cta",

      start:
        "top 78%",

      end:
        "top 46%",

      scrub: 0.7

    }

  }
);


gsap.from(
  ".diagnostic-cta-button",
  {
    autoAlpha: 0,
    x: 34,

    scrollTrigger: {

      trigger:
        ".diagnostic-cta",

      start:
        "top 72%",

      end:
        "top 42%",

      scrub: 0.7

    }

  }
);

  /* ======================================================
   SCREEN 09 — AUTHOR / DIEGO
====================================================== */

const authorSection =
  document.querySelector(
    ".author-section"
  );

if (authorSection) {


  /* ====================================================
     DESKTOP
  ==================================================== */

  mm.add("(min-width: 641px)", () => {


    /* FOTO */

    gsap.fromTo(
      ".author-image",
      {
        scale: 1.08,
        autoAlpha: 0.55
      },
      {
        scale: 1.015,
        autoAlpha: 1,

        ease: "none",

        scrollTrigger: {

          trigger:
            ".author-composition",

          start:
            "top 82%",

          end:
            "center 38%",

          scrub: 0.8,

          invalidateOnRefresh: true

        }

      }
    );



    /* CAPTION DA FOTO */

    gsap.from(
      ".author-visual-caption",
      {
        autoAlpha: 0,
        y: 22,

        scrollTrigger: {

          trigger:
            ".author-visual",

          start:
            "top 62%",

          end:
            "center 40%",

          scrub: 0.7

        }

      }
    );



    /* MANIFESTO */

    const authorManifestoItems =
      gsap.utils.toArray(
        ".author-manifesto p"
      );


    gsap.from(
      ".author-manifesto-index",
      {
        autoAlpha: 0,
        x: -14,

        scrollTrigger: {

          trigger:
            ".author-manifesto",

          start:
            "top 78%",

          end:
            "top 56%",

          scrub: 0.65

        }

      }
    );


    authorManifestoItems.forEach(
      (item, index) => {

        gsap.from(
          item,
          {
            autoAlpha: 0,
            y: 34,

            scrollTrigger: {

              trigger: item,

              start:
                index === 0
                  ? "top 78%"
                  : "top 74%",

              end:
                "top 48%",

              scrub: 0.7

            }

          }
        );

      }
    );



    /* BODY COPY */

    gsap.from(
      ".author-copy p",
      {
        autoAlpha: 0,
        y: 22,

        stagger: 0.08,

        scrollTrigger: {

          trigger:
            ".author-copy",

          start:
            "top 78%",

          end:
            "center 48%",

          scrub: 0.7

        }

      }
    );



    /* SIGNATURE */

    gsap.from(
      ".author-signature",
      {
        autoAlpha: 0,
        y: 20,

        scrollTrigger: {

          trigger:
            ".author-signature",

          start:
            "top 82%",

          end:
            "top 58%",

          scrub: 0.65

        }

      }
    );



    /* PRINCÍPIOS */

    gsap.from(
      ".author-principle",
      {
        autoAlpha: 0,
        y: 32,

        stagger: 0.12,

        scrollTrigger: {

          trigger:
            ".author-principles",

          start:
            "top 78%",

          end:
            "top 40%",

          scrub: 0.75

        }

      }
    );



    /* FECHAMENTO */

    gsap.from(
      ".author-closing > span",
      {
        autoAlpha: 0,
        y: 14,

        scrollTrigger: {

          trigger:
            ".author-closing",

          start:
            "top 78%",

          end:
            "top 60%",

          scrub: 0.65

        }

      }
    );


    gsap.from(
      ".author-closing p",
      {
        autoAlpha: 0,
        y: 32,

        scrollTrigger: {

          trigger:
            ".author-closing",

          start:
            "top 70%",

          end:
            "top 38%",

          scrub: 0.75

        }

      }
    );

  });



  /* ====================================================
     MOBILE
  ==================================================== */

  mm.add("(max-width: 640px)", () => {


    /* FOTO */

    gsap.fromTo(
      ".author-image",
      {
        scale: 1.08
      },
      {
        scale: 1.015,

        ease: "none",

        scrollTrigger: {

          trigger:
            ".author-visual",

          start:
            "top 82%",

          end:
            "bottom 34%",

          scrub: 0.75

        }

      }
    );



    /* MANIFESTO */

    gsap.from(
      ".author-manifesto p",
      {
        autoAlpha: 0,
        y: 28,

        stagger: 0.1,

        scrollTrigger: {

          trigger:
            ".author-manifesto",

          start:
            "top 80%",

          end:
            "center 46%",

          scrub: 0.7

        }

      }
    );



    /* TEXTO */

    gsap.from(
      ".author-copy p",
      {
        autoAlpha: 0,
        y: 22,

        stagger: 0.08,

        scrollTrigger: {

          trigger:
            ".author-copy",

          start:
            "top 80%",

          end:
            "center 48%",

          scrub: 0.7

        }

      }
    );



    /* PRINCÍPIOS */

    gsap.utils
      .toArray(
        ".author-principle"
      )
      .forEach(
        (principle) => {

          gsap.from(
            principle,
            {
              autoAlpha: 0,
              y: 24,

              scrollTrigger: {

                trigger:
                  principle,

                start:
                  "top 82%",

                end:
                  "top 58%",

                scrub: 0.65

              }

            }
          );

        }
      );



    /* CLOSING */

    gsap.from(
      ".author-closing",
      {
        autoAlpha: 0,
        y: 30,

        scrollTrigger: {

          trigger:
            ".author-closing",

          start:
            "top 82%",

          end:
            "top 48%",

          scrub: 0.7

        }

      }
    );

  });

}
/* ======================================================
   SCREEN 10 — PACT ASSESSMENT ENGINE
====================================================== */

const assessmentEntry = document.getElementById("assessmentEntry");
const assessmentApp = document.getElementById("assessmentApp");
const assessmentResult = document.getElementById("assessmentResult");
const assessmentStartButton = document.getElementById("assessmentStartButton");
const assessmentCloseButton = document.getElementById("assessmentCloseButton");
const assessmentBackButton = document.getElementById("assessmentBackButton");
const assessmentNextButton = document.getElementById("assessmentNextButton");
const assessmentAnswerArea = document.getElementById("assessmentAnswerArea");
const assessmentQuestionEyebrow = document.getElementById("assessmentQuestionEyebrow");
const assessmentQuestionTitle = document.getElementById("assessmentQuestionTitle");
const assessmentQuestionDescription = document.getElementById("assessmentQuestionDescription");
const assessmentProgressText = document.getElementById("assessmentProgressText");
const assessmentProgressBar = document.getElementById("assessmentProgressBar");
const assessmentPhaseLabel = document.getElementById("assessmentPhaseLabel");
const assessmentCurrentQuestion = document.getElementById("assessmentCurrentQuestion");
const assessmentTotalQuestions = document.getElementById("assessmentTotalQuestions");

  /* ======================================================
   CENTER ASSESSMENT EXPERIENCE
====================================================== */

function centerAssessmentView() {

  setTimeout(
    () => {

      const question =
        document.getElementById(
          "assessmentQuestion"
        );

      if (!question) {
        return;
      }


      const rect =
        question.getBoundingClientRect();


      const viewportHeight =
        window.innerHeight;


      const isMobile =
        window.innerWidth <= 640;


      /*
        No mobile deixamos um pouco mais de
        respiro acima para não encostar no header.
      */

      const topSpace =
        isMobile
          ? 92
          : 28;


      /*
        Se o bloco couber na tela,
        centralizamos.

        Se for maior que a tela,
        mostramos o início dele com respiro.
      */

      const centerSpace =
        Math.max(
          topSpace,
          (
            viewportHeight -
            rect.height
          ) / 2
        );


      const targetY =
        window.scrollY +
        rect.top -
        centerSpace;


      window.scrollTo({
        top:
          Math.max(
            0,
            targetY
          ),

        behavior:
          "smooth"
      });

    },
    120
  );

}
  
let assessmentIndex = 0;
const assessmentAnswers = {};

const segmentProfiles = {
  beauty: {
    label: "beleza e estética",
    demand: "serviços como o seu",
    channels: "Google, avaliações, Instagram, indicação e mídia local"
  },

  health: {
    label: "saúde e clínica",
    demand: "atendimentos como o seu",
    channels: "Google, avaliações, indicação, conteúdo e presença local"
  },

  local_service: {
    label: "serviços locais",
    demand: "esse tipo de serviço na sua região",
    channels: "Google, mapas, avaliações, indicação e prospecção"
  },

  professional: {
    label: "serviços profissionais",
    demand: "uma solução como a sua",
    channels: "Google, autoridade, indicação, conteúdo e relacionamento"
  },

  b2b: {
    label: "serviços B2B",
    demand: "uma solução empresarial como a sua",
    channels: "prospecção, indicação, LinkedIn, conteúdo e parcerias"
  },

  retail: {
    label: "loja ou comércio",
    demand: "produtos como os seus",
    channels: "Google, redes sociais, localização, promoções e indicação"
  },

  ecommerce: {
    label: "e-commerce",
    demand: "produtos como os seus",
    channels: "mídia paga, busca, marketplaces, conteúdo e redes sociais"
  },

  education: {
    label: "educação ou treinamento",
    demand: "uma formação como a sua",
    channels: "conteúdo, busca, redes sociais, autoridade e indicação"
  },

  other: {
    label: "seu segmento",
    demand: "uma solução como a sua",
    channels: "os canais onde seus clientes procuram soluções"
  }
};


const option = (
  value,
  label,
  score,
  signal
) => ({
  value,
  label,
  score,
  signal
});


const assessmentQuestions = [

  /* ====================================================
     CONTEXTO 01–04
  ==================================================== */

  {
    id: "name",

    phase: "context",

    eyebrow: "CONTEXTO · 01",

    title:
      "Antes de falar do negócio, como você se chama?",

    description:
      "Vamos usar seu nome para personalizar a análise.",

    type: "text",

    placeholder:
      "Digite seu primeiro nome",

    autocomplete:
      "given-name"
  },


  {
    id: "company",

    phase: "context",

    eyebrow: "CONTEXTO · 02",

    title:
      "Qual é o nome do seu negócio?",

    description:
      "Pode ser o nome da empresa, marca ou operação que você quer analisar.",

    type: "text",

    placeholder:
      "Ex.: Studio Bella",

    autocomplete:
      "organization"
  },


  {
    id: "segment",

    phase: "context",

    eyebrow: "CONTEXTO · 03",

    title:
      "Qual dessas opções mais se aproxima do seu negócio?",

    description:
      "Isso muda a forma como o PACT interpreta as próximas respostas.",

    type: "options",

    options: [

      option(
        "beauty",
        "Beleza e estética"
      ),

      option(
        "health",
        "Saúde e clínica"
      ),

      option(
        "local_service",
        "Serviços locais"
      ),

      option(
        "professional",
        "Serviços profissionais"
      ),

      option(
        "b2b",
        "Serviços B2B"
      ),

      option(
        "retail",
        "Loja ou comércio"
      ),

      option(
        "ecommerce",
        "E-commerce"
      ),

      option(
        "education",
        "Educação ou treinamento"
      ),

      option(
        "other",
        "Outro segmento"
      )

    ]
  },


  {
    id: "goal",

    phase: "context",

    eyebrow: "CONTEXTO · 04",

    title:
      "Qual é o principal objetivo do negócio agora?",

    description:
      "Escolha o movimento que mais representa o momento atual.",

    type: "options",

    options: [

      option(
        "more_customers",
        "Atrair mais clientes"
      ),

      option(
        "sell_more",
        "Vender mais das oportunidades que já chegam"
      ),

      option(
        "positioning",
        "Melhorar posicionamento e percepção"
      ),

      option(
        "organization",
        "Organizar o comercial"
      ),

      option(
        "automation",
        "Automatizar e ganhar eficiência"
      ),

      option(
        "scale",
        "Criar estrutura para crescer"
      )

    ]
  },



  /* ====================================================
     POSICIONAMENTO 05–08
  ==================================================== */

  {
    id: "p_clarity",

    phase: "p",

    eyebrow:
      "POSICIONAMENTO · 01",

    title:
      "Quando alguém conhece sua empresa pela primeira vez, entende rapidamente por que deveria escolher vocês?",

    description:
      "Considere a clareza da comunicação, o problema resolvido e o motivo para escolher sua empresa.",

    type:
      "options",

    options: [

      option(
        "very_clear",
        "Sim. Nossa proposta e nossos diferenciais são muito claros.",
        100,
        "strong_positioning"
      ),

      option(
        "clear_offer_weak_difference",
        "Entendem o que fazemos, mas o diferencial ainda não é tão evidente.",
        72,
        "weak_differentiation"
      ),

      option(
        "needs_explanation",
        "Precisamos explicar bastante para o cliente perceber o valor.",
        42,
        "unclear_value"
      ),

      option(
        "confusing",
        "Nossa comunicação ainda é confusa ou muda muito entre os canais.",
        20,
        "fragmented_positioning"
      )

    ]
  },


  {
    id: "p_audience",

    phase: "p",

    eyebrow:
      "POSICIONAMENTO · 02",

    title:
      "Quão claro está quem é o cliente ideal do seu negócio?",

    description:
      "Quanto mais claro o público, mais fácil construir oferta, comunicação e aquisição eficientes.",

    type:
      "options",

    options: [

      option(
        "defined",
        "Muito claro. Sabemos exatamente quem queremos atrair e quais problemas resolvemos.",
        100,
        "clear_audience"
      ),

      option(
        "mostly_defined",
        "Temos uma boa noção, mas ainda atendemos perfis bastante diferentes.",
        74,
        "broad_audience"
      ),

      option(
        "broad",
        "Nosso público é amplo e ainda não temos um perfil prioritário bem definido.",
        43,
        "undefined_priority_audience"
      ),

      option(
        "anyone",
        "Hoje tentamos vender para praticamente qualquer pessoa que possa comprar.",
        18,
        "no_audience_definition"
      )

    ]
  },


  {
    id: "p_trust",

    phase: "p",

    eyebrow:
      "POSICIONAMENTO · 03",

    title:
      "Se um potencial cliente pesquisar sua empresa antes de entrar em contato, o que ele encontra?",

    description:
      "Considere site, Google, redes sociais, avaliações, cases e outras provas de confiança.",

    type:
      "options",

    options: [

      option(
        "strong_presence",
        "Uma presença profissional, coerente e com boas provas de confiança.",
        100,
        "strong_trust"
      ),

      option(
        "basic_presence",
        "Encontra informações boas, mas nossa autoridade e provas poderiam ser mais fortes.",
        72,
        "weak_social_proof"
      ),

      option(
        "fragmented_presence",
        "Encontra algumas coisas, mas a presença é incompleta ou pouco organizada.",
        42,
        "fragmented_presence"
      ),

      option(
        "weak_presence",
        "Encontra pouco conteúdo ou quase nada que ajude a confiar na empresa.",
        18,
        "low_digital_trust"
      )

    ]
  },


  {
    id: "p_offer",

    phase: "p",

    eyebrow:
      "POSICIONAMENTO · 04",

    title:
      "Hoje sua principal oferta é fácil de entender e de comprar?",

    description:
      "Pense se o cliente entende o que recebe, qual benefício existe e qual é o próximo passo.",

    type:
      "options",

    options: [

      option(
        "structured_offer",
        "Sim. Temos uma oferta clara, bem apresentada e com próximo passo definido.",
        100,
        "strong_offer"
      ),

      option(
        "clear_service",
        "O serviço é claro, mas ainda pode ser melhor estruturado como oferta.",
        73,
        "offer_needs_structure"
      ),

      option(
        "custom_every_time",
        "Cada venda acaba sendo explicada ou montada praticamente do zero.",
        40,
        "unstructured_offer"
      ),

      option(
        "confusing_offer",
        "O cliente muitas vezes não entende exatamente o que oferecemos ou qual caminho seguir.",
        17,
        "unclear_offer"
      )

    ]
  },



  /* ====================================================
     AQUISIÇÃO 09–12
  ==================================================== */

  {
    id:
      "a_predictability",

    phase:
      "a",

    eyebrow:
      "AQUISIÇÃO · 01",

    title:
      "Hoje novas oportunidades entram no seu negócio de forma previsível?",

    description:
      "Queremos entender se existe um mecanismo capaz de gerar novas oportunidades com consistência.",

    type:
      "options",

    options: [

      option(
        "predictable",
        "Sim. Temos canais que geram oportunidades de forma consistente.",
        100,
        "predictable_acquisition"
      ),

      option(
        "somewhat_predictable",
        "Existe alguma consistência, mas o volume oscila bastante.",
        72,
        "unstable_acquisition"
      ),

      option(
        "dependent",
        "Dependemos muito de indicação, períodos específicos ou ações pontuais.",
        40,
        "channel_dependency"
      ),

      option(
        "random",
        "Não. As oportunidades chegam de forma bastante imprevisível.",
        15,
        "no_predictable_acquisition"
      )

    ]
  },


  {
    id:
      "a_volume",

    phase:
      "a",

    eyebrow:
      "AQUISIÇÃO · 02",

    title:
      "Considerando a meta atual da empresa, entram oportunidades suficientes para crescer?",

    description:
      "Pense na quantidade de novas pessoas ou empresas que demonstram interesse real em comprar.",

    type:
      "options",

    options: [

      option(
        "enough",
        "Sim. Temos volume suficiente para sustentar nossa meta.",
        100,
        "healthy_demand_volume"
      ),

      option(
        "almost",
        "Estamos próximos, mas ainda existem períodos com pouca demanda.",
        74,
        "moderate_demand_gap"
      ),

      option(
        "below",
        "Não. Precisaríamos de mais oportunidades entrando para crescer.",
        38,
        "low_demand_volume"
      ),

      option(
        "very_low",
        "O volume é muito baixo ou não conseguimos gerar demanda com consistência.",
        14,
        "critical_demand_gap"
      )

    ]
  },


  {
    id:
      "a_presence",

    phase:
      "a",

    eyebrow:
      "AQUISIÇÃO · 03",

    title: () => {

      const s =
        getAssessmentSegmentProfile();

      return `Quando alguém procura ${s.demand}, sua empresa aparece com força nos canais certos?`;

    },

    description: () => {

      const s =
        getAssessmentSegmentProfile();

      return `Para negócios de ${s.label}, canais relevantes costumam envolver ${s.channels}.`;

    },

    type:
      "options",

    options: [

      option(
        "strong",
        "Sim. Estamos bem presentes nos canais que realmente geram oportunidades.",
        100,
        "strong_channel_presence"
      ),

      option(
        "partial",
        "Estamos presentes em alguns canais, mas ainda existem oportunidades importantes pouco exploradas.",
        72,
        "channel_opportunity"
      ),

      option(
        "weak",
        "Nossa presença existe, mas gera poucas oportunidades comerciais.",
        40,
        "weak_channel_performance"
      ),

      option(
        "absent",
        "Ainda não temos uma estratégia clara para aparecer onde o cliente procura.",
        15,
        "low_demand_capture"
      )

    ]
  },


  {
    id:
      "a_measurement",

    phase:
      "a",

    eyebrow:
      "AQUISIÇÃO · 04",

    title:
      "Você consegue identificar quais canais realmente trazem oportunidades e vendas?",

    description:
      "Uma aquisição madura sabe de onde as oportunidades vêm e quais canais merecem mais investimento.",

    type:
      "options",

    options: [

      option(
        "measured",
        "Sim. Acompanhamos origem, volume e resultado dos principais canais.",
        100,
        "measured_acquisition"
      ),

      option(
        "partial_measurement",
        "Sabemos os principais canais, mas ainda não medimos tudo de forma organizada.",
        72,
        "partial_acquisition_measurement"
      ),

      option(
        "perception",
        "Temos apenas uma percepção de onde os clientes costumam vir.",
        38,
        "acquisition_based_on_perception"
      ),

      option(
        "no_measurement",
        "Não acompanhamos de onde vêm as oportunidades ou quais canais funcionam melhor.",
        14,
        "no_acquisition_measurement"
      )

    ]
  },



  /* ====================================================
     COMERCIAL 13–16
  ==================================================== */

  {
    id:
      "c_response",

    phase:
      "c",

    eyebrow:
      "COMERCIAL · 01",

    title:
      "Quando uma nova oportunidade entra, o atendimento acontece com velocidade e padrão?",

    description:
      "O primeiro contato influencia diretamente a chance de conversão.",

    type:
      "options",

    options: [

      option(
        "fast_structured",
        "Sim. Respondemos rápido e existe um padrão claro de atendimento.",
        100,
        "strong_first_response"
      ),

      option(
        "usually_fast",
        "Normalmente respondemos bem, mas ainda depende de quem atende ou do momento.",
        72,
        "inconsistent_response"
      ),

      option(
        "slow",
        "Às vezes demoramos e algumas oportunidades esfriam antes do atendimento.",
        40,
        "slow_response"
      ),

      option(
        "unstructured",
        "Não existe um padrão e frequentemente perdemos oportunidades no primeiro contato.",
        15,
        "critical_first_contact"
      )

    ]
  },


  {
    id:
      "c_process",

    phase:
      "c",

    eyebrow:
      "COMERCIAL · 02",

    title:
      "Existe um processo comercial claro entre a entrada da oportunidade e a venda?",

    description:
      "Queremos entender se existe uma sequência para atender, qualificar, apresentar, acompanhar e fechar.",

    type:
      "options",

    options: [

      option(
        "structured",
        "Sim. Temos etapas claras e sabemos em que momento cada oportunidade está.",
        100,
        "structured_sales_process"
      ),

      option(
        "partial",
        "Existe um processo, mas nem sempre ele é seguido ou acompanhado.",
        72,
        "partial_sales_process"
      ),

      option(
        "informal",
        "Existe uma forma de vender, mas ela está mais na cabeça das pessoas do que estruturada.",
        40,
        "informal_sales_process"
      ),

      option(
        "none",
        "Não. Cada oportunidade acaba sendo conduzida de uma forma diferente.",
        15,
        "no_sales_process"
      )

    ]
  },


  {
    id:
      "c_followup",

    phase:
      "c",

    eyebrow:
      "COMERCIAL · 03",

    title:
      "O que acontece quando o cliente demonstra interesse, mas não compra no primeiro contato?",

    description:
      "Aqui analisamos a capacidade de continuar a conversa sem perder oportunidades.",

    type:
      "options",

    options: [

      option(
        "structured_followup",
        "Existe uma sequência de follow-up e acompanhamos até existir uma definição.",
        100,
        "strong_followup"
      ),

      option(
        "manual_followup",
        "Fazemos retornos, mas de forma manual e nem sempre com consistência.",
        72,
        "manual_followup"
      ),

      option(
        "depends",
        "Depende de quem atendeu ou de lembrarmos daquela oportunidade.",
        38,
        "inconsistent_followup"
      ),

      option(
        "lost",
        "Na maioria das vezes, se não comprar no primeiro contato, a oportunidade se perde.",
        12,
        "lost_followup_opportunities"
      )

    ]
  },


  {
    id:
      "c_conversion",

    phase:
      "c",

    eyebrow:
      "COMERCIAL · 04",

    title:
      "Você sabe quantas oportunidades entram e quantas realmente se transformam em vendas?",

    description:
      "Sem acompanhar conversão, fica difícil saber se o problema está na demanda ou na capacidade de vender.",

    type:
      "options",

    options: [

      option(
        "measured",
        "Sim. Acompanhamos volume, etapas e taxa de conversão.",
        100,
        "measured_conversion"
      ),

      option(
        "basic",
        "Temos alguns números, mas ainda não acompanhamos o processo comercial inteiro.",
        72,
        "partial_conversion_measurement"
      ),

      option(
        "perception",
        "Sabemos mais ou menos como vendemos, mas não temos indicadores confiáveis.",
        38,
        "conversion_by_perception"
      ),

      option(
        "unknown",
        "Não sabemos quantas oportunidades são perdidas nem nossa taxa de conversão.",
        12,
        "no_conversion_measurement"
      )

    ]
  },



  /* ====================================================
     TECNOLOGIA 17–20
  ==================================================== */

  {
    id:
      "t_organization",

    phase:
      "t",

    eyebrow:
      "TECNOLOGIA · 01",

    title:
      "As informações de clientes e oportunidades ficam organizadas em algum sistema?",

    description:
      "O importante é recuperar histórico, estágio e próximos passos sem depender da memória.",

    type:
      "options",

    options: [

      option(
        "organized",
        "Sim. Temos uma estrutura centralizada e atualizada.",
        100,
        "organized_customer_data"
      ),

      option(
        "partial",
        "Temos ferramentas, mas parte das informações ainda fica espalhada.",
        72,
        "fragmented_customer_data"
      ),

      option(
        "spreadsheets",
        "Usamos planilhas, WhatsApp ou controles manuais e frequentemente precisamos procurar informações.",
        40,
        "manual_information_management"
      ),

      option(
        "none",
        "Não existe uma estrutura central para acompanhar clientes e oportunidades.",
        15,
        "no_customer_data_structure"
      )

    ]
  },


  {
    id:
      "t_automation",

    phase:
      "t",

    eyebrow:
      "TECNOLOGIA · 02",

    title:
      "Quanto trabalho repetitivo ainda depende de alguém lembrar e executar manualmente?",

    description:
      "Pense em follow-up, confirmações, organização de dados, agendamento e atualização de status.",

    type:
      "options",

    options: [

      option(
        "optimized",
        "Pouco. Automatizamos o que faz sentido e mantemos controle sobre a experiência.",
        100,
        "healthy_automation"
      ),

      option(
        "some_manual",
        "Ainda existem tarefas manuais, mas a operação funciona relativamente bem.",
        74,
        "automation_opportunity"
      ),

      option(
        "very_manual",
        "Grande parte da rotina depende de ações manuais e isso consome bastante tempo.",
        40,
        "manual_operation"
      ),

      option(
        "chaotic",
        "A operação depende muito de memória, mensagens soltas e ações manuais.",
        15,
        "operational_fragility"
      )

    ]
  },


  {
    id:
      "t_capacity",

    phase:
      "t",

    eyebrow:
      "TECNOLOGIA · 03",

    title:
      "Se o volume de oportunidades dobrasse no próximo mês, sua operação conseguiria atender bem?",

    description:
      "Isso identifica se a estrutura atual suporta crescimento sem perder velocidade, controle ou qualidade.",

    type:
      "options",

    options: [

      option(
        "ready",
        "Sim. Temos estrutura e capacidade para absorver esse crescimento.",
        100,
        "scalable_operation"
      ),

      option(
        "some_pressure",
        "Provavelmente, mas precisaríamos ajustar alguns processos.",
        72,
        "moderate_capacity_limit"
      ),

      option(
        "difficult",
        "Seria difícil manter o padrão atual com o dobro de volume.",
        38,
        "capacity_bottleneck"
      ),

      option(
        "collapse",
        "Não. A operação provavelmente perderia controle ou qualidade.",
        12,
        "critical_capacity_limit"
      )

    ]
  },


  {
    id:
      "t_data",

    phase:
      "t",

    eyebrow:
      "TECNOLOGIA · 04",

    title:
      "Você consegue olhar para os números da operação e entender rapidamente o que precisa melhorar?",

    description:
      "Dados precisam ajudar a tomar decisões sobre aquisição, vendas, atendimento e capacidade.",

    type:
      "options",

    options: [

      option(
        "clear_data",
        "Sim. Temos indicadores claros e usamos os dados para tomar decisões.",
        100,
        "data_driven_operation"
      ),

      option(
        "some_data",
        "Temos alguns indicadores, mas ainda existem decisões baseadas mais em percepção.",
        72,
        "partial_data_visibility"
      ),

      option(
        "little_data",
        "Temos poucos números organizados e normalmente precisamos levantar informações manualmente.",
        38,
        "low_data_visibility"
      ),

      option(
        "no_data",
        "Não temos indicadores confiáveis para entender o desempenho da operação.",
        12,
        "no_operational_visibility"
      )

    ]
  }

];


const phaseNames = {
  context:
    "CONTEXTO",

  p:
    "POSICIONAMENTO",

  a:
    "AQUISIÇÃO",

  c:
    "COMERCIAL",

  t:
    "TECNOLOGIA"
};


const phaseFullNames = {
  p:
    "Posicionamento",

  a:
    "Aquisição",

  c:
    "Comercial",

  t:
    "Tecnologia"
};


const goalNames = {

  more_customers:
    "atrair mais clientes",

  sell_more:
    "converter melhor as oportunidades existentes",

  positioning:
    "fortalecer posicionamento e percepção",

  organization:
    "organizar o processo comercial",

  automation:
    "ganhar eficiência com tecnologia",

  scale:
    "criar estrutura para crescer"

};



function getAssessmentQuestion() {

  return (
    assessmentQuestions[
      assessmentIndex
    ] || null
  );

}



function getAssessmentSegmentProfile() {

  return (
    segmentProfiles[
      assessmentAnswers.segment
    ] ||
    segmentProfiles.other
  );

}



function escapePACTHTML(
  value
) {

  return String(
    value || ""
  )
    .replaceAll(
      "&",
      "&amp;"
    )
    .replaceAll(
      "<",
      "&lt;"
    )
    .replaceAll(
      ">",
      "&gt;"
    )
    .replaceAll(
      '"',
      "&quot;"
    )
    .replaceAll(
      "'",
      "&#039;"
    );

}



function getOptionData(
  question,
  value
) {

  return (
    question?.options?.find(
      (item) =>
        item.value === value
    ) || null
  );

}



function calculatePhaseScore(
  phase
) {

  const questions =
    assessmentQuestions.filter(
      (question) =>
        question.phase === phase &&
        question.options?.some(
          (item) =>
            typeof item.score ===
            "number"
        )
    );


  const scores =
    questions
      .map(
        (question) =>
          getOptionData(
            question,
            assessmentAnswers[
              question.id
            ]
          )?.score
      )
      .filter(
        (score) =>
          typeof score ===
          "number"
      );


  if (!scores.length) {
    return 0;
  }


  return Math.round(

    scores.reduce(
      (total, score) =>
        total + score,
      0
    ) / scores.length

  );

}



function getPhaseSignals(
  phase
) {

  return assessmentQuestions

    .filter(
      (question) =>
        question.phase === phase
    )

    .map(
      (question) =>
        getOptionData(
          question,
          assessmentAnswers[
            question.id
          ]
        )?.signal
    )

    .filter(Boolean);

}



function savePhase(
  phase
) {

  assessmentAnswers[
    `${phase}_score`
  ] =
    calculatePhaseScore(
      phase
    );


  assessmentAnswers[
    `${phase}_signals`
  ] =
    getPhaseSignals(
      phase
    );

}



function updateAssessmentProgress() {

  const total =
    assessmentQuestions.length;


  const current =
    Math.min(
      assessmentIndex + 1,
      total
    );


  const progress =
    current / total;


  assessmentCurrentQuestion
    .textContent =
      String(current)
        .padStart(
          2,
          "0"
        );


  assessmentTotalQuestions
    .textContent =
      String(total)
        .padStart(
          2,
          "0"
        );


  assessmentProgressText
    .textContent =
      `${Math.round(
        progress * 100
      )}%`;


  gsap.to(
    assessmentProgressBar,
    {
      scaleX:
        progress,

      duration:
        0.4,

      ease:
        "power3.out"
    }
  );

}

/* ======================================================
   PACT REPORT — DEEP METRICS
====================================================== */

const pactMetricMap = {

  p: [
    {
      id: "p_clarity",
      label: "Clareza"
    },
    {
      id: "p_audience",
      label: "Público"
    },
    {
      id: "p_trust",
      label: "Confiança"
    },
    {
      id: "p_offer",
      label: "Oferta"
    }
  ],

  a: [
    {
      id: "a_predictability",
      label: "Previsibilidade"
    },
    {
      id: "a_volume",
      label: "Volume"
    },
    {
      id: "a_presence",
      label: "Presença nos canais"
    },
    {
      id: "a_measurement",
      label: "Mensuração"
    }
  ],

  c: [
    {
      id: "c_response",
      label: "Velocidade"
    },
    {
      id: "c_process",
      label: "Processo"
    },
    {
      id: "c_followup",
      label: "Follow-up"
    },
    {
      id: "c_conversion",
      label: "Conversão"
    }
  ],

  t: [
    {
      id: "t_organization",
      label: "Organização"
    },
    {
      id: "t_automation",
      label: "Automação"
    },
    {
      id: "t_capacity",
      label: "Capacidade"
    },
    {
      id: "t_data",
      label: "Dados"
    }
  ]

};



function getAssessmentMetricScore(
  questionId
) {

  const question =
    assessmentQuestions.find(
      (item) =>
        item.id === questionId
    );


  if (!question) {
    return 0;
  }


  const selectedOption =
    getOptionData(
      question,
      assessmentAnswers[
        questionId
      ]
    );


  return Number(
    selectedOption?.score || 0
  );

}



function getPactMetricRows(
  phase
) {

  return (
    pactMetricMap[phase] || []
  ).map(
    (metric) => ({
      ...metric,

      score:
        getAssessmentMetricScore(
          metric.id
        )
    })
  );

}



function getPactBalance(
  scores
) {

  const values =
    Object.values(
      scores
    );


  const highest =
    Math.max(
      ...values
    );


  const lowest =
    Math.min(
      ...values
    );


  return Math.max(
    0,
    100 - (
      highest - lowest
    )
  );

}



function getPactGap(
  scores
) {

  const values =
    Object.values(
      scores
    );


  return (
    Math.max(...values) -
    Math.min(...values)
  );

}



function getLowestPactMetric(
  phase
) {

  const metrics =
    getPactMetricRows(
      phase
    );


  return metrics.reduce(
    (lowest, current) =>

      current.score <
      lowest.score
        ? current
        : lowest,

    metrics[0]
  );

}



function buildPactRadarPoints(
  scores
) {

  const center = 140;
  const radius = 94;


  const p =
    center -
    radius *
    (
      scores.p / 100
    );


  const a =
    center +
    radius *
    (
      scores.a / 100
    );


  const c =
    center +
    radius *
    (
      scores.c / 100
    );


  const t =
    center -
    radius *
    (
      scores.t / 100
    );


  return [
    `${center},${p}`,
    `${a},${center}`,
    `${center},${c}`,
    `${t},${center}`
  ].join(" ");

}



function updateAssessmentPhase(
  phase
) {

  document
    .querySelectorAll(
      ".assessment-phase"
    )
    .forEach(
      (item) => {

        item.classList.toggle(
          "active",
          item.dataset.phase ===
            phase
        );

      }
    );


  assessmentPhaseLabel
    .textContent =
      phaseNames[phase] ||
      "DIAGNÓSTICO";

}



function selectAssessmentOption(
  button,
  value
) {

  assessmentAnswerArea
    .querySelectorAll(
      ".assessment-option"
    )
    .forEach(
      (item) => {

        item.classList.remove(
          "selected"
        );

      }
    );


  button.classList.add(
    "selected"
  );


  const question =
    getAssessmentQuestion();


  if (!question) {
    return;
  }


  assessmentAnswers[
    question.id
  ] =
    value;


  assessmentNextButton
    .disabled =
      false;


  gsap.fromTo(
    button,
    {
      scale:
        0.985
    },
    {
      scale:
        1,

      duration:
        0.3,

      ease:
        "back.out(1.5)"
    }
  );

}



function renderAssessmentQuestion() {

  const question =
    getAssessmentQuestion();


  if (!question) {

    console.error(
      "PACT: pergunta inexistente",
      assessmentIndex,
      assessmentQuestions.length
    );


    assessmentIndex =
      Math.max(
        0,
        Math.min(
          assessmentIndex,
          assessmentQuestions.length - 1
        )
      );


    return;

  }


  let title =
    typeof question.title ===
      "function"
      ? question.title()
      : question.title;


  const description =
    typeof question.description ===
      "function"
      ? question.description()
      : question.description;


  if (
    question.id === "company" &&
    assessmentAnswers.name
  ) {

    title =
      `${assessmentAnswers.name}, qual é o nome do seu negócio?`;

  }


  assessmentQuestionEyebrow
    .textContent =
      question.eyebrow;


  assessmentQuestionTitle
    .textContent =
      title;


  assessmentQuestionDescription
    .textContent =
      description;


  assessmentAnswerArea
    .innerHTML =
      "";


  updateAssessmentProgress();


  updateAssessmentPhase(
    question.phase
  );


  assessmentBackButton
    .disabled =
      assessmentIndex === 0;


  assessmentNextButton
    .disabled =
      !assessmentAnswers[
        question.id
      ];



  /* TEXT */

  if (
    question.type === "text"
  ) {

    const input =
      document.createElement(
        "input"
      );


    input.type =
      "text";


    input.className =
      "assessment-field";


    input.placeholder =
      question.placeholder ||
      "";


    input.autocomplete =
      question.autocomplete ||
      "off";


    input.value =
      assessmentAnswers[
        question.id
      ] || "";


    assessmentAnswerArea
      .appendChild(
        input
      );


    input.addEventListener(
      "input",
      () => {

        const value =
          input.value.trim();


        assessmentAnswers[
          question.id
        ] =
          value;


        assessmentNextButton
          .disabled =
            value.length < 2;

      }
    );


    input.addEventListener(
      "keydown",
      (event) => {

        if (
          event.key === "Enter" &&
          !assessmentNextButton
            .disabled
        ) {

          goToNextAssessmentQuestion();

        }

      }
    );


    setTimeout(
      () =>
        input.focus(),
      220
    );

  }



  /* OPTIONS */

  if (
    question.type === "options"
  ) {

    const grid =
      document.createElement(
        "div"
      );


    grid.className =
      "assessment-option-grid";


    question.options
      .forEach(
        (item) => {

          const button =
            document.createElement(
              "button"
            );


          button.type =
            "button";


          button.className =
            "assessment-option";


          button.innerHTML =
            `
              <span>
                ${escapePACTHTML(
                  item.label
                )}
              </span>

              <small>
                →
              </small>
            `;


          if (
            assessmentAnswers[
              question.id
            ] === item.value
          ) {

            button.classList.add(
              "selected"
            );

          }


          button.addEventListener(
            "click",
            () => {

              selectAssessmentOption(
                button,
                item.value
              );

            }
          );


          grid.appendChild(
            button
          );

        }
      );


    assessmentAnswerArea
      .appendChild(
        grid
      );

  }


  gsap.fromTo(
    "#assessmentQuestion",
    {
      autoAlpha:
        0,

      y:
        26
    },
    {
      autoAlpha:
        1,

      y:
        0,

      duration:
        0.45,

      ease:
        "power3.out"
    }
  );
centerAssessmentView();
}



function showAssessmentTransition(
  label,
  title,
  buttonLabel,
  letter = ""
) {

  assessmentAnswerArea
    .innerHTML =
      `
        <div class="assessment-phase-complete">

          ${
            letter
              ? `
                <div class="assessment-phase-complete-mark">
                  ${letter}
                </div>
              `
              : ""
          }

          <div>

            <span>
              ${escapePACTHTML(
                label
              )}
            </span>

            <strong>
              ${escapePACTHTML(
                title
              )}
            </strong>

            <small>
              O resultado completo será apresentado
              ao final do Diagnóstico PACT.
            </small>

            <button
              type="button"
              class="assessment-transition-button"
              id="assessmentContinuePhase"
            >

              <span>
                ${escapePACTHTML(
                  buttonLabel
                )}
              </span>

              <span aria-hidden="true">
                →
              </span>

            </button>

          </div>

        </div>
      `;


  assessmentNextButton
    .disabled =
      true;


  document
    .getElementById(
      "assessmentContinuePhase"
    )
    ?.addEventListener(
      "click",
      () => {

        assessmentIndex += 1;


        gsap.to(
          "#assessmentQuestion",
          {
            autoAlpha:
              0,

            y:
              -20,

            duration:
              0.2,

            ease:
              "power2.in",

            onComplete:
              renderAssessmentQuestion
          }
        );

      }
    );
centerAssessmentView();
}



function getMaturity(
  score
) {

  if (score >= 80) {
    return "Estrutura madura";
  }


  if (score >= 65) {
    return "Estrutura em consolidação";
  }


  if (score >= 50) {
    return "Estrutura em desenvolvimento";
  }


  if (score >= 35) {
    return "Estrutura frágil";
  }


  return "Estrutura crítica";

}



function getSegmentAcquisitionMove() {

  const moves = {

    beauty:
      "Fortalecer Google, avaliações e presença visual para capturar pessoas que já procuram serviços de beleza e estética.",

    health:
      "Fortalecer busca local, Google, avaliações e autoridade para captar pacientes com intenção.",

    local_service:
      "Construir presença forte no Google e mecanismos locais de geração de demanda.",

    professional:
      "Criar aquisição baseada em autoridade, busca, conteúdo, indicação estruturada e relacionamento.",

    b2b:
      "Estruturar prospecção ativa, parcerias e autoridade para gerar conversas com empresas do perfil ideal.",

    retail:
      "Combinar presença local, Google e redes sociais com ofertas capazes de gerar visita e recorrência.",

    ecommerce:
      "Organizar aquisição através de mídia, busca, conteúdo e canais capazes de gerar vendas mensuráveis.",

    education:
      "Construir demanda através de autoridade, conteúdo, busca e distribuição.",

    other:
      "Definir os canais com maior intenção de compra e construir um mecanismo previsível de geração de oportunidades."

  };


  return (
    moves[
      assessmentAnswers.segment
    ] ||
    moves.other
  );

}



function buildAssessmentReport() {

  const scores = {

    p:
      Number(
        assessmentAnswers.p_score ||
        0
      ),

    a:
      Number(
        assessmentAnswers.a_score ||
        0
      ),

    c:
      Number(
        assessmentAnswers.c_score ||
        0
      ),

    t:
      Number(
        assessmentAnswers.t_score ||
        0
      )

  };


  const entries =
    Object.entries(
      scores
    );


  const bottleneck =
    entries.reduce(
      (
        low,
        current
      ) =>
        current[1] <
        low[1]
          ? current
          : low
    );


  const strongest =
    entries.reduce(
      (
        high,
        current
      ) =>
        current[1] >
        high[1]
          ? current
          : high
    );


  const overallScore =
    Math.round(
      (
        scores.p +
        scores.a +
        scores.c +
        scores.t
      ) / 4
    );


  const key =
    bottleneck[0];


  const segment =
    getAssessmentSegmentProfile();


  const objective =
    goalNames[
      assessmentAnswers.goal
    ] ||
    "crescer com mais estrutura";


  const report = {

    scores,

    overallScore,

    maturity:
      getMaturity(
        overallScore
      ),

    bottleneck:
      key,

    bottleneckName:
      phaseFullNames[
        key
      ],

    bottleneckScore:
      bottleneck[1],

    strongest:
      strongest[0],

    strongestName:
      phaseFullNames[
        strongest[0]
      ],

    strongestScore:
      strongest[1],

    segment:
      segment.label,

    objective,

    diagnosis:
      "",

    priority:
      "",

    recommendations:
      [],

    avoid:
      ""

  };


  if (
    key === "p"
  ) {

    report.priority =
      "Fortalecer posicionamento, oferta e percepção de valor.";


    report.diagnosis =
      `Hoje o maior limitador aparece em Posicionamento. Para um negócio de ${segment.label}, isso indica espaço para tornar mais claro para quem a empresa é, qual problema resolve e por que deveria ser escolhida.`;


    report.recommendations = [

      "Definir um público prioritário e uma proposta de valor mais clara.",

      "Estruturar a principal oferta para tornar benefício, diferenciação e próximo passo fáceis de entender.",

      "Fortalecer presença, reputação e provas de confiança nos canais onde o cliente valida a empresa."

    ];


    report.avoid =
      "Aumentar muito o investimento em aquisição antes de corrigir mensagem, oferta e percepção.";

  }


  else if (
    key === "a"
  ) {

    report.priority =
      "Construir geração previsível de oportunidades.";


    report.diagnosis =
      `O principal gargalo está em Aquisição. A entrada de oportunidades ainda não sustenta com previsibilidade o objetivo de ${objective}, mesmo que outros pilares estejam relativamente mais estruturados.`;


    report.recommendations = [

      getSegmentAcquisitionMove(),

      "Reduzir dependência de um único canal e construir uma segunda fonte relevante de oportunidades.",

      "Medir origem, volume e resultado para saber quais canais realmente merecem investimento."

    ];


    report.avoid =
      "Adicionar automações ou complexidade operacional sem antes melhorar o fluxo de oportunidades.";

  }


  else if (
    key === "c"
  ) {

    report.priority =
      "Estruturar processo comercial e aumentar conversão.";


    report.diagnosis =
      "O maior desperdício está acontecendo depois que a oportunidade chega. Parte da demanda existente pode estar sendo perdida em atendimento, condução, follow-up ou falta de acompanhamento da conversão.";


    report.recommendations = [

      "Definir etapas claras entre entrada da oportunidade, qualificação, proposta e fechamento.",

      "Padronizar atendimento e criar uma rotina consistente de follow-up.",

      "Acompanhar taxa de conversão e motivos de perda para corrigir os maiores desperdícios."

    ];


    report.avoid =
      "Aumentar agressivamente a aquisição sem antes reduzir a perda de oportunidades no processo comercial.";

  }


  else {

    report.priority =
      "Construir capacidade operacional para sustentar crescimento.";


    report.diagnosis =
      "O gargalo principal está em Tecnologia e estrutura operacional. Processos manuais, informações espalhadas ou baixa visibilidade começam a limitar velocidade, controle e capacidade de crescer sem perder qualidade.";


    report.recommendations = [

      "Centralizar informações de clientes, oportunidades e próximos passos em uma estrutura confiável.",

      "Automatizar tarefas repetitivas somente depois que o processo estiver claramente definido.",

      "Criar indicadores simples para acompanhar volume, atendimento, conversão e capacidade operacional."

    ];


    report.avoid =
      "Aumentar significativamente o volume sem preparar a operação para absorver esse crescimento.";

  }


  return report;

}

/* ======================================================
   PACT CONVERSATION ENGINE — V1
====================================================== */

const pactConversationPillarCopy = {

  p:
    "Seu diagnóstico sugere que o principal limitador não está simplesmente em divulgar mais. Antes disso, existe uma questão de clareza, percepção ou estrutura da oferta que pode estar reduzindo o valor percebido pelo mercado.",

  a:
    "Seu diagnóstico não indica simplesmente que você precisa de mais tráfego. O ponto mais sensível está na capacidade de gerar novas oportunidades com consistência e entender quais canais realmente sustentam o crescimento.",

  c:
    "Tem uma coisa importante aqui: o problema não parece estar apenas em trazer mais pessoas. Parte do crescimento pode estar escapando depois que a oportunidade já entrou no negócio.",

  t:
    "Seu diagnóstico mostra que a operação pode estar começando a exigir mais da estrutura atual do que ela consegue absorver com controle, velocidade e previsibilidade."

};



const pactConversationMetricCopy = {

  p_clarity:
    "O ponto que mais chamou minha atenção foi Clareza. Isso indica que o cliente pode até entender o que você faz, mas nem sempre percebe rapidamente por que deveria escolher sua empresa.",

  p_audience:
    "O ponto que mais chamou minha atenção foi Público. Quando não existe um perfil prioritário muito claro, comunicação, oferta e aquisição acabam ficando mais dispersas.",

  p_trust:
    "O ponto que mais chamou minha atenção foi Confiança. Existe espaço para aumentar a percepção de segurança, autoridade e prova antes mesmo do cliente entrar em contato.",

  p_offer:
    "O ponto que mais chamou minha atenção foi Oferta. Isso costuma acontecer quando o serviço existe, mas ainda não está estruturado de uma forma simples de entender, comparar e comprar.",


  a_predictability:
    "O ponto que mais chamou minha atenção foi Previsibilidade. Isso significa que novas oportunidades podem até chegar, mas ainda é difícil controlar quando e em qual volume elas vão aparecer.",

  a_volume:
    "O ponto que mais chamou minha atenção foi Volume. Hoje a quantidade de novas oportunidades parece estar abaixo do necessário para sustentar o crescimento que você busca.",

  a_presence:
    "O ponto que mais chamou minha atenção foi Presença nos canais. Existe demanda, mas sua empresa ainda pode não estar aparecendo com força suficiente exatamente onde o cliente procura.",

  a_measurement:
    "O ponto que mais chamou minha atenção foi Mensuração. Você pode até gerar oportunidades, mas hoje é difícil saber com segurança quais canais realmente trazem clientes e quais apenas consomem esforço.",


  c_response:
    "O ponto que mais chamou minha atenção foi Velocidade de atendimento. Quando o primeiro contato oscila ou demora, parte da intenção de compra pode morrer antes da conversa comercial começar de verdade.",

  c_process:
    "O ponto que mais chamou minha atenção foi Processo. Existe venda acontecendo, mas a condução das oportunidades ainda pode depender demais de cada pessoa ou situação.",

  c_followup:
    "O ponto que mais chamou minha atenção foi Follow-up. Isso normalmente significa que oportunidades interessadas podem estar desaparecendo simplesmente porque ninguém continua a conversa no momento certo.",

  c_conversion:
    "O ponto que mais chamou minha atenção foi Conversão. Sem enxergar claramente quantas oportunidades avançam ou se perdem, fica difícil saber onde o comercial realmente está vazando.",


  t_organization:
    "O ponto que mais chamou minha atenção foi Organização. Informações espalhadas aumentam dependência de memória, mensagens e controles manuais.",

  t_automation:
    "O ponto que mais chamou minha atenção foi Automação. Existe trabalho repetitivo consumindo tempo que poderia estar sendo usado em atividades de maior valor.",

  t_capacity:
    "O ponto que mais chamou minha atenção foi Capacidade. Se a demanda aumentasse rapidamente, a estrutura atual provavelmente sentiria bastante esse crescimento.",

  t_data:
    "O ponto que mais chamou minha atenção foi Dados. Sem visibilidade operacional, muitas decisões acabam sendo tomadas por percepção em vez de evidência."

};



const pactConversationRealityOptions = {

  p: [
    {
      value: "difference",
      label: "É difícil explicar nosso diferencial"
    },
    {
      value: "audience",
      label: "Falamos com públicos demais"
    },
    {
      value: "trust",
      label: "Falta confiança na marca"
    },
    {
      value: "offer",
      label: "Nossa oferta ainda confunde"
    }
  ],


  a: [
    {
      value: "referral",
      label: "Dependemos muito de indicação"
    },
    {
      value: "low_volume",
      label: "Entram poucos contatos"
    },
    {
      value: "unstable",
      label: "O volume oscila demais"
    },
    {
      value: "unknown_channel",
      label: "Não sabemos qual canal funciona"
    }
  ],


  c: [
    {
      value: "response",
      label: "Demoramos pra responder"
    },
    {
      value: "process",
      label: "Falta um processo claro"
    },
    {
      value: "followup",
      label: "O follow-up acaba se perdendo"
    },
    {
      value: "conversion",
      label: "Não acompanhamos a conversão"
    }
  ],


  t: [
    {
      value: "scattered",
      label: "As informações ficam espalhadas"
    },
    {
      value: "manual",
      label: "Tem muito trabalho manual"
    },
    {
      value: "capacity",
      label: "A equipe já está no limite"
    },
    {
      value: "visibility",
      label: "Falta controle do que acontece"
    }
  ]

};

const pactConversationRealityQuestions = {

  p: "Hoje, onde você sente mais dificuldade no posicionamento?",

  a: "Hoje, o que mais incomoda na entrada de novos clientes?",

  c: "E no comercial, onde você sente que mais perde oportunidade?",

  t: "E na operação, o que mais está pesando hoje?"

};
  

function getPactConversationState() {

  if (
    !assessmentAnswers.pact_conversation
  ) {

    assessmentAnswers.pact_conversation =
      {};

  }


  return assessmentAnswers
    .pact_conversation;

}



function pactConversationWait(
  milliseconds
) {

  return new Promise(
    (resolve) => {

      setTimeout(
        resolve,
        milliseconds
      );

    }
  );

}



function appendPactConversationMessage(
  text,
  role = "diego"
) {

  const messages =
    document.getElementById(
      "pactConversationMessages"
    );


  if (!messages) {
    return null;
  }


  const message =
    document.createElement(
      "div"
    );


  message.className =
    `pact-chat-message pact-chat-message-${role}`;


  message.innerHTML =
    `
      <div class="pact-chat-bubble">
        ${
          escapePACTHTML(
            text
          ).replaceAll(
            "\n",
            "<br>"
          )
        }
      </div>
    `;


  messages.appendChild(
    message
  );


  gsap.fromTo(
    message,
    {
      autoAlpha: 0,
      y: 12,
      scale: 0.985
    },
    {
      autoAlpha: 1,
      y: 0,
      scale: 1,

      duration: 0.36,

      ease: "power3.out"
    }
  );


  setTimeout(
    () => {

      messages.scrollTo({
        top: messages.scrollHeight,
        behavior: "smooth"
      });

    },
    80
  );


  return message;

}

function appendPactConversationEvent(
  text
) {

  const messages =
    document.getElementById(
      "pactConversationMessages"
    );


  if (!messages) {
    return;
  }


  const event =
    document.createElement(
      "div"
    );


  event.className =
    "pact-chat-event";


  event.innerHTML =
    `
      <span></span>

      <small>
        ${escapePACTHTML(text)}
      </small>
    `;


  messages.appendChild(
    event
  );


  gsap.fromTo(
    event,
    {
      autoAlpha: 0,
      y: 8
    },
    {
      autoAlpha: 1,
      y: 0,

      duration: 0.4,

      ease: "power3.out"
    }
  );


  messages.scrollTo({
    top: messages.scrollHeight,
    behavior: "smooth"
  });

}



function showPactTyping() {

  const messages =
    document.getElementById(
      "pactConversationMessages"
    );


  if (!messages) {
    return null;
  }


  const typing =
    document.createElement(
      "div"
    );


  typing.className =
    "pact-chat-typing-wrap";


  typing.innerHTML =
    `
      <div class="pact-chat-typing">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <small>
        Diego está digitando...
      </small>
    `;


  messages.appendChild(
    typing
  );


  gsap.fromTo(
    typing,
    {
      autoAlpha: 0,
      y: 7
    },
    {
      autoAlpha: 1,
      y: 0,

      duration: 0.25
    }
  );


  messages.scrollTo({
    top: messages.scrollHeight,
    behavior: "smooth"
  });


  return typing;

}



async function appendDiegoMessage(
  text,
  minimumTypingTime = 1200
) {

  /*
    Pequeno silêncio antes de começar
    a digitar.
  */

  await pactConversationWait(
    520
  );


  const typing =
    showPactTyping();


  /*
    Quanto maior a mensagem,
    um pouco maior o tempo de digitação.
  */

  const calculatedTypingTime =
    Math.min(
      3200,
      Math.max(
        minimumTypingTime,
        900 + text.length * 14
      )
    );


  await pactConversationWait(
    calculatedTypingTime
  );


  typing?.remove();


  appendPactConversationMessage(
    text,
    "diego"
  );


  /*
    Respiro depois de cada mensagem.
  */

  await pactConversationWait(
    850
  );

}

/* ======================================================
   FLOATING CHAT — INTERNAL WHEEL CONTROL
====================================================== */

document.addEventListener(
  "wheel",
  (event) => {

    const messages =
      event.target.closest(
        ".pact-conversation-messages"
      );

    if (!messages) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    messages.scrollTop +=
      event.deltaY;

  },
  {
    passive: false
  }
);

/* ======================================================
   FLOATING CHAT — MINIMIZE / EXPAND
====================================================== */

document.addEventListener(
  "click",
  (event) => {

    const toggle =
      event.target.closest(
        "#pactConversationToggle"
      );

    if (!toggle) {
      return;
    }


    const conversation =
      document.getElementById(
        "pactConversation"
      );


    if (!conversation) {
      return;
    }


    const minimized =
      conversation.classList.toggle(
        "is-minimized"
      );


    toggle.setAttribute(
      "aria-expanded",
      String(!minimized)
    );


    toggle.setAttribute(
      "aria-label",
      minimized
        ? "Abrir conversa"
        : "Minimizar conversa"
    );


    const icon =
      toggle.querySelector(
        "span"
      );


    if (icon) {
      icon.textContent =
        minimized
          ? "↑"
          : "−";
    }

  }
);

  
function renderPactConversationOptions(
  options,
  onSelect
) {

  const container =
    document.getElementById(
      "pactConversationOptions"
    );


  if (!container) {
    return;
  }


  container.innerHTML =
    "";


  options.forEach(
    (optionItem) => {

      const button =
        document.createElement(
          "button"
        );


      button.type =
        "button";


      button.className =
        "pact-chat-option";


      button.innerHTML =
        `
          <span>
            ${escapePACTHTML(
              optionItem.label
            )}
          </span>

          <small aria-hidden="true">
            →
          </small>
        `;


      button.addEventListener(
        "click",
        async () => {

          container.innerHTML =
            "";


          appendPactConversationMessage(
            optionItem.label,
            "lead"
          );


          await onSelect(
            optionItem
          );

        }
      );


      container.appendChild(
        button
      );

    }
  );

  const optionButtons =
  container.querySelectorAll(
    ".pact-chat-option"
  );


gsap.fromTo(
  optionButtons,
  {
    autoAlpha: 0,
    y: 10
  },
  {
    autoAlpha: 1,
    y: 0,

    duration: 0.34,

    stagger: 0.07,

    ease: "power3.out"
  }
);

}



function getCriticalConversationMetric(
  report
) {

  const metrics =
    pactMetricMap[
      report.bottleneck
    ] || [];


  let lowestMetric =
    null;


  metrics.forEach(
    (metric) => {

      const score =
        getAssessmentMetricScore(
          metric.id
        );


      if (
        !lowestMetric ||
        score <
        lowestMetric.score
      ) {

        lowestMetric = {
          ...metric,
          score
        };

      }

    }
  );


  return lowestMetric;

}

/* ======================================================
   PACT CONVERSATION — IMPACT
====================================================== */

async function showPactImpactQuestion(
  report
) {

  const state =
    getPactConversationState();


  const status =
    document.getElementById(
      "pactConversationStage"
    );


  if (status) {

    status.textContent =
      "ANÁLISE EM ANDAMENTO";

  }


  /* PERGUNTA */

  await appendDiegoMessage(
    "E isso hoje pesa onde de verdade?",
    700
  );


  renderPactConversationOptions(
    [
      {
        value: "lost_sales",
        label: "Estamos perdendo vendas"
      },

      {
        value: "blocked_growth",
        label: "Está travando o crescimento"
      },

      {
        value: "time",
        label: "Está tomando tempo demais"
      },

      {
        value: "unpredictability",
        label: "Falta previsibilidade"
      },

      {
        value: "not_urgent",
        label: "Ainda não pesa tanto"
      }
    ],

    async (
      selected
    ) => {

      state.impact =
        selected.value;

      state.impact_label =
        selected.label;


     if (
  selected.value ===
  "lost_sales"
) {

  await appendDiegoMessage(
    "Aí já muda de figura. Está virando venda perdida.",
    600
  );

}


else if (
  selected.value ===
  "blocked_growth"
) {

  await appendDiegoMessage(
    "Entendi. Então isso já está segurando vocês.",
    600
  );

}


else if (
  selected.value ===
  "time"
) {

  await appendDiegoMessage(
    "Entendi. Está roubando tempo demais da operação.",
    600
  );

}


else if (
  selected.value ===
  "unpredictability"
) {

  await appendDiegoMessage(
    "Sim. Sem previsibilidade fica difícil decidir.",
    600
  );

}


else {

  await appendDiegoMessage(
    "Boa. Então não precisa virar prioridade agora.",
    600
  );

}


      await showPactTimingQuestion(
        report
      );

    }
  );

}
/* ======================================================
   PACT CONVERSATION — TIMING
====================================================== */

async function showPactTimingQuestion(
  report
) {

  const state =
    getPactConversationState();


  const status =
    document.getElementById(
      "pactConversationStage"
    );


  if (status) {

    status.textContent =
      "ANÁLISE EM ANDAMENTO";

  }


  await appendDiegoMessage(
    "E você quer resolver isso quando?",
    700
  );


  renderPactConversationOptions(
    [
      {
        value: "now",
        label: "Quero resolver agora"
      },

      {
        value: "30_days",
        label: "Nos próximos 30 dias"
      },

      {
        value: "months",
        label: "Mais pra frente"
      },

      {
        value: "exploring",
        label: "Só estou entendendo"
      }
    ],

    async (
      selected
    ) => {

      state.timing =
        selected.value;

      state.timing_label =
        selected.label;


      if (
        selected.value ===
        "now"
      ) {

        state.temperature =
          "hot";


        await appendDiegoMessage(
          "Boa. Então isso já é prioridade.",
          550
        );

      }


      else if (
        selected.value ===
        "30_days"
      ) {

        state.temperature =
          "hot";


        await appendDiegoMessage(
          "Perfeito. Dá pra organizar isso sem correria.",
          600
        );

      }


      else if (
        selected.value ===
        "months"
      ) {

        state.temperature =
          "warm";


        await appendDiegoMessage(
          "Entendi. Então você não precisa correr agora.",
          600
        );

      }


      else {

        state.temperature =
          "nurture";


        await appendDiegoMessage(
          "Tranquilo. Então vamos usar isso só pra te dar clareza.",
          600
        );

      }


      await showPactPrescription(
        report
      );

    }
  );

}

/* ======================================================
   PACT CONVERSATION — PRESCRIPTION
====================================================== */

async function showPactPrescription(
  report
) {

  const state =
    getPactConversationState();


  const status =
    document.getElementById(
      "pactConversationStage"
    );


  if (status) {

    status.textContent =
      "ANÁLISE EM ANDAMENTO";

  }


  /* SÍNTESE */

  await appendDiegoMessage(
    "Beleza. Agora ficou mais claro.",
    600
  );


  await appendDiegoMessage(
    `Eu olharia primeiro para ${report.bottleneckName.toLowerCase()}.`,
    700
  );


  /* CONECTA COM O QUE A PESSOA DISSE */

  if (
    state.impact_label
  ) {

    await appendDiegoMessage(
      `Principalmente porque você me disse que ${state.impact_label.toLowerCase()}.`,
      800
    );

  }


  /* PRIORIDADE */

  await appendDiegoMessage(
    "Eu não tentaria mexer em tudo agora.",
    650
  );


  await appendDiegoMessage(
    `Começaria por isso: ${report.priority}`,
    850
  );


  await pactConversationWait(
    450
  );


  await showPactNextStep(
    report
  );

}
/* ======================================================
   PACT CONVERSATION — NEXT STEP
====================================================== */

async function showPactNextStep(
  report
) {

  const state =
    getPactConversationState();


  const status =
    document.getElementById(
      "pactConversationStage"
    );


  /* ======================================================
     QUENTE / MORNO
  ====================================================== */

  if (
  state.temperature === "hot"
) {

    if (status) {
      status.textContent =
        "PRÓXIMO PASSO";
    }


    await appendDiegoMessage(
      "Acho que aqui já vale uma conversa rápida.",
      700
    );


    await appendDiegoMessage(
      "Eu já vou com seu diagnóstico em mãos.",
      650
    );


    await appendDiegoMessage(
      "Quer ver um horário comigo pelo WhatsApp?",
      750
    );


    renderPactConversationOptions(
      [
        {
          value: "schedule",
          label: "Quero agendar"
        },

        {
          value: "whatsapp",
          label: "Prefiro falar primeiro"
        },

        {
          value: "later",
          label: "Agora não"
        }
      ],

      async (
        selected
      ) => {

        state.next_step =
          selected.value;

        state.next_step_label =
          selected.label;


        /* ==================================================
           AGENDAR
        ================================================== */

        if (
          selected.value ===
          "schedule"
        ) {

          await appendDiegoMessage(
            "Fechado.",
            500
          );


          await appendDiegoMessage(
            "Me chama por lá e eu te mando os próximos horários.",
            700
          );


          if (status) {
            status.textContent =
              "PRONTO PARA AGENDAR";
          }


          renderPactConversationOptions(
            [
              {
                value: "open_schedule_whatsapp",
                label: "Ver horários no WhatsApp ↗"
              }
            ],

            async () => {

              const firstName =
                (
                  assessmentAnswers.name ||
                  ""
                )
                  .trim()
                  .split(/\s+/)[0];


              const message =
`Oi, Diego! Sou ${firstName || "eu"}.

Acabei de concluir meu Diagnóstico PACT e quero ver um horário para conversarmos.

Empresa: ${assessmentAnswers.company || ""}
Principal ponto: ${report.bottleneckName}`;


              window.open(
                `https://wa.me/5511970349654?text=${
                  encodeURIComponent(
                    message
                  )
                }`,
                "_blank"
              );

            }
          );


          return;
        }


        /* ==================================================
           FALAR PRIMEIRO
        ================================================== */

        if (
          selected.value ===
          "whatsapp"
        ) {

          await appendDiegoMessage(
            "Claro.",
            500
          );


          await appendDiegoMessage(
            "Pode me chamar por lá e a gente continua.",
            650
          );


          renderPactConversationOptions(
            [
              {
                value: "open_whatsapp",
                label: "Falar com Diego no WhatsApp ↗"
              }
            ],

            async () => {

              const firstName =
                (
                  assessmentAnswers.name ||
                  ""
                )
                  .trim()
                  .split(/\s+/)[0];


              const message =
`Oi, Diego! Sou ${firstName || "eu"}.

Acabei de fazer meu Diagnóstico PACT.

Empresa: ${assessmentAnswers.company || ""}
Principal ponto: ${report.bottleneckName}

Quero continuar nossa conversa por aqui.`;


              window.open(
                `https://wa.me/5511970349654?text=${
                  encodeURIComponent(
                    message
                  )
                }`,
                "_blank"
              );

            }
          );


          return;
        }


        /* ==================================================
           AGORA NÃO
        ================================================== */

        await appendDiegoMessage(
          "Tranquilo.",
          500
        );


        await appendDiegoMessage(
          "Seu diagnóstico já te mostra onde olhar primeiro.",
          700
        );


        if (status) {
          status.textContent =
            "ANÁLISE CONCLUÍDA";
        }

      }
    );


    return;
  }
  /* ======================================================
     MAIS PRA FRENTE
  ====================================================== */

  if (
    state.temperature === "warm"
  ) {

    if (status) {
      status.textContent =
        "ANÁLISE CONCLUÍDA";
    }


    await appendDiegoMessage(
      "Entendi. Então eu deixaria isso no radar, sem pressa.",
      650
    );


    await appendDiegoMessage(
      "Se quiser, posso te deixar meu WhatsApp e você fala comigo quando fizer sentido.",
      750
    );


    renderPactConversationOptions(
      [
        {
          value: "whatsapp",
          label: "Quero seu WhatsApp"
        },

        {
          value: "finish",
          label: "Por enquanto está ótimo"
        }
      ],

      async (
        selected
      ) => {

        state.next_step =
          selected.value;

        state.next_step_label =
          selected.label;


        if (
          selected.value ===
          "whatsapp"
        ) {

          await appendDiegoMessage(
            "Claro.",
            450
          );


          await appendDiegoMessage(
            "Me chama por lá quando quiser continuar.",
            650
          );


          renderPactConversationOptions(
            [
              {
                value: "open_whatsapp",
                label: "Falar com Diego no WhatsApp ↗"
              }
            ],

            async () => {

              const firstName =
                (
                  assessmentAnswers.name ||
                  ""
                )
                  .trim()
                  .split(/\s+/)[0];


              const message =
`Oi, Diego! Sou ${firstName || "eu"}.

Fiz meu Diagnóstico PACT e quero deixar essa conversa no radar para retomarmos mais pra frente.

Empresa: ${assessmentAnswers.company || ""}
Principal ponto: ${report.bottleneckName}`;


              window.open(
                `https://wa.me/5511970349654?text=${
                  encodeURIComponent(
                    message
                  )
                }`,
                "_blank"
              );

            }
          );


          return;
        }


        await appendDiegoMessage(
          "Boa. Então fica com essa prioridade em mente.",
          600
        );

      }
    );


    return;
  }

  /* ======================================================
     AINDA ESTÁ ENTENDENDO
  ====================================================== */

  if (status) {
    status.textContent =
      "ANÁLISE CONCLUÍDA";
  }


  await appendDiegoMessage(
    "Pelo seu momento, eu não forçaria uma reunião agora.",
    700
  );


  await appendDiegoMessage(
    "Guarda essa prioridade e volta nela quando fizer sentido.",
    700
  );


  renderPactConversationOptions(
    [
      {
        value: "whatsapp",
        label: "Quero falar com o Diego"
      },

      {
        value: "finish",
        label: "Ficou claro"
      }
    ],

    async (
      selected
    ) => {

      if (
        selected.value ===
        "whatsapp"
      ) {

        const firstName =
          (
            assessmentAnswers.name ||
            ""
          )
            .trim()
            .split(/\s+/)[0];


        const message =
`Oi, Diego! Sou ${firstName || "eu"}.

Fiz meu Diagnóstico PACT e queria trocar uma ideia com você.

Empresa: ${assessmentAnswers.company || ""}
Principal ponto: ${report.bottleneckName}`;


        window.open(
          `https://wa.me/5511970349654?text=${
            encodeURIComponent(
              message
            )
          }`,
          "_blank"
        );


        return;
      }


      await appendDiegoMessage(
        "Boa. Espero que tenha te dado clareza.",
        600
      );

    }
  );

}
async function showPactRealityQuestion(
  report,
  phase = report.bottleneck
) {

  const state =
    getPactConversationState();


  /* PERGUNTA CURTA */

  await appendDiegoMessage(
  pactConversationRealityQuestions[
    phase
  ] ||
  pactConversationRealityQuestions[
    report.bottleneck
  ] ||
  "E onde isso mais pega hoje?",
  700
);

const pactConversationRealityReplies = {

  /* POSICIONAMENTO */

  difference:
    "Entendi. Então o diferencial ainda não está ficando claro.",

  audience:
    "Entendi. Parece que a comunicação está tentando falar com gente demais.",

  trust:
    "Faz sentido. Confiança pesa muito na decisão.",

  offer:
    "Entendi. Então a oferta ainda precisa ficar mais simples de entender.",


  /* AQUISIÇÃO */

  referral:
    "Entendi. Então indicação ainda carrega boa parte da entrada de clientes.",

  low_volume:
    "Entendi. Então o problema começa no volume de oportunidades.",

  unstable:
    "Entendi. Então até entra demanda, mas não dá pra contar com ela.",

  unknown_channel:
    "Faz sentido. Sem saber o que funciona fica difícil repetir resultado.",


  /* COMERCIAL */

  response:
    "Entendi. Então algumas oportunidades já esfriam no começo.",

  process:
    "Entendi. Então cada atendimento acaba acontecendo de um jeito.",

  followup:
    "Entendi. Então algumas oportunidades estão ficando pelo caminho.",

  conversion:
    "Entendi. Sem acompanhar isso fica difícil saber onde as vendas estão escapando.",


  /* TECNOLOGIA */

  scattered:
    "Entendi. Então a informação acaba ficando espalhada demais.",

  manual:
    "Entendi. Então tem coisa demais dependendo de trabalho manual.",

  capacity:
    "Entendi. A operação já está começando a bater no limite.",

  visibility:
    "Entendi. Então falta enxergar o que está acontecendo com clareza."

};

  const options =
    pactConversationRealityOptions[
      phase
    ] ||
    pactConversationRealityOptions[
      report.bottleneck
    ];


  renderPactConversationOptions(
    options,

    async (
      selected
    ) => {

      state.reality =
        selected.value;

      state.reality_label =
        selected.label;


      /* REAÇÃO HUMANA */

      await appendDiegoMessage(
  pactConversationRealityReplies[
    selected.value
  ] ||
  "Entendi.",
  650
);


      /* PRÓXIMA ETAPA */

      await showPactImpactQuestion(
        report
      );


      const status =
        document.getElementById(
          "pactConversationStage"
        );


      if (status) {

        status.textContent =
          "ENTENDENDO O CENÁRIO";

      }

    }
  );

}


async function showPactPerceivedPillarQuestion(
  report,
  options = {}
) {

  const {
    skipIntro = false
  } = options;


  const state =
    getPactConversationState();


  /*
    Só faz a pergunta se ela
    ainda não tiver sido feita.
  */

  if (!skipIntro) {

    await appendDiegoMessage(
      "Qual área você sente mais no dia a dia?",
      700
    );

  }


  renderPactConversationOptions(
    [
      {
        value: "p",
        label: "Posicionamento"
      },
      {
        value: "a",
        label: "Aquisição"
      },
      {
        value: "c",
        label: "Comercial"
      },
      {
        value: "t",
        label: "Tecnologia"
      }
    ],

    async (
      selected
    ) => {

      state.perceived_pillar =
        selected.value;

      state.perceived_pillar_label =
        selected.label;


      /*
        A percepção bateu
        com o diagnóstico.
      */

      if (
        selected.value ===
        report.bottleneck
      ) {

        await appendDiegoMessage(
          "Boa. Então estamos olhando para o mesmo ponto.",
          650
        );

      }

      /*
        A pessoa percebe
        outra área.
      */

      else {

        await appendDiegoMessage(
          `Entendi. Você sente ${selected.label.toLowerCase()} mais forte hoje.`,
          700
        );


        await appendDiegoMessage(
          `${report.bottleneckName} apareceu mais no diagnóstico.`,
          700
        );

      }


      await showPactRealityQuestion(
        report,
        selected.value
      );

    }
  );

}


async function startPactConversation(
  report,
  options = {}
) {

  const {
    autoScroll = true
  } = options;

  const conversation =
    document.getElementById(
      "pactConversation"
    );


  const startButton =
    document.getElementById(
      "pactConversationStart"
    );


  const messages =
    document.getElementById(
      "pactConversationMessages"
    );


  const state =
    getPactConversationState();


  if (
    !conversation ||
    !messages
  ) {
    return;
  }


  if (
  state.started
) {

  if (autoScroll) {

    conversation.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  }

  return;
}


  state.started =
    true;


  conversation.hidden =
    false;
  
/* MOVE CHAT TO GLOBAL FLOATING LAYER */

if (
  conversation.parentElement !== document.body
) {
  document.body.appendChild(
    conversation
  );
}

  if (startButton) {

    startButton.disabled =
      true;

    startButton.classList.add(
      "is-started"
    );

  }


  gsap.fromTo(
    conversation,
    {
      autoAlpha: 0,
      y: 28
    },
    {
      autoAlpha: 1,
      y: 0,

      duration: 0.55,

      ease: "power3.out"
    }
  );


  if (autoScroll) {

  conversation.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

}


  const name =
    assessmentAnswers.name ||
    "";


  const criticalMetric =
    getCriticalConversationMetric(
      report
    );

await pactConversationWait(
  600
);


/* ======================================================
   ABERTURA HUMANIZADA
====================================================== */

appendPactConversationEvent(
  "Diego iniciou sua análise"
);


await pactConversationWait(
  900
);


/* MENSAGEM 1 */

await appendDiegoMessage(
  name
    ? `Diego aqui, ${name.trim().split(/\s+/)[0]} 👋`
    : "Diego aqui 👋",
  650
);


/* MENSAGEM 2 */

await appendDiegoMessage(
  `Vi seu diagnóstico. ${report.bottleneckName} foi o ponto que mais me chamou atenção.`,
  850
);


/* MENSAGEM 3 */

if (criticalMetric) {

  await appendDiegoMessage(
    `Principalmente ${criticalMetric.label.toLowerCase()}. Isso bate com o que você sente hoje?`,
    950
  );

}
else {

  await appendDiegoMessage(
    "Isso bate com o que você sente hoje?",
    850
  );

}

  renderPactConversationOptions(
    [
      {
        value: "yes",
        label: "Sim, bastante"
      },

      {
        value: "partly",
        label: "Em parte"
      },

      {
        value: "different",
        label: "Eu imaginava outro problema"
      }
    ],

    async (
  selected
) => {

  state.validation =
    selected.value;

  state.validation_label =
    selected.label;


  /* SIM */

  if (
    selected.value ===
    "yes"
  ) {

    await appendDiegoMessage(
      "Faz sentido.",
      550
    );


    await showPactRealityQuestion(
      report
    );

    return;
  }


  /* MAIS OU MENOS */

  if (
    selected.value ===
    "partly"
  ) {

    await appendDiegoMessage(
      "Entendi.",
      500
    );


    await appendDiegoMessage(
      "Qual área você sente mais no dia a dia?",
      750
    );


    await showPactPerceivedPillarQuestion(
      report,
      {
        skipIntro: true
      }
    );

    return;
  }


  /* ACHO QUE É OUTRO PROBLEMA */

  await appendDiegoMessage(
    "Pode ser.",
    500
  );


  await appendDiegoMessage(
    "O que você sente que mais pesa hoje?",
    750
  );


  await showPactPerceivedPillarQuestion(
    report,
    {
      skipIntro: true
    }
  );

}
  );

}
function renderAssessmentResult() {

  const report =
    buildAssessmentReport();
sendPactLeadToSheet(
  report
);
const pactBalance =
  getPactBalance(
    report.scores
  );


const pactGap =
  getPactGap(
    report.scores
  );


const pactRadarPoints =
  buildPactRadarPoints(
    report.scores
  );


const criticalMetric =
  getLowestPactMetric(
    report.bottleneck
  );


const pactMetricGroups =
  [
    {
      key: "p",
      letter: "P",
      title: "POSICIONAMENTO"
    },
    {
      key: "a",
      letter: "A",
      title: "AQUISIÇÃO"
    },
    {
      key: "c",
      letter: "C",
      title: "COMERCIAL"
    },
    {
      key: "t",
      letter: "T",
      title: "TECNOLOGIA"
    }
  ];

  const company =
    escapePACTHTML(
      assessmentAnswers.company ||
      "Seu negócio"
    );


  const name =
    escapePACTHTML(
      assessmentAnswers.name ||
      ""
    );


  assessmentResult
    .innerHTML =
      `
        <div class="assessment-result-header">

          <span class="assessment-result-kicker">
            DIAGNÓSTICO CONCLUÍDO
          </span>


          <div class="assessment-result-heading">

            <div>

              <h2>
                ${company}
              </h2>

              <p>
                ${
                  name
                    ? `${name}, esta é a leitura atual do seu negócio.`
                    : "Esta é a leitura atual do seu negócio."
                }
              </p>

            </div>


            <div class="assessment-result-score">

              <span>
                SCORE PACT
              </span>

              <strong>
                ${report.overallScore}
              </strong>

              <small>
                / 100
              </small>

            </div>

          </div>


          <div class="assessment-result-maturity">

            <span>
              MATURIDADE
            </span>

            <strong>
              ${report.maturity}
            </strong>

          </div>

        </div>

<div class="assessment-intelligence">


  <!-- RADAR -->

  <div class="assessment-radar-card">

    <div class="assessment-report-block-head">

      <span>
        MAPA PACT
      </span>

      <small>
        EQUILÍBRIO ESTRUTURAL
      </small>

    </div>


    <div class="assessment-radar">

      <svg
        viewBox="0 0 280 280"
        role="img"
        aria-label="Radar dos quatro pilares PACT"
      >

        <!-- GRID -->

        <polygon
          points="140,46 234,140 140,234 46,140"
          class="assessment-radar-grid assessment-radar-grid-outer"
        />

        <polygon
          points="140,77 203,140 140,203 77,140"
          class="assessment-radar-grid"
        />

        <polygon
          points="140,108 172,140 140,172 108,140"
          class="assessment-radar-grid"
        />


        <!-- AXES -->

        <line
          x1="140"
          y1="46"
          x2="140"
          y2="234"
          class="assessment-radar-axis"
        />

        <line
          x1="46"
          y1="140"
          x2="234"
          y2="140"
          class="assessment-radar-axis"
        />


        <!-- REAL BUSINESS DATA -->

        <polygon
          points="${pactRadarPoints}"
          class="assessment-radar-data"
        />

      </svg>


      <span class="assessment-radar-label assessment-radar-label-p">
        P
      </span>

      <span class="assessment-radar-label assessment-radar-label-a">
        A
      </span>

      <span class="assessment-radar-label assessment-radar-label-c">
        C
      </span>

      <span class="assessment-radar-label assessment-radar-label-t">
        T
      </span>

    </div>

  </div>



  <!-- EXECUTIVE INDICATORS -->

  <div class="assessment-executive-card">

    <div class="assessment-report-block-head">

      <span>
        INDICADORES EXECUTIVOS
      </span>

      <small>
        LEITURA DERIVADA
      </small>

    </div>


    <div class="assessment-executive-grid">


      <div class="assessment-executive-metric">

        <span>
          EQUILÍBRIO PACT
        </span>

        <strong>
          ${pactBalance}%
        </strong>

        <small>
          ${
            pactBalance >= 75
              ? "estrutura equilibrada"
              : pactBalance >= 55
                ? "estrutura parcialmente desigual"
                : "desequilíbrio relevante"
          }
        </small>

      </div>


      <div class="assessment-executive-metric">

        <span>
          GAP ESTRUTURAL
        </span>

        <strong>
          ${pactGap}
        </strong>

        <small>
          pontos entre melhor e pior pilar
        </small>

      </div>


      <div class="assessment-executive-metric">

        <span>
          PILAR MAIS FORTE
        </span>

        <strong class="assessment-executive-word">
          ${report.strongestName}
        </strong>

        <small>
          ${report.strongestScore}/100
        </small>

      </div>


      <div class="assessment-executive-metric is-critical">

        <span>
          MAIOR FRAGILIDADE INTERNA
        </span>

        <strong class="assessment-executive-word">
          ${criticalMetric.label}
        </strong>

        <small>
          ${criticalMetric.score}/100 · ${report.bottleneckName}
        </small>

      </div>


    </div>

  </div>


</div>



<!-- MICRODIAGNÓSTICO -->

<div class="assessment-microdiagnostic">

  <div class="assessment-report-block-head">

    <span>
      MICRODIAGNÓSTICO
    </span>

    <small>
      COMO CADA SCORE FOI FORMADO
    </small>

  </div>


  <div class="assessment-micro-grid">

    ${
      pactMetricGroups.map(
        (group) => {

          const metrics =
            getPactMetricRows(
              group.key
            );


          return `
            <div
              class="assessment-micro-card ${
                report.bottleneck === group.key
                  ? "is-bottleneck"
                  : ""
              }"
            >

              <div class="assessment-micro-card-head">

                <span>
                  ${group.letter}
                </span>

                <div>

                  <small>
                    ${group.title}
                  </small>

                  <strong>
                    ${report.scores[group.key]}/100
                  </strong>

                </div>

              </div>


              <div class="assessment-micro-list">

                ${
                  metrics.map(
                    (metric) => `
                      <div class="assessment-micro-item">

                        <div class="assessment-micro-copy">

                          <span>
                            ${metric.label}
                          </span>

                          <strong>
                            ${metric.score}
                          </strong>

                        </div>


                        <div class="assessment-micro-bar">

                          <i
  data-micro-score="${metric.score}"
></i>

                        </div>

                      </div>
                    `
                  ).join("")
                }

              </div>

            </div>
          `;

        }
      ).join("")
    }

  </div>

</div>

        <div class="assessment-result-pillars">

          ${
            [
              [
                "p",
                "P",
                "POSICIONAMENTO"
              ],
              [
                "a",
                "A",
                "AQUISIÇÃO"
              ],
              [
                "c",
                "C",
                "COMERCIAL"
              ],
              [
                "t",
                "T",
                "TECNOLOGIA"
              ]
            ]
              .map(
                (
                  [
                    key,
                    letter,
                    label
                  ]
                ) =>
                  `
                    <div
                      class="assessment-result-pillar ${
                        report.bottleneck === key
                          ? "is-bottleneck"
                          : ""
                      }"
                    >

                      <div class="assessment-result-pillar-head">

                        <span>
                          ${letter}
                        </span>

                        <strong>
                          ${label}
                        </strong>

                        <b>
                          ${report.scores[key]}
                        </b>

                      </div>

                      <div class="assessment-result-bar">

                        <i
                          data-result-score="${report.scores[key]}"
                        ></i>

                      </div>

                    </div>
                  `
              )
              .join("")
          }

        </div>



        <div class="assessment-result-bottleneck">

          <div class="assessment-result-bottleneck-mark">

            <span>
              GARGALO PRINCIPAL
            </span>

            <strong>
              ${report.bottleneck.toUpperCase()}
            </strong>

          </div>


          <div>

            <span class="assessment-result-area">
              ${report.bottleneckName.toUpperCase()}
            </span>

            <h3>
              ${report.priority}
            </h3>

            <p>
              ${report.diagnosis}
            </p>

          </div>

        </div>



        <div class="assessment-result-reading">

          <span>
            LEITURA ESTRATÉGICA
          </span>

          <p>

            Seu melhor pilar neste momento é

            <strong>
              ${report.strongestName}
              (${report.strongestScore}/100)
            </strong>,

            enquanto

            <strong>
              ${report.bottleneckName}
              (${report.bottleneckScore}/100)
            </strong>

            aparece como o principal limitador.

          </p>

        </div>



        <div class="assessment-result-actions">

          <span>
            3 MOVIMENTOS RECOMENDADOS
          </span>


          <div class="assessment-result-action-grid">

            ${
              report.recommendations
                .map(
                  (
                    text,
                    index
                  ) =>
                    `
                      <div class="assessment-result-action">

                        <span>
                          0${index + 1}
                        </span>

                        <strong>
                          ${escapePACTHTML(
                            text
                          )}
                        </strong>

                      </div>
                    `
                )
                .join("")
            }

          </div>

        </div>



        <div class="assessment-result-avoid">

          <span>
            O QUE NÃO PRIORIZAR AGORA
          </span>

          <strong>
            ${escapePACTHTML(
              report.avoid
            )}
          </strong>

        </div>


          <div class="assessment-result-cta pact-conversation-entry">

  <div>

    <span>
      SUA ANÁLISE CONTINUA
    </span>

    <h3>
      O score mostra onde olhar.<br>
      Agora vamos entender o porquê.
    </h3>

    <p>
      Quero cruzar o que apareceu no seu
      Diagnóstico PACT com aquilo que você
      realmente percebe dentro da operação.
    </p>

  </div>


  <div class="pact-conversation-entry-actions">




    <button
      type="button"
      class="pact-report-whatsapp"
      id="assessmentResultContact"
    >
      Prefiro falar no WhatsApp
      <span aria-hidden="true">
        ↗
      </span>
    </button>

  </div>

</div>



<div
  class="pact-conversation"
  id="pactConversation"
  hidden
>

  <div class="pact-conversation-header">

    <div class="pact-conversation-identity">

      <div class="pact-conversation-avatar">
        DN
      </div>

      <div>

        <strong>
          Diego Nogueira
        </strong>

        <span>
          Método PACT
        </span>

      </div>

    </div>


    <div class="pact-conversation-stage">

      <span></span>

      <small
        id="pactConversationStage"
      >
        ANÁLISE EM ANDAMENTO
      </small>

    </div>
<button
  type="button"
  class="pact-conversation-toggle"
  id="pactConversationToggle"
  aria-label="Minimizar conversa"
  aria-expanded="true"
>
  <span>−</span>
</button>
  </div>


  <div
    class="pact-conversation-messages"
    id="pactConversationMessages"
  ></div>


  <div
    class="pact-conversation-options"
    id="pactConversationOptions"
  ></div>

</div>


        <button
          type="button"
          class="assessment-result-restart"
          id="assessmentRestart"
        >
          Refazer diagnóstico
        </button>
      `;


/* ======================================================
   AUTO START PACT CONVERSATION
====================================================== */

setTimeout(
  () => {

    startPactConversation(
      report,
      {
        autoScroll: false
      }
    );

  },
  7200
);


/* ======================================================
   PACT REPORT V2 — CINEMATIC REVEAL
====================================================== */

/* ======================================================
   PACT REPORT V2 — CINEMATIC REVEAL
====================================================== */

const resultScoreElement =
  assessmentResult.querySelector(
    ".assessment-result-score strong"
  );


const radarData =
  assessmentResult.querySelector(
    ".assessment-radar-data"
  );


const radarLabels =
  assessmentResult.querySelectorAll(
    ".assessment-radar-label"
  );


const executiveMetrics =
  assessmentResult.querySelectorAll(
    ".assessment-executive-metric"
  );


const resultPillars =
  assessmentResult.querySelectorAll(
    ".assessment-result-pillar"
  );


const resultBars =
  assessmentResult.querySelectorAll(
    ".assessment-result-bar i"
  );


const microCards =
  assessmentResult.querySelectorAll(
    ".assessment-micro-card"
  );


const microBars =
  assessmentResult.querySelectorAll(
    ".assessment-micro-bar i"
  );


const bottleneckBlock =
  assessmentResult.querySelector(
    ".assessment-result-bottleneck"
  );


const strategicReading =
  assessmentResult.querySelector(
    ".assessment-result-reading"
  );


const recommendedActions =
  assessmentResult.querySelector(
    ".assessment-result-actions"
  );


const avoidBlock =
  assessmentResult.querySelector(
    ".assessment-result-avoid"
  );


const resultCta =
  assessmentResult.querySelector(
    ".assessment-result-cta"
  );



/* ====================================================
   INITIAL STATES
==================================================== */

if (radarData) {

  gsap.set(
    radarData,
    {
      scale: 0.08,
      autoAlpha: 0,

      transformOrigin:
        "50% 50%"
    }
  );

}


gsap.set(
  radarLabels,
  {
    scale: 0.7,
    autoAlpha: 0
  }
);


gsap.set(
  executiveMetrics,
  {
    y: 18,
    autoAlpha: 0
  }
);


gsap.set(
  resultPillars,
  {
    y: 14,
    autoAlpha: 0
  }
);


gsap.set(
  resultBars,
  {
    scaleX: 0,

    transformOrigin:
      "left center"
  }
);


gsap.set(
  microCards,
  {
    y: 20,
    autoAlpha: 0
  }
);


gsap.set(
  microBars,
  {
    scaleX: 0,

    transformOrigin:
      "left center"
  }
);


gsap.set(
  [
    bottleneckBlock,
    strategicReading,
    recommendedActions,
    avoidBlock,
    resultCta
  ].filter(Boolean),
  {
    y: 24,
    autoAlpha: 0
  }
);



/* ====================================================
   SCORE COUNTER
==================================================== */

const pactScoreCounter = {
  value: 0
};


if (resultScoreElement) {

  resultScoreElement.textContent =
    "0";

}



/* ====================================================
   MASTER TIMELINE
==================================================== */

const pactReportTimeline =
  gsap.timeline({

    defaults: {
      ease:
        "power3.out"
    },

    delay:
      0.12

  });



/* SCORE */

pactReportTimeline.to(
  pactScoreCounter,
  {
    value:
      report.overallScore,

    duration:
      1.05,

    ease:
      "power2.out",

    onUpdate: () => {

      if (
        resultScoreElement
      ) {

        resultScoreElement
          .textContent =
            Math.round(
              pactScoreCounter.value
            );

      }

    }

  }
);



/* RADAR NASCE */

if (radarData) {

  pactReportTimeline.to(
    radarData,
    {
      scale: 1,
      autoAlpha: 1,

      duration: 0.78,

      ease:
        "back.out(1.35)"
    },
    "-=0.55"
  );

}



/* P A C T AROUND RADAR */

pactReportTimeline.to(
  radarLabels,
  {
    scale: 1,
    autoAlpha: 1,

    duration: 0.35,

    stagger: 0.07,

    ease:
      "back.out(1.6)"
  },
  "-=0.38"
);



/* EXECUTIVE METRICS */

pactReportTimeline.to(
  executiveMetrics,
  {
    y: 0,
    autoAlpha: 1,

    duration: 0.42,

    stagger: 0.075
  },
  "-=0.18"
);



/* PILLARS */

pactReportTimeline.to(
  resultPillars,
  {
    y: 0,
    autoAlpha: 1,

    duration: 0.34,

    stagger: 0.055
  },
  "-=0.10"
);



/* PILLAR BARS */

resultBars.forEach(
  (bar, index) => {

    const pillarKeys =
      [
        "p",
        "a",
        "c",
        "t"
      ];


    const key =
      pillarKeys[index];


    const score =
      Number(
        report.scores[key] ||
        0
      );


    pactReportTimeline.to(
      bar,
      {
        scaleX:
          score / 100,

        duration:
          0.62,

        ease:
          "power3.out"
      },
      index === 0
        ? "-=0.18"
        : "-=0.48"
    );

  }
);



/* ====================================================
   MICRODIAGNOSTIC
==================================================== */

pactReportTimeline.to(
  microCards,
  {
    y: 0,
    autoAlpha: 1,

    duration: 0.42,

    stagger: 0.07
  },
  "-=0.08"
);



microBars.forEach(
  (bar, index) => {

    const score =
      Number(
        bar.dataset.microScore ||
        0
      );


    pactReportTimeline.to(
      bar,
      {
        scaleX:
          score / 100,

        duration:
          0.46,

        ease:
          "power3.out"
      },
      index === 0
        ? "-=0.18"
        : "-=0.39"
    );

  }
);



/* ====================================================
   STRATEGIC READING
==================================================== */

if (bottleneckBlock) {

  pactReportTimeline.to(
    bottleneckBlock,
    {
      y: 0,
      autoAlpha: 1,

      duration:
        0.52
    },
    "-=0.10"
  );

}


if (strategicReading) {

  pactReportTimeline.to(
    strategicReading,
    {
      y: 0,
      autoAlpha: 1,

      duration:
        0.48
    },
    "-=0.25"
  );

}


if (recommendedActions) {

  pactReportTimeline.to(
    recommendedActions,
    {
      y: 0,
      autoAlpha: 1,

      duration:
        0.48
    },
    "-=0.22"
  );

}


if (avoidBlock) {

  pactReportTimeline.to(
    avoidBlock,
    {
      y: 0,
      autoAlpha: 1,

      duration:
        0.42
    },
    "-=0.20"
  );

}


if (resultCta) {

  pactReportTimeline.to(
    resultCta,
    {
      y: 0,
      autoAlpha: 1,

      duration:
        0.46
    },
    "-=0.18"
  );

}


  document
    .getElementById(
      "assessmentResultContact"
    )
    ?.addEventListener(
      "click",
      () => {

        const message =
`Olá, Diego. Concluí meu Diagnóstico PACT.

Empresa: ${assessmentAnswers.company || ""}
Segmento: ${report.segment}
Objetivo: ${report.objective}

Score PACT: ${report.overallScore}/100
P — ${report.scores.p}
A — ${report.scores.a}
C — ${report.scores.c}
T — ${report.scores.t}

Gargalo principal: ${report.bottleneckName}
Prioridade: ${report.priority}

Quero analisar esse diagnóstico com você.`;


        window.open(
          `https://wa.me/?text=${
            encodeURIComponent(
              message
            )
          }`,
          "_blank"
        );

      }
    );



  document
    .getElementById(
      "assessmentRestart"
    )
    ?.addEventListener(
      "click",
      () => {

        Object.keys(
          assessmentAnswers
        )
          .forEach(
            (key) => {

              delete assessmentAnswers[
                key
              ];

            }
          );


        assessmentIndex =
          0;


        assessmentResult.hidden =
          true;


        assessmentApp.hidden =
          false;


        renderAssessmentQuestion();


        assessmentApp
          .scrollIntoView({
            behavior:
              "smooth",

            block:
              "start"
          });

      }
    );

}

/* ======================================================
   PACT — LEAD CAPTURE
====================================================== */

function normalizeAssessmentPhone(
  value
) {

  return String(
    value || ""
  ).replace(
    /\D/g,
    ""
  );

}



function formatAssessmentPhone(
  value
) {

  const digits =
    normalizeAssessmentPhone(
      value
    ).slice(
      0,
      11
    );


  if (
    digits.length <= 2
  ) {

    return digits
      ? `(${digits}`
      : "";

  }


  if (
    digits.length <= 7
  ) {

    return `(${digits.slice(
      0,
      2
    )}) ${digits.slice(
      2
    )}`;

  }


  if (
    digits.length <= 10
  ) {

    return `(${digits.slice(
      0,
      2
    )}) ${digits.slice(
      2,
      6
    )}-${digits.slice(
      6
    )}`;

  }


  return `(${digits.slice(
    0,
    2
  )}) ${digits.slice(
    2,
    7
  )}-${digits.slice(
    7
  )}`;

}



function isValidAssessmentPhone(
  value
) {

  const digits =
    normalizeAssessmentPhone(
      value
    );


  return (
    digits.length === 10 ||
    digits.length === 11
  );

}

/* ======================================================
   PACT LEADS — GOOGLE SHEETS
====================================================== */

const PACT_LEADS_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbwKhDnr5RK4UhfhKKL8Pk7_N_3FuqkIabGsnHZ80_2EKLKjnbzl92N6lV5rbjq1ltGZaw/exec";


function getPactLeadId() {

  if (
    !assessmentAnswers.lead_id
  ) {

    assessmentAnswers.lead_id =
      typeof crypto !== "undefined" &&
      crypto.randomUUID
        ? crypto.randomUUID()
        : `pact-${Date.now()}-${Math.random()
            .toString(36)
            .slice(2, 10)}`;

  }


  return assessmentAnswers.lead_id;

}


function sendPactLeadToSheet(
  report
) {

  if (
    !report ||
    !PACT_LEADS_ENDPOINT
  ) {
    return;
  }


  const criticalMetric =
    getLowestPactMetric(
      report.bottleneck
    );


  const conversation =
    assessmentAnswers
      .pact_conversation ||
    {};


  const payload = {

    leadId:
      getPactLeadId(),

    name:
      assessmentAnswers.name ||
      "",

    company:
      assessmentAnswers.company ||
      "",

    phone:
      assessmentAnswers.phone ||
      "",

    email:
      assessmentAnswers.email ||
      "",

    segment:
      report.segment ||
      assessmentAnswers.segment ||
      "",

    objective:
      report.objective ||
      assessmentAnswers.objective ||
      "",

    overallScore:
      report.overallScore,

    scores:
      {
        p:
          report.scores?.p,

        a:
          report.scores?.a,

        c:
          report.scores?.c,

        t:
          report.scores?.t
      },

    bottleneckName:
      report.bottleneckName ||
      "",

    criticalMetricLabel:
      criticalMetric?.label ||
      "",

    criticalMetricScore:
      criticalMetric?.score ??
      "",

    priority:
      report.priority ||
      "",

    diagnosis:
      report.diagnosis ||
      "",

    recommendations:
      report.recommendations ||
      [],

    avoid:
      report.avoid ||
      "",


    /* DADOS DA CONVERSA */

    realityLabel:
      conversation.reality_label ||
      "",

    impactLabel:
      conversation.impact_label ||
      "",

    timingLabel:
      conversation.timing_label ||
      "",

    temperature:
      conversation.temperature ||
      "",

    nextStepLabel:
      conversation.next_step_label ||
      "",


    /* RESPOSTAS COMPLETAS */

    answers:
      assessmentAnswers

  };


  fetch(
    PACT_LEADS_ENDPOINT,
    {
      method:
        "POST",

      mode:
        "no-cors",

      headers:
        {
          "Content-Type":
            "text/plain;charset=utf-8"
        },

      body:
        JSON.stringify(
          payload
        )
    }
  )
    .catch(
      (error) => {

        console.error(
          "PACT Leads:",
          error
        );

      }
    );

}

/* ======================================================
   CONTACT GATE
====================================================== */

function showAssessmentLeadCapture() {

  assessmentQuestionEyebrow
    .textContent =
      "DIAGNÓSTICO CONCLUÍDO";


  assessmentQuestionTitle
    .textContent =
      `${
        assessmentAnswers.name
          ? `${assessmentAnswers.name}, `
          : ""
      }seu Diagnóstico PACT está pronto.`;


  assessmentQuestionDescription
    .textContent =
      "Antes de revelar sua leitura estratégica, identifique o relatório para que possamos relacionar o resultado ao seu negócio.";


  assessmentAnswerArea
    .innerHTML =
      `
        <div class="assessment-lead-capture">

          <div class="assessment-lead-status">

            <span class="assessment-lead-status-dot"></span>

            <span>
              ANÁLISE DOS 4 PILARES CONCLUÍDA
            </span>

          </div>


          <div class="assessment-lead-heading">

            <span>
              RELATÓRIO PRONTO
            </span>

            <strong>
              ${
                escapePACTHTML(
                  assessmentAnswers.company ||
                  "Seu negócio"
                )
              }
            </strong>

            <p>
              Informe seu WhatsApp para identificar
              este diagnóstico.
            </p>

          </div>


          <div class="assessment-lead-field">

            <label
              for="assessmentLeadPhone"
            >
              WHATSAPP
            </label>

            <input
              type="tel"
              id="assessmentLeadPhone"
              inputmode="tel"
              autocomplete="tel"
              placeholder="(11) 99999-9999"
              maxlength="15"
            >

          </div>


          <div class="assessment-lead-field">

            <label
              for="assessmentLeadEmail"
            >
              E-MAIL
              <small>
                opcional
              </small>
            </label>

            <input
              type="email"
              id="assessmentLeadEmail"
              autocomplete="email"
              placeholder="voce@empresa.com"
            >

          </div>


          <div
            class="assessment-lead-feedback"
            id="assessmentLeadFeedback"
            aria-live="polite"
          ></div>


          <button
            type="button"
            class="assessment-lead-submit"
            id="assessmentLeadSubmit"
            disabled
          >

            <span>
              Revelar meu diagnóstico
            </span>

            <span aria-hidden="true">
              →
            </span>

          </button>


          <small class="assessment-lead-privacy">
            Seus dados serão utilizados apenas
            para identificar este diagnóstico
            e permitir contato relacionado à análise.
          </small>

        </div>
      `;


  assessmentNextButton
    .disabled =
      true;


  const phoneInput =
    document.getElementById(
      "assessmentLeadPhone"
    );


  const emailInput =
    document.getElementById(
      "assessmentLeadEmail"
    );


  const submitButton =
    document.getElementById(
      "assessmentLeadSubmit"
    );


  const feedback =
    document.getElementById(
      "assessmentLeadFeedback"
    );



  if (
    assessmentAnswers.phone &&
    phoneInput
  ) {

    phoneInput.value =
      formatAssessmentPhone(
        assessmentAnswers.phone
      );

  }


  if (
    assessmentAnswers.email &&
    emailInput
  ) {

    emailInput.value =
      assessmentAnswers.email;

  }



  function updateLeadCaptureState() {

    if (
      !phoneInput ||
      !submitButton
    ) {
      return;
    }


    const isValid =
      isValidAssessmentPhone(
        phoneInput.value
      );


    submitButton.disabled =
      !isValid;


    if (
      feedback
    ) {

      feedback.textContent =
        phoneInput.value &&
        !isValid
          ? "Digite um WhatsApp válido com DDD."
          : "";

    }

  }



  phoneInput
    ?.addEventListener(
      "input",
      () => {

        const cursorEnd =
          phoneInput
            .selectionStart ===
          phoneInput.value.length;


        phoneInput.value =
          formatAssessmentPhone(
            phoneInput.value
          );


        if (
          cursorEnd
        ) {

          phoneInput.setSelectionRange(
            phoneInput.value.length,
            phoneInput.value.length
          );

        }


        updateLeadCaptureState();

      }
    );



  submitButton
    ?.addEventListener(
      "click",
      () => {

        if (
          !phoneInput ||
          !isValidAssessmentPhone(
            phoneInput.value
          )
        ) {
          return;
        }


        assessmentAnswers.phone =
          normalizeAssessmentPhone(
            phoneInput.value
          );


        assessmentAnswers.email =
          emailInput?.value
            .trim()
            .toLowerCase() ||
          "";


        gsap.to(
          ".assessment-lead-capture",
          {
            autoAlpha:
              0,

            y:
              -16,

            duration:
              0.28,

            ease:
              "power2.in",

            onComplete:
              processAssessmentResult
          }
        );

      }
    );


  updateLeadCaptureState();


  setTimeout(
    () =>
      phoneInput?.focus(),
    250
  );

}

function finishAssessment() {

  savePhase(
    "t"
  );


  showAssessmentLeadCapture();

}

  /* ======================================================
   PROCESS FINAL DIAGNOSTIC
====================================================== */

function processAssessmentResult() {

  assessmentQuestionEyebrow
    .textContent =
      "PROCESSANDO LEITURA";


  assessmentQuestionTitle
    .textContent =
      "Estamos cruzando os quatro pilares do seu negócio.";


  assessmentQuestionDescription
    .textContent =
      "Posicionamento, Aquisição, Comercial e Tecnologia estão sendo comparados para identificar gargalos, desequilíbrios e prioridades.";


  assessmentAnswerArea
    .innerHTML =
      `
        <div class="assessment-processing">

          <span
            class="assessment-processing-ring"
          ></span>

          <strong>
            GERANDO DIAGNÓSTICO PACT
          </strong>

          <small>
            cruzando indicadores estratégicos...
          </small>

        </div>
      `;


  setTimeout(
    () => {

      gsap.to(
        assessmentApp,
        {
          autoAlpha:
            0,

          y:
            -20,

          duration:
            0.42,

          ease:
            "power2.in",

          onComplete:
            () => {

              assessmentApp.hidden =
                true;


              assessmentResult.hidden =
                false;


              renderAssessmentResult();


              gsap.fromTo(
                assessmentResult,
                {
                  autoAlpha:
                    0,

                  y:
                    30
                },
                {
                  autoAlpha:
                    1,

                  y:
                    0,

                  duration:
                    0.62,

                  ease:
                    "power3.out"
                }
              );


              assessmentResult
                .scrollIntoView({
                  behavior:
                    "smooth",

                  block:
                    "start"
                });

            }
        }
      );

    },
    1100
  );

}




function goToNextAssessmentQuestion() {

  if (
    assessmentNextButton
      .disabled
  ) {
    return;
  }


  const currentQuestion =
    getAssessmentQuestion();


  if (!currentQuestion) {
    return;
  }



  /* CONTEXTO */

  if (
    currentQuestion.id ===
    "goal"
  ) {

    assessmentQuestionEyebrow
      .textContent =
        "CONTEXTO CONCLUÍDO";


    assessmentQuestionTitle
      .textContent =
        `Perfeito${
          assessmentAnswers.name
            ? `, ${assessmentAnswers.name}`
            : ""
        }. Agora vamos analisar seu Posicionamento.`;


    assessmentQuestionDescription
      .textContent =
        "A partir daqui, cada resposta começa a alimentar o seu Diagnóstico PACT.";


    showAssessmentTransition(
      "CONTEXTO IDENTIFICADO",
      assessmentAnswers.company ||
        "Seu negócio",
      "Analisar Posicionamento"
    );


    return;

  }



  /* P */

  if (
    currentQuestion.id ===
    "p_offer"
  ) {

    savePhase(
      "p"
    );


    assessmentQuestionEyebrow
      .textContent =
        "POSICIONAMENTO ANALISADO";


    assessmentQuestionTitle
      .textContent =
        "Já entendemos como o mercado percebe o seu negócio.";


    assessmentQuestionDescription
      .textContent =
        "Agora precisamos descobrir como novas oportunidades chegam até a empresa.";


    showAssessmentTransition(
      "P · POSICIONAMENTO",
      "Leitura registrada",
      "Analisar Aquisição",
      "P"
    );


    return;

  }



  /* A */

  if (
    currentQuestion.id ===
    "a_measurement"
  ) {

    savePhase(
      "a"
    );


    assessmentQuestionEyebrow
      .textContent =
        "AQUISIÇÃO ANALISADA";


    assessmentQuestionTitle
      .textContent =
        "Agora sabemos como as oportunidades chegam até o seu negócio.";


    assessmentQuestionDescription
      .textContent =
        "O próximo passo é entender o que acontece depois que essas oportunidades entram.";


    showAssessmentTransition(
      "A · AQUISIÇÃO",
      "Leitura registrada",
      "Analisar Comercial",
      "A"
    );


    return;

  }



  /* C */

  if (
    currentQuestion.id ===
    "c_conversion"
  ) {

    savePhase(
      "c"
    );


    assessmentQuestionEyebrow
      .textContent =
        "COMERCIAL ANALISADO";


    assessmentQuestionTitle
      .textContent =
        "Já conseguimos enxergar como suas oportunidades são conduzidas até a venda.";


    assessmentQuestionDescription
      .textContent =
        "Falta entender se a operação possui tecnologia e estrutura para sustentar crescimento.";


    showAssessmentTransition(
      "C · COMERCIAL",
      "Leitura registrada",
      "Analisar Tecnologia",
      "C"
    );


    return;

  }



  /* T */

  if (
    currentQuestion.id ===
    "t_data"
  ) {

    finishAssessment();

    return;

  }



  /* NORMAL */

  assessmentIndex +=
    1;


  if (
    assessmentIndex >=
    assessmentQuestions.length
  ) {

    assessmentIndex =
      assessmentQuestions.length - 1;


    return;

  }


  gsap.to(
    "#assessmentQuestion",
    {
      autoAlpha:
        0,

      y:
        -20,

      duration:
        0.2,

      ease:
        "power2.in",

      onComplete:
        renderAssessmentQuestion
    }
  );
centerAssessmentView();
}



function goToPreviousAssessmentQuestion() {

  if (
    assessmentIndex <= 0
  ) {
    return;
  }


  assessmentIndex -=
    1;


  gsap.to(
    "#assessmentQuestion",
    {
      autoAlpha:
        0,

      y:
        20,

      duration:
        0.2,

      ease:
        "power2.in",

      onComplete:
        renderAssessmentQuestion
    }
  );

}



function openAssessment() {

  assessmentIndex =
    0;


  gsap.to(
    assessmentEntry,
    {
      autoAlpha:
        0,

      y:
        -26,

      duration:
        0.36,

      ease:
        "power2.in",

      onComplete:
        () => {

          assessmentEntry.hidden =
            true;


          assessmentApp.hidden =
            false;


          gsap.fromTo(
            assessmentApp,
            {
              autoAlpha:
                0,

              y:
                28
            },
            {
              autoAlpha:
                1,

              y:
                0,

              duration:
                0.55,

              ease:
                "power3.out"
            }
          );


          renderAssessmentQuestion();
          centerAssessmentView();

          

        }
    }
  );

}



function closeAssessment() {

  gsap.to(
    assessmentApp,
    {
      autoAlpha:
        0,

      y:
        22,

      duration:
        0.3,

      onComplete:
        () => {

          assessmentApp.hidden =
            true;


          assessmentEntry.hidden =
            false;


          gsap.fromTo(
            assessmentEntry,
            {
              autoAlpha:
                0,

              y:
                20
            },
            {
              autoAlpha:
                1,

              y:
                0,

              duration:
                0.46,

              ease:
                "power3.out"
            }
          );

        }
    }
  );

}



assessmentStartButton
  ?.addEventListener(
    "click",
    openAssessment
  );

  /* ======================================================
   GLOBAL PACT DIAGNOSTIC CTAs
====================================================== */

document
  .querySelectorAll("[data-start-pact]")
  .forEach((trigger) => {

    trigger.addEventListener(
      "click",
      (event) => {

        event.preventDefault();

        openAssessment();

      }
    );

  });


assessmentNextButton
  ?.addEventListener(
    "click",
    goToNextAssessmentQuestion
  );


assessmentBackButton
  ?.addEventListener(
    "click",
    goToPreviousAssessmentQuestion
  );


assessmentCloseButton
  ?.addEventListener(
    "click",
    closeAssessment
  );
  
  /* ======================================================
     REFRESH
  ====================================================== */
  
  window.addEventListener("load", () => {

    ScrollTrigger.refresh();

  });

});
