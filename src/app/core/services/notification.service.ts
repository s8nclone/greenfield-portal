import { Injectable, signal } from "@angular/core";

export interface Toast {
  id: string;
  message: string;
  type: "success" | "error" | "warning" | "info";
  duration?: number;
}

@Injectable({ providedIn: "root" })
export class NotificationService {
  readonly toasts = signal<Toast[]>([]);

  private add(message: string, type: Toast["type"], duration = 4000): void {
    const id = crypto.randomUUID();
    this.toasts.update(t => [...t, { id, message, type, duration }]);
    setTimeout(() => this.remove(id), duration);
  }

  success(message: string) { this.add(message, "success"); }
  error(message: string) { this.add(message, "error"); }
  warning(message: string) { this.add(message, "warning"); }
  info(message: string) { this.add(message, "info"); }

  remove(id: string): void { this.toasts.update(t => t.filter(x => x.id !== id)); }
}
