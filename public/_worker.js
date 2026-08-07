// Redirection 301 de www.opti-cds.fr vers l'apex opti-cds.fr.
//
// Pourquoi ici et pas dans une Redirect Rule Cloudflare : `www` est déclaré
// comme domaine personnalisé du projet Pages, donc la route Pages traite la
// requête avant qu'une règle de zone ne s'applique. Ce worker s'exécute
// justement au niveau de Pages, ce qui règle le problème sans toucher à la
// configuration de la zone ni exiger de token élargi.
//
// Placé dans `public/`, il est copié à la racine de `out/` par le build Next,
// ce qui bascule Pages en mode avancé : toutes les requêtes passent ici, et
// les fichiers statiques sont servis par le binding ASSETS.
//
// Pour annuler : supprimer ce fichier et redéployer.

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // On ne redirige que le www du domaine de production. Les URL de
    // prévisualisation *.pages.dev doivent continuer à servir le site.
    if (url.hostname === "www.opti-cds.fr") {
      url.hostname = "opti-cds.fr";
      // Chemin et query string sont conservés puisque seul l'hôte change.
      return Response.redirect(url.toString(), 301);
    }

    return env.ASSETS.fetch(request);
  },
};
