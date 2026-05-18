import { Component, signal, computed } from "@angular/core";

@Component({
  selector: "landing-programmes",
  imports: [],
  styles: [`
    .prog-card { background: var(--canvas); border: 1.5px solid var(--border); border-radius: var(--radius-xl); padding: 32px; transition: border-color .25s, box-shadow .25s, transform .25s; cursor: default; }
    .prog-card:hover { border-color: var(--primary); box-shadow: 0 12px 40px rgba(26,92,255,.12); transform: translateY(-4px); }
    .filter-btn { padding: 8px 20px; border-radius: 999px; font-size: .875rem; font-weight: 600; border: 1.5px solid var(--border); background: transparent; color: var(--text-secondary); transition: .2s; cursor: pointer; font-family: var(--font-display); }
    .filter-btn.active { background: var(--primary); color: #fff; border-color: var(--primary); }
  `],
  template: `
    <section id="programmes" class="landing-section" style="background:var(--canvas-secondary);">
      <div style="max-width:1200px;margin:0 auto;">
        <div style="text-align:center;margin-bottom:56px;">
          <span class="pill reveal">Programmes</span>
          <h2 class="display-lg reveal stagger-1" style="margin:20px 0 16px;">Find your programme</h2>
          <p class="body-lg reveal stagger-2" style="color:var(--text-secondary);max-width:500px;margin:0 auto 32px;">Choose from 12 accredited degree programmes across four schools. All delivered fully online.</p>
          <div class="reveal stagger-3" style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;">
            @for (f of filters; track f) {
              <button (click)="active.set(f)" [class.active]="active() === f" class="filter-btn">{{ f }}</button>
            }
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px;" class="prog-grid">
          @for (p of filtered(); track p.title) {
            <div class="prog-card animate-fade-in-up">
              <div style="display:inline-flex;align-items:center;padding:5px 12px;border-radius:999px;font-size:.75rem;font-weight:600;margin-bottom:20px;" [style]="'background:' + p.bg + ';color:' + p.color">{{ p.school }}</div>
              <h3 style="font-family:var(--font-display);font-size:1.125rem;font-weight:700;margin-bottom:8px;color:var(--text);">{{ p.title }}</h3>
              <p style="font-size:.875rem;color:var(--text-secondary);line-height:1.6;margin-bottom:20px;">{{ p.desc }}</p>
              <div style="display:flex;justify-content:space-between;align-items:center;padding-top:16px;border-top:1px solid var(--border);">
                <div>
                  <div style="font-size:.75rem;color:var(--text-muted);font-weight:500;">Tuition / session</div>
                  <div style="font-weight:700;font-family:var(--font-display);color:var(--text);">{{ p.fee }}</div>
                </div>
                <div style="font-size:.75rem;color:var(--text-secondary);background:var(--canvas-secondary);padding:4px 10px;border-radius:999px;border:1px solid var(--border);">{{ p.duration }}</div>
              </div>
            </div>
          }
        </div>
        <div class="reveal" style="text-align:center;margin-top:48px;">
          <a href="#process" class="btn-primary-landing">Apply in 5 minutes →</a>
        </div>
      </div>
    </section>
    <style>.prog-grid { @media (max-width:900px) { grid-template-columns: 1fr 1fr !important; } @media (max-width:600px) { grid-template-columns: 1fr !important; } }</style>
  `,
})

export class ProgrammesComponent {
  readonly filters = ["All Schools", "Computing", "Business", "Engineering", "Health Sciences"];
  readonly active = signal("All Schools");

  readonly programmes = [
    { school:"Computing", title:"B.Sc. Computer Science", desc:"Software engineering, AI/ML, data structures, and systems design.", fee:"₦300,000", duration:"4 years", bg:"var(--primary-light)", color:"var(--primary)" },
    { school:"Computing", title:"B.Sc. Cybersecurity", desc:"Network security, ethical hacking, digital forensics, and cryptography.", fee:"₦300,000", duration:"4 years", bg:"var(--primary-light)", color:"var(--primary)" },
    { school:"Computing", title:"B.Sc. Data Science", desc:"Statistics, machine learning, data engineering, and visualisation.", fee:"₦320,000", duration:"4 years", bg:"var(--primary-light)", color:"var(--primary)" },
    { school:"Business", title:"B.Sc. Business Administration", desc:"Leadership, strategy, finance, and management for the modern economy.", fee:"₦280,000", duration:"4 years", bg:"var(--gold-light)", color:"var(--gold)" },
    { school:"Business", title:"B.Sc. Accounting & Finance", desc:"Financial reporting, auditing, taxation, and investment analysis.", fee:"₦280,000", duration:"4 years", bg:"var(--gold-light)", color:"var(--gold)" },
    { school:"Business", title:"B.Sc. Economics", desc:"Macroeconomics, development economics, econometrics, and policy.", fee:"₦270,000", duration:"4 years", bg:"var(--gold-light)", color:"var(--gold)" },
    { school:"Engineering", title:"B.Eng. Electrical Engineering", desc:"Power systems, electronics, control systems, and signal processing.", fee:"₦350,000", duration:"5 years", bg:"var(--jade-light)", color:"var(--jade)" },
    { school:"Engineering", title:"B.Eng. Mechanical Engineering", desc:"Thermodynamics, manufacturing, materials science, and CAD.", fee:"₦350,000", duration:"5 years", bg:"var(--jade-light)", color:"var(--jade)" },
    { school:"Engineering", title:"B.Eng. Civil Engineering", desc:"Structural design, geotechnics, transportation, and water systems.", fee:"₦340,000", duration:"5 years", bg:"var(--jade-light)", color:"var(--jade)" },
    { school:"Health Sciences", title:"B.Sc. Public Health", desc:"Epidemiology, health policy, community health, and disease prevention.", fee:"₦290,000", duration:"4 years", bg:"var(--coral-light)", color:"var(--coral)" },
    { school:"Health Sciences", title:"B.Sc. Nursing Science", desc:"Clinical nursing, anatomy, pharmacology, and patient care.", fee:"₦310,000", duration:"4 years", bg:"var(--coral-light)", color:"var(--coral)" },
    { school:"Health Sciences", title:"B.Sc. Nutrition & Dietetics", desc:"Nutritional science, food systems, dietetic practice, and research.", fee:"₦280,000", duration:"4 years", bg:"var(--coral-light)", color:"var(--coral)" },
  ];

  readonly filtered = computed(() => this.active() === "All Schools" ? this.programmes : this.programmes.filter(p => p.school === this.active()));
}
