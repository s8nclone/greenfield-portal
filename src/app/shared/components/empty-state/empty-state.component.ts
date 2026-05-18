import { Component, input } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-empty-state",
  imports: [FontAwesomeModule],
  template: `
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:64px 24px;text-align:center;">
      <div style="font-size:3rem;margin-bottom:16px;color:var(--text-muted);"><fa-icon [icon]="icon()"></fa-icon></div>
      <h3 style="font-family:var(--font-display);font-size:1.125rem;font-weight:700;color:var(--text);margin-bottom:8px;">{{ title() }}</h3>
      <p style="font-size:.875rem;color:var(--text-secondary);max-width:320px;">{{ description() }}</p>
    </div>
  `,
})

export class EmptyStateComponent {
  readonly icon = input<any>(faBoxOpen);
  readonly title = input("Nothing here yet");
  readonly description = input("Content will appear here.");
}
