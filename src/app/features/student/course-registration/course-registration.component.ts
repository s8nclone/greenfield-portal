import { Component, signal } from "@angular/core";
import { PageHeaderComponent } from "@shared/components/page-header/page-header.component";
import { NotificationService } from "@core/services/notification.service";
import { inject } from "@angular/core";
import { MOCK_COURSES } from "@core/mock/mock-data";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-course-registration",
  imports: [PageHeaderComponent, FontAwesomeModule],
  template: `
    <app-page-header title="Course Registration" subtitle="Select courses for the upcoming semester. Max 24 credit units." />
    <div style="display:grid;grid-template-columns:1.5fr 1fr;gap:20px;" class="reg-grid">
      <div class="card" style="padding:0;overflow:hidden;">
        <div style="padding:16px 24px;border-bottom:1px solid var(--border);display:flex;justify-content:space-between;align-items:center;">
          <span style="font-weight:700;font-family:var(--font-display);">Available Courses</span>
          <span style="font-size:.8125rem;color:var(--text-muted);">{{ selected().length }} selected · {{ totalUnits() }} units</span>
        </div>
        @for (c of courses; track c.id) {
          <div style="padding:16px 24px;border-bottom:1px solid var(--border-light);display:flex;align-items:center;gap:16px;cursor:pointer;transition:background .15s;" (click)="toggle(c.id)" [style.background]="isSelected(c.id) ? 'var(--primary-light)' : 'transparent'" onmouseover="this.style.background = this.getAttribute('data-selected') === 'true' ? 'var(--primary-light)' : 'var(--canvas-secondary)'" onmouseout="this.style.background = this.getAttribute('data-selected') === 'true' ? 'var(--primary-light)' : 'transparent'">
            <div style="width:20px;height:20px;border-radius:4px;border:2px solid;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:.75rem;" [style.borderColor]="isSelected(c.id) ? 'var(--primary)' : 'var(--border)'" [style.background]="isSelected(c.id) ? 'var(--primary)' : 'transparent'" [style.color]="isSelected(c.id) ? '#fff' : 'transparent'"><fa-icon [icon]="faCheck"></fa-icon></div>
            <div style="flex:1;">
              <div style="font-weight:600;font-size:.875rem;color:var(--text);">{{ c.code }} — {{ c.title }}</div>
              <div style="font-size:.75rem;color:var(--text-muted);">{{ c.instructorName }} · {{ c.schedule }}</div>
            </div>
            <span style="font-size:.75rem;font-weight:600;color:var(--text-secondary);">{{ c.creditHours }} units</span>
          </div>
        }
      </div>
      <div style="display:flex;flex-direction:column;gap:16px;">
        <div class="card">
          <h3 style="font-family:var(--font-display);font-weight:700;margin-bottom:16px;">Registration Summary</h3>
          @if (selected().length === 0) {
            <p style="font-size:.875rem;color:var(--text-muted);text-align:center;padding:24px 0;">No courses selected yet</p>
          }
          @for (id of selected(); track id) {
            <div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--border-light);font-size:.875rem;">
              <span style="color:var(--text);">{{ getCourse(id)?.code }}</span>
              <span style="color:var(--text-secondary);">{{ getCourse(id)?.creditHours }} units</span>
            </div>
          }
          <div style="margin-top:16px;display:flex;justify-content:space-between;font-weight:700;font-family:var(--font-display);">
            <span>Total</span><span>{{ totalUnits() }} / 24 units</span>
          </div>
          <button (click)="submit()" [disabled]="selected().length === 0" style="width:100%;padding:12px;margin-top:16px;background:var(--primary);color:#fff;border-radius:var(--radius-md);font-weight:700;font-family:var(--font-display);font-size:.9375rem;transition:.2s;" [style.opacity]="selected().length === 0 ? '0.5' : '1'">Submit Registration</button>
        </div>
      </div>
    </div>
    <style>.reg-grid { @media (max-width:768px) { grid-template-columns: 1fr !important; } }</style>
  `,
})
export class CourseRegistrationComponent {
  faCheck = faCheck;
  private readonly ns = inject(NotificationService);
  readonly courses = MOCK_COURSES;
  readonly selected = signal<string[]>([]);
  isSelected(id: string) { return this.selected().includes(id); }
  toggle(id: string) {
    if (this.isSelected(id)) this.selected.update(s => s.filter(x => x !== id));
    else if (this.totalUnits() < 24) this.selected.update(s => [...s, id]);
    else this.ns.warning("Maximum 24 credit units allowed.");
  }
  getCourse(id: string) { return this.courses.find(c => c.id === id); }
  totalUnits() { return this.selected().reduce((sum, id) => sum + (this.getCourse(id)?.creditHours ?? 0), 0); }
  submit() { this.ns.success("Course registration submitted successfully!"); this.selected.set([]); }
}
