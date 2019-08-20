// @flow
import React, { useContext } from 'react';
import type { Node } from 'react';
// import PropTypes from 'prop-types';
import Context from '../../store/context';
import { setActivePerson, setNewPersonActive, setGenerate } from '../../store/actionCreators';
// import * as actionTypes from '../../store/actionTypes';
import './Select.scss';

import people from '../../data/people';

const Select = (): Node => {
  const { activePerson, dispatch } = useContext(Context);

  const peeps = people.map((peep, i) => ({
    id: i,
    name: `${peep.firstName} ${peep.lastName}`,
  }));

  const selectChangeHandler = event => {
    const t = +event.target.value;
    const name = t > 0 ? peeps[t - 1].name : 'Evo-Lite';
    const id = t > 0 ? t : 0;
    // dispatch({ type: actionTypes.SET_ACTIVE_PERSON, payload: { id, name }});
    dispatch(setActivePerson(id, name));
    // dispatch({ type: actionTypes.SET_NEW_PERSON_ACTIVE, payload: false });
    dispatch(setNewPersonActive(false));
    if (t !== -1) {
      // setGenerate(false);
      // dispatch({ type: actionTypes.SET_GENERATE, payload: false });
      dispatch(setGenerate(false));
    } else {
      // setGenerate(true);
      // dispatch({ type: actionTypes.SET_GENERATE, payload: true });
      dispatch(setGenerate(true));
    }
  };

  return (
    <div className="cell section select-section">
      <div className="grid-x align-center align-top section-grid">
        <div className={['cell small-4'].join(' ')}>
          <label htmlFor="person">
            <select name="person" id="person" onChange={selectChangeHandler} value={activePerson.id}>
              <option value="0">Select Person</option>
              {peeps.map(peep => <option value={peep.id + 1} key={peep.name}>{peep.name}</option>)}
              <option value="-1">-- Generate New --</option>
            </select>
          </label>
        </div>
      </div>
    </div>
  );
};

Select.defaultProps = {
};

Select.propTypes = {
  // activePerson: PropTypes.shape({
  //   id: PropTypes.number,
  //   name: PropTypes.string,
  // }).isRequired,
  // dispatch: PropTypes.func.isRequired,
};

export default Select;
