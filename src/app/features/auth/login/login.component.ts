import { Component, inject, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "@core/auth/auth.service";
import { NotificationService } from "@core/services/notification.service";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

interface Cred {
  label: string;
  email: string;
  role: string;
  color: string;
}

@Component({
  selector: "app-login",
  imports: [FormsModule, FontAwesomeModule],
  template: `
    <div style="min-height:100vh;display:flex;background:var(--canvas);">
      <!-- Left panel -->
      <div style="flex:1;display:flex;flex-direction:column;justify-content:center;padding:clamp(32px,8vw,80px);max-width:520px;">
        <a href="/" style="display:inline-flex;align-items:center;gap:8px;margin-bottom:48px;text-decoration:none;">
          <div class="logo-container" style="width:34px;height:34px;">
            <img src="assets/images/logo.png" alt="GU Logo" style="width:100%;height:100%;object-fit:contain;" />
          </div>
          <span style="font-weight:700;font-size:1rem;font-family:var(--font-display);color:var(--text);">Greenfield University</span>
        </a>

        <h1 style="font-family:var(--font-display);font-size:2rem;font-weight:700;color:var(--text);margin-bottom:8px;">Welcome back</h1>
        <p style="color:var(--text-secondary);font-size:.9375rem;margin-bottom:32px;">Sign in to access your portal</p>

        <!-- Quick fill -->
        <div style="margin-bottom:28px;">
          <p style="font-size:.75rem;font-weight:600;color:var(--text-muted);text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">Demo credentials</p>
          <div style="display:flex;gap:8px;flex-wrap:wrap;">
            @for (c of creds; track c.role) {
              <button (click)="fillCred(c)" [style]="'padding:6px 14px;border-radius:var(--radius-full);border:1.5px solid ' + c.color + ';color:' + c.color + ';font-size:.8125rem;font-weight:600;background:transparent;transition:.2s;font-family:var(--font-display);'">
                {{ c.label }}
              </button>
            }
          </div>
        </div>

        @if (error()) {
          <div style="padding:12px 16px;background:var(--error-light);border-radius:var(--radius-md);color:var(--error);font-size:.875rem;margin-bottom:16px;border-left:3px solid var(--error);">
            {{ error() }}
          </div>
        }

        <form (ngSubmit)="submit()">
          <div style="margin-bottom:16px;">
            <label class="form-label">Email address</label>
            <input class="form-input" type="email" [(ngModel)]="email" name="email" placeholder="you@greenfield.edu" autocomplete="email" required />
          </div>
          <div style="margin-bottom:24px;">
            <label class="form-label">Password</label>
            <input class="form-input" [type]="showPwd() ? 'text' : 'password'" [(ngModel)]="password" name="password" placeholder="••••••••" autocomplete="current-password" required />
            <button type="button" (click)="showPwd.update(v => !v)" style="font-size:.8125rem;color:var(--text-secondary);margin-top:6px;">
              {{ showPwd() ? 'Hide' : 'Show' }} password
            </button>
          </div>
          <button type="submit" [disabled]="loading()"
            style="width:100%;padding:13px;background:var(--primary);color:#fff;border-radius:var(--radius-md);font-weight:700;font-family:var(--font-display);font-size:.9375rem;transition:.2s;opacity:1;"
            [style.opacity]="loading() ? '0.7' : '1'">
            {{ loading() ? 'Signing in…' : 'Sign In' }}
          </button>
        </form>

        <p style="font-size:.8125rem;color:var(--text-muted);margin-top:24px;">
          Not a student yet? <a href="/#programmes" style="color:var(--primary);font-weight:600;">Apply now</a>
        </p>
      </div>

      <!-- Right panel — decorative -->
      <div style="flex:1;background:var(--ink);display:none;flex-direction:column;justify-content:flex-end;padding:60px;position:relative;overflow:hidden;" class="login-right">
        <div style="position:absolute;top:60px;right:60px;width:300px;height:300px;border-radius:50%;background:var(--primary);opacity:.08;"></div>
        <div style="position:absolute;top:200px;right:100px;width:180px;height:180px;border-radius:50%;background:var(--gold);opacity:.06;"></div>
        <div style="position:relative;z-index:1;">
           <fa-icon [icon]="faGraduationCap" size="2x" style="color: #FFF;" />
          <h2 style="font-family:var(--font-display);font-size:2rem;font-weight:700;color:#fff;line-height:1.2;margin-bottom:16px;">Your academic journey continues here</h2>
          <p style="color:rgba(255,255,255,.6);font-size:1rem;line-height:1.7;">Access your courses, grades, attendance records, and more — all in one place.</p>
        </div>
      </div>
    </div>
    <style>.login-right { display: none !important; } @media (min-width: 900px) { .login-right { display: flex !important; } }</style>
  `,
})

export class LoginComponent {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  private readonly ns = inject(NotificationService);

  email = "";
  password = "";
  readonly loading = signal(false);
  readonly error = signal("");
  readonly showPwd = signal(false);

  readonly creds: Cred[] = [
    { label: "Student", email: "student@school.edu", role: "STUDENT", color: "var(--primary)" },
    { label: "Staff", email: "staff@school.edu", role: "STAFF", color: "var(--jade)" },
    { label: "Admin", email: "admin@school.edu", role: "ADMIN", color: "var(--admin-accent)" },
  ];

  fillCred(c: Cred): void {
    this.email = c.email;
    this.password = "password123";
    this.error.set("");
   }

  async submit(): Promise<void> {
    if (!this.email || !this.password) {
      this.error.set("Please enter your email and password.");
      return;
    };
    
    this.loading.set(true); 
    this.error.set("");
    const ok = await this.auth.login(this.email, this.password);
    this.loading.set(false);

    if (ok) {
      const user = JSON.parse(localStorage.getItem("gf_user") ?? "{}");
      this.ns.success("Welcome back, " + user.firstName + "!");
      const map: Record<string, string> = { 
        STUDENT: "/student/dashboard",
        STAFF: "/staff/dashboard",
        ADMIN: "/admin/dashboard"
      };
      this.router.navigate([map[user.role] ?? "/"]);
    } else {
      this.error.set("Invalid email or password. Try the demo credentials above.");
    }
  }

  faGraduationCap = faGraduationCap;
}
