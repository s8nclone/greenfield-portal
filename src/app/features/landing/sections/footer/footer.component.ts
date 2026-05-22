import { Component } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faThreads, faInstagram, faXTwitter, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: "landing-footer",
  imports: [FontAwesomeModule],
  template: `
    <footer style="background:var(--ink);padding:clamp(60px,8vw,100px) clamp(24px,6vw,80px) 40px;border-top:1px solid rgba(255,255,255,.07);">
      <div style="max-width:1200px;margin:0 auto;">
        <div style="display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:48px;margin-bottom:64px;" class="footer-grid">
          <div>
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:20px;">
              <img src="assets/images/logo.png" alt="GU Logo" style="width:36px;height:36px;" />
              <span style="font-family:var(--font-display);font-weight:700;color:#fff;">Greenfield University</span>
            </div>
            <p style="font-size:.9rem;color:rgba(255,255,255,.42);line-height:1.7;max-width:280px;margin-bottom:24px;">World-class education built for African learners. Accredited. Accessible. Life-changing.</p>
            <div style="display:flex;gap:12px;">
              @for (s of socials; track s.name) {
                <a [href]="s.url" target="_blank" rel="noopener" style="width:36px;height:36px;border-radius:8px;background:rgba(255,255,255,.07);display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.5);font-size:.8rem;font-weight:700;transition:.2s;text-decoration:none;" onmouseover="this.style.background='var(--primary)';this.style.color='#fff'" onmouseout="this.style.background='rgba(255,255,255,.07)';this.style.color='rgba(255,255,255,.5)'">
                  <fa-icon [icon]="s.icon" />
                </a>
              }
            </div>
          </div>
          @for (col of columns; track col.title) {
            <div>
              <div style="font-size:.75rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.3);margin-bottom:16px;">{{ col.title }}</div>
              @for (link of col.links; track link.label) {
                <div style="margin-bottom:10px;">
                  <a [href]="link.href" style="font-size:.875rem;color:rgba(255,255,255,.5);transition:color .2s;text-decoration:none;" onmouseover="this.style.color='rgba(255,255,255,.9)'" onmouseout="this.style.color='rgba(255,255,255,.5)'">{{ link.label }}</a>
                </div>
              }
            </div>
          }
        </div>
        <div style="padding-top:24px;border-top:1px solid rgba(255,255,255,.07);display:flex;justify-content:space-between;align-items:center;flex-wrap:gap;">
          <p style="font-size:.8125rem;color:rgba(255,255,255,.25);">© 2026 Greenfield University. All Rights Reserved. NUC Accredited.</p>
          <div style="display:flex;gap:20px;">
            @for (l of legal; track l) { <a href="#" style="font-size:.8125rem;color:rgba(255,255,255,.25);transition:.2s;text-decoration:none;" onmouseover="this.style.color='rgba(255,255,255,.6)'" onmouseout="this.style.color='rgba(255,255,255,.25)'">{{ l }}</a> }
          </div>
        </div>
      </div>
    </footer>
    <style>.footer-grid { @media (max-width:900px) { grid-template-columns: 1fr 1fr !important; gap: 32px !important; } @media (max-width:600px) { grid-template-columns: 1fr !important; } }</style>
  `,
})

export class FooterComponent {
  faTwitter = faXTwitter;
  faLinkedIn = faLinkedin;
  faInstagram = faInstagram;
  faYoutube = faYoutube;
  faThreads = faThreads;

  readonly socials = [
    { name:"Twitter/X", icon:faXTwitter, url:"#" },
    { name:"LinkedIn", icon:faLinkedin, url:"#" },
    { name:"Instagram", icon:faInstagram, url:"#" },
    { name:"YouTube", icon:faYoutube, url:"#" },
    { name:"Threads", icon:faThreads, url: "#"}
  ];

  readonly legal = ["Privacy Policy","Terms of Use","Cookie Policy"];
  readonly columns = [
    { 
      title:"Programmes", 
      links:[
        { label:"B.Sc. Computer Science", href:"#programmes" },
        { label:"B.Sc. Data Science", href:"#programmes" },
        { label:"B.Sc. Business Admin", href:"#programmes" },
        { label:"B.Eng. Electrical Eng.", href:"#programmes" },
        { label:"View All", href:"#programmes" }
      ] 
    },
    { 
      title:"University",
      links:[
        { label:"About Us", href:"#about" },
        { label:"Faculty", href:"#faculty" },
        { label:"Admissions", href:"#process" },
        { label:"Student Portal", href:"/login" },
        { label:"Contact", href:"#" }
      ] 
    },
    {
      title:"Support",
      links:[
        { label:"FAQ", href:"#faq" },
        { label:"Student Handbook", href:"#" },
        { label:"IT Support", href:"#" },
        { label:"Library", href:"/login" },
        { label:"Alumni Network", href:"#" }
      ]
    },
  ];
}
