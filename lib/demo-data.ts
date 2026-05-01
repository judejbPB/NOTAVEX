export interface Email {
  id: string;
  from: string;
  fromEmail: string;
  subject: string;
  preview: string;
  body: string;
  time: string;
  tag: string;
  tagColor: string;
  unread: boolean;
  priority: "high" | "normal" | "low";
  aiResponse: string;
}

export const EMAILS: Email[] = [
  {
    id: "1",
    from: "Marie-Claire Tremblay",
    fromEmail: "mc.tremblay@gmail.com",
    subject: "Documents pour achat maison Laval?",
    preview: "Bonjour, j'achète une maison à Laval et je voudrais savoir quels documents…",
    body: `Bonjour Maître,

J'achète une maison unifamiliale au 245, boulevard des Laurentides à Laval pour 585 000 $. La Banque Nationale a approuvé mon prêt et la prise de possession est prévue pour le 15 juin 2025.

C'est mon premier achat immobilier. Pourriez-vous m'indiquer quels documents je dois vous fournir avant la signature de l'acte notarié?

Merci beaucoup,
Marie-Claire Tremblay
438-555-0182`,
    time: "Il y a 8 min",
    tag: "Immobilier",
    tagColor: "blue",
    unread: true,
    priority: "high",
    aiResponse: `Bonjour Madame Tremblay,

Merci pour votre courriel et félicitations pour votre premier achat immobilier!

Pour la préparation de votre acte, veuillez nous faire parvenir les documents suivants au moins 5 jours ouvrables avant la signature :

**Documents personnels**
• Pièce d'identité gouvernementale valide (permis ou passeport)
• Numéro d'assurance sociale (NAS)
• Preuve d'adresse actuelle

**Documents financiers**
• Lettre d'engagement hypothécaire finale — Banque Nationale
• Preuve de mise de fonds (relevé bancaire, 90 derniers jours)
• Preuve d'assurance habitation en vigueur au 15 juin 2025

**Documents relatifs à la propriété**
• Contrat de vente / promesse d'achat signée
• Certificat de localisation (fourni par le vendeur)

Nous vous contacterons sous peu pour confirmer la date de signature. N'hésitez pas à nous rejoindre au 514 555-0100.

Cordialement,
Bureau Notarial Tremblay
Me Jean-François Tremblay, notaire`,
  },
  {
    id: "2",
    from: "Robert Lavoie",
    fromEmail: "r.lavoie@hotmail.com",
    subject: "Rendez-vous testament — urgent",
    preview: "Bonjour, je souhaite prendre rendez-vous pour la rédaction de mon testament…",
    body: `Bonjour Maître Tremblay,

Je suis un ancien client (succession Lavoie, 2019). J'ai 67 ans et ma situation familiale a changé — j'ai maintenant trois petits-enfants. Je veux mettre à jour mon testament.

Je suis disponible en après-midi du lundi au jeudi.

Merci,
Robert Lavoie
514-555-0247`,
    time: "Il y a 42 min",
    tag: "Testament",
    tagColor: "purple",
    unread: true,
    priority: "high",
    aiResponse: `Bonjour Monsieur Lavoie,

Nous sommes heureux de vous accueillir à nouveau au Bureau Notarial Tremblay.

Voici nos disponibilités pour votre mise à jour testamentaire :

• **Mardi 6 mai**, 14h00
• **Mercredi 7 mai**, 15h30
• **Jeudi 8 mai**, 13h30

La consultation dure environ 60 à 90 minutes. Les honoraires débutent à 350 $.

**Documents à apporter**
• Pièce d'identité valide
• Copie de votre testament actuel
• Noms, dates de naissance et adresses de vos bénéficiaires (dont vos petits-enfants)
• Nom de votre liquidateur testamentaire

Confirmez votre préférence par retour de courriel ou au 514 555-0100.

Cordialement,
Bureau Notarial Tremblay`,
  },
  {
    id: "3",
    from: "Agence Immobilière Dufresne",
    fromEmail: "dossiers@agencedufresne.com",
    subject: "Statut dossier vente — 85 rue des Érables",
    preview: "Bonjour, nos clients s'inquiètent du délai pour la vente du 85 rue des Érables…",
    body: `Bonjour Bureau Notarial Tremblay,

Nous représentons les vendeurs du 85, rue des Érables à Longueuil (dossier #2025-0412). La transaction devait être complétée le 30 avril et nos clients sont anxieux.

Y a-t-il des documents manquants ou des problèmes de titre?

Cordialement,
Sophie Arsenault — Agence Dufresne`,
    time: "Il y a 1h",
    tag: "Immobilier",
    tagColor: "blue",
    unread: true,
    priority: "high",
    aiResponse: `Bonjour Madame Arsenault,

Voici le statut actuel du dossier #2025-0412 :

✅ Acte de vente préparé et validé
✅ Recherche de titres complétée — aucun problème
⚠️ En attente : radiation de l'hypothèque — Banque Scotia

Nous avons contacté la Banque Scotia ce matin. La quittance sera disponible sous 2 à 3 jours ouvrables.

**Date de signature proposée :** 8 ou 9 mai 2025

Nous vous contacterons dès confirmation.

Cordialement,
Bureau Notarial Tremblay`,
  },
  {
    id: "4",
    from: "Lucie Bergeron-Côté",
    fromEmail: "lucie.bergeron@videotron.ca",
    subject: "Mandat de protection pour ma mère",
    preview: "Bonjour, ma mère de 78 ans souhaite rédiger un mandat de protection…",
    body: `Bonjour,

Ma mère, Monique Côté, 78 ans, veut rédiger un mandat de protection. Elle souhaite me nommer pour ses biens et ma sœur pour sa personne. Est-ce possible d'avoir deux mandataires distincts?

Quels sont vos honoraires?

Lucie Bergeron-Côté
450-555-0391`,
    time: "Il y a 2h",
    tag: "Mandat",
    tagColor: "teal",
    unread: true,
    priority: "normal",
    aiResponse: `Bonjour Madame Bergeron-Côté,

Oui, il est tout à fait possible — et même recommandé — de nommer deux mandataires distincts : un pour les **biens** et un pour la **personne**.

**Documents requis**
• Pièce d'identité de Madame Côté
• Noms, adresses et dates de naissance des deux mandataires
• Nom d'un mandataire substitut

**Honoraires :** à partir de 395 $ (taxes incluses)

Le mandat entre en vigueur uniquement si votre mère est déclarée inapte par un tribunal. Nous vous expliquerons ce processus lors de la consultation.

Je vous suggère de prendre rendez-vous rapidement, car la signature requiert la présence de votre mère.

Cordialement,
Bureau Notarial Tremblay`,
  },
  {
    id: "5",
    from: "Émilie Fortin-Lessard",
    fromEmail: "emilie.fortin@gmail.com",
    subject: "Décès de mon père — ouvrir succession",
    preview: "Bonjour, mon père Jean-Paul Fortin est décédé le 22 avril. Je dois gérer sa succession…",
    body: `Bonjour,

Mon père, Jean-Paul Fortin, est décédé le 22 avril 2025 à l'Hôpital du Sacré-Cœur. Il avait 81 ans et avait rédigé son testament notarié chez vous en 2021. Je suis sa fille unique et liquidatrice.

Par où commencer?

Émilie Fortin-Lessard
514-555-0628`,
    time: "Il y a 3h",
    tag: "Succession",
    tagColor: "amber",
    unread: false,
    priority: "high",
    aiResponse: `Bonjour Madame Fortin-Lessard,

Nous vous offrons nos sincères condoléances pour le décès de votre père.

Nous confirmons que le testament de Monsieur Jean-Paul Fortin est conservé dans nos archives — vous n'avez pas à vous en préoccuper.

**Premières démarches (dans les 30 jours)**
1. Obtenir 5 à 10 certificats de décès (etatcivil.gouv.qc.ca)
2. Aviser les institutions financières
3. Vérifier les polices d'assurance-vie

**Documents à apporter lors de votre rendez-vous**
• Certificat de décès
• Votre pièce d'identité
• Liste des actifs connus (immeubles, comptes, placements)

Vous avez le temps — il n'existe pas de délai strict pour terminer une liquidation successorale.

Nous sommes là pour vous guider à chaque étape.

Cordialement,
Bureau Notarial Tremblay`,
  },
  {
    id: "6",
    from: "Hassan Benali",
    fromEmail: "h.benali@businessqc.com",
    subject: "Convention entre actionnaires — nouvelle société",
    preview: "Bonjour Maître, mon associé et moi venons d'incorporer une société 50/50…",
    body: `Bonjour Maître Tremblay,

Mon associé et moi avons incorporé Benali & Pelletier Conseils Inc. (fédéral, 50/50). Nous voulons une convention d'actionnaires avec clauses de premier refus, rachat en cas de décès et restrictions de transfert.

Quels sont vos délais et honoraires?

Hassan Benali`,
    time: "Il y a 4h",
    tag: "Contrat",
    tagColor: "orange",
    unread: false,
    priority: "normal",
    aiResponse: `Bonjour Monsieur Benali,

Nous pouvons certainement vous accompagner dans la rédaction de votre convention d'actionnaires.

**Clauses standard incluses**
• Droit de premier refus
• Clause shotgun
• Rachat en cas de décès ou d'invalidité
• Restrictions de transfert d'actions
• Non-concurrence et confidentialité

**Délais :** 10 à 15 jours ouvrables
**Honoraires :** 1 800 $ à 3 500 $ selon la complexité

Pour démarrer, nous aurons besoin de :
• Certificat de constitution de la société
• Registre des actionnaires
• Vos objectifs pour chaque clause

Je vous propose une consultation préliminaire gratuite (30 min). Êtes-vous disponible la semaine prochaine?

Cordialement,
Bureau Notarial Tremblay`,
  },
  {
    id: "7",
    from: "Thomas Desrochers",
    fromEmail: "t.desrochers@desjardins.com",
    subject: "Demande de mainlevée hypothécaire",
    preview: "Suite au remboursement complet de Mme Côté-Simard, nous demandons la radiation…",
    body: `Bonjour,

Suite au remboursement intégral de Mme Nathalie Côté-Simard sur le 12, chemin des Pins à Brossard, veuillez procéder à la radiation de l'hypothèque (inscription 22 184 672).

Prêt DES-2019-00847391.

Thomas Desrochers — Caisse Desjardins de Brossard`,
    time: "Hier, 16h30",
    tag: "Immobilier",
    tagColor: "blue",
    unread: false,
    priority: "normal",
    aiResponse: `Bonjour Monsieur Desrochers,

Nous accusons réception de votre demande de radiation pour l'inscription n° 22 184 672.

**Documents requis de Desjardins**
• Quittance hypothécaire signée
• Déclaration solennelle de remboursement intégral
• Autorisation de Mme Côté-Simard

**Délai :** 3 à 5 jours ouvrables après réception
**Honoraires :** 375 $ + taxes

Veuillez transmettre les documents à : documents@bureautremblay.qc.ca

Cordialement,
Bureau Notarial Tremblay`,
  },
  {
    id: "8",
    from: "Andrée Paquin",
    fromEmail: "andree.paquin@outlook.com",
    subject: "Donation maison à ma fille — est-ce possible?",
    preview: "Bonjour Maître, j'aimerais donner ma maison de Laval à ma fille de mon vivant…",
    body: `Bonjour Maître,

J'ai 72 ans et veux donner ma maison de Laval (480 000 $) à ma fille Caroline, de mon vivant, pour éviter des complications à ma succession. Y a-t-il des implications fiscales? Des problèmes si je dois aller en CHSLD?

Andrée Paquin`,
    time: "Hier, 10h15",
    tag: "Contrat",
    tagColor: "orange",
    unread: false,
    priority: "normal",
    aiResponse: `Bonjour Madame Paquin,

La donation entre vifs d'un immeuble est possible au Québec. Voici les points essentiels à considérer avant de décider.

**Avantages**
✅ Simplification de votre succession
✅ Transfert immédiat du titre
✅ Possibilité de conserver un droit d'usufruit (habiter la maison)

**Points de vigilance**
⚠️ **Fiscal :** Le transfert est réputé à la juste valeur marchande — peut entraîner un gain en capital imposable si ce n'est pas votre résidence principale.
⚠️ **CHSLD :** Si vous devenez admissible à des services subventionnés dans les 3 à 5 ans, la donation pourrait être contestée.
⚠️ **Irrévocabilité :** Une donation notariée est généralement définitive.

**Notre recommandation :** Une consultation approfondie s'impose. Nous pouvons explorer des alternatives (fiducie, vente à prix réduit, legs testamentaire).

Je vous propose un rendez-vous la semaine du 5 mai.

Cordialement,
Bureau Notarial Tremblay`,
  },
  {
    id: "9",
    from: "Claude Gervais",
    fromEmail: "c.gervais1952@gmail.com",
    subject: "Mise en demeure syndicat — mon balcon",
    preview: "Bonjour, j'ai reçu une mise en demeure du syndicat pour des travaux sur mon balcon…",
    body: `Bonjour Maître Tremblay,

Vous avez instrumenté mon achat au 550, avenue Papineau, unité 804, Montréal en juin 2024 (dossier GERV-2024-0615). J'ai reçu une mise en demeure du syndicat pour des travaux non autorisés sur mon balcon.

Puis-je avoir une copie de mon acte?

Claude Gervais
514-555-0774`,
    time: "Il y a 2 jours",
    tag: "Immobilier",
    tagColor: "blue",
    unread: false,
    priority: "normal",
    aiResponse: `Bonjour Monsieur Gervais,

Nous avons retrouvé votre dossier GERV-2024-0615 (acte du 18 juin 2024). Nous vous ferons parvenir une copie certifiée dans les 24 heures (frais : 75 $).

**Concernant la mise en demeure**
En copropriété divise, tout travail sur les parties communes — dont les balcons dans la plupart des déclarations — requiert l'approbation préalable du syndicat (art. 1097 C.c.Q.).

**Recommandations**
1. Ne pas ignorer la mise en demeure
2. Demander au syndicat la clause précise qui a été violée
3. Consulter un avocat en droit de la copropriété si la situation escalade

Nous pouvons vous référer à des collègues spécialisés en litige immobilier.

Cordialement,
Bureau Notarial Tremblay`,
  },
  {
    id: "10",
    from: "Josée Morin-Beauchamp",
    fromEmail: "josee.morin@ulaval.ca",
    subject: "Testament étudiant — premier testament",
    preview: "Bonjour, je suis étudiante et je pars vivre à l'étranger, je veux faire un testament…",
    body: `Bonjour,

Je suis étudiante de 24 ans à l'Université Laval et je pars en stage à Berlin pour 18 mois. Je veux faire un premier testament simple avant de partir. J'ai peu de biens — un REER étudiant (8 000 $) et une voiture. Je veux tout laisser à ma mère.

Quand pourriez-vous me recevoir? Je pars le 20 mai.

Josée Morin-Beauchamp`,
    time: "Il y a 2 jours",
    tag: "Testament",
    tagColor: "purple",
    unread: false,
    priority: "low",
    aiResponse: `Bonjour Madame Morin-Beauchamp,

Excellente initiative de planifier votre testament avant votre départ à Berlin!

Pour un testament simple, nous pouvons vous recevoir rapidement.

**Disponibilités avant le 20 mai**
• Lundi 12 mai, 10h00
• Mardi 13 mai, 14h30
• Vendredi 16 mai, 9h00

**Durée :** environ 45 minutes
**Honoraires :** 295 $ (testament notarié simple, taxes incluses)

**Documents à apporter**
• Pièce d'identité
• Nom complet, adresse et date de naissance de votre mère (bénéficiaire)
• Numéro du compte REER (pour désignation de bénéficiaire directe)

Notez que pour le REER, une désignation directe auprès de l'institution financière est souvent plus efficace fiscalement que le testament.

Confirmez votre préférence au 514 555-0100.

Cordialement,
Bureau Notarial Tremblay`,
  },
];

export const STATS = [
  {
    id: "emails",
    value: 24,
    label: "courriels traités",
    displayLabel: "aujourd'hui",
    suffix: "",
    icon: "mail",
    trend: "+12% vs hier",
  },
  {
    id: "time",
    value: 432,
    label: "7h 12min",
    displayLabel: "économisées",
    suffix: "min",
    icon: "clock",
    trend: "ce mois",
  },
  {
    id: "rate",
    value: 95,
    label: "automatique",
    displayLabel: "taux",
    suffix: "%",
    icon: "zap",
    trend: "+3% ce mois",
  },
] as const;
