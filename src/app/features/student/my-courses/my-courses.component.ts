import { Component } from "@angular/core";
import { PageHeaderComponent } from "@shared/components/page-header/page-header.component";
import { MOCK_COURSES } from "@core/mock/mock-data";

@Component({
  selector: "app-my-courses",
  imports: [PageHeaderComponent],
  template: `
    <app-page-header title="My Courses" subtitle="All registered courses for Semester 1, 2024/2025" />
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:20px;">
      @for (c of courses; track c.id) {
        <div class="card" style="padding:0;overflow:hidden;transition:.2s;" onmouseover="this.style.boxShadow='var(--shadow-md)'" onmouseout="this.style.boxShadow='var(--shadow-sm)'">
          <div style="height:8px;background:var(--primary);"></div>
          <div style="padding:24px;">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px;">
              <span style="font-size:.75rem;font-weight:700;background:var(--primary-light);color:var(--primary);padding:4px 10px;border-radius:999px;">{{ c.code }}</span>
              <span style="font-size:.75rem;color:var(--text-muted);">{{ c.creditHours }} units</span>
            </div>
            <h3 style="font-family:var(--font-display);font-weight:700;font-size:1.0625rem;color:var(--text);margin-bottom:6px;">{{ c.title }}</h3>
            <p style="font-size:.8125rem;color:var(--text-secondary);margin-bottom:16px;">{{ c.instructorName }}</p>
            <div style="font-size:.8125rem;color:var(--text-muted);margin-bottom:16px;">{{ c.schedule }}</div>
            <div style="padding-top:16px;border-top:1px solid var(--border);display:flex;justify-content:space-between;font-size:.8125rem;">
              <span style="color:var(--text-secondary);">{{ c.enrolledCount }}/{{ c.capacity }} enrolled</span>
              <span style="color:var(--success);font-weight:600;">Active</span>
            </div>
          </div>
        </div>
      }
    </div>
  `,
})
export class MyCoursesComponent {
  readonly courses = MOCK_COURSES;
}
