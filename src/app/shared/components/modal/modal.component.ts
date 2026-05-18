import { Component, input, output } from "@angular/core";

@Component({
  selector: "app-modal",
  template: `
    @if (open()) {
      <div style="position:fixed;inset:0;z-index:1000;display:flex;align-items:center;justify-content:center;padding:24px;">
        <div (click)="closed.emit()" style="position:absolute;inset:0;background:rgba(0,0,0,.5);backdrop-filter:blur(4px);"></div>
        <div style="position:relative;background:var(--surface);border-radius:var(--radius-xl);padding:32px;width:100%;max-width:560px;box-shadow:var(--shadow-xl);animation:fade-in-up .25s ease both;max-height:90vh;overflow-y:auto;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:24px;">
            <h3 style="font-size:1.125rem;font-weight:700;font-family:var(--font-display);">{{ title() }}</h3>
            <button (click)="closed.emit()" style="color:var(--text-muted);font-size:1.5rem;line-height:1;">&times;</button>
          </div>
          <ng-content />
        </div>
      </div>
    }
  `,
})

export class ModalComponent {
  readonly open = input(false);
  readonly title = input("Modal");
  readonly closed = output();
}
