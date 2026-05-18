import { Component, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { PageHeaderComponent } from "@shared/components/page-header/page-header.component";
import { NotificationService } from "@core/services/notification.service";
import { inject } from "@angular/core";
@Component({
  selector: "app-grading",
  imports: [FormsModule, PageHeaderComponent],
  template: `
    <app-page-header title="Grading" subtitle="Enter and submit student scores" />
    <div style="margin-bottom:16px;display:flex;gap:12px;flex-wrap:wrap;">
      @for (c of courses; track c) {
        <button (click)="course.set(c)" [style]="'padding:8px 20px;border-radius:999px;font-size:.875rem;font-weight:600;border:1.5px solid;transition:.2s;font-family:var(--font-display);cursor:pointer;' + (course()===c ? 'background:var(--jade);color:#fff;border-color:var(--jade);' : 'background:transparent;color:var(--text-secondary);border-color:var(--border);')">{{ c }}</button>
      }
    </div>
    <div class="card" style="padding:0;overflow:hidden;">
      <div style="padding:16px 24px;border-bottom:1px solid var(--border);display:flex;justify-content:space-between;align-items:center;">
        <span style="font-weight:700;font-family:var(--font-display);">{{ course() }} — Score Entry (100 marks)</span>
        <button (click)="submit()" style="padding:8px 20px;background:var(--jade);color:#fff;border-radius:var(--radius-md);font-size:.875rem;font-weight:600;font-family:var(--font-display);">Submit Grades</button>
      </div>
      <table class="data-table">
        <thead><tr><th>Student</th><th>Matric No.</th><th>Score (0–100)</th><th>Grade</th></tr></thead>
        <tbody>
          @for (s of students; track s.matric) {
            <tr>
              <td style="font-weight:600;">{{ s.name }}</td>
              <td style="color:var(--text-muted);">{{ s.matric }}</td>
              <td><input type="number" [(ngModel)]="s.score" min="0" max="100" style="width:80px;padding:6px 10px;border:1.5px solid var(--border);border-radius:8px;font-size:.875rem;" /></td>
              <td><span style="font-weight:700;" [style.color]="gradeColor(s.score)">{{ toGrade(s.score) }}</span></td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  `,
})
export class GradingComponent {
  private readonly ns = inject(NotificationService);
  readonly course = signal("CSC301");
  readonly courses = ["CSC301","CSC303","CSC201"];
  readonly students = [
    { name:"Amara Okafor", matric:"GU/2023/CS/0042", score:78 },
    { name:"Emeka Nwosu", matric:"GU/2023/CS/0043", score:91 },
    { name:"Fatima Musa", matric:"GU/2023/CS/0044", score:65 },
    { name:"Tunde Bakare", matric:"GU/2023/CS/0045", score:55 },
    { name:"Ngozi Eze", matric:"GU/2023/CS/0046", score:84 },
  ];
  toGrade(s: number) { if(s>=70) return "A"; if(s>=65) return "B+"; if(s>=60) return "B"; if(s>=55) return "C+"; if(s>=50) return "C"; return "F"; }
  gradeColor(s: number) { if(s>=70) return "var(--success)"; if(s>=60) return "var(--info)"; if(s>=50) return "var(--warning)"; return "var(--error)"; }
  submit() { this.ns.success("Grades submitted for " + this.course()); }
}
