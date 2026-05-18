import { Component } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "landing-about",
  imports: [FontAwesomeModule], 
  template: `
    <section id="about" class="landing-section" style="background:var(--canvas);">
      <div style="max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center;" class="about-grid">
        <div>
          <span class="pill reveal">About Greenfield</span>
          <h2 class="display-lg reveal stagger-1" style="margin-top:20px;margin-bottom:24px;">Education built for<br>the African future</h2>
          <p class="body-lg reveal stagger-2" style="color:var(--text-secondary);margin-bottom:20px;">Greenfield University was founded on a single belief — that geography should never limit intellectual potential. We combine rigorous academic standards with the flexibility of online learning.</p>
          <p class="body-md reveal stagger-3" style="color:var(--text-secondary);margin-bottom:40px;">Our programmes are fully accredited, our faculty are leaders in their fields, and our graduates are building Africa's future — in technology, business, health, and beyond.</p>
          <div class="reveal stagger-4" style="display:flex;gap:12px;flex-wrap:wrap;">
            <a href="#programmes" class="btn-primary-landing">View Programmes</a>
            <a href="#process" class="btn-secondary-landing">How It Works</a>
          </div>
        </div>
        <div class="reveal-scale" style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
          @for (c of cards; track c.label) {
            <div style="background:var(--canvas-secondary);border:1px solid var(--border);border-radius:var(--radius-xl);padding:28px 24px;">
              <div style="font-size:2rem;font-family:var(--font-display);font-weight:700;color:var(--primary);margin-bottom:6px;">{{ c.value }}</div>
              <div style="font-size:.875rem;color:var(--text-secondary);font-weight:500;">{{ c.label }}</div>
            </div>
          }
          <div style="background:var(--primary);border-radius:var(--radius-xl);padding:28px 24px;grid-column:1/-1;">
             <fa-icon [icon]="faMedal" size="2x" style="color: #FFF;" />
            <div style="font-family:var(--font-display);font-weight:700;color:#fff;margin-bottom:4px;">NUC Accredited</div>
            <div style="font-size:.875rem;color:rgba(255,255,255,.75);">Fully recognised degrees accepted by employers across Nigeria and beyond</div>
          </div>
        </div>
      </div>
    </section>

    <style>
      .about-grid { 
        @media (max-width:768px) { 
          grid-template-columns: 1fr !important;
          gap: 40px !important; 
          } 
      }
    </style>
  `,
})

export class AboutComponent {
  readonly cards = [
    { value:"2011",label:"Year founded" },
    { value:"42+",label:"Countries reached" },
    { value:"15k+",label:"Active students" },
    { value:"98%",label:"Employment rate" }
  ];

  faMedal = faMedal;
}
