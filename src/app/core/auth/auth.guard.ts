import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthStore } from "./auth.store";

export const authGuard: CanActivateFn = () => {
  const store = inject(AuthStore);
  const router = inject(Router);
  if (store.isAuthenticated()) return true;
  return router.createUrlTree(["/login"]);
};

export const unauthGuard: CanActivateFn = () => {
  const store = inject(AuthStore);
  const router = inject(Router);
  const user = store.user();
  if (!store.isAuthenticated() || !user) return true;
  const map: Record<string, string> = { STUDENT: "/student/dashboard", STAFF: "/staff/dashboard", ADMIN: "/admin/dashboard" };
  return router.createUrlTree([map[user.role]]);
};
