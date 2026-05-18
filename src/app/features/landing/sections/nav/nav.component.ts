import { Component, signal, afterNextRender } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "landing-nav",
  imports: [RouterLink],
  styles: [`
    .nav-root { position: fixed; top: 0; left: 0; right: 0; z-index: 1000; padding: 0 clamp(24px,6vw,80px); height: 72px; display: flex; align-items: center; gap: 40px; transition: background .35s, box-shadow .35s; }
    .nav-root.scrolled { background: rgba(10,10,15,.93); backdrop-filter: blur(16px); box-shadow: 0 1px 0 rgba(255,255,255,.07); }
    .nav-link { font-size: .875rem; font-weight: 500; color: rgba(255,255,255,.65); transition: color .2s; text-decoration: none; }
    .nav-link:hover { color: #fff; }
    .signin:hover { border: 1px solid var(--primary-dark); border-radius: var(--radius-full); padding: 10px 16px; color: var(--primary) }
    @media (max-width: 768px) { .nav-links { display: none !important; } }
  `],
  template: `
    <nav [class.scrolled]="scrolled()" class="nav-root">
      <a routerLink="/" style="display:flex;align-items:center;gap:10px;text-decoration:none;flex-shrink:0;">
        <div style="width:36px;height:36px;background:var(--primary);border-radius:8px;display:flex;align-items:center;justify-content:center;">
          <span style="color:#fff;font-weight:700;font-size:.875rem;font-family:var(--font-display);">GU</span>
        </div>
        <span style="font-family:var(--font-display);font-weight:700;font-size:1rem;color:#fff;">Greenfield University</span>
      </a>
      <div class="nav-links" style="display:flex;align-items:center;gap:32px;flex:1;justify-content:center;">
        @for (link of links; track link.label) {
          <a [href]="link.href" class="nav-link">{{ link.label }}</a>
        }
      </div>
      <div style="display:flex;align-items:center;gap:24px;flex-shrink:0;">
        <a routerLink="/login" class="signin" style="font-size:.875rem;font-weight:600;color:rgba(255,255,255,.75);transition:.2s;text-decoration:none;">Sign In</a>
        <a href="#programmes" class="btn-primary-landing" style="padding:10px 24px;font-size:.875rem;">Apply Now</a>
      </div>
    </nav>
  `,
})

export class NavComponent {
  readonly scrolled = signal(false);
  readonly links = [
    { label: "About", href: "#about" },
    { label: "Programmes", href: "#programmes" },
    { label: "Faculty", href: "#faculty" },
    { label: "Experience", href: "#experience" },
    { label: "FAQ", href: "#faq" },
  ];
  constructor() {
    afterNextRender(() => {
      window.addEventListener("scroll", () => this.scrolled.set(window.scrollY > 40), { passive: true });
    });
  }
}
