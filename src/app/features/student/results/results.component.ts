import { Component } from "@angular/core";
import { PageHeaderComponent } from "@shared/components/page-header/page-header.component";
import { MOCK_GRADES } from "@core/mock/mock-data";

@Component({
  selector: "app-results",
  imports: [PageHeaderComponent],
  template: `
    <app-page-header title="Results" subtitle="Academic performance — 2024/2025 Semester 1" />
    <div style="display:grid;grid-template-columns:3fr 1fr;gap:20px;" class="res-grid">
      <div class="card" style="padding:0;overflow:hidden;">
        <table class="data-table">
          <thead><tr><th>Course</th><th>Code</th><th>Units</th><th>Score</th><th>Grade</th><th>Points</th></tr></thead>
          <tbody>
            @for (g of grades; track g.courseId) {
              <tr>
                <td style="font-weight:600;">{{ g.courseTitle }}</td>
                <td style="color:var(--text-muted);">{{ g.courseCode }}</td>
                <td>{{ g.creditHours }}</td>
                <td>{{ g.score }}%</td>
                <td><span style="font-weight:700;" [style.color]="gradeColor(g.grade)">{{ g.grade }}</span></td>
                <td>{{ g.gradePoints }}</td>
              </tr>
            }
          </tbody>
        </table>
      </div>
      <div style="display:flex;flex-direction:column;gap:16px;">
        <div class="card" style="text-align:center;">
          <div style="font-size:.75rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--text-muted);margin-bottom:8px;">Semester GPA</div>
          <div style="font-size:3.5rem;font-weight:700;font-family:var(--font-display);color:var(--primary);">4.52</div>
          <div style="font-size:.875rem;color:var(--text-secondary);">out of 5.0</div>
        </div>
        <div class="card" style="text-align:center;">
          <div style="font-size:.75rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--text-muted);margin-bottom:8px;">Cumulative GPA</div>
          <div style="font-size:3.5rem;font-weight:700;font-family:var(--font-display);color:var(--jade);">4.38</div>
          <div style="font-size:.875rem;color:var(--text-secondary);">out of 5.0</div>
        </div>
        <div class="card">
          <div style="font-size:.75rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--text-muted);margin-bottom:12px;">Grade Scale</div>
          @for (g of scale; track g.grade) {
            <div style="display:flex;justify-content:space-between;font-size:.8125rem;padding:4px 0;border-bottom:1px solid var(--border-light);">
              <span style="font-weight:700;" [style.color]="gradeColor(g.grade)">{{ g.grade }}</span>
              <span style="color:var(--text-muted);">{{ g.range }}</span>
            </div>
          }
        </div>
      </div>
    </div>
    <style>.res-grid { @media (max-width:768px) { grid-template-columns: 1fr !important; } }</style>
  `,
})
export class ResultsComponent {
  readonly grades = MOCK_GRADES;
  readonly scale = [{ grade:"A", range:"70–100 / 5.0" },{ grade:"B+", range:"65–69 / 4.0" },{ grade:"B", range:"60–64 / 3.5" },{ grade:"C+", range:"55–59 / 2.5" },{ grade:"C", range:"50–54 / 2.0" },{ grade:"F", range:"0–49 / 0.0" }];
  gradeColor(g: string) { return ["A","A+"].includes(g) ? "var(--success)" : g.startsWith("B") ? "var(--info)" : g.startsWith("C") ? "var(--warning)" : "var(--error)"; }
}
