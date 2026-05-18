import { Component, inject } from "@angular/core";
import { PageHeaderComponent } from "@shared/components/page-header/page-header.component";
import { AvatarComponent } from "@shared/components/avatar/avatar.component";
import { AuthStore } from "@core/auth/auth.store";
import { MOCK_STAFF } from "@core/mock/mock-data";
@Component({
  selector: "app-staff-profile",
  imports: [PageHeaderComponent, AvatarComponent],
  template: `
    <app-page-header title="My Profile" subtitle="Your staff profile and academic information" />
    <div style="display:grid;grid-template-columns:1fr 2fr;gap:20px;" class="profile-grid">
      <div class="card" style="text-align:center;">
        <div style="display:flex;justify-content:center;margin-bottom:16px;"><app-avatar [src]="store.user()?.avatarUrl" [name]="(store.user()?.firstName??'') + ' ' + (store.user()?.lastName??'')" size="xl" /></div>
        <h3 style="font-family:var(--font-display);font-weight:700;font-size:1.125rem;">{{ store.user()?.firstName }} {{ store.user()?.lastName }}</h3>
        <p style="font-size:.8125rem;color:var(--primary);font-weight:600;margin:4px 0;">{{ staff.designation }}</p>
        <p style="font-size:.8125rem;color:var(--text-muted);">{{ staff.staffId }}</p>
      </div>
      <div class="card">
        <h3 style="font-family:var(--font-display);font-weight:700;margin-bottom:20px;">Staff Information</h3>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
          @for (f of fields; track f.label) {
            <div><label style="font-size:.75rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--text-muted);">{{ f.label }}</label><div style="margin-top:4px;font-size:.9375rem;font-weight:500;color:var(--text);">{{ f.value }}</div></div>
          }
        </div>
      </div>
    </div>
    <style>.profile-grid { @media (max-width:768px) { grid-template-columns: 1fr !important; } }</style>
  `,
})
export class StaffProfileComponent {
  readonly store = inject(AuthStore);
  readonly staff = MOCK_STAFF;
  readonly fields = [{ label:"Full Name", value:"Dr. Bello Adeyemi" },{ label:"Email", value:"staff@school.edu" },{ label:"Staff ID", value:"GU/STAFF/0018" },{ label:"Designation", value:"Senior Lecturer" },{ label:"Department", value:"School of Computing" },{ label:"Office Hours", value:"Mon/Wed 2–4pm" }];
}
