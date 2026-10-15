import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

// Original, dependency-free vector artwork. These are illustrative interfaces,
// not screenshots of shipped products, client work or project specifications.
const navy = "#132944", cyan = "#087f9a", indigo = "#6356cb", mint = "#169f87";
const escape = value => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;");
const box = (x, y, w, h, fill = "#fff", radius = 20, extra = "") => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${radius}" fill="${fill}" ${extra}/>`;
const text = (x, y, value, size = 22, color = navy, weight = 500) => `<text x="${x}" y="${y}" font-family="Arial, Helvetica, sans-serif" font-size="${size}" font-weight="${weight}" fill="${color}">${escape(value)}</text>`;
const circle = (x, y, r, color) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${color}"/>`;
const line = (x1, y1, x2, y2, color = "#dae5ee", width = 2, extra = "") => `<path d="M${x1} ${y1}L${x2} ${y2}" fill="none" stroke="${color}" stroke-width="${width}" ${extra}/>`;
const label = (x, y, value, color = cyan) => box(x, y, Math.max(180, value.length * 8.5 + 36), 36, "#e4f4f8", 18) + text(x + 18, y + 24, value, 15, color, 700);
const check = (x, y, color = mint) => `<path d="M${x} ${y + 7}l7 7 14-17" fill="none" stroke="${color}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>`;
const browser = (x, y, w, h, title, content) => `<g filter="url(#shadow)">${box(x, y, w, h)}${box(x, y, w, 58, "#edf2f7", 20)}${box(x, y + 35, w, 23, "#edf2f7", 0)}${["#ffab97", "#edca77", "#77cbbb"].map((color, i) => circle(x + 25 + i * 22, y + 29, 6, color)).join("")}${box(x + 110, y + 14, w - 142, 30, "#fff", 8)}${text(x + 128, y + 35, title, 15, "#536579")}${content}</g>`;
const phone = (x, y, content) => `<g filter="url(#shadow)">${box(x, y, 236, 452, navy, 37)}${box(x + 10, y + 10, 216, 432, "#f5f8fc", 29)}${box(x + 76, y + 19, 84, 18, navy, 9)}${content}${box(x + 88, y + 425, 60, 5, "#b7c4d4", 3)}</g>`;
// Animated neural layer in the empty top-right corner; static when reduced motion is requested.
const pulseNodes = [[905, 74], [968, 42], [1012, 110], [1078, 58], [1134, 118], [1052, 146], [1148, 34]];
const pulseEdges = [[0, 1], [0, 2], [1, 2], [1, 3], [2, 3], [2, 5], [3, 4], [3, 6], [4, 5]];
const pulseSignals = [[0, 2, 3, 4], [1, 3, 6], [0, 1, 2, 5]];
const pulseHubs = new Set([2, 3]);
const pulsePt = i => pulseNodes[i].join(" ");
const pulseStyle = `#neural-pulse .np-edge{fill:none;stroke:#38bdf8;stroke-width:2;opacity:.45}#neural-pulse .np-signal{fill:none;stroke:#06b6d4;stroke-width:3.5;stroke-linecap:round;stroke-dasharray:.14 .86;stroke-dashoffset:1;animation:np-travel 3.6s linear infinite}#neural-pulse .np-signal:nth-of-type(2){animation-delay:-1.2s;animation-duration:4.2s}#neural-pulse .np-signal:nth-of-type(3){animation-delay:-2.4s}#neural-pulse .np-node{fill:#06b6d4;transform-box:fill-box;transform-origin:center;animation:np-pulse 2.8s ease-in-out infinite alternate}#neural-pulse .np-hub{fill:#0f172a;stroke:#22d3ee;stroke-width:3}@keyframes np-travel{0%{stroke-dashoffset:1;opacity:0}15%,85%{opacity:1}100%{stroke-dashoffset:0;opacity:0}}@keyframes np-pulse{from{opacity:.55;transform:scale(.85)}to{opacity:1;transform:scale(1.15)}}@media (prefers-reduced-motion: reduce){#neural-pulse *{animation:none!important}#neural-pulse .np-signal{opacity:0}}`;
const pulseLayer = `<g id="neural-pulse" aria-hidden="true"><style>${pulseStyle}</style>`
  + `<g>${pulseEdges.map(([a, b]) => `<path class="np-edge" d="M${pulsePt(a)}L${pulsePt(b)}"/>`).join("")}</g>`
  + `<g>${pulseSignals.map(path => `<path class="np-signal" pathLength="1" d="M${path.map(pulsePt).join("L")}"/>`).join("")}</g>`
  + `<g>${pulseNodes.map(([x, y], i) => `<circle class="np-node${pulseHubs.has(i) ? " np-hub" : ""}" cx="${x}" cy="${y}" r="${pulseHubs.has(i) ? 8 : 5}" style="animation-delay:${(-i * 0.4).toFixed(1)}s"/>`).join("")}</g></g>`;

const frame = (title, subtitle, body, accent = cyan) => `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800" role="img" aria-labelledby="title desc">
<title id="title">${escape(title)}</title><desc id="desc">${escape(subtitle)} — Illustration conceptuelle, pas une capture de produit livré.</desc>
<defs><linearGradient id="bg" x2="1" y2="1"><stop stop-color="#eff8fa"/><stop offset="1" stop-color="#e9edfa"/></linearGradient><pattern id="grid" width="36" height="36" patternUnits="userSpaceOnUse"><path d="M36 0H0V36" fill="none" stroke="#bbcdda" stroke-width="1" opacity=".23"/></pattern><filter id="shadow" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="16" stdDeviation="20" flood-color="#16334c" flood-opacity=".12"/></filter></defs>
${box(0, 0, 1200, 800, "url(#bg)", 0)}${box(0, 0, 1200, 800, "url(#grid)", 0)}${circle(1100, 50, 210, "#dceef3")}${circle(75, 690, 155, "#dfe3fa")}
${box(58, 52, 6, 55, accent, 3)}${text(82, 72, "NEURALIS / EXPERTISE", 15, accent, 700)}${text(82, 111, title, 31, navy, 700)}
${body}${text(62, 757, subtitle, 18, "#536579")}${text(917, 757, "Illustration conceptuelle", 15, "#536579")}
${pulseLayer}</svg>`;

const website = frame("Des sites pensés pour vos visiteurs", "Design · Développement · Expérience mobile", browser(90, 166, 850, 486, "votre-entreprise.example", `
${text(124, 263, "VOTRE MARQUE", 19, navy, 700)}${text(570, 263, "Services     À propos     Contact", 17, "#536579")}
${label(125, 307, "UN SITE À VOTRE IMAGE")}${text(125, 393, "Votre activité.", 49, navy, 700)}${text(125, 449, "Une présence forte.", 49, navy, 700)}
${text(128, 493, "Une offre claire, sur tous les écrans.", 21, "#536579")}${box(126, 529, 234, 50, cyan, 12)}${text(145, 561, "Parlons de votre projet", 17, "#fff", 700)}
${box(654, 315, 228, 267, "#edf7fa", 22)}${circle(766, 416, 68, "#c1e6eb")}${box(700, 355, 130, 113, "#fff", 15)}${box(714, 372, 102, 14, indigo, 7)}${box(714, 400, 72, 8, "#c4d2e3", 4)}${box(714, 420, 92, 8, "#c4d2e3", 4)}${box(720, 487, 92, 46, navy, 12)}${text(740, 517, "WEB", 21, "#fff", 700)}
`) + phone(883, 260, `${text(910, 330, "Votre marque", 19, navy, 700)}${box(909, 359, 184, 114, "#d5f0f2", 17)}${text(920, 409, "Une offre", 24, navy, 700)}${text(920, 441, "qui se comprend.", 19, navy, 700)}${box(909, 491, 160, 9, "#c2cedb", 5)}${box(909, 512, 178, 9, "#c2cedb", 5)}${box(909, 547, 184, 45, cyan, 11)}${text(930, 576, "Nous contacter", 18, "#fff", 700)}`));

const applications = frame("Applications web & mobiles", "Des parcours simples · Des fonctions métier ciblées", browser(76, 177, 898, 489, "Espace de travail / Application", `
${box(76, 235, 190, 431, navy, 0)}${text(103, 281, "WORKSPACE", 17, "#fff", 700)}${["Vue d’ensemble", "Demandes", "Planning", "Équipe"].map((v, i) => box(92, 315 + i * 57, 159, 42, i === 1 ? cyan : navy, 10) + text(107, 342 + i * 57, v, 16, "#fff")).join("")}
${text(298, 283, "Demandes & interventions", 29, navy, 700)}${label(715, 257, "WEB + MOBILE")}
${["À planifier", "En cours", "Terminé"].map((v, i) => box(295 + i * 212, 314, 192, 293, "#f3f6fa", 15) + circle(314 + i * 212, 341, 5, [indigo, cyan, mint][i]) + text(327 + i * 212, 347, v, 17, navy, 700) + box(306 + i * 212, 367, 170, 108, "#fff", 13) + text(321 + i * 212, 396, ["Nouvelle demande", "Intervention", "Compte rendu"][i], 16, navy, 700) + box(321 + i * 212, 413, 117, 7, "#d8e2eb", 4) + box(321 + i * 212, 432, 81, 7, "#d8e2eb", 4) + circle(451 + i * 212, 452, 8, [indigo, cyan, mint][i])).join("")}
`) + phone(899, 255, `${text(925, 325, "Mon espace", 22, navy, 700)}${text(925, 359, "Vos demandes", 16, "#536579")}${box(924, 381, 184, 118, "#fff", 15)}${circle(947, 407, 7, cyan)}${text(964, 413, "En cours", 17, cyan, 700)}${text(939, 448, "Intervention", 19, navy, 700)}${box(939, 468, 120, 7, "#d1dce6", 4)}${box(924, 520, 184, 54, cyan, 12)}${text(945, 552, "Nouvelle demande", 17, "#fff", 700)}${check(981, 614)}`));

const platform = frame("Plateformes métiers, ERP & LMS", "Modules · Données partagées · Droits d’accès", browser(83, 175, 1034, 514, "Plateforme de gestion / Vue d’ensemble", `
${box(83, 233, 211, 456, navy, 0)}${text(110, 280, "GESTION", 21, "#fff", 700)}${["Tableau de bord", "Clients", "Opérations", "Documents", "Accès & rôles"].map((v, i) => box(98, 311 + i * 54, 181, 40, i === 0 ? indigo : navy, 9) + text(114, 337 + i * 54, v, 17, "#fff")).join("")}
${text(324, 285, "Votre activité, centralisée", 29, navy, 700)}${label(880, 258, "DONNÉES PARTAGÉES", indigo)}
${["Clients", "Opérations", "Documents"].map((v, i) => box(321 + i * 259, 313, 240, 113, ["#e5f5f8", "#eeebfa", "#e6f6ef"][i], 16) + text(343 + i * 259, 347, v, 18, "#536579") + text(343 + i * 259, 393, ["Relation client", "Suivi métier", "Base commune"][i], 23, [cyan, indigo, mint][i], 700)).join("")}
${box(321, 449, 758, 202, "#f4f7fb", 15)}${text(343, 481, "Suivi des opérations", 20, navy, 700)}${text(343, 520, "DOSSIER", 14, "#536579", 700)}${text(661, 520, "RESPONSABLE", 14, "#536579", 700)}${text(922, 520, "STATUT", 14, "#536579", 700)}
${["Demande de service", "Validation de document"].map((v, i) => line(341, 535 + i * 51, 1058, 535 + i * 51) + text(343, 565 + i * 51, v, 18) + text(661, 565 + i * 51, ["Équipe opérations", "Administration"][i], 17, "#536579") + box(918, 547 + i * 51, 127, 28, i ? "#e1f3ea" : "#e4edf9", 14) + text(934, 567 + i * 51, i ? "Validé" : "En cours", 15, i ? mint : indigo, 700)).join("")}
`), indigo);

const data = frame("Data & tableaux de bord", "Des sources structurées · Des indicateurs compréhensibles", browser(90, 175, 1020, 517, "Pilotage / Analyse de l’activité", `
${text(120, 282, "Une lecture claire de vos données", 28, navy, 700)}${label(874, 252, "VUE ANALYTIQUE")}
${["Activité", "Évolution", "Répartition"].map((v, i) => box(118 + i * 325, 308, 301, 94, ["#e6f5f8", "#efedfc", "#e7f6f0"][i], 14) + text(137 + i * 325, 340, v, 17, "#536579") + text(137 + i * 325, 379, ["Par période", "Dans le temps", "Par catégorie"][i], 26, [cyan, indigo, mint][i], 700)).join("")}
${box(118, 420, 622, 234, "#f5f8fc", 15)}${text(140, 452, "Tendance de l’activité", 19, navy, 700)}${[492, 538, 584, 628].map(y => line(148, y, 716, y)).join("")}
<path d="M150 613L225 572L295 591L365 528L435 551L505 483L575 513L645 475L707 493V628H150Z" fill="#caeaf1" opacity=".7"/><path d="M150 613L225 572L295 591L365 528L435 551L505 483L575 513L645 475L707 493" fill="none" stroke="${cyan}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
${box(759, 420, 321, 234, "#f5f8fc", 15)}${text(781, 452, "Répartition", 19, navy, 700)}<circle cx="844" cy="550" r="65" fill="none" stroke="#dce4f1" stroke-width="23"/><circle cx="844" cy="550" r="65" fill="none" stroke="${indigo}" stroke-width="23" stroke-dasharray="210 409" transform="rotate(-90 844 550)"/><circle cx="844" cy="550" r="65" fill="none" stroke="${mint}" stroke-width="23" stroke-dasharray="95 409" stroke-dashoffset="-217" transform="rotate(-90 844 550)"/>
${["Canal A", "Canal B", "Canal C"].map((v, i) => circle(945, 518 + i * 33, 6, [indigo, mint, "#b5c4da"][i]) + text(960, 524 + i * 33, v, 16, "#536579")).join("")}
`));

const ai = frame("IA & automatisation", "Vos outils connectés · Une validation humaine adaptée", `
${line(278, 364, 491, 364, "#90bfc9", 5)}${line(703, 364, 914, 364, "#90bfc9", 5)}${line(600, 485, 600, 541, "#a49bd5", 5)}
<g filter="url(#shadow)">${box(64, 257, 271, 220)}${label(89, 281, "VOS SOURCES")}${text(92, 353, "Documents & outils", 23, navy, 700)}${["Fichiers", "Base métier", "Messages"].map((v, i) => circle(103, 385 + i * 26, 4, cyan) + text(116, 391 + i * 26, v, 18, "#536579")).join("")}</g>
<g filter="url(#shadow)">${box(456, 224, 288, 277, navy, 27)}${circle(600, 311, 54, "#244464")}${[[-27, -18], [27, -18], [0, 0], [-27, 26], [27, 26]].map(([x, y]) => circle(600 + x, 306 + y, 7, "#67d5df")).join("")}${line(573, 288, 600, 306, "#67d5df")}${line(627, 288, 600, 306, "#67d5df")}${line(600, 306, 573, 332, "#67d5df")}${line(600, 306, 627, 332, "#67d5df")}${text(522, 400, "Assistant IA", 28, "#fff", 700)}${text(495, 436, "Comprendre · Préparer", 19, "#b6d8e8")}${text(529, 465, "Classer · Relier", 19, "#b6d8e8")}</g>
<g filter="url(#shadow)">${box(865, 257, 271, 220)}${label(890, 281, "VOS ACTIONS")}${text(893, 353, "Un flux automatisé", 23, navy, 700)}${["Proposition de réponse", "Mise à jour d’un outil", "Notification"].map((v, i) => check(895, 379 + i * 27) + text(925, 391 + i * 27, v, 17, "#536579")).join("")}</g>
${box(387, 549, 426, 101, "#fff", 22, 'filter="url(#shadow)"')}${circle(435, 599, 22, "#e9e6f8")}${check(425, 596, indigo)}${text(472, 590, "Validation humaine", 23, navy, 700)}${text(472, 622, "Pour les actions sensibles", 18, "#536579")}`, indigo);

const campus = frame("Formation & apprentissage digital", "Ressources · Exercices · Progression", browser(90, 176, 1020, 507, "Espace de formation / Parcours", `
${text(120, 282, "Apprendre. Pratiquer. Progresser.", 30, navy, 700)}${label(874, 255, "PARCOURS DIGITAL")}
${box(118, 315, 573, 325, navy, 22)}${circle(405, 461, 52, "#254665")}<path d="M390 434l45 27-45 27Z" fill="#83e3e9"/>${text(146, 357, "ATELIER PRATIQUE", 16, "#8ed8e2", 700)}${text(146, 579, "Du savoir à la mise en pratique", 28, "#fff", 700)}${text(146, 614, "Comprendre les outils et les usages", 19, "#c6d9e7")}
${box(714, 315, 364, 325, "#f2f6fb", 20)}${text(739, 353, "Votre parcours", 23, navy, 700)}${["Découvrir les concepts", "Suivre une démonstration", "Réaliser un exercice", "Évaluer ses acquis"].map((v, i) => circle(754, 396 + i * 55, 15, i < 2 ? "#d6f0ea" : "#e2e8f2") + (i < 2 ? check(744, 393 + i * 55) : text(749, 402 + i * 55, i + 1, 16, "#536579", 700)) + text(780, 402 + i * 55, v, 18, navy)).join("")}
`));

const mobility = frame("Des expériences pensées pour le mobile", "Interface mobile · Connexion aux services", `
${circle(600, 421, 247, "#dfedf6")}${circle(600, 421, 176, "#cfe7ed")}${line(418, 390, 850, 303, "#8bb7c7", 4, 'stroke-dasharray="8 9"')}${line(414, 523, 852, 544, "#8bb7c7", 4, 'stroke-dasharray="8 9"')}
${phone(253, 220, `${text(279, 292, "Votre espace", 23, navy, 700)}${box(278, 323, 185, 124, cyan, 18)}${text(296, 362, "SERVICES", 15, "#d0f5fa", 700)}${text(296, 409, "À portée de main", 20, "#fff", 700)}${["Consulter", "Échanger", "Suivre"].map((v, i) => box(278, 467 + i * 45, 185, 35, "#fff", 9) + circle(295, 485 + i * 45, 4, mint) + text(309, 491 + i * 45, v, 17)).join("")}`)}
${phone(703, 195, `${text(729, 266, "Une interface", 24, navy, 700)}${text(729, 299, "qui vous suit.", 24, navy, 700)}${box(728, 323, 185, 140, "#e1e5f7", 17)}${circle(821, 385, 36, "#fff")}${check(810, 382, indigo)}${box(745, 437, 152, 8, "#c1cae5", 4)}${box(728, 488, 185, 69, "#fff", 13)}${text(745, 517, "Connecté à vos outils", 17, navy, 700)}${text(745, 543, "Un parcours cohérent", 16, "#536579")}${box(728, 578, 185, 37, indigo, 10)}${text(781, 603, "Continuer", 16, "#fff", 700)}`)}
${box(510, 356, 165, 126, "#fff", 22, 'filter="url(#shadow)"')}${circle(592, 399, 22, "#d8f0ec")}${text(553, 450, "API / WEB", 17, cyan, 700)}`, mint);

const output = resolve("public/images/services");
await mkdir(output, { recursive: true });
for (const [name, svg] of Object.entries({ "sites-web": website, applications, plateformes: platform, data, ia: ai, campus, mobility })) {
  await writeFile(resolve(output, `${name}-technical.svg`), svg, "utf8");
  console.log(`${name}: ${Math.round(Buffer.byteLength(svg) / 1024)} KB`);
}
