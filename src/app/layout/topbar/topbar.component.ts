import { Component, inject } from "@angular/core";
import { RouterLink } from "@angular/router";
import { AuthStore } from "@core/auth/auth.store";
import { ThemeService } from "@core/services/theme.service";
import { AvatarComponent } from "@shared/components/avatar/avatar.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-topbar",
  imports: [AvatarComponent, RouterLink, FontAwesomeModule],
  template: `
    <header class="portal-topbar">
      <div style="flex:1;">
        <div style="font-size:.8125rem;color:var(--text-muted);">Welcome back,</div>
        <div style="font-size:.9375rem;font-weight:700;font-family:var(--font-display);color:var(--text);">{{ store.user()?.firstName }} {{ store.user()?.lastName }}</div>
      </div>

      <div style="display:flex;align-items:center;gap:8px;">
        <button (click)="theme.toggle()" style="width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:var(--surface-raised);font-size:1rem;transition:.2s;" title="Toggle theme">
          <fa-icon [icon]="theme.isDark() ? faSun : faMoon"></fa-icon>
        </button>

        <a routerLink="/" style="padding:8px 14px;border-radius:var(--radius-md);background:var(--surface-raised);font-size:.8125rem;font-weight:600;color:var(--text-secondary);font-family:var(--font-display);transition:.2s;" title="Back to website">
          ← Website
        </a>

        <app-avatar [src]="store.user()?.avatarUrl" [name]="(store.user()?.firstName ?? '') + ' ' + (store.user()?.lastName ?? '')" size="xs" />
      </div>
    </header>
  `,
})

export class TopbarComponent {
  faSun = faSun;
  faMoon = faMoon;

  readonly store = inject(AuthStore);
  readonly theme = inject(ThemeService);
}
