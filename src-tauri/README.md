# Compilation Windows

L'interface est servie directement depuis `../index.html`, `../style.css` et
`../script.js`. Aucun bundler JavaScript ni serveur de développement n'est requis
pour créer l'application.

## Prérequis sur Windows

1. Installer Rust stable avec `rustup` depuis <https://www.rust-lang.org/tools/install>.
2. Installer **Visual Studio Build Tools** avec la charge de travail **Desktop development with C++**.
3. Vérifier que le **Microsoft Edge WebView2 Runtime** est installé. Windows 11
   et la plupart des installations Windows 10 l'ont déjà.
4. Ouvrir PowerShell dans le dossier du dépôt et vérifier les outils :

   ```powershell
   rustc --version
   cargo --version
   rustup show
   ```

5. Installer la CLI Tauri v2, puis compiler le bundle NSIS :

   ```powershell
   cargo install tauri-cli --version "^2.0.0" --locked
   cd src-tauri
   cargo tauri build
   ```

La compilation génère le binaire Windows ici :

```text
src-tauri/target/release/notre-premiere-annee.exe
```

Le programme d'installation NSIS (`.exe`), recommandé pour le partager, est
généré dans `src-tauri/target/release/bundle/nsis/`. Il installe l'application
et télécharge le WebView2 Runtime si nécessaire. Pour un PC hors ligne, installez
WebView2 à l'avance : le binaire Tauri n'embarque pas le moteur de navigateur.

Pour remplacer l'icône de l'application, remplacez `src-tauri/icons/icon.ico`
par votre fichier `.ico` (en conservant ce nom). Les PNG du même dossier servent
aux autres tailles d'icône configurées dans Tauri.
