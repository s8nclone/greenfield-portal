import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "gradeColor" })
export class GradeColorPipe implements PipeTransform {
  transform(grade: string): string {
    if (["A", "A+", "A-"].includes(grade)) return "var(--success)";
    if (["B+", "B", "B-"].includes(grade)) return "var(--info)";
    if (["C+", "C", "C-"].includes(grade)) return "var(--warning)";
    return "var(--error)";
  }
}
