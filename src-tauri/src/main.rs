#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::webview::PageLoadEvent;

fn main() {
    tauri::Builder::default()
        .on_page_load(|webview, payload| {
            if payload.event() == PageLoadEvent::Finished {
                if let Err(error) = webview.eval(
                    "document.addEventListener('contextmenu', (event) => event.preventDefault());",
                ) {
                    eprintln!("Impossible de désactiver le menu contextuel : {error}");
                }
            }
        })
        .run(tauri::generate_context!())
        .expect("Erreur au démarrage de Notre Première Année");
}
