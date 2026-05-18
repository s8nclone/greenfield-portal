import { Component, signal } from "@angular/core";
import { PageHeaderComponent } from "@shared/components/page-header/page-header.component";
import { MOCK_MESSAGES } from "@core/mock/mock-data";
import { Message } from "@core/models";
@Component({
  selector: "app-staff-messages",
  imports: [PageHeaderComponent],
  template: `
    <app-page-header title="Messages" subtitle="Staff inbox and communication" />
    <div style="display:flex;flex-direction:column;gap:2px;">
      @for (m of messages; track m.id) {
        <div (click)="active.set(m)" style="padding:16px 20px;border-radius:var(--radius-md);cursor:pointer;background:var(--surface);border:1px solid var(--border);margin-bottom:8px;" [style.borderColor]="active()?.id === m.id ? 'var(--jade)' : 'var(--border)'">
          <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
            <span style="font-weight:700;font-size:.875rem;">{{ m.senderName }}</span>
            <span style="font-size:.75rem;color:var(--text-muted);">{{ m.date }}</span>
          </div>
          <div style="font-size:.8125rem;font-weight:600;color:var(--text);">{{ m.subject }}</div>
          @if (active()?.id === m.id) {
            <div style="margin-top:12px;font-size:.875rem;color:var(--text-secondary);line-height:1.7;padding-top:12px;border-top:1px solid var(--border);">{{ m.body }}</div>
          }
        </div>
      }
    </div>
  `,
})
export class StaffMessagesComponent {
  readonly messages = MOCK_MESSAGES;
  readonly active = signal<Message | null>(null);
}
