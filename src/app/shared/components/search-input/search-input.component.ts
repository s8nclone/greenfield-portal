import { Component, input, output, model } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-search-input",
  imports: [FormsModule],
  template: `
    <div style="position:relative;">
      <svg style="position:absolute;left:12px;top:50%;transform:translateY(-50%);color:var(--text-muted);" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
      <input type="text" [placeholder]="placeholder()" [(ngModel)]="value"
        (ngModelChange)="valueChange.emit($event)"
        style="width:100%;padding:10px 14px 10px 40px;border:1.5px solid var(--border);border-radius:var(--radius-md);font-size:.875rem;color:var(--text);background:var(--canvas);outline:none;transition:border-color .2s;"
        (focus)="$event.target.style.borderColor='var(--primary)'"
        (blur)="$event.target.style.borderColor='var(--border)'"
      />
    </div>
  `,
})

export class SearchInputComponent {
  readonly placeholder = input("Search...");
  value = "";
  readonly valueChange = output<string>();
}
