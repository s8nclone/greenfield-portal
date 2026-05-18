import { Component } from "@angular/core";
@Component({
  selector: "landing-process",
  template: `
    <section id="process" class="landing-section" style="background:var(--canvas);">
      <div style="max-width:900px;margin:0 auto;">
        <div style="text-align:center;margin-bottom:64px;">
          <span class="pill reveal">How It Works</span>
          <h2 class="display-lg reveal stagger-1" style="margin:20px 0 16px;">From application to<br>graduation in 4 steps</h2>
          <p class="body-lg reveal stagger-2" style="color:var(--text-secondary);max-width:440px;margin:0 auto;">Starting is the hardest part. We've made it as simple as possible.</p>
        </div>
        <div style="display:flex;flex-direction:column;gap:0;">
          @for (s of steps; track s.num) {
            <div class="reveal" style="display:grid;grid-template-columns:64px 1fr;gap:32px;align-items:flex-start;padding-bottom:40px;position:relative;">
              <div style="display:flex;flex-direction:column;align-items:center;gap:0;">
                <div style="width:56px;height:56px;border-radius:50%;background:var(--primary);display:flex;align-items:center;justify-content:center;font-family:var(--font-display);font-weight:700;color:#fff;font-size:1.125rem;flex-shrink:0;">{{ s.num }}</div>
                @if (!$last) {
                  <div style="width:2px;flex:1;background:var(--border);min-height:40px;margin-top:4px;"></div>
                }
              </div>
              <div style="padding-top:12px;">
                <div style="font-family:var(--font-display);font-weight:700;font-size:1.25rem;color:var(--text);margin-bottom:8px;">{{ s.title }}</div>
                <p style="font-size:.9375rem;color:var(--text-secondary);line-height:1.65;max-width:560px;">{{ s.desc }}</p>
              </div>
            </div>
          }
        </div>
        <div class="reveal" style="text-align:center;margin-top:16px;">
          <a href="#programmes" class="btn-primary-landing">Start Your Application →</a>
        </div>
      </div>
    </section>
  `,
})

export class ProcessComponent {
  readonly steps = [
    { num:"01", title:"Choose your programme", desc:"Browse our 12 accredited programmes and select the one that aligns with your goals. Use the filter to narrow by school or duration." },
    { num:"02", title:"Submit your application", desc:"Fill out the online application form in under 5 minutes. Upload your WAEC, NECO, or equivalent O-Level results. No application fee." },
    { num:"03", title:"Receive your admission letter", desc:"Our admissions team reviews your application and sends a decision within 48 hours. Accepted students receive an official admission letter via email." },
    { num:"04", title:"Pay fees & start learning", desc:"Pay your tuition via bank transfer, card, or flexible installments. Get instant access to the student portal, your courses, and your community." },
  ];
}
