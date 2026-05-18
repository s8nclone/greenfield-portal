import { Component, inject, signal } from "@angular/core";
import { PageHeaderComponent } from "@shared/components/page-header/page-header.component";
import { AvatarComponent } from "@shared/components/avatar/avatar.component";
import { AuthStore } from "@core/auth/auth.store";
import { MOCK_STUDENT } from "@core/mock/mock-data";

@Component({
  selector: "app-student-profile",
  imports: [PageHeaderComponent, AvatarComponent],
  template: `
    <app-page-header title="My Profile" subtitle="Manage your personal and academic information" />
    <div style="display:grid;grid-template-columns:1fr 2fr;gap:20px;" class="profile-grid">
      <div style="display:flex;flex-direction:column;gap:16px;">
        <div class="card" style="text-align:center;">
          <div style="display:flex;justify-content:center;margin-bottom:16px;">
            <app-avatar [src]="store.user()?.avatarUrl" [name]="(store.user()?.firstName ?? '') + ' ' + (store.user()?.lastName ?? '')" size="xl" />
          </div>
          <h3 style="font-family:var(--font-display);font-weight:700;font-size:1.125rem;color:var(--text);">{{ store.user()?.firstName }} {{ store.user()?.lastName }}</h3>
          <p style="font-size:.8125rem;color:var(--text-muted);margin:4px 0 16px;">{{ student.matricNumber }}</p>
          <span class="badge badge-success" style="margin-bottom:16px;">Active</span>
          <div style="display:flex;flex-direction:column;gap:8px;padding-top:16px;border-top:1px solid var(--border);">
            <div style="font-size:.8125rem;display:flex;justify-content:space-between;"><span style="color:var(--text-muted);">Level</span><span style="font-weight:600;">{{ student.level }}L</span></div>
            <div style="font-size:.8125rem;display:flex;justify-content:space-between;"><span style="color:var(--text-muted);">CGPA</span><span style="font-weight:700;color:var(--primary);">{{ student.cgpa }}</span></div>
            <div style="font-size:.8125rem;display:flex;justify-content:space-between;"><span style="color:var(--text-muted);">Fee Status</span><span class="badge badge-success">Paid</span></div>
          </div>
        </div>
      </div>
      <div class="card">
        <h3 style="font-family:var(--font-display);font-weight:700;margin-bottom:20px;">Personal Information</h3>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
          @for (field of fields; track field.label) {
            <div>
              <label style="font-size:.75rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--text-muted);">{{ field.label }}</label>
              <div style="margin-top:4px;font-size:.9375rem;font-weight:500;color:var(--text);">{{ field.value }}</div>
            </div>
          }
        </div>
      </div>
    </div>
    <style>.profile-grid { @media (max-width:768px) { grid-template-columns: 1fr !important; } }</style>
  `,
})
export class StudentProfileComponent {
  readonly store = inject(AuthStore);
  readonly student = MOCK_STUDENT;
  readonly fields = [
    { label:"Full Name", value:"Amara Okafor" },
    { label:"Email", value:"student@school.edu" },
    { label:"Matric Number", value:"GU/2023/CS/0042" },
    { label:"Programme", value:"B.Sc. Computer Science" },
    { label:"Level", value:"300 Level" },
    { label:"Department", value:"School of Computing" },
    { label:"Phone", value:"+234 810 000 0001" },
    { label:"Enrolled", value:"September 2023" },
  ];
}
