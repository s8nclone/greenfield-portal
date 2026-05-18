import { Directive, input, TemplateRef, ViewContainerRef, inject, effect } from "@angular/core";
import { AuthStore } from "@core/auth/auth.store";
import { UserRole } from "@core/models";

@Directive({ selector: "[appHasRole]" })
export class HasRoleDirective {
  private readonly store = inject(AuthStore);
  private readonly tpl = inject(TemplateRef);
  private readonly vcr = inject(ViewContainerRef);

  readonly appHasRole = input<UserRole | UserRole[]>();

  constructor() {
    effect(() => {
      const roles = this.appHasRole();
      const userRole = this.store.user()?.role;
      const allowed = Array.isArray(roles) ? roles : [roles];
      this.vcr.clear();
      if (userRole && allowed.includes(userRole)) this.vcr.createEmbeddedView(this.tpl);
    });
  }
}
