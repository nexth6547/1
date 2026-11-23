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
            label: "Ton cadeau (ce que je t'ai offert)",
            placeholder: "Écris ta réponse...",
            answers: ["un dessin", "dessin", "le dessin"]
          },
          {
            label: "Mon cadeau (ce que tu m'as offert)",
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
      subtitle: "Une petite lumière cherche le chemin jusqu'au cœur. Guide-la jusqu'à la sortie.",
      game: {
        type: "maze",
        map: [
          "###########", "#S#########", "#.#.......#", "#.#.#####.#", "#.#.....#.#",
          "#.#####.#.#", "#.....#.#.#", "#####...#.#", "#.....#...#", "#.#######E#", "###########"
        ]
      },
      personalMessage: "Le mois de Janvier je pense que ça devait être le pire mois avec ton stage et je crois que j'avais énormément stressé ect c'était vraiment long et chiant c'était horrible mais je t'avais quand même fait une belle surprise au soir de ton stage eheh j'avais passé une superbe soirée franchement."
    },
    {
      title: "Correspondance de moments",
      calendarMonth: "Février",
      label: "Les paires",
      subtitle: "Chaque petit indice appartient à un souvenir. Retrouve les quatre bonnes paires.",
      game: {
        type: "matches",
        pairs: [
          { left: "Notre premier café", right: "Un cappuccino partagé" },
          { left: "Le jour de notre rencontre", right: "Un sourire inoubliable" },
          { left: "Notre première balade", right: "Le chemin au bord de l'eau" },
          { left: "Notre chanson", right: "Celle que l'on chante ensemble" }
        ]
      },
      personalMessage: "À venir."
    },
    {
      title: "La chasse aux étoiles",
      calendarMonth: "Mars",
      label: "Les étoiles",
      subtitle: "Les étoiles filantes cachent un poème. Clique-les dans le bon ordre.",
      game: {
        type: "stars",
        sequence: ["rose", "gold", "blue", "rose"],
        stars: [
          { id: "rose", glyph: "✦", color: "rose" },
          { id: "gold", glyph: "✧", color: "gold" },
          { id: "blue", glyph: "✶", color: "blue" }
        ],
        poem: ["Une étoile pour notre rencontre,", "une autre pour chacun de nos rires,", "et toutes celles du ciel", "pour les rêves qu'il nous reste à vivre."]
      },
      personalMessage: "À venir."
    },
    {
      title: "Le cap de la moitié",
      calendarMonth: "Avril",
      label: "La boîte à musique",
      subtitle: "Quelques notes se sont échappées de notre boîte à musique. Rejoue la mélodie.",
      game: {
        type: "music",
        notes: [
          { id: "do", label: "Do", frequency: 261.63 },
          { id: "mi", label: "Mi", frequency: 329.63 },
          { id: "sol", label: "Sol", frequency: 392 },
          { id: "la", label: "La", frequency: 440 }
        ],
        sequence: ["do", "mi", "sol", "mi", "la"],
        prompt: "Écoute la mélodie, puis rejoue-la note après note.",
        message: "Six mois déjà, et pourtant j'ai encore l'impression de découvrir chaque jour une nouvelle petite chose à aimer chez toi.\n\nMerci d'être ma mélodie préférée."
      },
      personalMessage: "À venir."
    },
    {
      title: "Le cherche et trouve",
      calendarMonth: "Mai",
      label: "Le petit chat",
      subtitle: "Cette chambre est pleine de petits détails… mais un invité s'y est caché.",
      game: {
        type: "seek",
        target: "chat",
        targetGlyph: "🐈",
        targetLabel: "le petit chat",
        objects: [
          { glyph: "🪴", left: "12%", top: "27%" }, { glyph: "📚", left: "28%", top: "20%" },
          { glyph: "🧸", left: "47%", top: "25%" }, { glyph: "🕯️", left: "72%", top: "18%" },
          { glyph: "🪟", left: "88%", top: "32%" }, { glyph: "🌷", left: "18%", top: "55%" },
          { glyph: "🧦", left: "37%", top: "74%" }, { glyph: "☕", left: "63%", top: "72%" },
          { glyph: "🪴", left: "82%", top: "61%" }, { glyph: "💌", left: "92%", top: "79%" },
          { glyph: "🌙", left: "52%", top: "43%" }, { glyph: "🐈", left: "31%", top: "48%", id: "chat" },
          { glyph: "🧶", left: "75%", top: "43%" }, { glyph: "🪻", left: "10%", top: "83%" }
        ]
      },
      personalMessage: "À venir."
    },
    {
      title: "Le déchiffrage de code",
      calendarMonth: "Juin",
      label: "Le message secret",
      subtitle: "Les lettres ont avancé de trois places. Ramène-les chez elles pour lire le message.",
      game: {
        type: "cipher",
        cipher: "QRXV VRPPHV SOXV EHDXA D GHXA",
        shift: 3,
        answer: "nous sommes plus beaux a deux",
        hint: "Indice : pour décoder, recule chaque lettre de trois places dans l'alphabet."
      },
      personalMessage: "À venir."
    },
    {
      title: "La balade dans nos souvenirs",
      calendarMonth: "Juillet",
      label: "Les polaroids",
      subtitle: "Retourne chaque polaroid pour revoir un petit instant de notre histoire.",
      game: {
        type: "polaroids",
        cards: [
          { front: "Le premier regard", back: "Le début de notre plus belle aventure." },
          { front: "Notre endroit préféré", back: "Même un lieu ordinaire devient spécial avec toi." },
          { front: "Un fou rire", back: "J'aimerais garder le son de ton rire dans une petite boîte." },
          { front: "Juste nous deux", back: "Mon souvenir préféré, c'est celui où tu es là." }
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

  function showScreen(name) {
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
      .map((month, index) => `Mois ${index + 1} · ${month.calendarMonth} · ${month.title}\n${month.personalMessage}`)
      .join("\n\n");
    $("#reveal-copy").textContent = `${LOVE_STORY.finalMessage}\n\n✦ Notre année en quelques mots ✦\n\n${recap}`;
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
    activeMonth = index;
    foundFragments = new Set();
    attempts = 0;
    selectedLeft = null;
    matchedPairs = new Set();
    const month = LOVE_STORY.months[index];
    gameContent.classList.toggle("is-hunt", month.game.type === "hunt");
    $("#game-counter").textContent = `SOUVENIR ${String(index + 1).padStart(2, "0")} / 12`;
    $("#game-eyebrow").textContent = `Mois ${index + 1} · ${month.calendarMonth} · ${completed.includes(index) ? "À relire" : "À découvrir"}`;
    $("#game-title").textContent = month.title;
    $("#game-description").textContent = month.subtitle;
    if (month.game.type === "hunt") renderHunt(month.game);
    else if (month.game.type === "riddle") renderRiddle(month.game);
    else if (month.game.type === "maze") renderMaze(month.game);
    else if (month.game.type === "matches") renderMatches(month.game);
    else if (month.game.type === "stars") renderStars(month.game);
    else if (month.game.type === "music") renderMusic(month.game);
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
    ArrowUp: [0, -1], z: [0, -1], Z: [0, -1],
    ArrowDown: [0, 1], s: [0, 1], S: [0, 1],
    ArrowLeft: [-1, 0], q: [-1, 0], Q: [-1, 0],
    ArrowRight: [1, 0], d: [1, 0], D: [1, 0]
  };

  function renderMaze(config) {
    gameContent.innerHTML = `<div class="game-panel maze-panel"><canvas id="maze-canvas" width="440" height="440" role="img" aria-label="Labyrinthe à résoudre"></canvas><p class="maze-instructions">Flèches du clavier ou ZQSD pour avancer · Le petit cœur t'attend au bout du chemin.</p><div class="maze-mobile-controls" aria-label="Contrôles du labyrinthe"><button type="button" data-move="ArrowUp" aria-label="Haut">↑</button><button type="button" data-move="ArrowLeft" aria-label="Gauche">←</button><button type="button" data-move="ArrowDown" aria-label="Bas">↓</button><button type="button" data-move="ArrowRight" aria-label="Droite">→</button></div></div>`;
    const canvas = $("#maze-canvas");
    const context = canvas.getContext("2d");
    const maze = config.map;
    if (!context) {
      showToast("Le canvas n'est pas disponible dans ce navigateur.");
      return;
    }
    let player = { x: 1, y: 1 };
    const tile = canvas.width / maze[0].length;
    const draw = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      maze.forEach((row, y) => [...row].forEach((cell, x) => {
        const px = x * tile;
        const py = y * tile;
        if (cell === "#") {
          context.fillStyle = "#25314c";
          context.fillRect(px, py, tile, tile);
          context.strokeStyle = "rgba(255,255,255,.035)";
          context.strokeRect(px, py, tile, tile);
        } else {
          context.fillStyle = "#131d34";
          context.fillRect(px, py, tile, tile);
        }
        if (cell === "E") {
          context.fillStyle = "#f472b6";
          context.shadowColor = "#f472b6";
          context.shadowBlur = 18;
          context.font = `${tile * .58}px sans-serif`;
          context.textAlign = "center";
          context.textBaseline = "middle";
          context.fillText("♥", px + tile / 2, py + tile / 2 + 1);
          context.shadowBlur = 0;
        }
      }));
      context.beginPath();
      context.arc((player.x + .5) * tile, (player.y + .5) * tile, tile * .24, 0, Math.PI * 2);
      context.fillStyle = "#fbbf24";
      context.shadowColor = "#fbbf24";
      context.shadowBlur = 16;
      context.fill();
      context.shadowBlur = 0;
    };
    const move = (key) => {
      const direction = DIRECTIONS[key];
      if (!direction) return;
      const nx = player.x + direction[0];
      const ny = player.y + direction[1];
      if (!maze[ny] || maze[ny][nx] === "#") return;
      player = { x: nx, y: ny };
      draw();
      if (maze[ny][nx] === "E") completeMonth();
    };
    document.onkeydown = (event) => {
      if (!screens.game.hidden && activeMonth === 2 && DIRECTIONS[event.key]) {
        event.preventDefault();
        move(event.key);
      }
    };
    gameContent.querySelectorAll("[data-move]").forEach((button) => button.addEventListener("click", () => move(button.dataset.move)));
    draw();
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
    gameContent.innerHTML = `<div class="game-panel stars-panel"><p class="activity-kicker">La constellation attend son poème</p><p class="star-order-label">L'ordre à suivre</p><div class="star-order" aria-label="Séquence de couleurs"></div><div class="shooting-star-field" aria-label="Étoiles filantes à cliquer dans l'ordre"><span class="star-trail star-trail-one" aria-hidden="true"></span><span class="star-trail star-trail-two" aria-hidden="true"></span></div><p class="activity-feedback" aria-live="polite">Observe les couleurs et suis l'ordre de la constellation.</p><div class="star-progress" aria-label="Progression du poème"></div><div class="revealed-poem" hidden></div><button class="button button-primary star-finish" type="button" hidden>Garder ce poème ↗</button></div>`;
    const field = $(".shooting-star-field");
    const progress = $(".star-progress");
    const order = $(".star-order");
    const feedback = $(".activity-feedback");
    config.sequence.forEach((starId, index) => {
      const starConfig = config.stars.find((star) => star.id === starId);
      if (!starConfig) return;
      const orderDot = document.createElement("span");
      orderDot.className = `star-order-dot star-${starConfig.color}`;
      orderDot.textContent = starConfig.glyph;
      orderDot.setAttribute("aria-label", `${index + 1} : ${starConfig.color}`);
      order.append(orderDot);
      const button = document.createElement("button");
      button.type = "button";
      button.className = `shooting-target star-${starConfig.color}`;
      button.style.setProperty("--star-lane", `${18 + (index * 19) % 66}%`);
      button.style.setProperty("--star-delay", `${-index * 1.25}s`);
      button.setAttribute("aria-label", `Étoile ${starConfig.color}, étape ${index + 1}`);
      button.textContent = starConfig.glyph;
      button.addEventListener("click", () => {
        if (button.disabled) return;
        if (index !== foundFragments.size) {
          feedback.textContent = "Pas encore celle-ci… suis l'ordre des étoiles.";
          button.classList.remove("is-wrong");
          requestAnimationFrame(() => button.classList.add("is-wrong"));
          return;
        }
        foundFragments.add(index);
        button.disabled = true;
        button.classList.add("is-caught");
        order.children[index].classList.add("is-lit");
        const pip = document.createElement("span");
        pip.className = "star-progress-dot is-lit";
        pip.textContent = "✦";
        progress.append(pip);
        feedback.textContent = `Une étoile retrouvée… ${foundFragments.size} sur ${config.sequence.length}.`;
        if (foundFragments.size === config.sequence.length) {
          const poem = $(".revealed-poem");
          config.poem.forEach((line) => {
            const paragraph = document.createElement("p");
            paragraph.textContent = line;
            poem.append(paragraph);
          });
          poem.hidden = false;
          $(".star-finish").hidden = false;
          feedback.textContent = "Le poème est apparu. Prends le temps de le lire.";
        }
      });
      field.append(button);
    });
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

  function renderMusic(config) {
    gameContent.innerHTML = `<div class="game-panel music-panel"><div class="music-box-art" aria-hidden="true">♫</div><p class="activity-kicker"></p><button class="text-button music-listen" type="button">Écouter la mélodie ♫</button><div class="music-notes"></div><div class="music-sequence" aria-label="Notes jouées"></div><p class="activity-feedback" aria-live="polite"></p><div class="music-message" hidden></div><button class="button button-primary music-finish" type="button" hidden>Garder ce morceau ↗</button></div>`;
    $(".activity-kicker").textContent = config.prompt;
    const notes = $(".music-notes");
    const sequenceDisplay = $(".music-sequence");
    const feedback = $(".activity-feedback");
    let position = 0;
    config.notes.forEach((note) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "music-note";
      button.dataset.note = note.id;
      button.setAttribute("aria-label", `Jouer la note ${note.label}`);
      button.innerHTML = `<span class="music-note-orb"></span><span class="music-note-label"></span>`;
      button.querySelector(".music-note-label").textContent = note.label;
      button.addEventListener("click", () => {
        if (position >= config.sequence.length) return;
        playNote(note.frequency);
        const pip = document.createElement("span");
        pip.className = "music-note-pip";
        pip.textContent = note.label;
        sequenceDisplay.append(pip);
        if (config.sequence[position] !== note.id) {
          position = 0;
          sequenceDisplay.replaceChildren();
          feedback.textContent = "La mélodie s'est envolée… recommence doucement.";
          return;
        }
        position += 1;
        feedback.textContent = `${position} sur ${config.sequence.length} notes retrouvées.`;
        if (position === config.sequence.length) {
          $(".music-message").textContent = config.message;
          $(".music-message").hidden = false;
          $(".music-finish").hidden = false;
          feedback.textContent = "La boîte s'ouvre et livre son message.";
        }
      });
      notes.append(button);
    });
    $(".music-listen").addEventListener("click", () => {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) {
        config.sequence.forEach((noteId, index) => {
          const note = config.notes.find((item) => item.id === noteId);
          if (note) setTimeout(() => playNote(note.frequency), index * 480);
        });
        return;
      }
      try {
        const context = new AudioContextClass();
        config.sequence.forEach((noteId, index) => {
          const note = config.notes.find((item) => item.id === noteId);
          if (!note) return;
          const start = context.currentTime + index * .48;
          const oscillator = context.createOscillator();
          const gain = context.createGain();
          oscillator.type = "sine";
          oscillator.frequency.value = note.frequency;
          gain.gain.setValueAtTime(.0001, start);
          gain.gain.exponentialRampToValueAtTime(.08, start + .025);
          gain.gain.exponentialRampToValueAtTime(.0001, start + .38);
          oscillator.connect(gain);
          gain.connect(context.destination);
          oscillator.start(start);
          oscillator.stop(start + .4);
        });
        setTimeout(() => context.close(), config.sequence.length * 480 + 500);
      } catch (error) {
        console.warn("La mélodie ne peut pas être jouée dans ce navigateur.", error);
        showToast("La mélodie audio est indisponible. Tu peux tout de même jouer les notes.");
      }
    });
    $(".music-finish").addEventListener("click", completeMonth);
  }

  function renderSeek(config) {
    gameContent.innerHTML = `<div class="game-panel seek-panel"><p class="activity-kicker">Un petit intrus s'est caché dans le décor…</p><div class="seek-scene" role="group" aria-label="Illustration cherche et trouve"></div><p class="activity-feedback" aria-live="polite">Retrouve ${config.targetLabel} parmi tous ces petits détails.</p></div>`;
    const scene = $(".seek-scene");
    config.objects.forEach((item, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `seek-object${item.id === config.target ? " seek-target" : ""}`;
      button.style.left = item.left;
      button.style.top = item.top;
      button.style.setProperty("--float-delay", `${-(index % 5) * .45}s`);
      button.setAttribute("aria-label", item.id === config.target ? `Trouver ${config.targetLabel}` : "Détail du décor");
      button.textContent = item.glyph;
      button.addEventListener("click", () => {
        if (item.id === config.target) {
          button.classList.add("is-found");
          $(".activity-feedback").textContent = `Trouvé ! ${config.targetLabel} était bien là.`;
          completeMonth();
        } else {
          button.classList.remove("is-bump");
          requestAnimationFrame(() => button.classList.add("is-bump"));
          $(".activity-feedback").textContent = "Un joli détail, mais ce n'est pas celui que l'on cherche.";
        }
      });
      scene.append(button);
    });
  }

  function renderCipher(config) {
    gameContent.innerHTML = `<div class="game-panel cipher-panel"><div class="cipher-seal" aria-hidden="true">⌘</div><p class="activity-kicker">Le message intercepté</p><p class="cipher-text"></p><p class="cipher-instructions">Décale les lettres dans l'alphabet pour retrouver le message.</p><form class="answer-form"><input class="answer-input" type="text" autocomplete="off" placeholder="Le message secret…" aria-label="Message décodé"><button class="button button-primary" type="submit">Déchiffrer ↗</button></form><p class="feedback" aria-live="polite"></p><p class="hint-copy" aria-live="polite"></p></div>`;
    $(".cipher-text").textContent = config.cipher;
    $(".answer-form").addEventListener("submit", (event) => {
      event.preventDefault();
      const answer = normalizeAnswer($(".answer-input").value);
      if (answer === normalizeAnswer(config.answer)) {
        $(".feedback").textContent = "Le message est déchiffré.";
        $(".feedback").classList.add("is-correct");
        completeMonth();
        return;
      }
      attempts += 1;
      $(".feedback").textContent = "Les lettres ne sont pas encore à leur place.";
      if (attempts >= 2) $(".hint-copy").textContent = config.hint;
      $(".answer-input").select();
    });
  }

  function renderPolaroids(config) {
    gameContent.innerHTML = `<div class="game-panel polaroid-panel"><p class="activity-kicker">Un album de petits instants</p><div class="polaroid-grid"></div><p class="activity-feedback" aria-live="polite">Retourne les photos pour découvrir ce qui se cache au dos.</p><button class="button button-primary polaroid-finish" type="button" hidden>Refermer l'album ↗</button></div>`;
    const grid = $(".polaroid-grid");
    config.cards.forEach((card, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `polaroid-card polaroid-${index + 1}`;
      button.setAttribute("aria-pressed", "false");
      button.innerHTML = `<span class="polaroid-inner"><span class="polaroid-face polaroid-front"><span class="polaroid-photo"></span><span class="polaroid-caption"></span></span><span class="polaroid-face polaroid-back"><span class="polaroid-back-star" aria-hidden="true">✦</span><span class="polaroid-message"></span></span></span>`;
      button.querySelector(".polaroid-photo").textContent = ["☕", "🌙", "☀", "♥"][index % 4];
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
          $(".polaroid-finish").hidden = false;
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
    gameContent.innerHTML = `<div class="game-panel bouquet-panel"><div class="bouquet-illustration" aria-hidden="true"><span>✿</span><span>✿</span><span>✿</span><span class="bouquet-ribbon">♥</span></div><p class="activity-kicker">Un bouquet pour nos douze mois</p><p class="activity-feedback" aria-live="polite">Choisis les fleurs une à une pour composer le bouquet final.</p><div class="bouquet-flowers"></div><button class="button button-primary bouquet-finish" type="button" hidden>Ouvrir la dernière lettre ↗</button></div>`;
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
          $(".bouquet-finish").hidden = false;
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
    $("#reveal-copy").textContent = LOVE_STORY.months[activeMonth].personalMessage;
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

  function drawStars() {
    const canvas = $("#stars");
    const context = canvas.getContext("2d");
    if (!context) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const welcomeScreen = screens.welcome;
    const hubScreen = screens.hub;
    const moonCanvas = $("#moon3d");
    const layers = [];
    const dust = [];
    const meteors = [];
    let width = 0;
    let height = 0;
    let frameHandle = 0;
    let isRunning = false;
    let nextMeteorAt = 0;
    let motionTime = 0;
    let previousFrameTime = 0;
    let moonScene = null;
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

    const createMoonScene = () => {
      const THREE = window.THREE;
      if (!THREE) {
        console.error("Three.js n'a pas pu être chargé depuis le CDN ; la lune 3D est indisponible.");
        return null;
      }
      try {
        const renderer = new THREE.WebGLRenderer({ canvas: moonCanvas, alpha: true, antialias: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
        renderer.setClearColor(0x000000, 0);
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.08;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(38, 1, .1, 40);
        camera.position.z = 5;
        scene.add(new THREE.HemisphereLight(0xc7d8f4, 0x323949, .42));
        scene.add(new THREE.AmbientLight(0x7886a3, .2));
        const sunlight = new THREE.DirectionalLight(0xf1f3ff, 1.75);
        sunlight.position.set(-3.5, 2.3, 4);
        scene.add(sunlight);

        const geometry = new THREE.SphereGeometry(1, 192, 128);
        const material = new THREE.MeshStandardMaterial({
          color: 0xffffff,
          bumpScale: .075,
          displacementScale: .018,
          roughness: 1,
          metalness: 0,
          transparent: true
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
        let frustumWidth = 1;
        let frustumHeight = 1;
        const smoothstep = (edge0, edge1, value) => {
          const progress = Math.max(0, Math.min(1, (value - edge0) / (edge1 - edge0)));
          return progress * progress * (3 - 2 * progress);
        };
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
            const viewFrustumHeight = 2 * camera.position.z * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
            const nextFrustumWidth = viewFrustumHeight * camera.aspect;
            frustumWidth = nextFrustumWidth;
            frustumHeight = viewFrustumHeight;
            const radius = Math.max(.255, Math.min(.465, viewWidth * .0003375));
            group.scale.setScalar(radius);
            group.position.set(-nextFrustumWidth * .35, viewFrustumHeight * .28, 0);
            renderer.render(scene, camera);
          },
          render(time) {
            if (!reducedMotion) {
              moon.rotation.y = time * .00018;
              group.rotation.x = Math.sin(time * .00011) * .025;
              const travel = (time % 26000) / 26000;
              const x = -.1 + travel * 1.2;
              const y = .60 - .31 * Math.sin(Math.PI * travel);
              const fadeIn = smoothstep(0, .025, travel);
              const fadeOut = 1 - smoothstep(.94, .995, travel);
              const visibility = Math.min(fadeIn, fadeOut);
              group.position.x = frustumWidth * (x - .5 + Math.sin(time * .00042) * .003);
              group.position.y = frustumHeight * (.5 - y + Math.sin(time * .00055 + 1.4) * .004);
              moon.material.opacity = visibility;
              atmosphere.material.uniforms.visibility.value = visibility;
              atmosphere.material.uniforms.glow.value = .18 + Math.sin(time * .00014) * .018;
            }
            renderer.render(scene, camera);
          }
        };
      } catch (error) {
        console.error("Impossible d'initialiser le rendu WebGL de la lune.", error);
        return null;
      }
    };

    moonScene = createMoonScene();

    const resize = () => {
      if (!isSkyVisible()) return;
      const activeScreen = welcomeScreen.hidden ? hubScreen : welcomeScreen;
      const bounds = activeScreen.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      width = Math.max(1, window.innerWidth || bounds.width);
      height = Math.max(1, window.innerHeight || bounds.height);
      moonScene?.resize(width, height);
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const area = width * height;
      const layerSettings = [
        { count: Math.min(900, Math.floor(area / 2500)), radius: [.25, .68], alpha: [.25, .52], speed: [.00025, .0008], color: [205, 215, 235] },
        { count: Math.min(250, Math.floor(area / 7800)), radius: [.58, 1.1], alpha: [.34, .66], speed: [.00035, .0011], color: [245, 236, 214] },
        { count: Math.min(45, Math.max(10, Math.floor(area / 42000))), radius: [1, 1.7], alpha: [.52, .76], speed: [.00025, .00065], color: [255, 239, 205] }
      ];
      layers.length = 0;
      layerSettings.forEach((settings) => {
        const stars = Array.from({ length: settings.count }, () => ({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: randomBetween(...settings.radius),
          baseAlpha: randomBetween(...settings.alpha),
          amplitude: randomBetween(.12, .28),
          phase: Math.random() * Math.PI * 2,
          speed: randomBetween(...settings.speed),
          color: settings.color
        }));
        layers.push(stars);
      });
      dust.length = 0;
      for (let i = 0; i < Math.min(36, Math.floor(area / 36000)); i++) {
        dust.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: randomBetween(.35, .9),
          phase: Math.random() * Math.PI * 2
        });
      }
      meteors.length = 0;
      nextMeteorAt = performance.now() + randomBetween(2800, 6200);
      drawFrame(0);
      startBackgroundAnimation();
    };

    const drawBackground = () => {
      context.fillStyle = "#03040a";
      context.fillRect(0, 0, width, height);
      const vignette = context.createRadialGradient(width * .5, height * .42, Math.min(width, height) * .08, width * .5, height * .48, Math.max(width, height) * .8);
      vignette.addColorStop(0, "rgba(15, 17, 27, .05)");
      vignette.addColorStop(1, "rgba(0, 0, 0, .28)");
      context.fillStyle = vignette;
      context.fillRect(0, 0, width, height);
    };

    const drawStarsAt = (stars, time) => {
      stars.forEach((star) => {
        const shimmer = Math.sin(time * star.speed + star.phase);
        const alpha = Math.max(.08, Math.min(.95, star.baseAlpha + shimmer * star.amplitude));
        const [red, green, blue] = star.color;
        const { x, y } = star;
        if (star.radius > 1) {
          const glowRadius = star.radius * 7;
          const glow = context.createRadialGradient(x, y, 0, x, y, glowRadius);
          glow.addColorStop(0, `rgba(${red},${green},${blue},${alpha * .46})`);
          glow.addColorStop(.22, `rgba(${red},${green},${blue},${alpha * .13})`);
          glow.addColorStop(1, `rgba(${red},${green},${blue},0)`);
          context.fillStyle = glow;
          context.fillRect(x - glowRadius, y - glowRadius, glowRadius * 2, glowRadius * 2);
        }
        context.beginPath();
        context.arc(x, y, star.radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(${red},${green},${blue},${alpha})`;
        context.fill();
      });
    };

    const spawnMeteor = (time) => {
      const angle = randomBetween(.34, .68);
      const startX = randomBetween(width * .38, width * 1.08);
      const startY = randomBetween(-height * .08, height * .62);
      const distance = randomBetween(.38, .68) * Math.max(width, height);
      meteors.push({
        startX,
        startY,
        velocityX: -Math.cos(angle),
        velocityY: Math.sin(angle),
        distance,
        tailLength: randomBetween(70, 145),
        startTime: time,
        duration: randomBetween(850, 1450)
      });
    };

    const drawMeteor = (meteor, time) => {
      const progress = Math.min(1, (time - meteor.startTime) / meteor.duration);
      const ease = progress * progress * (3 - 2 * progress);
      const headX = meteor.startX + meteor.velocityX * meteor.distance * ease;
      const headY = meteor.startY + meteor.velocityY * meteor.distance * ease;
      const tailX = headX - meteor.velocityX * meteor.tailLength;
      const tailY = headY - meteor.velocityY * meteor.tailLength;
      const fade = Math.sin(progress * Math.PI) ** .7;
      const tail = context.createLinearGradient(tailX, tailY, headX, headY);
      tail.addColorStop(0, "rgba(255, 222, 157, 0)");
      tail.addColorStop(.68, `rgba(255, 222, 157, ${fade * .24})`);
      tail.addColorStop(1, `rgba(255, 248, 224, ${fade * .95})`);
      context.beginPath();
      context.moveTo(tailX, tailY);
      context.lineTo(headX, headY);
      context.strokeStyle = tail;
      context.lineWidth = 1.25;
      context.lineCap = "round";
      context.shadowColor = `rgba(255, 229, 174, ${fade * .82})`;
      context.shadowBlur = 9;
      context.stroke();
      context.shadowBlur = 0;

      const headGlow = context.createRadialGradient(headX, headY, 0, headX, headY, 8);
      headGlow.addColorStop(0, `rgba(255, 255, 242, ${fade})`);
      headGlow.addColorStop(.22, `rgba(255, 229, 174, ${fade * .6})`);
      headGlow.addColorStop(1, "rgba(255, 229, 174, 0)");
      context.fillStyle = headGlow;
      context.fillRect(headX - 8, headY - 8, 16, 16);
      return progress < 1;
    };

    const drawFrame = (time, moonTime = time) => {
      context.clearRect(0, 0, width, height);
      drawBackground();
      moonScene?.render(moonTime);
      layers.forEach((stars) => drawStarsAt(stars, time));
      dust.forEach((particle) => {
        const alpha = .08 + (Math.sin(time * .00016 + particle.phase) + 1) * .045;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(229, 211, 176, ${alpha})`;
        context.fill();
      });
      if (reducedMotion) return;
      if (time >= nextMeteorAt) {
        spawnMeteor(time);
        nextMeteorAt = time + randomBetween(5200, 11500);
      }
      for (let index = meteors.length - 1; index >= 0; index--) {
        if (!drawMeteor(meteors[index], time)) meteors.splice(index, 1);
      }
    };

    stopBackgroundAnimation = () => {
      if (frameHandle) cancelAnimationFrame(frameHandle);
      frameHandle = 0;
      isRunning = false;
      previousFrameTime = 0;
    };

    startBackgroundAnimation = () => {
      if (reducedMotion || isRunning || document.hidden || !isSkyVisible()) return;
      isRunning = true;
      const tick = (time) => {
        if (document.hidden || !isSkyVisible()) {
          stopBackgroundAnimation();
          return;
        }
        if (previousFrameTime) motionTime += Math.min(time - previousFrameTime, 100);
        previousFrameTime = time;
        drawFrame(time, motionTime);
        frameHandle = requestAnimationFrame(tick);
      };
      frameHandle = requestAnimationFrame(tick);
    };

    const onVisibilityChange = () => {
      if (document.hidden) stopBackgroundAnimation();
      else startBackgroundAnimation();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(welcomeScreen);
    observer.observe(hubScreen);
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibilityChange);
    resize();
  }

  drawStars();
})();
