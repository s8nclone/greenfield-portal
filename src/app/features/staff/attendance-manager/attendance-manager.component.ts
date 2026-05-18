import { Component, signal } from "@angular/core";
import { PageHeaderComponent } from "@shared/components/page-header/page-header.component";
import { NotificationService } from "@core/services/notification.service";
import { inject } from "@angular/core";
@Component({
  selector: "app-attendance-manager",
  imports: [PageHeaderComponent],
  template: `
    <app-page-header title="Attendance Manager" subtitle="Take and manage attendance for your classes" />
    <div style="margin-bottom:20px;display:flex;gap:12px;flex-wrap:wrap;">
      @for (c of courses; track c.code) {
        <button (click)="activeCourse.set(c.code)" [style]="'padding:8px 20px;border-radius:999px;font-size:.875rem;font-weight:600;border:1.5px solid;transition:.2s;font-family:var(--font-display);cursor:pointer;' + (activeCourse()===c.code ? 'background:var(--jade);color:#fff;border-color:var(--jade);' : 'background:transparent;color:var(--text-secondary);border-color:var(--border);')">{{ c.code }}</button>
      }
    </div>
    <div class="card" style="padding:0;overflow:hidden;">
      <div style="padding:16px 24px;border-bottom:1px solid var(--border);display:flex;justify-content:space-between;align-items:center;">
        <span style="font-weight:700;font-family:var(--font-display);">{{ activeCourse() }} — Today, {{ today }}</span>
        <button (click)="saveAttendance()" style="padding:8px 20px;background:var(--jade);color:#fff;border-radius:var(--radius-md);font-size:.875rem;font-weight:600;font-family:var(--font-display);">Save Attendance</button>
      </div>
      @for (s of students; track s.matric) {
        <div style="padding:14px 24px;border-bottom:1px solid var(--border-light);display:flex;align-items:center;gap:16px;">
          <div style="flex:1;"><div style="font-weight:600;font-size:.875rem;">{{ s.name }}</div><div style="font-size:.75rem;color:var(--text-muted);">{{ s.matric }}</div></div>
          <div style="display:flex;gap:8px;">
            @for (opt of options; track opt.value) {
              <button (click)="mark(s.matric, opt.value)" [style]="'padding:5px 14px;border-radius:999px;font-size:.75rem;font-weight:700;border:1.5px solid;transition:.2s;cursor:pointer;' + (attendance()[s.matric]===opt.value ? opt.active : opt.inactive)">{{ opt.label }}</button>
            }
          </div>
        </div>
      }
    </div>
  `,
})
export class AttendanceManagerComponent {
  private readonly ns = inject(NotificationService);
  readonly today = new Date().toLocaleDateString("en-NG", { weekday:"short", day:"numeric", month:"short" });
  readonly activeCourse = signal("CSC301");
  readonly attendance = signal<Record<string,string>>({});
  readonly courses = [{ code:"CSC301" },{ code:"CSC303" },{ code:"CSC201" }];
  readonly options = [
    { value:"P", label:"P", active:"background:var(--success);color:#fff;border-color:var(--success);", inactive:"background:transparent;color:var(--success);border-color:var(--success);" },
    { value:"A", label:"A", active:"background:var(--error);color:#fff;border-color:var(--error);", inactive:"background:transparent;color:var(--error);border-color:var(--error);" },
    { value:"L", label:"L", active:"background:var(--warning);color:#fff;border-color:var(--warning);", inactive:"background:transparent;color:var(--warning);border-color:var(--warning);" },
  ];
  readonly students = [
    { name:"Amara Okafor", matric:"GU/2023/CS/0042" },
    { name:"Emeka Nwosu", matric:"GU/2023/CS/0043" },
    { name:"Fatima Musa", matric:"GU/2023/CS/0044" },
    { name:"Tunde Bakare", matric:"GU/2023/CS/0045" },
    { name:"Ngozi Eze", matric:"GU/2023/CS/0046" },
  ];
  mark(matric: string, status: string) { this.attendance.update(a => ({ ...a, [matric]: status })); }
  saveAttendance() { this.ns.success("Attendance saved successfully!"); }
}
