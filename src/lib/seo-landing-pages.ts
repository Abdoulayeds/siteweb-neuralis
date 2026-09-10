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
    title: "Création de sites web à Bamako",
    metaTitle: "Création de sites web à Bamako et au Mali",
    metaDescription:
      "NEURALIS crée des sites web à Bamako : sites vitrines, institutionnels et marchands, adaptés au mobile, avec formulaire de contact et WhatsApp.",
    eyebrow: "Site web professionnel",
    h1: "Création de sites web professionnels à Bamako.",
    intro:
      "NEURALIS accompagne les entreprises, écoles, cabinets, ONG et entrepreneurs au Mali dans la création d’un site clair et professionnel. Les contenus et les parcours sont pensés pour présenter votre activité et faciliter la prise de contact.",
    searchIntent: "Présenter votre activité en ligne, préparer votre référencement local et faciliter les demandes de vos visiteurs.",
    audience: ["PME", "Écoles", "ONG", "Cabinets", "Commerces", "Entrepreneurs"],
    outcomes: [
      "Une image professionnelle en ligne",
      "Des pages claires pour présenter vos services",
      "Un parcours de demande de devis avec formulaire ou WhatsApp",
      "Des bases de référencement local pour Bamako et le Mali",
    ],
    deliverables: [
      "Mise en page adaptée au mobile, à la tablette et à l’ordinateur",
      "Pages Accueil, Services, À propos et Contact",
      "Formulaire de demande",
      "Paramétrage des éléments essentiels du référencement",
      "Configuration du domaine et de l’hébergement selon le devis",
      "Accompagnement après mise en ligne selon le périmètre convenu",
    ],
    process: ["Cadrage du besoin", "Maquette et contenus", "Développement", "Mise en ligne", "Suivi convenu"],
    faq: [
      {
        question: "Combien de temps faut-il pour créer un site web à Bamako ?",
        answer:
          "Le calendrier dépend du nombre de pages, des contenus disponibles et des fonctionnalités retenues. Nous précisons les étapes et les validations nécessaires après le cadrage du projet.",
      },
      {
        question: "NEURALIS peut-il gérer le domaine et l’hébergement ?",
        answer:
          "Oui. Nous pouvons accompagner le choix du nom de domaine, sa configuration, l’hébergement et la mise en ligne en HTTPS. Les accès, les frais récurrents et les responsabilités sont précisés dans la proposition.",
      },
      {
        question: "Le site sera-t-il adapté au téléphone ?",
        answer:
          "Oui. La présentation et la navigation sont conçues pour s’adapter au mobile, à la tablette et à l’ordinateur. Les parcours essentiels sont vérifiés sur plusieurs tailles d’écran avant la livraison.",
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
    title: "Développement d’applications au Mali",
    metaTitle: "Développement d’applications web et mobiles au Mali",
    metaDescription:
      "NEURALIS développe des applications web et mobiles au Mali pour gérer vos clients, réservations, ventes et opérations avec des parcours adaptés.",
    eyebrow: "Application web et mobile",
    h1: "Développement d’applications web et mobiles au Mali.",
    intro:
      "NEURALIS conçoit des applications sur mesure pour suivre vos opérations et simplifier le travail des équipes. Les fonctions prioritaires sont définies à partir des tâches, des utilisateurs et des contraintes de votre activité.",
    searchIntent: "Transformer un processus manuel en un outil numérique adapté aux personnes qui l’utilisent.",
    audience: ["PME", "Startups", "Écoles", "Institutions", "Services internes"],
    outcomes: [
      "Des informations regroupées dans un même outil",
      "Des accès et des données organisés par rôle",
      "Des parcours adaptés à votre métier",
      "Une première version dont les évolutions peuvent être planifiées",
    ],
    deliverables: [
      "Analyse fonctionnelle",
      "Interface web adaptée aux différents écrans",
      "Tableaux de bord",
      "Gestion des rôles et des accès",
      "Notifications et formulaires",
      "Documentation d’utilisation",
    ],
    process: ["Diagnostic", "Prototype", "Développement", "Tests utilisateurs", "Formation"],
    faq: [
      {
        question: "Quelle différence entre un site web et une application web ?",
        answer:
          "Un site présente principalement votre activité. Une application permet d’effectuer des tâches : se connecter, saisir des données, suivre une demande ou gérer une opération. Certains projets réunissent ces deux usages.",
      },
      {
        question: "Peut-on commencer petit puis ajouter des modules ?",
        answer:
          "Oui. Nous pouvons définir une première version centrée sur les fonctions essentielles. Les retours des utilisateurs servent ensuite à prioriser les modules suivants, selon le budget et les choix techniques retenus.",
      },
      {
        question: "L’application peut-elle être utilisée sur mobile ?",
        answer:
          "Oui. Une application web peut être conçue pour un navigateur mobile. Une application mobile dédiée peut aussi être envisagée lorsque les usages et les fonctions attendues le justifient.",
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
    title: "LMS et ERP pour écoles au Mali",
    metaTitle: "LMS et ERP pour écoles et centres de formation au Mali",
    metaDescription:
      "NEURALIS accompagne les écoles au Mali avec des plateformes LMS et ERP pour organiser cours, inscriptions, suivi des apprenants et administration.",
    eyebrow: "Éducation et outils numériques",
    h1: "Plateformes LMS et ERP pour écoles au Mali.",
    intro:
      "NEURALIS accompagne les écoles, instituts et centres de formation qui souhaitent centraliser leurs cours, leurs inscriptions et le suivi des apprenants. Les espaces et les modules sont définis selon les besoins de l’administration et des équipes pédagogiques.",
    searchIntent: "Organiser les activités d’un établissement dans une plateforme adaptée à l’administration, aux enseignants et aux apprenants.",
    audience: ["Écoles", "Instituts", "Centres de formation", "Universités privées", "Programmes d’ONG"],
    outcomes: [
      "Cours et ressources mieux organisés",
      "Suivi des apprenants et des inscriptions",
      "Communication structurée entre les profils",
      "Tableaux de bord pour la direction",
    ],
    deliverables: [
      "Portail apprenant",
      "Espace enseignant",
      "Gestion des cours",
      "Gestion administrative",
      "Rapports et indicateurs",
      "Formation des équipes",
    ],
    process: ["Analyse pédagogique et administrative", "Choix des modules", "Configuration", "Tests", "Accompagnement"],
    faq: [
      {
        question: "Un LMS remplace-t-il les cours en présentiel ?",
        answer:
          "Pas nécessairement. Un LMS, ou plateforme de formation, peut compléter les cours en présentiel avec des supports, des devoirs, des questionnaires et un suivi des activités. Le format dépend de votre organisation pédagogique.",
      },
      {
        question: "Peut-on réunir un LMS et des fonctions de gestion dans la même plateforme ?",
        answer:
          "C’est possible selon la solution retenue. Les modules peuvent couvrir la formation, les inscriptions, les notes, le suivi des paiements et les rapports ; leur articulation et les droits d’accès sont étudiés au cadrage.",
      },
      {
        question: "Les enseignants peuvent-ils être formés ?",
        answer:
          "Oui. Une prise en main peut être prévue pour les enseignants et les référents administratifs, avec des exercices sur les tâches qu’ils effectueront dans la plateforme.",
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
      "NEURALIS conçoit des ERP ciblés et des outils de gestion pour PME au Mali : clients, stocks, facturation, ventes et tableaux de bord.",
    eyebrow: "Gestion des PME",
    h1: "ERP et outils de gestion pour PME au Mali.",
    intro:
      "NEURALIS aide les PME à centraliser les informations aujourd’hui réparties dans plusieurs fichiers. Clients, stocks, factures et ventes peuvent être regroupés dans une plateforme métier dont les modules suivent vos priorités.",
    searchIntent: "Mieux suivre votre activité avec un outil de gestion choisi selon vos usages, vos contraintes et votre budget.",
    audience: ["PME", "Commerces", "Distributeurs", "Entreprises de services", "Équipes opérationnelles"],
    outcomes: [
      "Une vue d’ensemble de l’activité",
      "Suivi du stock et des ventes",
      "Des données centralisées avec des accès définis",
      "Des rapports pour éclairer les décisions",
    ],
    deliverables: [
      "Module clients",
      "Module stock",
      "Facturation",
      "Gestion des utilisateurs et des accès",
      "Tableau de bord de direction",
      "Export de rapports",
    ],
    process: ["Audit des processus", "Priorisation des modules", "Développement", "Reprise des données retenues", "Formation"],
    faq: [
      {
        question: "Faut-il un ERP complet pour commencer ?",
        answer:
          "Non. Une PME peut commencer par les modules les plus utiles, par exemple les clients et les stocks. Le périmètre initial et les possibilités d’évolution sont définis avant la réalisation.",
      },
      {
        question: "Peut-on adapter l’outil aux pratiques locales ?",
        answer:
          "Les habitudes des équipes, les équipements et les contraintes du terrain sont examinés au cadrage. Ces éléments orientent les parcours, les règles de gestion et les choix techniques.",
      },
      {
        question: "Peut-on ajouter des tableaux de bord plus tard ?",
        answer:
          "Oui, selon les possibilités de la solution retenue. Il faut d’abord disposer de données structurées et définir les règles de calcul des indicateurs que vous souhaitez suivre.",
      },
    ],
    keywords: ["ERP Mali", "ERP PME Mali", "logiciel gestion Mali", "gestion stock Bamako", "mini ERP Bamako"],
  },
  {
    slug: "dashboard-data-mali",
    title: "Tableaux de bord et data au Mali",
    metaTitle: "Tableaux de bord, data et Business Intelligence au Mali",
    metaDescription:
      "NEURALIS crée des tableaux de bord et des rapports au Mali pour suivre ventes, inscriptions, opérations et projets à partir de vos données.",
    eyebrow: "Data et pilotage",
    h1: "Tableaux de bord et Business Intelligence au Mali.",
    intro:
      "NEURALIS organise vos données pour construire des tableaux de bord utiles aux dirigeants, aux écoles et aux organisations. Les indicateurs, leurs sources et leur fréquence de mise à jour sont définis avec les équipes qui les utiliseront.",
    searchIntent: "Comprendre les chiffres de votre activité et disposer de repères partagés pour prendre vos décisions.",
    audience: ["Directions", "PME", "Écoles", "ONG", "Équipes commerciales", "Équipes projet"],
    outcomes: [
      "Des indicateurs essentiels visibles d’un coup d’œil",
      "Une préparation des rapports mieux organisée",
      "Un suivi des objectifs par période",
      "Des décisions éclairées par des données dont les limites sont connues",
    ],
    deliverables: [
      "Audit des sources et de la qualité des données",
      "Nettoyage des données dans le périmètre retenu",
      "Tableau de bord web",
      "Rapports par période",
      "Indicateurs personnalisés et règles de calcul",
      "Formation à la lecture des données",
    ],
    process: ["Inventaire des données", "Choix des indicateurs", "Prototype du tableau de bord", "Validation des calculs", "Suivi"],
    faq: [
      {
        question: "Faut-il déjà avoir beaucoup de données ?",
        answer:
          "Pas nécessairement. Nous examinons les données disponibles et les questions auxquelles elles peuvent répondre. La qualité et la régularité de la collecte comptent autant que le volume.",
      },
      {
        question: "Un tableau de bord peut-il suivre une école ou une PME ?",
        answer:
          "Oui. Les indicateurs peuvent porter sur les inscriptions, les ventes, les stocks, les clients, les projets ou les paiements. Leur définition dépend des objectifs de l’organisation et des données disponibles.",
      },
      {
        question: "Les rapports peuvent-ils être automatisés ?",
        answer:
          "Une actualisation automatique ou une importation périodique peut être prévue selon les sources et leurs possibilités de connexion. La fréquence, les vérifications et les interventions manuelles restantes sont précisées.",
      },
    ],
    keywords: ["dashboard Mali", "data Mali", "Business Intelligence Mali", "KPI Bamako", "reporting Mali"],
  },
  {
    slug: "chatbot-ia-mali",
    title: "Chatbot IA au Mali",
    metaTitle: "Chatbots IA et automatisation pour entreprises au Mali",
    metaDescription:
      "NEURALIS accompagne les entreprises au Mali avec des chatbots, assistants IA et automatisations ciblées, testés sur leurs usages et leurs données.",
    eyebrow: "IA et automatisation",
    h1: "Chatbots IA et automatisation pour entreprises au Mali.",
    intro:
      "NEURALIS aide les organisations à utiliser l’intelligence artificielle pour préparer des réponses, orienter les demandes et analyser des documents. Chaque cas d’usage est testé avec des limites d’accès, des règles de confidentialité et une validation humaine adaptée au risque.",
    searchIntent: "Réduire les tâches répétitives et aider vos équipes à traiter les demandes dans un cadre défini.",
    audience: ["Entreprises", "Écoles", "Services clients", "ONG", "Startups", "Équipes commerciales"],
    outcomes: [
      "Une aide à la préparation des réponses courantes",
      "Des demandes orientées selon des critères définis",
      "Des tâches répétitives automatisées dans un périmètre ciblé",
      "Un premier usage IA évalué sur des situations concrètes",
    ],
    deliverables: [
      "Cadrage du cas d’usage et des validations nécessaires",
      "Base de connaissances issue de contenus validés",
      "Prototype de chatbot",
      "Intégration au formulaire ou au site retenu",
      "Tests des réponses, des exceptions et des limites d’accès",
      "Formation à l’utilisation et aux limites de l’outil",
    ],
    process: ["Choix du cas d’usage", "Examen des données utiles", "Prototype", "Tests et validations", "Amélioration"],
    faq: [
      {
        question: "Un chatbot IA peut-il remplacer le service client ?",
        answer:
          "Un chatbot peut aider à traiter les questions courantes et à orienter les demandes, mais il peut aussi produire une réponse inexacte. Un relais humain et des validations sont prévus pour les situations complexes ou sensibles.",
      },
      {
        question: "Faut-il déjà avoir beaucoup de documents ?",
        answer:
          "Pas toujours. Une FAQ, des offres et des informations essentielles validées peuvent suffire pour un premier usage. Les données confidentielles sont examinées avant toute transmission à un service d’IA et peuvent être exclues ou anonymisées.",
      },
      {
        question: "Un assistant IA peut-il être intégré à notre site ?",
        answer:
          "C’est possible selon la technologie du site et les accès disponibles. Nous étudions la connexion au site, au formulaire ou à l’outil interne, puis définissons les informations accessibles et les actions autorisées.",
      },
    ],
    keywords: ["chatbot IA Mali", "intelligence artificielle Mali", "automatisation Mali", "assistant IA Bamako", "IA entreprise Mali"],
  },
  {
    slug: "agence-digitale-mali",
    title: "Agence digitale au Mali",
    metaTitle: "Agence digitale à Bamako, Mali",
    metaDescription:
      "NEURALIS, entreprise numérique basée à Bamako : sites web, applications, plateformes, data, IA, formation et conseil pour les organisations au Mali.",
    eyebrow: "Entreprise numérique à Bamako",
    h1: "Votre partenaire digital à Bamako et au Mali.",
    intro:
      "NEURALIS accompagne les organisations dans leur présence en ligne et leurs outils de travail. Du site web à la plateforme métier, en passant par la data et l’IA, chaque projet commence par un besoin concret et un périmètre défini avec vous.",
    searchIntent: "Trouver un interlocuteur au Mali pour cadrer votre projet, construire votre présence digitale ou faire évoluer vos outils métiers.",
    audience: ["Entreprises", "Écoles", "Institutions", "ONG", "Startups", "Porteurs de projets"],
    outcomes: [
      "Un partenaire digital local",
      "Des étapes de réalisation adaptées aux priorités",
      "Des explications claires pour décider sans expertise technique",
      "Des évolutions envisagées selon les besoins de l’organisation",
    ],
    deliverables: [
      "Audit digital",
      "Création de sites web",
      "Applications métiers",
      "Plateformes LMS et ERP",
      "Tableaux de bord",
      "IA et automatisation",
    ],
    process: ["Écoute du besoin", "Priorisation", "Prototype", "Livraison", "Accompagnement convenu"],
    faq: [
      {
        question: "NEURALIS réalise-t-elle uniquement des sites web ?",
        answer:
          "Non. NEURALIS propose aussi des applications, des plateformes LMS et ERP, des tableaux de bord, de l’IA et de l’automatisation, ainsi que de la formation et du conseil digital. Le choix dépend de votre besoin, pas d’un parcours imposé.",
      },
      {
        question: "Peut-on confier un projet complet à NEURALIS ?",
        answer:
          "Nous pouvons accompagner le cadrage, la conception, le développement, la mise en ligne et la prise en main d’une solution. La proposition précise les livrables, les responsabilités et les modalités d’accompagnement retenues.",
      },
      {
        question: "NEURALIS travaille-t-elle seulement à Bamako ?",
        answer:
          "NEURALIS est basée à Bamako et peut étudier des projets d’organisations situées ailleurs au Mali. Les modalités de collaboration, à distance ou sur place, sont définies selon la mission.",
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
