import { signalStore, withState, withMethods, patchState } from "@ngrx/signals";
import { AuthState, User } from "@core/models";

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: false,
};

export const AuthStore = signalStore(
  { providedIn: "root" },
  withState(initialState),
  withMethods(store => ({
    setAuth(user: User, token: string): void {
      patchState(store, { user, token, isAuthenticated: true, isLoading: false });
    },
    clearAuth(): void { patchState(store, initialState); },
    setLoading(isLoading: boolean): void { patchState(store, { isLoading }); },
  }))
);
