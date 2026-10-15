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
| `npm run audit:prod` | Audit de securite des dependances livrees avec le site |

### Audit npm : exception connue

`npm audit` (sans option) signale `braces` (GHSA-vfj7-8cjw-p6xm, toutes versions `<=3.0.3`) via `eslint-config-next` -> `@next/eslint-plugin-next` -> `fast-glob`. Aucune version corrigee de `braces` n'existe et toutes les versions de `@next/eslint-plugin-next` (jusqu'a 16.5 canary) en dependent. Le risque est nul pour le site : c'est un outil de lint, absent de l'export statique, et le code vulnerable n'est appele que si `settings.next.rootDir` est defini dans `eslint.config.mjs` (ce n'est pas le cas). Ne pas lancer `npm audit fix --force` : il retrograde vers `eslint-config-next@14`, incompatible avec Next 16. Reverifier quand Next publie un plugin sans `fast-glob`.

Ces commandes sont relancees automatiquement par la CI GitHub Actions (`.github/workflows/ci.yml`) a chaque Pull Request et a chaque push sur `main`. Guide : [docs/ci-cd.md](docs/ci-cd.md).

## Deploiement

Le site est deploye sur Render a partir de l'export statique genere par `npm run build`.

Pour ne publier qu'apres une CI verte (Render "After CI Checks Pass" et protection de la branche `main`), voir [docs/ci-cd.md](docs/ci-cd.md).

## Documentation

- `docs/` : notes de redesign, notes de release et credits photo.
