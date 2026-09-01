import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

// Politique vis-à-vis des robots d'IA.
//
// Les acteurs font tourner des robots distincts, et les confondre coûte cher :
//
//   entraînement des modèles   GPTBot, ClaudeBot, Google-Extended, CCBot,
//                              Applebot-Extended, Bytespider, Amazonbot,
//                              meta-externalagent
//   recherche et citation      OAI-SearchBot, ChatGPT-User, PerplexityBot,
//                              Claude-SearchBot, Claude-User
//
// Bloquer un robot d'entraînement n'a AUCUN effet sur les citations. Bloquer
// un robot de recherche retire le site des réponses.
//
// Choix retenu : entraînement refusé, citation autorisée.
//
// Deux raisons. D'abord la mesure : ChatGPT est la meilleure source de trafic
// du site en qualité, très loin devant le direct et la recherche classique,
// donc les robots de citation doivent passer. Ensuite le modèle commercial :
// la valeur du cabinet tient à une méthode qu'il ne publie pas. Laisser des
// modèles s'entraîner sur ce contenu reviendrait à leur transmettre
// gratuitement ce que le site refuse déjà d'expliquer à ses lecteurs.
//
// Cloudflare injecte par ailleurs son propre bloc dans le robots.txt servi, et
// y refuse les robots d'entraînement. Déclarer ici un Allow pour GPTBot et
// ClaudeBot, comme le faisait la version précédente, produisait deux groupes
// contradictoires pour le même agent dans un même fichier. C'était signalé par
// l'audit et cela ne rapportait rien, puisque ces robots n'apportent pas de
// visiteurs. Ces deux lignes ont donc été retirées plutôt que maintenues.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },

      // Moteurs de recherche classiques.
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },

      // Robots de recherche et de citation : ils renvoient des visiteurs et
      // affichent un lien source. Ils sont explicitement admis.
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Claude-SearchBot", allow: "/" },
      { userAgent: "Claude-User", allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
