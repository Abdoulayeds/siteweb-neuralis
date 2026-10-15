# CI/CD du site NEURALIS — guide simple

Ce guide explique, sans jargon inutile, comment le site est vérifié automatiquement
avant d'être mis en ligne, et comment reproduire la même chose sur vos futurs projets.

## 1. CI et CD en une image

Imaginez une boulangerie.

- **CI (intégration continue)** : chaque nouvelle fournée passe par un contrôle qualité
  avant d'aller en vitrine. On vérifie la cuisson, le poids, le goût. Si un pain est raté,
  il ne sort pas.
  Pour le site : à chaque modification du code, GitHub lance automatiquement des
  vérifications (style du code, tests, construction du site, tests dans un navigateur).
- **CD (déploiement continu)** : dès qu'une fournée est validée, elle est posée en vitrine
  sans que vous ayez à la porter vous-même.
  Pour le site : quand le code validé arrive sur la branche `main`, Render le publie
  automatiquement sur `neuralis-mali.com`.

Le but : **ne jamais mettre en ligne un site cassé**, et ne plus dépendre d'une
vérification manuelle qu'on oublie un jour de rush.

## 2. Ce que fait notre workflow

Le fichier `.github/workflows/ci.yml` décrit les vérifications. Il se lance :

- à chaque **Pull Request** (demande de fusion d'une branche) ;
- à chaque **push sur `main`** ;
- à la main, depuis l'onglet **Actions** de GitHub (bouton « Run workflow »).

Si vous poussez deux fois de suite sur la même branche, l'ancienne vérification est
annulée pour ne garder que la plus récente (gain de temps).

### Étape « quality » (environ 2 à 4 minutes)

| Ordre | Étape | Ce qu'elle vérifie |
|-------|-------|--------------------|
| 1 | Récupérer le code | GitHub télécharge la version à vérifier. |
| 2 | Installer Node.js | La version indiquée dans `.nvmrc` (Node 24). |
| 3 | `npm ci` | Installe exactement les dépendances de `package-lock.json`. |
| 4 | `npm run lint` | ESLint : erreurs de code et mauvaises pratiques. |
| 5 | `npm test` | Tests unitaires (`tests/*.test.mjs`). |
| 6 | `npm run build` | Construit le site statique dans `out/`, comme Render le fera. |
| 7 | Conserver `out/` | Le site construit est gardé 3 jours pour l'étape suivante. |

### Étape « e2e » (environ 3 à 6 minutes)

Elle ne démarre que si « quality » a réussi.

1. Récupère le site construit (`out/`) à l'étape précédente.
2. Installe le navigateur Chromium.
3. Lance `npm run test:e2e` : Playwright sert le site avec `tests/serve-export.mjs`
   et le parcourt comme un vrai visiteur, sur ordinateur et sur mobile.
4. En cas d'échec, un **rapport Playwright** (captures, traces) est joint à l'exécution.

Aucun secret n'est nécessaire : sans clé Web3Forms, la page Contact affiche simplement
les liens e-mail et WhatsApp, et les tests le savent.

## 3. Lire le résultat sur GitHub

Sur une Pull Request, en bas de la page, la zone **Checks** affiche :

- **Point jaune** : vérification en cours, patientez.
- **Coche verte** : tout est passé. Vous pouvez fusionner.
- **Croix rouge** : au moins une étape a échoué. Ne fusionnez pas.

Vous voyez aussi ces symboles à côté de chaque commit et dans l'onglet **Actions**.

## 4. Que faire quand c'est rouge ?

1. Cliquez sur **Details** à côté de la vérification rouge.
2. Repérez l'étape marquée d'une croix et ouvrez-la : le message d'erreur est en bas.
3. Identifiez la famille de problème :
   - **Lint** : une règle de code non respectée ; le fichier et la ligne sont indiqués.
   - **Tests unitaires** : le nom du test qui échoue explique ce qui est attendu.
   - **Build** : souvent une erreur TypeScript ou un import cassé.
   - **e2e** : téléchargez l'artefact `playwright-report` (en bas de la page du run),
     décompressez-le, puis ouvrez `playwright-report/index.html`.
4. Reproduisez en local avec la même commande (`npm run lint`, `npm test`,
   `npm run build`, `npm run test:e2e`), corrigez, puis poussez à nouveau :
   la vérification repart toute seule.
5. Si l'échec semble aléatoire (réseau, lenteur), relancez avec **Re-run failed jobs**.
   Si cela se reproduit, c'est un vrai problème à corriger.

Règle d'or : **on ne contourne pas une croix rouge**, on la comprend.

## 5. Le CD avec Render

Aujourd'hui, Render redéploie le site à chaque push sur `main`
(voir `render.yaml` : `npm ci && npm run build`, publication de `out/`).
Problème : il le fait même si la CI est rouge. Deux réglages ferment cette porte.

### 5.1 Render : déployer seulement si la CI est verte

1. Ouvrez [dashboard.render.com](https://dashboard.render.com) puis le service `neuralis-site`.
2. Allez dans **Settings**, section **Build & Deploy**.
3. À la ligne **Auto-Deploy**, cliquez sur **Edit**.
4. Choisissez **After CI Checks Pass** (au lieu de **On Commit**), puis **Save Changes**.

Render attendra alors que les vérifications GitHub de `main` soient vertes avant de
publier. Si l'option n'apparaît pas sur votre compte, gardez « On Commit » et appuyez-vous
sur la protection de branche ci-dessous.

### 5.2 GitHub : protéger la branche `main`

Objectif : interdire la fusion dans `main` tant que la CI n'est pas verte.

1. Sur GitHub, ouvrez le dépôt `Abdoulayeds/siteweb-neuralis`.
2. **Settings** → menu de gauche **Rules** → **Rulesets**.
3. **New ruleset** → **New branch ruleset**.
4. **Ruleset name** : `Protection main`. **Enforcement status** : **Active**.
5. **Target branches** → **Add target** → **Include default branch**.
6. Cochez :
   - **Restrict deletions** ;
   - **Block force pushes** ;
   - **Require a pull request before merging** ;
   - **Require status checks to pass** → **Add checks** → tapez `quality`
     puis sélectionnez-le (ajoutez aussi `e2e` si vous voulez l'exiger).
     Cochez **Require branches to be up to date before merging**.
7. Cliquez sur **Create**.

Astuce : le nom `quality` n'apparaît dans la liste qu'après une première exécution du
workflow. Ouvrez d'abord une Pull Request, laissez-la tourner, puis créez la règle.

Ancienne interface : **Settings** → **Branches** → **Add branch protection rule**,
motif `main`, cochez **Require status checks to pass before merging** et choisissez
`quality`.

### 5.3 Le circuit complet

```
branche de travail → Pull Request → CI (quality + e2e) verte
      → fusion dans main → CI verte sur main → Render publie le site
```

## 6. Modèle pour vos futurs projets

### Checklist de mise en place

- [ ] Les commandes existent et passent en local : installation, lint, tests, build.
- [ ] La version du langage est fixée dans un fichier (`.nvmrc`, `composer.json`…).
- [ ] Les dépendances sont verrouillées (`package-lock.json`, `composer.lock`) et commitées.
- [ ] Le fichier `.github/workflows/ci.yml` est créé (modèles ci-dessous).
- [ ] Aucun secret dans le code ; s'il en faut un : **Settings → Secrets and variables → Actions**.
- [ ] Une première Pull Request fait tourner la CI jusqu'au vert.
- [ ] Ruleset sur `main` exigeant les checks (section 5.2).
- [ ] Hébergeur réglé pour ne déployer qu'après CI verte (section 5.1).
- [ ] Un court `docs/ci-cd.md` dans le projet explique tout cela.

### Squelette générique

```yaml
name: CI
on:
  pull_request:
  push:
    branches: [main]
concurrency:
  group: ci-${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true
permissions:
  contents: read
jobs:
  quality:
    runs-on: ubuntu-latest
    timeout-minutes: 15
    steps:
      - uses: actions/checkout@v4
      # 1. installer le langage   2. installer les dépendances
      # 3. lint                   4. tests        5. build
```

### Variante Node / Next.js

```yaml
      - uses: actions/setup-node@v4
        with:
          node-version-file: .nvmrc
          cache: npm
      - run: npm ci
      - run: npm run lint
      - run: npm test
      - run: npm run build
```

### Variante PHP / Moodle (ex. `neuralis-campus`, avec PHPUnit)

```yaml
    services:
      db:
        image: postgres:16
        env:
          POSTGRES_USER: moodle
          POSTGRES_PASSWORD: moodle
          POSTGRES_DB: moodle
        ports: ["5432:5432"]
        options: --health-cmd pg_isready --health-interval 10s --health-retries 5
    steps:
      - uses: actions/checkout@v4
      - uses: shivammathur/setup-php@v2
        with:
          php-version: "8.3"
          extensions: pgsql, intl, zip, gd, soap, xml, mbstring
          coverage: none
      - run: composer install --no-interaction --prefer-dist
      - run: vendor/bin/phpcs            # si phpcs.xml.dist est utilisé
      - run: vendor/bin/phpunit          # Moodle : initialiser d'abord avec
                                         # php admin/tool/phpunit/cli/init.php
```

Pour Moodle, la base de test et `config.php` doivent être préparés avant PHPUnit
(variables `phpunit_prefix` et `phpunit_dataroot`) ; adaptez à partir du `README` du projet.
Le mot de passe de la base de test ci-dessus est jetable et n'existe que dans la CI.

## 7. En résumé

- **CI** = un contrôle qualité automatique à chaque modification.
- **CD** = une mise en ligne automatique, seulement après un contrôle réussi.
- **Vert** on fusionne, **rouge** on lit l'erreur, on corrige, on repousse.
