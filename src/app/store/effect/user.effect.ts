import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import * as Action from "../action/user.action";
import { UserService } from "../../service/user.service";

@Injectable()
export class UserEffect {
  constructor(private actions$: Actions, private userService: UserService) {}

  // Create User Effect
  createUser$ = createEffect(() =>
  this.actions$.pipe(
    ofType(Action.createUser),
    mergeMap(({ user }) =>
    this.userService.createUser(user).pipe(
      map(newUser => Action.createUserSucess({ user: newUser })),
      catchError(error => of(Action.createUserFailure({error: error})))
    ))
  ));

  // Update User Effect
  updateUser$ = createEffect(() =>
  this.actions$.pipe(
    ofType(Action.updateUser),
    mergeMap(({ username, user }) =>
    this.userService.updateUser(username, user).pipe(
      map(user => Action.updateUserSucess({ user: user })),
      catchError(error => of(Action.updateUserFailure({error: error})))
    ))
  ));

  // Delete User Effect
  deleteUser$ = createEffect(() =>
  this.actions$.pipe(
    ofType(Action.deleteUser),
    mergeMap(({ username }) =>
    this.userService.deleteUser(username).pipe(
      map(() => Action.deleteUserSucess()),
      catchError(error => of(Action.deleteUserFailure({error: error})))
    ))
  ));

  // Get User Effect
  getUser$ = createEffect(() =>
  this.actions$.pipe(
    ofType(Action.getUser),
    mergeMap(({ username }) =>
    this.userService.getUser(username).pipe(
      map((user) => Action.getUserSucess({ user: user})),
      catchError(error => of(Action.getUserFailure({error: error})))
    ))
  ));

  // List Users Effect
  listUsers$ = createEffect(() =>
  this.actions$.pipe(
    ofType(Action.listUsers),
    mergeMap(() =>
    this.userService.listUsers().pipe(
      map((users) => Action.listUsersSucess({ users: users})),
      catchError(error => of(Action.listUsersFailure({error: error})))
    ))
  ));
}
