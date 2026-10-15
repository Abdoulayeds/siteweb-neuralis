# NEURALIS website

Site vitrine Next.js statique deploye sur Render pour `neuralis-mali.com`.

## Formulaire de contact

Le formulaire `/contact` utilise Web3Forms. Ajouter cette variable dans Render avant de redeployer :

```bash
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_web3forms_key
```

La page de confirmation est `/merci`.

## Developpement local

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000). Les pages se trouvent dans `src/app/`.

## Commandes utiles

| Commande | Role |
|----------|------|
| `npm run dev` | Serveur de developpement |
| `npm run build` | Export statique dans `out/` (puis normalisation via `scripts/normalize-static-export.mjs`) |
| `npm run lint` | Verification ESLint |
| `npm test` | Tests unitaires (`tests/*.test.mjs`, runner natif de Node) |
| `npm run test:e2e` | Tests end-to-end Playwright |

## Deploiement

Le site est deploye sur Render a partir de l'export statique genere par `npm run build`.

## Documentation

- `docs/` : notes de redesign, notes de release et credits photo.
