// =====================================================================
// Fond animé « Comet Cascade »
// Des traînées de comètes tombent depuis le haut-centre, puis s'évasent
// vers l'extérieur près du sol — comme une fontaine heurtant une vitre.
// Réimplémentation maison de l'effet getdesign.md/backgrounds?fx=comet-cascade
// (canvas 2D, sans dépendance).
// =====================================================================
(function () {
  const canvas = document.getElementById("bg-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const CONFIG = {
    count: 22, // nombre de comètes (« Trails »)
    canvasRGB: "20, 19, 15", // --canvas, pour le voile de traînée
    trailFade: 0.042, // opacité du voile par frame → longueur des traînées
    colors: [
      // dégradé chaud : orange signal → ambre → braise
      [232, 98, 42],
      [242, 149, 78],
      [200, 69, 31],
    ],
    spawnSpread: 0.16, // largeur de la source (fraction de la largeur)
    baseVy: 180, // vitesse verticale initiale (px/s)
    gravity: 820, // accélération vers le bas (px/s²)
    floor: 0.6, // début de l'évasement (fraction de la hauteur)
    bank: 950, // accélération horizontale près du sol (px/s²)
    headSize: 1.2, // rayon de base de la tête
    headAlpha: 0.24, // opacité de la tête
    trailAlpha: 0.26, // opacité en pointe de traînée
    maxSpeed: 1600,
  };

  let vw = 0;
  let vh = 0;
  let comets = [];
  let rafId = 0;
  let last = 0;

  function lerpColor(t) {
    const c = CONFIG.colors;
    const seg = t * (c.length - 1);
    const i = Math.min(Math.floor(seg), c.length - 2);
    const f = seg - i;
    const a = c[i];
    const b = c[i + 1];
    return (
      Math.round(a[0] + (b[0] - a[0]) * f) +
      "," +
      Math.round(a[1] + (b[1] - a[1]) * f) +
      "," +
      Math.round(a[2] + (b[2] - a[2]) * f)
    );
  }

  function spawn(c, initial) {
    const side = Math.random() < 0.5 ? -1 : 1;
    c.side = side;
    c.x = vw / 2 + (Math.random() - 0.5) * vw * CONFIG.spawnSpread;
    c.y = initial
      ? Math.random() * vh // premier tour : comètes réparties sur toute la hauteur
      : -vh * (0.05 + Math.random() * 0.4);
    c.vx = side * (8 + Math.random() * 26);
    c.vy = CONFIG.baseVy + Math.random() * 90;
    c.color = lerpColor(Math.random());
    c.len = 0.1 + Math.random() * 0.16; // longueur du segment de tête dessiné
    c.w = 0.8 + Math.random() * 1.6; // épaisseur
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
    ctx.fillStyle = "rgb(" + CONFIG.canvasRGB + ")";
    ctx.fillRect(0, 0, vw, vh);

    if (comets.length !== CONFIG.count) {
      comets = [];
      for (let i = 0; i < CONFIG.count; i++) {
        const c = {};
        spawn(c, true);
        comets.push(c);
      }
    }
  }

  function step(dt) {
    const floorY = vh * CONFIG.floor;

    for (let i = 0; i < comets.length; i++) {
      const c = comets[i];
      c.vy += CONFIG.gravity * dt;

      if (c.y > floorY) {
        const p = Math.min((c.y - floorY) / (vh - floorY), 1);
        c.vx += c.side * CONFIG.bank * dt * p; // s'évase vers l'extérieur
        c.vy -= c.vy * 2.4 * dt; // la chute s'aplatit
      }

      const sp = Math.hypot(c.vx, c.vy);
      if (sp > CONFIG.maxSpeed) {
        c.vx *= CONFIG.maxSpeed / sp;
        c.vy *= CONFIG.maxSpeed / sp;
      }

      c.x += c.vx * dt;
      c.y += c.vy * dt;

      if (c.y > vh * 1.05 || c.x < -60 || c.x > vw + 60) spawn(c, false);
    }
  }

  function draw() {
    // voile léger pour estomper les positions précédentes → traînées
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = "rgba(" + CONFIG.canvasRGB + "," + CONFIG.trailFade + ")";
    ctx.fillRect(0, 0, vw, vh);

    // têtes + segment de mouvement, en éclaircissement additif
    ctx.globalCompositeOperation = "lighter";
    ctx.lineCap = "round";
    for (let i = 0; i < comets.length; i++) {
      const c = comets[i];
      const tx = c.x - c.vx * c.len;
      const ty = c.y - c.vy * c.len;

      const grad = ctx.createLinearGradient(tx, ty, c.x, c.y);
      grad.addColorStop(0, "rgba(" + c.color + ",0)");
      grad.addColorStop(1, "rgba(" + c.color + "," + CONFIG.trailAlpha + ")");
      ctx.strokeStyle = grad;
      ctx.lineWidth = c.w;
      ctx.beginPath();
      ctx.moveTo(tx, ty);
      ctx.lineTo(c.x, c.y);
      ctx.stroke();

      ctx.fillStyle = "rgba(" + c.color + "," + CONFIG.headAlpha + ")";
      ctx.beginPath();
      ctx.arc(c.x, c.y, CONFIG.headSize * c.w, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalCompositeOperation = "source-over";
  }

  function loop(now) {
    const dt = last ? Math.min((now - last) / 1000, 0.05) : 0.016;
    last = now;
    step(dt);
    draw();
    rafId = requestAnimationFrame(loop);
  }

  function stop() {
    cancelAnimationFrame(rafId);
    rafId = 0;
  }

  function start() {
    if (rafId) return;
    last = 0;
    rafId = requestAnimationFrame(loop);
  }

  function init() {
    build();
    if (reduceMotion.matches) return; // canvas rempli de --canvas, sans animation
    start();
  }

  let resizeTimer = 0;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(build, 150);
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
