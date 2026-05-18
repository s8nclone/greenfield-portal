import { Component, input, OnInit, ElementRef, inject, AfterViewInit } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@Component({
  selector: "app-stat-card",
  imports: [FontAwesomeModule],
  template: `
    <div class="stat-card">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px;">
        <span style="font-size:.8125rem;font-weight:600;color:var(--text-secondary);font-family:var(--font-display);text-transform:uppercase;letter-spacing:.06em;">{{ label() }}</span>
        @if (icon()) {
          <span style="font-size:1.25rem;"><fa-icon [icon]="icon()"></fa-icon></span>
        }
      </div>
      <div style="font-family:var(--font-display);font-size:2rem;font-weight:700;color:var(--text);letter-spacing:-0.02em;">{{ value() }}</div>
      @if (sub()) {
        <div style="font-size:.8125rem;color:var(--text-secondary);margin-top:6px;">{{ sub() }}</div>
      }
    </div>
  `,
})

export class StatCardComponent {
  readonly label = input.required<string>();
  readonly value = input.required<string | number>();
  readonly icon = input<any>("");
  readonly sub = input<string>("");
}
