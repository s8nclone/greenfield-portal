import { Component, inject, signal } from "@angular/core";
import { AuthStore } from "@core/auth/auth.store";
import { StatCardComponent } from "@shared/components/stat-card/stat-card.component";
import { MOCK_STUDENT, MOCK_ANNOUNCEMENTS, MOCK_EXAMS, MOCK_COURSES } from "@core/mock/mock-data";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faTrophy, faChartLine, faBook, faCircleCheck, faHand } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-student-dashboard",
  imports: [StatCardComponent, FontAwesomeModule],
  template: `
    <div class="animate-fade-in">
      <div style="margin-bottom:24px;">
        <h1 style="font-size:1.5rem;font-weight:700;font-family:var(--font-display);">Good morning, {{ store.user()?.firstName }} <fa-icon [icon]="faHand"></fa-icon></h1>
        <p style="font-size:.875rem;color:var(--text-secondary);margin-top:4px;">{{ today }} — Semester 1, 2026/2027 Academic Session</p>
      </div>

      <!-- KPI row -->
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:24px;" class="kpi-grid">
        <app-stat-card label="CGPA" value="4.38" [icon]="faTrophy" sub="300 level" />
        <app-stat-card label="Current GPA" value="4.52" [icon]="faChartLine" sub="Semester 1" />
        <app-stat-card label="Courses" value="5" [icon]="faBook" sub="registered this semester" />
        <app-stat-card label="Attendance" value="87%" [icon]="faCircleCheck" sub="across all courses" />
      </div>

      <div style="display:grid;grid-template-columns:1.4fr 1fr;gap:16px;" class="dash-grid">
        <!-- Courses -->
        <div class="card" style="padding:0;overflow:hidden;">
          <div style="padding:20px 24px;border-bottom:1px solid var(--border);display:flex;justify-content:space-between;align-items:center;">
            <h2 style="font-size:1rem;font-weight:700;font-family:var(--font-display);">My Courses</h2>
            <a routerLink="../courses" style="font-size:.8125rem;color:var(--primary);font-weight:600;text-decoration:none;">View all →</a>
          </div>
          @for (course of courses; track course.id) {
            <div style="padding:16px 24px;border-bottom:1px solid var(--border-light);display:flex;gap:12px;align-items:center;">
              <div style="width:36px;height:36px;border-radius:8px;background:var(--primary-light);display:flex;align-items:center;justify-content:center;font-size:.75rem;font-weight:700;color:var(--primary);font-family:var(--font-display);flex-shrink:0;">{{ course.code.slice(0,3) }}</div>
              <div style="flex:1;min-width:0;">
                <div style="font-weight:600;font-size:.875rem;color:var(--text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{ course.title }}</div>
                <div style="font-size:.75rem;color:var(--text-muted);">{{ course.schedule }} · {{ course.creditHours }} units</div>
              </div>
              <span style="font-size:.75rem;font-weight:600;background:var(--success-light);color:var(--success);padding:3px 10px;border-radius:999px;white-space:nowrap;">Active</span>
            </div>
          }
        </div>

        <div style="display:flex;flex-direction:column;gap:16px;">
          <!-- Upcoming exams -->
          <div class="card" style="padding:0;overflow:hidden;">
            <div style="padding:16px 24px;border-bottom:1px solid var(--border);"><h2 style="font-size:1rem;font-weight:700;font-family:var(--font-display);">Upcoming Exams</h2></div>
            @for (exam of upcomingExams; track exam.id) {
              <div style="padding:14px 24px;border-bottom:1px solid var(--border-light);">
                <div style="font-weight:600;font-size:.875rem;color:var(--text);">{{ exam.courseCode }}</div>
                <div style="font-size:.75rem;color:var(--text-muted);">{{ exam.date }} · {{ exam.startTime }} · {{ exam.venue }}</div>
              </div>
            }
          </div>

          <!-- Announcements -->
          <div class="card" style="padding:0;overflow:hidden;">
            <div style="padding:16px 24px;border-bottom:1px solid var(--border);"><h2 style="font-size:1rem;font-weight:700;font-family:var(--font-display);">Announcements</h2></div>
            @for (a of announcements; track a.id) {
              <div style="padding:14px 24px;border-bottom:1px solid var(--border-light);">
                @if (a.pinned) { <span style="font-size:.7rem;font-weight:700;background:var(--error-light);color:var(--error);padding:2px 8px;border-radius:999px;margin-bottom:4px;display:inline-block;">PINNED</span> }
                <div style="font-weight:600;font-size:.8125rem;color:var(--text);">{{ a.title }}</div>
                <div style="font-size:.75rem;color:var(--text-muted);margin-top:2px;">{{ a.author }} · {{ a.date }}</div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
    <style>.kpi-grid { @media (max-width:768px) { grid-template-columns: 1fr 1fr !important; } } .dash-grid { @media (max-width:900px) { grid-template-columns: 1fr !important; } }</style>
  `,
})
export class StudentDashboardComponent {
  faHand = faHand;
  faTrophy = faTrophy;
  faChartLine = faChartLine;
  faBook = faBook;
  faCircleCheck = faCircleCheck;

  readonly store = inject(AuthStore);
  readonly today = new Date().toLocaleDateString("en-NG", { weekday:"long", year:"numeric", month:"long", day:"numeric" });
  readonly courses = MOCK_COURSES.slice(0,4);
  readonly upcomingExams = MOCK_EXAMS.filter(e => e.status === "upcoming").slice(0,3);
  readonly announcements = MOCK_ANNOUNCEMENTS.slice(0,3);
}
