import {
  BarChart3,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  ChartNoAxesCombined,
  CheckCircle2,
  Code2,
  Cpu,
  GraduationCap,
  Handshake,
  LayoutDashboard,
  Lightbulb,
  Megaphone,
  MonitorSmartphone,
  Rocket,
  School,
  Settings2,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Store,
  Users,
  Workflow,
} from "lucide-react";

export const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Offres", href: "/offres" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "A propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

export const launchServices = [
  {
    title: "Sites web professionnels",
    description:
      "Des sites vitrines, institutionnels, e-commerce et landing pages modernes pour donner confiance et convertir les visiteurs.",
    icon: MonitorSmartphone,
    href: "/services#sites-web",
    items: ["Site vitrine", "Site institutionnel", "E-commerce", "Maintenance"],
  },
  {
    title: "Applications web et mobiles",
    description:
      "Des applications adaptees a vos processus pour gerer clients, activites, reservations, ventes ou operations internes.",
    icon: Smartphone,
    href: "/services#applications",
    items: ["Web apps", "Mobile apps", "Portails", "Outils internes"],
  },
  {
    title: "LMS, ERP et plateformes metiers",
    description:
      "Des plateformes pour ecoles, PME et organisations : gestion de cours, stock, facturation, utilisateurs et reporting.",
    icon: LayoutDashboard,
    href: "/services#plateformes",
    items: ["LMS", "Mini ERP", "Portails", "Dashboards admin"],
  },
  {
    title: "Presence digitale",
    description:
      "Une image professionnelle sur le web, les reseaux sociaux et WhatsApp Business pour attirer les bons clients.",
    icon: Megaphone,
    href: "/services#communication",
    items: ["Branding", "Community management", "Visuels", "Calendrier editorial"],
  },
];

export const advancedServices = [
  {
    title: "Data & Business Intelligence",
    description:
      "Dashboards, reporting, KPIs et analyse pour piloter vos performances avec des donnees fiables.",
    icon: BarChart3,
  },
  {
    title: "IA & automatisation",
    description:
      "Chatbots, assistants IA, analyse de documents et automatisations pour gagner du temps.",
    icon: BrainCircuit,
  },
  {
    title: "Formation professionnelle",
    description:
      "Formations pratiques en IA, marketing digital, developpement, data, bureautique et outils productivite.",
    icon: GraduationCap,
  },
  {
    title: "Consulting digital",
    description:
      "Audit, conseil, cahier des charges, choix d'outils, cadrage et accompagnement qualite.",
    icon: Handshake,
  },
];

export const allServices = [
  {
    id: "sites-web",
    title: "Sites web modernes et professionnels",
    eyebrow: "Creation web",
    description:
      "NEURALIS cree des sites clairs, rapides, responsive et adaptes a votre secteur d'activite.",
    icon: MonitorSmartphone,
    forWho: ["Entreprises", "Ecoles", "ONG", "Commerces", "Cabinets", "Entrepreneurs", "Institutions"],
    deliverables: [
      "Design responsive",
      "Pages de presentation",
      "Formulaire de contact",
      "Integration WhatsApp",
      "SEO de base",
      "Hebergement et nom de domaine",
      "Maintenance",
    ],
    cta: "Creer mon site web",
  },
  {
    id: "applications",
    title: "Applications web et mobiles",
    eyebrow: "Developpement sur mesure",
    description:
      "Des applications sur mesure pour gerer clients, formations, stocks, ventes ou activites internes.",
    icon: Code2,
    forWho: ["PME", "Ecoles", "Startups", "Commerces", "Organisations"],
    deliverables: [
      "Applications web",
      "Applications mobiles",
      "Portails clients",
      "Outils de gestion",
      "Comptes utilisateurs",
      "Tableaux de bord administrateur",
      "Maintenance evolutive",
    ],
    cta: "Discuter de mon application",
  },
  {
    id: "plateformes",
    title: "LMS, ERP et plateformes metiers",
    eyebrow: "Digitalisation des processus",
    description:
      "NEURALIS aide les ecoles, entreprises et organisations a digitaliser leur gestion avec des plateformes metiers adaptees a leurs realites.",
    icon: LayoutDashboard,
    forWho: ["Ecoles", "Centres de formation", "PME", "Institutions", "ONG"],
    deliverables: [
      "LMS pour cours et formations",
      "Portail etudiant",
      "Portail enseignant",
      "Mini ERP pour PME",
      "Gestion de stock",
      "Gestion client",
      "Facturation",
      "Suivi interne",
    ],
    cta: "Digitaliser ma gestion",
  },
  {
    id: "communication",
    title: "Communication digitale et branding",
    eyebrow: "Image et visibilite",
    description:
      "Une presence coherente sur les reseaux sociaux et les supports professionnels pour inspirer confiance.",
    icon: Megaphone,
    forWho: ["Entreprises", "Commerces", "Restaurants", "Cabinets", "Entrepreneurs"],
    deliverables: [
      "Audit de presence digitale",
      "Strategie de communication",
      "Creation de contenus",
      "Community management",
      "Templates de visuels",
      "Calendrier editorial",
      "Charte graphique",
      "WhatsApp Business",
    ],
    cta: "Ameliorer ma presence",
  },
  {
    id: "data",
    title: "Data, dashboards et reporting",
    eyebrow: "Pilotage par la donnee",
    description:
      "Des tableaux de bord et rapports clairs pour suivre les performances et mieux decider.",
    icon: ChartNoAxesCombined,
    forWho: ["PME", "Ecoles", "Directions", "Equipes commerciales", "Organisations"],
    deliverables: [
      "Dashboard de ventes",
      "Suivi des inscriptions",
      "Reporting financier",
      "Suivi RH",
      "Indicateurs commerciaux",
      "Analyse de satisfaction",
      "Rapports automatises",
    ],
    cta: "Creer mon dashboard",
  },
  {
    id: "ia",
    title: "IA et automatisation",
    eyebrow: "Productivite augmentee",
    description:
      "Chatbots, assistants et automatisations pour gagner du temps et repondre plus vite.",
    icon: Bot,
    forWho: ["Services clients", "Ecoles", "PME", "Equipes administratives", "Entrepreneurs"],
    deliverables: [
      "Chatbot pour site web",
      "Assistant WhatsApp",
      "Assistant interne",
      "Analyse automatique de fichiers",
      "Generation de rapports",
      "Automatisation de formulaires",
      "Aide a la redaction",
    ],
    cta: "Explorer l'IA",
  },
  {
    id: "formation",
    title: "Formation professionnelle",
    eyebrow: "Competences digitales",
    description:
      "La transformation digitale depend aussi des competences des personnes. NEURALIS propose des formations pratiques pour rendre le digital accessible.",
    icon: GraduationCap,
    forWho: ["Etudiants", "Professionnels", "Entrepreneurs", "Equipes", "Associations"],
    deliverables: [
      "IA pour professionnels",
      "Marketing digital",
      "Community management",
      "Developpement web",
      "Bureautique avancee",
      "Data et dashboards",
      "Outils de productivite",
    ],
    cta: "Organiser une formation",
  },
  {
    id: "consulting",
    title: "Consulting et audit digital",
    eyebrow: "Strategie et cadrage",
    description:
      "NEURALIS accompagne les organisations dans leur reflexion strategique, le diagnostic de leurs outils et la preparation de projets digitaux structurants.",
    icon: BriefcaseBusiness,
    forWho: ["Directions", "Institutions", "Ecoles", "PME", "Porteurs de projets"],
    deliverables: [
      "Audit digital",
      "Diagnostic de presence en ligne",
      "Cahier des charges",
      "Choix d'outils",
      "Plan de transformation",
      "Suivi qualite",
    ],
    cta: "Demander un audit",
  },
];

export const branches = [
  {
    title: "Neuralis Web & Mobile",
    description: "Sites web, applications mobiles, plateformes metiers, LMS, ERP et solutions sur mesure.",
    icon: Code2,
  },
  {
    title: "Neuralis Communication",
    description: "Communication digitale, branding, community management, contenu et strategie de visibilite.",
    icon: Megaphone,
  },
  {
    title: "Neuralis Data & BI",
    description: "Dashboards, reporting, analyse de donnees, visualisation et aide a la decision.",
    icon: BarChart3,
  },
  {
    title: "Neuralis IA",
    description: "Chatbots, assistants intelligents, automatisation, analyse de documents et integration IA.",
    icon: BrainCircuit,
  },
  {
    title: "Neuralis Formation",
    description: "Formations pratiques en digital, IA, data, marketing, developpement et outils professionnels.",
    icon: GraduationCap,
  },
  {
    title: "Neuralis Consulting",
    description: "Audit digital, conseil strategique, cadrage projet, transformation numerique et qualite.",
    icon: Handshake,
  },
];

export const sectors = [
  {
    title: "Ecoles et centres de formation",
    description:
      "LMS, portails etudiants, inscriptions, communication, dashboards academiques et formations.",
    icon: School,
    needs: ["Cours en ligne", "Portail etudiant", "Suivi des inscriptions", "Communication"],
  },
  {
    title: "PME et entreprises locales",
    description:
      "Sites web, mini ERP, gestion client, facturation, reporting, automatisation et presence digitale.",
    icon: Building2,
    needs: ["Site pro", "ERP leger", "Reporting", "Automatisation"],
  },
  {
    title: "Commerces et restaurants",
    description:
      "Visibilite locale, catalogue, commandes, reseaux sociaux, WhatsApp Business et suivi des ventes.",
    icon: Store,
    needs: ["Catalogue", "Commandes", "Visuels", "Suivi ventes"],
  },
  {
    title: "ONG et associations",
    description:
      "Sites institutionnels, rapports, gestion de projets, donnees d'impact et communication.",
    icon: Users,
    needs: ["Site institutionnel", "Rapports", "Impact", "Donateurs"],
  },
  {
    title: "Startups et porteurs de projets",
    description:
      "MVP, landing page, pitch digital, prototypes, dashboards et accompagnement technique.",
    icon: Rocket,
    needs: ["MVP", "Landing page", "Prototype", "Pitch"],
  },
  {
    title: "Cabinets et institutions",
    description:
      "Image professionnelle, gestion documentaire, outils internes, communication et consulting.",
    icon: ShieldCheck,
    needs: ["Image pro", "Documents", "Processus", "Conseil"],
  },
];

export const offers = [
  {
    title: "Pack Presence Digitale",
    audience: "Entreprises, commerces, entrepreneurs, restaurants, cabinets et organisations.",
    result: "Une presence en ligne plus claire, plus professionnelle et plus credible.",
    includes: [
      "Audit rapide de presence digitale",
      "Optimisation des pages reseaux sociaux",
      "Creation de visuels de base",
      "Calendrier de contenu",
      "Integration WhatsApp Business",
      "Conseils de communication",
    ],
    icon: Megaphone,
  },
  {
    title: "Pack Site Web Pro",
    audience: "Entreprises, ecoles, ONG, institutions, cabinets et porteurs de projets.",
    result: "Un site web moderne qui presente votre activite et facilite la prise de contact.",
    includes: [
      "Site vitrine professionnel",
      "Design responsive",
      "Pages essentielles",
      "Formulaire de contact",
      "Bouton WhatsApp",
      "SEO de base",
      "Formation rapide",
    ],
    icon: MonitorSmartphone,
    featured: true,
  },
  {
    title: "Pack Plateforme Metier",
    audience: "Ecoles, centres de formation, PME et organisations qui veulent digitaliser leur gestion.",
    result: "Un outil digital adapte a votre organisation et a vos processus.",
    includes: [
      "Analyse du besoin",
      "Cahier des charges simple",
      "Developpement web ou mobile",
      "Dashboard administrateur",
      "Comptes utilisateurs",
      "Formation",
      "Maintenance optionnelle",
    ],
    icon: LayoutDashboard,
  },
  {
    title: "Pack Data & Automatisation",
    audience: "Organisations qui veulent mieux suivre leurs activites ou automatiser des taches.",
    result: "Une meilleure visibilite sur vos performances et moins de taches repetitives.",
    includes: [
      "Structuration des donnees",
      "Dashboard",
      "Reporting",
      "Automatisation simple",
      "Documentation",
      "Accompagnement",
    ],
    icon: Workflow,
  },
  {
    title: "Pack Formation",
    audience: "Entreprises, ecoles, associations, professionnels, etudiants et entrepreneurs.",
    result: "Des competences directement applicables dans le travail quotidien.",
    includes: [
      "Programme adapte",
      "Supports de formation",
      "Exercices pratiques",
      "Evaluation",
      "Attestation si souhaitee",
      "Accompagnement optionnel",
    ],
    icon: GraduationCap,
  },
];

export const methodSteps = [
  {
    title: "Comprendre",
    description: "Nous ecoutons votre probleme, vos objectifs, votre contexte et vos priorites.",
    icon: Lightbulb,
  },
  {
    title: "Diagnostiquer",
    description: "Nous analysons votre presence digitale, vos outils actuels ou votre processus de travail.",
    icon: Cpu,
  },
  {
    title: "Proposer",
    description: "Nous presentons une solution claire avec livrables, calendrier et budget.",
    icon: Sparkles,
  },
  {
    title: "Developper",
    description: "Nous realisons le projet par etapes avec des points de validation.",
    icon: Code2,
  },
  {
    title: "Livrer",
    description: "Nous livrons la solution et vous montrons comment l'utiliser.",
    icon: CheckCircle2,
  },
  {
    title: "Accompagner",
    description: "Nous assurons maintenance, suivi, ameliorations et evolution selon le contrat.",
    icon: Settings2,
  },
];

export const portfolioItems = [
  {
    title: "Site vitrine entreprise",
    category: "Web",
    description:
      "Presentation premium d'une entreprise locale avec pages services, contact WhatsApp et formulaire qualifiant.",
    tags: ["Site vitrine", "SEO", "WhatsApp"],
  },
  {
    title: "Plateforme LMS",
    category: "Education",
    description:
      "Maquette de gestion de cours, etudiants, enseignants, supports pedagogiques et suivi des inscriptions.",
    tags: ["LMS", "Portail", "Education"],
  },
  {
    title: "Mini ERP PME",
    category: "Gestion",
    description:
      "Prototype de gestion de stock, clients, factures, utilisateurs et indicateurs de performance.",
    tags: ["ERP", "Stock", "Facturation"],
  },
  {
    title: "Dashboard commercial",
    category: "Data",
    description:
      "Tableau de bord pour suivre ventes, clients, progression mensuelle, produits et objectifs.",
    tags: ["BI", "KPI", "Reporting"],
  },
  {
    title: "Assistant IA client",
    category: "IA",
    description:
      "Demonstration d'un assistant capable de repondre aux questions frequentes et orienter les prospects.",
    tags: ["Chatbot", "Automation", "Support"],
  },
  {
    title: "Branding digital",
    category: "Communication",
    description:
      "Direction visuelle, templates reseaux sociaux et calendrier editorial pour une marque professionnelle.",
    tags: ["Branding", "Social", "Content"],
  },
];

export const stats = [
  { value: "01", label: "diagnostic simple" },
  { value: "02", label: "proposition claire" },
  { value: "03", label: "livraison par etapes" },
  { value: "04", label: "accompagnement" },
];

export const values = [
  {
    title: "Utilite",
    description: "La technologie doit resoudre de vrais problemes.",
  },
  {
    title: "Professionnalisme",
    description: "Chaque projet doit etre livre avec methode, clarte et serieux.",
  },
  {
    title: "Accessibilite",
    description: "Les solutions doivent etre comprehensibles et adaptees au contexte des clients.",
  },
  {
    title: "Innovation",
    description: "Nous integrons progressivement les nouvelles technologies, notamment l'IA et la data.",
  },
  {
    title: "Impact",
    description: "Notre objectif est de contribuer au developpement numerique des organisations africaines.",
  },
];

export const contactProjectTypes = [
  "Site web",
  "Application web/mobile",
  "LMS / ERP / plateforme metier",
  "Communication digitale",
  "Data / dashboard",
  "IA / automatisation",
  "Formation",
  "Autre",
];

export const socialProof = [
  "Diagnostic simple avant devis",
  "Explications sans jargon technique",
  "Solutions adaptees aux PME et ecoles",
  "Accompagnement apres livraison",
];

export const guidedNeeds = [
  {
    title: "Je veux etre visible et credible en ligne",
    description:
      "Commencez par un site web professionnel, une presence reseaux sociaux propre et un bouton WhatsApp clair.",
    action: "Pack Site Web Pro ou Pack Presence Digitale",
    iconKey: "web",
  },
  {
    title: "Je veux mieux gerer mon ecole ou mon centre",
    description:
      "Un LMS ou portail peut organiser cours, etudiants, enseignants, inscriptions, documents et suivi academique.",
    action: "Pack Plateforme Metier",
    iconKey: "school",
  },
  {
    title: "Je veux arreter de tout faire manuellement",
    description:
      "On identifie les taches repetitives, puis on cree un outil simple, un dashboard ou une automatisation.",
    action: "Pack Data & Automatisation",
    iconKey: "workflow",
  },
  {
    title: "Je veux une application pour mon activite",
    description:
      "NEURALIS clarifie le besoin, cree un cahier des charges simple, puis developpe une application web ou mobile.",
    action: "Application web/mobile sur mesure",
    iconKey: "click",
  },
];

export const faqItems = [
  {
    title: "Je ne suis pas technique, est-ce que je peux expliquer mon besoin simplement ?",
    description:
      "Oui. Vous expliquez votre activite, votre probleme et votre objectif. NEURALIS traduit cela en solution digitale claire.",
  },
  {
    title: "Est-ce qu'il faut deja avoir un cahier des charges ?",
    description:
      "Non. Nous pouvons commencer par un diagnostic et construire un cahier des charges simple avec vous.",
  },
  {
    title: "Est-ce que NEURALIS fait seulement des sites web ?",
    description:
      "Non. Le site web peut etre une premiere etape, puis l'entreprise peut evoluer vers applications, LMS, ERP, data, automatisation et IA.",
  },
  {
    title: "Comment demarrer rapidement ?",
    description:
      "Le plus simple est d'envoyer une demande avec votre type de projet. Ensuite, NEURALIS propose une premiere direction et les prochaines etapes.",
  },
];
