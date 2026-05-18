import { Component } from "@angular/core";
import { PageHeaderComponent } from "@shared/components/page-header/page-header.component";
import { DataTableComponent } from "@shared/components/data-table/data-table.component";
@Component({
  selector: "app-students",
  imports: [PageHeaderComponent, DataTableComponent],
  template: `
    <app-page-header title="My Students" subtitle="All students enrolled in your courses" />
    <div class="card" style="padding:0;overflow:hidden;">
      <app-data-table [columns]="cols" [rows]="rows" />
    </div>
  `,
})
export class StudentsComponent {
  readonly cols = [
    { key:"name", label:"Student Name", sortable:true },
    { key:"matric", label:"Matric No." },
    { key:"course", label:"Course", sortable:true },
    { key:"attendance", label:"Attendance" },
    { key:"grade", label:"Current Grade" },
    { key:"status", label:"Status" },
  ];
  readonly rows = [
    { name:"Amara Okafor", matric:"GU/2023/CS/0042", course:"CSC301", attendance:"87%", grade:"B+", status:"Active" },
    { name:"Emeka Nwosu", matric:"GU/2023/CS/0043", course:"CSC301", attendance:"92%", grade:"A", status:"Active" },
    { name:"Fatima Musa", matric:"GU/2023/CS/0044", course:"CSC303", attendance:"78%", grade:"B", status:"Active" },
    { name:"Tunde Bakare", matric:"GU/2023/CS/0045", course:"CSC301", attendance:"65%", grade:"C+", status:"At Risk" },
    { name:"Ngozi Eze", matric:"GU/2023/CS/0046", course:"CSC303", attendance:"94%", grade:"A", status:"Active" },
    { name:"Chidi Obi", matric:"GU/2023/CS/0047", course:"CSC201", attendance:"72%", grade:"B-", status:"Active" },
    { name:"Aisha Garba", matric:"GU/2023/CS/0048", course:"CSC301", attendance:"88%", grade:"B+", status:"Active" },
    { name:"Seun Adeleke", matric:"GU/2023/CS/0049", course:"CSC201", attendance:"55%", grade:"C", status:"At Risk" },
  ];
}
