import { Component, inject } from "@angular/core";
import { PageHeaderComponent } from "@shared/components/page-header/page-header.component";
import { ThemeService } from "@core/services/theme.service";
import { NotificationService } from "@core/services/notification.service";
@Component({
  selector: "app-settings",
  imports: [PageHeaderComponent],
  template: `
    <app-page-header title="System Settings" subtitle="Configure portal preferences and system options" />
    <div style="display:flex;flex-direction:column;gap:16px;max-width:800px;">
      @for (section of sections; track section.title) {
        <div class="card">
          <h3 style="font-family:var(--font-display);font-weight:700;margin-bottom:20px;">{{ section.title }}</h3>
          @for (item of section.items; track item.label) {
            <div style="display:flex;justify-content:space-between;align-items:center;padding:14px 0;border-bottom:1px solid var(--border-light);">
              <div>
                <div style="font-weight:600;font-size:.875rem;color:var(--text);">{{ item.label }}</div>
                <div style="font-size:.75rem;color:var(--text-muted);">{{ item.desc }}</div>
              </div>
              <button (click)="item.action()" style="padding:7px 18px;border-radius:var(--radius-md);font-size:.8125rem;font-weight:600;font-family:var(--font-display);background:var(--surface-raised);color:var(--text-secondary);border:1.5px solid var(--border);transition:.2s;" onmouseover="this.style.borderColor='var(--admin-accent)';this.style.color='var(--admin-accent)'" onmouseout="this.style.borderColor='var(--border)';this.style.color='var(--text-secondary)'">
                {{ item.btn }}
              </button>
            </div>
          }
        </div>
      }
    </div>
  `,
})

export class SettingsComponent {
  private readonly theme = inject(ThemeService);
  private readonly ns = inject(NotificationService);
  readonly sections = [
    { title:"Appearance", items:[
      { label:"Theme", desc:"Switch between light and dark mode", btn:"Toggle Theme", action:() => this.theme.toggle() },
    ]},
    { title:"Academic Session", items:[
      { label:"Current Session", desc:"2026/2027 — Semester 1 (active)", btn:"Manage", action:() => this.ns.info("Session management coming soon.") },
      { label:"Registration Period", desc:"Open: Jan 5 – Feb 15, 2027", btn:"Update", action:() => this.ns.info("Update registration period.") },
    ]},
    { title:"Notifications", items:[
      { label:"Email Notifications", desc:"Send announcements via email to all students", btn:"Configure", action:() => this.ns.info("Email config coming soon.") },
      { label:"SMS Alerts", desc:"Send urgent alerts via SMS", btn:"Configure", action:() => this.ns.info("SMS config coming soon.") },
    ]},
    { title:"Data & Security", items:[
      { label:"Export Student Data", desc:"Download full student records as CSV", btn:"Export", action:() => this.ns.success("Export started. You will receive an email when ready.") },
      { label:"Audit Log", desc:"View all admin actions in the system", btn:"View Log", action:() => this.ns.info("Audit log coming soon.") },
    ]},
  ];
}
