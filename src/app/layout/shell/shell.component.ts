import { Component, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { TopbarComponent } from "../topbar/topbar.component";
import { AuthService } from "@core/auth/auth.service";

@Component({
  selector: "app-shell",
  imports: [RouterOutlet, SidebarComponent, TopbarComponent],
  template: `
    <div class="portal-shell">
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
  constructor() {
    inject(AuthService).restoreSession();
  }
}
