import { Component } from "@angular/core";
import { PageHeaderComponent } from "@shared/components/page-header/page-header.component";
import { ProgressBarComponent } from "@shared/components/progress-bar/progress-bar.component";
import { MOCK_ATTENDANCE, MOCK_COURSES } from "@core/mock/mock-data";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faCircleCheck, faCircleXmark, faClock } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-attendance",
  imports: [PageHeaderComponent, ProgressBarComponent, FontAwesomeModule],
  template: `
    <app-page-header title="Attendance" subtitle="Your attendance record for all courses this semester" />
    <div style="display:flex;flex-direction:column;gap:16px;">
      @for (course of courses; track course.id) {
        <div class="card">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
            <div>
              <div style="font-family:var(--font-display);font-weight:700;font-size:1rem;color:var(--text);">{{ course.code }} — {{ course.title }}</div>
              <div style="font-size:.8125rem;color:var(--text-muted);margin-top:2px;">{{ course.schedule }}</div>
            </div>
            <div [style.color]="pct(course.id) >= 75 ? 'var(--success)' : 'var(--error)'" style="font-family:var(--font-display);font-weight:700;font-size:1.5rem;">{{ pct(course.id) }}%</div>
          </div>
          <app-progress-bar [value]="pct(course.id)" [color]="pct(course.id) >= 75 ? 'var(--success)' : 'var(--error)'" />
          <div style="margin-top:12px;display:flex;gap:16px;font-size:.8125rem;">
            <span style="color:var(--success);"><fa-icon [icon]="faCircleCheck"></fa-icon> Present: {{ countStatus(course.id, 'present') }}</span>
            <span style="color:var(--error);"><fa-icon [icon]="faCircleXmark"></fa-icon> Absent: {{ countStatus(course.id, 'absent') }}</span>
            <span style="color:var(--warning);"><fa-icon [icon]="faClock"></fa-icon> Late: {{ countStatus(course.id, 'late') }}</span>
          </div>
        </div>
      }
    </div>
  `,
})
export class AttendanceComponent {
  faCircleCheck = faCircleCheck;
  faCircleXmark = faCircleXmark;
  faClock = faClock;

  readonly courses = MOCK_COURSES.slice(0, 5);
  readonly attendance = MOCK_ATTENDANCE;
  forCourse(id: string) { return this.attendance.filter(a => a.courseId === id); }
  pct(id: string) { const r = this.forCourse(id); if (!r.length) return 85; return Math.round((r.filter(a => a.status !== "absent").length / r.length) * 100); }
  countStatus(id: string, status: string) { return this.forCourse(id).filter(a => a.status === status).length; }
}
