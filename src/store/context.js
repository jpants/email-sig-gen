// @flow
import { createContext } from 'react';

export type InitialStateType = {
  +activePerson: {
    +id: number,
    +name: string
  },
  +sigEl: string,
  +newPerson: {
    +firstName: string,
    +lastName: string,
    +title: string,
    +directPhone: string,
    +mobilePhone: string,
    +email: string
  },
  +newPersonActive: boolean,
  +generate: boolean,
  +dispatch: (?mixed) => void
};

const initialState = {
  activePerson: {
    id: 0,
    name: 'Evo-Lite',
  },
  sigEl: '',
  newPerson: {
    firstName: '',
    lastName: '',
    title: '',
    directPhone: '',
    mobilePhone: '',
    email: '',
  },
  newPersonActive: false,
  generate: false,
};

const Context = createContext<InitialStateType>(initialState);

export default Context;
