import { Component, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { PageHeaderComponent } from "@shared/components/page-header/page-header.component";
import { NotificationService } from "@core/services/notification.service";
import { inject } from "@angular/core";
@Component({
  selector: "app-exam-builder",
  imports: [FormsModule, PageHeaderComponent],
  template: `
    <app-page-header title="Exam Builder" subtitle="Create and manage examinations for your courses" />
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;" class="exam-grid">
      <div class="card">
        <h3 style="font-family:var(--font-display);font-weight:700;margin-bottom:20px;">Create Exam</h3>
        <div style="display:flex;flex-direction:column;gap:16px;">
          <div><label class="form-label">Course</label>
            <select class="form-input" [(ngModel)]="form.course"><option value="">Select course</option><option>CSC301</option><option>CSC303</option><option>CSC201</option></select></div>
          <div><label class="form-label">Exam Type</label>
            <select class="form-input" [(ngModel)]="form.type"><option>CA</option><option>Midterm</option><option>Final</option></select></div>
          <div><label class="form-label">Date</label><input type="date" class="form-input" [(ngModel)]="form.date" /></div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
            <div><label class="form-label">Start Time</label><input type="time" class="form-input" [(ngModel)]="form.time" /></div>
            <div><label class="form-label">Duration (mins)</label><input type="number" class="form-input" [(ngModel)]="form.duration" placeholder="120" /></div>
          </div>
          <div><label class="form-label">Venue</label><input class="form-input" [(ngModel)]="form.venue" placeholder="Hall A" /></div>
          <button (click)="save()" style="padding:12px;background:var(--jade);color:#fff;border-radius:var(--radius-md);font-weight:700;font-family:var(--font-display);">Create Exam</button>
        </div>
      </div>
      <div class="card" style="padding:0;overflow:hidden;">
        <div style="padding:16px 24px;border-bottom:1px solid var(--border);"><h3 style="font-family:var(--font-display);font-weight:700;">Scheduled Exams</h3></div>
        @for (e of exams; track e.code) {
          <div style="padding:16px 24px;border-bottom:1px solid var(--border-light);">
            <div style="font-weight:700;font-size:.9375rem;color:var(--text);">{{ e.code }} — {{ e.type }}</div>
            <div style="font-size:.8125rem;color:var(--text-muted);margin-top:4px;">{{ e.date }} · {{ e.time }} · {{ e.venue }}</div>
          </div>
        }
      </div>
    </div>
    <style>.exam-grid { @media (max-width:768px) { grid-template-columns: 1fr !important; } }</style>
  `,
})
export class ExamBuilderComponent {
  private readonly ns = inject(NotificationService);
  form = { course:"", type:"Final", date:"", time:"09:00", duration:180, venue:"" };
  readonly exams = [
    { code:"CSC301", type:"Final", date:"2025-06-10", time:"09:00", venue:"Hall A" },
    { code:"CSC303", type:"Final", date:"2025-06-12", time:"09:00", venue:"Hall B" },
    { code:"CSC201", type:"Midterm", date:"2025-03-20", time:"10:00", venue:"Lab 3" },
  ];
  save() { this.ns.success("Exam created successfully!"); this.form = { course:"", type:"Final", date:"", time:"09:00", duration:180, venue:"" }; }
}
