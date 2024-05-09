import { createReducer, on } from "@ngrx/store";
import { User } from "../model/user.model";
import * as Action from "../action/user.action";

export interface UserModel {
    users: User[];
    loading: boolean;
    error: string | null;
  }
  
export const initialState: UserModel =  {
    users: [],
    loading: false,
    error: null
  };

  export interface CounterState {
    value: number;
  }
  
  export const initialState2: CounterState = {
    value: 0,
  };
  
export const userReducer = createReducer(
    initialState,
    // Create user Reducer
    on(Action.createUser, (state, action) => ({
        ...state,
        users: [...state.users, action.user],
        loading: true,
        error: null
    })),
    on(Action.createUserSucess, (state, action) => ({
        ...state,
        users: [...state.users, action.user],
        loading: false,
        error: null
    })),
    on(Action.createUserFailure, (state, error) => ({
        ...state,
        loading: false,
        error: error.error.message
    })),
    // Update user Reducer
    on(Action.updateUser, (state, action) => ({
        ...state,
        users: state.users.map(u => u.username === action.username ? u : action.user),
        loading: true,
        error: null
    })),
    on(Action.updateUserSucess, (state, action) => ({
        ...state,
        users: [...state.users, action.user],
        loading: false,
        error: null
    })),
    on(Action.updateUserFailure, (state, error) => ({
        ...state,
        loading: false,
        error: error.error.message
    })),
    // Delete user Reducer
    on(Action.deleteUser, (state, action) => ({
        ...state,
        users: state.users.filter(user => user.username !== action.username),
        loading: true,
        error: null
    })),
    on(Action.deleteUserSucess, (state) => ({
        ...state,
        loading: false,
        error: null
    })),
    on(Action.deleteUserFailure, (state, error) => ({
        ...state,
        loading: false,
        error: error.error.message
    })),
    // Get user Reducer
    on(Action.getUser, (state, action) => ({
        ...state,
        users: state.users.filter(user => user.username === action.username),
        loading: true,
        error: null
    })),
    on(Action.getUserSucess, (state, action) => ({
        ...state,
        users: [...state.users, action.user],
        loading: false,
        error: null
    })),
    on(Action.getUserFailure, (state, error) => ({
        ...state,
        loading: false,
        error: error.error.message
    })),
        // List users Reducer
    on(Action.listUsers, (state) => ({
        ...state,
        loading: true,
        error: null
    })),
    on(Action.listUsersSucess, (state, action) => ({
        ...state,
        users: action.users,
        loading: false,
        error: null
    })),
    on(Action.listUsersFailure, (state, error) => ({
        ...state,
        loading: false,
        error: error.error.message
    })),
);

export const counterReducer = createReducer(
    initialState2,
    on(Action.increment, (state) => ({ ...state, value: state.value + 1 })),
    on(Action.decrement, (state) => ({ ...state, value: state.value - 1 }))
  );
  
  export function UserReducer(state: any, action: any) {
    return userReducer(state, action);
  }
