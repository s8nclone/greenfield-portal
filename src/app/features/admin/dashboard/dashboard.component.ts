import { Component } from "@angular/core";
import { StatCardComponent } from "@shared/components/stat-card/stat-card.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faUsers, faPersonChalkboard, faBook, faSackDollar, faUser, faFileLines, faBullhorn, faCreditCard, faPlus, faChartBar, faCalendarDays, faGear, faBuildingColumns } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-admin-dashboard",
  imports: [StatCardComponent, FontAwesomeModule],
  template: `
    <div class="animate-fade-in">
      <div style="margin-bottom:24px;"><h1 style="font-size:1.5rem;font-weight:700;font-family:var(--font-display);">Admin Dashboard <fa-icon [icon]="faBuildingColumns"></fa-icon></h1><p style="font-size:.875rem;color:var(--text-secondary);margin-top:4px;">System overview — 2026/2027 Academic Session</p></div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:24px;" class="kpi-grid">
        <app-stat-card label="Total Students" value="15,284" [icon]="faUsers" sub="active this session" />
        <app-stat-card label="Total Staff" value="342" [icon]="faPersonChalkboard" sub="academic & admin" />
        <app-stat-card label="Active Courses" value="286" [icon]="faBook" sub="across all schools" />
        <app-stat-card label="Revenue (₦)" value="2.1B" [icon]="faSackDollar" sub="2026/2027 session" />
      </div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:24px;" class="stat-grid">
        @for (s of schools; track s.name) {
          <div class="card">
            <div style="font-size:.75rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--text-muted);margin-bottom:12px;">{{ s.name }}</div>
            <div style="font-size:2rem;font-weight:700;font-family:var(--font-display);color:var(--text);">{{ s.students }}</div>
            <div style="font-size:.8125rem;color:var(--text-muted);">students</div>
            <div style="margin-top:12px;height:4px;background:var(--border);border-radius:999px;overflow:hidden;"><div [style.width]="s.pct" [style.background]="s.color" style="height:100%;border-radius:inherit;"></div></div>
          </div>
        }
        <div class="card">
          <div style="font-size:.75rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--text-muted);margin-bottom:12px;">New Applications</div>
          <div style="font-size:2rem;font-weight:700;font-family:var(--font-display);color:var(--primary);">1,284</div>
          <div style="font-size:.8125rem;color:var(--text-muted);">this month</div>
          <div style="margin-top:8px;"><span class="badge badge-success">↑ 12% vs last month</span></div>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:1.5fr 1fr;gap:16px;" class="dash-grid">
        <div class="card" style="padding:0;overflow:hidden;">
          <div style="padding:16px 24px;border-bottom:1px solid var(--border);"><h2 style="font-size:1rem;font-weight:700;font-family:var(--font-display);">Recent Activity</h2></div>
          @for (a of activity; track a.text) {
            <div style="padding:14px 24px;border-bottom:1px solid var(--border-light);display:flex;align-items:center;gap:12px;">
              <span style="font-size:1.25rem;"><fa-icon [icon]="a.icon"></fa-icon></span>
              <div><div style="font-size:.875rem;font-weight:500;color:var(--text);">{{ a.text }}</div><div style="font-size:.75rem;color:var(--text-muted);">{{ a.time }}</div></div>
            </div>
          }
        </div>
        <div class="card" style="padding:0;overflow:hidden;">
          <div style="padding:16px 24px;border-bottom:1px solid var(--border);"><h2 style="font-size:1rem;font-weight:700;font-family:var(--font-display);">Quick Actions</h2></div>
          @for (q of quickActions; track q.label) {
            <div style="padding:14px 24px;border-bottom:1px solid var(--border-light);display:flex;align-items:center;gap:12px;cursor:pointer;transition:.15s;" onmouseover="this.style.background='var(--canvas-secondary)'" onmouseout="this.style.background='transparent'">
              <span style="font-size:1.25rem;"><fa-icon [icon]="q.icon"></fa-icon></span>
              <div style="font-size:.875rem;font-weight:600;color:var(--text);">{{ q.label }}</div>
            </div>
          }
        </div>
      </div>
    </div>
    <style>.kpi-grid,.stat-grid { @media (max-width:768px) { grid-template-columns: 1fr 1fr !important; } } .dash-grid { @media (max-width:900px) { grid-template-columns: 1fr !important; } }</style>
  `,
})

export class AdminDashboardComponent {
  faBuildingColumns = faBuildingColumns;
  faUsers = faUsers;
  faPersonChalkboard = faPersonChalkboard;
  faBook = faBook;
  faSackDollar = faSackDollar;

  readonly schools = [
    { name:"School of Computing", students:"4,842", pct:"68%", color:"var(--primary)" },
    { name:"School of Business", students:"5,120", pct:"74%", color:"var(--gold)" },
    { name:"School of Engineering", students:"3,218", pct:"52%", color:"var(--jade)" },
  ];
  readonly activity = [
    { icon: faUser, text:"New student registered: Emeka Obi", time:"2 minutes ago" },
    { icon: faFileLines, text:"Exam results uploaded: CSC301 Final", time:"14 minutes ago" },
    { icon: faBullhorn, text:"Announcement posted by Registry", time:"1 hour ago" },
    { icon: faCreditCard, text:"Fee payment received: ₦300,000", time:"2 hours ago" },
    { icon: faPersonChalkboard, text:"New staff profile created: Dr. Amaka", time:"3 hours ago" },
  ];
  readonly quickActions = [
    { icon: faPlus, label:"Add New Student" },
    { icon: faBullhorn, label:"Post Announcement" },
    { icon: faChartBar, label:"Generate Reports" },
    { icon: faCalendarDays, label:"Update Timetable" },
    { icon: faGear, label:"System Settings" },
  ];
}
