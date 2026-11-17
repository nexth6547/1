// CONFIGURATION PERSONNALISABLE
// Modifiez title, subtitle, game et surtout personalMessage pour chaque mois.
const LOVE_STORY = {
  title: "Notre Première Année",
  subtitle: "Douze mois, mille souvenirs, et encore tant d'étoiles à découvrir ensemble.",
  months: [
    {
      title: "La fouille de zone",
      label: "La fouille",
      subtitle: "Quatre petites lumières se sont cachées dans notre jardin étoilé. Retrouve-les.",
      game: {
        type: "hunt",
        fragments: ["Depuis que tu es là,", "les jours ont un peu plus de soleil,", "les nuits un peu plus d'étoiles,", "et mon cœur un endroit où rentrer."],
        positions: [
          { left: "21%", top: "48%" },
          { left: "46%", top: "70%" },
          { left: "69%", top: "39%" },
          { left: "83%", top: "65%" }
        ]
      },
      personalMessage: "Depuis que tu es là, les jours ont un peu plus de soleil, les nuits un peu plus d'étoiles, et mon cœur un endroit où rentrer.\n\nMerci pour cette première année, et pour toutes celles qui nous attendent."
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
      personalMessage: "Je me souviens de ce premier rendez-vous comme si le temps avait ralenti juste pour nous.\n\nCe jour-là, je ne savais pas encore à quel point tu deviendrais mon endroit préféré."
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
      personalMessage: "Même quand le chemin fait quelques détours, j'aime avancer à tes côtés.\n\nTu rends chaque trajet plus beau que la destination."
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
      personalMessage: "Les souvenirs n'ont pas besoin d'être grands pour compter.\n\nLes plus précieux sont souvent faits de petits riens — et de nous deux."
    },
    {
      title: "Mois 5 — À écrire ensemble",
      label: "À venir",
      subtitle: "Un nouveau souvenir attend son chapitre.",
      game: { type: "placeholder" },
      personalMessage: "Écris ici le texte personnel du mois 5."
    },
    {
      title: "Mois 6 — À écrire ensemble",
      label: "À venir",
      subtitle: "Un nouveau souvenir attend son chapitre.",
      game: { type: "placeholder" },
      personalMessage: "Écris ici le texte personnel du mois 6."
    },
    {
      title: "Mois 7 — À écrire ensemble",
      label: "À venir",
      subtitle: "Un nouveau souvenir attend son chapitre.",
      game: { type: "placeholder" },
      personalMessage: "Écris ici le texte personnel du mois 7."
    },
    {
      title: "Mois 8 — À écrire ensemble",
      label: "À venir",
      subtitle: "Un nouveau souvenir attend son chapitre.",
      game: { type: "placeholder" },
      personalMessage: "Écris ici le texte personnel du mois 8."
    },
    {
      title: "Mois 9 — À écrire ensemble",
      label: "À venir",
      subtitle: "Un nouveau souvenir attend son chapitre.",
      game: { type: "placeholder" },
      personalMessage: "Écris ici le texte personnel du mois 9."
    },
    {
      title: "Mois 10 — À écrire ensemble",
      label: "À venir",
      subtitle: "Un nouveau souvenir attend son chapitre.",
      game: { type: "placeholder" },
      personalMessage: "Écris ici le texte personnel du mois 10."
    },
    {
      title: "Mois 11 — À écrire ensemble",
      label: "À venir",
      subtitle: "Un nouveau souvenir attend son chapitre.",
      game: { type: "placeholder" },
      personalMessage: "Écris ici le texte personnel du mois 11."
    },
    {
      title: "Mois 12 — À écrire ensemble",
      label: "À venir",
      subtitle: "Un nouveau souvenir attend son chapitre.",
      game: { type: "placeholder" },
      personalMessage: "Écris ici le texte personnel du mois 12."
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
  document.title = `${LOVE_STORY.title} — Une aventure à deux`;
  $("#welcome-copy").textContent = LOVE_STORY.subtitle;
  let completed = loadProgress();
  let activeMonth = 0;
  let foundFragments = new Set();
  let attempts = 0;
  let selectedLeft = null;
  let matchedPairs = new Set();
  let toastTimer;

  function loadProgress() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      if (!Array.isArray(saved)) return [];
      return [...new Set(saved.filter((month) => Number.isInteger(month) && month >= 0 && month < 4))].sort((a, b) => a - b);
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
      const isCurrent = index === nextMonth && index < 4;
      const isUnlocked = index <= nextMonth && index < 4;
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
  }

  function openMonth(index) {
    if (index > completed.length || index >= 4) return;
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
    showScreen("game");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderHunt(config) {
    gameContent.innerHTML = `<div class="game-panel"><div class="hunt-scene" role="group" aria-label="Jardin nocturne"><span class="moon" aria-hidden="true"></span><span class="tree tree-left" aria-hidden="true"></span><span class="tree tree-right" aria-hidden="true"></span><span class="hill" aria-hidden="true"></span><p class="hunt-hint">Cherche les quatre lumières cachées dans le jardin</p></div><div class="fragment-list" aria-label="Fragments retrouvés"></div><p class="fragment-copy" aria-live="polite">Le jardin murmure… clique sur une lumière.</p></div>`;
    const scene = $(".hunt-scene");
    const list = $(".fragment-list");
    config.fragments.forEach((fragment, index) => {
      const pip = document.createElement("span");
      pip.className = "fragment-pip";
      pip.setAttribute("aria-hidden", "true");
      list.append(pip);
      const button = document.createElement("button");
      button.type = "button";
      button.className = "fragment";
      button.style.left = config.positions[index].left;
      button.style.top = config.positions[index].top;
      button.setAttribute("aria-label", `Découvrir la lumière ${index + 1}`);
      button.textContent = "✦";
      button.addEventListener("click", () => {
        if (foundFragments.has(index)) return;
        foundFragments.add(index);
        button.classList.add("found");
        list.children[index].classList.add("is-found");
        $(".fragment-copy").textContent = fragment;
        playTone(foundFragments.size === 4 ? "success" : "tap");
        if (foundFragments.size === config.fragments.length) completeMonth();
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

  function completeMonth() {
    if (!completed.includes(activeMonth)) {
      completed.push(activeMonth);
      completed.sort((a, b) => a - b);
      saveProgress();
    }
    renderHub();
    $("#reveal-title").textContent = `Mois ${activeMonth + 1} · ${LOVE_STORY.months[activeMonth].title}`;
    $("#reveal-copy").textContent = LOVE_STORY.months[activeMonth].personalMessage;
    $("#continue-button").textContent = activeMonth < 3 ? "Continuer vers le mois suivant ↗" : "Retourner à la constellation ↗";
    $("#continue-button").onclick = () => {
      dialog.close();
      document.onkeydown = null;
      if (activeMonth < 3) openMonth(activeMonth + 1);
      else showScreen("hub");
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
  dialog.addEventListener("close", () => { document.onkeydown = null; });

  function drawStars() {
    const canvas = $("#stars");
    const context = canvas.getContext("2d");
    if (!context) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const stars = [];
    let width = 0;
    let height = 0;
    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      stars.length = 0;
      for (let i = 0; i < Math.min(95, Math.floor(width * height / 11000)); i++) {
        stars.push({ x: Math.random() * width, y: Math.random() * height, radius: Math.random() * 1.3 + .3, phase: Math.random() * Math.PI * 2 });
      }
      paint(0);
    };
    const paint = (time) => {
      context.clearRect(0, 0, width, height);
      stars.forEach((star) => {
        const alpha = reducedMotion ? .42 : .2 + (Math.sin(time / 1100 + star.phase) + 1) * .25;
        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(255,239,216,${alpha})`;
        context.fill();
      });
      if (!reducedMotion) requestAnimationFrame(paint);
    };
    window.addEventListener("resize", resize);
    resize();
  }

  drawStars();
})();
