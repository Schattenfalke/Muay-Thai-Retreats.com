/**
 * SCROLL ANIMATIONS
 * Lenis smooth scroll + GSAP ScrollTrigger for cinematic parallax
 */

// CONFIG ist global verfügbar
const CONFIG = window.CONFIG;

// Initialize Lenis Smooth Scroll
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
  direction: "vertical",
  gestureDirection: "vertical",
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});

// Request animation frame loop for Lenis
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Sync Lenis with GSAP ScrollTrigger
lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// ==========================================================================
// SCENE 1: CANOPY - LEAF PARTING
// ==========================================================================

const canopyScene = document.querySelector(".scene--canopy");
if (canopyScene) {
  const foliageLeft = canopyScene.querySelector(".scene__layer--foliage-left");
  const foliageRight = canopyScene.querySelector(
    ".scene__layer--foliage-right"
  );
  const canopyTop = canopyScene.querySelector(".scene__layer--canopy-top");
  const mist = canopyScene.querySelector(".scene__layer--mist");

  gsap.to(foliageLeft, {
    x: "-40%",
    scrollTrigger: {
      trigger: canopyScene,
      start: "top top",
      end: "bottom top",
      scrub: 1,
    },
  });

  gsap.to(foliageRight, {
    x: "40%",
    scrollTrigger: {
      trigger: canopyScene,
      start: "top top",
      end: "bottom top",
      scrub: 1,
    },
  });

  gsap.to(canopyTop, {
    y: "-20%",
    scrollTrigger: {
      trigger: canopyScene,
      start: "top top",
      end: "bottom top",
      scrub: 1,
    },
  });

  gsap.to(mist, {
    opacity: 0,
    scrollTrigger: {
      trigger: canopyScene,
      start: "top top",
      end: "center top",
      scrub: 1,
    },
  });

  // Fade out hero content
  const heroContent = canopyScene.querySelector(".scene__content");
  gsap.to(heroContent, {
    opacity: 0,
    y: -50,
    scrollTrigger: {
      trigger: canopyScene,
      start: "top top",
      end: "center top",
      scrub: 1,
    },
  });
}

// ==========================================================================
// SCENE 2: PATH - VILLA EMERGES
// ==========================================================================

const pathScene = document.querySelector(".scene--path");
if (pathScene) {
  const villaFar = pathScene.querySelector(".scene__layer--villa-far");

  gsap.fromTo(
    villaFar,
    {
      scale: 0.3,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 0.8,
      filter: "blur(1px)",
      scrollTrigger: {
        trigger: pathScene,
        start: "top bottom",
        end: "center center",
        scrub: 1.5,
      },
    }
  );

  // Path reveal content
  const pathContent = pathScene.querySelector(".scene__content");
  gsap.fromTo(
    pathContent,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: pathScene,
        start: "top center",
        end: "center center",
        scrub: 1,
      },
    }
  );
}

// ==========================================================================
// SCENE 3: APPROACH - ZOOM TO VILLA
// ==========================================================================

const approachScene = document.querySelector(".scene--approach");
if (approachScene) {
  const villaClose = approachScene.querySelector(".scene__layer--villa-close");

  gsap.fromTo(
    villaClose,
    { scale: 1 },
    {
      scale: 1.3,
      scrollTrigger: {
        trigger: approachScene,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      },
    }
  );

  // Approach label
  const approachContent = approachScene.querySelector(".scene__content");
  gsap.fromTo(
    approachContent,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: approachScene,
        start: "top center",
        end: "center center",
        scrub: 1,
      },
    }
  );
}

// ==========================================================================
// SCENE 4: ENTRANCE - PORTAL MASK
// ==========================================================================

const entranceScene = document.querySelector(".scene--entrance");
if (entranceScene) {
  const portalMask = entranceScene.querySelector(".scene__portal-mask");

  gsap.fromTo(
    portalMask,
    {
      clipPath: "circle(0% at 50% 50%)",
    },
    {
      clipPath: "circle(150% at 50% 50%)",
      scrollTrigger: {
        trigger: entranceScene,
        start: "top center",
        end: "center top",
        scrub: 1,
      },
    }
  );
}

// ==========================================================================
// SCENE 5: PROGRAM - STAGGER CARDS
// ==========================================================================

const programScene = document.querySelector(".scene--program");
if (programScene) {
  const programCards = programScene.querySelectorAll(".program-card");

  gsap.fromTo(
    programCards,
    {
      opacity: 0,
      y: 60,
    },
    {
      opacity: 1,
      y: 0,
      stagger: 0.15,
      scrollTrigger: {
        trigger: programScene,
        start: "top center",
        end: "center center",
        scrub: 1,
      },
    }
  );
}

// ==========================================================================
// SCENE 6: TRANSFORMATION - HORIZONTAL SCROLL
// ==========================================================================

const transformationScene = document.querySelector(".scene--transformation");
if (transformationScene) {
  const track = transformationScene.querySelector(".transformation__track");
  const panels = transformationScene.querySelectorAll(".transformation__panel");

  // Calculate total width
  const totalWidth = panels.length * window.innerWidth;

  gsap.to(track, {
    x: () => -(totalWidth - window.innerWidth),
    ease: "none",
    scrollTrigger: {
      trigger: transformationScene,
      start: "top top",
      end: () => `+=${totalWidth}`,
      scrub: 1,
      pin: true,
      anticipatePin: 1,
    },
  });

  // Fade in each panel as it enters
  panels.forEach((panel, i) => {
    gsap.fromTo(
      panel,
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: transformationScene,
          start: `top top-=${i * window.innerWidth}`,
          end: `top top-=${(i + 0.5) * window.innerWidth}`,
          scrub: true,
        },
      }
    );
  });
}

// ==========================================================================
// SCENE 7: PACKAGES - FADE IN
// ==========================================================================

const packagesScene = document.querySelector(".scene--packages");
if (packagesScene) {
  const packages = packagesScene.querySelectorAll(".package");

  gsap.fromTo(
    packages,
    {
      opacity: 0,
      y: 60,
    },
    {
      opacity: 1,
      y: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: packagesScene,
        start: "top center",
        end: "center center",
        scrub: 1,
      },
    }
  );
}

// ==========================================================================
// SCENE 8: CTA - FADE IN
// ==========================================================================

const ctaScene = document.querySelector(".scene--cta");
if (ctaScene) {
  const ctaContent = ctaScene.querySelector(".scene__content");

  gsap.fromTo(
    ctaContent,
    {
      opacity: 0,
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: ctaScene,
        start: "top center",
        end: "center center",
        scrub: 1,
      },
    }
  );
}

// ==========================================================================
// PARALLAX FOR ALL SCENES (SUBTLE)
// ==========================================================================

document.querySelectorAll(".scene__layer--bg").forEach((layer) => {
  gsap.to(layer, {
    y: "30%",
    ease: "none",
    scrollTrigger: {
      trigger: layer.closest(".scene"),
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
});

// ==========================================================================
// NAVIGATION BACKGROUND ON SCROLL
// ==========================================================================

const nav = document.querySelector(".nav");
ScrollTrigger.create({
  start: "top -80",
  end: 99999,
  toggleClass: { className: "nav--scrolled", targets: ".nav" },
});

// ==========================================================================
// SMOOTH ANCHOR LINKS
// ==========================================================================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      lenis.scrollTo(target, {
        offset: -80,
        duration: 1.5,
      });
    }
  });
});

// ==========================================================================
// REDUCED MOTION SUPPORT
// ==========================================================================

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
);

if (prefersReducedMotion.matches) {
  // Disable Lenis smooth scroll
  lenis.destroy();

  // Kill all GSAP ScrollTrigger instances
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

  console.log("Animations disabled due to prefers-reduced-motion");
}

// ==========================================================================
// VIEWPORT HEIGHT FIX FOR MOBILE
// ==========================================================================

function setVH() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

setVH();
window.addEventListener("resize", setVH);
