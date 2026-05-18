import { Component } from "@angular/core";
import { PageHeaderComponent } from "@shared/components/page-header/page-header.component";
import { DataTableComponent } from "@shared/components/data-table/data-table.component";
import { MOCK_COURSES } from "@core/mock/mock-data";
@Component({
  selector: "app-course-management",
  imports: [PageHeaderComponent, DataTableComponent],
  template: `
    <app-page-header title="Course Management" subtitle="Manage all courses across all schools" />
    <div class="card" style="padding:0;overflow:hidden;">
      <app-data-table [columns]="cols" [rows]="rows" />
    </div>
  `,
})

export class CourseManagementComponent {
  readonly cols = [{ key:"code",label:"Code",sortable:true },{ key:"title",label:"Title",sortable:true },{ key:"dept",label:"Department" },{ key:"instructor",label:"Instructor" },{ key:"enrolled",label:"Enrolled" },{ key:"units",label:"Units" }];
  readonly rows = MOCK_COURSES.map(c => ({ code:c.code, title:c.title, dept:c.department, instructor:c.instructorName, enrolled:`${c.enrolledCount}/${c.capacity}`, units:c.creditHours }));
}
