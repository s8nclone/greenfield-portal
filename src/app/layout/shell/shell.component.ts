import { Component, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { TopbarComponent } from "../topbar/topbar.component";
import { AuthService } from "@core/auth/auth.service";
import { SidebarStateService } from "@core/services/sidebar-state.service";

@Component({
  selector: "app-shell",
  imports: [RouterOutlet, SidebarComponent, TopbarComponent],
  template: `
    <div class="portal-shell">
      @if (sidebarState.isOpen()) {
        <div class="sidebar-backdrop" (click)="sidebarState.close()"></div>
      }
      <app-sidebar />
      <div class="portal-main">
        <app-topbar />
        <main class="portal-content">
          <router-outlet />
        </main>
      </div>
    </div>
  `,
})

export class ShellComponent {
  readonly sidebarState = inject(SidebarStateService);

  constructor() {
    inject(AuthService).restoreSession();
  }
}

