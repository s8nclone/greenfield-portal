import { Component, signal } from "@angular/core";
@Component({
  selector: "landing-faq",
  styles: [`
    .faq-item { border-bottom: 1px solid var(--border); }
    .faq-q { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 22px 0; font-family: var(--font-display); font-size: 1rem; font-weight: 600; color: var(--text); text-align: left; transition: color .2s; cursor: pointer; background: none; border: none; }
    .faq-q:hover { color: var(--primary); }
    .faq-a { font-size: .9375rem; color: var(--text-secondary); line-height: 1.7; padding-bottom: 22px; }
  `],
  template: `
    <section id="faq" style="background:var(--canvas-secondary);padding:clamp(80px,10vw,120px) clamp(24px,6vw,80px);">
      <div style="max-width:860px;margin:0 auto;">
        <div style="text-align:center;margin-bottom:56px;">
          <span class="pill reveal">FAQ</span>
          <h2 class="display-lg reveal stagger-1" style="margin:20px 0 16px;">Questions & answers</h2>
          <p class="body-lg reveal stagger-2" style="color:var(--text-secondary);max-width:420px;margin:0 auto;">Everything you need to know before applying.</p>
        </div>
        <div>
          @for (q of faqs; track q.q) {
            <div class="faq-item reveal">
              <button class="faq-q" (click)="toggle(q.q)">
                <span>{{ q.q }}</span>
                <span style="font-size:1.25rem;flex-shrink:0;transition:transform .25s;" [style.transform]="open() === q.q ? 'rotate(45deg)' : 'rotate(0)'">+</span>
              </button>
              @if (open() === q.q) {
                <div class="faq-a">{{ q.a }}</div>
              }
            </div>
          }
        </div>
      </div>
    </section>
  `,
})

export class FaqComponent {
  readonly open = signal<string | null>(null);
  toggle(q: string): void { this.open.update(v => v === q ? null : q); }

  readonly faqs = [
    { q:"Are Greenfield degrees NUC accredited?", a:"Yes. All Greenfield University programmes are fully accredited by the National Universities Commission (NUC) and are recognised by employers, professional bodies, and postgraduate institutions." },
    { q:"Can I study while working full-time?", a:"Absolutely. Our programmes are designed for working adults. Lectures are recorded and available 24/7. Live sessions are scheduled in evenings and weekends to accommodate different time zones and work schedules." },
    { q:"What are the admission requirements?", a:"You need a minimum of 5 credits in relevant subjects at O-Level (WAEC, NECO, or equivalent), including English Language and Mathematics. Some programmes have additional subject requirements detailed on the programme pages." },
    { q:"How are exams conducted?", a:"Continuous assessment (CA) is done online through the portal. Final examinations are proctored online using our exam platform with AI-assisted invigilation. No physical attendance is required." },
    { q:"Are there scholarship opportunities?", a:"Yes. Greenfield offers the Academic Excellence Scholarship for students with CGPA 4.5 and above, and needs-based bursaries. Corporate sponsorships from partner employers are also available for qualifying students." },
    { q:"How long does the application process take?", a:"The application form takes about 5 minutes. Once submitted, you receive an admission decision within 48 hours. After acceptance, you can start classes within the same week if fees are paid before the session start date." },
    { q:"What support is available after admission?", a:"Every student gets a dedicated personal success advisor, access to the online library (100k+ resources), mental health counselling, AI tutoring tools, career services, and a global alumni network of over 30,000 graduates." },
    { q:"What is the tuition fee structure?", a:"Tuition starts from ₦270,000 per session (~$170 USD). Fees can be paid in full or in up to 3 installments per session. We accept bank transfers, debit/credit cards, and mobile money payments." },
  ];
}
