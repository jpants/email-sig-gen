// @flow
import React, { useReducer, useContext } from 'react';
import type { Node } from 'react';
import Reducer from '../../store/reducer';
// import * as actionTypes from '../../store/actions';
import Context from '../../store/context';
import Select from '../../components/Select/Select';
import Signature from '../../components/Signature/Signature';
import SigHtml from '../../components/SigHtml/SigHtml';
import Generate from '../../components/Generate/Generate';

import './Layout.scss';

const layout = (): Node => {
  const initialState = useContext(Context);
  const [ state, dispatch ] = useReducer(Reducer, initialState);

  return (
    <Context.Provider value={{ ...state, dispatch }}>
      <div className="layout-section">
        <div className="grid-container grid-y align-left layout-container-grid">

          <Select
            activePerson={state.activePerson}
            dispatch={dispatch}
          />

          <Signature
            activePerson={state.activePerson}
            dispatch={dispatch}
            generate={state.generate}
            newPerson={state.newPerson}
            newPersonActive={state.newPersonActive}
          />

          {
            (state.activePerson.name !== 'Evo-Lite' || state.newPersonActive) && (
              <SigHtml
                sigEl={state.sigEl}
              />
            )
          }

          {
            state.generate && (
              <Generate
                newPerson={state.newPerson}
                dispatch={dispatch}
              />
            )
          }

        </div>
      </div>
    </Context.Provider>
  );
};

export default layout;
