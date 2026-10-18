export const languages = {
  es: "Español",
  en: "English",
} as const;

export type Language = keyof typeof languages;

const labels = {
  es: {
    home: "Página de inicio",
    about: "Sobre mí",
    exp: "Experiencia",
    projects: "Proyectos",
    role: "Ingeniero de Software",
    nav: "Navegación principal",
  },
  en: {
    home: "Home",
    about: "About me",
    exp: "Experience",
    projects: "Projects",
    role: "Software Engineer",
    nav: "Main navigation",
  },
} as const;

export class Translator {
  private lang: Language;

  constructor(lang: Language, base: string = "") {
    this.lang = lang;
  }

  public getLabel(key: keyof (typeof labels)["es"]): string {
    return labels[this.lang][key] || labels["es"][key];
  }

  public route(path: string, base: string = "/"): string {
    const cleanPath = path.startsWith("/") ? path.slice(1) : path;
    return `${base}/${this.lang}/${cleanPath}`;
  }
}
