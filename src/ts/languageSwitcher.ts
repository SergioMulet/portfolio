import { type Language } from "./translator";

export class LanguageSwitcher {

  static init(): void {
    const btn = document.querySelector("header button") as HTMLElement;
    if (!btn) return;

    btn.addEventListener("click", () => {
      const currentLang = btn.getAttribute("data-current-lang") as Language;
      const nextLang = btn.getAttribute("data-next-lang");
      const currentPath = window.location.pathname;

      if (currentLang && nextLang) {
        const newPath = currentPath.replace(`/${currentLang}/`, `/${nextLang}/`);
        window.location.href = newPath;
      }
    });
  }
}