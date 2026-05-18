import { Component } from "@angular/core";
import { PageHeaderComponent } from "@shared/components/page-header/page-header.component";
import { MOCK_CALENDAR_EVENTS } from "@core/mock/mock-data";

@Component({
  selector: "app-student-calendar",
  imports: [PageHeaderComponent],
  template: `
    <app-page-header title="Academic Calendar" subtitle="Key dates, exams, and events for 2024/2025" />
    <div style="display:flex;flex-direction:column;gap:12px;">
      @for (ev of events; track ev.id) {
        <div class="card" style="display:flex;align-items:center;gap:20px;">
          <div style="width:52px;height:52px;border-radius:var(--radius-md);flex-shrink:0;display:flex;flex-direction:column;align-items:center;justify-content:center;" [style.background]="typeBg(ev.type)">
            <div style="font-size:.65rem;font-weight:700;text-transform:uppercase;" [style.color]="typeColor(ev.type)">{{ getMonth(ev.date) }}</div>
            <div style="font-size:1.25rem;font-weight:700;font-family:var(--font-display);" [style.color]="typeColor(ev.type)">{{ getDay(ev.date) }}</div>
          </div>
          <div style="flex:1;">
            <div style="font-weight:700;font-size:.9375rem;font-family:var(--font-display);color:var(--text);">{{ ev.title }}</div>
            @if (ev.description) { <div style="font-size:.8125rem;color:var(--text-muted);margin-top:2px;">{{ ev.description }}</div> }
          </div>
          <span class="badge" [class]="typeBadge(ev.type)">{{ ev.type }}</span>
        </div>
      }
    </div>
  `,
})
export class StudentCalendarComponent {
  readonly events = MOCK_CALENDAR_EVENTS;
  getMonth(d: string) { return new Date(d).toLocaleDateString("en", { month: "short" }); }
  getDay(d: string) { return new Date(d).getDate(); }
  typeBg(t: string) { const m: Record<string,string> = { exam:"var(--error-light)", class:"var(--info-light)", holiday:"var(--success-light)", event:"var(--primary-light)", deadline:"var(--warning-light)" }; return m[t] ?? "var(--surface-raised)"; }
  typeColor(t: string) { const m: Record<string,string> = { exam:"var(--error)", class:"var(--info)", holiday:"var(--success)", event:"var(--primary)", deadline:"var(--warning)" }; return m[t] ?? "var(--text-muted)"; }
  typeBadge(t: string) { const m: Record<string,string> = { exam:"badge-error", class:"badge-info", holiday:"badge-success", event:"badge-muted", deadline:"badge-warning" }; return m[t] ?? "badge-muted"; }
}
