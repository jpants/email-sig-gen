import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './SigHtml.scss';

const SigHtml = ({ sigEl }) => {
  const [ textareaVal, setTextareaVal ] = useState(sigEl);

  useEffect(() => {
    setTextareaVal(sigEl);
  }, [sigEl]);

  const changeHandler = event => {
    setTextareaVal(event.target.value);
  };

  return (
    <section className="cell section sigHtml-section">
      <div className="grid-x align-top section-grid sigHtml-grid">
        <div className="cell box sigHtml-box">
          <textarea name="sigHtml" id="sigHtml" cols="100" rows="30" value={textareaVal} onChange={changeHandler} />
        </div>
      </div>
    </section>
  );
};

SigHtml.defaultProps = {
  // html: 'default string',
};

SigHtml.propTypes = {
  sigEl: PropTypes.string.isRequired,
};

export default SigHtml;
