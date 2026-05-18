import { Component } from "@angular/core";
import { PageHeaderComponent } from "@shared/components/page-header/page-header.component";
import { StatCardComponent } from "@shared/components/stat-card/stat-card.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faCircleCheck, faChartBar, faGraduationCap, faTriangleExclamation, faUsers, faMoneyBill, faCalendarDays, faFileLines, faArrowRight } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-reports",
  imports: [PageHeaderComponent, StatCardComponent, FontAwesomeModule],
  template: `
    <app-page-header title="Reports & Analytics" subtitle="Academic performance and institutional metrics" />
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:24px;" class="kpi-grid">
      <app-stat-card label="Pass Rate" value="91.2%" [icon]="faCircleCheck" sub="all courses" />
      <app-stat-card label="Avg GPA" value="3.74" [icon]="faChartBar" sub="all students" />
      <app-stat-card label="Graduation Rate" value="88%" [icon]="faGraduationCap" sub="2023/2024 cohort" />
      <app-stat-card label="Dropout Rate" value="4.1%" [icon]="faTriangleExclamation" sub="year on year" />
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;" class="rep-grid">
      @for (r of reports; track r.title) {
        <div class="card" style="display:flex;align-items:center;gap:16px;cursor:pointer;transition:.2s;" onmouseover="this.style.boxShadow='var(--shadow-md)'" onmouseout="this.style.boxShadow='var(--shadow-sm)'">
          <div style="width:48px;height:48px;border-radius:var(--radius-md);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:1.5rem;" [style.background]="r.bg"><fa-icon [icon]="r.icon"></fa-icon></div>
          <div style="flex:1;">
            <div style="font-weight:700;font-size:.9375rem;font-family:var(--font-display);color:var(--text);">{{ r.title }}</div>
            <div style="font-size:.8125rem;color:var(--text-muted);">{{ r.desc }}</div>
          </div>
          <span style="font-size:1rem;color:var(--text-muted);"><fa-icon [icon]="faArrowRight"></fa-icon></span>
        </div>
      }
    </div>
    <style>.kpi-grid { @media (max-width:768px) { grid-template-columns: 1fr 1fr !important; } } .rep-grid { @media (max-width:768px) { grid-template-columns: 1fr !important; } }</style>
  `,
})

export class ReportsComponent {
  faCircleCheck = faCircleCheck;
  faChartBar = faChartBar;
  faGraduationCap = faGraduationCap;
  faTriangleExclamation = faTriangleExclamation;
  faArrowRight = faArrowRight;

  readonly reports = [
    { icon: faChartBar, title:"Academic Performance Report", desc:"GPA distributions, pass/fail rates by course", bg:"var(--primary-light)" },
    { icon: faUsers, title:"Enrolment Statistics", desc:"Student numbers by school, level, and programme", bg:"var(--jade-light)" },
    { icon: faMoneyBill, title:"Financial Summary", desc:"Fee collection, outstanding balances, scholarships", bg:"var(--gold-light)" },
    { icon: faCalendarDays, title:"Attendance Analytics", desc:"Attendance trends across courses and departments", bg:"var(--coral-light)" },
    { icon: faGraduationCap, title:"Graduation Report", desc:"Graduates by programme, honours classification", bg:"var(--success-light)" },
    { icon: faFileLines, title:"Examination Results", desc:"Score distributions and grade summaries", bg:"var(--info-light)" },
  ];
}
