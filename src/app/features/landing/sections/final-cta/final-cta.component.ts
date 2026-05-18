import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
@Component({
  selector: "landing-final-cta",
  imports: [RouterLink],
  template: `
    <section style="background:var(--primary);padding:clamp(100px,12vw,160px) clamp(24px,6vw,80px);text-align:center;position:relative;overflow:hidden;">
      <div style="position:absolute;top:-60px;right:-60px;width:300px;height:300px;background:rgba(255,255,255,.06);border-radius:50%;"></div>
      <div style="position:absolute;bottom:-80px;left:-40px;width:400px;height:400px;background:rgba(0,0,0,.08);border-radius:50%;"></div>
      <div style="position:relative;z-index:1;">
        <div class="pill reveal" style="background:rgba(255,255,255,.15);color:#fff;border:1px solid rgba(255,255,255,.25);margin:0 auto 28px;">Applications closing soon</div>
        <h2 class="display-lg reveal stagger-1" style="color:#fff;margin-bottom:20px;max-width:700px;margin-left:auto;margin-right:auto;">Your future starts with<br>a single application</h2>
        <p class="body-lg reveal stagger-2" style="color:rgba(255,255,255,.78);max-width:500px;margin:0 auto 48px;">Join 15,000+ students already building their careers with a Greenfield degree. Application takes 5 minutes.</p>
        <div class="reveal stagger-3" style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap;">
          <a href="#programmes" style="display:inline-flex;align-items:center;gap:8px;padding:14px 36px;background:#fff;color:var(--primary);font-family:var(--font-display);font-weight:700;font-size:.9375rem;border-radius:999px;transition:.2s;" onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 8px 24px rgba(0,0,0,.2)'" onmouseout="this.style.transform='none';this.style.boxShadow='none'">Apply Now →</a>
          <a routerLink="/login" style="display:inline-flex;align-items:center;gap:8px;padding:13px 32px;background:transparent;color:#fff;font-family:var(--font-display);font-weight:600;font-size:.9375rem;border-radius:999px;border:1.5px solid rgba(255,255,255,.35);transition:.2s;" onmouseover="this.style.borderColor='rgba(255,255,255,.8)'" onmouseout="this.style.borderColor='rgba(255,255,255,.35)'">Student Portal</a>
        </div>
      </div>
    </section>
  `,
})

export class FinalCtaComponent {}
