export type ServiceDefinition = {
  id: string;
  title: string;
  eyebrow: string;
  category: "Créer" | "Organiser" | "Développer";
  summary: string;
  description: string;
  image: string;
  imageAlt: string;
  forWho: string[];
  deliverables: string[];
  benefits: { title: string; description: string }[];
  example: { title: string; description: string };
  process: string[];
  faq: { question: string; answer: string }[];
};

export const serviceCatalog: ServiceDefinition[] = [
  {
    id: "sites-web",
    title: "Sites web professionnels",
    eyebrow: "Votre présence en ligne",
    category: "Créer",
    summary: "Présentez votre activité avec un site clair, soigné et pensé pour faciliter la prise de contact.",
    description:
      "Nous concevons des sites vitrines, institutionnels et marchands qui rendent votre offre compréhensible dès les premières pages. Contenus, navigation et parcours de contact sont organisés autour de vos visiteurs, avec une attention particulière à l’usage sur mobile.",
    image: "/images/services/sites-web.webp",
    imageAlt: "Illustration de la conception d’un site web professionnel sur ordinateur et mobile",
    forWho: ["PME et entreprises", "Commerces", "Écoles et centres de formation", "ONG et associations", "Cabinets et indépendants"],
    deliverables: [
      "Arborescence et organisation des contenus essentiels",
      "Maquettes visuelles adaptées à votre identité",
      "Pages conçues pour ordinateur, tablette et mobile",
      "Parcours de contact, formulaire ou lien WhatsApp selon le besoin",
      "Paramétrage des titres, descriptions et éléments techniques du référencement",
      "Guide de prise en main et modalités de mise en ligne définies au devis",
    ],
    benefits: [
      { title: "Une offre lisible", description: "Vos visiteurs trouvent vos services, vos informations pratiques et la prochaine étape sans chercher longtemps." },
      { title: "Une image cohérente", description: "La mise en page, les visuels et le ton donnent une présentation professionnelle de votre activité." },
      { title: "Une base évolutive", description: "Le site peut accueillir de nouvelles pages ou fonctions selon les choix techniques retenus au départ." },
    ],
    example: {
      title: "Scénario : rendre un centre de formation visible",
      description: "Un centre souhaite présenter ses programmes, préciser les conditions d’inscription et recevoir des demandes ciblées. Un site avec fiches de formation, informations pratiques et formulaire d’orientation répond à ce besoin, sans imposer immédiatement une plateforme complète.",
    },
    process: ["Clarifier vos publics, vos objectifs et vos contenus", "Valider la structure et la direction visuelle", "Développer et vérifier les parcours sur plusieurs écrans", "Préparer la mise en ligne et la prise en main"],
    faq: [
      { question: "Puis-je faire évoluer un site existant ?", answer: "Oui. Nous examinons sa structure, sa technologie et ses contenus avant de proposer une amélioration ciblée ou une refonte, selon ce qui est le plus pertinent." },
      { question: "Dois-je fournir les textes et les photos ?", answer: "Les éléments disponibles sont recensés au démarrage. La rédaction, la sélection de visuels ou leur création peuvent être prévues dans le périmètre ; les contenus sont validés avec vous." },
      { question: "L’hébergement et la maintenance sont-ils inclus ?", answer: "Le devis précise le nom de domaine, l’hébergement, les accès et les éventuels frais récurrents. La maintenance et les évolutions font l’objet de modalités explicites." },
    ],
  },
  {
    id: "applications",
    title: "Applications web et mobiles",
    eyebrow: "Des outils pour votre activité",
    category: "Créer",
    summary: "Transformez un besoin métier en une application utile, avec des parcours simples et des fonctions ciblées.",
    description:
      "Nous développons des applications pour gérer des demandes, des réservations, des opérations ou des espaces clients. Le projet démarre par les usages prioritaires, puis avance par étapes pour valider les fonctionnalités avec les personnes qui les utiliseront.",
    image: "/images/services/applications.webp",
    imageAlt: "Illustration d’une application métier et de ses interfaces web et mobiles",
    forWho: ["PME", "Startups", "Équipes opérationnelles", "Commerces et prestataires", "Porteurs de projets"],
    deliverables: [
      "Cadrage fonctionnel et liste des parcours prioritaires",
      "Prototype des écrans et des interactions principales",
      "Application web ou mobile selon le contexte d’usage",
      "Comptes utilisateurs et droits d’accès adaptés aux rôles",
      "Espace d’administration et connexions aux outils retenus",
      "Tests des parcours définis et documentation de prise en main",
    ],
    benefits: [
      { title: "Un outil centré sur le terrain", description: "Les écrans suivent votre façon de travailler et les contraintes de vos utilisateurs, pas une liste de fonctions génériques." },
      { title: "Des échanges mieux suivis", description: "Les demandes et leur statut sont regroupés pour limiter les informations dispersées entre messages et fichiers." },
      { title: "Un lancement maîtrisé", description: "Une première version ciblée permet de confronter les usages réels aux priorités avant d’élargir le produit." },
    ],
    example: {
      title: "Scénario : suivre les interventions d’une équipe",
      description: "Une entreprise de services veut centraliser les demandes, affecter les interventions et informer ses clients de leur avancement. Une application pourrait réunir formulaire de demande, planning et compte rendu, avec des accès distincts pour le client, l’intervenant et le responsable.",
    },
    process: ["Décrire les utilisateurs et les situations de travail", "Prototyper les parcours et prioriser la première version", "Développer par étapes avec des démonstrations", "Tester, déployer et accompagner l’adoption"],
    faq: [
      { question: "Faut-il une application mobile ou une application web ?", answer: "Le choix dépend notamment des appareils utilisés, de la connexion disponible et des fonctions nécessaires. Une application web adaptée au mobile peut suffire ; une application dédiée se justifie pour certains usages spécifiques." },
      { question: "Peut-on commencer avec peu de fonctionnalités ?", answer: "Oui. Nous pouvons cadrer une première version autour d’un parcours essentiel, puis utiliser les retours du terrain pour décider des évolutions suivantes." },
      { question: "L’application pourra-t-elle se connecter à nos outils ?", answer: "Les connexions sont étudiées selon les possibilités de chaque logiciel, ses droits d’accès et ses conditions d’utilisation. Les intégrations retenues sont précisées avant le développement." },
    ],
  },
  {
    id: "plateformes",
    title: "LMS, ERP et plateformes métiers",
    eyebrow: "Une gestion mieux organisée",
    category: "Organiser",
    summary: "Centralisez vos activités dans une plateforme adaptée à vos équipes, vos processus et vos règles de gestion.",
    description:
      "Nous accompagnons les écoles et les organisations dans la mise en place de plateformes de formation et de gestion. Cours, inscriptions, stocks, clients ou suivi administratif sont structurés dans un périmètre cohérent, à partir d’une solution existante ou d’un développement adapté.",
    image: "/images/services/plateformes.webp",
    imageAlt: "Illustration d’une plateforme de gestion avec modules et tableau de bord",
    forWho: ["Écoles et établissements", "Centres de formation", "PME", "ONG et associations", "Services administratifs"],
    deliverables: [
      "Cartographie des processus et des besoins de gestion",
      "Choix et configuration des modules prioritaires",
      "Espaces et permissions par profil utilisateur",
      "Préparation de la reprise des données retenues",
      "Tableaux de suivi et exports utiles aux équipes",
      "Formation des référents et documentation d’exploitation",
    ],
    benefits: [
      { title: "Une information partagée", description: "Les équipes consultent une base commune avec des accès adaptés à leurs responsabilités." },
      { title: "Des processus plus clairs", description: "Les étapes de traitement et de validation deviennent visibles, du dépôt d’une demande à sa clôture." },
      { title: "Une adoption progressive", description: "Le déploiement peut commencer par un service ou un module avant de s’étendre à l’organisation." },
    ],
    example: {
      title: "Scénario : organiser un parcours de formation",
      description: "Un établissement veut mettre ses supports à disposition, gérer les inscriptions et suivre la progression des apprenants. Une plateforme de formation, ou LMS, pourrait réunir ces usages dans des espaces séparés pour l’administration, les enseignants et les apprenants.",
    },
    process: ["Observer les processus et identifier les référents", "Définir les modules, les rôles et la reprise des données", "Configurer puis tester avec un groupe pilote", "Déployer progressivement et former les équipes"],
    faq: [
      { question: "Quelle différence entre un LMS et un ERP ?", answer: "Un LMS organise les contenus et parcours de formation. Un ERP regroupe des fonctions de gestion comme les stocks, les achats ou la relation client ; les modules utiles dépendent de votre activité." },
      { question: "Faut-il remplacer tous nos logiciels ?", answer: "Pas nécessairement. Le diagnostic distingue ce qui fonctionne, ce qui peut être connecté et ce qui mérite d’être remplacé pour éviter une migration inutilement lourde." },
      { question: "Pouvez-vous reprendre nos fichiers actuels ?", answer: "Nous évaluons les formats, la qualité et le volume des données. La reprise demande parfois un nettoyage et des règles de correspondance ; un échantillon est validé avant une importation plus large." },
    ],
  },
  {
    id: "communication",
    title: "Communication digitale et branding",
    eyebrow: "Une marque qui se comprend",
    category: "Créer",
    summary: "Donnez de la cohérence à votre identité, vos contenus et vos prises de parole sur les bons canaux.",
    description:
      "Nous structurons votre présence digitale autour de votre activité, de vos publics et de vos messages essentiels. Identité visuelle, contenus et calendrier éditorial forment un ensemble cohérent pour présenter votre offre et entretenir la relation avec votre audience.",
    image: "/images/services/communication.webp",
    imageAlt: "Illustration d’une identité visuelle et de supports de communication digitale",
    forWho: ["Entreprises en lancement", "Commerces et restaurants", "Marques locales", "Indépendants", "Associations et organisations"],
    deliverables: [
      "Diagnostic de votre présence et de vos supports existants",
      "Positionnement éditorial, publics et messages clés",
      "Direction visuelle et modèles de publication selon le périmètre",
      "Calendrier éditorial adapté à vos moyens de production",
      "Contenus et optimisation des profils retenus",
      "Repères de suivi et bilan des actions convenues",
    ],
    benefits: [
      { title: "Une identité reconnaissable", description: "Vos supports utilisent des repères visuels et un ton communs, du site aux réseaux sociaux." },
      { title: "Des contenus plus utiles", description: "Les publications répondent aux questions de vos publics et mettent en valeur votre offre concrètement." },
      { title: "Une organisation réaliste", description: "La production est planifiée avec un circuit de validation et une fréquence adaptés à votre disponibilité." },
    ],
    example: {
      title: "Scénario : préparer le lancement d’un commerce",
      description: "Un commerce veut expliquer son offre et annoncer son ouverture. Une direction visuelle, des modèles de publications, une présentation claire sur les réseaux et un calendrier de lancement peuvent donner une base cohérente à sa communication.",
    },
    process: ["Comprendre votre marque, vos publics et vos canaux", "Valider les messages et la direction visuelle", "Préparer les contenus et organiser leur validation", "Publier selon le périmètre et analyser les retours"],
    faq: [
      { question: "Pouvez-vous travailler avec notre identité actuelle ?", answer: "Oui. Nous pouvons harmoniser les supports à partir de votre logo et de votre charte, ou proposer une évolution ciblée si certains éléments ne répondent plus à vos besoins." },
      { question: "La gestion des réseaux sociaux est-elle possible ?", answer: "Elle peut être prévue avec les canaux, la fréquence, les formats, la modération et le circuit de validation. Les campagnes publicitaires et leur budget sont précisés séparément lorsqu’elles sont nécessaires." },
      { question: "Comment évaluer les résultats ?", answer: "Nous choisissons des indicateurs liés à l’objectif : demandes reçues, interactions pertinentes, visites ou portée. Ils servent à ajuster les contenus sans promettre un volume fixe de ventes ou d’abonnés." },
    ],
  },
  {
    id: "data",
    title: "Data et tableaux de bord",
    eyebrow: "Des données pour décider",
    category: "Organiser",
    summary: "Transformez vos fichiers et vos données d’activité en indicateurs compréhensibles et en rapports utiles.",
    description:
      "Nous organisons vos données pour construire des tableaux de bord qui répondent à des questions de gestion précises. Les sources, les règles de calcul et la fréquence de mise à jour sont définies avec vos équipes pour donner du sens aux indicateurs.",
    image: "/images/services/data.webp",
    imageAlt: "Illustration d’un tableau de bord avec graphiques et indicateurs d’activité",
    forWho: ["Directions de PME", "Équipes commerciales", "Établissements de formation", "Responsables opérationnels", "ONG et associations"],
    deliverables: [
      "Inventaire des sources et diagnostic de qualité des données",
      "Définition des indicateurs et de leurs règles de calcul",
      "Préparation et structuration des données retenues",
      "Tableau de bord avec vues et filtres pertinents",
      "Modalités d’actualisation, de partage et d’accès",
      "Documentation des indicateurs et prise en main",
    ],
    benefits: [
      { title: "Une lecture commune", description: "Les équipes s’appuient sur des définitions partagées pour interpréter les résultats." },
      { title: "Des écarts visibles", description: "Les vues par période, activité ou catégorie aident à repérer les évolutions qui méritent une attention." },
      { title: "Un reporting structuré", description: "Un circuit de préparation et de mise à jour défini limite les retraitements dispersés à chaque bilan." },
    ],
    example: {
      title: "Scénario : suivre les ventes d’une PME",
      description: "Une PME suit ses ventes dans plusieurs fichiers et peine à préparer son bilan. Un tableau de bord pourrait regrouper les ventes par période, les catégories de produits et les encaissements, après harmonisation des formats et validation des règles de calcul.",
    },
    process: ["Formuler les questions auxquelles le tableau de bord doit répondre", "Examiner les sources et valider les indicateurs", "Construire les vues et contrôler les calculs", "Organiser l’actualisation et former les utilisateurs"],
    faq: [
      { question: "Nos données sont dans Excel : est-ce suffisant ?", answer: "Des fichiers Excel peuvent constituer un point de départ. Nous vérifions leur structure et leur cohérence, puis précisons les ajustements nécessaires avant de construire les indicateurs." },
      { question: "Les chiffres seront-ils mis à jour automatiquement ?", answer: "Cela dépend de l’accès aux sources et des outils disponibles. Une actualisation automatisée ou une importation périodique peut être retenue ; sa fréquence et ses limites sont documentées." },
      { question: "Qui pourra consulter les tableaux de bord ?", answer: "Les droits de consultation et de modification sont définis avec vous. Les modalités de partage tiennent compte de la sensibilité des données et des possibilités de la solution choisie." },
    ],
  },
  {
    id: "ia",
    title: "IA et automatisation",
    eyebrow: "Du temps pour l’essentiel",
    category: "Organiser",
    summary: "Simplifiez les tâches répétitives avec des automatisations ciblées et une IA intégrée à vos usages.",
    description:
      "Nous identifions les tâches qui peuvent être automatisées et les situations où un assistant IA apporte une aide concrète. Les solutions sont testées sur des cas représentatifs, avec des règles de confidentialité et une validation humaine adaptée aux décisions importantes.",
    image: "/images/services/ia.webp",
    imageAlt: "Illustration d’un assistant IA relié à des documents et à un processus de travail",
    forWho: ["Équipes administratives", "Services clients", "PME", "Centres de formation", "Entrepreneurs"],
    deliverables: [
      "Sélection d’un cas d’usage et de critères de réussite observables",
      "Cartographie du processus, des données et des accès nécessaires",
      "Prototype d’assistant ou de scénario d’automatisation",
      "Connexions aux outils et sources documentaires retenus",
      "Tests, règles de validation et traitement des exceptions",
      "Guide d’utilisation, limites connues et modalités de suivi",
    ],
    benefits: [
      { title: "Moins de manipulations répétitives", description: "Les transferts, classements ou préparations de documents peuvent être pris en charge dans un processus balisé." },
      { title: "Une information plus accessible", description: "Un assistant peut aider à retrouver et reformuler des informations issues d’un ensemble de documents défini." },
      { title: "Un contrôle conservé", description: "Les actions sensibles peuvent rester soumises à une approbation, avec un relais humain lorsque la demande sort du cadre." },
    ],
    example: {
      title: "Scénario : préparer les réponses aux demandes courantes",
      description: "Une équipe reçoit des questions récurrentes sur ses offres. Un assistant pourrait proposer une réponse à partir de documents validés et la soumettre à un collaborateur avant envoi, tout en orientant les demandes inhabituelles vers la bonne personne.",
    },
    process: ["Choisir un usage précis et examiner les données concernées", "Définir les étapes automatiques et les validations humaines", "Tester un prototype sur des cas courants et des exceptions", "Déployer dans un périmètre maîtrisé et suivre les retours"],
    faq: [
      { question: "Une automatisation a-t-elle forcément besoin d’IA ?", answer: "Non. Une règle simple suffit souvent pour transférer des données ou déclencher une notification. L’IA est envisagée lorsque la tâche demande notamment de comprendre, classer ou rédiger du texte." },
      { question: "Comment sont traitées les données confidentielles ?", answer: "Nous examinons les données nécessaires, les accès et les conditions des services envisagés avant l’intégration. Le périmètre peut exclure certaines informations ou prévoir leur anonymisation ; les choix sont validés avec vous." },
      { question: "Peut-on laisser l’IA agir sans contrôle ?", answer: "Une IA peut produire une réponse inexacte. Le niveau d’autonomie dépend du risque : validation humaine pour les contenus ou actions sensibles, limites d’accès et procédure de reprise lorsque le système ne sait pas traiter la demande." },
    ],
  },
  {
    id: "formation",
    title: "Formation professionnelle",
    eyebrow: "Des compétences qui servent",
    category: "Développer",
    summary: "Apprenez à utiliser les outils digitaux à partir d’exercices pratiques et de situations proches de votre quotidien.",
    description:
      "Nous construisons des formations en IA, bureautique, data, communication digitale et développement selon le niveau des participants. Les séances alternent explications, démonstrations et exercices pour relier chaque apprentissage à une tâche concrète.",
    image: "/images/services/formation.webp",
    imageAlt: "Illustration d’un atelier de formation aux outils numériques",
    forWho: ["Équipes d’entreprise", "Professionnels", "Entrepreneurs", "Étudiants", "Associations et établissements"],
    deliverables: [
      "Échange de cadrage sur le niveau et les objectifs des participants",
      "Programme adapté aux compétences prioritaires",
      "Supports de formation et ressources de référence",
      "Exercices guidés et mises en pratique contextualisées",
      "Évaluation des acquis et retour sur les points à approfondir",
      "Pistes de pratique autonome après la session",
    ],
    benefits: [
      { title: "Un apprentissage contextualisé", description: "Les exemples sont choisis pour correspondre aux tâches et aux outils des participants." },
      { title: "Une progression accessible", description: "Le contenu tient compte des prérequis et laisse une place aux questions ainsi qu’à la pratique." },
      { title: "Des repères réutilisables", description: "Les supports et exercices fournissent une base pour refaire les manipulations après la formation." },
    ],
    example: {
      title: "Scénario : prendre en main l’IA au bureau",
      description: "Une équipe souhaite utiliser l’IA pour préparer des comptes rendus et des brouillons de courriels. Un atelier pourrait aborder la formulation des demandes, la vérification des réponses et les informations à ne pas transmettre, avec des exercices sur des données fictives.",
    },
    process: ["Identifier le public, les prérequis et les usages attendus", "Construire le programme et préparer les exercices", "Animer les séances avec des mises en pratique", "Évaluer les acquis et proposer des pistes de progression"],
    faq: [
      { question: "Faut-il déjà maîtriser les outils numériques ?", answer: "Le niveau attendu dépend du thème. Nous précisons les prérequis au cadrage et adaptons le programme, ou proposons une étape d’initiation si elle est nécessaire." },
      { question: "La formation peut-elle concerner toute une équipe ?", answer: "Oui. Le format, le nombre de participants, le matériel et les modalités à distance ou en présentiel sont définis selon les objectifs et les contraintes de l’organisation." },
      { question: "Une attestation est-elle prévue ?", answer: "Une attestation de participation peut être prévue dans la proposition. Elle ne doit pas être confondue avec une certification professionnelle reconnue, qui nécessiterait un dispositif spécifique." },
    ],
  },
  {
    id: "consulting",
    title: "Conseil et audit digital",
    eyebrow: "Les bons choix avant d’agir",
    category: "Développer",
    summary: "Clarifiez vos besoins, comparez vos options et préparez un projet digital avec des priorités explicites.",
    description:
      "Nous analysons vos outils, vos usages et vos contraintes pour identifier les améliorations qui méritent d’être engagées. Le conseil se traduit en recommandations compréhensibles et en documents de cadrage qui facilitent les décisions et les échanges avec vos prestataires.",
    image: "/images/services/consulting.webp",
    imageAlt: "Illustration d’un atelier de conseil digital autour d’une feuille de route",
    forWho: ["Directions et responsables", "PME", "Institutions", "Écoles et centres de formation", "Porteurs de projets"],
    deliverables: [
      "Entretiens de cadrage et inventaire des outils concernés",
      "Diagnostic des usages, difficultés et dépendances",
      "Recommandations hiérarchisées avec leurs avantages et limites",
      "Comparaison des options techniques ou des logiciels envisagés",
      "Feuille de route et périmètre de première étape",
      "Cahier des charges ou critères de sélection selon la mission",
    ],
    benefits: [
      { title: "Un problème mieux défini", description: "La réflexion part des besoins de l’organisation pour éviter de choisir un outil avant de comprendre son usage." },
      { title: "Des arbitrages explicites", description: "Coûts récurrents, dépendances, adoption et possibilités d’évolution entrent dans la comparaison." },
      { title: "Une suite plus concrète", description: "Les recommandations sont organisées en étapes pour savoir quoi engager, avec qui et sur quelle base." },
    ],
    example: {
      title: "Scénario : choisir un outil de gestion",
      description: "Une PME hésite entre améliorer ses fichiers, adopter un logiciel existant ou développer un outil. Une mission de cadrage pourrait comparer ces options à partir des processus, des besoins d’accès, de la reprise des données et des contraintes de maintenance.",
    },
    process: ["Définir la question à résoudre et les interlocuteurs", "Examiner les usages, les outils et les contraintes", "Comparer les options et hiérarchiser les recommandations", "Restituer une feuille de route et les décisions à prendre"],
    faq: [
      { question: "Faut-il avoir un cahier des charges pour vous contacter ?", answer: "Non. Vous pouvez partir d’une difficulté concrète ou d’une idée encore ouverte. La mission de cadrage sert justement à formaliser le besoin et à distinguer l’essentiel des options." },
      { question: "L’audit oblige-t-il à confier ensuite le développement à NEURALIS ?", answer: "L’audit peut être une mission distincte. Son périmètre et ses livrables sont définis pour vous aider à décider de la suite, que celle-ci soit réalisée en interne ou avec un prestataire." },
      { question: "Quels éléments préparer pour un premier échange ?", answer: "Une description de votre activité, les outils utilisés, les principales difficultés et les personnes concernées suffisent pour démarrer. Vous pouvez partager des exemples anonymisés lorsque les documents contiennent des informations sensibles." },
    ],
  },
];

export function getService(id: string): ServiceDefinition | undefined {
  return serviceCatalog.find((service) => service.id === id);
}
