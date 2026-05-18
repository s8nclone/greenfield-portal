import { Injectable, inject } from "@angular/core";
import { Router } from "@angular/router";
import { MOCK_USERS, MOCK_STUDENT, MOCK_STAFF } from "@core/mock/mock-data";
import { User, UserRole } from "@core/models";
import { AuthStore } from "./auth.store";

@Injectable({ providedIn: "root" })
export class  AuthService {
  private readonly store = inject(AuthStore);
  private readonly router = inject(Router);

  login(email: string, password: string): Promise<boolean> {
    this.store.setLoading(true);
    return new Promise(resolve => {
      setTimeout(() => {
        const user = MOCK_USERS.find(u => u.email === email);
        if (user && password === "password123") {
          const token = btoa(JSON.stringify({ id: user.id, role: user.role, exp: Date.now() + 86400000 }));
          this.store.setAuth(user, token);
          localStorage.setItem("gf_token", token);
          localStorage.setItem("gf_user", JSON.stringify(user));
          this.store.setLoading(false);
          resolve(true);
        } else {
          this.store.setLoading(false);
          resolve(false);
        }
      }, 600);
    });
  }

  logout(): void {
    this.store.clearAuth();
    localStorage.removeItem("gf_token");
    localStorage.removeItem("gf_user");
    this.router.navigate(["/"]);
  }

  restoreSession(): void {
    try {
      const token = localStorage.getItem("gf_token");
      const raw = localStorage.getItem("gf_user");
      if (token && raw) {
        const user: User = JSON.parse(raw);
        this.store.setAuth(user, token);
      }
    } catch { this.logout(); }
  }

  getRedirectPath(role: UserRole): string {
    const map: Record<UserRole, string> = { STUDENT: "/student/dashboard", STAFF: "/staff/dashboard", ADMIN: "/admin/dashboard" };
    return map[role];
  }
}
