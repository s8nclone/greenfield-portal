import { Injectable, signal, effect, inject, DOCUMENT } from "@angular/core";

@Injectable({ providedIn: "root" })
export class ThemeService {
  private readonly doc = inject(DOCUMENT);
  readonly isDark = signal<boolean>(localStorage.getItem("gf_theme") === "dark");

  constructor() {
    effect(() => {
      const dark = this.isDark();
      this.doc.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
      localStorage.setItem("gf_theme", dark ? "dark" : "light");
    });
  }

  toggle(): void { this.isDark.update(v => !v); }
}
