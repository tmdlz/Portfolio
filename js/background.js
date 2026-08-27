// =====================================================================
// Fond animé « Glyph Tide »
// Une nappe de glyphes de terminal qui respire comme un champ d'ondes.
// Texte pur, canvas pur. Réimplémentation maison de l'effet
// getdesign.md/backgrounds?fx=glyph-tide (canvas 2D, sans dépendance).
// =====================================================================
(function () {
  const canvas = document.getElementById("bg-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const CONFIG = {
    ramp: "  .·:-=+*ox#%@", // rampe de densité : clair → dense (2 espaces = trous)
    font: 14, // taille de police en px
    cellScaleX: 1.5, // pas horizontal = largeur du glyphe * ceci
    cellScaleY: 1.5, // pas vertical = font * ceci
    color: "162, 154, 138", // --muted-text
    alphas: [0.028, 0.05, 0.08], // 3 paliers selon la crête de l'onde
    speed: 1, // multiplicateur de vitesse
    fps: 30,
  };

  const MONO = "ui-monospace, Menlo, Consolas, 'DejaVu Sans Mono', monospace";

  let vw = 0;
  let vh = 0;
  let cols = 0;
  let rows = 0;
  let cellW = 0;
  let cellH = 0;
  let rafId = 0;
  let t0 = 0;
  let lastDraw = 0;

  function setFont() {
    ctx.font = CONFIG.font + "px " + MONO;
    ctx.textBaseline = "middle";
  }

  function build() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    vw = window.innerWidth;
    vh = window.innerHeight;
    canvas.style.width = vw + "px";
    canvas.style.height = vh + "px";
    canvas.width = Math.round(vw * dpr);
    canvas.height = Math.round(vh * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    setFont(); // le contexte est réinitialisé quand canvas.width change
    const charW = ctx.measureText("M").width || CONFIG.font * 0.6;
    cellW = charW * CONFIG.cellScaleX;
    cellH = CONFIG.font * CONFIG.cellScaleY;
    cols = Math.ceil(vw / cellW) + 1;
    rows = Math.ceil(vh / cellH) + 1;
  }

  function render(t) {
    ctx.clearRect(0, 0, vw, vh);
    setFont();

    const ramp = CONFIG.ramp;
    const last = ramp.length - 1;
    const halfC = cols / 2;
    const halfR = rows / 2;
    let bucket = -1;

    for (let gy = 0; gy < rows; gy++) {
      const py = gy * cellH + cellH / 2;
      for (let gx = 0; gx < cols; gx++) {
        // champ d'ondes : plusieurs sinusoïdes + une onde radiale (« respiration »)
        const w =
          Math.sin(gx * 0.18 + t * 0.9) +
          Math.sin(gy * 0.26 - t * 0.7) +
          Math.sin((gx + gy) * 0.1 + t * 0.45) +
          Math.sin(Math.hypot(gx - halfC, gy - halfR) * 0.16 - t * 1.1);

        const v = (w + 4) / 8; // 0 → 1
        const glyph = ramp[(v * last) | 0];
        if (glyph === " ") continue;

        const b = v < 0.38 ? 0 : v < 0.68 ? 1 : 2;
        if (b !== bucket) {
          ctx.fillStyle = "rgba(" + CONFIG.color + "," + CONFIG.alphas[b] + ")";
          bucket = b;
        }
        ctx.fillText(glyph, gx * cellW, py);
      }
    }
  }

  function loop(now) {
    rafId = requestAnimationFrame(loop);
    if (now - lastDraw < 1000 / CONFIG.fps) return;
    lastDraw = now;
    if (!t0) t0 = now;
    render(((now - t0) / 1000) * CONFIG.speed);
  }

  function stop() {
    cancelAnimationFrame(rafId);
    rafId = 0;
  }

  function start() {
    if (rafId) return;
    t0 = 0;
    lastDraw = 0;
    rafId = requestAnimationFrame(loop);
  }

  function init() {
    build();
    if (reduceMotion.matches) {
      render(0); // nappe figée, sans respiration
      return;
    }
    start();
  }

  let resizeTimer = 0;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      build();
      if (reduceMotion.matches) render(0);
    }, 150);
  });

  // Suspendre quand l'onglet n'est pas visible.
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) stop();
    else if (!reduceMotion.matches) start();
  });

  // Réagir si la préférence « réduire les animations » change.
  reduceMotion.addEventListener("change", function () {
    stop();
    init();
  });

  init();
})();
