import { Component, input } from "@angular/core";

@Component({
  selector: "app-skeleton-loader",
  styles: [`
    .skeleton { background: linear-gradient(90deg, var(--border) 25%, var(--border-light) 50%, var(--border) 75%); background-size: 200% 100%; animation: shimmer 1.4s infinite; border-radius: 6px; }
    @keyframes shimmer { from { background-position: 200% 0; } to { background-position: -200% 0; } }
  `],
  template: `
    @for (i of arr(); track i) {
      <div class="skeleton" [style.height]="height() + 'px'" [style.width]="width()" style="margin-bottom:12px;"></div>
    }
  `,
})

export class SkeletonLoaderComponent {
  readonly lines = input(3);
  readonly height = input(20);
  readonly width = input("100%");
  readonly arr = () => Array.from({ length: this.lines() }, (_, i) => i);
}
