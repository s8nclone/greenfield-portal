import { Component, input } from "@angular/core";

@Component({
  selector: "app-page-header",
  template: `
    <div class="animate-fade-in-up" style="margin-bottom:24px;">
      <h1 style="font-size:1.5rem;font-weight:700;font-family:var(--font-display);color:var(--text);">{{ title() }}</h1>
      @if (subtitle()) {
        <p style="font-size:.875rem;color:var(--text-secondary);margin-top:4px;">{{ subtitle() }}</p>
      }
    </div>
  `,
})

export class PageHeaderComponent {
  readonly title = input.required<string>();
  readonly subtitle = input("");
}
