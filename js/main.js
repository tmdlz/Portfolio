// =====================================================================
// Portfolio Tom Daluzeau — interactions
//   - sélecteur de langue FR / EN
//   - menu hamburger responsive (< 768px)
// =====================================================================

// ---------------------------------------------------------------------
// 1. Traductions
// Chaque clé correspond à un attribut data-i18n="cle" dans le HTML.
// ---------------------------------------------------------------------
const I18N = {
  fr: {
    "nav.profil": "Profil",
    "nav.experience": "Expériences",
    "nav.projets": "Projets",
    "cta.contact": "Me contacter",
    "cta.projets": "Voir les projets",

    "hero.eyebrow": "Technicien Systèmes & Réseaux",
    "hero.text":
      "Infrastructure, systèmes et réseau — Active Directory, Linux, virtualisation " +
      "Proxmox, VLAN et pare-feu. Diplômé BTS SIO (SISR), certifié Azure Fundamentals " +
      "(AZ-900). Basé à Paris.",

    "profil.eyebrow": "Profil",
    "profil.title": "À propos",
    "profil.lead":
      "24 ans, diplômé du BTS SIO option SISR et certifié Microsoft Azure Fundamentals " +
      "(AZ-900). Une alternance comme unique responsable IT d'une start-up, un homelab " +
      "complet en production simulée et une mission terrain sur du matériel interactif. " +
      "Je vise un poste de Technicien Systèmes & Réseaux en Île-de-France.",

    "skills.systems": "Systèmes",
    "skills.network": "Réseau",
    "skills.ops": "Exploitation",
    "skills.education": "Formation",
    "skills.bts": "BTS SIO — option SISR (2024–2026)",
    "skills.az900": "Azure Fundamentals AZ-900 (2026)",
    "skills.langs": "Anglais technique (B1/B2)",

    "xp.eyebrow": "Parcours",
    "xp.title": "Expérience professionnelle",

    "xp.keemia.period": "Août 2026 · Montreuil",
    "xp.keemia.role": "Technicien préparation & maintenance de bornes interactives",
    "xp.keemia.b1":
      "Montage complet de bornes interactives : écran tactile, unité centrale, jetonnier, " +
      "scanner code-barres/QR, imprimante à tickets, routeur.",
    "xp.keemia.b2": "Câblage interne, diagnostic de pannes et remplacement de composants.",
    "xp.keemia.b3":
      "Inventaire et suivi du matériel — 60 bornes déployées pour le réseau La Foir'Fouille.",

    "xp.kali.period": "2024–2025 · Paris / Marseille",
    "xp.kali.role": "Administrateur Systèmes — alternance, seul responsable IT",
    "xp.kali.b1":
      "Administration Active Directory : création et gestion des utilisateurs, stratégies " +
      "de sécurité et GPO.",
    "xp.kali.b2": "Support N1/N2 sur postes Windows et serveur Debian.",
    "xp.kali.b3":
      "Installation et configuration d'un serveur Debian on-premise : Nextcloud, accès " +
      "distant par VPN Tailscale.",
    "xp.kali.b4": "Gestion complète du DNS et des noms de domaine (Entra ID).",
    "xp.kali.b5":
      "Création d'un site e-commerce WordPress avec intégration d'une API de paiement.",

    "proj.eyebrow": "Projets",
    "proj.title": "Projets techniques",
    "proj.conseilpro.name": "ConseilPro — infrastructure système multi-environnements",
    "proj.conseilpro.period": "Projet personnel · 2025–2026 · homelab",
    "proj.conseilpro.desc":
      "Simulation d'une infrastructure d'entreprise complète sur homelab, du réseau " +
      "physique jusqu'à la supervision et aux sauvegardes.",
    "proj.conseilpro.b1":
      "Virtualisation sous Proxmox : machines virtuelles et conteneurs LXC, Windows " +
      "Server 2022 et Linux (Debian / Ubuntu).",
    "proj.conseilpro.b2":
      "Réseau segmenté multi-VLAN : commutateur physique Cisco Catalyst 1000 et pare-feu " +
      "OPNsense assurant le routage inter-VLAN.",
    "proj.conseilpro.b3":
      "Poste Windows 11 joint au domaine, déploiement de stratégies de groupe (GPO).",
    "proj.conseilpro.b4":
      "Supervision Zabbix, ticketing GLPI, sauvegardes Proxmox Backup Server.",
    "proj.conseilpro.b5":
      "Documentation des procédures d'exploitation et suivi des anomalies.",

    "footer.title": "Discutons de votre infrastructure.",
    "footer.contact": "Contact",
    "footer.links": "Liens",
    "footer.location": "Localisation",
  },

  en: {
    "nav.profil": "About",
    "nav.experience": "Experience",
    "nav.projets": "Projects",
    "cta.contact": "Get in touch",
    "cta.projets": "View projects",

    "hero.eyebrow": "Systems & Network Technician",
    "hero.text":
      "Infrastructure, systems and networking — Active Directory, Linux, Proxmox " +
      "virtualization, VLANs and firewalls. BTS SIO (SISR) graduate, Azure Fundamentals " +
      "(AZ-900) certified. Based in Paris.",

    "profil.eyebrow": "About",
    "profil.title": "About",
    "profil.lead":
      "24, BTS SIO (SISR) graduate and Microsoft Azure Fundamentals (AZ-900) certified. " +
      "One apprenticeship as the sole IT lead of a start-up, a full simulated-production " +
      "homelab, and a field assignment on interactive hardware. Looking for a Systems & " +
      "Network Technician role in the Paris region.",

    "skills.systems": "Systems",
    "skills.network": "Network",
    "skills.ops": "Operations",
    "skills.education": "Education",
    "skills.bts": "BTS SIO — SISR track (2024–2026)",
    "skills.az900": "Azure Fundamentals AZ-900 (2026)",
    "skills.langs": "Technical English (B1/B2)",

    "xp.eyebrow": "Career",
    "xp.title": "Professional experience",

    "xp.keemia.period": "August 2026 · Montreuil",
    "xp.keemia.role": "Interactive kiosk preparation & maintenance technician",
    "xp.keemia.b1":
      "Full assembly of interactive kiosks: touchscreen, CPU unit, coin acceptor, " +
      "barcode/QR scanner, ticket printer, router.",
    "xp.keemia.b2": "Internal cabling, fault diagnosis and component replacement.",
    "xp.keemia.b3":
      "Inventory and asset tracking — 60 kiosks deployed for the La Foir'Fouille retail network.",

    "xp.kali.period": "2024–2025 · Paris / Marseille",
    "xp.kali.role": "Systems Administrator — apprenticeship, sole IT lead",
    "xp.kali.b1":
      "Active Directory administration: user creation and management, security policies " +
      "and GPOs.",
    "xp.kali.b2": "L1/L2 support on Windows workstations and a Debian server.",
    "xp.kali.b3":
      "Set up and configured an on-premise Debian server: Nextcloud, remote access over " +
      "Tailscale VPN.",
    "xp.kali.b4": "End-to-end DNS and domain name management (Entra ID).",
    "xp.kali.b5": "Built a WordPress e-commerce site with payment API integration.",

    "proj.eyebrow": "Projects",
    "proj.title": "Technical projects",
    "proj.conseilpro.name": "ConseilPro — multi-environment systems infrastructure",
    "proj.conseilpro.period": "Personal project · 2025–2026 · homelab",
    "proj.conseilpro.desc":
      "A full enterprise infrastructure simulated on a homelab, from the physical network " +
      "up to monitoring and backups.",
    "proj.conseilpro.b1":
      "Virtualization on Proxmox: virtual machines and LXC containers, Windows Server 2022 " +
      "and Linux (Debian / Ubuntu).",
    "proj.conseilpro.b2":
      "Segmented multi-VLAN network: physical Cisco Catalyst 1000 switch and an OPNsense " +
      "firewall handling inter-VLAN routing.",
    "proj.conseilpro.b3":
      "Windows 11 workstation joined to the domain, Group Policy (GPO) deployment.",
    "proj.conseilpro.b4": "Zabbix monitoring, GLPI ticketing, Proxmox Backup Server backups.",
    "proj.conseilpro.b5": "Documented operating procedures and tracked incidents.",

    "footer.title": "Let's talk about your infrastructure.",
    "footer.contact": "Contact",
    "footer.links": "Links",
    "footer.location": "Location",
  },
};

const STORAGE_KEY = "portfolio-lang";

// Applique une langue à toute la page.
function applyLang(lang) {
  const dict = I18N[lang];
  if (!dict) return;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  document.documentElement.lang = lang;

  // Le bouton affiche la langue vers laquelle on peut basculer.
  const toggle = document.getElementById("lang-toggle");
  if (toggle) toggle.textContent = lang === "fr" ? "EN" : "FR";

  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch (e) {
    /* localStorage indisponible : on ignore */
  }
}

// Langue de départ : préférence enregistrée, sinon français.
function initialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "fr" || saved === "en") return saved;
  } catch (e) {
    /* ignore */
  }
  return "fr";
}

// ---------------------------------------------------------------------
// 2. Menu hamburger (mobile)
// ---------------------------------------------------------------------
function initNav() {
  const nav = document.getElementById("nav");
  const toggle = document.getElementById("nav-toggle");
  if (!nav || !toggle) return;

  const setOpen = (open) => {
    nav.classList.toggle("nav-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
  };

  toggle.addEventListener("click", () => {
    setOpen(!nav.classList.contains("nav-open"));
  });

  // Refermer après un clic sur un lien du menu.
  nav.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });

  // Refermer avec la touche Échap.
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
  });
}

// ---------------------------------------------------------------------
// 3. Initialisation
// ---------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  let current = initialLang();
  applyLang(current);

  const langToggle = document.getElementById("lang-toggle");
  if (langToggle) {
    langToggle.addEventListener("click", () => {
      current = current === "fr" ? "en" : "fr";
      applyLang(current);
    });
  }

  initNav();
});
