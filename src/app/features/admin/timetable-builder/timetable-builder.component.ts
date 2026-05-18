import { Component } from "@angular/core";
import { PageHeaderComponent } from "@shared/components/page-header/page-header.component";
@Component({
  selector: "app-timetable-builder",
  imports: [PageHeaderComponent],
  template: `
    <app-page-header title="Timetable Builder" subtitle="Manage the academic timetable for all courses" />
    <div style="overflow-x:auto;">
      <table style="width:100%;border-collapse:collapse;font-size:.8125rem;min-width:700px;">
        <thead>
          <tr style="background:var(--canvas-secondary);">
            <th style="padding:12px 16px;text-align:left;border-bottom:1px solid var(--border);font-weight:700;color:var(--text-secondary);font-size:.75rem;text-transform:uppercase;letter-spacing:.06em;">Time</th>
            @for (day of days; track day) {
              <th style="padding:12px 16px;text-align:left;border-bottom:1px solid var(--border);font-weight:700;color:var(--text-secondary);font-size:.75rem;text-transform:uppercase;letter-spacing:.06em;">{{ day }}</th>
            }
          </tr>
        </thead>
        <tbody>
          @for (slot of slots; track slot.time) {
            <tr style="border-bottom:1px solid var(--border-light);">
              <td style="padding:12px 16px;font-weight:600;color:var(--text-muted);white-space:nowrap;">{{ slot.time }}</td>
              @for (day of days; track day) {
                <td style="padding:8px 12px;">
                  @if (getClass(slot.time, day); as cls) {
                    <div style="padding:8px 10px;border-radius:8px;font-size:.8rem;" [style.background]="cls.bg" [style.color]="cls.color">
                      <div style="font-weight:700;">{{ cls.code }}</div>
                      <div style="font-size:.7rem;opacity:.8;">{{ cls.room }}</div>
                    </div>
                  }
                </td>
              }
            </tr>
          }
        </tbody>
      </table>
    </div>
  `,
})

export class TimetableBuilderComponent {
  readonly days = ["Monday","Tuesday","Wednesday","Thursday","Friday"];
  readonly slots = [{ time:"8:00 – 9:30" },{ time:"10:00 – 11:30" },{ time:"12:00 – 1:30" },{ time:"2:00 – 3:30" },{ time:"4:00 – 5:30" }];
  readonly schedule: Record<string, Record<string, { code:string, room:string, bg:string, color:string }>> = {
    "8:00 – 9:30": { Tuesday:{ code:"CSC303", room:"Room 12", bg:"var(--primary-light)", color:"var(--primary)" }, Thursday:{ code:"CSC303", room:"Room 12", bg:"var(--primary-light)", color:"var(--primary)" } },
    "10:00 – 11:30": { Monday:{ code:"CSC301", room:"Hall A", bg:"var(--jade-light)", color:"var(--jade)" }, Wednesday:{ code:"CSC301", room:"Hall A", bg:"var(--jade-light)", color:"var(--jade)" }, Tuesday:{ code:"CSC201", room:"Lab 3", bg:"var(--gold-light)", color:"var(--gold)" }, Thursday:{ code:"CSC201", room:"Lab 3", bg:"var(--gold-light)", color:"var(--gold)" } },
    "2:00 – 3:30": { Wednesday:{ code:"CSC307", room:"Room 8", bg:"var(--coral-light)", color:"var(--coral)" } },
    "8:00 – 10:00": { Friday:{ code:"MTH301", room:"Hall C", bg:"var(--info-light)", color:"var(--info)" } },
  };
  
  getClass(time: string, day: string) { return this.schedule[time]?.[day]; }
}
