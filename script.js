// CONFIGURATION PERSONNALISABLE
// Modifiez title, subtitle, game et surtout personalMessage pour chaque mois.
const LOVE_STORY = {
  title: "Pour nos 1 ans",
  subtitle: "Une année entière qui m'a éclairé.",
  finalMessage: "À venir.\n\nÉcris ici ta déclaration finale.",
  months: [
    {
      title: "La fouille de zone",
      label: "La fouille",
      subtitle: "La chambre garde quatre objets précieux. Observe les détails et retrouve-les.",
      game: {
        type: "hunt",
        items: [
          { id: "rose", label: "Une rose", icon: "🌹", left: "25%", top: "63%", kind: "memory", foundText: "Une rose, délicatement posée là… elle est à toi." },
          { id: "bracelet", label: "Un bracelet", icon: "◎", left: "69%", top: "58%", kind: "memory", foundText: "Un bracelet retrouvé, comme un petit lien entre nous." },
          { id: "plush", label: "Une peluche", icon: "🧸", left: "53%", top: "70%", kind: "memory", foundText: "Une peluche toute douce, gardienne de nos nuits." },
          { id: "sweater", label: "Un pull", icon: "👕", left: "79%", top: "73%", kind: "memory", foundText: "Un pull tout chaud, avec un peu de toi dedans." },
          { id: "book", label: "Un livre", icon: "📖", left: "42%", top: "57%", kind: "decoy", foundText: "Juste un livre entrouvert… le trésor se cache ailleurs." },
          { id: "mug", label: "Une tasse", icon: "☕", left: "18%", top: "76%", kind: "decoy", foundText: "Une tasse oubliée sur la table de nuit. Continue à chercher." },
          { id: "perfume", label: "Un flacon", icon: "🧴", left: "88%", top: "53%", kind: "decoy", foundText: "Un petit flacon, mais pas encore le bon souvenir." },
          { id: "sock", label: "Une chaussette", icon: "🧦", left: "36%", top: "80%", kind: "decoy", foundText: "Une chaussette esseulée… les objets précieux sont encore là." }
        ]
      },
      personalMessage: "À venir."
    },
    {
      title: "L'énigme souvenir",
      label: "L'énigme",
      subtitle: "Un souvenir précieux veille dans ce coffret. Saura-tu retrouver le lieu ?",
      game: {
        type: "riddle",
        question: "Où avons-nous eu notre premier vrai rendez-vous ?",
        answers: ["le petit café du parc"],
        hintAfter: 2,
        hint: "Indice : c'est un endroit où l'on commande souvent un cappuccino."
      },
      personalMessage: "À venir."
    },
    {
      title: "Le labyrinthe des souvenirs",
      label: "Le labyrinthe",
      subtitle: "Une petite lumière cherche le chemin jusqu'au cœur. Guide-la jusqu'à la sortie.",
      game: {
        type: "maze",
        map: [
          "###########", "#S#########", "#.#.......#", "#.#.#####.#", "#.#.....#.#",
          "#.#####.#.#", "#.....#.#.#", "#####...#.#", "#.....#...#", "#.#######E#", "###########"
        ]
      },
      personalMessage: "À venir."
    },
    {
      title: "Correspondance de moments",
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
      label: "Le cœur lumineux",
      subtitle: "Trace un cœur d'un seul geste pour laisser une petite lumière dans la nuit.",
      game: { type: "trace", shape: "heart" },
      personalMessage: "À venir."
    },
    {
      title: "Le bouquet final",
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

  function playTone(kind = "tap") {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    try {
      const context = new AudioContextClass();
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      const success = kind === "success";
      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(success ? 660 : 420, context.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(success ? 990 : 520, context.currentTime + (success ? .28 : .09));
      gain.gain.setValueAtTime(.0001, context.currentTime);
      gain.gain.exponentialRampToValueAtTime(success ? .075 : .035, context.currentTime + .015);
      gain.gain.exponentialRampToValueAtTime(.0001, context.currentTime + (success ? .38 : .14));
      oscillator.connect(gain);
      gain.connect(context.destination);
      oscillator.start();
      oscillator.stop(context.currentTime + (success ? .4 : .16));
      oscillator.addEventListener("ended", () => context.close(), { once: true });
    } catch (error) {
      console.warn("Le son n'est pas disponible dans ce navigateur.", error);
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
    if (name !== "welcome") stopBackgroundAnimation();
    Object.entries(screens).forEach(([key, screen]) => {
      const visible = key === name;
      screen.hidden = !visible;
      screen.classList.toggle("is-visible", visible);
    });
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
      node.setAttribute("aria-label", `Mois ${index + 1} : ${month.label}${isComplete ? ", souvenir retrouvé, rejouer" : isUnlocked ? ", à découvrir" : ", verrouillé"}`);
      node.innerHTML = `<span class="month-number">MOIS ${String(index + 1).padStart(2, "0")}</span><span class="month-icon" aria-hidden="true">${isComplete ? "✦" : isUnlocked ? "✧" : "⌑"}</span><span class="month-name"></span><span class="month-status" aria-hidden="true">${isComplete ? "✓" : !isUnlocked ? "⌑" : ""}</span>`;
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
      .map((month, index) => `Mois ${index + 1} · ${month.title}\n${month.personalMessage}`)
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
    $("#game-counter").textContent = `SOUVENIR ${String(index + 1).padStart(2, "0")} / 12`;
    $("#game-eyebrow").textContent = `Mois ${index + 1} · ${completed.includes(index) ? "À relire" : "À découvrir"}`;
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
    gameContent.innerHTML = `<div class="game-panel hunt-panel"><div class="hunt-scene bedroom-scene" role="group" aria-label="Chambre nocturne : explore la pièce pour retrouver quatre objets précieux"><div class="room-window" aria-hidden="true"><span class="window-moon"></span><i class="window-star window-star-one">✦</i><i class="window-star window-star-two">✧</i><i class="window-star window-star-three">·</i></div><div class="room-picture" aria-hidden="true"><span>☾</span></div><div class="room-shelf" aria-hidden="true"><i></i><i></i><i></i></div><div class="nightstand" aria-hidden="true"><span class="nightstand-drawer"></span><span class="lamp"><i></i></span></div><div class="bed" aria-hidden="true"><span class="bed-headboard"></span><span class="bed-pillow"></span><span class="bed-cover"></span><span class="bed-throw"></span></div><div class="room-rug" aria-hidden="true"></div><div class="room-plant" aria-hidden="true"><i></i><i></i><i></i><span></span></div><div class="room-floor" aria-hidden="true"></div><div class="room-glow" aria-hidden="true"></div><p class="hunt-hint">La chambre dort… fouille les recoins pour retrouver quatre objets précieux.</p></div><div class="hunt-inventory" aria-label="Objets précieux retrouvés"></div><p class="hunt-feedback" aria-live="polite">Clique sur les objets de la chambre pour les examiner.</p></div>`;
    const scene = $(".hunt-scene");
    const inventory = $(".hunt-inventory");
    const memories = config.items.filter((item) => item.kind === "memory");
    const feedback = $(".hunt-feedback");
    memories.forEach((item) => {
      const entry = document.createElement("span");
      entry.className = "inventory-item";
      entry.setAttribute("aria-label", item.label);
      entry.innerHTML = `<span class="inventory-icon" aria-hidden="true"></span><span class="inventory-label"></span>`;
      entry.querySelector(".inventory-icon").textContent = item.icon;
      entry.querySelector(".inventory-label").textContent = item.label;
      inventory.append(entry);
    });
    config.items.forEach((item) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `room-object ${item.kind === "memory" ? "is-memory" : "is-decoy"} object-${item.id}`;
      button.style.left = item.left;
      button.style.top = item.top;
      button.setAttribute("aria-label", `Examiner : ${item.label}`);
      button.innerHTML = `<span class="object-glyph"></span>`;
      button.querySelector(".object-glyph").textContent = item.icon;
      button.addEventListener("click", () => {
        if (button.disabled) return;
        if (item.kind === "decoy") {
          feedback.textContent = item.foundText;
          button.classList.remove("is-trap");
          requestAnimationFrame(() => button.classList.add("is-trap"));
          playTone();
          return;
        }
        if (foundFragments.has(item.id)) return;
        foundFragments.add(item.id);
        button.classList.add("is-found");
        button.disabled = true;
        inventory.querySelectorAll(".inventory-item")[memories.indexOf(item)].classList.add("is-found");
        feedback.textContent = item.foundText;
        playTone(foundFragments.size === memories.length ? "success" : "tap");
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
    gameContent.innerHTML = `<div class="game-panel riddle-card"><div class="chest-icon" aria-hidden="true">♧</div><h3></h3><form class="answer-form"><input class="answer-input" type="text" autocomplete="off" placeholder="Ta réponse…" aria-label="Ta réponse"><button class="button button-primary" type="submit">Ouvrir <span aria-hidden="true">↗</span></button></form><p class="feedback" aria-live="polite"></p><p class="hint-copy" aria-live="polite"></p></div>`;
    $(".riddle-card h3").textContent = config.question;
    $(".answer-form").addEventListener("submit", (event) => {
      event.preventDefault();
      const answer = normalizeAnswer($(".answer-input").value);
      const accepted = config.answers.map(normalizeAnswer);
      if (answer && accepted.includes(answer)) {
        $(".feedback").textContent = "Le coffret s'ouvre…";
        $(".feedback").classList.add("is-correct");
        playTone("success");
        completeMonth();
        return;
      }
      attempts += 1;
      $(".feedback").textContent = "Ce n'est pas tout à fait ça… essaie encore.";
      if (attempts >= config.hintAfter) $(".hint-copy").textContent = config.hint;
      playTone();
      $(".answer-input").select();
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
      playTone();
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
        playTone();
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
          playTone(matchedPairs.size === 4 ? "success" : "tap");
          selectedLeft = null;
          if (matchedPairs.size === pairs.length) completeMonth();
        } else {
          $(".match-feedback").textContent = "Pas cette fois… essaie une autre paire.";
          playTone();
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
          playTone();
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
        playTone(foundFragments.size === config.sequence.length ? "success" : "tap");
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
    if (!AudioContextClass) {
      playTone();
      return;
    }
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
          playTone();
          return;
        }
        position += 1;
        feedback.textContent = `${position} sur ${config.sequence.length} notes retrouvées.`;
        if (position === config.sequence.length) {
          $(".music-message").textContent = config.message;
          $(".music-message").hidden = false;
          $(".music-finish").hidden = false;
          feedback.textContent = "La boîte s'ouvre et livre son message.";
          playTone("success");
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
          playTone("success");
          completeMonth();
        } else {
          button.classList.remove("is-bump");
          requestAnimationFrame(() => button.classList.add("is-bump"));
          $(".activity-feedback").textContent = "Un joli détail, mais ce n'est pas celui que l'on cherche.";
          playTone();
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
        playTone("success");
        completeMonth();
        return;
      }
      attempts += 1;
      $(".feedback").textContent = "Les lettres ne sont pas encore à leur place.";
      if (attempts >= 2) $(".hint-copy").textContent = config.hint;
      playTone();
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
        playTone();
        if (matchedPairs.size === config.cards.length) {
          $(".activity-feedback").textContent = "Tous les petits instants sont retrouvés.";
          $(".polaroid-finish").hidden = false;
          playTone("success");
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
        playTone();
        return;
      }
      questionIndex += 1;
      if (questionIndex === config.questions.length) {
        $(".feedback").textContent = "Trois sur trois ! Tu connais bien notre petite histoire.";
        $(".feedback").classList.add("is-correct");
        playTone("success");
        completeMonth();
      } else {
        $(".feedback").textContent = "Bien joué ! Question suivante…";
        playTone("success");
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
        playTone("success");
        completeMonth();
      } else {
        $(".activity-feedback").textContent = "Le cœur n'est pas encore complet. Essaie de suivre la ligne dorée d'un seul geste.";
        playTone();
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
        playTone(matchedPairs.size === config.flowers.length ? "success" : "tap");
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
    $("#reveal-title").textContent = `Mois ${activeMonth + 1} · ${LOVE_STORY.months[activeMonth].title}`;
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
    playTone();
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
    playTone();
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
    const layers = [];
    const dust = [];
    const meteors = [];
    let width = 0;
    let height = 0;
    let frameHandle = 0;
    let isRunning = false;
    let nextMeteorAt = 0;

    const randomBetween = (min, max) => min + Math.random() * (max - min);

    const resize = () => {
      if (welcomeScreen.hidden) return;
      const bounds = welcomeScreen.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 1.75);
      width = Math.max(1, bounds.width);
      height = Math.max(1, bounds.height);
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

    const drawFrame = (time) => {
      context.clearRect(0, 0, width, height);
      drawBackground();
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
    };

    function startBackgroundAnimation() {
      if (reducedMotion || isRunning || document.hidden || welcomeScreen.hidden) return;
      isRunning = true;
      const tick = (time) => {
        if (document.hidden || welcomeScreen.hidden) {
          stopBackgroundAnimation();
          return;
        }
        drawFrame(time);
        frameHandle = requestAnimationFrame(tick);
      };
      frameHandle = requestAnimationFrame(tick);
    }

    const onVisibilityChange = () => {
      if (document.hidden) stopBackgroundAnimation();
      else startBackgroundAnimation();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(welcomeScreen);
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibilityChange);
    resize();
  }

  drawStars();
})();
