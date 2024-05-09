import { createAction, props, Action } from "@ngrx/store";
import { User } from "../model/user.model";

export enum UserACctionTypes {
// Const Create User
    CREATE_USER = "CREATE_USER",
    CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS",
    CREATE_USER_FAILURE = "CREATE_USER_FAILURE",

// Const Update User
    UPDATE_USER = "UPDATE_USER",
    UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS",
    UPDATE_USER_FAILURE = "UPDATE_USER_FAILURE",

// Const Get  User
    GET_USER = "GET_USER",
    GET_USER_SUCCESS = "GET_USER_SUCCESS",
    GET_USER_FAILURE = "GET_USER_FAILURE",

// Const List Users
    LIST_USERS = "LIST_USERS",
    LIST_USERS_SUCCESS = "LIST_USERS_SUCCESS",
    LIST_USERS_FAILURE = "LIST_USERS_FAILURE",

// Const Delete  User
    DELETE_USER = "DELETE_USER",
    DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS",
    DELETE_USER_FAILURE = "DELETE_USER_FAILURE",
}

// Create Action Add User
export const createUser = createAction(UserACctionTypes.CREATE_USER, props<{ user: User }>());
export const createUserSucess = createAction(UserACctionTypes.CREATE_USER_SUCCESS, props<{ user: User }>());
export const createUserFailure = createAction(UserACctionTypes.CREATE_USER_FAILURE, props<{ error: Error }>());

// Create Action Update User
export const updateUser = createAction(UserACctionTypes.UPDATE_USER, props<{ username: string, user: User }>());
export const updateUserSucess = createAction(UserACctionTypes.UPDATE_USER_SUCCESS, props<{ user: User }>());
export const updateUserFailure = createAction(UserACctionTypes.UPDATE_USER_FAILURE, props<{ error: Error }>());

// Create Action Get User
export const getUser = createAction(UserACctionTypes.GET_USER, props<{ username: string }>());
export const getUserSucess = createAction(UserACctionTypes.GET_USER_SUCCESS, props<{ user: User }>());
export const getUserFailure = createAction(UserACctionTypes.GET_USER_FAILURE, props<{ error: Error }>());

// Create Action List Users
export const listUsers = createAction(UserACctionTypes.LIST_USERS);
export const listUsersSucess = createAction(UserACctionTypes.LIST_USERS_SUCCESS, props<{ users: User[] }>());
export const listUsersFailure = createAction(UserACctionTypes.LIST_USERS_FAILURE, props<{ error: Error }>());

// Create Action Delete User
export const deleteUser = createAction(UserACctionTypes.DELETE_USER, props<{ username: string }>());
export const deleteUserSucess = createAction(UserACctionTypes.DELETE_USER_SUCCESS);
export const deleteUserFailure = createAction(UserACctionTypes.DELETE_USER_FAILURE, props<{ error: Error }>());





export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');