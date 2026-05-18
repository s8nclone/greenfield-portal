import { Component, inject } from "@angular/core";
import { NotificationService } from "@core/services/notification.service";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faCircleCheck, faCircleXmark, faTriangleExclamation, faCircleInfo } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-toast-container",
  imports: [FontAwesomeModule],
  template: `
    <div style="position:fixed;bottom:24px;right:24px;z-index:9999;display:flex;flex-direction:column;gap:10px;min-width:300px;max-width:400px;">
      @for (t of ns.toasts(); track t.id) {
        <div [attr.data-type]="t.type" style="display:flex;align-items:center;gap:12px;padding:14px 18px;border-radius:12px;background:var(--surface);border:1px solid var(--border);box-shadow:var(--shadow-lg);animation:slide-in-right .3s ease both;">
          <span style="font-size:1.1rem;">
            @if (t.type === 'success') { <fa-icon [icon]="faCircleCheck" style="color: var(--success)"></fa-icon> }
            @else if (t.type === 'error') { <fa-icon [icon]="faCircleXmark" style="color: var(--error)"></fa-icon> }
            @else if (t.type === 'warning') { <fa-icon [icon]="faTriangleExclamation" style="color: var(--warning)"></fa-icon> }
            @else { <fa-icon [icon]="faCircleInfo" style="color: var(--info)"></fa-icon> }
          </span>
          <span style="flex:1;font-size:.875rem;font-weight:500;color:var(--text);">{{ t.message }}</span>
          <button (click)="ns.remove(t.id)" style="color:var(--text-muted);font-size:1rem;line-height:1;padding:2px 4px;">&times;</button>
        </div>
      }
    </div>
  `,
})
export class ToastContainerComponent {
  faCircleCheck = faCircleCheck;
  faCircleXmark = faCircleXmark;
  faTriangleExclamation = faTriangleExclamation;
  faCircleInfo = faCircleInfo;

  readonly ns = inject(NotificationService);
}
