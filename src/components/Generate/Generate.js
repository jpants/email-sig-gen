import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-foundation';
import { setNewPersonActive, setNewPerson, setGenerate } from '../../store/actionCreators';
// import * as actionTypes from '../../store/actionTypes';
import './Generate.scss';

const Generate = ({ newPerson, dispatch }) => {
  const [ inputs, setInputs ] = useState({
    firstName: {
      initial: true,
      valid: false,
    },
    lastName: {
      initial: true,
      valid: false,
    },
    title: {
      initial: true,
      valid: false,
    },
    directPhone: {
      initial: true,
      valid: false,
    },
    mobilePhone: {
      initial: true,
      valid: false,
    },
    email: {
      initial: true,
      valid: false,
    },
  });
  const [ count, setCount ] = useState(0);

  useEffect(() => {
    const genI = inputs;
    let genC = 0;

    Object.keys(newPerson).forEach(key => {
      const value = newPerson[key];

      switch (key) {
        case 'firstName':
        case 'lastName':
        case 'title': {
          if (value.length) {
            const v = value.trim();
            if (v.length) {
              genI[key] = { initial: false, valid: true };
              genC += 1;
            } else {
              genI[key] = { initial: false, valid: false };
            }
          }
          break;
        }
        case 'directPhone':
        case 'mobilePhone': {
          if (value.length) {
            const v = value.replace(/\D/g, '');
            if (v.length === 10) {
              genI[key] = { initial: false, valid: true };
              genC += 1;
            } else {
              genI[key] = { initial: false, valid: false };
            }
          }
          break;
        }
        case 'email': {
          if (value.length) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            const v = re.test(String(value).toLowerCase());
            if (v) {
              genI[key] = { initial: false, valid: true };
              genC += 1;
            } else {
              genI[key] = { initial: false, valid: false };
            }
          }
          break;
        }
        default:
          break;
      }
    });
    setInputs(genI);
    setCount(genC);
  }, []);

  const sanitizeInputs = () => {
    const sanPerson = newPerson;
    Object.keys(newPerson).forEach(key => {
      const value = newPerson[key];

      switch (key) {
        case 'firstName':
        case 'lastName':
        case 'title':
        case 'email': {
          const v = value.trim();
          sanPerson[key] = v;
          break;
        }
        case 'directPhone':
        case 'mobilePhone': {
          const v = value.replace(/\D/g, '');
          const formattedV = `${v.slice(0, 3)}.${v.slice(3, 6)}.${v.slice(6)}`;
          sanPerson[key] = formattedV;
          break;
        }
        default:
          break;
      }
    });
    // dispatch({ type: actionTypes.SET_NEW_PERSON, payload: sanPerson });
    dispatch(setNewPerson(sanPerson));
    // dispatch({ type: actionTypes.SET_NEW_PERSON_ACTIVE, payload: true });
    dispatch(setNewPersonActive(true));
  };

  const onClickHandler = () => {
    if (count === 6) {
      sanitizeInputs();
      // setGenerate(false);
      // dispatch({ type: actionTypes.SET_GENERATE, payload: false });
      dispatch(setGenerate(false));
    }
  };

  const validateInput = attr => {
    setInputs({ ...inputs, [attr]: { ...inputs[attr], valid: true }});
    if (!inputs[attr].valid === true) {
      setCount(count + 1);
    }
  };

  const invalidateInput = attr => {
    setInputs({ ...inputs, [attr]: { ...inputs[attr], valid: false }});
    if (inputs[attr].valid) {
      setCount(count - 1);
    }
  };

  const validateInputs = event => {
    const { target } = event;
    const { value } = target;
    const attr = target.getAttribute('data-input');

    switch (attr) {
      case 'firstName':
      case 'lastName':
      case 'title': {
        const v = value.trim();
        if (v.length) {
          validateInput(attr);
        } else {
          invalidateInput(attr);
        }
        break;
      }
      case 'directPhone':
      case 'mobilePhone': {
        const v = value.replace(/\D/g, '');
        if (v.length === 10) {
          validateInput(attr);
        } else {
          invalidateInput(attr);
        }
        break;
      }
      case 'email': {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const v = re.test(String(value).toLowerCase());
        if (v) {
          validateInput(attr);
        } else {
          invalidateInput(attr);
        }
        break;
      }
      default:
        break;
    }
  };

  const onChangeHandler = event => {
    validateInputs(event);
    const { name, value } = event.target;
    const person = { ...newPerson, [name]: value };
    // setNewPerson({ active: false, person: { ...newPerson, [name]: value }});
    // dispatch({ type: actionTypes.SET_NEW_PERSON, payload: { ...newPerson, [name]: value }});
    dispatch(setNewPerson(person));
    // dispatch({ type: actionTypes.SET_NEW_PERSON_ACTIVE, payload: false });
    dispatch(setNewPersonActive(false));
  };

  const onBlurHandler = event => {
    const { target } = event;
    const attr = target.getAttribute('data-input');
    setInputs({ ...inputs, [attr]: { ...inputs[attr], initial: false }});
  };

  return (
    <section className="cell section generate-section">
      <div className="section-wrap generate-wrap">
        <div className="grid-x align-center align-top section-grid generate-grid">
          <div className="cell small-4 box generate-box">
            <div className="firstName-input">
              <input type="text" name="firstName" placeholder="First Name" onBlur={onBlurHandler} onChange={onChangeHandler} value={newPerson.firstName} data-input="firstName" />
              {
                !inputs.firstName.initial && !inputs.firstName.valid &&
                <p>Please enter your first name</p>
              }
            </div>

            <div className="lastName-input">
              <input type="text" name="lastName" placeholder="Last Name" onBlur={onBlurHandler} onChange={onChangeHandler} value={newPerson.lastName} data-input="lastName" />
              {
                !inputs.lastName.initial && !inputs.lastName.valid &&
                <p>Please enter your last name</p>
              }
            </div>

            <div className="title-input">
              <input type="text" name="title" placeholder="Title" onBlur={onBlurHandler} onChange={onChangeHandler} value={newPerson.title} data-input="title" />
              {
                !inputs.title.initial && !inputs.title.valid &&
                <p>Please enter your job title</p>
              }
            </div>

            <div className="dPhone-input">
              <input type="text" name="directPhone" placeholder="Direct Phone" onBlur={onBlurHandler} onChange={onChangeHandler} value={newPerson.directPhone} data-input="directPhone" />
              {
                !inputs.directPhone.initial && !inputs.directPhone.valid &&
                <p>Please enter a 10 digit phone number</p>
              }
            </div>

            <div className="mPhone-input">
              <input type="text" name="mobilePhone" placeholder="Mobile Phone" onBlur={onBlurHandler} onChange={onChangeHandler} value={newPerson.mobilePhone} data-input="mobilePhone" />
              {
                !inputs.mobilePhone.initial && !inputs.mobilePhone.valid &&
                <p>Please enter a 10 digit phone number</p>
              }
            </div>

            <div className="email-input">
              <input type="email" name="email" placeholder="Email" onBlur={onBlurHandler} onChange={onChangeHandler} value={newPerson.email} data-input="email" />
              {
                !inputs.email.initial && !inputs.email.valid &&
                <p>Please enter a valid email address</p>
              }
            </div>

            <Button onClick={onClickHandler} isDisabled={count < 6}>Generate</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

Generate.defaultProps = {
  // prop: 'default string',
};

Generate.propTypes = {
  newPerson: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    title: PropTypes.string,
    directPhone: PropTypes.string,
    mobilePhone: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default Generate;
