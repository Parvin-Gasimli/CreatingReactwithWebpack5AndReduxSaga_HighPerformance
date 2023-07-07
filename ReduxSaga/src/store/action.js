import {
  USER_FETCH_FAILED,
  USER_FETCH_REQUESTED,
  USER_FETCH_SUCCEEDED,
} from "./actionTypes";

//Call Helper**
import CreateAction from "../helper/action-helper";

//Action Creator**
export const requestAction = CreateAction(USER_FETCH_REQUESTED);
export const successAction = CreateAction(USER_FETCH_SUCCEEDED);
export const failureAction = CreateAction(USER_FETCH_FAILED);
