import { Component, inject, signal, afterNextRender } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "landing-nav",
  imports: [RouterLink],
  styles: [`
    .nav-root { position: fixed; top: 0; left: 0; right: 0; z-index: 1000; padding: 0 clamp(24px,6vw,80px); height: 72px; display: flex; align-items: center; gap: 40px; transition: background .35s, box-shadow .35s; }
    .nav-root.scrolled { background: rgba(10,10,15,.93); backdrop-filter: blur(16px); box-shadow: 0 1px 0 rgba(255,255,255,.07); }
    .nav-link { font-size: .875rem; font-weight: 500; color: rgba(255,255,255,.65); transition: color .2s; text-decoration: none; }
    .nav-link:hover { color: #fff; }
    .signin:hover { border: 1px solid var(--primary-dark); border-radius: var(--radius-full); padding: 10px 16px; color: var(--primary); }

    /* Desktop nav links — hidden on mobile */
    @media (max-width: 768px) { .nav-links { display: none !important; } }

    /* Hamburger — only on mobile */
    .nav-hamburger { display: none; margin-left: auto; }
    @media (max-width: 768px) {
      .nav-hamburger { display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 8px; background: rgba(255,255,255,.08); color: #fff; font-size: 1.2rem; cursor: pointer; border: none; transition: background .2s; flex-shrink: 0; }
      .nav-hamburger:hover { background: rgba(255,255,255,.15); }
      /* Hide sign-in + apply on very small screens to avoid cramping */
      .nav-actions { display: none !important; }
    }

    /* Mobile menu panel */
    .mobile-menu {
      position: fixed; top: 72px; left: 0; right: 0; z-index: 999;
      background: rgba(10,10,15,.97); backdrop-filter: blur(20px);
      border-top: 1px solid rgba(255,255,255,.07);
      padding: 16px 24px 24px;
      display: flex; flex-direction: column; gap: 4px;
      animation: fade-in-up .25s cubic-bezier(.16,1,.3,1) both;
    }
    .mobile-menu a {
      display: block; padding: 14px 16px; font-size: 1rem; font-weight: 600;
      color: rgba(255,255,255,.8); text-decoration: none; border-radius: 10px;
      transition: background .2s, color .2s;
    }
    .mobile-menu a:hover { background: rgba(255,255,255,.07); color: #fff; }
    .mobile-menu-divider { height: 1px; background: rgba(255,255,255,.07); margin: 8px 0; }
    .mobile-menu-cta { background: var(--primary) !important; color: #fff !important; text-align: center; margin-top: 4px; }
    .mobile-menu-cta:hover { background: var(--primary-dark) !important; }
  `],
  template: `
    <nav [class.scrolled]="scrolled()" class="nav-root">
      <a routerLink="/" style="display:flex;align-items:center;gap:10px;text-decoration:none;flex-shrink:0;">
        <div class="logo-container-dark" style="width:36px;height:36px;">
          <img src="assets/images/logo.png" alt="GU Logo" style="width:100%;height:100%;object-fit:contain;" />
        </div>
        <span style="font-family:var(--font-display);font-weight:700;font-size:1rem;color:#fff;">Greenfield University</span>
      </a>

      <!-- Desktop nav links -->
      <div class="nav-links" style="display:flex;align-items:center;gap:32px;flex:1;justify-content:center;">
        @for (link of links; track link.label) {
          <a [href]="link.href" class="nav-link">{{ link.label }}</a>
        }
      </div>

      <!-- Desktop actions -->
      <div class="nav-actions" style="display:flex;align-items:center;gap:24px;flex-shrink:0;">
        <a routerLink="/login" class="signin" style="font-size:.875rem;font-weight:600;color:rgba(255,255,255,.75);transition:.2s;text-decoration:none;">Sign In</a>
        <a href="#programmes" class="btn-primary-landing" style="padding:10px 24px;font-size:.875rem;">Apply Now</a>
      </div>

      <!-- Mobile hamburger -->
      <button class="nav-hamburger" (click)="menuOpen.set(!menuOpen())" [attr.aria-label]="menuOpen() ? 'Close menu' : 'Open menu'">
        {{ menuOpen() ? '✕' : '☰' }}
      </button>
    </nav>

    <!-- Mobile dropdown menu -->
    @if (menuOpen()) {
      <div class="mobile-menu">
        @for (link of links; track link.label) {
          <a [href]="link.href" (click)="menuOpen.set(false)">{{ link.label }}</a>
        }
        <div class="mobile-menu-divider"></div>
        <a routerLink="/login" (click)="menuOpen.set(false)">Sign In</a>
        <a href="#programmes" class="mobile-menu-cta" (click)="menuOpen.set(false)">Apply Now →</a>
      </div>
    }
  `,
})

export class NavComponent {
  readonly scrolled = signal(false);
  readonly menuOpen = signal(false);

  readonly links = [
    { label: "About", href: "#about" },
    { label: "Programmes", href: "#programmes" },
    { label: "Faculty", href: "#faculty" },
    { label: "Experience", href: "#experience" },
    { label: "FAQ", href: "#faq" },
  ];

  constructor() {
    afterNextRender(() => {
      window.addEventListener("scroll", () => {
        this.scrolled.set(window.scrollY > 40);
        if (window.scrollY > 40) this.menuOpen.set(false);
      }, { passive: true });
    });
  }
}
