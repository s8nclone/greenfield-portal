import { Component } from "@angular/core";
@Component({
  selector: "landing-stats",
  template: `
    <section style="background:var(--ink);padding:clamp(80px,10vw,120px) clamp(24px,6vw,80px);">
      <div style="max-width:1200px;margin:0 auto;text-align:center;">
        <span class="pill reveal" style="background:rgba(35       ,139,65,.15);color:#238b45;border:1px solid rgba(35,139,65,.25);">By the numbers</span>
        <h2 class="display-lg reveal stagger-1" style="color:#fff;margin:20px 0 16px;">The numbers speak<br>for themselves</h2>
        <p class="body-lg reveal stagger-2" style="color:rgba(255,255,255,.48);margin-bottom:72px;max-width:480px;margin-left:auto;margin-right:auto;">A decade of excellence, measured in student success and graduate impact.</p>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:rgba(255,255,255,.05);border-radius:var(--radius-xl);overflow:hidden;" class="stats-grid">
          @for (s of stats; track s.label) {
            <div class="reveal" style="background:rgba(10,10,15,.85);padding:48px 24px;">
              <div style="font-size:clamp(2.5rem,5vw,4rem);font-family:var(--font-display);font-weight:700;color:#fff;letter-spacing:-.03em;line-height:1;margin-bottom:12px;">{{ s.value }}</div>
              <div style="font-size:.875rem;color:rgba(255,255,255,.45);font-weight:500;">{{ s.label }}</div>
            </div>
          }
        </div>
      </div>
    </section>
    <style>.stats-grid { @media (max-width:768px) { grid-template-columns: 1fr 1fr !important; } }</style>
  `,
})

export class StatsComponent {
  readonly stats = [
    { value:"15,000+",label:"Students enrolled" },
    { value:"850+",label:"Courses available" },
    { value:"98%",label:"Graduate employment" },
    { value:"42",label:"Countries represented" }
  ];
}
