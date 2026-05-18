import { Component, inject, computed } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { AuthStore } from "@core/auth/auth.store";
import { AuthService } from "@core/auth/auth.service";
import { AvatarComponent } from "@shared/components/avatar/avatar.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faHome, faBook, faPen, faClipboard, faFileSignature, faTrophy, faBookOpen, faCommentDots, faCalendarDays, faUser, faUsers, faFlask, faBullseye, faCalendarAlt, faChartBar, faBullhorn, faGear } from "@fortawesome/free-solid-svg-icons";

interface NavItem { label: string; path: string; icon: any; }

@Component({
  selector: "app-sidebar",
  imports: [RouterLink, RouterLinkActive, AvatarComponent, FontAwesomeModule],
  styles: [`
    .nav-link {
      display: flex; align-items: center; gap: 12px; padding: 10px 16px; border-radius: var(--radius-md);
      font-size: .875rem; font-weight: 500; color: var(--text-secondary); transition: .2s; text-decoration: none; cursor: pointer;
    }
    .nav-link:hover, .nav-link.active-link {
      background: var(--primary-light); color: var(--primary); font-weight: 600;
    }
    .nav-section { font-size: .7rem; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: var(--text-muted); padding: 16px 16px 6px; }
  `],
  template: `
    <aside class="portal-sidebar">
      <div style="padding:20px 16px;border-bottom:1px solid var(--border);display:flex;align-items:center;gap:10px;">
        <div style="width:34px;height:34px;background:var(--primary);border-radius:8px;display:flex;align-items:center;justify-content:center;">
          <span style="color:#fff;font-weight:700;font-size:.875rem;font-family:var(--font-display);">GU</span>
        </div>
        <div>
          <div style="font-weight:700;font-size:.9375rem;font-family:var(--font-display);color:var(--text);">Greenfield</div>
          <div style="font-size:.7rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:.06em;">{{ roleLabel() }}</div>
        </div>
      </div>

      <nav style="flex:1;padding:12px 8px;overflow-y:auto;">
        @for (item of navItems(); track item.path) {
          <a [routerLink]="item.path" routerLinkActive="active-link" class="nav-link">
            <span style="font-size:1rem;width:20px;text-align:center;"><fa-icon [icon]="item.icon"></fa-icon></span>
            <span>{{ item.label }}</span>
          </a>
        }
      </nav>

      <div style="padding:16px;border-top:1px solid var(--border);">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
          <app-avatar [src]="store.user()?.avatarUrl" [name]="store.user()?.firstName + ' ' + store.user()?.lastName" size="xs" />
          <div style="flex:1;min-width:0;">
            <div style="font-size:.8125rem;font-weight:600;color:var(--text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{ store.user()?.firstName }} {{ store.user()?.lastName }}</div>
            <div style="font-size:.7rem;color:var(--text-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{ store.user()?.email }}</div>
          </div>
        </div>
        <button (click)="auth.logout()" style="width:100%;padding:8px;border-radius:var(--radius-md);background:var(--surface-raised);color:var(--text-secondary);font-size:.8125rem;font-weight:600;font-family:var(--font-display);transition:.2s;" onmouseover="this.style.background='var(--error-light)';this.style.color='var(--error)'" onmouseout="this.style.background='var(--surface-raised)';this.style.color='var(--text-secondary)'">
          Sign Out
        </button>
      </div>
    </aside>
  `,
})

export class SidebarComponent {
  readonly store = inject(AuthStore);
  readonly auth = inject(AuthService);

  readonly roleLabel = computed(() => {
    const map: Record<string, string> = { STUDENT: "Student Portal", STAFF: "Staff Portal", ADMIN: "Admin Portal" };
    return map[this.store.user()?.role ?? ""] ?? "Portal";
  });

  readonly navItems = computed((): NavItem[] => {
    const role = this.store.user()?.role;
    const base = role === "STUDENT" ? "/student" : role === "STAFF" ? "/staff" : "/admin";
    if (role === "STUDENT") return [
      { label: "Dashboard", path: `${base}/dashboard`, icon: faHome },
      { label: "My Courses", path: `${base}/courses`, icon: faBook },
      { label: "Registration", path: `${base}/registration`, icon: faPen },
      { label: "Attendance", path: `${base}/attendance`, icon: faClipboard },
      { label: "Exams", path: `${base}/exams`, icon: faFileSignature },
      { label: "Results", path: `${base}/results`, icon: faTrophy },
      { label: "E-Library", path: `${base}/library`, icon: faBookOpen },
      { label: "Messages", path: `${base}/messages`, icon: faCommentDots },
      { label: "Calendar", path: `${base}/calendar`, icon: faCalendarDays },
      { label: "Profile", path: `${base}/profile`, icon: faUser },
    ];
    if (role === "STAFF") return [
      { label: "Dashboard", path: `${base}/dashboard`, icon: faHome },
      { label: "My Courses", path: `${base}/courses`, icon: faBook },
      { label: "Students", path: `${base}/students`, icon: faUsers },
      { label: "Attendance", path: `${base}/attendance`, icon: faClipboard },
      { label: "Exam Builder", path: `${base}/exams`, icon: faFlask },
      { label: "Grading", path: `${base}/grading`, icon: faBullseye },
      { label: "Messages", path: `${base}/messages`, icon: faCommentDots },
      { label: "Calendar", path: `${base}/calendar`, icon: faCalendarDays },
      { label: "Profile", path: `${base}/profile`, icon: faUser },
    ];
    return [
      { label: "Dashboard", path: `${base}/dashboard`, icon: faHome },
      { label: "Users", path: `${base}/users`, icon: faUsers },
      { label: "Courses", path: `${base}/courses`, icon: faBook },
      { label: "Timetable", path: `${base}/timetable`, icon: faCalendarAlt },
      { label: "Reports", path: `${base}/reports`, icon: faChartBar },
      { label: "Announcements", path: `${base}/announcements`, icon: faBullhorn },
      { label: "Settings", path: `${base}/settings`, icon: faGear },
    ];
  });
}
