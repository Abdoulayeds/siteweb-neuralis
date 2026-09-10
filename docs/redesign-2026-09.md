# Refonte NEURALIS — septembre 2026

## Contenu et navigation

- Huit expertises illustrées dans `src/lib/service-catalog.ts` : textes courts, publics, bénéfices, livrables, scénario illustratif, étapes et FAQ.
- Les cartes proposent une fenêtre « En savoir plus » et une fiche permanente `/services/{id}` accessible aussi sans JavaScript.
- Les pages Solutions, Offres, Portfolio et À propos utilisent des résumés et des détails à la demande. Le portfolio présente explicitement des illustrations de solutions, pas des références clients.
- Les sept pages d'expertise locale conservent leurs adresses et disposent de métadonnées, d'une illustration et de questions repliables.
- Le thème sombre, le fond neuronal, les logos des réseaux sociaux et le respect de la réduction des animations sont conservés.

## Visuels

Les huit illustrations originales sont dans `public/images/services`, au format WebP 1200 × 800, chacune sous 180 Ko. Les consignes de génération sont conservées dans [service-image-prompts.md](service-image-prompts.md). Pour remplacer une image, conserver son nom ou modifier le catalogue ainsi que son texte alternatif.

## Contact

Le formulaire utilise `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` lorsqu'elle est configurée au moment de la compilation. En son absence, la page propose un contact direct par e-mail et WhatsApp. La vérification automatique n'envoie aucun message réel.

## Vérification avant publication

Utiliser Node.js 22.18 ou plus récent pour les tests qui importent directement le catalogue TypeScript.

```sh
npm ci
npm run lint
npm test
npm run build
npm run test:e2e
npm audit --audit-level=high
```

Les tests navigateur contrôlent l'export statique `out`, sur ordinateur et mobile : routes, métadonnées, images, débordements, navigation, fenêtres de détail, clavier et accès sans JavaScript. Microsoft Edge est utilisé par défaut sous Windows ; `BROWSER_CHANNEL` permet de choisir un autre navigateur Playwright installé. Les captures et rapports locaux sont exclus de Git.

Après la compilation, un correctif de portabilité normalise les noms des segments de préchargement exportés par Next 16.3 sous Windows. Il ne modifie que le dossier généré `out` et ne fait rien sur Linux, où les noms sont déjà corrects.

## Publication

Le projet conserve son export statique et sa configuration de publication existante. Déployer le dernier commit GitHub avec la commande de compilation habituelle et le dossier de sortie `out`. Aucun nouveau service d'hébergement ni secret n'a été ajouté par cette refonte.
