import { Component, signal } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "landing-testimonials",
  imports: [FontAwesomeModule],
  styles: [`
    .testi-card { background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.07); border-radius: var(--radius-xl); padding: 36px; }
    .testi-card.active { border-color: rgba(26,92,255,.4); background: rgba(26,92,255,.06); }
  `],
  template: `
    <section style="background:var(--ink);padding:clamp(80px,10vw,120px) clamp(24px,6vw,80px);">
      <div style="max-width:1200px;margin:0 auto;">
        <div style="text-align:center;margin-bottom:56px;">
          <span class="pill reveal" style="background:rgba(35,139,65,.15);color:#238b45;border:1px solid rgba(35,139,65,.25);">Testimonials</span>
          <h2 class="display-lg reveal stagger-1" style="color:#fff;margin:20px 0 16px;">Hear from our graduates</h2>
          <p class="body-lg reveal stagger-2" style="color:rgba(255,255,255,.48);max-width:480px;margin:0 auto;">Real stories from students who changed their lives with a Greenfield degree.</p>
        </div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px;" class="testi-grid">
          @for (t of visible(); track t.name) {
            <div [class.active]="$index === 0" class="testi-card reveal">
              <div style="display:flex;gap:4px;margin-bottom:16px;">
                @for (s of stars; track $index) { <span style="color:var(--gold);font-size:1rem;"><fa-icon [icon]="faStar"></fa-icon></span> }
              </div>
              <p style="font-size:.9375rem;color:rgba(255,255,255,.75);line-height:1.7;margin-bottom:24px;font-style:italic;">"{{ t.quote }}"</p>
              <div style="display:flex;align-items:center;gap:12px;">
                <img [src]="t.img" [alt]="t.name" style="width:44px;height:44px;border-radius:50%;object-fit:cover;" loading="lazy" />
                <div>
                  <div style="font-weight:700;font-family:var(--font-display);color:#fff;font-size:.9375rem;">{{ t.name }}</div>
                  <div style="font-size:.8125rem;color:rgba(255,255,255,.45);">{{ t.role }}</div>
                </div>
              </div>
            </div>
          }
        </div>
        <div style="display:flex;justify-content:center;gap:8px;margin-top:32px;">
          @for (p of pages(); track $index) {
            <button (click)="page.set($index)" [style]="'width:' + (page() === $index ? '28px' : '8px') + ';height:8px;border-radius:999px;background:' + (page() === $index ? 'var(--primary)' : 'rgba(255,255,255,.2)') + ';transition:.3s;'"></button>
          }
        </div>
      </div>
    </section>
    <style>.testi-grid { @media (max-width:900px) { grid-template-columns: 1fr 1fr !important; } @media (max-width:600px) { grid-template-columns: 1fr !important; } }</style>
  `,
})

export class TestimonialsComponent {
  faStar = faStar;
  readonly stars = [1,2,3,4,5];
  readonly page = signal(0);
  readonly pages = () => Array.from({ length: Math.ceil(this.testimonials.length / 3) }, (_, i) => i);
  readonly visible = () => this.testimonials.slice(this.page() * 3, this.page() * 3 + 3);

  readonly testimonials = [
    { name:"Chisom Adaeze", role:"Software Engineer @ Google", quote:"Greenfield gave me the technical foundation and the confidence to compete globally. I landed a Google SWE role 8 months after graduating.", img:"https://upload.wikimedia.org/wikipedia/commons/7/7a/SpongeBob_SquarePants_character.png" },
    { name:"Emeka Okonkwo", role:"Product Manager @ Flutterwave", quote:"The flexibility was everything. I studied while working full-time and the quality never suffered. My managers were impressed by what I learned.", img:"https://static.wikia.nocookie.net/spongebob/images/c/cc/Patrick_stock_art_%28oil_pianted%29.png" },
    { name:"Aisha Mohammed", role:"Data Analyst @ MTN", quote:"The Data Science programme is world-class. The projects were real industry problems, and the alumni network opened doors I didn't expect.", img:"https://static.wikia.nocookie.net/spongebob/images/4/49/Squidward_unhappy_stock_art.png" },
    { name:"Tunde Bakare", role:"Civil Engineer @ Julius Berger", quote:"I was skeptical about online engineering, but Greenfield proved me wrong. The simulations, project work, and mentors were excellent.", img:"https://static.wikia.nocookie.net/despicableme/images/1/1c/570_Despicable-Me-2-set-for-2013-3086.jpeg/revision/latest/smart/width/400/height/400" },
    { name:"Ngozi Obi", role:"Financial Analyst @ Access Bank", quote:"The Accounting programme set me up perfectly. My lecturers had real industry experience and challenged us to think like professionals.", img:"https://static.wikia.nocookie.net/kungfupanda/images/0/00/Po-training.jpg/revision/latest/smart/width/400/height/400" },
    { name:"Seun Adeleke", role:"Public Health Officer @ WHO", quote:"Greenfield's Public Health programme gave me the global perspective I needed to work with the WHO. Career placement support was exceptional.", img:"https://static.wikia.nocookie.net/animaniacs/images/f/f0/Pinky_official_art.png" },
  ];
}
