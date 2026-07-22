const calendlyUrl = "https://calendly.com/overside/30min";
const restaurantLoginUrl = "https://guestloop.overside360.fr/";

const proofItems = [
  {
    value: "50+",
    label: "restaurants déjà inscrits en France",
    detail: "Une base réelle pour lancer une fidélisation locale crédible.",
  },
  {
    value: "Des milliers",
    label: "de clients finaux fidélisés",
    detail: "Des cartes clients actives, consultables depuis le téléphone.",
  },
  {
    value: "Des dizaines de milliers d'euros",
    label: "économisés grâce au club Guest Loop",
    detail: "Des avantages mutualisés pour donner plus de valeur au programme.",
  },
];

const pains = [
  "Les cartes papier se perdent, s'oublient ou finissent au fond d'un sac.",
  "Les clients satisfaits repartent sans laisser de contact exploitable.",
  "Les relances sont rares, manuelles, et difficiles à mesurer.",
];

const benefits = [
  {
    icon: "QR",
    title: "Inscription en quelques secondes",
    text: "Un QR code sur table, comptoir, ticket ou vitrine. Le client rejoint votre programme sans télécharger d'application.",
  },
  {
    icon: "CRM",
    title: "Une base clients qui se construit seule",
    text: "Chaque inscription et chaque visite alimentent un espace commerce lisible : clients, passages, récompenses, activité.",
  },
  {
    icon: "GO",
    title: "Des avis et retours mieux déclenchés",
    text: "Guest Loop s'intègre au moment où le client est engagé : après une visite, une récompense ou une expérience réussie.",
  },
  {
    icon: "MSG",
    title: "Des campagnes pour faire revenir",
    text: "Annoncez une animation, remerciez vos habitués, ou relancez ceux qui n'ont pas poussé la porte depuis quelque temps.",
  },
];

const steps = [
  {
    title: "On cadre votre programme",
    text: "Récompense, seuil de visites, ticket minimum, règles anti-fraude et parcours client.",
  },
  {
    title: "Vous installez vos QR codes",
    text: "Sur les supports qui comptent vraiment : tables, comptoir, addition, menu, vitrine.",
  },
  {
    title: "L'équipe valide les passages",
    text: "Un scan ou un lien client suffit pour enregistrer une visite et déclencher la progression.",
  },
  {
    title: "Vous pilotez la rétention",
    text: "Vous voyez ce qui se passe et vous réactivez votre clientèle avec des messages simples.",
  },
];

const differentiators = [
  "Pas une carte tampon déguisée : un vrai espace commerce avec suivi client.",
  "Pas une usine marketing : une interface courte, pensée pour un service en salle.",
  "Pas un programme générique : vos règles de fidélité restent adaptées à votre marge.",
];

const faqs = [
  {
    question: "Est-ce que Guest Loop est réservé aux restaurants ?",
    answer:
      "La landing vise d'abord les restaurants, parce que le rythme des visites et des récompenses y est très naturel. Le même principe peut ensuite être adapté aux boulangeries, coffee shops, commerces de bouche et boutiques de proximité.",
  },
  {
    question: "Mes clients doivent-ils installer une application ?",
    answer:
      "Non. Le client accède à sa carte depuis une page mobile par QR code. Il peut suivre sa progression, retrouver sa carte et voir les messages du commerce sans application native.",
  },
  {
    question: "Est-ce que je peux choisir mes propres récompenses ?",
    answer:
      "Oui. Vous définissez le nombre de visites nécessaires, la récompense, le ticket minimum éventuel et les règles de validation adaptées à votre commerce.",
  },
  {
    question: "Pourquoi passer par un rendez-vous avant de s'inscrire ?",
    answer:
      "Parce qu'un bon programme de fidélité dépend de votre panier moyen, de votre fréquence de visite, de vos marges et de votre équipe. Le rendez-vous sert à cadrer une configuration qui peut vraiment fonctionner.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header" aria-label="Navigation principale">
        <a className="brand" href="#top" aria-label="Guest Loop">
          <span className="brand-mark">G</span>
          <span>Guest Loop</span>
        </a>
        <nav>
          <a href="#preuve">Preuves</a>
          <a href="#produit">Produit</a>
          <a href="#demo">Démo</a>
        </nav>
        <div className="header-actions" aria-label="Actions principales">
          <a className="account-link" href={restaurantLoginUrl}>
            <span className="label-full">Espace restaurateur</span>
            <span className="label-short">Connexion</span>
          </a>
          <a className="header-cta" href={calendlyUrl}>
            Réserver une démo
          </a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Fidélisation digitale pour restaurants</p>
          <h1>Le club fidélité qui donne une vraie raison de revenir.</h1>
          <p className="hero-lead">
            Guest Loop transforme votre QR code en programme de fidélité,
            suivi client et canal de relance. Sans application à installer,
            sans carte papier, sans complexité pour votre équipe.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href={calendlyUrl}>
              Planifier un rendez-vous de cadrage
            </a>
            <a className="secondary-button" href="#produit">
              Voir l&apos;expérience
            </a>
          </div>
          <div className="hero-trust" aria-label="Points clés">
            <span>QR code</span>
            <span>Récompenses</span>
            <span>CRM simple</span>
            <span>Campagnes</span>
          </div>
        </div>

        <div className="hero-showcase" aria-label="Aperçu de Guest Loop">
          <div className="showcase-card dashboard-preview">
            <div className="window-bar">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <img
              src="/references/dashboard.png"
              alt="Tableau de bord Guest Loop avec suivi des clients, visites et récompenses"
            />
          </div>
          <div className="phone-preview">
            <img
              src="/references/mobile-reward.png"
              alt="Carte de fidélité mobile Guest Loop avec progression et récompense disponible"
            />
          </div>
          <div className="floating-note">
            <span className="note-icon">+</span>
            <div>
              <strong>Une visite validée</strong>
              <span>Une donnée client exploitable</span>
            </div>
          </div>
        </div>
      </section>

      <section className="proof-band" id="preuve" aria-label="Preuves Guest Loop">
        {proofItems.map((item) => (
          <article key={item.label}>
            <strong>{item.value}</strong>
            <h2>{item.label}</h2>
            <p>{item.detail}</p>
          </article>
        ))}
      </section>

      <section className="section problem-section">
        <div className="section-intro">
          <p className="eyebrow">Le problème</p>
          <h2>Vos clients aiment votre restaurant. Le sujet, c&apos;est de les revoir.</h2>
        </div>
        <div className="pain-grid">
          {pains.map((pain) => (
            <article className="pain-card" key={pain}>
              <span className="status-dot"></span>
              <p>{pain}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section benefits">
        <div className="section-intro">
          <p className="eyebrow">La promesse</p>
          <h2>Une mécanique simple pour capter, fidéliser et relancer.</h2>
        </div>
        <div className="benefit-grid">
          {benefits.map((benefit) => (
            <article className="benefit-card" key={benefit.title}>
              <span className="feature-icon">{benefit.icon}</span>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section product-section" id="produit">
        <div className="section-intro compact">
          <p className="eyebrow">Aperçu produit</p>
          <h2>Un espace commerce pensé pour être utilisé pendant le service.</h2>
          <p>
            L&apos;interface reprend les codes d&apos;un SaaS opérationnel : rapide à lire,
            peu chargée, centrée sur les actions qui comptent.
          </p>
        </div>

        <div className="product-grid">
          <article className="screenshot-card wide">
            <img
              src="/references/dashboard.png"
              alt="Vue d'ensemble Guest Loop avec clients, visites, avis Google et activité récente"
            />
            <div>
              <span className="card-kicker">Pilotage</span>
              <h3>Suivez les visites et les récompenses en temps réel.</h3>
              <p>
                Un restaurateur voit rapidement ce qui bouge : nouveaux clients,
                passages validés, récompenses obtenues ou utilisées.
              </p>
            </div>
          </article>
          <article className="screenshot-card">
            <img
              src="/references/rewards-settings.png"
              alt="Paramétrage Guest Loop des visites nécessaires et de la récompense"
            />
            <div>
              <span className="card-kicker">Réglages</span>
              <h3>Votre offre reste maîtrisée.</h3>
              <p>
                Définissez les règles de fidélité selon votre marge, votre panier
                moyen et votre fréquence de visite.
              </p>
            </div>
          </article>
          <article className="screenshot-card dark-card">
            <div>
              <span className="card-kicker">Différenciation</span>
              <h3>Le club Guest Loop ajoute de la valeur au programme.</h3>
              <p>
                Au-delà de la récompense du restaurant, le club permet de créer un
                effet d&apos;écosystème et de mutualiser des avantages.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="section split" id="fonctionnement">
        <div className="sticky-copy">
          <p className="eyebrow">Mise en place</p>
          <h2>Un lancement guidé, pas un logiciel lâché dans la nature.</h2>
          <p>
            Le rendez-vous sert à cadrer le programme avant l&apos;inscription :
            récompense, supports QR, routine d&apos;équipe et messages à envoyer.
          </p>
        </div>
        <ol className="step-list">
          {steps.map((step, index) => (
            <li key={step.title}>
              <span>{index + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="section differentiation">
        <div className="section-intro">
          <p className="eyebrow">Pourquoi c&apos;est différent</p>
          <h2>Guest Loop garde la simplicité d&apos;une carte de fidélité, avec la valeur d&apos;un CRM.</h2>
        </div>
        <div className="diff-grid">
          {differentiators.map((item) => (
            <article key={item}>
              <span></span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split conversion" id="demo">
        <div>
          <p className="eyebrow">Démo et cadrage</p>
          <h2>Voyons quelle offre peut faire revenir vos clients.</h2>
          <p>
            En 30 minutes, on regarde votre activité, votre fréquence de visite,
            vos marges et la meilleure manière de présenter Guest Loop à vos
            clients.
          </p>
          <div className="conversion-list">
            <span>Audit rapide de votre fidélisation actuelle</span>
            <span>Proposition de mécanique de récompense</span>
            <span>Démonstration de l&apos;espace commerce</span>
          </div>
        </div>
        <form className="lead-form" action={calendlyUrl}>
          <div className="form-heading">
            <span className="brand-mark small">G</span>
            <div>
              <strong>Rendez-vous Guest Loop</strong>
              <span>Créneau de 30 minutes avec Overside</span>
            </div>
          </div>
          <label>
            Votre nom
            <input name="name" placeholder="Ex. Camille Martin" />
          </label>
          <label>
            Restaurant
            <input name="business" placeholder="Ex. Restaurant Le Comptoir" />
          </label>
          <label>
            Email ou téléphone
            <input name="contact" placeholder="Pour préparer le rendez-vous" />
          </label>
          <button type="submit">Choisir un créneau Calendly</button>
          <p>Le bouton ouvre le calendrier Overside pour réserver la démo.</p>
        </form>
      </section>

      <section className="section faq" id="faq">
        <div className="section-intro">
          <p className="eyebrow">Questions fréquentes</p>
          <h2>Ce que les restaurateurs demandent avant de se lancer.</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <p className="eyebrow">Guest Loop</p>
        <h2>Arrêtez de laisser vos meilleurs clients repartir sans lien.</h2>
        <p>
          Construisons un programme de fidélité que vos clients comprennent en
          dix secondes et que votre équipe peut utiliser tous les jours.
        </p>
        <a className="primary-button" href={calendlyUrl}>
          Réserver une démo de 30 minutes
        </a>
      </section>

      <footer>
        <span>Guest Loop</span>
        <a href={calendlyUrl}>Prendre rendez-vous</a>
      </footer>
    </main>
  );
}
