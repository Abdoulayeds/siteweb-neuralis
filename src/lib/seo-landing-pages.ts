export type SeoLandingPage = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  searchIntent: string;
  audience: string[];
  outcomes: string[];
  deliverables: string[];
  process: string[];
  faq: {
    question: string;
    answer: string;
  }[];
  keywords: string[];
};

export const seoLandingPages: SeoLandingPage[] = [
  {
    slug: "creation-site-web-bamako",
    title: "Creation site web Bamako",
    metaTitle: "Creation site web a Bamako et au Mali",
    metaDescription:
      "NEURALIS cree des sites web professionnels a Bamako : site vitrine, institutionnel, e-commerce, landing page, SEO local, formulaire et WhatsApp.",
    eyebrow: "Site web professionnel",
    h1: "Creation de sites web professionnels a Bamako.",
    intro:
      "NEURALIS aide les entreprises, ecoles, cabinets, ONG et entrepreneurs au Mali a lancer un site clair, rapide, credible et pense pour convertir les visiteurs en contacts.",
    searchIntent: "Etre visible sur Google, rassurer les clients et recevoir des demandes qualifiees.",
    audience: ["PME", "Ecoles", "ONG", "Cabinets", "Commerces", "Entrepreneurs"],
    outcomes: [
      "Une image professionnelle en ligne",
      "Des pages claires pour presenter vos services",
      "Un formulaire de devis et une integration WhatsApp",
      "Une base SEO locale pour Bamako et le Mali",
    ],
    deliverables: [
      "Design responsive",
      "Pages Accueil, Services, A propos et Contact",
      "Formulaire de demande",
      "Optimisation SEO de base",
      "Configuration domaine et hebergement",
      "Accompagnement apres mise en ligne",
    ],
    process: ["Cadrage du besoin", "Maquette et contenus", "Developpement", "Mise en ligne", "Suivi"],
    faq: [
      {
        question: "Combien de temps faut-il pour creer un site web a Bamako ?",
        answer:
          "Un site vitrine professionnel peut souvent etre cadre et lance en quelques semaines selon le nombre de pages, les contenus disponibles et les integrations demandees.",
      },
      {
        question: "NEURALIS peut-il gerer le domaine et l'hebergement ?",
        answer:
          "Oui. NEURALIS peut accompagner le choix du nom de domaine, la configuration DNS, l'hebergement, le certificat HTTPS et la mise en ligne.",
      },
      {
        question: "Le site sera-t-il adapte au telephone ?",
        answer:
          "Oui. Les sites NEURALIS sont concus en responsive design pour fonctionner proprement sur mobile, tablette et ordinateur.",
      },
    ],
    keywords: [
      "creation site web Bamako",
      "creation site web Mali",
      "agence web Bamako",
      "site vitrine Mali",
      "developpeur web Bamako",
    ],
  },
  {
    slug: "developpement-application-mali",
    title: "Developpement application Mali",
    metaTitle: "Developpement d'applications web et mobiles au Mali",
    metaDescription:
      "NEURALIS developpe des applications web et mobiles au Mali pour gerer clients, ventes, operations, reservations, utilisateurs et processus internes.",
    eyebrow: "Application web et mobile",
    h1: "Developpement d'applications web et mobiles au Mali.",
    intro:
      "Quand un simple site ne suffit plus, NEURALIS construit des applications sur mesure pour digitaliser les operations et simplifier le travail des equipes.",
    searchIntent: "Transformer un processus manuel en outil digital fiable, utilisable et evolutif.",
    audience: ["PME", "Startups", "Ecoles", "Institutions", "Services internes"],
    outcomes: [
      "Moins de fichiers disperses",
      "Une meilleure gestion des utilisateurs et donnees",
      "Des workflows adaptes a votre metier",
      "Une solution capable d'evoluer avec l'organisation",
    ],
    deliverables: [
      "Analyse fonctionnelle",
      "Interface web responsive",
      "Tableaux de bord",
      "Gestion des roles",
      "Notifications et formulaires",
      "Documentation d'utilisation",
    ],
    process: ["Diagnostic", "Prototype", "Developpement", "Tests utilisateurs", "Formation"],
    faq: [
      {
        question: "Quelle difference entre un site web et une application web ?",
        answer:
          "Un site presente votre activite. Une application permet aux utilisateurs de se connecter, saisir des donnees, suivre des operations et automatiser des actions.",
      },
      {
        question: "Peut-on commencer petit puis ajouter des modules ?",
        answer:
          "Oui. NEURALIS recommande souvent de lancer un premier module utile, puis d'ajouter les fonctionnalites avec les retours des utilisateurs.",
      },
      {
        question: "L'application peut-elle etre utilisee sur mobile ?",
        answer:
          "Oui. Une application web responsive peut fonctionner dans le navigateur mobile. Une application mobile native peut aussi etre envisagee selon le besoin.",
      },
    ],
    keywords: [
      "developpement application Mali",
      "application web Bamako",
      "application mobile Mali",
      "logiciel sur mesure Mali",
      "startup tech Mali",
    ],
  },
  {
    slug: "lms-erp-ecoles-mali",
    title: "LMS et ERP pour ecoles au Mali",
    metaTitle: "LMS et ERP pour ecoles, instituts et centres de formation au Mali",
    metaDescription:
      "NEURALIS cree des plateformes LMS et ERP pour ecoles au Mali : cours, inscriptions, etudiants, notes, paiements, communication et tableaux de bord.",
    eyebrow: "Education digitale",
    h1: "Plateformes LMS et ERP pour ecoles au Mali.",
    intro:
      "NEURALIS accompagne les ecoles, instituts et centres de formation qui veulent organiser les cours, les inscriptions, les etudiants et la communication dans un outil clair.",
    searchIntent: "Digitaliser une ecole avec une plateforme simple pour l'administration, les enseignants et les apprenants.",
    audience: ["Ecoles", "Instituts", "Centres de formation", "Universites privees", "Programmes ONG"],
    outcomes: [
      "Cours et ressources mieux organises",
      "Suivi des apprenants et inscriptions",
      "Communication plus structuree",
      "Dashboards pour la direction",
    ],
    deliverables: [
      "Portail apprenant",
      "Espace enseignant",
      "Gestion des cours",
      "Gestion administrative",
      "Rapports et indicateurs",
      "Formation des equipes",
    ],
    process: ["Analyse pedagogique", "Choix des modules", "Configuration", "Tests", "Accompagnement"],
    faq: [
      {
        question: "Un LMS remplace-t-il les cours en presentiel ?",
        answer:
          "Pas forcement. Un LMS peut completer les cours en presentiel avec des supports, devoirs, communications, quiz et suivis.",
      },
      {
        question: "Peut-on avoir un LMS et une partie ERP dans la meme plateforme ?",
        answer:
          "Oui. Une plateforme peut combiner apprentissage, administration, inscriptions, paiements, notes et reporting.",
      },
      {
        question: "Les enseignants peuvent-ils etre formes ?",
        answer:
          "Oui. NEURALIS peut accompagner les equipes pour que la solution soit comprise et reellement utilisee.",
      },
    ],
    keywords: [
      "LMS Mali",
      "ERP ecole Mali",
      "plateforme ecole Bamako",
      "gestion scolaire Mali",
      "formation digitale Mali",
    ],
  },
  {
    slug: "erp-pme-mali",
    title: "ERP pour PME au Mali",
    metaTitle: "ERP et outils de gestion pour PME au Mali",
    metaDescription:
      "NEURALIS cree des mini ERP et outils de gestion pour PME au Mali : stock, clients, facturation, utilisateurs, ventes, reporting et automatisation.",
    eyebrow: "Gestion PME",
    h1: "ERP et outils de gestion pour PME au Mali.",
    intro:
      "NEURALIS aide les PME a remplacer les fichiers disperses par une plateforme metier adaptee a leur realite : stock, clients, factures, ventes et indicateurs.",
    searchIntent: "Mieux gerer une activite avec une solution simple, locale et adaptee au budget.",
    audience: ["PME", "Commerces", "Distributeurs", "Services", "Equipes operationnelles"],
    outcomes: [
      "Meilleure visibilite sur l'activite",
      "Suivi du stock et des ventes",
      "Donnees centralisees",
      "Rapports pour prendre des decisions",
    ],
    deliverables: [
      "Module clients",
      "Module stock",
      "Facturation",
      "Gestion utilisateurs",
      "Dashboard direction",
      "Export de rapports",
    ],
    process: ["Audit des processus", "Priorisation modules", "Developpement", "Migration simple", "Formation"],
    faq: [
      {
        question: "Faut-il un gros ERP pour commencer ?",
        answer:
          "Non. Une PME peut commencer avec un mini ERP centre sur les modules les plus utiles, puis evoluer progressivement.",
      },
      {
        question: "Peut-on adapter l'outil aux pratiques locales ?",
        answer:
          "Oui. L'objectif est de creer un outil simple, compatible avec les habitudes de l'equipe et les contraintes du terrain.",
      },
      {
        question: "Peut-on ajouter des dashboards plus tard ?",
        answer:
          "Oui. Les dashboards peuvent etre ajoutes quand les donnees deviennent assez structurees pour produire des indicateurs fiables.",
      },
    ],
    keywords: ["ERP Mali", "ERP PME Mali", "logiciel gestion Mali", "gestion stock Bamako", "mini ERP Bamako"],
  },
  {
    slug: "dashboard-data-mali",
    title: "Dashboards et data au Mali",
    metaTitle: "Dashboards, data et Business Intelligence au Mali",
    metaDescription:
      "NEURALIS cree des dashboards et rapports data au Mali pour suivre ventes, operations, ecoles, projets, KPIs et performances.",
    eyebrow: "Data et pilotage",
    h1: "Dashboards et Business Intelligence au Mali.",
    intro:
      "NEURALIS transforme les donnees disperses en tableaux de bord simples pour aider les dirigeants, ecoles et organisations a suivre leurs performances.",
    searchIntent: "Comprendre les chiffres de l'activite et prendre des decisions plus rapides.",
    audience: ["Directions", "PME", "Ecoles", "ONG", "Equipes commerciales", "Projets"],
    outcomes: [
      "KPIs visibles en un coup d'oeil",
      "Moins de reporting manuel",
      "Meilleur suivi des objectifs",
      "Decisions basees sur des donnees fiables",
    ],
    deliverables: [
      "Audit des donnees",
      "Nettoyage simple",
      "Dashboard web",
      "Rapports par periode",
      "Indicateurs personnalises",
      "Formation a la lecture des donnees",
    ],
    process: ["Inventaire donnees", "Choix KPIs", "Prototype dashboard", "Validation", "Suivi"],
    faq: [
      {
        question: "Faut-il deja avoir beaucoup de donnees ?",
        answer:
          "Non. On peut commencer avec les donnees existantes, puis structurer progressivement la collecte pour ameliorer les rapports.",
      },
      {
        question: "Un dashboard peut-il suivre une ecole ou une PME ?",
        answer:
          "Oui. Les indicateurs peuvent couvrir inscriptions, ventes, stock, clients, projets, paiements ou performances d'equipe.",
      },
      {
        question: "Les rapports peuvent-ils etre automatises ?",
        answer:
          "Oui. Selon les sources de donnees, certains rapports peuvent etre generes automatiquement ou semi-automatiquement.",
      },
    ],
    keywords: ["dashboard Mali", "data Mali", "Business Intelligence Mali", "KPI Bamako", "reporting Mali"],
  },
  {
    slug: "chatbot-ia-mali",
    title: "Chatbot IA au Mali",
    metaTitle: "Chatbots IA et automatisation pour entreprises au Mali",
    metaDescription:
      "NEURALIS accompagne les entreprises au Mali avec chatbots, assistants IA, automatisation de formulaires, analyse de documents et support client.",
    eyebrow: "IA et automatisation",
    h1: "Chatbots IA et automatisation pour entreprises au Mali.",
    intro:
      "NEURALIS aide les organisations a utiliser l'intelligence artificielle de maniere utile : repondre aux clients, qualifier les demandes, analyser des documents et automatiser des taches.",
    searchIntent: "Gagner du temps et ameliorer la reponse client avec des outils IA pratiques.",
    audience: ["Entreprises", "Ecoles", "Services clients", "ONG", "Startups", "Equipes commerciales"],
    outcomes: [
      "Reponses plus rapides aux prospects",
      "Demandes mieux qualifiees",
      "Automatisation de taches repetitives",
      "Premiers cas d'usage IA concrets",
    ],
    deliverables: [
      "Cadrage du cas d'usage",
      "Base de connaissances",
      "Prototype chatbot",
      "Integration formulaire ou site",
      "Tests et garde-fous",
      "Formation a l'utilisation",
    ],
    process: ["Cas d'usage", "Donnees utiles", "Prototype", "Tests", "Amelioration"],
    faq: [
      {
        question: "Un chatbot IA peut-il remplacer le service client ?",
        answer:
          "Non. Il peut aider a repondre aux questions simples et qualifier les demandes, mais l'humain reste important pour les cas complexes.",
      },
      {
        question: "Faut-il deja avoir beaucoup de documents ?",
        answer:
          "Pas toujours. On peut commencer avec une FAQ, les offres, les processus et les informations essentielles de l'entreprise.",
      },
      {
        question: "L'IA peut-elle etre integree au site NEURALIS ou a un site client ?",
        answer:
          "Oui. Selon le besoin, un assistant peut etre connecte a un site, un formulaire, un outil interne ou un workflow.",
      },
    ],
    keywords: ["chatbot IA Mali", "intelligence artificielle Mali", "automatisation Mali", "assistant IA Bamako", "IA entreprise Mali"],
  },
  {
    slug: "agence-digitale-mali",
    title: "Agence digitale au Mali",
    metaTitle: "Agence digitale et entreprise tech au Mali",
    metaDescription:
      "NEURALIS est une entreprise tech malienne basee a Bamako : sites web, applications, LMS, ERP, data, IA, automatisation, formation et conseil digital.",
    eyebrow: "Entreprise tech malienne",
    h1: "Agence digitale et entreprise tech au Mali.",
    intro:
      "NEURALIS accompagne les organisations ambitieuses avec une approche claire : commencer par des solutions utiles, construire la confiance, puis evoluer vers la data, l'IA et les plateformes avancees.",
    searchIntent: "Trouver un partenaire tech fiable au Mali pour construire une presence digitale et des outils metiers.",
    audience: ["Entreprises", "Ecoles", "Institutions", "ONG", "Startups", "Porteurs de projets"],
    outcomes: [
      "Un partenaire digital local",
      "Des services complets mais progressifs",
      "Une communication claire pour les non-techniciens",
      "Une vision long terme vers la data et l'IA",
    ],
    deliverables: [
      "Audit digital",
      "Creation de site web",
      "Applications metiers",
      "Plateformes LMS et ERP",
      "Dashboards",
      "IA et automatisation",
    ],
    process: ["Ecoute", "Priorisation", "Prototype", "Livraison", "Accompagnement"],
    faq: [
      {
        question: "NEURALIS est-elle une agence web ou une entreprise tech ?",
        answer:
          "NEURALIS commence par des services digitaux concrets comme les sites et applications, puis evolue vers les plateformes, la data, l'IA et les produits tech.",
      },
      {
        question: "Peut-on confier un projet complet a NEURALIS ?",
        answer:
          "Oui. NEURALIS peut cadrer, concevoir, developper, deployer et accompagner l'utilisation d'une solution digitale.",
      },
      {
        question: "NEURALIS travaille-t-elle seulement a Bamako ?",
        answer:
          "NEURALIS est basee a Bamako, mais peut accompagner des organisations dans tout le Mali et progressivement en Afrique de l'Ouest.",
      },
    ],
    keywords: [
      "agence digitale Mali",
      "entreprise tech Mali",
      "startup malienne",
      "meilleure agence web Mali",
      "transformation digitale Bamako",
    ],
  },
];

export const seoLandingSlugs = seoLandingPages.map((page) => page.slug);

export function getSeoLandingPage(slug: string) {
  return seoLandingPages.find((page) => page.slug === slug);
}
