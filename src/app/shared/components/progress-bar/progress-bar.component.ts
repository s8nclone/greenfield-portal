import { Component, input, computed } from "@angular/core";

@Component({
  selector: "app-progress-bar",
  template: `
    <div style="background:var(--border);border-radius:var(--radius-full);overflow:hidden;" [style.height]="height() + 'px'">
      <div [style.width]="pct() + '%'" [style.background]="color()" style="height:100%;border-radius:inherit;transition:width .6s cubic-bezier(.16,1,.3,1);"></div>
    </div>
  `,
})

export class ProgressBarComponent {
  readonly value = input(0);
  readonly max = input(100);
  readonly color = input("var(--primary)");
  readonly height = input(6);
  readonly pct = computed(() => Math.min(100, (this.value() / this.max()) * 100));
}
