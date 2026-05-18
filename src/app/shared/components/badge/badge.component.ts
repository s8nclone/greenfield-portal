import { Component, input } from "@angular/core";

@Component({
  selector: "app-badge",
  template: `<span class="badge" [class]="'badge-' + variant()"><ng-content /></span>`,
})

export class BadgeComponent {
  readonly variant = input<"success"|"warning"|"error"|"info"|"muted">("muted");
}
