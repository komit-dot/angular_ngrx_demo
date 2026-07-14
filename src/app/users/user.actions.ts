import { createAction, props } from "@ngrx/store";

export const loadUsers = createAction(
    '[User] Load Users'
);

export const loadUsersSuccess = createAction(
    '[User] Load User Success',
     props<{users: any[]}> ()
)

export const loadUsersFailure = createAction(
    '[User] Load User Failure',
     props<{error: string}> ()
)