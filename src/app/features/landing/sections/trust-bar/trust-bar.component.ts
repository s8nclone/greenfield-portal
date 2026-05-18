import { Component } from "@angular/core";
@Component({
  selector: "landing-trust-bar",
  template: `
    <section style="background:var(--canvas-secondary);border-top:1px solid var(--border);border-bottom:1px solid var(--border);padding:26px 0;overflow:hidden;">
      <div style="display:flex;align-items:center;gap:40px;padding:0 clamp(24px,6vw,80px);">
        <span style="font-size:.72rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--text-muted);white-space:nowrap;flex-shrink:0;">Graduates at</span>
        <div style="overflow:hidden;flex:1;">
          <div style="display:flex;gap:56px;animation:marquee 28s linear infinite;white-space:nowrap;align-items:center;width:max-content;">
            @for (c of list; track $index) {
              <span style="font-size:.9375rem;font-weight:700;color:var(--text-muted);font-family:var(--font-display);opacity:.45;letter-spacing:-.01em;">{{ c }}</span>
            }
          </div>
        </div>
      </div>
    </section>
  `,
})

export class TrustBarComponent {
  readonly list = ["Google","Microsoft","Flutterwave","Interswitch","MTN","Access Bank","Dangote Group","United Nations","Andela","PwC","McKinsey","Nestlé","Google","Microsoft","Flutterwave","Interswitch","MTN","Access Bank","Dangote Group","United Nations"];
}
