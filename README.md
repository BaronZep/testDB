# Projet Test Cloudflare D1 : Carnet d'Adresses

Ce projet minimaliste démontre comment connecter une interface statique (HTML/JS) à une base de données Cloudflare D1 via une API Serverless.

## Arborescence
- `schema.sql` : Le code SQL pour initialiser ta base.
- `public/index.html` : L'interface utilisateur.
- `functions/api/contacts.js` : Le serveur backend (API) qui fait le lien entre le site et la base de données.

## Comment déployer (Méthode Interface Web)

1. **Créer la Base de données** :
   - Va dans Cloudflare > Workers & Pages > D1 SQL Database.
   - Crée une base nommée `contact-db`.
   - Va dans l'onglet **Console**, colle le contenu de `schema.sql` et clique sur Exécuter.

2. **Créer le projet GitHub** :
   - Pousse ce dossier complet sur un repo privé.

3. **Déployer sur Cloudflare Pages** :
   - Connecte Cloudflare à ton repo.
   - Choisis `public` comme "Build output directory".
   - Déploie. *(Le tableau de bord affichera une erreur rouge au premier lancement car la base n'est pas encore connectée)*.

4. **Lier la base de données** :
   - Va dans les paramètres de ton projet Cloudflare Pages.
   - Cherche l'onglet **Bindings** (ou **Variables et Secrets** > **Liaisons D1**).
   - Ajoute une liaison D1 : Variable = `DB`, et sélectionne `contact-db`.
   - Sauvegarde.

5. **Finaliser** :
   - Retourne dans l'onglet **Deployments** et clique sur **Retry deployment** sur le dernier commit.
   - Ouvre le lien de ton site. Ton carnet de contacts interactif est en ligne !
