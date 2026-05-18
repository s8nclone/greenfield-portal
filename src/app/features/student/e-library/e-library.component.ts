import { Component, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { PageHeaderComponent } from "@shared/components/page-header/page-header.component";
import { MOCK_BOOKS } from "@core/mock/mock-data";
import { inject } from "@angular/core";
import { NotificationService } from "@core/services/notification.service";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-e-library",
  imports: [FormsModule, PageHeaderComponent, FontAwesomeModule],
  template: `
    <app-page-header title="E-Library" subtitle="Browse and borrow from 100,000+ resources" />
    <div style="margin-bottom:20px;display:flex;gap:12px;">
      <div style="position:relative;flex:1;">
        <svg style="position:absolute;left:12px;top:50%;transform:translateY(-50%);color:var(--text-muted);" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        <input [(ngModel)]="query" placeholder="Search books, authors, ISBN..." style="width:100%;padding:10px 14px 10px 40px;border:1.5px solid var(--border);border-radius:var(--radius-md);font-size:.875rem;color:var(--text);background:var(--canvas);outline:none;" />
      </div>
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px;">
      @for (book of filtered(); track book.id) {
        <div class="card" style="display:flex;flex-direction:column;gap:12px;">
          <div style="height:160px;background:var(--primary-light);border-radius:var(--radius-md);display:flex;align-items:center;justify-content:center;font-size:3rem;color:var(--primary)"><fa-icon [icon]="faBookOpen"></fa-icon></div>
          <div>
            <h3 style="font-family:var(--font-display);font-weight:700;font-size:.9375rem;color:var(--text);margin-bottom:4px;">{{ book.title }}</h3>
            <p style="font-size:.8125rem;color:var(--text-secondary);">{{ book.author }}</p>
            <p style="font-size:.75rem;color:var(--text-muted);">{{ book.department }} · {{ book.year }}</p>
          </div>
          <div style="display:flex;justify-content:space-between;align-items:center;padding-top:12px;border-top:1px solid var(--border);">
            <span class="badge" [class]="book.available ? 'badge-success' : 'badge-error'">{{ book.available ? 'Available' : 'Borrowed' }}</span>
            <button (click)="borrow(book.id)" [disabled]="!book.available" style="padding:6px 16px;background:var(--primary);color:#fff;border-radius:var(--radius-md);font-size:.8125rem;font-weight:600;font-family:var(--font-display);transition:.2s;" [style.opacity]="book.available ? '1' : '0.4'">
              {{ book.available ? 'Borrow' : 'Due: ' + book.dueDate }}
            </button>
          </div>
        </div>
      }
    </div>
  `,
})
export class ELibraryComponent {
  faBookOpen = faBookOpen;
  private readonly ns = inject(NotificationService);
  readonly books = MOCK_BOOKS;
  query = "";
  get filtered() { return () => this.query ? this.books.filter(b => b.title.toLowerCase().includes(this.query.toLowerCase()) || b.author.toLowerCase().includes(this.query.toLowerCase())) : this.books; }
  borrow(id: string) { this.ns.success("Borrow request submitted! Check your email for confirmation."); }
}
