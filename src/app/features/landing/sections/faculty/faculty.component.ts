import { Component } from "@angular/core";
@Component({
  selector: "landing-faculty",
  template: `
    <section id="faculty" class="landing-section" style="background:var(--canvas);">
      <div style="max-width:1200px;margin:0 auto;">
        <div style="text-align:center;margin-bottom:56px;">
          <span class="pill reveal">Faculty</span>
          <h2 class="display-lg reveal stagger-1" style="margin:20px 0 16px;">Learn from the best</h2>
          <p class="body-lg reveal stagger-2" style="color:var(--text-secondary);max-width:480px;margin:0 auto;">Our lecturers are practitioners and researchers with decades of real-world experience.</p>
        </div>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:24px;" class="faculty-grid">
          @for (f of faculty; track f.name) {
            <div class="reveal" style="text-align:center;">
              <div style="width:100%;aspect-ratio:1;border-radius:var(--radius-xl);overflow:hidden;margin-bottom:16px;background:var(--canvas-secondary);">
                <img [src]="f.img" [alt]="f.name" style="width:100%;height:100%;object-fit:contain;" loading="lazy" />
              </div>
              <div style="font-family:var(--font-display);font-weight:700;font-size:1rem;color:var(--text);margin-bottom:4px;">{{ f.name }}</div>
              <div style="font-size:.8125rem;color:var(--primary);font-weight:600;margin-bottom:4px;">{{ f.role }}</div>
              <div style="font-size:.8125rem;color:var(--text-muted);">{{ f.dept }}</div>
            </div>
          }
        </div>
      </div>
    </section>
    <style>.faculty-grid { @media (max-width:900px) { grid-template-columns: repeat(2,1fr) !important; } @media (max-width:500px) { grid-template-columns: 1fr 1fr !important; } }</style>
  `,
})

export class FacultyComponent {
  readonly faculty = [
    { name:"Dr. Adaobi Eze", role:"Head of Computing", dept:"School of Computing", img:"https://static.wikia.nocookie.net/animaniacs/images/d/d2/Brain_official_art.png" },
    { name:"Prof. Bello Adeyemi", role:"Professor of Engineering", dept:"School of Engineering", img:"https://upload.wikimedia.org/wikipedia/commons/7/7a/SpongeBob_SquarePants_character.png" },
    { name:"Dr. Ngozi Okafor", role:"Senior Lecturer", dept:"School of Business", img:"https://static.wikia.nocookie.net/spongebob/images/4/49/Squidward_unhappy_stock_art.png" },
    { name:"Dr. Emeka Nwankwo", role:"Associate Professor", dept:"School of Health Sciences", img:"https://static.wikia.nocookie.net/spongebob/images/c/cc/Patrick_stock_art_%28oil_pianted%29.png" },
    { name:"Dr. Fatima Aliyu", role:"Lecturer I", dept:"School of Computing", img:"https://static.wikia.nocookie.net/despicableme/images/1/1c/570_Despicable-Me-2-set-for-2013-3086.jpeg/revision/latest/smart/width/400/height/400" },
    { name:"Prof. Chidi Obi", role:"Dean, Engineering", dept:"School of Engineering", img:"https://static.wikia.nocookie.net/kungfupanda/images/0/00/Po-training.jpg/revision/latest/smart/width/400/height/400" },
    { name:"Dr. Aisha Musa", role:"Senior Lecturer", dept:"School of Business", img:"https://static.wikia.nocookie.net/animaniacs/images/f/f0/Pinky_official_art.png" },
    { name:"Dr. Tunde Olorunyomi", role:"Lecturer II", dept:"School of Health Sciences", img:"https://static.wikia.nocookie.net/animaniacs/images/d/d2/Brain_official_art.png" },
  ];
}
