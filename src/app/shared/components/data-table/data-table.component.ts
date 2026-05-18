import { Component, input, signal, computed } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SearchInputComponent } from "../search-input/search-input.component";

export interface TableColumn { key: string; label: string; sortable?: boolean; }

@Component({
  selector: "app-data-table",
  imports: [FormsModule, SearchInputComponent],
  template: `
    <div>
      <div style="margin-bottom:16px;"><app-search-input placeholder="Search..." (valueChange)="query.set($event)" /></div>
      <div style="overflow-x:auto;border-radius:var(--radius-lg);border:1px solid var(--border);">
        <table class="data-table">
          <thead>
            <tr>
              @for (col of columns(); track col.key) {
                <th (click)="col.sortable && toggleSort(col.key)" [style.cursor]="col.sortable ? 'pointer' : 'default'">
                  {{ col.label }} @if (sortCol() === col.key) { {{ sortDir() === 'asc' ? '↑' : '↓' }} }
                </th>
              }
            </tr>
          </thead>
          <tbody>
            @for (row of filteredRows(); track $index) {
              <tr>
                @for (col of columns(); track col.key) {
                  <td>{{ row[col.key] ?? '—' }}</td>
                }
              </tr>
            }
            @empty { <tr><td [attr.colspan]="columns().length" style="text-align:center;padding:40px;color:var(--text-muted);">No records found</td></tr> }
          </tbody>
        </table>
      </div>
    </div>
  `,
})

export class DataTableComponent {
  readonly columns = input<TableColumn[]>([]);
  readonly rows = input<Record<string, any>[]>([]);
  readonly query = signal("");
  readonly sortCol = signal("");
  readonly sortDir = signal<"asc"|"desc">("asc");

  readonly filteredRows = computed(() => {
    const q = this.query().toLowerCase();
    let data = q ? this.rows().filter(r => Object.values(r).some(v => String(v).toLowerCase().includes(q))) : [...this.rows()];
    if (this.sortCol()) {
      data.sort((a, b) => {
        const v = String(a[this.sortCol()]).localeCompare(String(b[this.sortCol()]));
        return this.sortDir() === "asc" ? v : -v;
      });
    }
    return data;
  });

  toggleSort(col: string): void {
    if (this.sortCol() === col) this.sortDir.update(d => d === "asc" ? "desc" : "asc");
    else { this.sortCol.set(col); this.sortDir.set("asc"); }
  }
}
