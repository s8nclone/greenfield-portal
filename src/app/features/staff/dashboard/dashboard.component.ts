import { Component, inject } from "@angular/core";
import { AuthStore } from "@core/auth/auth.store";
import { StatCardComponent } from "@shared/components/stat-card/stat-card.component";
import { MOCK_COURSES, MOCK_ANNOUNCEMENTS } from "@core/mock/mock-data";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faBook, faUsers, faFileLines, faCircleCheck, faHand } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-staff-dashboard",
  imports: [StatCardComponent, FontAwesomeModule],
  template: `
    <div class="animate-fade-in">
      <div style="margin-bottom:24px;">
        <h1 style="font-size:1.5rem;font-weight:700;font-family:var(--font-display);">Welcome back, {{ store.user()?.firstName }} <fa-icon [icon]="faHand"></fa-icon></h1>
        <p style="font-size:.875rem;color:var(--text-secondary);margin-top:4px;">Semester 1, 2026/2027 — Lecturer Dashboard</p>
      </div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:24px;" class="kpi-grid">
        <app-stat-card label="My Courses" value="3" [icon]="faBook" sub="this semester" />
        <app-stat-card label="Total Students" value="264" [icon]="faUsers" sub="across all courses" />
        <app-stat-card label="Pending Grades" value="12" [icon]="faFileLines" sub="awaiting submission" />
        <app-stat-card label="Avg Attendance" value="81%" [icon]="faCircleCheck" sub="all courses" />
      </div>
      <div style="display:grid;grid-template-columns:1.4fr 1fr;gap:16px;" class="dash-grid">
        <div class="card" style="padding:0;overflow:hidden;">
          <div style="padding:20px 24px;border-bottom:1px solid var(--border);">
            <h2 style="font-size:1rem;font-weight:700;font-family:var(--font-display);">My Courses</h2>
          </div>
          @for (c of courses; track c.id) {
            <div style="padding:16px 24px;border-bottom:1px solid var(--border-light);display:flex;gap:12px;align-items:center;">
              <div style="width:40px;height:40px;border-radius:8px;background:var(--jade-light);display:flex;align-items:center;justify-content:center;font-size:.7rem;font-weight:700;color:var(--jade);font-family:var(--font-display);flex-shrink:0;">{{ c.code.slice(0,3) }}</div>
              <div style="flex:1;min-width:0;">
                <div style="font-weight:600;font-size:.875rem;color:var(--text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{ c.title }}</div>
                <div style="font-size:.75rem;color:var(--text-muted);">{{ c.enrolledCount }} students · {{ c.schedule }}</div>
              </div>
              <span style="font-size:.75rem;font-weight:600;background:var(--jade-light);color:var(--jade);padding:3px 10px;border-radius:999px;">Active</span>
            </div>
          }
        </div>
        <div class="card" style="padding:0;overflow:hidden;">
          <div style="padding:16px 24px;border-bottom:1px solid var(--border);"><h2 style="font-size:1rem;font-weight:700;font-family:var(--font-display);">Announcements</h2></div>
          @for (a of announcements; track a.id) {
            <div style="padding:14px 24px;border-bottom:1px solid var(--border-light);">
              <div style="font-weight:600;font-size:.8125rem;color:var(--text);">{{ a.title }}</div>
              <div style="font-size:.75rem;color:var(--text-muted);margin-top:2px;">{{ a.author }} · {{ a.date }}</div>
            </div>
          }
        </div>
      </div>
    </div>
    <style>.kpi-grid { @media (max-width:768px) { grid-template-columns: 1fr 1fr !important; } } .dash-grid { @media (max-width:900px) { grid-template-columns: 1fr !important; } }</style>
  `,
})
export class StaffDashboardComponent {
  faHand = faHand;
  faBook = faBook;
  faUsers = faUsers;
  faFileLines = faFileLines;
  faCircleCheck = faCircleCheck;

  readonly store = inject(AuthStore);
  readonly courses = MOCK_COURSES.filter(c => c.instructorId === "u2");
  readonly announcements = MOCK_ANNOUNCEMENTS.slice(0, 4);
}
