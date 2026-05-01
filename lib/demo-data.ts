export interface Email {
  id: string;
  from: string;
  fromEmail: string;
  subject: string;
  preview: string;
  body: string;
  time: string;
  category: "immobilier" | "testament" | "succession" | "mandat" | "contrat" | "autre";
  priority: "haute" | "normale" | "basse";
  aiResponse: string;
  read: boolean;
}

export const EMAILS: Email[] = [
  {
    id: "1",
    from: "Marie-Claire Tremblay",
    fromEmail: "mc.tremblay@gmail.com",
    subject: "Achat maison à Laval — documents requis",
    preview: "Bonjour, j'achète une maison à Laval et j'aimerais savoir quels documents...",
    body: `Bonjour Maître,

J'espère que ce message vous trouve en bonne santé. Je suis sur le point de finaliser l'achat d'une maison unifamiliale située au 245, boulevard des Laurentides à Laval (Laval-des-Rapides), au prix de 585 000 $.

Mon institution financière (Banque Nationale) a déjà approuvé mon prêt hypothécaire. La prise de possession est prévue pour le 15 juin 2025.

Pourriez-vous m'indiquer quels documents je dois vous fournir avant la signature de l'acte notarié ? C'est mon premier achat immobilier et je veux m'assurer que tout soit en ordre.

Merci à l'avance pour votre aide,

Marie-Claire Tremblay
438-555-0182`,
    time: "Il y a 12 min",
    category: "immobilier",
    priority: "haute",
    read: false,
    aiResponse: `Objet : RE: Achat maison à Laval — documents requis

Bonjour Madame Tremblay,

Merci pour votre courriel et félicitations pour votre premier achat immobilier au 245, boulevard des Laurentides à Laval !

Afin de préparer votre acte d'achat, voici les documents que vous devez nous faire parvenir au moins 5 jours ouvrables avant la date de signature :

**Documents personnels :**
☐ Pièce d'identité gouvernementale valide (permis de conduire ou passeport)
☐ Numéro d'assurance sociale (NAS)
☐ Preuve d'adresse actuelle (facture de services publics récente)

**Documents financiers :**
☐ Lettre d'engagement hypothécaire finale de la Banque Nationale
☐ Preuve de mise de fonds (relevé bancaire des 90 derniers jours)
☐ Preuve d'assurance habitation en vigueur au 15 juin 2025

**Documents relatifs à la propriété :**
☐ Copie du contrat de vente / promesse d'achat signée
☐ Certificat de localisation (fourni par le vendeur ou son notaire)

Nous vous contacterons sous peu pour fixer un rendez-vous de signature. N'hésitez pas à communiquer avec notre bureau si vous avez des questions.

Cordialement,

**Bureau Notarial Tremblay**
Me. Jean-François Tremblay, notaire
Tél. : 514 555-0100 | notaire@bureautremblay.qc.ca`,
  },
  {
    id: "2",
    from: "Robert Lavoie",
    fromEmail: "r.lavoie@hotmail.com",
    subject: "Rendez-vous pour testament — urgent",
    preview: "Bonjour, je souhaiterais prendre rendez-vous pour la rédaction de mon testament...",
    body: `Bonjour Maître Tremblay,

Je suis un client de longue date de votre bureau (dossier de succession Lavoie, 2019). Je souhaite prendre rendez-vous dans les prochains jours pour la rédaction ou la mise à jour de mon testament.

J'ai 67 ans et ma situation familiale a changé depuis mon dernier testament : j'ai maintenant trois petits-enfants et je voudrais m'assurer que mes volontés sont bien reflétées.

Je suis disponible en après-midi du lundi au jeudi.

Merci,
Robert Lavoie
514-555-0247`,
    time: "Il y a 45 min",
    category: "testament",
    priority: "haute",
    read: false,
    aiResponse: `Objet : RE: Rendez-vous pour testament — urgent

Bonjour Monsieur Lavoie,

Nous avons bien reçu votre demande et sommes heureux de vous accueillir à nouveau au Bureau Notarial Tremblay.

Pour votre rendez-vous de rédaction testamentaire, voici ce que nous vous suggérons de préparer :

**Documents à apporter :**
☐ Pièce d'identité valide
☐ Copie de votre testament actuel (si disponible)
☐ Liste de vos biens principaux (immeubles, comptes, placements, REER, FERR)
☐ Noms complets, dates de naissance et adresses de vos bénéficiaires
☐ Nom de votre liquidateur testamentaire proposé

**Disponibilités proposées :**
- Mardi 6 mai 2025, 14h00
- Mercredi 7 mai 2025, 15h30
- Jeudi 8 mai 2025, 13h30

Veuillez confirmer votre préférence par retour de courriel ou en appelant le 514 555-0100.

La consultation dure environ 60 à 90 minutes. Les honoraires pour un testament notarié simple débutent à 350 $.

Au plaisir de vous revoir,

**Bureau Notarial Tremblay**
Me. Jean-François Tremblay, notaire`,
  },
  {
    id: "3",
    from: "Agence Immobilière Dufresne",
    fromEmail: "dossiers@agencedufresne.com",
    subject: "Dossier #2025-0412 — Vente 85, rue des Érables, Longueuil",
    preview: "Bonjour, pouvez-vous nous donner le statut du dossier pour la vente du 85 rue des Érables...",
    body: `Bonjour Bureau Notarial Tremblay,

Nous représentons les vendeurs du 85, rue des Érables à Longueuil (dossier #2025-0412). La transaction devait être complétée le 30 avril et nos clients s'inquiètent du délai.

Pourriez-vous nous informer du statut actuel du dossier ? Y a-t-il des documents manquants ou des problèmes de titre qui retardent la signature ?

Les acheteurs ont contacté leur courtier pour demander une extension de la date de clôture.

Cordialement,
Sophie Arsenault
Directrice des dossiers
Agence Immobilière Dufresne`,
    time: "Il y a 1h 20",
    category: "immobilier",
    priority: "haute",
    read: false,
    aiResponse: `Objet : RE: Dossier #2025-0412 — Vente 85, rue des Érables, Longueuil

Bonjour Madame Arsenault,

Merci pour votre message concernant le dossier #2025-0412.

Après vérification auprès de notre équipe, voici le statut actuel :

**État du dossier :**
✓ Acte de vente préparé et validé
✓ Recherche de titres complétée — aucun problème identifié
⚠ En attente : Confirmation de radiation de l'hypothèque auprès de la Banque Scotia (dossier de M. Bernard, vendeur)

**Prochaines étapes :**
Nous avons contacté la Banque Scotia ce matin. La quittance hypothécaire devrait être disponible sous 2 à 3 jours ouvrables.

Nous proposerons une date de signature pour le 8 ou 9 mai 2025 dès réception du document.

Nous vous contacterons directement à la confirmation.

Cordialement,

**Bureau Notarial Tremblay**
Me. Jean-François Tremblay, notaire`,
  },
  {
    id: "4",
    from: "Lucie Bergeron-Côté",
    fromEmail: "lucie.bergeron@videotron.ca",
    subject: "Mandat de protection — renseignements",
    preview: "Bonjour, ma mère souhaite rédiger un mandat de protection et j'aurais besoin d'informations...",
    body: `Bonjour,

Ma mère, Monique Côté, 78 ans, souhaite rédiger un mandat de protection (anciennement appelé mandat en cas d'inaptitude) alors qu'elle est encore apte.

Elle voudrait me nommer comme mandataire pour ses biens et ma sœur pour sa personne. Nous voudrions savoir si c'est possible d'avoir deux mandataires distincts et quel est le processus.

Également, quels sont vos honoraires pour ce type de document ?

Merci,
Lucie Bergeron-Côté
450-555-0391`,
    time: "Il y a 2h",
    category: "mandat",
    priority: "normale",
    read: true,
    aiResponse: `Objet : RE: Mandat de protection — renseignements

Bonjour Madame Bergeron-Côté,

Merci de nous contacter au sujet du mandat de protection de votre mère, Madame Monique Côté.

**Oui, il est tout à fait possible** de nommer deux mandataires avec des attributions distinctes :
- Un mandataire pour les **biens** (gestion financière, immeubles, comptes)
- Un mandataire pour la **personne** (décisions de soins, hébergement, etc.)

C'est même une pratique recommandée lorsque les aptitudes des enfants sont complémentaires.

**Documents requis pour la préparation :**
☐ Pièce d'identité de Madame Côté
☐ Nom complet, adresse et date de naissance de chaque mandataire
☐ Nom d'un mandataire substitut (en cas d'incapacité des premiers)
☐ Volontés particulières concernant les soins de fin de vie (optionnel)

**Honoraires :**
Mandat de protection notarié : à partir de **395 $** (taxes incluses)

Le mandat entre en vigueur uniquement si votre mère est déclarée inapte par un tribunal (homologation). Nous pouvons vous expliquer ce processus lors de la consultation.

Nous vous suggérons de prendre rendez-vous dès que possible, car le document ne peut être signé qu'en présence de votre mère.

Cordialement,

**Bureau Notarial Tremblay**`,
  },
  {
    id: "5",
    from: "Hassan Benali",
    fromEmail: "h.benali@businessqc.com",
    subject: "Convention entre actionnaires — société par actions",
    preview: "Bonjour Maître, nous avons besoin d'une convention d'actionnaires pour notre nouvelle société...",
    body: `Bonjour Maître Tremblay,

Mon associé et moi avons récemment incorporé une société par actions au fédéral (Benali & Pelletier Conseils Inc.) et nous souhaitons mettre en place une convention entre actionnaires.

Nous sommes deux actionnaires à parts égales (50/50). Nous voulons inclure des clauses de premier refus, de rachat en cas de décès ou d'invalidité, et des restrictions de transfert.

Est-ce que votre bureau prend en charge ce type de mandat ? Quels sont vos délais et honoraires approximatifs ?

Hassan Benali
Directeur général`,
    time: "Il y a 3h",
    category: "contrat",
    priority: "normale",
    read: true,
    aiResponse: `Objet : RE: Convention entre actionnaires — société par actions

Bonjour Monsieur Benali,

Merci pour votre message. Notre bureau a effectivement l'expertise pour vous accompagner dans la rédaction d'une convention entre actionnaires.

**Ce que nous pouvons inclure :**
✓ Clause de premier refus (right of first refusal)
✓ Clause shotgun (offre de rachat forcé)
✓ Disposition en cas de décès, invalidité ou retraite
✓ Restrictions de transfert d'actions
✓ Processus de résolution de conflits
✓ Clauses de non-concurrence et de confidentialité

**Délais estimés :** 10 à 15 jours ouvrables après réception de tous les renseignements.

**Honoraires approximatifs :** 1 800 $ à 3 500 $ selon la complexité (+ taxes).

Pour démarrer, nous aurons besoin de :
☐ Certificat de constitution de la société
☐ Registre des actionnaires actuel
☐ Vos objectifs et préférences pour chaque clause

Je vous propose une consultation préliminaire gratuite de 30 minutes pour cerner vos besoins. Êtes-vous disponible la semaine prochaine ?

Cordialement,

**Bureau Notarial Tremblay**`,
  },
  {
    id: "6",
    from: "Émilie Fortin-Lessard",
    fromEmail: "emilie.fortin@gmail.com",
    subject: "Succession de mon père — ouverture du dossier",
    preview: "Bonjour, mon père est décédé le 22 avril. Je dois m'occuper de la succession...",
    body: `Bonjour,

Mon père, Jean-Paul Fortin, est décédé le 22 avril 2025 à l'Hôpital du Sacré-Cœur de Montréal. Il avait 81 ans.

Il avait rédigé un testament notarié chez votre bureau en 2021. Je suis sa fille unique et il me nomme liquidatrice testamentaire.

Je ne sais pas trop par où commencer. Est-ce que je dois apporter le testament original ? Est-ce qu'il y a des délais légaux à respecter ?

Merci pour votre aide en ce moment difficile.

Émilie Fortin-Lessard
514-555-0628`,
    time: "Il y a 4h",
    category: "succession",
    priority: "haute",
    read: true,
    aiResponse: `Objet : RE: Succession de Jean-Paul Fortin — ouverture du dossier

Bonjour Madame Fortin-Lessard,

Nous vous offrons nos sincères condoléances pour le décès de votre père, Monsieur Jean-Paul Fortin.

Nous confirmons que le testament notarié de votre père a été rédigé dans notre bureau. En tant que notaire instrumentant, nous conservons l'original en nos archives — vous n'avez pas à vous en préoccuper.

**Prochaines étapes immédiates :**

1. **Certificat de décès** — Obtenez 5 à 10 copies certifiées auprès de Directeur de l'état civil du Québec (en ligne : etatcivil.gouv.qc.ca)

2. **Premières démarches urgentes (dans les 30 jours) :**
   - Aviser les institutions financières
   - Vérifier les assurances-vie
   - Sécuriser les biens (logement, véhicule)

3. **Notre rôle :** Nous préparerons l'inventaire successoral, la déclaration de transmission des immeubles et le compte final de liquidation.

**Prenez rendez-vous dès que possible.** Apportez lors de la consultation :
☐ Certificat de décès (ou avis de décès de l'hôpital)
☐ Votre pièce d'identité
☐ Liste des actifs connus (immeubles, comptes bancaires, placements)

Vous avez du temps — il n'y a pas de délai strict pour terminer une liquidation successorale, mais certaines démarches ont des échéances fiscales à respecter.

Nous sommes là pour vous guider à chaque étape.

Cordialement,

**Bureau Notarial Tremblay**`,
  },
  {
    id: "7",
    from: "Thomas Desrochers",
    fromEmail: "tdesrochers@desjardins.com",
    subject: "Demande de mainlevée hypothécaire — 12 ch. des Pins, Brossard",
    preview: "Bonjour, suite au remboursement complet de l'hypothèque de notre client, nous...",
    body: `Bonjour Bureau Notarial Tremblay,

Suite au remboursement intégral du solde hypothécaire de notre cliente, Madame Nathalie Côté-Simard, sur la propriété sise au 12, chemin des Pins à Brossard, nous vous demandons de procéder à la radiation de l'hypothèque au registre foncier.

Numéro de prêt : DES-2019-00847391
Numéro d'inscription de l'hypothèque : 22 184 672

Veuillez nous faire parvenir vos instructions pour la suite.

Thomas Desrochers
Analyste hypothécaire — Caisse Desjardins de Brossard`,
    time: "Hier, 16h30",
    category: "immobilier",
    priority: "normale",
    read: true,
    aiResponse: `Objet : RE: Mainlevée hypothécaire — 12 ch. des Pins, Brossard (Nathalie Côté-Simard)

Bonjour Monsieur Desrochers,

Merci pour votre demande concernant la radiation de l'hypothèque de Madame Nathalie Côté-Simard.

Nous accusons réception de votre demande et procéderons à la radiation de l'inscription n° 22 184 672 au registre foncier du Québec.

**Documents requis de votre part :**
☐ Quittance hypothécaire signée par Desjardins (état certifié)
☐ Déclaration solennelle de remboursement intégral
☐ Autorisation signée de la débitrice (Madame Côté-Simard) — si non déjà fournie

**Délai de traitement :** 3 à 5 jours ouvrables après réception des documents complets.

**Honoraires :** 375 $ + taxes (radiation simple)

Vous pouvez transmettre les documents par courriel sécurisé à : documents@bureautremblay.qc.ca

Cordialement,

**Bureau Notarial Tremblay**`,
  },
  {
    id: "8",
    from: "Andrée Paquin",
    fromEmail: "andree.paquin@outlook.com",
    subject: "Donation — transfert maison à ma fille",
    preview: "Bonjour Maître, j'aimerais donner ma maison à ma fille de mon vivant. Est-ce possible...",
    body: `Bonjour Maître,

J'ai 72 ans et je souhaite donner ma maison de Laval (valeur estimée à 480 000 $) à ma fille unique, Caroline Paquin, de mon vivant. Je veux éviter les complications lors de ma succession.

Est-ce que c'est possible de faire une donation entre vifs ? Y a-t-il des implications fiscales ? Est-ce que ça peut créer des problèmes si je dois aller en CHSLD plus tard ?

J'attends vos conseils avant de prendre une décision.

Andrée Paquin`,
    time: "Hier, 10h15",
    category: "contrat",
    priority: "normale",
    read: true,
    aiResponse: `Objet : RE: Donation immobilière à votre fille — analyse préliminaire

Bonjour Madame Paquin,

Merci pour votre question. Une donation entre vifs d'un immeuble est effectivement possible au Québec et nous en réalisons régulièrement. Cependant, il y a plusieurs points importants à considérer avant de prendre votre décision.

**Avantages :**
✓ Simplification de votre succession future
✓ Transfert du titre de propriété immédiat
✓ Possibilité de conserver un droit d'usufruit (continuer à habiter la maison)

**Points de vigilance importants :**

⚠ **Implications fiscales :** Le transfert est réputé effectué à la juste valeur marchande. L'ARC considère cela comme une disposition, ce qui peut entraîner un gain en capital imposable si la maison n'est pas votre résidence principale.

⚠ **CHSLD et aide sociale :** Si vous devenez admissible à des services subventionnés dans les 3 à 5 ans suivant la donation, Revenu Québec et les autorités pourraient contester la donation ou réduire votre admissibilité.

⚠ **Irrévocabilité :** Une donation notariée est généralement irrévocable.

**Notre recommandation :** Une consultation approfondie s'impose avant toute décision. Nous pouvons analyser votre situation fiscale personnelle et explorer des alternatives (fiducie, vente à prix réduit, testament spécifique).

Seriez-vous disponible pour une rencontre la semaine du 5 mai ?

Cordialement,

**Bureau Notarial Tremblay**`,
  },
  {
    id: "9",
    from: "Clinique Juridique Populaire",
    fromEmail: "info@cliniquejuridique.org",
    subject: "Partenariat — ateliers testaments gratuits",
    preview: "Bonjour, nous organisons des ateliers d'information sur la planification testamentaire...",
    body: `Bonjour,

La Clinique Juridique Populaire de Montréal-Nord organise des ateliers gratuits sur la planification testamentaire pour les aînés à faible revenu.

Nous cherchons des notaires partenaires pour participer à titre de conférenciers bénévoles (2 à 3 heures par atelier, une fois par trimestre).

Seriez-vous intéressé à vous joindre à notre réseau de professionnels bénévoles ?

Merci de votre consideration,
Directrice, Clinique Juridique Populaire`,
    time: "Hier, 9h00",
    category: "autre",
    priority: "basse",
    read: true,
    aiResponse: `Objet : RE: Partenariat — ateliers testaments gratuits

Bonjour,

Merci pour votre invitation. La mission de la Clinique Juridique Populaire s'aligne avec nos valeurs d'accès à la justice.

Nous serions heureux d'examiner cette possibilité de partenariat. Pourriez-vous nous faire parvenir plus de détails sur :

- Les dates et lieux des prochains ateliers prévus
- Le format de la présentation (durée, public cible, questions-réponses)
- Le cadre légal de la consultation bénévole (exigences du Barreau/Chambre)

Nous reviendrons vers vous dans les prochains jours avec une réponse définitive.

Cordialement,

**Bureau Notarial Tremblay**
Me. Jean-François Tremblay, notaire`,
  },
  {
    id: "10",
    from: "Claude Gervais",
    fromEmail: "c.gervais1952@gmail.com",
    subject: "Question sur mon dossier de copropriété",
    preview: "Bonjour Maître, j'ai acheté un condo en juin dernier et j'ai des questions sur...",
    body: `Bonjour Maître Tremblay,

Vous avez instrumenté mon achat de condo au 550, avenue Papineau, unité 804, Montréal, en juin 2024 (dossier GERV-2024-0615).

J'ai reçu une mise en demeure du syndicat de copropriété pour des travaux non autorisés sur mon balcon. Je ne comprends pas bien mes droits et obligations.

Est-ce que les droits du syndicat ont été bien expliqués dans l'acte notarié ? Pouvez-vous me donner accès à une copie de mon acte ?

Merci,
Claude Gervais
514-555-0774`,
    time: "Il y a 2 jours",
    category: "immobilier",
    priority: "normale",
    read: true,
    aiResponse: `Objet : RE: Dossier de copropriété GERV-2024-0615

Bonjour Monsieur Gervais,

Merci pour votre message. Nous avons retrouvé votre dossier d'achat du 550, avenue Papineau, unité 804 (acte instrumenté le 18 juin 2024).

**Concernant votre demande :**

Nous vous ferons parvenir une copie certifiée de votre acte d'achat par courriel dans les 24 heures. Les frais pour une copie conforme sont de 75 $.

**Au sujet de la mise en demeure du syndicat :**

L'acte de vente comprend une référence à la déclaration de copropriété. En copropriété divise, tout travail sur les parties communes (dont les balcons dans la plupart des déclarations) requiert l'approbation préalable du syndicat — article 1097 C.c.Q.

**Nous vous recommandons :**
1. De ne pas ignorer la mise en demeure
2. De demander au syndicat de vous préciser exactement quelle clause a été violée
3. De consulter un avocat spécialisé en droit de la copropriété si la situation escalade

Nous pouvons vous référer à des collègues spécialisés en litige immobilier si nécessaire.

Cordialement,

**Bureau Notarial Tremblay**`,
  },
];

export const STATS = [
  {
    label: "Courriels traités aujourd'hui",
    value: 24,
    suffix: "",
    icon: "mail",
    change: "+12% vs hier",
    positive: true,
  },
  {
    label: "Temps économisé",
    value: 432,
    suffix: "min",
    displayValue: "7h 12min",
    icon: "clock",
    change: "Économie estimée",
    positive: true,
  },
  {
    label: "Taux automatique",
    value: 95,
    suffix: "%",
    icon: "zap",
    change: "+3% ce mois",
    positive: true,
  },
];
