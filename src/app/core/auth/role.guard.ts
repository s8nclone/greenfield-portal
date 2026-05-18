import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthStore } from "./auth.store";
import { UserRole } from "@core/models";

export const roleGuard = (role: UserRole): CanActivateFn => () => {
  const store = inject(AuthStore);
  const router = inject(Router);
  if (store.user()?.role === role) return true;
  return router.createUrlTree(["/"]);
};
