import { Component, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { PageHeaderComponent } from "@shared/components/page-header/page-header.component";
import { NotificationService } from "@core/services/notification.service";
import { inject } from "@angular/core";
import { MOCK_ANNOUNCEMENTS } from "@core/mock/mock-data";
@Component({
  selector: "app-announcements",
  imports: [FormsModule, PageHeaderComponent],
  template: `
    <app-page-header title="Announcements" subtitle="Post and manage university-wide announcements" />
    <div style="display:grid;grid-template-columns:1fr 1.4fr;gap:20px;" class="ann-grid">
      <div class="card">
        <h3 style="font-family:var(--font-display);font-weight:700;margin-bottom:20px;">New Announcement</h3>
        <div style="display:flex;flex-direction:column;gap:14px;">
          <div><label class="form-label">Title</label><input class="form-input" [(ngModel)]="form.title" placeholder="Announcement title" /></div>
          <div><label class="form-label">Category</label>
            <select class="form-input" [(ngModel)]="form.category"><option>academic</option><option>financial</option><option>general</option><option>urgent</option></select></div>
          <div><label class="form-label">Message</label><textarea class="form-input" [(ngModel)]="form.body" rows="5" placeholder="Write your announcement..." style="resize:vertical;"></textarea></div>
          <label style="display:flex;align-items:center;gap:8px;font-size:.875rem;cursor:pointer;"><input type="checkbox" [(ngModel)]="form.pinned" /> Pin this announcement</label>
          <button (click)="post()" style="padding:12px;background:var(--admin-accent);color:#fff;border-radius:var(--radius-md);font-weight:700;font-family:var(--font-display);">Post Announcement</button>
        </div>
      </div>
      <div class="card" style="padding:0;overflow:hidden;">
        <div style="padding:16px 24px;border-bottom:1px solid var(--border);"><h3 style="font-family:var(--font-display);font-weight:700;">Recent Announcements</h3></div>
        @for (a of announcements; track a.id) {
          <div style="padding:16px 24px;border-bottom:1px solid var(--border-light);">
            <div style="display:flex;gap:8px;margin-bottom:6px;">
              @if (a.pinned) { <span style="font-size:.7rem;font-weight:700;background:var(--error-light);color:var(--error);padding:2px 8px;border-radius:999px;">PINNED</span> }
              <span class="badge" [class]="a.category==='urgent'?'badge-error':a.category==='academic'?'badge-info':'badge-muted'">{{ a.category }}</span>
            </div>
            <div style="font-weight:700;font-size:.875rem;color:var(--text);margin-bottom:4px;">{{ a.title }}</div>
            <div style="font-size:.75rem;color:var(--text-muted);">{{ a.author }} · {{ a.date }}</div>
          </div>
        }
      </div>
    </div>
    <style>.ann-grid { @media (max-width:768px) { grid-template-columns: 1fr !important; } }</style>
  `,
})

export class AnnouncementsComponent {
  private readonly ns = inject(NotificationService);
  readonly announcements = MOCK_ANNOUNCEMENTS;
  form = { title:"", category:"general", body:"", pinned:false };
  post() { if(!this.form.title||!this.form.body) { this.ns.warning("Please fill in all fields."); return; } this.ns.success("Announcement posted successfully!"); this.form = { title:"", category:"general", body:"", pinned:false }; }
}
