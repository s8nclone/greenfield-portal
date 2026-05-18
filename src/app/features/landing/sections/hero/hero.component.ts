import { Component, afterNextRender, viewChild, ElementRef } from "@angular/core";
import { RouterLink } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "landing-hero",
  imports: [RouterLink, FontAwesomeModule],
  styles: [`
    .hero { position: relative; min-height: 100vh; display: flex; align-items: center; background: var(--ink); overflow: hidden; }
    canvas { position: absolute; inset: 0; width: 100%; height: 100%; }
    .hero-content { position: relative; z-index: 2; padding: clamp(120px,16vw,180px) clamp(24px,6vw,80px) clamp(80px,10vw,120px); max-width: 920px; }
    .eyebrow { display: inline-flex; align-items: center; gap: 8px; padding: 7px 18px; background: rgba(35,139,69,.14); border: 1px solid rgb(35, 139, 69, .3); border-radius: 999px; font-size: .8125rem; font-weight: 600; color: #238b45; letter-spacing: .06em; text-transform: uppercase; margin-bottom: 32px; }
    .headline { font-family: var(--font-display); font-size: clamp(3rem,7.5vw,6.8rem); font-weight: 700; letter-spacing: -.04em; line-height: .95; color: #fff; margin-bottom: 28px; }
    .headline em { font-style: normal; color: var(--primary); }
    .sub { font-size: clamp(1rem,1.8vw,1.2rem); color: rgba(255,255,255,.58); line-height: 1.72; max-width: 560px; margin-bottom: 48px; }
    .ctas { display: flex; gap: 14px; flex-wrap: wrap; }
    .scroll-cue { position: absolute; bottom: 40px; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; gap: 6px; color: rgba(255,255,255,.25); font-size: .7rem; font-weight: 600; letter-spacing: .12em; text-transform: uppercase; z-index: 2; animation: float 3s ease-in-out infinite; }
  `],
  template: `
    <section class="hero">
      <canvas #canvas></canvas>
      <div class="hero-content">
        <div class="eyebrow"><fa-icon [icon]="faGrad" /> Applications Open — 2026/2027</div>
        <h1 class="headline">Be Outstanding<br>with a <em>Greenfield</em><br>Degree.</h1>
        <p class="sub">World-class education built for African learners. Accredited programmes, expert faculty, and a flexible online experience designed around your life.</p>
        <div class="ctas">
          <a href="#programmes" class="btn-primary-landing">Explore Programmes →</a>
          <a routerLink="/login" class="btn-secondary-landing" style="color:rgba(255,255,255,.75);border-color:rgba(255,255,255,.18);" onmouseover="this.style.background='rgba(255,255,255,.07)'" onmouseout="this.style.background='transparent'">Student Portal</a>
        </div>
      </div>
      <div class="scroll-cue">
        <svg width="14" height="22" viewBox="0 0 14 22" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="1" y="1" width="12" height="20" rx="6"/><circle cx="7" cy="7" r="1.5" fill="currentColor" stroke="none"><animate attributeName="cy" values="7;13;7" dur="1.8s" repeatCount="indefinite"/></circle></svg>
        Scroll
      </div>
    </section>
  `,
})

export class HeroComponent {
  readonly canvasRef = viewChild<ElementRef<HTMLCanvasElement>>("canvas");

  faGrad = faGraduationCap;

  constructor() {
    afterNextRender(() => { this.init(); });
  }

  private async init(): Promise<void> {
    try {
      const THREE = await import("three");
      const el = this.canvasRef()?.nativeElement;

      if (!el) return;

      const renderer = new THREE.WebGLRenderer({ canvas: el, antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(el.clientWidth, el.clientHeight);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(70, el.clientWidth / el.clientHeight, 0.01, 100);
      camera.position.z = 4;

      const count = 2200;
      const geo = new THREE.BufferGeometry();
      const pos = new Float32Array(count * 3);

      for (let i = 0; i < count * 3; i++) pos[i] = (Math.random() - 0.5) * 20;

      geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));

      const mat = new THREE.PointsMaterial({ color: 0x238b45, size: 0.045, transparent: true, opacity: 0.55 });
      const pts = new THREE.Points(geo, mat);
      scene.add(pts);

      const wfGeo = new THREE.IcosahedronGeometry(1.2, 1);
      const wf = new THREE.WireframeGeometry(wfGeo);
      const wfMat = new THREE.LineBasicMaterial({ color: 0x238b45, transparent: true, opacity: 0.1 });
      const sphere = new THREE.LineSegments(wf, wfMat);
      sphere.position.set(3.8, -1.2, -2.5); scene.add(sphere);
      
      const sphere2 = new THREE.LineSegments(wf.clone(), new THREE.LineBasicMaterial({ color: 0xc9960c, transparent: true, opacity: 0.07 }));
      sphere2.position.set(-4.2, 1.8, -3.5); scene.add(sphere2);

      let f = 0;

      const tick = () => { requestAnimationFrame(tick); f++; pts.rotation.y = f * 0.0003; sphere.rotation.y = f * 0.004; sphere.rotation.x = f * 0.002; sphere2.rotation.y = -f * 0.003; renderer.render(scene, camera); };
      tick();

      window.addEventListener("resize", () => { const w = el.clientWidth, h = el.clientHeight; camera.aspect = w/h; camera.updateProjectionMatrix(); renderer.setSize(w, h); }, { passive: true });
    } catch (e) { console.warn("Three.js unavailable:", e); }
  }
}
