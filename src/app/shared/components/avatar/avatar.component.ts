import { Component, input, computed } from "@angular/core";

@Component({
  selector: "app-avatar",
  template: `
    <div [style]="containerStyle()" title="{{ name() }}">
      @if (src()) {
        <img [src]="src()" [alt]="name()" style="width:100%;height:100%;object-fit:contain;border-radius:inherit;" />
      } @else {
        <span style="font-weight:700;font-family:var(--font-display);">{{ initials() }}</span>
      }
    </div>
  `,
})

export class AvatarComponent {
  readonly src = input<string | undefined>(undefined);
  readonly name = input("User");
  readonly size = input<"xs" | "sm" | "md" | "lg" | "xl">("md");
  readonly color = input<string>("#1a5cff");

  private readonly sizeMap = { xs:"44px", sm:"44px", md:"44px", lg:"56px", xl:"80px" };
  private readonly fontMap = { xs:".9rem", sm:".9rem", md:".9rem", lg:"1.1rem", xl:"1.5rem" };

  readonly initials = computed(() => {
    const parts = this.name().split(" ");
    return parts.length >= 2 ? parts[0][0] + parts[1][0] : parts[0].substring(0,2).toUpperCase();
  });

  readonly containerStyle = computed(() => {
    const s = this.sizeMap[this.size()];
    const f = this.fontMap[this.size()];
    return `width:${s};height:${s};min-width:${s};min-height:${s};max-width:${s};max-height:${s};border-radius:50%;background:${this.color()};color:#fff;display:flex;align-items:center;justify-content:center;font-size:${f};flex-shrink:0;overflow:hidden;`;
  });
}
