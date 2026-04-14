import { type Language } from "./translator";

export class LanguageSwitcher {
  static init(): void {
    const buttons = document.querySelectorAll(
      "header section button",
    ) as NodeListOf<HTMLButtonElement>;

    buttons.forEach((button) => {
      let targetLang = button.getAttribute("data-lang") as Language;
      if(targetLang == document.documentElement.lang){
        button.disabled = true;
      }
      button.addEventListener("click", () => {
        let currentLang = document.documentElement.lang as Language;
        let currentPath = window.location.pathname;
        if (targetLang !== currentLang) {
          button.disabled = true;
          const newPath = currentPath.replace(
            `/${currentLang}/`,
            `/${targetLang}/`,
          );
          window.location.href = newPath;
        }
      });
    });
  }
}
