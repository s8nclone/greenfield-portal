import { Component } from "@angular/core";
import { PageHeaderComponent } from "@shared/components/page-header/page-header.component";
import { MOCK_COURSES } from "@core/mock/mock-data";
@Component({
  selector: "app-staff-courses",
  imports: [PageHeaderComponent],
  template: `
    <app-page-header title="My Courses" subtitle="Courses assigned to you this semester" />
    <div style="display:flex;flex-direction:column;gap:16px;">
      @for (c of courses; track c.id) {
        <div class="card" style="display:grid;grid-template-columns:1fr auto;gap:20px;align-items:start;">
          <div>
            <div style="display:flex;gap:8px;align-items:center;margin-bottom:8px;">
              <span style="font-size:.75rem;font-weight:700;background:var(--jade-light);color:var(--jade);padding:4px 10px;border-radius:999px;">{{ c.code }}</span>
              <span style="font-size:.75rem;color:var(--text-muted);">{{ c.creditHours }} units · Level {{ c.level }}</span>
            </div>
            <h3 style="font-family:var(--font-display);font-weight:700;font-size:1.0625rem;margin-bottom:4px;">{{ c.title }}</h3>
            <p style="font-size:.8125rem;color:var(--text-secondary);margin-bottom:8px;">{{ c.description }}</p>
            <div style="font-size:.8125rem;color:var(--text-muted);">{{ c.schedule }}</div>
          </div>
          <div style="text-align:right;">
            <div style="font-size:2rem;font-weight:700;font-family:var(--font-display);color:var(--jade);">{{ c.enrolledCount }}</div>
            <div style="font-size:.75rem;color:var(--text-muted);">students</div>
          </div>
        </div>
      }
    </div>
  `,
})
export class StaffCoursesComponent {
  readonly courses = MOCK_COURSES.filter(c => c.instructorId === "u2");
}
