import { Component, inject, afterNextRender } from "@angular/core";
import { NavComponent } from "./sections/nav/nav.component";
import { HeroComponent } from "./sections/hero/hero.component";
import { TrustBarComponent } from "./sections/trust-bar/trust-bar.component";
import { AboutComponent } from "./sections/about/about.component";
import { StatsComponent } from "./sections/stats/stats.component";
import { ProgrammesComponent } from "./sections/programmes/programmes.component";
import { ExperienceComponent } from "./sections/experience/experience.component";
import { FacultyComponent } from "./sections/faculty/faculty.component";
import { TestimonialsComponent } from "./sections/testimonials/testimonials.component";
import { ProcessComponent } from "./sections/process/process.component";
import { FaqComponent } from "./sections/faq/faq.component";
import { FinalCtaComponent } from "./sections/final-cta/final-cta.component";
import { FooterComponent } from "./sections/footer/footer.component";

@Component({
  selector: "app-landing",
  imports: [
    NavComponent, HeroComponent, TrustBarComponent, AboutComponent, StatsComponent,
    ProgrammesComponent, ExperienceComponent, FacultyComponent, TestimonialsComponent,
    ProcessComponent, FaqComponent, FinalCtaComponent, FooterComponent,
  ],
  template: `
    <div class="landing-root">
      <landing-nav />
      <landing-hero />
      <landing-trust-bar />
      <landing-about />
      <landing-stats />
      <landing-programmes />
      <landing-experience />
      <landing-faculty />
      <landing-testimonials />
      <landing-process />
      <landing-faq />
      <landing-final-cta />
      <landing-footer />
    </div>
  `,
  styles: [`
    .landing-root { overflow-x: hidden; }
  `],
})

export class LandingComponent {
  constructor() {
    afterNextRender(() => {
      // Init Lenis smooth scroll if available
      this.initLenis();
      // Init IntersectionObserver for all .reveal elements
      this.initReveal();
    });
  }

  private initLenis(): void {
    try {
      // Dynamically import Lenis
      import("lenis").then(({ default: Lenis }) => {
        const lenis = new Lenis({ duration: 1.2, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
        const raf = (time: number) => { lenis.raf(time); requestAnimationFrame(raf); };
        requestAnimationFrame(raf);
      }).catch(() => {});
    } catch {}
  }

  private initReveal(): void {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal, .reveal-left, .reveal-scale").forEach(el => observer.observe(el));
  }
}
