import React from 'react';
import PropTypes from 'prop-types';
// import * as actionTypes from '../../store/actions';
import Example from './Example/Example';

import './Signature.scss';

import people from '../../data/people';

const signature = ({ activePerson, dispatch, generate, newPerson, newPersonActive }) => {
  const name = activePerson.id < 0 || generate ? 'Evo-Lite' : activePerson.name;
  // console.log(person);

  const newPersName = `${newPerson.firstName} ${newPerson.lastName}`;

  return (
    <section className="cell section signature-section">
      <div className="grid-x align-center align-top section-grid signature-grid">
        <div className="cell welcome-box">
          <h1>Welcome {newPersonActive ? newPersName : name}</h1>
        </div>

        {
          (activePerson.id !== 0 || newPersonActive) &&
          <Example activePerson={newPersonActive ? newPerson : people[activePerson.id - 1]} dispatch={dispatch} />
        }

      </div>
    </section>
  );
};

signature.defaultProps = {
};

signature.propTypes = {
  activePerson: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
  generate: PropTypes.bool.isRequired,
  newPerson: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    title: PropTypes.string,
    directPhone: PropTypes.string,
    mobilePhone: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
  newPersonActive: PropTypes.bool.isRequired,
};

export default signature;
