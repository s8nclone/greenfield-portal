import { Component, signal } from "@angular/core";
import { PageHeaderComponent } from "@shared/components/page-header/page-header.component";
import { MOCK_MESSAGES } from "@core/mock/mock-data";
import { Message } from "@core/models";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-messages",
  imports: [PageHeaderComponent, FontAwesomeModule],
  template: `
    <app-page-header title="Messages" subtitle="Your inbox and sent messages" />
    <div style="display:grid;grid-template-columns:1fr 1.6fr;gap:16px;height:calc(100vh - 200px);min-height:400px;" class="msg-grid">
      <div class="card" style="padding:0;overflow:hidden;display:flex;flex-direction:column;">
        <div style="padding:16px 20px;border-bottom:1px solid var(--border);display:flex;gap:8px;">
          <button (click)="tab.set('inbox')" [style]="'padding:6px 16px;border-radius:999px;font-size:.8125rem;font-weight:600;font-family:var(--font-display);border:1.5px solid;transition:.2s;' + (tab()=='inbox' ? 'background:var(--primary);color:#fff;border-color:var(--primary)' : 'background:transparent;color:var(--text-secondary);border-color:var(--border)')">Inbox ({{ unread }})</button>
          <button (click)="tab.set('sent')" [style]="'padding:6px 16px;border-radius:999px;font-size:.8125rem;font-weight:600;font-family:var(--font-display);border:1.5px solid;transition:.2s;' + (tab()=='sent' ? 'background:var(--primary);color:#fff;border-color:var(--primary)' : 'background:transparent;color:var(--text-secondary);border-color:var(--border)')">Sent</button>
        </div>
        <div style="flex:1;overflow-y:auto;">
          @for (m of msgs(); track m.id) {
            <div (click)="active.set(m)" style="padding:16px 20px;border-bottom:1px solid var(--border-light);cursor:pointer;transition:background .15s;" [style.background]="active()?.id === m.id ? 'var(--primary-light)' : (!m.read ? 'var(--canvas-secondary)' : 'transparent')">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
                <span style="font-weight:700;font-size:.875rem;color:var(--text);">{{ m.senderName }}</span>
                <span style="font-size:.75rem;color:var(--text-muted);">{{ m.date }}</span>
              </div>
              <div style="font-size:.8125rem;font-weight:600;color:var(--text);margin-bottom:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{ m.subject }}</div>
              @if (!m.read) { <span style="width:8px;height:8px;background:var(--primary);border-radius:50%;display:inline-block;"></span> }
            </div>
          }
        </div>
      </div>
      <div class="card">
        @if (active()) {
          <div>
            <h3 style="font-family:var(--font-display);font-weight:700;font-size:1.0625rem;margin-bottom:8px;">{{ active()!.subject }}</h3>
            <div style="font-size:.8125rem;color:var(--text-muted);margin-bottom:20px;">From: {{ active()!.senderName }} · {{ active()!.date }}</div>
            <div style="font-size:.9375rem;color:var(--text);line-height:1.7;white-space:pre-wrap;">{{ active()!.body }}</div>
          </div>
        } @else {
          <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;color:var(--text-muted);text-align:center;">
            <div style="font-size:3rem;margin-bottom:12px;"><fa-icon [icon]="faCommentDots"></fa-icon></div>
            <p>Select a message to read</p>
          </div>
        }
      </div>
    </div>
    <style>.msg-grid { @media (max-width:768px) { grid-template-columns: 1fr !important; height: auto !important; } }</style>
  `,
})
export class MessagesComponent {
  faCommentDots = faCommentDots;
  readonly messages = MOCK_MESSAGES;
  readonly tab = signal<"inbox"|"sent">("inbox");
  readonly active = signal<Message | null>(null);
  get msgs() { return () => this.messages.filter(m => m.type === this.tab()); }
  get unread() { return this.messages.filter(m => m.type === "inbox" && !m.read).length; }
}
