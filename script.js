// CONFIGURATION PERSONNALISABLE
// Modifiez title, subtitle, game et surtout personalMessage pour chaque mois.
const LOVE_STORY = {
  title: "Pour nos 1 ans",
  subtitle: "Une année entière qui m'a éclairé.",
  finalMessage: "À venir.\n\nÉcris ici ta déclaration finale.",
  months: [
    {
      title: "La fouille de zone",
      calendarMonth: "Novembre",
      label: "La fouille",
      subtitle: "La chambre garde quatre objets précieux. Observe les détails et retrouve-les.",
      game: {
        type: "hunt",
        items: [
          { id: "rose", label: "Une rose", left: "24%", top: "61%", kind: "memory", foundText: "Une rose, délicatement posée là… elle est à toi." },
          { id: "bracelet", label: "Un bracelet", left: "55%", top: "86%", kind: "memory", foundText: "Un bracelet retrouvé, un petit lien entre nous." },
          { id: "plush", label: "Une peluche", left: "71%", top: "62%", kind: "memory", foundText: "Une peluche toute douce, gardienne de nos nuits." },
          { id: "sweater", label: "Un pull", left: "86%", top: "77%", kind: "memory", foundText: "Un pull tout chaud, avec un peu de toi dedans." },
          { id: "book", label: "Un livre", left: "14%", top: "65%", kind: "decoy", foundText: "Juste un livre entrouvert… le trésor se cache ailleurs." },
          { id: "mug", label: "Une tasse", left: "32%", top: "63%", kind: "decoy", foundText: "Une tasse oubliée sur la table de nuit. Continue à chercher." },
          { id: "perfume", label: "Un flacon", left: "84%", top: "39%", kind: "decoy", foundText: "Un petit flacon, mais pas encore le bon souvenir." },
          { id: "sock", label: "Une chaussette", left: "38%", top: "89%", kind: "decoy", foundText: "Une chaussette esseulée… les objets précieux sont encore là." }
        ]
      },
      personalMessage: "Le mois de novembre a été le mois ou on s'est mis ensemble c'est pas la meilleure des manières en plus j'étais tellement stressé que j'ai pas pu attendre ta réponse j'avais trop peur mdrrrr, ça était un mois vraiment incroyable je pense que c'était bien la première fois où je m'entendais si bien avec une personne et que je pensais a elle autant, je reste quand même désolé pour Emma ou mtn elle ne te parle plus ect c'était pas voulu évidemment mais quand même j'aurais dû plus réfléchir mais ce qui est fait est fait et je ne regrette pas non plus pour autant ça a pu me permettre que je ne pouvais plus me passer de toi."
    },
    {
      title: "L'énigme souvenir",
      calendarMonth: "Décembre",
      label: "L'énigme",
      subtitle: "Deux souvenirs précieux veillent dans ce coffret. Sauras-tu les retrouver ?",
      game: {
        type: "riddle",
        question: "Quelles sont les premières choses qu'on s'est offertes ?",
        fields: [
          {
            label: "Mon cadeau (ce que tu m'as offert)",
            placeholder: "Écris ta réponse...",
            answers: ["un dessin", "dessin", "le dessin"]
          },
          {
            label: "Ton cadeau (ce que je t'ai offert)",
            placeholder: "Écris ta réponse...",
            answers: ["un bougeoir", "bougeoir", "le bougeoir"]
          }
        ],
        hintAfter: 2,
        hint: "Indice : rose pour ton cadeau, bougies pour le mien."
      },
      personalMessage: "Le mois de décembre ça était un mois vraiment incroyable il y a eu que des bonnes choses, je crois que si mais souvenirs sont bon ça devait être pendant ce mois là que tu est venu chez moi je crois ? ou alors ça devait être en janvier je ne sais plus trop tout ce que je sais c'était que j'aurais aimé être avec toi pour Noël mais du coup si ça avait bien était se mois que je t'avais présenté à ma mère et que tu avais était chez moi bah t'avais était la première a venir aussi vite chez moi parce que j'avais tellement confiance en toi c'était dingue, ya eu aussi le karting ça j'avais vraiment kiffé c'était une dinguerie avec le bowling les arcades et tout c'était vraiment la meilleure journée et de très loin je pense pour moi. "
    },
    {
      title: "Le labyrinthe des souvenirs",
      calendarMonth: "Janvier",
      label: "Le labyrinthe",
      subtitle: "Guide une lumière dans la nuit, retrouve les trois éclats de souvenir et ouvre le chemin vers le cœur.",
      game: {
        type: "maze",
        map: [
          "#################",
          "#S#*....#*....#.#",
          "#.###.#.###.#.#.#",
          "#.....#.....#.#.#",
          "#############.#.#",
          "#...#.......#...#",
          "#.###.#.#######.#",
          "#.....#...#.....#",
          "#.#######.#.#####",
          "#.#.......#...#*#",
          "#.#.#########.#.#",
          "#.#.#.......#...#",
          "###.#.#####.###.#",
          "#...#.#...#...#.#",
          "#.###.#.#.###.#.#",
          "#.......#...#..E#",
          "#################"
        ]
      },
      personalMessage: "Le mois de Janvier je pense que ça devait être le pire mois avec ton stage et je crois que j'avais énormément stressé ect c'était vraiment long et chiant c'était horrible mais je t'avais quand même fait une belle surprise au soir de ton stage eheh j'avais passé une superbe soirée franchement."
    },
    {
      title: "Correspondance de moments",
      calendarMonth: "Février",
      label: "Les paires",
      subtitle: "Du karting aux Minions, retrouve les détails de nos souvenirs.",
      game: {
        type: "matches",
        pairs: [
          { left: "Le karting", right: "Complètement fou" },
          { left: "Notre premier film ensemble", right: "Les Minions" },
          { left: "Notre sortie à Pairi Daiza", right: "On a fini trempés" },
          { left: "Notre premier jeu en coop", right: "Tu n’as pas aimé le passage avec les araignées" }
        ]
      },
      personalMessage: ""
    },
    {
      title: "La chasse aux étoiles",
      calendarMonth: "Mars",
      label: "Les étoiles",
      subtitle: "Les étoiles filantes cachent un poème. Repère les signes blancs et clique-les dans le bon ordre.",
      game: {
        type: "stars",
        sequence: ["ring", "diamond", "cross", "spark", "orbit", "asterisk"],
        stars: [
          { id: "ring", sign: "○", name: "anneau" },
          { id: "diamond", sign: "◇", name: "losange" },
          { id: "cross", sign: "✛", name: "croix" },
          { id: "spark", sign: "✧", name: "étoile fine" },
          { id: "orbit", sign: "⊙", name: "orbite" },
          { id: "asterisk", sign: "✣", name: "étoile à quatre branches" }
        ],
        poem: ["Une étoile pour notre rencontre,", "une autre pour chacun de nos rires,", "et toutes celles du ciel", "pour les rêves qu'il nous reste à vivre."]
      },
      personalMessage: ""
    },
    {
      title: "Le cap de la moitié",
      calendarMonth: "Avril",
      label: "L'astrolabe nocturne",
      subtitle: "Fais tourner les anneaux célestes et aligne les six premières lumières sur l'axe doré.",
      game: {
        type: "astrolabe",
        prompt: "Aligne les six lumières avec l'axe doré. Clique sur une étoile, ou utilise les flèches gauche et droite.",
        initialRotations: [90, 210, 60, 180, 210, 330],
        message: "Six mois déjà, et pourtant j'ai encore l'impression de découvrir chaque jour une nouvelle petite chose à aimer chez toi.\n\nMerci d'être ma mélodie préférée."
      },
      personalMessage: ""
    },
    {
      title: "Le cherche et trouve",
      calendarMonth: "Mai",
      label: "Le petit chat",
      subtitle: "Une chambre s'endort sous la lune. Retrouve le petit chat caché dans le décor.",
      game: {
        type: "seek",
        target: "chat",
        targetLabel: "le petit chat",
        hint: "Regarde près du grand coussin, à droite du lit. Le chat s'est blotti dans la pénombre."
      },
      personalMessage: ""
    },
    {
      title: "Le déchiffrage de code",
      calendarMonth: "Juin",
      label: "Le message secret",
      subtitle: "Les lettres ont avancé de trois places. Ramène-les chez elles pour lire le message.",
      game: {
        type: "cipher",
        cipher: "WX HV OD PHLOOHXUH",
        shift: 3,
        answer: "tu es la meilleure",
        hint: "Indice : pour décoder, recule chaque lettre de trois places dans l'alphabet."
      },
      personalMessage: "Le mois de juin j'ai peur de souvenirs mais du coup tu m'as rappeler la friterie où on était aller et où tu as rencontré ma grande soeur et mon neuve, c'était d'ailleurs vraiment pas fou comme moment parce qu'il avait failli dire de la merde a ce moment 😭, il a eu aussi l'endroit où on était aller manger un couscous et je crois que pour toi c'était pas le meilleur des moments avec toute ma famille mdrrrr 😭😭 mais c'était vraiment sympas aussi comme toute les journées qu'on a passé a deux et ou avait fait des choses ensemble ect."
    },
    {
      title: "La balade dans nos souvenirs",
      calendarMonth: "Juillet",
      label: "Les polaroids",
      subtitle: "Retourne chaque polaroid pour revoir un petit instant de notre histoire.",
      game: {
        type: "polaroids",
        cards: [
          { front: "Avant même qu'on soit ensemble", back: "La toute première fois où tu m'as fait un câlin, alors qu'on n'était même pas ensemble, je savais déjà que je ne voulais que toi." },
          { front: "Ma première visite chez toi", back: "La première fois où je suis venu chez toi, j'étais tellement stressé, mdrrr. Mais au final, j'ai passé un superbe moment avec toi." },
          { front: "Notre première sortie", back: "La première fois qu'on a fait une sortie, c'était tellement bien, surtout de voir à quel point tu étais heureuse à ce moment-là." },
          { front: "Un souvenir rien qu'à nous", back: "La toute première fois où on l'a fait, c'était tout aussi bien, et je ne regrette absolument pas de te l'avoir donnée, à toi, la fille que j'aime." }
        ]
      },
      personalMessage: "À venir."
    },
    {
      title: "Le quiz complice",
      calendarMonth: "Août",
      label: "Le quiz",
      subtitle: "Trois petites questions sur nous deux. Voyons si tu te souviens de tout !",
      game: {
        type: "quiz",
        questions: [
          { question: "Quelle est notre petite boisson préférée à partager ?", answers: ["un chocolat chaud", "chocolat chaud", "un chocolat chaud à deux"] },
          { question: "Qu'est-ce qui me fait toujours sourire chez toi ?", answers: ["ton rire", "son rire", "ton sourire"] },
          { question: "Quel serait mon programme parfait avec toi ?", answers: ["une soirée ensemble", "rester avec toi", "une balade à deux"] }
        ]
      },
      personalMessage: "À venir."
    },
    {
      title: "La traînée de lumière",
      calendarMonth: "Septembre",
      label: "Le cœur lumineux",
      subtitle: "Trace un cœur d'un seul geste pour laisser une petite lumière dans la nuit.",
      game: { type: "trace", shape: "heart" },
      personalMessage: "À venir."
    },
    {
      title: "Le bouquet final",
      calendarMonth: "Octobre",
      label: "Le bouquet",
      subtitle: "Douze mois, douze petites fleurs. Compose notre bouquet pour ouvrir la dernière lettre.",
      game: {
        type: "bouquet",
        flowers: [
          { glyph: "🌷", label: "fleur 1" }, { glyph: "🌼", label: "fleur 2" },
          { glyph: "🌹", label: "fleur 3" }, { glyph: "🌸", label: "fleur 4" },
          { glyph: "💮", label: "fleur 5" }, { glyph: "🌻", label: "fleur 6" },
          { glyph: "🪻", label: "fleur 7" }, { glyph: "🌺", label: "fleur 8" },
          { glyph: "🌼", label: "fleur 9" }, { glyph: "🌹", label: "fleur 10" },
          { glyph: "🌷", label: "fleur 11" }, { glyph: "💐", label: "fleur 12" }
        ]
      },
      personalMessage: "À venir."
    }
  ]
};

(() => {
  "use strict";

  const STORAGE_KEY = "notre-premiere-annee-v1";
  const $ = (selector) => document.querySelector(selector);
  const screens = {
    welcome: $("#welcome-screen"),
    hub: $("#hub-screen"),
    game: $("#game-screen")
  };
  const timeline = $("#timeline");
  const gameContent = $("#game-content");
  const dialog = $("#reveal-dialog");
  const disclaimerDialog = $("#disclaimer-dialog");
  document.title = LOVE_STORY.title;
  $("#welcome-copy").textContent = LOVE_STORY.subtitle;
  let completed = loadProgress();
  let activeMonth = 0;
  let foundFragments = new Set();
  let attempts = 0;
  let selectedLeft = null;
  let matchedPairs = new Set();
  let toastTimer;
  let starFieldResizeObserver;
  let stopBackgroundAnimation = () => {};
  let startBackgroundAnimation = () => {};

  function loadProgress() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      if (!Array.isArray(saved)) return [];
      return [...new Set(saved.filter((month) => Number.isInteger(month) && month >= 0 && month < LOVE_STORY.months.length))].sort((a, b) => a - b);
    } catch (error) {
      console.warn("La progression sauvegardée n'a pas pu être lue.", error);
      return [];
    }
  }

  function saveProgress() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(completed));
    } catch (error) {
      console.error("La progression n'a pas pu être sauvegardée.", error);
      showToast("La sauvegarde locale est indisponible sur cet appareil.");
    }
  }

  function showToast(message) {
    const toast = $("#toast");
    toast.textContent = message;
    toast.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2600);
  }

  function unlockGameFinishButton(selector) {
    const button = $(selector);
    button.disabled = false;
    button.classList.add("is-unlocked");
  }

  function showScreen(name) {
    if (name !== "game") {
      starFieldResizeObserver?.disconnect();
      starFieldResizeObserver = undefined;
    }
    const showSky = name === "welcome" || name === "hub";
    document.body.classList.toggle("has-sky-background", showSky);
    Object.entries(screens).forEach(([key, screen]) => {
      const visible = key === name;
      screen.hidden = !visible;
      screen.classList.toggle("is-visible", visible);
    });
    if (showSky) startBackgroundAnimation();
    else stopBackgroundAnimation();
  }

  function renderHub() {
    timeline.replaceChildren();
    const nextMonth = completed.length;
    LOVE_STORY.months.forEach((month, index) => {
      const isComplete = completed.includes(index);
      const isCurrent = index === nextMonth && nextMonth < LOVE_STORY.months.length;
      const isUnlocked = index <= nextMonth && index < LOVE_STORY.months.length;
      const node = document.createElement("button");
      node.type = "button";
      node.className = `month-node${isComplete ? " is-complete" : ""}${isCurrent ? " is-current" : ""}`;
      node.disabled = !isUnlocked;
      node.setAttribute("aria-label", `Mois ${index + 1}, ${month.calendarMonth} : ${month.label}${isComplete ? ", souvenir retrouvé, rejouer" : isUnlocked ? ", à découvrir" : ", verrouillé"}`);
      node.innerHTML = `<span class="month-number">MOIS ${String(index + 1).padStart(2, "0")}</span><span class="month-calendar"></span><span class="month-icon" aria-hidden="true">${isComplete ? "✦" : isUnlocked ? "✧" : "⌑"}</span><span class="month-name"></span><span class="month-status" aria-hidden="true">${isComplete ? "✓" : !isUnlocked ? "⌑" : ""}</span>`;
      node.querySelector(".month-calendar").textContent = month.calendarMonth;
      node.querySelector(".month-name").textContent = month.label;
      if (isUnlocked) node.addEventListener("click", () => openMonth(index));
      timeline.append(node);
    });
    $("#progress-label").textContent = `${completed.length} / 12 souvenirs`;
    const finalUnlocked = completed.length === LOVE_STORY.months.length;
    const finalButton = $("#read-final-button");
    finalButton.disabled = !finalUnlocked;
    finalButton.querySelector(".final-lock").textContent = finalUnlocked ? "✦" : "⌑";
    finalButton.querySelector(".final-button-label").textContent = finalUnlocked ? "Lire notre dernière lettre" : "À découvrir après le mois 12";
    $(".final-destination").classList.toggle("is-unlocked", finalUnlocked);
  }

  function openFinalMessage() {
    if (completed.length !== LOVE_STORY.months.length) return;
    $("#reveal-title").textContent = "Le grand mot final";
    const recap = LOVE_STORY.months
      .map((month, index) => {
        const heading = `Mois ${index + 1} · ${month.calendarMonth} · ${month.title}`;
        return month.personalMessage.trim() ? `${heading}\n${month.personalMessage}` : heading;
      })
      .join("\n\n");
    const revealCopy = $("#reveal-copy");
    revealCopy.textContent = `${LOVE_STORY.finalMessage}\n\n✦ Notre année en quelques mots ✦\n\n${recap}`;
    revealCopy.hidden = false;
    $(".reveal-card .letter-divider").hidden = false;
    dialog.classList.add("is-final");
    $("#continue-button").textContent = "Fermer cette lettre";
    $("#continue-button").onclick = () => {
      dialog.close();
      showScreen("hub");
    };
    dialog.showModal();
  }

  function openMonth(index) {
    if (index > completed.length || index >= LOVE_STORY.months.length) return;
    starFieldResizeObserver?.disconnect();
    starFieldResizeObserver = undefined;
    activeMonth = index;
    foundFragments = new Set();
    attempts = 0;
    selectedLeft = null;
    matchedPairs = new Set();
    const month = LOVE_STORY.months[index];
    gameContent.classList.toggle("is-hunt", month.game.type === "hunt");
    gameContent.classList.toggle("is-stars", month.game.type === "stars");
    gameContent.classList.toggle("is-seek", month.game.type === "seek");
    $("#game-counter").textContent = `SOUVENIR ${String(index + 1).padStart(2, "0")} / 12`;
    $("#game-eyebrow").textContent = `Mois ${index + 1} · ${month.calendarMonth} · ${completed.includes(index) ? "À relire" : "À découvrir"}`;
    $("#game-title").textContent = month.title;
    $("#game-description").textContent = month.subtitle;
    if (month.game.type === "hunt") renderHunt(month.game);
    else if (month.game.type === "riddle") renderRiddle(month.game);
    else if (month.game.type === "maze") renderMaze(month.game);
    else if (month.game.type === "matches") renderMatches(month.game);
    else if (month.game.type === "stars") renderStars(month.game);
    else if (month.game.type === "astrolabe") renderAstrolabe(month.game);
    else if (month.game.type === "seek") renderSeek(month.game);
    else if (month.game.type === "cipher") renderCipher(month.game);
    else if (month.game.type === "polaroids") renderPolaroids(month.game);
    else if (month.game.type === "quiz") renderQuiz(month.game);
    else if (month.game.type === "trace") renderTrace(month.game);
    else if (month.game.type === "bouquet") renderBouquet(month.game);
    showScreen("game");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderHunt(config) {
    gameContent.innerHTML = `
      <div class="game-panel hunt-panel">
        <div class="hunt-scene" role="group" aria-label="Chambre nocturne : explore la pièce pour retrouver quatre objets précieux">
          <canvas class="hunt-canvas" aria-hidden="true"></canvas>
        <canvas class="hunt-dust-canvas" aria-hidden="true"></canvas>
          <div class="hunt-flashlight" aria-hidden="true"></div>
        </div>
        <p class="hunt-hint">La chambre dort… éclaire ses recoins et retrouve quatre objets précieux.</p>
        <p class="hunt-feedback" aria-live="polite">Clique sur les objets de la chambre pour les examiner.</p>
      </div>`;
    const scene = $(".hunt-scene");
    const canvas = $(".hunt-canvas");
    const context = canvas.getContext("2d");
    const dustCanvas = $(".hunt-dust-canvas");
    const dustContext = dustCanvas.getContext("2d");
    const memories = config.items.filter((item) => item.kind === "memory");
    const feedback = $(".hunt-feedback");
    if (!context || !dustContext) {
      showToast("La scène de recherche n'est pas disponible dans ce navigateur.");
      return;
    }
    let dustParticles = [];

    const itemAt = (id, width, height) => {
      const item = config.items.find((candidate) => candidate.id === id);
      return {
        x: width * Number.parseFloat(item.left) / 100,
        y: height * Number.parseFloat(item.top) / 100
      };
    };
    const drawRoom = () => {
      const bounds = scene.getBoundingClientRect();
      if (!bounds.width || !bounds.height) return;
      const width = bounds.width;
      const height = bounds.height;
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      dustCanvas.width = canvas.width;
      dustCanvas.height = canvas.height;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      dustContext.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      context.clearRect(0, 0, width, height);

      let seed = 42017;
      const random = () => {
        seed = (seed * 16807) % 2147483647;
        return (seed - 1) / 2147483646;
      };
      const roundedRect = (x, y, w, h, radius, fill, stroke) => {
        context.beginPath();
        context.roundRect(x, y, w, h, radius);
        if (fill) {
          context.fillStyle = fill;
          context.fill();
        }
        if (stroke) {
          context.strokeStyle = stroke;
          context.stroke();
        }
      };
      const trace = (points, fill, stroke, lineWidth = 1) => {
        context.beginPath();
        points.forEach(([x, y], index) => {
          if (index === 0) context.moveTo(x, y);
          else context.lineTo(x, y);
        });
        context.closePath();
        if (fill) {
          context.fillStyle = fill;
          context.fill();
        }
        if (stroke) {
          context.lineWidth = lineWidth;
          context.strokeStyle = stroke;
          context.stroke();
        }
      };
      const wallEnd = height * .69;
      const wall = context.createLinearGradient(0, 0, width * .8, wallEnd);
      wall.addColorStop(0, "#111b2b");
      wall.addColorStop(.58, "#202535");
      wall.addColorStop(1, "#353341");
      context.fillStyle = wall;
      context.fillRect(0, 0, width, height);
      const moonWash = context.createRadialGradient(width * .18, height * .31, 0, width * .18, height * .31, width * .62);
      moonWash.addColorStop(0, "rgba(91,132,174,.22)");
      moonWash.addColorStop(.56, "rgba(57,85,119,.09)");
      moonWash.addColorStop(1, "rgba(12,18,31,0)");
      context.fillStyle = moonWash;
      context.fillRect(0, 0, width, wallEnd);

      for (let index = 0; index < 850; index++) {
        const x = random() * width;
        const y = random() * wallEnd;
        const alpha = random() * .035;
        context.fillStyle = random() > .5
          ? `rgba(192,202,214,${alpha})`
          : `rgba(5,9,17,${alpha})`;
        context.fillRect(x, y, random() * 1.5 + .35, random() * 2 + .4);
      }
      context.strokeStyle = "rgba(7,11,20,.22)";
      context.lineWidth = 1;
      for (let index = 1; index < 6; index++) {
        const y = wallEnd * index / 7;
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(width, y);
        context.stroke();
      }
      const wallTrim = context.createLinearGradient(0, wallEnd - 8, 0, wallEnd + 12);
      wallTrim.addColorStop(0, "#514842");
      wallTrim.addColorStop(.35, "#76695e");
      wallTrim.addColorStop(.55, "#262832");
      wallTrim.addColorStop(1, "#11151e");
      context.fillStyle = wallTrim;
      context.fillRect(0, wallEnd - 7, width, 20);

      const lampGlow = context.createRadialGradient(width * .24, height * .56, 1, width * .24, height * .56, height * .8);
      lampGlow.addColorStop(0, "rgba(242,190,115,.29)");
      lampGlow.addColorStop(.2, "rgba(209,150,90,.16)");
      lampGlow.addColorStop(.58, "rgba(181,126,83,.045)");
      lampGlow.addColorStop(1, "rgba(181,126,83,0)");
      context.fillStyle = lampGlow;
      context.fillRect(0, 0, width, height);

      const floorTop = height * .69;
      const floor = context.createLinearGradient(0, floorTop, 0, height);
      floor.addColorStop(0, "#403a3a");
      floor.addColorStop(.32, "#302a2d");
      floor.addColorStop(1, "#17191f");
      trace([[0, floorTop], [width, floorTop], [width, height], [0, height]], floor);
      context.save();
      trace([[0, floorTop], [width, floorTop], [width, height], [0, height]], "rgba(0,0,0,0)");
      context.clip();
      for (let index = 0; index <= 10; index++) {
        const topX = width * index / 10;
        const bottomX = topX + (width * .5 - topX) * .17;
        context.beginPath();
        context.moveTo(topX, floorTop);
        context.lineTo(bottomX, height);
        context.strokeStyle = index % 2 ? "rgba(8,10,15,.28)" : "rgba(181,150,116,.08)";
        context.lineWidth = index % 2 ? 2 : 1;
        context.stroke();
      }
      for (let row = 1; row < 5; row++) {
        const y = floorTop + (height - floorTop) * row / 5;
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(width, y);
        context.strokeStyle = "rgba(7,9,14,.23)";
        context.lineWidth = 2;
        context.stroke();
      }
      for (let index = 0; index < 430; index++) {
        const x = random() * width;
        const y = floorTop + random() * (height - floorTop);
        context.beginPath();
        context.moveTo(x, y);
        context.quadraticCurveTo(x + random() * 15, y - 2, x + random() * 35 + 5, y + random() * 3);
        context.strokeStyle = random() > .5 ? "rgba(191,155,119,.08)" : "rgba(4,7,12,.12)";
        context.lineWidth = random() * 1.2 + .3;
        context.stroke();
      }
      context.restore();

      const windowX = width * .075;
      const windowY = height * .095;
      const windowW = width * .245;
      const windowH = height * .43;
      context.save();
      context.shadowColor = "rgba(0,0,0,.6)";
      context.shadowBlur = 20;
      context.shadowOffsetY = 8;
      roundedRect(windowX - 7, windowY - 7, windowW + 14, windowH + 14, 8, "#463c38");
      context.restore();
      const glass = context.createLinearGradient(windowX, windowY, windowX + windowW, windowY + windowH);
      glass.addColorStop(0, "#0b172b");
      glass.addColorStop(.55, "#172940");
      glass.addColorStop(1, "#28364a");
      roundedRect(windowX, windowY, windowW, windowH, 3, glass, "#92775e");
      context.save();
      context.beginPath();
      context.roundRect(windowX + 4, windowY + 4, windowW - 8, windowH - 8, 2);
      context.clip();
      for (let index = 0; index < 35; index++) {
        const x = windowX + random() * windowW;
        const y = windowY + random() * windowH * .72;
        context.beginPath();
        context.arc(x, y, random() * 1.2 + .3, 0, Math.PI * 2);
        context.fillStyle = `rgba(226,230,226,${random() * .55 + .15})`;
        context.fill();
      }
      const moonX = windowX + windowW * .72;
      const moonY = windowY + windowH * .23;
      const moonGlow = context.createRadialGradient(moonX, moonY, 1, moonX, moonY, windowW * .3);
      moonGlow.addColorStop(0, "rgba(220,225,218,.31)");
      moonGlow.addColorStop(1, "rgba(220,225,218,0)");
      context.fillStyle = moonGlow;
      context.fillRect(windowX, windowY, windowW, windowH);
      context.beginPath();
      context.arc(moonX, moonY, windowW * .055, 0, Math.PI * 2);
      context.fillStyle = "#d4d7cc";
      context.shadowColor = "rgba(204,219,232,.55)";
      context.shadowBlur = 12;
      context.fill();
      context.shadowBlur = 0;
      trace([
        [windowX, windowY + windowH * .72],
        [windowX + windowW * .18, windowY + windowH * .61],
        [windowX + windowW * .39, windowY + windowH * .69],
        [windowX + windowW * .6, windowY + windowH * .58],
        [windowX + windowW, windowY + windowH * .67],
        [windowX + windowW, windowY + windowH],
        [windowX, windowY + windowH]
      ], "rgba(9,16,27,.73)");
      context.strokeStyle = "rgba(213,225,233,.17)";
      context.lineWidth = Math.max(2, width * .003);
      context.beginPath();
      context.moveTo(windowX + windowW * .18, windowY + windowH * .08);
      context.lineTo(windowX + windowW * .39, windowY + windowH * .48);
      context.moveTo(windowX + windowW * .29, windowY + windowH * .06);
      context.lineTo(windowX + windowW * .49, windowY + windowH * .45);
      context.stroke();
      context.restore();
      context.fillStyle = "#665548";
      context.fillRect(windowX + windowW * .49, windowY, 5, windowH);
      context.fillRect(windowX, windowY + windowH * .57, windowW, 5);
      context.fillStyle = "rgba(218,192,151,.55)";
      context.fillRect(windowX + windowW * .49, windowY, 1, windowH);
      context.fillRect(windowX, windowY + windowH * .57, windowW, 1);

      const pictureX = width * .73;
      const pictureY = height * .12;
      const pictureW = width * .13;
      const pictureH = height * .19;
      context.save();
      context.shadowColor = "rgba(0,0,0,.44)";
      context.shadowBlur = 12;
      context.shadowOffsetY = 5;
      roundedRect(pictureX, pictureY, pictureW, pictureH, 3, "#493d37");
      context.restore();
      roundedRect(pictureX + 5, pictureY + 5, pictureW - 10, pictureH - 10, 1, "#17202a");
      const pictureGlow = context.createLinearGradient(pictureX, pictureY, pictureX, pictureY + pictureH);
      pictureGlow.addColorStop(0, "rgba(154,167,174,.2)");
      pictureGlow.addColorStop(1, "rgba(169,137,102,.05)");
      context.fillStyle = pictureGlow;
      context.fillRect(pictureX + 8, pictureY + 8, pictureW - 16, pictureH - 16);
      context.strokeStyle = "rgba(210,201,181,.21)";
      context.lineWidth = 1;
      context.beginPath();
      context.moveTo(pictureX + pictureW * .2, pictureY + pictureH * .76);
      context.quadraticCurveTo(pictureX + pictureW * .45, pictureY + pictureH * .3, pictureX + pictureW * .8, pictureY + pictureH * .69);
      context.stroke();
      const shelfX = width * .67;
      const shelfY = height * .38;
      context.save();
      context.shadowColor = "rgba(0,0,0,.52)";
      context.shadowBlur = 10;
      context.shadowOffsetY = 5;
      roundedRect(shelfX, shelfY, width * .25, height * .018, 2, "#584b42", "rgba(194,164,128,.22)");
      context.restore();
      context.fillStyle = "#252932";
      context.fillRect(shelfX + width * .035, shelfY - height * .075, width * .035, height * .075);
      context.fillStyle = "#453a37";
      context.fillRect(shelfX + width * .077, shelfY - height * .095, width * .043, height * .095);
      context.fillStyle = "#55534e";
      context.fillRect(shelfX + width * .125, shelfY - height * .064, width * .028, height * .064);

      const rugX = width * .39;
      const rugY = height * .82;
      context.save();
      context.shadowColor = "rgba(0,0,0,.58)";
      context.shadowBlur = 14;
      context.shadowOffsetY = 6;
      context.beginPath();
      context.ellipse(rugX + width * .19, rugY + height * .045, width * .2, height * .095, -.04, 0, Math.PI * 2);
      const rug = context.createRadialGradient(rugX + width * .18, rugY, 0, rugX + width * .19, rugY, width * .22);
      rug.addColorStop(0, "#514548");
      rug.addColorStop(.76, "#38353b");
      rug.addColorStop(1, "#24252d");
      context.fillStyle = rug;
      context.fill();
      context.restore();
      context.save();
      context.beginPath();
      context.ellipse(rugX + width * .19, rugY + height * .045, width * .19, height * .085, -.04, 0, Math.PI * 2);
      context.clip();
      for (let index = 0; index < 190; index++) {
        const x = rugX + random() * width * .38;
        const y = rugY - height * .04 + random() * height * .17;
        context.beginPath();
        context.moveTo(x, y);
        context.lineTo(x + random() * 5 + 2, y + random() * 2);
        context.strokeStyle = random() > .5 ? "rgba(192,169,149,.14)" : "rgba(7,9,15,.2)";
        context.lineWidth = .7;
        context.stroke();
      }
      context.restore();

      const plantX = width * .38;
      const plantY = height * .71;
      context.save();
      context.shadowColor = "rgba(0,0,0,.55)";
      context.shadowBlur = 12;
      context.shadowOffsetY = 5;
      context.fillStyle = "#171b20";
      for (let index = 0; index < 7; index++) {
        context.save();
        context.translate(plantX, plantY);
        context.rotate((index - 3) * .2);
        context.beginPath();
        context.ellipse(0, -height * (.1 + random() * .08), width * .018, height * .13, 0, 0, Math.PI * 2);
        context.fillStyle = index % 2 ? "#35403d" : "#465047";
        context.fill();
        context.restore();
      }
      roundedRect(plantX - width * .035, plantY - height * .015, width * .07, height * .09, 4, "#665044");
      context.restore();

      const bedX = width * .42;
      const bedY = height * .4;
      const bedW = width * .55;
      const headboard = context.createLinearGradient(0, bedY, 0, bedY + height * .17);
      headboard.addColorStop(0, "#4c4141");
      headboard.addColorStop(.5, "#312e34");
      headboard.addColorStop(1, "#1c2029");
      context.save();
      context.shadowColor = "rgba(0,0,0,.64)";
      context.shadowBlur = 20;
      context.shadowOffsetY = 8;
      roundedRect(bedX, bedY, bedW, height * .17, 8, headboard, "rgba(180,151,121,.19)");
      context.restore();
      for (let index = 0; index < 4; index++) {
        const panelX = bedX + bedW * (.04 + index * .24);
        roundedRect(panelX, bedY + height * .025, bedW * .2, height * .105, 5, "rgba(6,10,18,.16)", "rgba(198,166,135,.08)");
      }
      const mattress = context.createLinearGradient(bedX, bedY + height * .12, bedX + bedW, bedY + height * .49);
      mattress.addColorStop(0, "#77717a");
      mattress.addColorStop(.36, "#555963");
      mattress.addColorStop(1, "#30343f");
      context.save();
      context.shadowColor = "rgba(0,0,0,.66)";
      context.shadowBlur = 20;
      context.shadowOffsetY = 12;
      roundedRect(bedX + width * .008, bedY + height * .13, bedW - width * .015, height * .43, 9, mattress);
      context.restore();

      const pillow = context.createLinearGradient(0, bedY + height * .15, width * .2, bedY + height * .3);
      pillow.addColorStop(0, "#88838a");
      pillow.addColorStop(.48, "#666671");
      pillow.addColorStop(1, "#454956");
      context.save();
      context.shadowColor = "rgba(0,0,0,.37)";
      context.shadowBlur = 9;
      roundedRect(bedX + bedW * .07, bedY + height * .15, bedW * .35, height * .12, 12, pillow, "rgba(220,211,194,.13)");
      context.restore();
      context.strokeStyle = "rgba(222,213,198,.16)";
      context.lineWidth = 1;
      context.beginPath();
      context.moveTo(bedX + bedW * .1, bedY + height * .2);
      context.quadraticCurveTo(bedX + bedW * .24, bedY + height * .16, bedX + bedW * .38, bedY + height * .23);
      context.stroke();

      const plush = itemAt("plush", width, height);
      if (!foundFragments.has("plush")) {
        context.save();
        context.shadowColor = "rgba(0,0,0,.65)";
        context.shadowBlur = 7;
        context.fillStyle = "#62564f";
        context.beginPath();
        context.ellipse(plush.x, plush.y + height * .022, width * .025, height * .045, -.08, 0, Math.PI * 2);
        context.fill();
        context.beginPath();
        context.arc(plush.x, plush.y, height * .031, 0, Math.PI * 2);
        context.fill();
        context.beginPath();
        context.arc(plush.x - height * .022, plush.y - height * .022, height * .012, 0, Math.PI * 2);
        context.arc(plush.x + height * .022, plush.y - height * .022, height * .012, 0, Math.PI * 2);
        context.fill();
        context.fillStyle = "rgba(202,180,154,.54)";
        context.beginPath();
        context.arc(plush.x - height * .009, plush.y, 1.1, 0, Math.PI * 2);
        context.arc(plush.x + height * .009, plush.y, 1.1, 0, Math.PI * 2);
        context.fill();
        context.restore();
      }

      const cover = context.createLinearGradient(bedX, bedY + height * .25, bedX + bedW, bedY + height * .52);
      cover.addColorStop(0, "#555968");
      cover.addColorStop(.27, "#414653");
      cover.addColorStop(.6, "#323845");
      cover.addColorStop(1, "#252b35");
      trace([
        [bedX + bedW * .03, bedY + height * .28],
        [bedX + bedW * .34, bedY + height * .3],
        [bedX + bedW * .53, bedY + height * .25],
        [bedX + bedW * .98, bedY + height * .3],
        [bedX + bedW, bedY + height * .55],
        [bedX + bedW * .02, bedY + height * .55]
      ], cover);
      context.save();
      trace([
        [bedX + bedW * .03, bedY + height * .28],
        [bedX + bedW * .34, bedY + height * .3],
        [bedX + bedW * .53, bedY + height * .25],
        [bedX + bedW * .98, bedY + height * .3],
        [bedX + bedW, bedY + height * .55],
        [bedX + bedW * .02, bedY + height * .55]
      ], "rgba(0,0,0,0)");
      context.clip();
      for (let index = 0; index < 150; index++) {
        const x = bedX + random() * bedW;
        const y = bedY + height * (.28 + random() * .27);
        context.beginPath();
        context.moveTo(x, y);
        context.bezierCurveTo(x + 4, y - 3, x + 10, y + 3, x + 18, y + 1);
        context.strokeStyle = random() > .5 ? "rgba(205,209,211,.07)" : "rgba(4,8,14,.12)";
        context.lineWidth = random() * 1.3 + .3;
        context.stroke();
      }
      context.restore();
      context.strokeStyle = "rgba(202,207,207,.21)";
      context.lineWidth = 2;
      context.beginPath();
      context.moveTo(bedX + bedW * .06, bedY + height * .3);
      context.bezierCurveTo(bedX + bedW * .19, bedY + height * .34, bedX + bedW * .24, bedY + height * .43, bedX + bedW * .34, bedY + height * .47);
      context.moveTo(bedX + bedW * .48, bedY + height * .29);
      context.bezierCurveTo(bedX + bedW * .58, bedY + height * .35, bedX + bedW * .54, bedY + height * .43, bedX + bedW * .68, bedY + height * .49);
      context.stroke();

      const nightstandX = width * .07;
      const nightstandY = height * .61;
      const nightstandW = width * .28;
      const nightstandH = height * .26;
      const wood = context.createLinearGradient(nightstandX, nightstandY, nightstandX + nightstandW, nightstandY);
      wood.addColorStop(0, "#352c2b");
      wood.addColorStop(.25, "#5a463d");
      wood.addColorStop(.53, "#463a37");
      wood.addColorStop(1, "#27272e");
      context.save();
      context.shadowColor = "rgba(0,0,0,.72)";
      context.shadowBlur = 18;
      context.shadowOffsetY = 9;
      roundedRect(nightstandX + width * .012, nightstandY + height * .04, nightstandW - width * .024, nightstandH - height * .035, 4, wood, "rgba(198,157,117,.2)");
      context.restore();
      const tabletop = context.createLinearGradient(0, nightstandY, 0, nightstandY + height * .035);
      tabletop.addColorStop(0, "#81705c");
      tabletop.addColorStop(.4, "#57483e");
      tabletop.addColorStop(1, "#292930");
      roundedRect(nightstandX, nightstandY, nightstandW, height * .04, 3, tabletop, "rgba(218,188,144,.19)");
      const lampX = width * .185;
      const lampBaseY = nightstandY + height * .006;
      context.save();
      context.shadowColor = "rgba(249,202,130,.42)";
      context.shadowBlur = 13;
      context.fillStyle = "#947957";
      context.beginPath();
      context.ellipse(lampX, lampBaseY, width * .035, height * .012, 0, 0, Math.PI * 2);
      context.fill();
      context.fillStyle = "#c0a37a";
      context.fillRect(lampX - width * .004, nightstandY - height * .105, width * .008, height * .11);
      const shade = context.createLinearGradient(lampX - width * .04, 0, lampX + width * .04, 0);
      shade.addColorStop(0, "#8c7054");
      shade.addColorStop(.5, "#c2a274");
      shade.addColorStop(1, "#755d4a");
      trace([
        [lampX - width * .045, nightstandY - height * .105],
        [lampX - width * .03, nightstandY - height * .19],
        [lampX + width * .03, nightstandY - height * .19],
        [lampX + width * .045, nightstandY - height * .105]
      ], shade, "rgba(255,230,184,.19)");
      context.restore();
      context.strokeStyle = "rgba(211,173,130,.13)";
      for (let index = 0; index < 7; index++) {
        const y = nightstandY + height * (.08 + index * .019);
        context.beginPath();
        context.moveTo(nightstandX + width * .035, y);
        context.bezierCurveTo(nightstandX + nightstandW * .35, y - 1, nightstandX + nightstandW * .65, y + 1, nightstandX + nightstandW * .26, y);
        context.stroke();
      }
      roundedRect(nightstandX + nightstandW * .12, nightstandY + height * .1, nightstandW * .76, height * .1, 3, "rgba(9,12,17,.15)", "rgba(196,158,121,.13)");
      context.fillStyle = "#a58b68";
      context.beginPath();
      context.arc(nightstandX + nightstandW * .5, nightstandY + height * .15, 2, 0, Math.PI * 2);
      context.fill();
      context.fillStyle = "#27272d";
      context.fillRect(nightstandX + nightstandW * .12, nightstandY + nightstandH - height * .025, width * .018, height * .035);
      context.fillRect(nightstandX + nightstandW * .8, nightstandY + nightstandH - height * .025, width * .018, height * .035);

      const book = itemAt("book", width, height);
      if (!foundFragments.has("book")) {
        context.save();
        context.translate(book.x, book.y);
        context.rotate(-.08);
        context.shadowColor = "rgba(0,0,0,.5)";
        context.shadowBlur = 4;
        roundedRect(-width * .045, -height * .018, width * .09, height * .036, 2, "#343740", "rgba(194,177,150,.25)");
        context.fillStyle = "rgba(189,175,149,.27)";
        context.fillRect(-width * .038, -height * .014, width * .076, height * .002);
        context.restore();
      }
      const mug = itemAt("mug", width, height);
      if (!foundFragments.has("mug")) {
        context.save();
        context.shadowColor = "rgba(0,0,0,.48)";
        context.shadowBlur = 5;
        context.fillStyle = "#77746f";
        context.beginPath();
        context.ellipse(mug.x, mug.y, width * .018, height * .014, 0, 0, Math.PI * 2);
        context.fill();
        context.fillStyle = "#383a3f";
        context.beginPath();
        context.ellipse(mug.x, mug.y - 2, width * .015, height * .01, 0, 0, Math.PI * 2);
        context.fill();
        context.beginPath();
        context.arc(mug.x + width * .017, mug.y, height * .009, -Math.PI * .5, Math.PI * .5);
        context.strokeStyle = "#77746f";
        context.lineWidth = 2;
        context.stroke();
        context.restore();
      }

      const rose = itemAt("rose", width, height);
      if (!foundFragments.has("rose")) {
        context.save();
        context.shadowColor = "rgba(0,0,0,.58)";
        context.shadowBlur = 6;
        context.strokeStyle = "#4b5a4a";
        context.lineWidth = 2;
        context.beginPath();
        context.moveTo(rose.x, rose.y - height * .01);
        context.quadraticCurveTo(rose.x + 2, rose.y - height * .02, rose.x + 1, rose.y - height * .03);
        context.stroke();
        context.fillStyle = "#46554a";
        context.beginPath();
        context.ellipse(rose.x - 4, rose.y - 2, 5, 2, -.5, 0, Math.PI * 2);
        context.ellipse(rose.x + 4, rose.y - 5, 5, 2, .5, 0, Math.PI * 2);
        context.fill();
        const petalColors = ["#643b43", "#75454b", "#53333d", "#8a5755"];
        for (let index = 0; index < 5; index++) {
          context.beginPath();
          context.ellipse(rose.x + Math.cos(index * Math.PI * .4) * 4, rose.y - height * .032 + Math.sin(index * Math.PI * .4) * 3, 4.5, 3.2, index * .6, 0, Math.PI * 2);
          context.fillStyle = petalColors[index % petalColors.length];
          context.fill();
        }
        context.beginPath();
        context.arc(rose.x, rose.y - height * .032, 2.2, 0, Math.PI * 2);
        context.fillStyle = "#c09469";
        context.fill();
        context.restore();
      }

      const perfume = itemAt("perfume", width, height);
      if (!foundFragments.has("perfume")) {
        context.save();
        context.shadowColor = "rgba(0,0,0,.6)";
        context.shadowBlur = 5;
        roundedRect(perfume.x - width * .012, perfume.y - height * .035, width * .024, height * .055, 3, "rgba(133,139,138,.42)", "rgba(215,218,207,.21)");
        roundedRect(perfume.x - width * .005, perfume.y - height * .044, width * .01, height * .012, 1, "#817768");
        context.restore();
      }

      const bracelet = itemAt("bracelet", width, height);
      if (!foundFragments.has("bracelet")) {
        context.save();
        context.translate(bracelet.x, bracelet.y);
        context.rotate(-.1);
        context.beginPath();
        context.ellipse(0, 0, width * .034, height * .018, 0, 0, Math.PI * 2);
        context.strokeStyle = "rgba(177,160,129,.63)";
        context.lineWidth = 2;
        context.shadowColor = "rgba(229,201,148,.3)";
        context.shadowBlur = 4;
        context.stroke();
        context.setLineDash([2, 4]);
        context.strokeStyle = "rgba(203,188,154,.38)";
        context.lineWidth = 1;
        context.stroke();
        context.setLineDash([]);
        context.restore();
      }

      const sock = itemAt("sock", width, height);
      if (!foundFragments.has("sock")) {
        context.save();
        context.translate(sock.x, sock.y);
        context.rotate(.38);
        context.fillStyle = "#454750";
        context.shadowColor = "rgba(0,0,0,.5)";
        context.shadowBlur = 4;
        context.beginPath();
        context.moveTo(-width * .012, -height * .023);
        context.lineTo(width * .012, -height * .023);
        context.lineTo(width * .01, height * .008);
        context.lineTo(width * .025, height * .02);
        context.quadraticCurveTo(width * .025, height * .032, width * .01, height * .031);
        context.lineTo(-width * .014, height * .02);
        context.closePath();
        context.fill();
        context.restore();
      }

      const sweater = itemAt("sweater", width, height);
      if (!foundFragments.has("sweater")) {
        context.save();
        context.translate(sweater.x, sweater.y);
        context.rotate(.16);
        context.shadowColor = "rgba(0,0,0,.55)";
        context.shadowBlur = 10;
        context.shadowOffsetY = 4;
        const knit = context.createLinearGradient(-width * .06, -height * .04, width * .05, height * .05);
        knit.addColorStop(0, "#56545a");
        knit.addColorStop(.45, "#3b3e47");
        knit.addColorStop(1, "#292e38");
        trace([
          [-width * .058, -height * .025],
          [-width * .03, -height * .052],
          [-width * .014, -height * .032],
          [width * .016, -height * .038],
          [width * .042, -height * .055],
          [width * .06, -height * .028],
          [width * .043, height * .042],
          [-width * .048, height * .044]
        ], knit, "rgba(201,197,184,.13)");
        context.shadowBlur = 0;
        context.strokeStyle = "rgba(201,197,184,.13)";
        context.lineWidth = 1;
        for (let index = -3; index <= 3; index++) {
          context.beginPath();
          context.moveTo(index * 5, -height * .027);
          context.quadraticCurveTo(index * 5 - 4, 0, index * 5 + 2, height * .032);
          context.stroke();
        }
        context.restore();
      }

      dustParticles = Array.from({ length: 55 }, () => ({
        x: width * (.12 + random() * .35),
        y: height * (.43 + random() * .36),
        size: random() * 1.2 + .4,
        phase: random() * Math.PI * 2,
        speed: random() * .008 + .003
      }));
      const vignette = context.createRadialGradient(width * .5, height * .45, height * .18, width * .5, height * .5, width * .75);
      vignette.addColorStop(0, "rgba(2,5,12,0)");
      vignette.addColorStop(1, "rgba(2,5,12,.48)");
      context.fillStyle = vignette;
      context.fillRect(0, 0, width, height);
    };
    const animateDust = (time) => {
      const bounds = scene.getBoundingClientRect();
      if (!bounds.width || !bounds.height) return;
      dustContext.clearRect(0, 0, bounds.width, bounds.height);
      dustParticles.forEach((particle) => {
        const beamTop = bounds.height * .43;
        const beamHeight = bounds.height * .42;
        const drift = (time * particle.speed) % beamHeight;
        const y = beamTop + (particle.y - beamTop - drift + beamHeight) % beamHeight;
        const x = particle.x + Math.sin(time * .00035 + particle.phase) * 2;
        const shimmer = .28 + (Math.sin(time * .0012 + particle.phase) + 1) * .22;
        dustContext.beginPath();
        dustContext.arc(x, y, particle.size, 0, Math.PI * 2);
        dustContext.fillStyle = `rgba(246,211,154,${shimmer})`;
        dustContext.shadowColor = "rgba(246,211,154,.65)";
        dustContext.shadowBlur = 5;
        dustContext.fill();
      });
      dustContext.shadowBlur = 0;
      requestAnimationFrame(animateDust);
    };
    const resizeObserver = new ResizeObserver(drawRoom);
    resizeObserver.observe(scene);
    requestAnimationFrame(animateDust);
    const moveFlashlight = (event) => {
      const bounds = scene.getBoundingClientRect();
      scene.style.setProperty("--light-x", `${((event.clientX - bounds.left) / bounds.width) * 100}%`);
      scene.style.setProperty("--light-y", `${((event.clientY - bounds.top) / bounds.height) * 100}%`);
      scene.classList.add("is-searching");
    };
    scene.addEventListener("pointermove", moveFlashlight);
    scene.addEventListener("pointerdown", moveFlashlight);
    scene.addEventListener("pointerleave", () => scene.classList.remove("is-searching"));

    config.items.forEach((item) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `room-object ${item.kind === "memory" ? "is-memory" : "is-decoy"} object-${item.id}`;
      button.style.left = item.left;
      button.style.top = item.top;
      button.setAttribute("aria-label", `Examiner : ${item.label}`);
      button.addEventListener("click", () => {
        if (button.disabled) return;
        if (item.kind === "decoy") {
          feedback.textContent = item.foundText;
          return;
        }
        if (foundFragments.has(item.id)) return;
        foundFragments.add(item.id);
        button.classList.add("is-found");
        button.disabled = true;
        drawRoom();
        feedback.textContent = item.foundText;
        if (foundFragments.size === memories.length) {
          feedback.textContent = "Tout est retrouvé… il ne reste qu'à découvrir la lettre.";
          completeMonth();
        }
      });
      scene.append(button);
    });
  }

  function normalizeAnswer(value) {
    return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("fr").replace(/[’']/g, " ").replace(/[^\p{L}\p{N}\s]/gu, " ").replace(/\s+/g, " ").trim();
  }

  function isCloseAnswer(value, expected) {
    const threshold = 2;
    if (Math.abs(value.length - expected.length) > threshold) return false;
    let previousRow = Array.from({ length: expected.length + 1 }, (_, index) => index);
    for (let rowIndex = 1; rowIndex <= value.length; rowIndex += 1) {
      const currentRow = [rowIndex];
      for (let columnIndex = 1; columnIndex <= expected.length; columnIndex += 1) {
        const substitutionCost = value[rowIndex - 1] === expected[columnIndex - 1] ? 0 : 1;
        currentRow[columnIndex] = Math.min(
          currentRow[columnIndex - 1] + 1,
          previousRow[columnIndex] + 1,
          previousRow[columnIndex - 1] + substitutionCost
        );
      }
      previousRow = currentRow;
    }
    return previousRow[expected.length] <= threshold;
  }

  function renderRiddle(config) {
    const fields = config.fields?.length ? config.fields : [{
      label: "Ta réponse",
      placeholder: "Ta réponse…",
      answers: config.answers
    }];
    const isMultiField = fields.length > 1;
    const solvedFields = new Set();
    const acceptedAnswers = fields.map((field) => field.answers.map(normalizeAnswer));
    gameContent.innerHTML = `<div class="game-panel riddle-card"><div class="chest-icon" aria-hidden="true">♧</div><h3></h3><form class="answer-form riddle-form"><div class="riddle-fields${isMultiField ? " is-multiple" : " is-single"}"></div><button class="button button-primary" type="submit">Valider <span aria-hidden="true">↗</span></button></form><p class="feedback" aria-live="polite"></p><p class="hint-copy" aria-live="polite"></p></div>`;
    $(".riddle-card h3").textContent = config.question;
    const form = $(".riddle-form");
    const fieldInputs = [];
    const fieldStatuses = [];
    fields.forEach((field, index) => {
      const wrapper = document.createElement("div");
      wrapper.className = "riddle-field";
      const label = document.createElement("label");
      label.className = "riddle-field-label";
      label.htmlFor = `riddle-answer-${index + 1}`;
      label.textContent = field.label;
      const input = document.createElement("input");
      input.id = label.htmlFor;
      input.className = "answer-input riddle-input";
      input.type = "text";
      input.autocomplete = "off";
      input.placeholder = field.placeholder;
      input.setAttribute("aria-describedby", `riddle-status-${index + 1}`);
      const status = document.createElement("span");
      status.id = `riddle-status-${index + 1}`;
      status.className = "riddle-field-status";
      status.setAttribute("aria-live", "polite");
      input.addEventListener("input", () => {
        if (solvedFields.has(index)) return;
        input.classList.remove("is-incorrect");
        status.classList.remove("is-incorrect");
        status.textContent = solvedFields.size > 0 ? "Encore à trouver" : "";
      });
      fieldInputs.push(input);
      fieldStatuses.push(status);
      wrapper.append(label, input, status);
      $(".riddle-fields").append(wrapper);
    });
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      let hasUnsolvedFields = false;
      fieldInputs.forEach((input, index) => {
        if (solvedFields.has(index)) return;
        const answer = normalizeAnswer(input.value);
        if (answer && acceptedAnswers[index].includes(answer)) {
          solvedFields.add(index);
          input.disabled = true;
          input.classList.remove("is-incorrect");
          input.classList.add("is-correct");
          fieldStatuses[index].classList.remove("is-incorrect");
          fieldStatuses[index].classList.add("is-correct");
          fieldStatuses[index].textContent = "Trouvé";
          return;
        }
        hasUnsolvedFields = true;
        input.classList.toggle("is-incorrect", Boolean(answer));
        fieldStatuses[index].classList.toggle("is-incorrect", Boolean(answer));
        fieldStatuses[index].textContent = answer ? "À corriger" : "Encore à trouver";
      });
      const feedback = $(".feedback");
      if (solvedFields.size === fields.length) {
        feedback.textContent = isMultiField ? "Les deux cadeaux sont retrouvés, le coffret s'ouvre…" : "Le coffret s'ouvre…";
        feedback.classList.remove("is-partial");
        feedback.classList.add("is-correct");
        completeMonth();
        return;
      }
      if (hasUnsolvedFields) {
        attempts += 1;
        feedback.classList.remove("is-correct");
        feedback.classList.toggle("is-partial", solvedFields.size > 0);
        if (solvedFields.size > 0) {
          feedback.textContent = "Un cadeau est trouvé. L'autre reste à trouver.";
        } else {
          feedback.textContent = isMultiField
            ? "Les deux réponses sont encore à trouver."
            : "Ce n'est pas tout à fait ça… essaie encore.";
        }
        if (attempts >= config.hintAfter) $(".hint-copy").textContent = config.hint;
      }
      fieldInputs.find((input, index) => !solvedFields.has(index))?.focus();
    });
  }

  const DIRECTIONS = {
    ArrowUp: [0, -1], w: [0, -1], W: [0, -1], z: [0, -1], Z: [0, -1], KeyW: [0, -1], KeyZ: [0, -1],
    ArrowDown: [0, 1], s: [0, 1], S: [0, 1], KeyS: [0, 1],
    ArrowLeft: [-1, 0], a: [-1, 0], A: [-1, 0], q: [-1, 0], Q: [-1, 0], KeyA: [-1, 0], KeyQ: [-1, 0],
    ArrowRight: [1, 0], d: [1, 0], D: [1, 0], KeyD: [1, 0]
  };

  function renderMaze(config) {
    gameContent.innerHTML = `<div class="game-panel maze-panel"><div class="maze-toolbar"><div class="maze-shard-count" aria-live="polite">Éclats : 0/3</div><button class="maze-fog-toggle" type="button" aria-pressed="true">Brouillard : ON</button></div><canvas id="maze-canvas" width="640" height="640" tabindex="0" role="application" aria-label="Labyrinthe nocturne. Utilise les flèches, WASD ou ZQSD, ou glisse dans le labyrinthe." aria-describedby="maze-instructions maze-feedback"></canvas><p id="maze-feedback" class="maze-feedback" aria-live="polite">La lumière dorée cherche son chemin vers le cœur.</p><p id="maze-instructions" class="maze-instructions">Flèches, WASD ou ZQSD pour avancer · Clique dans une direction ou glisse pour guider la lumière.</p><div class="maze-mobile-controls" aria-label="Contrôles du labyrinthe"><button type="button" data-move="ArrowUp" aria-label="Haut">↑</button><button type="button" data-move="ArrowLeft" aria-label="Gauche">←</button><button type="button" data-move="ArrowDown" aria-label="Bas">↓</button><button type="button" data-move="ArrowRight" aria-label="Droite">→</button></div></div>`;
    const canvas = $("#maze-canvas");
    const context = canvas.getContext("2d");
    if (!context) {
      showToast("Le canvas n'est pas disponible dans ce navigateur.");
      return;
    }
    const maze = config.map.map((row) => [...row]);
    const height = maze.length;
    const width = maze[0]?.length ?? 0;
    const findCell = (marker) => {
      for (let y = 0; y < height; y++) {
        const x = maze[y].indexOf(marker);
        if (x !== -1) return { x, y };
      }
      return null;
    };
    const start = findCell("S");
    const exit = findCell("E");
    const shardCells = [];
    maze.forEach((row, y) => row.forEach((cell, x) => {
      if (cell === "*") shardCells.push({ x, y });
    }));
    if (!width || maze.some((row) => row.length !== width) || !start || !exit || shardCells.length !== 3) {
      showToast("La carte du labyrinthe est invalide.");
      return;
    }

    const tile = canvas.width / width;
    const terrain = document.createElement("canvas");
    terrain.width = canvas.width;
    terrain.height = canvas.height;
    const terrainContext = terrain.getContext("2d");
    const fogCanvas = document.createElement("canvas");
    fogCanvas.width = canvas.width;
    fogCanvas.height = canvas.height;
    const fogContext = fogCanvas.getContext("2d");
    if (!terrainContext || !fogContext) {
      showToast("Le rendu du labyrinthe n'est pas disponible dans ce navigateur.");
      return;
    }
    let player = { ...start };
    let visualX = start.x;
    let visualY = start.y;
    let movement = null;
    let queuedMoves = [];
    let particles = [];
    let collectedShards = new Set();
    let visibleCells = [];
    let bumpStarted = -Infinity;
    let bumpDirection = [0, 0];
    let lastParticleAt = 0;
    let fogEnabled = true;
    let won = false;
    const feedback = $("#maze-feedback");
    const shardCounter = $(".maze-shard-count");
    const fogToggle = $(".maze-fog-toggle");
    const animationDuration = 145;
    const visibilityRadius = 5.2;

    const drawHeart = (target, x, y, size, color, alpha) => {
      target.save();
      target.globalAlpha = alpha;
      target.fillStyle = color;
      target.beginPath();
      target.moveTo(x, y + size * .42);
      target.bezierCurveTo(x - size * .58, y + size * .02, x - size * .48, y - size * .54, x, y - size * .2);
      target.bezierCurveTo(x + size * .48, y - size * .54, x + size * .58, y + size * .02, x, y + size * .42);
      target.closePath();
      target.fill();
      target.restore();
    };
    const drawTerrain = () => {
      terrainContext.fillStyle = "#070b14";
      terrainContext.fillRect(0, 0, terrain.width, terrain.height);
      maze.forEach((row, y) => row.forEach((cell, x) => {
        const px = x * tile;
        const py = y * tile;
        if (cell === "#") {
          const wall = terrainContext.createLinearGradient(px, py, px + tile, py + tile);
          wall.addColorStop(0, "#111b2b");
          wall.addColorStop(.28, "#0a111d");
          wall.addColorStop(1, "#050a12");
          terrainContext.fillStyle = wall;
          terrainContext.fillRect(px + 1, py + 1, tile - 2, tile - 2);
          terrainContext.strokeStyle = "rgba(119,151,190,.24)";
          terrainContext.lineWidth = 1;
          terrainContext.strokeRect(px + 1.5, py + 1.5, tile - 3, tile - 3);
          terrainContext.beginPath();
          terrainContext.moveTo(px + tile * .18, py + tile * .2);
          terrainContext.lineTo(px + tile * .82, py + tile * .2);
          terrainContext.strokeStyle = "rgba(218,231,247,.08)";
          terrainContext.stroke();
          terrainContext.fillStyle = "rgba(0,0,0,.17)";
          terrainContext.fillRect(px + tile * .12, py + tile * .84, tile * .76, tile * .08);
        } else {
          const floor = terrainContext.createLinearGradient(px, py, px + tile, py + tile);
          floor.addColorStop(0, "#293b50");
          floor.addColorStop(.55, "#203147");
          floor.addColorStop(1, "#17263a");
          terrainContext.fillStyle = floor;
          terrainContext.fillRect(px, py, tile, tile);
          terrainContext.strokeStyle = "rgba(144,178,211,.13)";
          terrainContext.strokeRect(px + .5, py + .5, tile - 1, tile - 1);
          if ((x * 7 + y * 13) % 5 === 0) {
            terrainContext.fillStyle = "rgba(219,231,245,.2)";
            terrainContext.fillRect(px + tile * .38, py + tile * .63, 2, 2);
          }
        }
      }));
      const exitX = (exit.x + .5) * tile;
      const exitY = (exit.y + .5) * tile;
      const heartGlow = terrainContext.createRadialGradient(exitX, exitY, tile * .1, exitX, exitY, tile * 2.8);
      heartGlow.addColorStop(0, "rgba(244,114,182,.18)");
      heartGlow.addColorStop(1, "rgba(244,114,182,0)");
      terrainContext.fillStyle = heartGlow;
      terrainContext.fillRect(exitX - tile * 3, exitY - tile * 3, tile * 6, tile * 6);
      drawHeart(terrainContext, exitX, exitY, tile * .55, "#f472b6", .22);
    };
    const hasLineOfSight = (x0, y0, x1, y1) => {
      let x = x0;
      let y = y0;
      const dx = Math.abs(x1 - x0);
      const dy = Math.abs(y1 - y0);
      const sx = x0 < x1 ? 1 : -1;
      const sy = y0 < y1 ? 1 : -1;
      let error = dx - dy;
      while (true) {
        if (x === x1 && y === y1) return true;
        if ((x !== x0 || y !== y0) && maze[y][x] === "#") return false;
        const doubledError = error * 2;
        if (doubledError > -dy) {
          error -= dy;
          x += sx;
        }
        if (doubledError < dx) {
          error += dx;
          y += sy;
        }
      }
    };
    const updateVisibility = () => {
      visibleCells = [];
      const minX = Math.max(0, Math.floor(player.x - visibilityRadius));
      const maxX = Math.min(width - 1, Math.ceil(player.x + visibilityRadius));
      const minY = Math.max(0, Math.floor(player.y - visibilityRadius));
      const maxY = Math.min(height - 1, Math.ceil(player.y + visibilityRadius));
      for (let y = minY; y <= maxY; y++) {
        for (let x = minX; x <= maxX; x++) {
          if (Math.hypot(x - player.x, y - player.y) <= visibilityRadius && hasLineOfSight(player.x, player.y, x, y)) {
            visibleCells.push({ x, y });
          }
        }
      }
    };
    const drawShard = (target, x, y, time) => {
      const px = (x + .5) * tile;
      const py = (y + .5) * tile;
      const distance = Math.hypot(x - visualX, y - visualY);
      const proximity = 1 - Math.min(distance / visibilityRadius, 1);
      const pulse = .84 + Math.sin(time * .004 + x * 2 + y) * .12;
      target.save();
      target.globalAlpha = pulse * (.72 + proximity * .28);
      target.shadowColor = "#ffe08a";
      target.shadowBlur = tile * (.4 + proximity * .8);
      target.fillStyle = "#fff0b2";
      target.beginPath();
      target.moveTo(px, py - tile * .24);
      target.lineTo(px + tile * .14, py);
      target.lineTo(px, py + tile * .24);
      target.lineTo(px - tile * .14, py);
      target.closePath();
      target.fill();
      target.restore();
    };
    const draw = (time) => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(terrain, 0, 0);
      shardCells.forEach(({ x, y }, index) => {
        if (!collectedShards.has(index)) drawShard(context, x, y, time);
      });

      if (fogEnabled) {
        fogContext.globalCompositeOperation = "source-over";
        fogContext.clearRect(0, 0, canvas.width, canvas.height);
        fogContext.fillStyle = "#03060f";
        fogContext.fillRect(0, 0, canvas.width, canvas.height);
        fogContext.save();
        fogContext.globalCompositeOperation = "destination-out";
        fogContext.beginPath();
        visibleCells.forEach(({ x, y }) => fogContext.rect(x * tile, y * tile, tile, tile));
        fogContext.clip();
        const lightX = (visualX + .5) * tile;
        const lightY = (visualY + .5) * tile;
        const light = fogContext.createRadialGradient(lightX, lightY, tile * .22, lightX, lightY, tile * visibilityRadius);
        light.addColorStop(0, "rgba(0,0,0,.98)");
        light.addColorStop(.18, "rgba(0,0,0,.91)");
        light.addColorStop(.42, "rgba(0,0,0,.72)");
        light.addColorStop(.7, "rgba(0,0,0,.38)");
        light.addColorStop(.9, "rgba(0,0,0,.1)");
        light.addColorStop(1, "rgba(0,0,0,0)");
        fogContext.fillStyle = light;
        fogContext.fillRect(0, 0, canvas.width, canvas.height);
        fogContext.restore();
        context.drawImage(fogCanvas, 0, 0);
      }

      const exitX = (exit.x + .5) * tile;
      const exitY = (exit.y + .5) * tile;
      context.save();
      context.globalCompositeOperation = "screen";
      const heartVisible = !fogEnabled || collectedShards.size === shardCells.length;
      const heartAlpha = heartVisible ? .72 : .14;
      const heartGlow = context.createRadialGradient(exitX, exitY, tile * .2, exitX, exitY, tile * (heartVisible ? 3.2 : 1.8));
      heartGlow.addColorStop(0, `rgba(244,114,182,${heartAlpha * .4})`);
      heartGlow.addColorStop(1, "rgba(244,114,182,0)");
      context.fillStyle = heartGlow;
      context.fillRect(exitX - tile * 3.5, exitY - tile * 3.5, tile * 7, tile * 7);
      drawHeart(context, exitX, exitY, tile * .55, "#f472b6", heartAlpha);
      context.restore();

      const bumpProgress = (time - bumpStarted) / 220;
      const bump = bumpProgress >= 0 && bumpProgress <= 1
        ? Math.sin(bumpProgress * Math.PI) * tile * .15
        : 0;
      const playerX = (visualX + .5 + bumpDirection[0] * bump / tile) * tile;
      const playerY = (visualY + .5 + bumpDirection[1] * bump / tile) * tile;
      particles = particles.filter((particle) => time - particle.born < particle.lifetime);
      particles.forEach((particle) => {
        const life = (time - particle.born) / particle.lifetime;
        context.globalAlpha = (1 - life) * .55;
        context.fillStyle = "#f5d992";
        context.shadowColor = "#f8d987";
        context.shadowBlur = tile * .22;
        context.beginPath();
        context.arc((particle.x + .5) * tile, (particle.y + .5) * tile, tile * (.035 + life * .025), 0, Math.PI * 2);
        context.fill();
      });
      context.globalAlpha = 1;
      context.shadowColor = "#f6ca68";
      context.shadowBlur = tile * .85;
      const playerGlow = context.createRadialGradient(playerX, playerY, tile * .04, playerX, playerY, tile * 2.1);
      playerGlow.addColorStop(0, "rgba(255,232,158,.9)");
      playerGlow.addColorStop(.14, "rgba(255,211,105,.6)");
      playerGlow.addColorStop(.45, "rgba(250,177,52,.22)");
      playerGlow.addColorStop(1, "rgba(250,177,52,0)");
      context.fillStyle = playerGlow;
      context.beginPath();
      context.arc(playerX, playerY, tile * 2.1, 0, Math.PI * 2);
      context.fill();
      context.shadowBlur = tile * .24;
      context.fillStyle = "#fff1bd";
      context.beginPath();
      context.arc(playerX, playerY, tile * .14, 0, Math.PI * 2);
      context.fill();
      context.shadowBlur = 0;
    };
    const hitWall = (direction, time) => {
      bumpStarted = time;
      bumpDirection = direction;
      feedback.textContent = "Le mur bloque le passage.";
    };
    const beginMove = (direction, time) => {
      const [dx, dy] = direction;
      const x = player.x + dx;
      const y = player.y + dy;
      if (!maze[y] || !maze[y][x] || maze[y][x] === "#") {
        hitWall(direction, time);
        return false;
      }
      if (maze[y][x] === "E" && collectedShards.size < shardCells.length) {
        hitWall(direction, time);
        feedback.textContent = `Le cœur attend encore ${shardCells.length - collectedShards.size} éclat${shardCells.length - collectedShards.size > 1 ? "s" : ""}.`;
        return false;
      }
      player = { x, y };
      updateVisibility();
      movement = {
        fromX: visualX,
        fromY: visualY,
        toX: x,
        toY: y,
        startedAt: time
      };
      return true;
    };
    const move = (direction) => {
      if (won) return;
      const time = performance.now();
      if (movement) {
        if (queuedMoves.length < 4) queuedMoves.push(direction);
        return;
      }
      beginMove(direction, time);
    };
    const keydown = (event) => {
      const direction = DIRECTIONS[event.key] || DIRECTIONS[event.code];
      if (!direction) return;
      event.preventDefault();
      move(direction);
    };
    const pointerPosition = (event) => {
      const bounds = canvas.getBoundingClientRect();
      return { bounds, x: event.clientX - bounds.left, y: event.clientY - bounds.top };
    };
    let pointerStart = null;
    canvas.addEventListener("pointerdown", (event) => {
      if (event.button !== undefined && event.button !== 0) return;
      event.preventDefault();
      canvas.focus({ preventScroll: true });
      canvas.setPointerCapture(event.pointerId);
      const point = pointerPosition(event);
      pointerStart = { x: point.x, y: point.y, moved: false };
    });
    canvas.addEventListener("pointermove", (event) => {
      if (!pointerStart) return;
      const point = pointerPosition(event);
      const threshold = Math.max(12, point.bounds.width / width * .62);
      const dx = point.x - pointerStart.x;
      const dy = point.y - pointerStart.y;
      if (Math.max(Math.abs(dx), Math.abs(dy)) < threshold) return;
      if (Math.abs(dx) >= Math.abs(dy)) {
        const sign = Math.sign(dx);
        const steps = Math.min(4, Math.floor(Math.abs(dx) / threshold));
        for (let step = 0; step < steps; step++) move([sign, 0]);
        pointerStart.x += sign * steps * threshold;
      } else {
        const sign = Math.sign(dy);
        const steps = Math.min(4, Math.floor(Math.abs(dy) / threshold));
        for (let step = 0; step < steps; step++) move([0, sign]);
        pointerStart.y += sign * steps * threshold;
      }
      pointerStart.moved = true;
    });
    const finishPointer = (event) => {
      if (!pointerStart) return;
      if (!pointerStart.moved) {
        const point = pointerPosition(event);
        const playerPixelX = (visualX + .5) * point.bounds.width / width;
        const playerPixelY = (visualY + .5) * point.bounds.height / height;
        const dx = point.x - playerPixelX;
        const dy = point.y - playerPixelY;
        if (Math.max(Math.abs(dx), Math.abs(dy)) > point.bounds.width / width * .35) {
          move(Math.abs(dx) >= Math.abs(dy) ? [Math.sign(dx), 0] : [0, Math.sign(dy)]);
        }
      }
      pointerStart = null;
    };
    canvas.addEventListener("pointerup", finishPointer);
    canvas.addEventListener("pointercancel", () => { pointerStart = null; });
    $(".maze-mobile-controls").querySelectorAll("[data-move]").forEach((button) => {
      button.addEventListener("click", () => {
        canvas.focus({ preventScroll: true });
        move(DIRECTIONS[button.dataset.move]);
      });
    });
    fogToggle.addEventListener("click", () => {
      fogEnabled = !fogEnabled;
      fogToggle.setAttribute("aria-pressed", String(fogEnabled));
      fogToggle.textContent = `Brouillard : ${fogEnabled ? "ON" : "OFF"}`;
      feedback.textContent = fogEnabled
        ? "Le brouillard de guerre est activé."
        : "La carte entière est éclairée.";
    });
    const panel = $(".maze-panel");
    panel.addEventListener("keydown", keydown);

    const easeInOut = (value) => value < .5 ? 2 * value * value : 1 - ((-2 * value + 2) ** 2) / 2;
    const tick = (time) => {
      if (screens.game.hidden || activeMonth !== 2 || won) return;
      if (!movement && queuedMoves.length) beginMove(queuedMoves.shift(), time);
      if (movement) {
        const progress = Math.min(1, (time - movement.startedAt) / animationDuration);
        const eased = easeInOut(progress);
        visualX = movement.fromX + (movement.toX - movement.fromX) * eased;
        visualY = movement.fromY + (movement.toY - movement.fromY) * eased;
        if (time - lastParticleAt > 42) {
          particles.push({ x: visualX + (Math.random() - .5) * .16, y: visualY + (Math.random() - .5) * .16, born: time, lifetime: 360 });
          lastParticleAt = time;
        }
        if (progress === 1) {
          visualX = movement.toX;
          visualY = movement.toY;
          movement = null;
          const cell = maze[player.y][player.x];
          if (cell === "*") {
            const shardIndex = shardCells.findIndex((shard) => shard.x === player.x && shard.y === player.y);
            if (shardIndex !== -1 && !collectedShards.has(shardIndex)) {
              collectedShards.add(shardIndex);
              shardCounter.textContent = `Éclats : ${collectedShards.size}/${shardCells.length}`;
              feedback.textContent = collectedShards.size === shardCells.length
                ? "Les trois éclats s’assemblent. Le cœur peut maintenant être rejoint."
                : `Un éclat de souvenir retrouvé : ${collectedShards.size}/${shardCells.length}.`;
            }
          } else if (cell === "E" && collectedShards.size === shardCells.length) {
            won = true;
            queuedMoves = [];
            feedback.textContent = "Le cœur s’illumine.";
            completeMonth();
          }
        }
      }
      draw(time);
      requestAnimationFrame(tick);
    };

    drawTerrain();
    updateVisibility();
    requestAnimationFrame(tick);
    requestAnimationFrame(() => {
      if (!screens.game.hidden && activeMonth === 2) canvas.focus({ preventScroll: true });
    });
  }

  function renderMatches(config) {
    const pairs = config.pairs;
    const rightOrder = [...pairs.keys()].sort((a, b) => (a * 7 + 3) % 5 - (b * 7 + 3) % 5);
    gameContent.innerHTML = `<div class="game-panel match-panel"><p class="match-instructions">Choisis un indice à gauche, puis le souvenir qui lui correspond.</p><div class="match-board"><div class="match-column left-column" aria-label="Indices"></div><div class="match-column right-column" aria-label="Souvenirs"></div></div><p class="match-feedback" aria-live="polite">0 sur 4 paires retrouvées</p></div>`;
    pairs.forEach((pair, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "match-item";
      button.textContent = pair.left;
      button.dataset.pair = String(index);
      button.addEventListener("click", () => {
        if (matchedPairs.has(index)) return;
        selectedLeft = index;
        gameContent.querySelectorAll(".left-column .match-item").forEach((item) => item.classList.toggle("is-selected", Number(item.dataset.pair) === index));
        $(".match-feedback").textContent = "Maintenant, choisis le souvenir correspondant.";
      });
      $(".left-column").append(button);
    });
    rightOrder.forEach((index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "match-item";
      button.textContent = pairs[index].right;
      button.dataset.pair = String(index);
      button.addEventListener("click", () => {
        if (selectedLeft === null || button.disabled) return;
        if (selectedLeft === index) {
          matchedPairs.add(index);
          gameContent.querySelectorAll(`.match-item[data-pair="${index}"]`).forEach((item) => {
            item.classList.add("is-matched");
            item.disabled = true;
          });
          $(".match-feedback").textContent = `${matchedPairs.size} sur 4 paires retrouvées`;
          selectedLeft = null;
          if (matchedPairs.size === pairs.length) completeMonth();
        } else {
          $(".match-feedback").textContent = "Pas cette fois… essaie une autre paire.";
        }
        gameContent.querySelectorAll(".left-column .match-item").forEach((item) => item.classList.remove("is-selected"));
        selectedLeft = null;
      });
      $(".right-column").append(button);
    });
  }

  function renderStars(config) {
    starFieldResizeObserver?.disconnect();
    gameContent.innerHTML = `<div class="game-panel stars-panel"><p class="activity-kicker">La constellation attend son poème</p><p class="star-order-label">L'ordre à suivre</p><div class="star-order" aria-label="Séquence des six signes"></div><div class="shooting-star-field" role="group" aria-label="Étoiles filantes à cliquer dans l'ordre"><div class="starfield-nebula" aria-hidden="true"></div><div class="starfield-sparkles" aria-hidden="true"></div><div class="shooting-meteor-layer" aria-hidden="true"></div><svg class="star-constellation" aria-hidden="true" focusable="false"><path class="star-constellation-glow"></path><path class="star-constellation-line"></path><g class="star-constellation-nodes"></g></svg></div><p class="activity-feedback star-feedback" aria-live="polite">Repère les signes blancs et suis-les dans l'ordre de la constellation.</p><div class="star-progress" aria-label="Progression du poème"></div><div class="revealed-poem" hidden></div><button class="button button-primary game-finish-button star-finish" type="button" disabled>Garder ce poème ↗</button></div>`;
    const field = $(".shooting-star-field");
    const progress = $(".star-progress");
    const order = $(".star-order");
    const feedback = $(".star-feedback");
    const sparkleLayer = $(".starfield-sparkles");
    const meteorLayer = $(".shooting-meteor-layer");
    const constellation = $(".star-constellation");
    const constellationGlow = $(".star-constellation-glow");
    const constellationLine = $(".star-constellation-line");
    const constellationNodes = $(".star-constellation-nodes");
    const constellationPoints = [];
    const movingTargets = [];
    const decoyStars = [
      { sign: "•", name: "point" },
      { sign: "△", name: "triangle" },
      { sign: "×", name: "croix fine" },
      { sign: "☾", name: "croissant" },
      { sign: "∞", name: "infini" },
      { sign: "☆", name: "étoile vide" },
      { sign: "≋", name: "vagues" },
      { sign: "⊗", name: "cercle croisé" }
    ];

    for (let index = 0; index < 38; index += 1) {
      const sparkle = document.createElement("span");
      sparkle.className = "starfield-sparkle";
      sparkle.style.setProperty("--sparkle-x", `${(index * 47 + 13) % 100}%`);
      sparkle.style.setProperty("--sparkle-y", `${(index * 71 + 9) % 100}%`);
      sparkle.style.setProperty("--sparkle-delay", `${(index % 9) * -.43}s`);
      sparkle.style.setProperty("--sparkle-size", `${index % 7 === 0 ? 3 : 1 + index % 2}px`);
      sparkleLayer.append(sparkle);
    }

    for (let index = 0; index < 5; index += 1) {
      const meteor = document.createElement("span");
      meteor.className = "shooting-meteor";
      meteor.style.setProperty("--meteor-y", `${12 + index * 18}%`);
      meteor.style.setProperty("--meteor-angle", `${index % 2 ? -25 : -18}deg`);
      meteor.style.setProperty("--meteor-delay", `${-index * 1.04}s`);
      meteor.style.setProperty("--meteor-reduced-delay", `${-index * 2.08}s`);
      meteorLayer.append(meteor);
    }

    function updateStarRoutes(width, height) {
      movingTargets.forEach(({ element, route }) => {
        route.forEach((point, index) => {
          element.style.setProperty(`--flight-x${index}`, `${point.x * width}px`);
          element.style.setProperty(`--flight-y${index}`, `${point.y * height}px`);
        });
        const direction = route[1];
        const origin = route[0];
        const trailAngle = Math.atan2(
          (direction.y - origin.y) * height,
          (direction.x - origin.x) * width
        ) * 180 / Math.PI;
        element.style.setProperty("--star-trail-angle", `${trailAngle}deg`);
      });
    }

    function updateConstellation() {
      const width = field.clientWidth;
      const height = field.clientHeight;
      updateStarRoutes(width, height);
      constellation.setAttribute("viewBox", `0 0 ${width} ${height}`);
      const path = constellationPoints.map((point, index) => `${index ? "L" : "M"} ${point.x * width} ${point.y * height}`).join(" ");
      constellationGlow.setAttribute("d", path);
      constellationLine.setAttribute("d", path);
      constellationNodes.replaceChildren();
      constellationPoints.forEach((point) => {
        const node = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        node.setAttribute("cx", String(point.x * width));
        node.setAttribute("cy", String(point.y * height));
        node.setAttribute("r", "4");
        node.setAttribute("class", "star-constellation-node");
        constellationNodes.append(node);
      });
    }

    starFieldResizeObserver = new ResizeObserver(updateConstellation);
    starFieldResizeObserver.observe(field);

    config.sequence.forEach((starId, index) => {
      const starConfig = config.stars.find((star) => star.id === starId);
      if (!starConfig) return;
      const orderDot = document.createElement("span");
      orderDot.className = `star-order-dot${index === 0 ? " is-next" : ""}`;
      orderDot.textContent = starConfig.sign;
      orderDot.setAttribute("aria-label", `${index + 1} : ${starConfig.name}, signe ${starConfig.sign}`);
      order.append(orderDot);
    });

    function createRoute(index) {
      const seed = index + 1;
      const phase = seed * 1.21;
      const centerX = 50 + Math.sin(seed * 2.7) * 6;
      const centerY = 50 + Math.cos(seed * 1.9) * 5;
      const radiusX = 32 + seed % 3 * 2;
      const radiusY = 28 + seed % 4 * 2;
      return Array.from({ length: 5 }, (_, step) => {
        const angle = phase + step * Math.PI * .48;
        const x = centerX + Math.cos(angle) * radiusX + Math.sin(angle * 1.55 + phase) * 6;
        const y = centerY + Math.sin(angle * .82 + phase) * radiusY + Math.cos(angle * 1.4 - phase) * 6;
        return {
          x: Math.max(8, Math.min(92, x)),
          y: Math.max(8, Math.min(92, y))
        };
      });
    }

    function updateNextStar() {
      order.querySelectorAll(".star-order-dot").forEach((dot, index) => {
        dot.classList.toggle("is-next", index === foundFragments.size);
      });
      movingTargets.forEach(({ element }) => {
        element.classList.toggle("is-next", Number(element.dataset.sequenceIndex) === foundFragments.size);
      });
    }

    function createTarget(starConfig, sequenceIndex, index) {
      const isDecoy = sequenceIndex === null;
      const button = document.createElement("button");
      button.type = "button";
      button.className = `shooting-target${isDecoy ? " is-decoy" : " is-sequence"}`;
      button.style.setProperty("--star-duration", `${10 + index % 4 * 1.2}s`);
      button.style.setProperty("--star-delay", `${-index * 1.25}s`);
      button.style.setProperty("--star-trail-duration", `${1.6 + index % 5 * .24}s`);
      button.setAttribute(
        "aria-label",
        isDecoy
          ? `Étoile leurre, signe ${starConfig.sign}`
          : `Étoile ${starConfig.name}, signe ${starConfig.sign}, étape ${sequenceIndex + 1} sur ${config.sequence.length}`
      );
      if (!isDecoy) button.dataset.sequenceIndex = String(sequenceIndex);
      const core = document.createElement("span");
      core.className = "shooting-star-core";
      core.textContent = "✦";
      const sign = document.createElement("span");
      sign.className = "shooting-star-symbol";
      sign.textContent = starConfig.sign;
      sign.setAttribute("aria-hidden", "true");
      const trail = document.createElement("span");
      trail.className = "shooting-star-trail";
      trail.setAttribute("aria-hidden", "true");
      const particles = document.createElement("span");
      particles.className = "shooting-star-particles";
      particles.setAttribute("aria-hidden", "true");
      button.append(trail, core, sign, particles);
      const route = createRoute(index);
      movingTargets.push({ element: button, route });
      button.addEventListener("click", () => {
        if (button.disabled) return;
        if (sequenceIndex !== foundFragments.size) {
          feedback.textContent = "Cette lumière reste silencieuse… suis la prochaine étoile de la séquence.";
          button.classList.remove("is-wrong");
          feedback.classList.remove("is-error");
          void button.offsetWidth;
          requestAnimationFrame(() => button.classList.add("is-wrong"));
          requestAnimationFrame(() => feedback.classList.add("is-error"));
          window.setTimeout(() => {
            button.classList.remove("is-wrong");
            feedback.classList.remove("is-error");
          }, 620);
          return;
        }
        const fieldBounds = field.getBoundingClientRect();
        const starBounds = button.getBoundingClientRect();
        constellationPoints.push({
          x: (starBounds.left + starBounds.width / 2 - fieldBounds.left) / fieldBounds.width,
          y: (starBounds.top + starBounds.height / 2 - fieldBounds.top) / fieldBounds.height
        });
        updateConstellation();
        foundFragments.add(index);
        button.disabled = true;
        button.classList.add("is-caught");
        order.children[sequenceIndex].classList.add("is-lit");
        const pip = document.createElement("span");
        pip.className = "star-progress-dot is-lit";
        pip.textContent = "✦";
        progress.append(pip);
        updateNextStar();
        feedback.textContent = `Une étoile retrouvée… ${foundFragments.size} sur ${config.sequence.length}.`;
        if (foundFragments.size === config.sequence.length) {
          const poem = $(".revealed-poem");
          config.poem.forEach((line) => {
            const paragraph = document.createElement("p");
            paragraph.textContent = line;
            poem.append(paragraph);
          });
          poem.hidden = false;
          unlockGameFinishButton(".star-finish");
          feedback.textContent = "Le poème est apparu. Prends le temps de le lire.";
        }
      });
      field.append(button);
    }

    config.sequence.forEach((starId, index) => {
      const starConfig = config.stars.find((star) => star.id === starId);
      if (starConfig) createTarget(starConfig, index, index);
    });
    decoyStars.forEach((star, index) => {
      createTarget(star, null, config.sequence.length + index);
    });
    updateNextStar();
    updateConstellation();
    $(".star-finish").addEventListener("click", completeMonth);
  }

  function playNote(frequency) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    try {
      const context = new AudioContextClass();
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.type = "sine";
      oscillator.frequency.value = frequency;
      gain.gain.setValueAtTime(.0001, context.currentTime);
      gain.gain.exponentialRampToValueAtTime(.09, context.currentTime + .025);
      gain.gain.exponentialRampToValueAtTime(.0001, context.currentTime + .42);
      oscillator.connect(gain);
      gain.connect(context.destination);
      oscillator.start();
      oscillator.stop(context.currentTime + .45);
      oscillator.addEventListener("ended", () => context.close(), { once: true });
    } catch (error) {
      console.warn("La boîte à musique n'a pas pu jouer cette note.", error);
    }
  }

  function renderAstrolabe(config) {
    gameContent.innerHTML = `
      <div class="game-panel astrolabe-panel">
        <p class="activity-kicker astrolabe-kicker"></p>
        <div class="astrolabe-stage" role="group" aria-label="Astrolabe nocturne à six anneaux">
          <div class="astrolabe-particles" aria-hidden="true"></div>
          <div class="astrolabe-axis" aria-hidden="true"><span></span></div>
          <div class="astrolabe-dial" tabindex="0" aria-label="Cadran céleste">
            <div class="astrolabe-inner-orbit" aria-hidden="true"></div>
            <div class="astrolabe-stars"></div>
            <div class="astrolabe-core" aria-hidden="true"><span>VI</span></div>
          </div>
        </div>
        <p class="astrolabe-objective" aria-live="polite">Objectif : aligner les 6 lumières sur les axes dorés · 0/6</p>
        <p class="activity-feedback astrolabe-feedback" aria-live="polite">Choisis une lumière, puis tourne-la par pas de 30°.</p>
        <div class="astrolabe-message" hidden></div>
        <button class="button button-primary game-finish-button astrolabe-finish" type="button" disabled>Garder ce morceau ↗</button>
      </div>`;

    $(".astrolabe-kicker").textContent = config.prompt;
    const stars = $(".astrolabe-stars");
    const dial = $(".astrolabe-dial");
    const feedback = $(".astrolabe-feedback");
    const particles = $(".astrolabe-particles");
    const rotations = [...config.initialRotations];
    const step = 30;
    let aligned = 0;
    let selected = 0;

    const particleDots = Array.from({ length: 22 }, (_, index) => {
      const dot = document.createElement("span");
      dot.style.setProperty("--particle-x", `${8 + (index * 37 % 84)}%`);
      dot.style.setProperty("--particle-y", `${8 + (index * 53 % 82)}%`);
      dot.style.setProperty("--particle-delay", `${(index % 7) * .18}s`);
      particles.append(dot);
      return dot;
    });

    const targets = rotations.map((_, index) => index * 60);
    const alignmentAngles = [270, 90, 0, 180, 270, 90];
    const orbitRadii = [.52, .52, .52, .52, .87, .87];
    const markers = rotations.map((rotation, index) => {
      const marker = document.createElement("button");
      marker.type = "button";
      marker.className = "astrolabe-marker";
      marker.dataset.index = String(index);
      marker.setAttribute("aria-label", `Repère céleste ${index + 1}, alignement ${index + 1} sur 6`);
      marker.innerHTML = `<span class="astrolabe-ring"></span><span class="astrolabe-light">✦</span><span class="astrolabe-month">${index + 1}</span>`;
      stars.append(marker);
      return marker;
    });

    function updateMarker(index) {
      const marker = markers[index];
      const rotation = rotations[index];
      const angle = ((targets[index] + rotation) % 360 + 360) % 360;
      const radians = angle * Math.PI / 180;
      const radius = orbitRadii[index] * 50;
      const alignedOnAxis = angle === alignmentAngles[index];
      marker.style.left = `${50 + Math.sin(radians) * radius}%`;
      marker.style.top = `${50 - Math.cos(radians) * radius}%`;
      marker.classList.toggle("is-aligned", alignedOnAxis);
      marker.classList.toggle("is-selected", selected === index);
      marker.setAttribute("aria-pressed", alignedOnAxis ? "true" : "false");
      marker.setAttribute(
        "aria-label",
        `Repère céleste ${index + 1}, ${alignedOnAxis ? "aligné" : "à aligner"} sur l’axe doré. Utilise les flèches gauche et droite pour tourner.`
      );
    }

    function playAlignmentTone(index) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return;
      try {
        const context = new AudioContextClass();
        const oscillator = context.createOscillator();
        const gain = context.createGain();
        const start = context.currentTime;
        oscillator.type = "sine";
        oscillator.frequency.setValueAtTime(392 + index * 36, start);
        oscillator.frequency.exponentialRampToValueAtTime(392 + index * 36 + 70, start + .32);
        gain.gain.setValueAtTime(.0001, start);
        gain.gain.exponentialRampToValueAtTime(.055, start + .035);
        gain.gain.exponentialRampToValueAtTime(.0001, start + .48);
        oscillator.connect(gain);
        gain.connect(context.destination);
        oscillator.start(start);
        oscillator.stop(start + .5);
        oscillator.addEventListener("ended", () => context.close(), { once: true });
      } catch (error) {
        console.warn("Le son de l’astrolabe est indisponible.", error);
      }
    }

    function rotateMarker(index, direction) {
      if (markers[index].classList.contains("is-aligned")) return;
      selected = index;
      rotations[index] = (rotations[index] + direction * step + 360) % 360;
      updateMarker(index);
      if (((targets[index] + rotations[index]) % 360 + 360) % 360 === alignmentAngles[index]) {
        aligned += 1;
        markers[index].disabled = true;
        playAlignmentTone(index);
        markers[index].querySelector(".astrolabe-ring").animate(
          [{ opacity: .48, transform: "scale(.65)" }, { opacity: 1, transform: "scale(1.12)" }, { opacity: 1, transform: "scale(1)" }],
          { duration: 620, easing: "cubic-bezier(.2,.8,.3,1)" }
        );
        feedback.textContent = `La lumière ${index + 1} se cale sur l’axe doré.`;
      } else {
        feedback.textContent = "Tourne encore cette étoile vers l’axe doré.";
      }
      $(".astrolabe-objective").textContent = `Objectif : aligner les 6 lumières sur les axes dorés · ${aligned}/6`;

      if (aligned === markers.length) {
        dial.classList.add("is-complete");
        $(".astrolabe-panel").classList.add("is-complete");
        $(".astrolabe-message").textContent = config.message;
        $(".astrolabe-message").hidden = false;
        unlockGameFinishButton(".astrolabe-finish");
        feedback.textContent = "Les six lumières forment enfin une seule constellation.";
        particleDots.forEach((dot) => dot.classList.add("is-lit"));
      }
    }

    markers.forEach((marker, index) => {
      updateMarker(index);
      marker.addEventListener("click", () => rotateMarker(index, 1));
    });

    dial.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        event.preventDefault();
        rotateMarker(selected, event.key === "ArrowRight" ? 1 : -1);
      } else if (/^[1-6]$/.test(event.key)) {
        event.preventDefault();
        selected = Number(event.key) - 1;
        markers.forEach((_, index) => updateMarker(index));
        markers[selected].focus();
      }
    });

    markers.forEach((marker) => {
      marker.addEventListener("keydown", (event) => {
        if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
          event.preventDefault();
          rotateMarker(Number(marker.dataset.index), event.key === "ArrowRight" ? 1 : -1);
        }
      });
    });

    $(".astrolabe-finish").addEventListener("click", completeMonth);
  }

  function renderSeek(config) {
    gameContent.innerHTML = `
      <div class="game-panel seek-panel">
        <p class="activity-kicker">La chambre s'endort sous la lune</p>
        <p class="bedroom-objective">Retrouve le petit chat caché dans la chambre.</p>
        <div class="bedroom-scene" role="group" aria-label="Chambre nocturne à explorer">
          <svg class="bedroom-art" viewBox="0 0 1000 600" role="group" aria-labelledby="bedroom-title bedroom-description" preserveAspectRatio="xMidYMid slice">
            <title id="bedroom-title">Une chambre cosy éclairée par la lune et une bougie</title>
            <desc id="bedroom-description">Une fenêtre ouverte sur une nuit étoilée, une bibliothèque, un lit, une table et un tapis. Un petit chat se cache près d'un coussin.</desc>
            <defs>
              <linearGradient id="bedroom-wall" x2="0" y2="1"><stop stop-color="#1b2639"/><stop offset="1" stop-color="#111a2a"/></linearGradient>
              <linearGradient id="bedroom-floor" x2="0" y2="1"><stop stop-color="#29282d"/><stop offset="1" stop-color="#14171f"/></linearGradient>
              <linearGradient id="bedroom-window" x2=".8" y2="1"><stop stop-color="#101e39"/><stop offset="1" stop-color="#263b5a"/></linearGradient>
              <linearGradient id="bedroom-curtain" x2="1" y2=".2"><stop stop-color="#343148"/><stop offset=".5" stop-color="#51415a"/><stop offset="1" stop-color="#292b40"/></linearGradient>
              <linearGradient id="bedroom-wood" x2="0" y2="1"><stop stop-color="#765743"/><stop offset="1" stop-color="#3a2c2a"/></linearGradient>
              <linearGradient id="bedroom-quilt" x2=".2" y2="1"><stop stop-color="#718096"/><stop offset=".45" stop-color="#45546b"/><stop offset="1" stop-color="#303b50"/></linearGradient>
              <linearGradient id="bedroom-pillow" x2=".5" y2="1"><stop stop-color="#c1b6a5"/><stop offset="1" stop-color="#77788a"/></linearGradient>
              <radialGradient id="bedroom-moon-glow"><stop stop-color="#f8e9ba" stop-opacity=".48"/><stop offset="1" stop-color="#a8c9ef" stop-opacity="0"/></radialGradient>
              <radialGradient id="bedroom-candle-glow"><stop stop-color="#ffd993" stop-opacity=".42"/><stop offset="1" stop-color="#ffbf70" stop-opacity="0"/></radialGradient>
              <radialGradient id="bedroom-vignette"><stop offset=".48" stop-color="#02040a" stop-opacity="0"/><stop offset="1" stop-color="#02040a" stop-opacity=".62"/></radialGradient>
              <pattern id="bedroom-wall-grain" width="56" height="48" patternUnits="userSpaceOnUse"><path d="M4 13h18M32 37h15M25 5v8M10 31v9" stroke="#b3bdd0" stroke-opacity=".035" stroke-width="1"/></pattern>
              <pattern id="bedroom-rug-weave" width="18" height="14" patternUnits="userSpaceOnUse"><path d="M0 3h18M0 10h18M4 0v14M13 0v14" stroke="#c1a17f" stroke-opacity=".22" stroke-width="1"/><path d="M0 6h18" stroke="#111723" stroke-opacity=".24"/></pattern>
              <filter id="bedroom-shadow" x="-.3" y="-.3" width="1.7" height="1.8"><feGaussianBlur stdDeviation="11"/></filter>
              <filter id="bedroom-soft-glow" x="-.8" y="-.8" width="2.6" height="2.6"><feGaussianBlur stdDeviation="16"/></filter>
              <filter id="bedroom-cat-glow" x="-.8" y="-.8" width="2.6" height="2.6"><feGaussianBlur stdDeviation="5"/></filter>
            </defs>
            <rect width="1000" height="600" fill="url(#bedroom-wall)"/>
            <rect width="1000" height="423" fill="url(#bedroom-wall-grain)"/>
            <path d="M0 421H1000V600H0Z" fill="url(#bedroom-floor)"/>
            <path d="M0 421H1000" stroke="#b5a5a0" stroke-opacity=".17"/>
            <ellipse cx="517" cy="522" rx="383" ry="89" fill="#060911" opacity=".6" filter="url(#bedroom-shadow)"/>

            <g class="room-detail" data-room-message="La nuit est calme derrière la vitre." role="button" tabindex="0" aria-label="Observer la fenêtre">
              <ellipse cx="197" cy="194" rx="201" ry="197" fill="url(#bedroom-moon-glow)"/>
              <rect x="68" y="58" width="260" height="255" rx="4" fill="#0b1019" stroke="#967b69" stroke-width="12"/>
              <rect x="82" y="72" width="232" height="225" fill="url(#bedroom-window)"/>
              <path d="M83 253Q139 218 197 243T313 226V298H83Z" fill="#10182a"/>
              <circle cx="258" cy="119" r="32" fill="#e1d7bc" opacity=".88"/>
              <circle cx="270" cy="109" r="31" fill="#1e2d48"/>
              <g fill="#e6e2d5">
                <circle cx="122" cy="113" r="1.8"/><circle cx="164" cy="158" r="1.5"/><circle cx="215" cy="92" r="1.4"/>
                <circle cx="286" cy="178" r="1.8"/><circle cx="110" cy="212" r="1.3"/><circle cx="225" cy="202" r="1.5"/>
              </g>
              <path d="M198 73v224M83 185h231" stroke="#887968" stroke-width="8"/>
              <path d="M72 55h252M64 315h268" stroke="#b2977d" stroke-width="7" stroke-linecap="round"/>
              <path d="M59 52C83 74 75 119 83 152s-4 110-23 160c23 13 43 8 55-2 14-50 13-84 10-128s10-99 4-128c-14-10-47-10-70-2Z" fill="url(#bedroom-curtain)" stroke="#706077" stroke-opacity=".55" stroke-width="2"/>
              <path d="M336 54c-21 34-12 77-13 115s9 92 25 139c-21 14-39 15-54 4 11-51 8-88 5-130s8-92 3-119c8-8 22-11 34-9Z" fill="url(#bedroom-curtain)" stroke="#706077" stroke-opacity=".55" stroke-width="2"/>
              <path d="M71 68q18 14 35 1M315 66q-12 13-28 4" fill="none" stroke="#a28a8b" stroke-opacity=".45" stroke-width="3"/>
            </g>

            <g class="room-detail" data-room-message="Les livres gardent leurs histoires pour demain." role="button" tabindex="0" aria-label="Observer les livres">
              <rect x="794" y="82" width="153" height="299" rx="5" fill="#17191f" stroke="#766150" stroke-width="8"/>
              <path d="M797 173h147M797 267h147M797 360h147" stroke="#9b795a" stroke-width="9"/>
              <path d="M812 164V113q4-18 17-11v62ZM835 163v-61h17v61ZM858 164v-47h19v47ZM883 164v-65q22-8 24 11v54ZM810 258v-62h16v62ZM832 258v-52q18-15 24 0v52ZM861 258v-68h20v68ZM887 258v-47q20-18 28 3v44Z" fill="#737082" stroke="#b29a78" stroke-opacity=".5" stroke-width="2"/>
              <path d="M813 249v-46h17v46M839 249v-61h16v61" fill="#82715f"/>
              <path d="M821 164v-37M866 257v-50M901 257v-27" stroke="#d4bd90" stroke-opacity=".45" stroke-width="2"/>
              <path d="M811 350q18-42 36 0M829 350q16-52 33 0M852 350q13-34 25 0" fill="#53634f" stroke="#8c9a70" stroke-width="2"/>
              <path d="M826 350h31l-4 12h-23Z" fill="#a87e65"/>
            </g>

            <ellipse cx="496" cy="502" rx="286" ry="76" fill="#343746" stroke="#8c7c75" stroke-opacity=".4" stroke-width="3"/>
            <ellipse cx="496" cy="502" rx="271" ry="64" fill="url(#bedroom-rug-weave)" opacity=".75"/>
            <path d="M231 502q12 18 24 0m18 4q12 18 24 0m392 2q12 18 24 0m18-2q12 18 24 0" fill="none" stroke="#b89a7b" stroke-opacity=".4" stroke-width="3"/>

            <g class="room-detail" data-room-message="La petite flamme réchauffe doucement la chambre." role="button" tabindex="0" aria-label="Observer la bougie et la tasse">
              <ellipse cx="277" cy="401" rx="118" ry="113" fill="url(#bedroom-candle-glow)"/>
              <path d="M146 391h155l-12 19H158Z" fill="#382a29"/>
              <path d="M156 410h136l-13 91H169Z" fill="url(#bedroom-wood)" stroke="#9e7757" stroke-width="3"/>
              <path d="M166 424h115M171 490h112" stroke="#c19972" stroke-opacity=".26" stroke-width="3"/>
              <circle cx="221" cy="462" r="4" fill="#b89169"/>
              <path d="M182 387q-3-30 4-38h17q7 8 4 38Z" fill="#c0a986"/>
              <path d="M193 349q-2-9 4-15 8 8 1 16" fill="#ffbf70" filter="url(#bedroom-soft-glow)" opacity=".8"/>
              <path d="M193 351q-2-8 4-13 5 7 0 14" fill="#ffdb91"/>
              <path d="M251 384h33l-4 20h-25Z" fill="#c6bdad"/>
              <path d="M284 388q14 0 10 12-2 7-11 5" fill="none" stroke="#c6bdad" stroke-width="5"/>
              <path d="M258 383q9-5 18 0" fill="none" stroke="#725b49" stroke-width="3"/>
            </g>

            <g class="room-detail">
              <ellipse cx="591" cy="437" rx="263" ry="104" fill="#090d16" opacity=".62" filter="url(#bedroom-shadow)"/>
              <path d="M350 309q8-46 46-48h360q43 8 49 53v149H350Z" fill="#363541" stroke="#897b76" stroke-width="5"/>
              <path d="M376 323q2-36 37-38h325q32 5 37 39" fill="none" stroke="#b2a09a" stroke-opacity=".43" stroke-width="4"/>
              <path d="M339 355q22-22 52-11l72 52q10 43-14 65H356Z" fill="url(#bedroom-pillow)" stroke="#c5b7a5" stroke-opacity=".35" stroke-width="3"/>
              <path d="M379 365q35 9 58 45M401 355q20 16 34 39" fill="none" stroke="#e1d6c3" stroke-opacity=".32" stroke-width="3"/>
              <g class="bedroom-cat-illustration" transform="translate(-8 -16)">
                <ellipse class="bedroom-cat-halo" cx="746" cy="383" rx="48" ry="35" fill="#f3d9a1" opacity="0"/>
                <path d="M708 407q-6-27 20-40 24-9 42 13 22 17 10 43-19 19-52 11-22-5-20-27Z" fill="#10141e" stroke="#4d5262" stroke-width="4"/>
                <path d="M718 382l-2-26 22 15m26 5 14-24 5 35" fill="#202532" stroke="#65697a" stroke-width="4" stroke-linejoin="round"/>
                <path d="M723 379q17-18 34 1l4 15q-16 15-35 2Z" fill="#3c3f4d"/>
                <ellipse cx="731" cy="389" rx="3" ry="4" fill="#a89d7f"/>
                <ellipse cx="750" cy="389" rx="3" ry="4" fill="#a89d7f"/>
                <circle cx="732" cy="389" r="1.5" fill="#171923"/><circle cx="751" cy="389" r="1.5" fill="#171923"/>
                <path d="M738 396l4 3 4-3m-4 3q-5 6-10 2m10-2q5 6 10 2" fill="none" stroke="#b6a6a0" stroke-width="2" stroke-linecap="round"/>
                <path d="M727 398l-13-2m13 6-14 3m39-7 12-3m-12 7 14 2" stroke="#a49ba0" stroke-opacity=".75" stroke-width="1.4"/>
                <path d="M708 414q18 8 38 1" fill="none" stroke="#353846" stroke-width="8"/>
              </g>
              <path d="M616 342q38-27 79-2l38 49-33 42q-52 8-93-25Z" fill="url(#bedroom-pillow)" stroke="#c5b7a5" stroke-opacity=".38" stroke-width="3"/>
              <path d="M642 350q32 10 61 39m-43-48q19 15 37 36" fill="none" stroke="#e1d6c3" stroke-opacity=".3" stroke-width="3"/>
              <path d="M329 402q120-48 247-25 125 20 251-7l-4 115q-144 52-272 27-102-20-222 12Z" fill="url(#bedroom-quilt)" stroke="#8e99a7" stroke-opacity=".45" stroke-width="4"/>
              <path d="M343 420q132-41 239-19 121 24 231-3M346 469q115-31 228-9 108 20 247-3" fill="none" stroke="#c3c6c4" stroke-opacity=".19" stroke-width="3"/>
              <path d="M396 426q12-12 25 0t25 0m-50 41q12-12 25 0t25 0m306-53q12-12 25 0t25 0" fill="none" stroke="#d4d0c4" stroke-opacity=".16" stroke-width="2"/>
            </g>

            <g class="room-detail" data-room-message="Un plaid tout doux a glissé au bord du lit." role="button" tabindex="0" aria-label="Observer le plaid">
              <path d="M617 471q48-18 91 0l38 68q-37 18-88 9Z" fill="#6a5360" stroke="#aa8792" stroke-opacity=".55" stroke-width="3"/>
              <path d="M637 481l25 64m2-70 26 70m3-66 26 57" stroke="#d1a7a5" stroke-opacity=".25" stroke-width="3"/>
              <path d="M651 541l-4 13m26-8-3 14m28-11-2 13" stroke="#c49d96" stroke-opacity=".55" stroke-width="3"/>
            </g>

            <ellipse class="bedroom-cat-target" cx="738" cy="352" rx="62" ry="42" fill="transparent" pointer-events="all" role="button" tabindex="0" aria-label="Inspecter le recoin près du coussin" aria-pressed="false"/>
            <rect width="1000" height="600" fill="url(#bedroom-vignette)" pointer-events="none"/>
          </svg>
        </div>
        <div class="bedroom-controls">
          <p class="activity-feedback seek-feedback" aria-live="polite">Explore la chambre à la souris ou au toucher. Le halo révèle les détails dans la pénombre.</p>
          <button class="text-button bedroom-hint" type="button">Indice</button>
        </div>
        <button class="button button-primary game-finish-button seek-finish" type="button" disabled>Garder ce souvenir ↗</button>
      </div>`;
    const scene = $(".bedroom-scene");
    const feedback = $(".seek-feedback");
    const cat = $(".bedroom-cat-target");
    let found = false;

    const playRoomChime = (isFound = false) => {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return;
      try {
        const context = new AudioContextClass();
        const oscillator = context.createOscillator();
        const gain = context.createGain();
        const start = context.currentTime;
        oscillator.type = "sine";
        oscillator.frequency.setValueAtTime(isFound ? 523.25 : 392, start);
        if (isFound) oscillator.frequency.exponentialRampToValueAtTime(659.25, start + .28);
        gain.gain.setValueAtTime(.0001, start);
        gain.gain.exponentialRampToValueAtTime(isFound ? .045 : .018, start + .035);
        gain.gain.exponentialRampToValueAtTime(.0001, start + (isFound ? .42 : .2));
        oscillator.connect(gain);
        gain.connect(context.destination);
        oscillator.start(start);
        oscillator.stop(start + (isFound ? .44 : .22));
        oscillator.addEventListener("ended", () => context.close(), { once: true });
      } catch (error) {
        console.warn("Le son de la chambre n'est pas disponible.", error);
      }
    };

    const explore = (event) => {
      const bounds = scene.getBoundingClientRect();
      scene.style.setProperty("--light-x", `${((event.clientX - bounds.left) / bounds.width) * 100}%`);
      scene.style.setProperty("--light-y", `${((event.clientY - bounds.top) / bounds.height) * 100}%`);
      scene.classList.add("is-exploring");
    };
    scene.addEventListener("pointermove", explore);
    scene.addEventListener("pointerdown", explore);
    scene.addEventListener("pointerleave", (event) => {
      if (event.pointerType === "mouse") scene.classList.remove("is-exploring");
    });

    scene.querySelectorAll("[data-room-message]").forEach((detail) => {
      const inspect = () => {
        if (found) return;
        feedback.textContent = detail.dataset.roomMessage;
        detail.classList.remove("is-inspected");
        requestAnimationFrame(() => detail.classList.add("is-inspected"));
        playRoomChime();
      };
      detail.addEventListener("click", inspect);
      detail.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          inspect();
        }
      });
    });

    const findCat = () => {
      if (found) return;
      found = true;
      foundFragments.add(config.target);
      cat.classList.add("is-found");
      cat.setAttribute("aria-pressed", "true");
      cat.setAttribute("aria-label", "Le petit chat est retrouvé");
      scene.classList.add("has-found-cat");
      feedback.textContent = `Trouvé ! ${config.targetLabel} était blotti près du coussin.`;
      unlockGameFinishButton(".seek-finish");
      playRoomChime(true);
    };
    cat.addEventListener("click", findCat);
    cat.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        findCat();
      }
    });

    $(".bedroom-hint").addEventListener("click", () => {
      if (found) return;
      scene.classList.add("is-hint-active");
      feedback.textContent = config.hint;
    });
    $(".seek-finish").addEventListener("click", completeMonth);
  }

  function renderCipher(config) {
    gameContent.innerHTML = `<div class="game-panel cipher-panel"><div class="cipher-seal" aria-hidden="true">⌘</div><p class="activity-kicker">Le message intercepté</p><p class="cipher-text"></p><div class="cipher-helper"><label for="cipher-helper-input">Petit outil · recul de 3 lettres</label><div class="cipher-helper-control"><input id="cipher-helper-input" class="cipher-helper-input" type="text" maxlength="1" autocomplete="off" autocapitalize="characters" aria-label="Lettre à décaler de trois places"><span aria-hidden="true">−3 →</span><output class="cipher-helper-result" for="cipher-helper-input" aria-live="polite">?</output></div></div><p class="cipher-instructions">Décale chaque lettre de trois places vers l'arrière dans l'alphabet.<br><span>Exemple : Q → N, R → O, D → A — on recule de 3 lettres.</span></p><form class="answer-form"><input class="answer-input" type="text" autocomplete="off" placeholder="Le message secret…" aria-label="Message décodé"><button class="button button-primary" type="submit">Déchiffrer ↗</button></form><p class="feedback" aria-live="polite"></p><p class="hint-copy" aria-live="polite"></p></div>`;
    $(".cipher-text").textContent = config.cipher;
    const helperInput = $(".cipher-helper-input");
    const helperResult = $(".cipher-helper-result");
    helperInput.addEventListener("input", () => {
      const letter = helperInput.value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleUpperCase("fr").match(/[A-Z]/)?.[0];
      if (!letter) {
        helperResult.textContent = "?";
        return;
      }
      const code = letter.charCodeAt(0) - 65;
      helperResult.textContent = String.fromCharCode((code - config.shift + 26) % 26 + 65);
    });
    $(".answer-form").addEventListener("submit", (event) => {
      event.preventDefault();
      const answer = normalizeAnswer($(".answer-input").value);
      if (answer === normalizeAnswer(config.answer)) {
        $(".feedback").textContent = "Le message est déchiffré.";
        $(".feedback").classList.add("is-correct");
        $(".feedback").classList.remove("is-partial", "is-incorrect");
        completeMonth();
        return;
      }
      attempts += 1;
      const expected = normalizeAnswer(config.answer);
      const feedback = $(".feedback");
      if (isCloseAnswer(answer, expected)) {
        feedback.textContent = "Tu es tout près : quelques lettres restent à corriger. Ta proposition est conservée.";
        feedback.classList.add("is-partial");
        feedback.classList.remove("is-incorrect");
      } else {
        feedback.textContent = "Ce n’est pas encore le bon message. Ta proposition reste en place pour que tu puisses la corriger.";
        feedback.classList.add("is-incorrect");
        feedback.classList.remove("is-partial");
      }
      if (attempts >= 2) $(".hint-copy").textContent = config.hint;
    });
  }

  function renderPolaroids(config) {
    gameContent.innerHTML = `<div class="game-panel polaroid-panel"><p class="activity-kicker">Un album de petits instants</p><div class="polaroid-grid"></div><p class="activity-feedback" aria-live="polite">Retourne les photos pour découvrir ce qui se cache au dos.</p><button class="button button-primary game-finish-button polaroid-finish" type="button" disabled>Refermer l'album ↗</button></div>`;
    const grid = $(".polaroid-grid");
    config.cards.forEach((card, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `polaroid-card polaroid-${index + 1}`;
      button.setAttribute("aria-pressed", "false");
      button.innerHTML = `<span class="polaroid-inner"><span class="polaroid-face polaroid-front"><span class="polaroid-photo"><span class="polaroid-moon" aria-hidden="true"></span></span><span class="polaroid-caption"></span></span><span class="polaroid-face polaroid-back"><span class="polaroid-back-star" aria-hidden="true">✦</span><span class="polaroid-message"></span></span></span>`;
      button.querySelector(".polaroid-caption").textContent = card.front;
      button.querySelector(".polaroid-message").textContent = card.back;
      button.addEventListener("click", () => {
        if (button.classList.contains("is-flipped")) return;
        button.classList.add("is-flipped");
        button.setAttribute("aria-pressed", "true");
        matchedPairs.add(index);
        $(".activity-feedback").textContent = `${matchedPairs.size} sur ${config.cards.length} souvenirs retournés.`;
        if (matchedPairs.size === config.cards.length) {
          $(".activity-feedback").textContent = "Tous les petits instants sont retrouvés.";
          unlockGameFinishButton(".polaroid-finish");
        }
      });
      grid.append(button);
    });
    $(".polaroid-finish").addEventListener("click", completeMonth);
  }

  function renderQuiz(config) {
    gameContent.innerHTML = `<div class="game-panel quiz-panel"><div class="quiz-counter"></div><h3 class="quiz-question"></h3><form class="answer-form"><input class="answer-input" type="text" autocomplete="off" placeholder="Ta réponse…" aria-label="Ta réponse"><button class="button button-primary" type="submit">Valider ↗</button></form><p class="feedback" aria-live="polite"></p></div>`;
    let questionIndex = 0;
    const showQuestion = () => {
      const question = config.questions[questionIndex];
      $(".quiz-counter").textContent = `QUESTION ${questionIndex + 1} / ${config.questions.length}`;
      $(".quiz-question").textContent = question.question;
      $(".answer-input").value = "";
      $(".feedback").textContent = "";
      $(".answer-input").focus();
    };
    $(".answer-form").addEventListener("submit", (event) => {
      event.preventDefault();
      const answer = normalizeAnswer($(".answer-input").value);
      const question = config.questions[questionIndex];
      if (!question.answers.map(normalizeAnswer).includes(answer)) {
        $(".feedback").textContent = "Pas tout à fait… pense à nos petits moments.";
        return;
      }
      questionIndex += 1;
      if (questionIndex === config.questions.length) {
        $(".feedback").textContent = "Trois sur trois ! Tu connais bien notre petite histoire.";
        $(".feedback").classList.add("is-correct");
        completeMonth();
      } else {
        $(".feedback").textContent = "Bien joué ! Question suivante…";
        showQuestion();
      }
    });
    showQuestion();
  }

  function renderTrace() {
    gameContent.innerHTML = `<div class="game-panel trace-panel"><p class="activity-kicker">Suis la lumière et dessine le cœur</p><canvas class="trace-canvas" width="620" height="390" aria-label="Zone de dessin : trace un cœur avec la souris ou le doigt"></canvas><div class="trace-actions"><p class="activity-feedback" aria-live="polite">Trace le cœur d'un seul geste, en suivant la ligne dorée.</p><button class="text-button trace-reset" type="button">Recommencer</button></div></div>`;
    const canvas = $(".trace-canvas");
    const context = canvas.getContext("2d");
    if (!context) {
      showToast("Le dessin n'est pas disponible dans ce navigateur.");
      return;
    }
    let points = [];
    let isDrawing = false;
    const heartPoint = (t) => ({
      x: .5 + (16 * Math.sin(t) ** 3) / 42,
      y: .5 - (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)) / 42
    });
    const samples = Array.from({ length: 120 }, (_, index) => heartPoint((index / 120) * Math.PI * 2));
    const draw = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.beginPath();
      samples.forEach((point, index) => {
        const x = point.x * canvas.width;
        const y = point.y * canvas.height;
        if (index === 0) context.moveTo(x, y); else context.lineTo(x, y);
      });
      context.closePath();
      context.setLineDash([6, 9]);
      context.lineWidth = 2;
      context.strokeStyle = "rgba(232,198,111,.55)";
      context.stroke();
      context.setLineDash([]);
      if (points.length > 1) {
        context.beginPath();
        points.forEach((point, index) => {
          const x = point.x * canvas.width;
          const y = point.y * canvas.height;
          if (index === 0) context.moveTo(x, y); else context.lineTo(x, y);
        });
        context.lineWidth = 7;
        context.lineCap = "round";
        context.lineJoin = "round";
        context.strokeStyle = "#f4d77e";
        context.shadowColor = "rgba(244,215,126,.75)";
        context.shadowBlur = 13;
        context.stroke();
        context.shadowBlur = 0;
      }
    };
    const getPoint = (event) => {
      const rect = canvas.getBoundingClientRect();
      return { x: (event.clientX - rect.left) / rect.width, y: (event.clientY - rect.top) / rect.height };
    };
    canvas.addEventListener("pointerdown", (event) => {
      isDrawing = true;
      points = [getPoint(event)];
      canvas.setPointerCapture(event.pointerId);
      $(".activity-feedback").textContent = "Continue ton tracé sans lever le doigt…";
      draw();
    });
    canvas.addEventListener("pointermove", (event) => {
      if (!isDrawing) return;
      points.push(getPoint(event));
      draw();
    });
    const finish = () => {
      if (!isDrawing) return;
      isDrawing = false;
      const coverage = samples.filter((sample) => points.some((point) => Math.hypot(point.x - sample.x, point.y - sample.y) < .055)).length / samples.length;
      if (points.length > 35 && coverage >= .38) {
        $(".activity-feedback").textContent = "Un cœur lumineux, rien que pour nous.";
        completeMonth();
      } else {
        $(".activity-feedback").textContent = "Le cœur n'est pas encore complet. Essaie de suivre la ligne dorée d'un seul geste.";
      }
    };
    canvas.addEventListener("pointerup", finish);
    canvas.addEventListener("pointercancel", finish);
    $(".trace-reset").addEventListener("click", () => {
      points = [];
      isDrawing = false;
      $(".activity-feedback").textContent = "Trace le cœur d'un seul geste, en suivant la ligne dorée.";
      draw();
    });
    draw();
  }

  function renderBouquet(config) {
    gameContent.innerHTML = `<div class="game-panel bouquet-panel"><div class="bouquet-illustration" aria-hidden="true"><span>✿</span><span>✿</span><span>✿</span><span class="bouquet-ribbon">♥</span></div><p class="activity-kicker">Un bouquet pour nos douze mois</p><p class="activity-feedback" aria-live="polite">Choisis les fleurs une à une pour composer le bouquet final.</p><div class="bouquet-flowers"></div><button class="button button-primary game-finish-button bouquet-finish" type="button" disabled>Ouvrir la dernière lettre ↗</button></div>`;
    const flowers = $(".bouquet-flowers");
    config.flowers.forEach((flower, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "bouquet-flower";
      button.setAttribute("aria-label", `Ajouter ${flower.label}`);
      button.innerHTML = `<span class="bouquet-flower-glyph"></span><span class="bouquet-flower-label"></span>`;
      button.querySelector(".bouquet-flower-glyph").textContent = flower.glyph;
      button.querySelector(".bouquet-flower-label").textContent = flower.label;
      button.addEventListener("click", () => {
        if (button.disabled) return;
        button.disabled = true;
        button.classList.add("is-picked");
        matchedPairs.add(index);
        $(".activity-feedback").textContent = `${matchedPairs.size} sur ${config.flowers.length} fleurs dans le bouquet.`;
        if (matchedPairs.size === config.flowers.length) {
          $(".activity-feedback").textContent = "Le bouquet est prêt. La dernière lettre peut s'ouvrir.";
          unlockGameFinishButton(".bouquet-finish");
        }
      });
      flowers.append(button);
    });
    $(".bouquet-finish").addEventListener("click", completeMonth);
  }

  function completeMonth() {
    if (!completed.includes(activeMonth)) {
      completed.push(activeMonth);
      completed.sort((a, b) => a - b);
      saveProgress();
    }
    renderHub();
    dialog.classList.remove("is-final");
    const month = LOVE_STORY.months[activeMonth];
    $("#reveal-title").textContent = `Mois ${activeMonth + 1} · ${month.calendarMonth} · ${month.title}`;
    const revealCopy = $("#reveal-copy");
    const hasPersonalMessage = month.personalMessage.trim().length > 0;
    revealCopy.textContent = month.personalMessage;
    revealCopy.hidden = !hasPersonalMessage;
    $(".reveal-card .letter-divider").hidden = !hasPersonalMessage;
    $("#continue-button").textContent = activeMonth < LOVE_STORY.months.length - 1
      ? "Continuer vers le mois suivant ↗"
      : activeMonth === LOVE_STORY.months.length - 1
        ? "Ouvrir le grand mot final ✦"
        : "Retourner à la constellation ↗";
    $("#continue-button").onclick = () => {
      dialog.close();
      document.onkeydown = null;
      if (activeMonth < LOVE_STORY.months.length - 1) openMonth(activeMonth + 1);
      else {
        showScreen("hub");
        if (activeMonth === LOVE_STORY.months.length - 1) setTimeout(openFinalMessage, 0);
      }
    };
    dialog.showModal();
  }

  $("#start-button").addEventListener("click", () => {
    disclaimerDialog.showModal();
  });
  $("#disclaimer-continue-button").addEventListener("click", () => {
    disclaimerDialog.close();
    renderHub();
    showScreen("hub");
  });
  $("#back-button").addEventListener("click", () => {
    document.onkeydown = null;
    renderHub();
    showScreen("hub");
  });
  $("#close-reveal-button").addEventListener("click", () => {
    dialog.close();
    document.onkeydown = null;
    showScreen("hub");
  });
  $("#reset-button").addEventListener("click", () => {
    if (!window.confirm("Effacer les souvenirs retrouvés sur cet appareil ?")) return;
    completed = [];
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error("La progression locale n'a pas pu être effacée.", error);
      showToast("La progression n'a pas pu être réinitialisée.");
      return;
    }
    renderHub();
    showToast("La constellation est prête pour un nouveau voyage.");
  });
  $("#read-final-button").addEventListener("click", openFinalMessage);
  dialog.addEventListener("close", () => {
    document.onkeydown = null;
    dialog.classList.remove("is-final");
  });

  function initializeCelestialScene() {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const welcomeScreen = screens.welcome;
    const hubScreen = screens.hub;
    const moonCanvas = $("#moon3d");
    const intro = $("#intro-scene");
    const skipButton = $("#intro-skip");
    const introDuration = 11000;
    let frameHandle = 0;
    let isRunning = false;
    let motionTime = 0;
    let previousFrameTime = 0;
    let introElapsed = 0;
    let introActive = !reducedMotion;
    let width = 1;
    let height = 1;
    let moonScene = null;
    welcomeScreen.inert = introActive;
    const isSkyVisible = () => !welcomeScreen.hidden || !hubScreen.hidden;

    const randomBetween = (min, max) => min + Math.random() * (max - min);

    const createLunarTextures = (THREE) => {
      const textureCanvas = document.createElement("canvas");
      textureCanvas.width = 2048;
      textureCanvas.height = 1024;
      const textureContext = textureCanvas.getContext("2d");
      if (!textureContext) throw new Error("Impossible de créer le canevas de texture lunaire.");
      const textureWidth = textureCanvas.width;
      const textureHeight = textureCanvas.height;
      const image = textureContext.createImageData(textureWidth, textureHeight);
      const heightData = new Uint8ClampedArray(image.data.length);
      const noiseLayers = [4, 8, 16, 32, 64, 128, 256, 512].map((columns) => {
        const rows = columns / 2;
        const values = Float32Array.from({ length: columns * rows }, Math.random);
        return { columns, rows, values };
      });
      const smooth = (value) => value * value * (3 - 2 * value);
      const noiseAt = (layer, u, v) => {
        const x = u * layer.columns;
        const y = v * layer.rows;
        const x0 = Math.floor(x) % layer.columns;
        const y0 = Math.min(layer.rows - 1, Math.floor(y));
        const x1 = (x0 + 1) % layer.columns;
        const y1 = Math.min(layer.rows - 1, y0 + 1);
        const tx = smooth(x - Math.floor(x));
        const ty = smooth(y - Math.floor(y));
        const top = layer.values[y0 * layer.columns + x0] * (1 - tx)
          + layer.values[y0 * layer.columns + x1] * tx;
        const bottom = layer.values[y1 * layer.columns + x0] * (1 - tx)
          + layer.values[y1 * layer.columns + x1] * tx;
        return top * (1 - ty) + bottom * ty;
      };
      const craters = [
        { count: 30, radius: [.008, .02], depth: [.1, .22] },
        { count: 320, radius: [.0025, .009], depth: [.065, .17] },
        { count: 1100, radius: [.001, .0045], depth: [.035, .12] }
      ].flatMap(({ count, radius, depth }) => Array.from({ length: count }, () => ({
        x: Math.random(),
        y: randomBetween(.025, .975),
        radius: randomBetween(...radius),
        depth: randomBetween(...depth)
      })));
      const craterRelief = new Float32Array(textureWidth * textureHeight);
      craters.forEach((crater) => {
        const xRadius = Math.ceil(crater.radius * textureWidth * 1.35);
        const yRadius = Math.ceil(crater.radius * textureHeight * 1.35);
        const centerX = Math.floor(crater.x * textureWidth);
        const centerY = Math.floor(crater.y * textureHeight);
        for (let offsetY = -yRadius; offsetY <= yRadius; offsetY++) {
          const y = centerY + offsetY;
          if (y < 0 || y >= textureHeight) continue;
          const v = y / textureHeight;
          for (let offsetX = -xRadius; offsetX <= xRadius; offsetX++) {
            const x = (centerX + offsetX + textureWidth) % textureWidth;
            const u = x / textureWidth;
            let dx = Math.abs(u - crater.x);
            dx = Math.min(dx, 1 - dx) * Math.cos((v - crater.y) * Math.PI);
            const distance = Math.hypot(dx, v - crater.y) / crater.radius;
            if (distance >= 1.35) continue;
            const bowl = Math.exp(-((distance / .58) ** 2));
            const rim = Math.exp(-(((distance - .88) / .12) ** 2));
            craterRelief[y * textureWidth + x] += crater.depth * (rim * .68 - bowl * .9);
          }
        }
      });

      for (let y = 0; y < textureHeight; y++) {
        const v = y / textureHeight;
        for (let x = 0; x < textureWidth; x++) {
          const u = x / textureWidth;
          const broadNoise = noiseAt(noiseLayers[1], u, v);
          const noise = noiseAt(noiseLayers[0], u, v) * .32
            + broadNoise * .21
            + noiseAt(noiseLayers[2], u, v) * .16
            + noiseAt(noiseLayers[3], u, v) * .12
            + noiseAt(noiseLayers[4], u, v) * .085
            + noiseAt(noiseLayers[5], u, v) * .055
            + noiseAt(noiseLayers[6], u, v) * .035
            + noiseAt(noiseLayers[7], u, v) * .025;
          const warpX = (noiseAt(noiseLayers[2], u, v) - .5) * .08;
          const warpY = (noiseAt(noiseLayers[3], u, v) - .5) * .08;
          const warpedU = ((u + warpX) % 1 + 1) % 1;
          const warpedV = Math.max(.01, Math.min(.99, v + warpY));
          const mareField = noiseAt(noiseLayers[0], warpedU, warpedV) * .46
            + noiseAt(noiseLayers[1], warpedU, warpedV) * .3
            + noiseAt(noiseLayers[2], warpedU, warpedV) * .16
            + noiseAt(noiseLayers[3], warpedU, warpedV) * .08;
          const mareEdge = Math.max(0, Math.min(1, (.56 - mareField) / .14));
          const mariaShade = (1 - mareEdge * mareEdge * (3 - 2 * mareEdge))
            * (.55 + noiseAt(noiseLayers[4], u, v) * .32);
          let relief = .48 + (noise - .5) * .22 + craterRelief[y * textureWidth + x];
          relief = Math.max(0, Math.min(1, relief));
          const craterDetail = craterRelief[y * textureWidth + x];
          const grain = (noise - .5) * 25
            + (noiseAt(noiseLayers[7], u, v) - .5) * 64
            + (relief - .48) * 36
            + craterDetail * 108;
          const tone = 201 + grain - mariaShade * 38;
          const pixel = (y * textureWidth + x) * 4;
          image.data[pixel] = Math.max(0, Math.min(255, tone - 5));
          image.data[pixel + 1] = Math.max(0, Math.min(255, tone));
          image.data[pixel + 2] = Math.max(0, Math.min(255, tone + 8));
          image.data[pixel + 3] = 255;
          const shade = Math.round(relief * 255);
          heightData[pixel] = heightData[pixel + 1] = heightData[pixel + 2] = shade;
          heightData[pixel + 3] = 255;
        }
      }

      textureContext.putImageData(image, 0, 0);
      const heightCanvas = document.createElement("canvas");
      heightCanvas.width = textureWidth;
      heightCanvas.height = textureHeight;
      const heightContext = heightCanvas.getContext("2d");
      if (!heightContext) throw new Error("Impossible de créer le canevas de relief lunaire.");
      const heightImage = heightContext.createImageData(textureWidth, textureHeight);
      heightImage.data.set(heightData);
      heightContext.putImageData(heightImage, 0, 0);

      const diffuse = new THREE.CanvasTexture(textureCanvas);
      diffuse.colorSpace = THREE.SRGBColorSpace;
      diffuse.wrapS = THREE.RepeatWrapping;
      diffuse.wrapT = THREE.ClampToEdgeWrapping;
      diffuse.anisotropy = 8;
      const bump = new THREE.CanvasTexture(heightCanvas);
      bump.wrapS = THREE.RepeatWrapping;
      bump.wrapT = THREE.ClampToEdgeWrapping;
      bump.anisotropy = 8;
      return { diffuse, bump };
    };

    const loadLunarTextures = (THREE, anisotropy) => {
      const loader = new THREE.TextureLoader();
      loader.setCrossOrigin("anonymous");
      const loadTexture = (path, colorSpace) => loader.loadAsync(new URL(path, document.baseURI).href)
        .then((texture) => {
          texture.colorSpace = colorSpace;
          texture.wrapS = THREE.RepeatWrapping;
          texture.wrapT = THREE.ClampToEdgeWrapping;
          texture.anisotropy = anisotropy;
          return texture;
        });
      return Promise.all([
        loadTexture("assets/lunar-color.jpg", THREE.SRGBColorSpace),
        loadTexture("assets/lunar-height.jpg", THREE.NoColorSpace)
      ]).then(([diffuse, bump]) => ({ diffuse, bump }));
    };

    const loadPlanetTextures = (THREE, anisotropy) => {
      const loader = new THREE.TextureLoader();
      const loadTexture = (path, colorSpace) => loader.loadAsync(new URL(path, document.baseURI).href)
        .then((texture) => {
          texture.colorSpace = colorSpace;
          texture.wrapS = THREE.RepeatWrapping;
          texture.wrapT = THREE.ClampToEdgeWrapping;
          texture.anisotropy = anisotropy;
          return texture;
        })
        .catch((error) => {
          console.warn(`Texture locale indisponible (${path}) ; le rendu procédural sera conservé.`, error);
          return null;
        });
      return Promise.all([
        loadTexture("assets/neptune-color.jpg", THREE.SRGBColorSpace),
        loadTexture("assets/neptune-bump.jpg", THREE.NoColorSpace),
        loadTexture("assets/saturn-color.svg", THREE.SRGBColorSpace),
        loadTexture("assets/saturn-rings.png", THREE.SRGBColorSpace)
      ]).then(([neptuneColor, neptuneBump, saturnColor, saturnRings]) => ({
        neptune: { color: neptuneColor, bump: neptuneBump },
        saturn: { color: saturnColor },
        rings: saturnRings
      }));
    };

    const createMoonScene = () => {
      const THREE = window.THREE;
      if (!THREE) {
        console.error("Three.js n'a pas pu être chargé depuis le CDN ; la lune 3D est indisponible.");
        return null;
      }
      try {
        const renderer = new THREE.WebGLRenderer({ canvas: moonCanvas, alpha: false, antialias: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
        renderer.setClearColor(0x03040a, 1);
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.08;

        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x03040a);
        const camera = new THREE.PerspectiveCamera(38, 1, .1, 180);
        const introStartZ = 48;
        const menuCameraZ = 5;
        camera.position.z = introStartZ;
        scene.add(new THREE.HemisphereLight(0xc7d8f4, 0x151925, .3));
        scene.add(new THREE.AmbientLight(0x7886a3, .08));
        const sunlight = new THREE.DirectionalLight(0xf1f3ff, 2.2);
        sunlight.position.set(-3.5, 2.3, 4);
        scene.add(sunlight);

        const particleVertexShader = `
          attribute float aSize;
          attribute float aPhase;
          attribute float aAlpha;
          attribute vec3 aTint;
          uniform float uTime;
          uniform float uOpacity;
          varying float vAlpha;
          varying vec3 vTint;
          void main() {
            vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
            gl_Position = projectionMatrix * viewPosition;
            gl_PointSize = clamp(aSize * (33.0 / max(1.0, -viewPosition.z)), 0.55, 6.5);
            vAlpha = aAlpha * uOpacity * (0.92 + 0.08 * sin(uTime * 0.7 + aPhase));
            vTint = aTint;
          }
        `;
        const particleFragmentShader = `
          varying float vAlpha;
          varying vec3 vTint;
          void main() {
            float radius = length(gl_PointCoord - vec2(0.5)) * 2.0;
            float halo = exp(-radius * radius * 5.2);
            float core = 1.0 - smoothstep(0.0, 0.28, radius);
            float alpha = (halo * 0.24 + core * 0.76) * vAlpha;
            if (alpha < 0.008) discard;
            gl_FragColor = vec4(vTint, alpha);
          }
        `;
        const createParticleLayer = (count, createParticle, opacity = 1) => {
          const positions = new Float32Array(count * 3);
          const sizes = new Float32Array(count);
          const phases = new Float32Array(count);
          const alphas = new Float32Array(count);
          const colors = new Float32Array(count * 3);
          for (let index = 0; index < count; index++) {
            const particle = createParticle(index);
            positions.set([particle.x, particle.y, particle.z], index * 3);
            sizes[index] = particle.size;
            phases[index] = particle.phase ?? Math.random() * Math.PI * 2;
            alphas[index] = particle.alpha ?? .7;
            const color = new THREE.Color(particle.color ?? 0xffffff);
            colors.set([color.r, color.g, color.b], index * 3);
          }
          const geometry = new THREE.BufferGeometry();
          geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
          geometry.setAttribute("aSize", new THREE.Float32BufferAttribute(sizes, 1));
          geometry.setAttribute("aPhase", new THREE.Float32BufferAttribute(phases, 1));
          geometry.setAttribute("aAlpha", new THREE.Float32BufferAttribute(alphas, 1));
          geometry.setAttribute("aTint", new THREE.Float32BufferAttribute(colors, 3));
          const material = new THREE.ShaderMaterial({
            uniforms: { uTime: { value: 0 }, uOpacity: { value: opacity } },
            vertexShader: particleVertexShader,
            fragmentShader: particleFragmentShader,
            transparent: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending
          });
          const points = new THREE.Points(geometry, material);
          scene.add(points);
          return points;
        };
        const gaussian = () => Math.random() + Math.random() + Math.random() - 1.5;
        const starLayers = [
          createParticleLayer(5000, () => ({
            x: (Math.random() * 2 - 1) * 56, y: (Math.random() * 2 - 1) * 34,
            z: randomBetween(-90, 43), size: randomBetween(1.15, 2.9),
            alpha: randomBetween(.44, .82),
            color: Math.random() > .9 ? 0xf1d9a7 : Math.random() > .48 ? 0xdfe9fb : 0xb9c9e8
          }), 1.16),
          createParticleLayer(3000, () => ({
            x: (Math.random() * 2 - 1) * 40, y: (Math.random() * 2 - 1) * 25,
            z: randomBetween(-60, 35), size: randomBetween(1.35, 3.2),
            alpha: randomBetween(.46, .84),
            color: Math.random() > .88 ? 0xf6e4c3 : Math.random() > .44 ? 0xf3f6ff : 0xd9e4fa
          }), 1.18),
          createParticleLayer(2200, () => ({
            x: (Math.random() * 2 - 1) * 50, y: (Math.random() * 2 - 1) * 30,
            z: randomBetween(-105, 40), size: randomBetween(.8, 1.9),
            alpha: randomBetween(.3, .58),
            color: Math.random() > .9 ? 0xdac394 : Math.random() > .5 ? 0xcbdaf3 : 0xe7edf8
          }), 1.02)
        ];
        const dustLayer = createParticleLayer(1600, () => ({
          x: (Math.random() * 2 - 1) * 11,
          y: (Math.random() * 2 - 1) * 7,
          z: randomBetween(8, 41),
          size: randomBetween(.55, 1.45),
          alpha: randomBetween(.09, .27),
          color: Math.random() > .7 ? 0xd8c8a9 : 0x9caecc
        }), .62);
        const dustField = new THREE.Group();
        dustField.add(dustLayer);
        scene.add(dustField);
        const nebulaLayers = [
          createParticleLayer(2200, () => ({
            x: -7 + gaussian() * 12, y: 1 + gaussian() * 8, z: 17 + gaussian() * 5,
            size: randomBetween(3.5, 11), alpha: randomBetween(.035, .12),
            color: Math.random() > .83 ? 0x9e8258 : 0x536d9e
          }), .62),
          createParticleLayer(2800, () => ({
            x: 8 + gaussian() * 15, y: -3 + gaussian() * 10, z: -7 + gaussian() * 7,
            size: randomBetween(4, 13), alpha: randomBetween(.025, .09),
            color: Math.random() > .9 ? 0xb09262 : 0x465b91
          }), .55),
          createParticleLayer(1800, () => ({
            x: -12 + gaussian() * 13, y: -4 + gaussian() * 9, z: -22 + gaussian() * 6,
            size: randomBetween(4, 12), alpha: randomBetween(.02, .075),
            color: 0x455986
          }), .5)
        ];
        const galaxyCount = 6200;
        const galaxy = createParticleLayer(galaxyCount, (index) => {
          const armCount = 4;
          const arm = index % armCount;
          const radius = Math.sqrt(Math.random()) * 14;
          const angle = radius * .28 + arm * (Math.PI * 2 / armCount) + gaussian() * .11;
          return {
            x: Math.cos(angle) * radius * 1.35,
            y: Math.sin(angle) * radius * .62,
            z: -36 + gaussian() * .7,
            size: randomBetween(.65, 2.1) * (1 - radius / 20),
            alpha: randomBetween(.14, .52) * (1 - radius / 19),
            color: Math.random() > .86 ? 0xc3a876 : (Math.random() > .5 ? 0x9fb8e5 : 0xe2e7f2)
          };
        }, .72);
        galaxy.rotation.x = -.24;
        galaxy.rotation.z = .13;
        const milkyWay = new THREE.Mesh(
          new THREE.PlaneGeometry(100, 58),
          new THREE.ShaderMaterial({
            uniforms: { uTime: { value: 0 } },
            vertexShader: `
              varying vec2 vUv;
              void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
              }
            `,
            fragmentShader: `
              uniform float uTime;
              varying vec2 vUv;
              void main() {
                vec2 p = (vUv - 0.5) * vec2(5.2, 2.8);
                float drift = uTime * 0.006;
                float broad = sin(p.x * 1.35 + sin(p.y * 1.9 + drift) * 0.8) * 0.5
                  + sin(p.y * 2.2 - drift * 0.4) * 0.25
                  + sin((p.x + p.y) * 0.65) * 0.25;
                float filaments = sin(p.x * 4.3 + p.y * 3.1
                  + sin(p.x * 1.4 - p.y * 2.2) * 0.7 + drift) * 0.5;
                float ridge = sin(p.x * 0.82) * 0.17 + sin(p.x * 1.73 + 0.6) * 0.055;
                float bandOffset = (p.y - ridge) * 1.5;
                float band = exp(-bandOffset * bandOffset);
                float clouds = smoothstep(-0.2, 0.52, broad + filaments * 0.18);
                float wisps = smoothstep(0.34, 0.82, broad + filaments * 0.32);
                float density = band * clouds * 0.105 + band * wisps * 0.018;
                float edge = smoothstep(0.0, 0.16, vUv.x) * (1.0 - smoothstep(0.84, 1.0, vUv.x));
                vec3 cool = vec3(0.14, 0.2, 0.34);
                vec3 warm = vec3(0.28, 0.22, 0.13);
                vec3 color = mix(cool, warm, smoothstep(0.22, 0.7, broad));
                gl_FragColor = vec4(color, density * edge * 0.72);
              }
            `,
            transparent: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
            side: THREE.DoubleSide
          })
        );
        milkyWay.position.set(0, 0, -44);
        scene.add(milkyWay);

        const createPlanetTextures = (kind) => {
          const textureWidth = 1024;
          const textureHeight = 512;
          const colorCanvas = document.createElement("canvas");
          const bumpCanvas = document.createElement("canvas");
          colorCanvas.width = bumpCanvas.width = textureWidth;
          colorCanvas.height = bumpCanvas.height = textureHeight;
          const colorContext = colorCanvas.getContext("2d");
          const bumpContext = bumpCanvas.getContext("2d");
          if (!colorContext || !bumpContext) throw new Error("Impossible de créer les textures procédurales des planètes.");
          const colorImage = colorContext.createImageData(textureWidth, textureHeight);
          const bumpImage = bumpContext.createImageData(textureWidth, textureHeight);
          const smooth = (value) => {
            const t = Math.max(0, Math.min(1, value));
            return t * t * (3 - 2 * t);
          };
          const noiseLayers = [4, 8, 16, 32, 64, 128, 256, 512].map((columns) => {
            const rows = columns / 2;
            return {
              columns,
              rows,
              values: Float32Array.from({ length: columns * rows }, Math.random)
            };
          });
          const noiseAt = (layer, u, v) => {
            const x = ((u % 1) + 1) % 1 * layer.columns;
            const y = ((v % 1) + 1) % 1 * layer.rows;
            const x0 = Math.floor(x);
            const y0 = Math.floor(y);
            const x1 = (x0 + 1) % layer.columns;
            const y1 = (y0 + 1) % layer.rows;
            const tx = smooth(x - x0);
            const ty = smooth(y - y0);
            const top = layer.values[y0 * layer.columns + x0] * (1 - tx)
              + layer.values[y0 * layer.columns + x1] * tx;
            const bottom = layer.values[y1 * layer.columns + x0] * (1 - tx)
              + layer.values[y1 * layer.columns + x1] * tx;
            return top * (1 - ty) + bottom * ty;
          };
          const fbm = (u, v, firstLayer = 0, count = 6) => {
            let value = 0;
            let weight = 0;
            for (let octave = 0; octave < count; octave++) {
              const amplitude = 1 / (2 ** octave);
              value += noiseAt(noiseLayers[firstLayer + octave], u, v) * amplitude;
              weight += amplitude;
            }
            return value / weight;
          };
          const plateColumns = 36;
          const plateRows = 18;
          const platePoints = Array.from({ length: plateColumns * plateRows }, () => ({
            x: .2 + Math.random() * .6,
            y: .2 + Math.random() * .6
          }));
          const plateEdgeAt = (u, v) => {
            const x = u * plateColumns;
            const y = v * plateRows;
            const cellX = Math.floor(x);
            const cellY = Math.floor(y);
            const localX = x - cellX;
            const localY = y - cellY;
            let nearest = Infinity;
            let secondNearest = Infinity;
            for (let offsetY = -1; offsetY <= 1; offsetY++) {
              const pointY = cellY + offsetY;
              const wrappedY = (pointY + plateRows) % plateRows;
              for (let offsetX = -1; offsetX <= 1; offsetX++) {
                const pointX = cellX + offsetX;
                const wrappedX = (pointX + plateColumns) % plateColumns;
                const point = platePoints[wrappedY * plateColumns + wrappedX];
                const distance = Math.hypot(offsetX + point.x - localX, offsetY + point.y - localY);
                if (distance < nearest) {
                  secondNearest = nearest;
                  nearest = distance;
                } else if (distance < secondNearest) {
                  secondNearest = distance;
                }
              }
            }
            return { edge: secondNearest - nearest, nearest };
          };
          for (let y = 0; y < textureHeight; y++) {
            const v = y / textureHeight;
            for (let x = 0; x < textureWidth; x++) {
              const u = x / textureWidth;
              let red;
              let green;
              let blue;
              let relief;
              if (kind === "gas") {
                const broad = fbm(u, v, 0, 5);
                const cloudDetail = fbm(u, v, 3, 5);
                const warp = (broad - .5) * .055;
                const warpedU = u + (cloudDetail - .5) * .032;
                const warpedV = v + warp;
                const latitude = (warpedV - .5) * Math.PI;
                const flow = fbm(warpedU * 1.7 + .13, warpedV * 1.2, 1, 5) - .5;
                const bandPhase = latitude * 31 + flow * 2.7 + Math.sin(warpedU * 11 + cloudDetail * 3) * .34;
                const bands = Math.sin(bandPhase);
                const turbulence = fbm(warpedU * 1.4, warpedV * 1.8 + bands * .009, 2, 5);
                const cloud = bands * .16 + (turbulence - .5) * .68 + (broad - .5) * .46;
                const vortexDx = Math.min(Math.abs(warpedU - .29), 1 - Math.abs(warpedU - .29)) / .07;
                const vortexDy = (warpedV - .58) / .047;
                const vortexRadius = Math.hypot(vortexDx, vortexDy);
                const vortex = Math.exp(-vortexRadius * vortexRadius * 1.45);
                const vortexSwirl = Math.sin(Math.atan2(vortexDy, vortexDx) * 5 + vortexRadius * 8);
                const cloudTone = Math.max(0, Math.min(1, .52 + cloud + vortex * (.16 + vortexSwirl * .055)));
                const cream = smooth(cloudTone + (broad - .5) * .2);
                const copper = smooth(.58 + turbulence * .35 + bands * .08);
                const fine = fbm(u, v, 5, 3) - .5;
                red = 119 + cream * 69 + copper * 17 + fine * 13;
                green = 82 + cream * 66 + copper * 14 + fine * 12;
                blue = 61 + cream * 57 + copper * 8 + fine * 11;
                relief = 128 + (cloud - .5) * 34 + (turbulence - .5) * 38 + vortex * 12 + fine * 24;
              } else if (kind === "ice") {
                const broad = fbm(u, v, 0, 5);
                const warpX = (fbm(u, v, 2, 3) - .5) * .045;
                const warpY = (fbm(u + .31, v + .17, 1, 4) - .5) * .035;
                const warpedU = u + warpX;
                const warpedV = v + warpY;
                const plates = plateEdgeAt(warpedU, warpedV);
                const crack = 1 - smooth((plates.edge - .018) / .105);
                const rimDistance = Math.abs(plates.edge - .13);
                const raisedRim = Math.exp(-((rimDistance / .075) ** 2));
                const fineNoise = fbm(warpedU * 1.8, warpedV * 1.8, 4, 4);
                const fractureNoise = fbm(warpedU * 2.7, warpedV * 2.7, 5, 3);
                const hairline = 1 - smooth((Math.abs(fractureNoise - .5) - .018) / .055);
                const mineral = smooth((broad + fineNoise * .35 - .48) * 4.4);
                const plateTone = .46 + (broad - .5) * .55 + (fineNoise - .5) * .3
                  + raisedRim * .18 - crack * .52 - hairline * .075 - mineral * .2;
                const tone = Math.max(.08, Math.min(.9, plateTone));
                red = 49 + tone * 139 + mineral * 12;
                green = 66 + tone * 153 - mineral * 3;
                blue = 84 + tone * 164 - mineral * 10;
                relief = 118 + (broad - .5) * 46 + (fineNoise - .5) * 38
                  + raisedRim * 48 - crack * 96 - hairline * 20 + mineral * 12;
              } else {
                const broad = fbm(u, v, 0, 5);
                const fine = fbm(u, v, 4, 4) - .5;
                const terrain = (broad - .5) * .65 + fine * .55;
                const tone = 72 + terrain * 44;
                red = tone * .84;
                green = tone * .91;
                blue = tone * 1.08 + 9;
                relief = 128 + terrain * 78;
              }
              const pixel = (y * textureWidth + x) * 4;
              colorImage.data[pixel] = Math.max(0, Math.min(255, red));
              colorImage.data[pixel + 1] = Math.max(0, Math.min(255, green));
              colorImage.data[pixel + 2] = Math.max(0, Math.min(255, blue));
              colorImage.data[pixel + 3] = 255;
              const height = Math.max(0, Math.min(255, relief));
              bumpImage.data[pixel] = bumpImage.data[pixel + 1] = bumpImage.data[pixel + 2] = height;
              bumpImage.data[pixel + 3] = 255;
            }
          }
          colorContext.putImageData(colorImage, 0, 0);
          bumpContext.putImageData(bumpImage, 0, 0);
          if (kind === "rock") {
            for (let index = 0; index < 95; index++) {
              const x = Math.random() * textureWidth;
              const y = Math.random() * textureHeight;
              const radius = randomBetween(1.5, 10);
              const crater = colorContext.createRadialGradient(x - radius * .2, y - radius * .25, radius * .08, x, y, radius);
              crater.addColorStop(0, "rgba(12, 16, 23, .38)");
              crater.addColorStop(.58, "rgba(30, 38, 51, .17)");
              crater.addColorStop(.82, "rgba(176, 184, 193, .14)");
              crater.addColorStop(1, "rgba(20, 25, 34, 0)");
              colorContext.fillStyle = crater;
              colorContext.beginPath();
              colorContext.arc(x, y, radius, 0, Math.PI * 2);
              colorContext.fill();
              const relief = bumpContext.createRadialGradient(x, y, radius * .42, x, y, radius);
              relief.addColorStop(0, "rgb(82, 82, 82)");
              relief.addColorStop(.72, "rgb(183, 183, 183)");
              relief.addColorStop(1, "rgb(128, 128, 128)");
              bumpContext.fillStyle = relief;
              bumpContext.beginPath();
              bumpContext.arc(x, y, radius, 0, Math.PI * 2);
              bumpContext.fill();
            }
          }
          const diffuse = new THREE.CanvasTexture(colorCanvas);
          diffuse.colorSpace = THREE.SRGBColorSpace;
          diffuse.wrapS = THREE.RepeatWrapping;
          diffuse.anisotropy = renderer.capabilities.getMaxAnisotropy();
          const bump = new THREE.CanvasTexture(bumpCanvas);
          bump.wrapS = THREE.RepeatWrapping;
          bump.anisotropy = renderer.capabilities.getMaxAnisotropy();
          return { diffuse, bump };
        };
        const addPlanet = ({ kind, x, y, z, radius, rimColor, opacity = 1 }) => {
          const textures = createPlanetTextures(kind === "neptune" ? "ice" : kind);
          const group = new THREE.Group();
          group.position.set(x, y, z);
          const material = new THREE.MeshStandardMaterial({
            map: textures.diffuse,
            bumpMap: textures.bump,
            bumpScale: kind === "gas" ? .042 : kind === "neptune" ? .12 : .085,
            roughness: kind === "gas" ? .88 : kind === "neptune" ? .94 : .98,
            metalness: 0,
            transparent: true,
            opacity,
            depthWrite: opacity >= .999
          });
          const sphere = new THREE.Mesh(new THREE.SphereGeometry(1, 96, 64), material);
          group.add(sphere);
          const atmosphere = new THREE.Mesh(
            new THREE.SphereGeometry(1.02, 64, 48),
            new THREE.ShaderMaterial({
              uniforms: {
                rim: { value: new THREE.Color(rimColor) },
                strength: { value: kind === "gas" ? .22 : kind === "ice" ? .2 : .12 },
                lightDirection: { value: new THREE.Vector3(-3.5, 2.3, 4).normalize() },
                opacity: { value: opacity }
              },
              vertexShader: `
                uniform vec3 lightDirection;
                varying vec3 vNormalView;
                varying vec3 vViewDirection;
                varying vec3 vLightDirectionView;
                void main() {
                  vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
                  vNormalView = normalize(normalMatrix * normal);
                  vViewDirection = normalize(-viewPosition.xyz);
                  vLightDirectionView = normalize(mat3(viewMatrix) * lightDirection);
                  gl_Position = projectionMatrix * viewPosition;
                }
              `,
              fragmentShader: `
                uniform vec3 rim;
                uniform float strength;
                uniform float opacity;
                varying vec3 vNormalView;
                varying vec3 vViewDirection;
                varying vec3 vLightDirectionView;
                void main() {
                  vec3 normal = normalize(vNormalView);
                  float facing = max(dot(normal, normalize(vViewDirection)), 0.0);
                  float illuminatedRim = smoothstep(-0.2, 0.45, dot(normal, normalize(vLightDirectionView)));
                  float edge = pow(1.0 - facing, 3.8) * illuminatedRim;
                  gl_FragColor = vec4(rim, edge * strength * opacity);
                }
              `,
              transparent: true,
              depthWrite: false,
              blending: THREE.AdditiveBlending
            })
          );
          group.add(atmosphere);
          group.scale.setScalar(radius);
          group.userData.setOpacity = (value) => {
            material.opacity = value;
            material.depthWrite = value >= .999;
            atmosphere.material.uniforms.opacity.value = value;
          };
          group.userData.applyTextures = ({ color, bump }) => {
            if (color && material.map !== color) {
              material.map?.dispose();
              material.map = color;
            }
            if (bump) {
              material.bumpMap?.dispose();
              material.bumpMap = bump;
              material.bumpScale = kind === "gas" ? .018 : .012;
            }
            material.needsUpdate = true;
          };
          scene.add(group);
          return group;
        };
        const distantMoon = addPlanet({
          kind: "neptune", x: 2.8, y: 1.15, z: 35.5, radius: .78, rimColor: 0x9bbbe0, opacity: 0
        });
        const gasGiant = addPlanet({
          kind: "gas", x: -3.2, y: 1.7, z: 19, radius: 1.45, rimColor: 0xd8bd94
        });
        const fallbackRingMap = new THREE.DataTexture(
          new Uint8Array([255, 255, 255, 255]),
          1,
          1,
          THREE.RGBAFormat
        );
        fallbackRingMap.needsUpdate = true;
        const rings = new THREE.Mesh(
          new THREE.RingGeometry(1.18, 1.92, 256, 4),
          new THREE.ShaderMaterial({
            uniforms: {
              innerRadius: { value: 1.18 },
              outerRadius: { value: 1.92 },
              opacity: { value: 0 },
              ringMap: { value: fallbackRingMap },
              hasRingMap: { value: 0 }
            },
            vertexShader: `
              varying vec3 vRingPosition;
              void main() {
                vRingPosition = position;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
              }
            `,
            fragmentShader: `
              uniform float innerRadius;
              uniform float outerRadius;
              uniform float opacity;
              uniform sampler2D ringMap;
              uniform float hasRingMap;
              varying vec3 vRingPosition;
              void main() {
                float radius = length(vRingPosition.xy);
                float edge = smoothstep(innerRadius, innerRadius + 0.09, radius)
                  * (1.0 - smoothstep(outerRadius - 0.1, outerRadius, radius));
                float bands = 0.62 + 0.2 * sin(radius * 74.0) + 0.1 * sin(radius * 191.0);
                float gaps = smoothstep(0.08, 0.28, abs(sin(radius * 13.5)));
                vec2 shadowOffset = vRingPosition.xy - vec2(-1.5, 1.0);
                float planetShadow = 1.0 - 0.78 * (1.0 - smoothstep(0.35, 1.15, length(shadowOffset)));
                vec3 warmDust = mix(vec3(0.32, 0.3, 0.27), vec3(0.78, 0.68, 0.53), bands);
                vec2 ringUv = vec2(
                  (radius - innerRadius) / (outerRadius - innerRadius),
                  atan(vRingPosition.y, vRingPosition.x) * 0.159154943 + 0.5
                );
                vec4 mappedRing = texture2D(ringMap, ringUv);
                vec3 ringColor = mix(warmDust, mappedRing.rgb, hasRingMap);
                float ringAlpha = mix(1.0, mappedRing.a, hasRingMap);
                float alpha = edge * gaps * (0.2 + bands * 0.34) * ringAlpha * planetShadow * opacity;
                if (alpha < 0.015) discard;
                gl_FragColor = vec4(ringColor, alpha);
              }
            `,
            transparent: true,
            depthWrite: false,
            side: THREE.DoubleSide
          })
        );
        rings.rotation.set(1.1, 0, -.28);
        rings.position.z = -.025;
        gasGiant.add(rings);
        loadPlanetTextures(THREE, renderer.capabilities.getMaxAnisotropy()).then((textures) => {
          distantMoon.userData.applyTextures(textures.neptune);
          gasGiant.userData.applyTextures(textures.saturn);
          if (textures.rings) {
            fallbackRingMap.dispose();
            textures.rings.wrapS = THREE.ClampToEdgeWrapping;
            textures.rings.wrapT = THREE.RepeatWrapping;
            rings.material.uniforms.ringMap.value = textures.rings;
            rings.material.uniforms.hasRingMap.value = 1;
          }
          renderer.render(scene, camera);
        });

        const geometry = new THREE.SphereGeometry(1, 192, 128);
        const material = new THREE.MeshStandardMaterial({
          color: 0xffffff,
          bumpScale: .075,
          displacementScale: .018,
          roughness: 1,
          metalness: 0,
          transparent: true,
          depthWrite: false,
          opacity: 0
        });
        const moon = new THREE.Mesh(geometry, material);
        const atmosphere = new THREE.Mesh(
          new THREE.PlaneGeometry(4, 4),
          new THREE.ShaderMaterial({
            uniforms: { glow: { value: .2 }, visibility: { value: 1 } },
            vertexShader: `
              varying vec2 vUv;
              void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
              }
            `,
            fragmentShader: `
              uniform float glow;
              uniform float visibility;
              varying vec2 vUv;
              void main() {
                float radius = length((vUv - 0.5) * 2.0);
                float halo = exp(-radius * radius * 7.0) * (1.0 - smoothstep(0.55, 1.0, radius));
                gl_FragColor = vec4(vec3(0.9, 0.86, 0.76), halo * glow * visibility);
              }
            `,
            transparent: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending
          })
        );
        atmosphere.position.z = -.08;
        atmosphere.renderOrder = 1;
        const group = new THREE.Group();
        group.add(moon, atmosphere);
        scene.add(group);
        const frustumHeightAtMenu = 2 * menuCameraZ * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
        const frustumWidthAtMenu = frustumHeightAtMenu;
        const particleLayers = [...starLayers, ...nebulaLayers, galaxy];
        const applyLunarTextures = ({ diffuse, bump }) => {
          material.map = diffuse;
          material.bumpMap = bump;
          material.displacementMap = bump;
          material.needsUpdate = true;
          renderer.render(scene, camera);
        };
        loadLunarTextures(THREE, renderer.capabilities.getMaxAnisotropy())
          .then(applyLunarTextures)
          .catch((loadError) => {
            console.warn("Les cartes NASA de la Lune sont indisponibles ; génération de la texture procédurale de secours.", loadError);
            try {
              applyLunarTextures(createLunarTextures(THREE));
            } catch (fallbackError) {
              console.error("Impossible de générer la texture lunaire procédurale de secours.", fallbackError);
            }
          });

        return {
          resize(viewWidth, viewHeight) {
            renderer.setSize(viewWidth, viewHeight, false);
            camera.aspect = viewWidth / viewHeight;
            camera.updateProjectionMatrix();
            const radius = Math.min(viewWidth, viewHeight) * .1 * frustumHeightAtMenu / viewHeight;
            group.scale.setScalar(radius);
            group.position.set(-frustumWidthAtMenu * camera.aspect * .4, frustumHeightAtMenu * .04, 0);
            camera.position.set(0, 0, menuCameraZ);
            camera.lookAt(0, 0, 0);
            renderer.render(scene, camera);
          },
          render(time, introProgress) {
            const progress = Number.isFinite(introProgress)
              ? Math.max(0, Math.min(1, introProgress))
              : 1;
            const easeOutCubic = 1 - (1 - progress) ** 3;
            const ramp = (start, end) => {
              const value = THREE.MathUtils.clamp((progress - start) / (end - start), 0, 1);
              return value * value * (3 - 2 * value);
            };
            const firstPlanetOpacity = ramp(0, .04) * (1 - ramp(.075, .1));
            const ringPlanetOpacity = ramp(.1, .14) * (1 - ramp(.32, .38));
            const finalMoonOpacity = ramp(.34, .7);
            distantMoon.userData.setOpacity(firstPlanetOpacity);
            gasGiant.userData.setOpacity(ringPlanetOpacity);
            rings.material.uniforms.opacity.value = ringPlanetOpacity;
            material.opacity = finalMoonOpacity;
            atmosphere.material.uniforms.visibility.value = finalMoonOpacity;
            const approachToPlanets = ramp(0, .2);
            const moonApproachProgress = THREE.MathUtils.clamp((progress - .2) / .55, 0, 1);
            const approachToMoon = moonApproachProgress ** 1.35;
            camera.position.z = introStartZ - 17 * approachToPlanets - 26 * approachToMoon;
            camera.position.x = Math.sin(progress * Math.PI) * .16;
            camera.position.y = Math.sin(progress * Math.PI * 1.4) * Math.sin(progress * Math.PI) * .08;
            camera.lookAt(0, 0, 0);
            moon.rotation.y = reducedMotion ? 0 : time * .000018;
            gasGiant.rotation.y = reducedMotion ? 0 : -time * .000025;
            distantMoon.rotation.y = reducedMotion ? 0 : time * .00003;
            galaxy.rotation.y = reducedMotion ? 0 : time * .000003;
            dustField.position.z = -43 * easeOutCubic;
            dustField.position.x = Math.sin(progress * Math.PI) * .24;
            milkyWay.material.uniforms.uTime.value = reducedMotion ? 0 : time * .001;
            particleLayers.forEach((layer) => {
              layer.material.uniforms.uTime.value = reducedMotion ? 0 : time * .001;
            });
            atmosphere.material.uniforms.glow.value = reducedMotion ? .18 : .18 + Math.sin(time * .00014) * .018;
            renderer.render(scene, camera);
          }
        };
      } catch (error) {
        console.error("Impossible d'initialiser le rendu WebGL de la lune.", error);
        return null;
      }
    };

    moonScene = createMoonScene();

    let introFinished = false;
    const finishOpeningSequence = () => {
      if (introFinished) return;
      introFinished = true;
      introActive = false;
      welcomeScreen.inert = false;
      skipButton.removeEventListener("click", skipOpeningSequence);
      skipButton.hidden = true;
      intro.setAttribute("aria-hidden", "true");
      document.body.classList.remove("is-intro-running");
      intro.classList.add("is-leaving");
      window.setTimeout(() => intro.remove(), 1400);
      moonScene?.render(motionTime, null);
    };

    const skipOpeningSequence = () => {
      if (!introActive) return;
      introElapsed = introDuration;
      moonScene?.render(motionTime, 1);
      finishOpeningSequence();
    };

    const drawFrame = () => {
      const progress = introActive ? Math.min(1, introElapsed / introDuration) : null;
      moonScene?.render(motionTime, progress);
      if (introActive && progress >= 1) finishOpeningSequence();
    };

    const resize = () => {
      width = Math.max(1, window.innerWidth);
      height = Math.max(1, window.innerHeight);
      moonScene?.resize(width, height);
      drawFrame();
    };

    stopBackgroundAnimation = () => {
      if (frameHandle) cancelAnimationFrame(frameHandle);
      frameHandle = 0;
      isRunning = false;
      previousFrameTime = 0;
    };

    startBackgroundAnimation = () => {
      if (reducedMotion || !moonScene || isRunning || document.hidden || !isSkyVisible()) return;
      isRunning = true;
      const tick = (time) => {
        if (document.hidden || !isSkyVisible()) {
          stopBackgroundAnimation();
          return;
        }
        const delta = previousFrameTime ? Math.min(time - previousFrameTime, 50) : 16.7;
        previousFrameTime = time;
        motionTime += delta;
        if (introActive) introElapsed += delta;
        drawFrame();
        if (isRunning) frameHandle = requestAnimationFrame(tick);
      };
      frameHandle = requestAnimationFrame(tick);
    };

    const onVisibilityChange = () => {
      if (document.hidden) stopBackgroundAnimation();
      else startBackgroundAnimation();
    };

    skipButton.addEventListener("click", skipOpeningSequence);
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibilityChange);
    resize();
    if (reducedMotion || !moonScene) finishOpeningSequence();
    startBackgroundAnimation();
  }

  initializeCelestialScene();
})();
