// =====================================================================
// Fond animé « Pixel Pulse »
// Un mur de cellules type LED. Des anneaux concentriques irradient du
// centre et rallument les cellules au passage, en orange signal.
// Réimplémentation de l'effet getdesign.md/backgrounds?fx=pixel-pulse
// (canvas 2D, sans dépendance).
// =====================================================================
(function () {
  const canvas = document.getElementById("bg-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const CONFIG = {
    cell: 26, // pas de la grille en px — pilote la densité
    fill: 0.6, // côté de la cellule = fill * cell
    corner: 3, // rayon des coins des cellules
    rest: "236, 231, 222", // --text : cellules au repos
    restAlpha: 0.045,
    pulse: "232, 98, 42", // --signal : crête de l'onde
    pulseAlpha: 0.32,
    ring: 100, // épaisseur de l'anneau lumineux en px
    speed: 108, // vitesse de propagation en px/s
    gap: 6.5, // secondes entre deux anneaux
  };

  let vw = 0;
  let vh = 0;
  let cells = []; // positions + distance au centre, recalculées au resize
  let rafId = 0;
  let t0 = 0;

  function build() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    vw = window.innerWidth;
    vh = window.innerHeight;
    canvas.style.width = vw + "px";
    canvas.style.height = vh + "px";
    canvas.width = Math.round(vw * dpr);
    canvas.height = Math.round(vh * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const cols = Math.ceil(vw / CONFIG.cell) + 1;
    const rows = Math.ceil(vh / CONFIG.cell) + 1;
    const originX = vw / 2;
    const originY = vh * 0.4; // légèrement au-dessus du centre, vers le hero
    const edge = Math.hypot(
      Math.max(originX, vw - originX),
      Math.max(originY, vh - originY)
    );

    cells = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = col * CONFIG.cell;
        const y = row * CONFIG.cell;
        const d = Math.hypot(
          x + CONFIG.cell / 2 - originX,
          y + CONFIG.cell / 2 - originY
        );
        cells.push({ x: x, y: y, d: d, dim: 1 - (d / edge) * 0.65 });
      }
    }
  }

  function cellPath(x, y, s, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + s, y, x + s, y + s, r);
    ctx.arcTo(x + s, y + s, x, y + s, r);
    ctx.arcTo(x, y + s, x, y, r);
    ctx.arcTo(x, y, x + s, y, r);
    ctx.closePath();
  }

  function render(elapsed) {
    ctx.clearRect(0, 0, vw, vh);

    const s = CONFIG.cell * CONFIG.fill;
    const pad = (CONFIG.cell - s) / 2;
    const front = CONFIG.speed * elapsed; // rayon courant du front d'onde
    const wrap = CONFIG.speed * CONFIG.gap; // espacement des anneaux en px

    for (let i = 0; i < cells.length; i++) {
      const c = cells[i];

      cellPath(c.x + pad, c.y + pad, s, CONFIG.corner);
      ctx.fillStyle = "rgba(" + CONFIG.rest + "," + CONFIG.restAlpha * c.dim + ")";
      ctx.fill();

      const behind = front - c.d; // l'onde a-t-elle dépassé cette cellule ?
      if (behind > 0) {
        const inRing = behind % wrap;
        if (inRing < CONFIG.ring) {
          const glow = Math.sin((inRing / CONFIG.ring) * Math.PI); // 0 → 1 → 0
          cellPath(c.x + pad, c.y + pad, s, CONFIG.corner);
          ctx.fillStyle =
            "rgba(" + CONFIG.pulse + "," + glow * CONFIG.pulseAlpha * c.dim + ")";
          ctx.fill();
        }
      }
    }
  }

  function loop(now) {
    if (!t0) t0 = now;
    render((now - t0) / 1000);
    rafId = requestAnimationFrame(loop);
  }

  function stop() {
    cancelAnimationFrame(rafId);
    rafId = 0;
  }

  function start() {
    if (rafId) return;
    t0 = 0;
    rafId = requestAnimationFrame(loop);
  }

  function init() {
    build();
    if (reduceMotion.matches) {
      render(0); // image fixe : la grille seule, sans onde
    } else {
      start();
    }
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
