import { Component, signal } from "@angular/core";
import { PageHeaderComponent } from "@shared/components/page-header/page-header.component";
import { DataTableComponent } from "@shared/components/data-table/data-table.component";
@Component({
  selector: "app-user-management",
  imports: [PageHeaderComponent, DataTableComponent],
  template: `
    <app-page-header title="User Management" subtitle="Manage students, staff, and admin accounts" />
    <div style="display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap;">
      @for (tab of tabs; track tab) {
        <button (click)="active.set(tab)" [style]="'padding:8px 20px;border-radius:999px;font-size:.875rem;font-weight:600;border:1.5px solid;transition:.2s;font-family:var(--font-display);cursor:pointer;' + (active()===tab ? 'background:var(--admin-accent);color:#fff;border-color:var(--admin-accent);' : 'background:transparent;color:var(--text-secondary);border-color:var(--border);')">{{ tab }}</button>
      }
    </div>
    <div class="card" style="padding:0;overflow:hidden;">
      <app-data-table [columns]="cols" [rows]="rows" />
    </div>
  `,
})

export class UserManagementComponent {
  readonly tabs = ["All Users","Students","Staff","Admins"];
  readonly active = signal("All Users");
  readonly cols = [{ key:"name",label:"Name",sortable:true },{ key:"email",label:"Email" },{ key:"role",label:"Role" },{ key:"dept",label:"Department" },{ key:"status",label:"Status" },{ key:"joined",label:"Joined" }];
  readonly rows = [
    { name:"Amara Okafor", email:"student@school.edu", role:"Student", dept:"Computing", status:"Active", joined:"Sep 2023" },
    { name:"Dr. Bello Adeyemi", email:"staff@school.edu", role:"Staff", dept:"Computing", status:"Active", joined:"Jan 2020" },
    { name:"Fatima Aliyu", email:"admin@school.edu", role:"Admin", dept:"Administration", status:"Active", joined:"Jun 2019" },
    { name:"Emeka Nwosu", email:"e.nwosu@school.edu", role:"Student", dept:"Computing", status:"Active", joined:"Sep 2023" },
    { name:"Prof. Ngozi Eze", email:"n.eze@school.edu", role:"Staff", dept:"Computing", status:"Active", joined:"Sep 2018" },
    { name:"Tunde Bakare", email:"t.bakare@school.edu", role:"Student", dept:"Engineering", status:"At Risk", joined:"Sep 2023" },
    { name:"Dr. Aisha Musa", email:"a.musa@school.edu", role:"Staff", dept:"Mathematics", status:"Active", joined:"Mar 2021" },
  ];
}
