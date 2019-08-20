// @flow
import {
  SET_ACTIVE_PERSON,
  SET_SIG_EL,
  SET_NEW_PERSON_ACTIVE,
  SET_NEW_PERSON,
  SET_GENERATE,
} from './actionTypes';
import { type ActionType } from './actionCreators';
import { type InitialStateType } from './context';

const reducer = (state: InitialStateType, action: ActionType): InitialStateType => {
  switch (action.type) {
    case SET_ACTIVE_PERSON:
      // return new state
      return {
        ...state,
        activePerson: {
          id: action.payload.id,
          name: action.payload.name,
        },
      };

    case SET_SIG_EL:
      return {
        ...state,
        sigEl: action.payload,
      };

    case SET_NEW_PERSON:
      return {
        ...state,
        newPerson: action.payload,
      };

    case SET_NEW_PERSON_ACTIVE:
      return {
        ...state,
        newPersonActive: action.payload,
      };

    case SET_GENERATE:
      return {
        ...state,
        generate: action.payload,
      };

    default:
      // (action: empty);
      return state;
  }
};

export default reducer;
