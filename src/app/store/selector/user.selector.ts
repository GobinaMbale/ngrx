import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserModel } from "../reducer/user.reducer";

const selectUserState = createFeatureSelector<UserModel>('user');
// Sélecteur pour récupérer la liste des utilisateurs
export const selectUsers = createSelector(
  selectUserState,
  (state) => state.users
);

// Sélecteur pour récupérer l'utilisateur chargé
export const selectLoadedUser = createSelector(
  selectUserState,
  (state) => state.users.length > 0 ? state.users[0] : null // Supposons que votre reducer ne stocke qu'un seul utilisateur dans le tableau users
);

// Sélecteur pour récupérer l'état de chargement
export const selectLoading = createSelector(
  selectUserState,
  (state) => state.loading
);

// Sélecteur pour récupérer l'erreur
export const selectError = createSelector(
  selectUserState,
  (state: UserModel) => state.error
);