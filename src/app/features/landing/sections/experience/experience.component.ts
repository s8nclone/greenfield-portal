import { Component } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faDesktop, faMobileScreen, faHandshake, faComments, faTrophy, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: "landing-experience",
  imports: [FontAwesomeModule],
  template: `
    <section id="experience" style="background:var(--ink);padding:clamp(80px,10vw,120px) clamp(24px,6vw,80px);">
      <div style="max-width:1200px;margin:0 auto;">
        <div style="margin-bottom:72px;">
          <span class="pill reveal" style="background:rgba(35,139,65,.15);color:#238b45;border:1px solid rgba(35,139,65,.25);">Student Experience</span>
          <h2 class="display-lg reveal stagger-1" style="color:#fff;margin:20px 0 0;max-width:600px;">Everything you need,<br>in one place</h2>
        </div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:rgba(255,255,255,.05);border-radius:var(--radius-xl);overflow:hidden;" class="exp-grid">
          @for (f of features; track f.title) {
            <div class="reveal" style="background:rgba(10,10,15,.9);padding:40px 32px;transition:background .25s;" onmouseover="this.style.background='rgba(26,92,255,.08)'" onmouseout="this.style.background='rgba(10,10,15,.9)'">
              <!-- <div style="font-size:2rem;margin-bottom:20px;">{{ f.icon }}</div> -->
              <fa-icon [icon]="f.icon" size="2x" style="color: #FFF"; />
              <h3 style="font-family:var(--font-display);font-weight:700;color:#fff;font-size:1.125rem;margin-bottom:10px;">{{ f.title }}</h3>
              <p style="font-size:.875rem;color:rgba(255,255,255,.48);line-height:1.65;">{{ f.desc }}</p>
            </div>
          }
        </div>
      </div>
    </section>
    <style>.exp-grid { @media (max-width:768px) { grid-template-columns: 1fr !important; } }</style>
  `,
})

export class ExperienceComponent {
  faDesktop = faDesktop;
  faMobileScreen = faMobileScreen;
  faHandshake = faHandshake;
  faComments = faComments;
  faTrophy = faTrophy;
  faGraduationCap = faGraduationCap;

  readonly features = [
    { icon: faDesktop,        title: 'Live & recorded lectures',    desc: 'Join live sessions or watch HD recordings at your own pace. All content stays available for the entire semester.' },
    { icon: faMobileScreen,   title: 'Mobile-first portal',         desc: 'Access your dashboard, assignments, and grades from any device. Built for the realities of African internet access.' },
    { icon: faHandshake,      title: 'Personal success advisor',    desc: 'Every student is assigned a dedicated advisor who monitors progress and provides academic and career guidance.' },
    { icon: faComments,       title: 'Peer learning communities',   desc: 'Join course discussion boards, study groups, and virtual office hours with your fellow students and lecturers.' },
    { icon: faTrophy,         title: 'Industry certifications',     desc: 'Earn stackable micro-credentials and industry certifications alongside your degree at no extra cost.' },
    { icon: faGraduationCap,  title: 'Career placement support',    desc: 'From CV writing workshops to job fairs and direct employer connections — we get you placed after graduation.' },
  ];
}
