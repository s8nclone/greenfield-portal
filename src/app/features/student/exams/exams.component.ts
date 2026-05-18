import { Component } from "@angular/core";
import { PageHeaderComponent } from "@shared/components/page-header/page-header.component";
import { MOCK_EXAMS } from "@core/mock/mock-data";

@Component({
  selector: "app-exams",
  imports: [PageHeaderComponent],
  template: `
    <app-page-header title="Examinations" subtitle="Your exam timetable and past results" />
    <div style="display:flex;flex-direction:column;gap:12px;">
      @for (exam of exams; track exam.id) {
        <div class="card" style="display:flex;align-items:center;gap:20px;">
          <div style="width:56px;height:56px;border-radius:var(--radius-md);background:var(--primary-light);display:flex;flex-direction:column;align-items:center;justify-content:center;flex-shrink:0;">
            <div style="font-size:.7rem;font-weight:700;color:var(--primary);text-transform:uppercase;">{{ getMonth(exam.date) }}</div>
            <div style="font-size:1.25rem;font-weight:700;font-family:var(--font-display);color:var(--primary);">{{ getDay(exam.date) }}</div>
          </div>
          <div style="flex:1;">
            <div style="font-weight:700;font-family:var(--font-display);color:var(--text);">{{ exam.courseCode }} — {{ exam.courseTitle }}</div>
            <div style="font-size:.8125rem;color:var(--text-muted);margin-top:4px;">{{ exam.startTime }} · {{ exam.duration }}min · {{ exam.venue }}</div>
          </div>
          <div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px;">
            <span class="badge" [class]="exam.type === 'FINAL' ? 'badge-error' : exam.type === 'MIDTERM' ? 'badge-warning' : 'badge-info'">{{ exam.type }}</span>
            <span class="badge" [class]="exam.status === 'upcoming' ? 'badge-info' : exam.status === 'completed' ? 'badge-success' : 'badge-warning'">{{ exam.status }}</span>
          </div>
        </div>
      }
    </div>
  `,
})
export class ExamsComponent {
  readonly exams = MOCK_EXAMS;
  getMonth(d: string) { return new Date(d).toLocaleDateString("en", { month: "short" }); }
  getDay(d: string) { return new Date(d).getDate(); }
}
