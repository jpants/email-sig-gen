// @flow

import {
  SET_ACTIVE_PERSON,
  SET_SIG_EL,
  SET_NEW_PERSON_ACTIVE,
  SET_NEW_PERSON,
  SET_GENERATE,
} from './actionTypes';

// Action Creators return an Action

// Action is an object with a type, payload, error, or meta
// { type: ACTION_TYPE, payload: var }

type ActivePersonActionType = { type: typeof SET_ACTIVE_PERSON, payload: { id: number, name: string } };
type SetSigElActionType = { type: typeof SET_SIG_EL, payload: string };
type SetNewPersonActiveActionType = { type: typeof SET_NEW_PERSON_ACTIVE, payload: boolean };
type PersonType = {
  firstName: string,
  lastName: string,
  title: string,
  directPhone: string,
  mobilePhone: string,
  email: string
};
type SetNewPersonActionType = { type: typeof SET_NEW_PERSON, payload: PersonType };
type SetGenerateActionType = { type: typeof SET_GENERATE, payload: boolean };

export type ActionType =
  | ActivePersonActionType
  | SetSigElActionType
  | SetNewPersonActiveActionType
  | SetNewPersonActionType
  | SetGenerateActionType;

export const setActivePerson = (id: number, name: string): ActivePersonActionType => ({
  type: SET_ACTIVE_PERSON,
  payload: { id, name },
});

export const setSigEl = (HTMLString: string): SetSigElActionType => ({
  type: SET_SIG_EL,
  payload: HTMLString,
});

export const setNewPersonActive = (bool: boolean): SetNewPersonActiveActionType => ({
  type: SET_NEW_PERSON_ACTIVE,
  payload: bool,
});

export const setNewPerson = (person: PersonType): SetNewPersonActionType => ({
  type: SET_NEW_PERSON,
  payload: person,
});

export const setGenerate = (bool: boolean): SetGenerateActionType => ({
  type: SET_GENERATE,
  payload: bool,
});
