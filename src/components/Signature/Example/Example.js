import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { setSigEl } from '../../../store/actionCreators';
// import * as actionTypes from '../../../store/actionTypes';
import './Example.scss';

const Example = ({ activePerson, dispatch }) => {
  const {
    firstName,
    lastName,
    title,
    directPhone,
    mobilePhone,
    email,
  } = activePerson;

  const sigExRef = useRef();

  useEffect(() => {
    const sigExEl = sigExRef.current.outerHTML;
    // dispatch({ type: actionTypes.SET_SIG_EL, payload: sigExEl });
    dispatch(setSigEl(sigExEl));
  }, [activePerson]);

  return (
    <div className="cell shrink table-wrap">
      <table
        width="320"
        border="0"
        cellSpacing="0"
        cellPadding="0"
        ref={sigExRef}
        style={{
          fontFamily: 'Arial, Helvetica, sans-serif',
          fontSize: '11px',
          color: '#797979',
          letterSpacing: '1px',
          textDecoration: 'none !important',
          textAlign: 'left',
        }}
      >
        <tbody>
          <tr>
            <td colSpan="2">&nbsp;</td>
          </tr>

          <tr>
            <td colSpan="2">
              <span style={{ color: '#018DBA', fontWeight: 700, textTransform: 'uppercase' }}>{`${firstName} ${lastName}`}</span>
              <span style={{ color: '#797979', fontWeight: 700 }}> / </span>
              <span style={{ textTransform: 'uppercase' }}>{title}</span>
            </td>
          </tr>

          <tr>
            <td height="7" colSpan="2" style={{ height: '7px', lineHeight: '7px' }}>&nbsp;</td>
          </tr>

          <tr>
            <td
              height="9"
              colSpan="2"
              style={{
                display: 'table-cell',
                borderTop: '1px solid #cecece',
                height: '9px',
                lineHeight: '9px',
                margin: '0px',
                paddingRight: '50px',
                fontSize: '0px',
              }}
            >
              &nbsp;
            </td>
          </tr>

          <tr>
            <td colSpan="2">
              <img src="http://www.evo-lite.com/misc/signature/evo-email-signature-logo.jpg" width="198" height="43" alt="evo email signature logo" />
            </td>
          </tr>

          <tr>
            <td height="30" colSpan="2" style={{ letterSpacing: '0px' }}>
              1393 S Santa Fe Dr Denver, CO 80223
            </td>
          </tr>

          <tr>
            <td
              width="75"
              height="13"
              style={{
                display: 'table-cell',
                verticalAlign: 'middle',
                backgroundColor: '#018dba',
                color: '#fff',
                borderBottom: '3px solid #fff',
                textAlign: 'left',
                padding: '1px 1px 1px 4px',
              }}
            >
              Direct
            </td>

            <td width="235" style={{ paddingLeft: '10px', borderBottom: '1px solid #fff' }}>
              <a
                href={`tel:${directPhone}`}
                style={{
                  color: '#797979',
                  textDecoration: 'none !important',
                  borderBottom: '0px',
                }}
              >
                {directPhone}
              </a>
            </td>
          </tr>

          <tr>
            <td
              width="75"
              height="13"
              style={{
                display: 'table-cell',
                verticalAlign: 'middle',
                backgroundColor: '#018dba',
                color: '#fff',
                borderBottom: '3px solid #fff',
                textAlign: 'left',
                padding: '1px 1px 1px 4px',
              }}
            >
              Mobile
            </td>

            <td width="235" style={{ paddingLeft: '10px', borderBottom: '1px solid #fff' }}>
              <a
                href={`tel:${mobilePhone}`}
                style={{
                  color: '#797979',
                  textDecoration: 'none !important',
                  borderBottom: '0px',
                }}
              >
                {mobilePhone}
              </a>
            </td>
          </tr>

          <tr>
            <td
              width="75"
              height="13"
              style={{
                display: 'table-cell',
                verticalAlign: 'middle',
                backgroundColor: '#018dba',
                color: '#fff',
                borderBottom: '3px solid #fff',
                textAlign: 'left',
                padding: '1px 1px 1px 4px',
              }}
            >
              Toll-Free
            </td>

            <td width="235" style={{ paddingLeft: '10px', borderBottom: '1px solid #fff' }}>
              <a
                href="tel:888.887.2980"
                style={{
                  color: '#797979',
                  textDecoration: 'none !important',
                  borderBottom: '0px',
                }}
              >
                888.887.2980
              </a>
            </td>
          </tr>

          <tr>
            <td
              width="75"
              height="13"
              style={{
                display: 'table-cell',
                verticalAlign: 'middle',
                backgroundColor: '#018dba',
                color: '#fff',
                borderBottom: '3px solid #fff',
                textAlign: 'left',
                padding: '1px 1px 1px 4px',
              }}
            >
              Email
            </td>

            <td width="235" style={{ paddingLeft: '10px', borderBottom: '2px solid #fff' }}>
              <a
                href={`mailto:${email}`}
                style={{
                  color: '#797979',
                  textDecoration: 'none !important',
                  borderBottom: '0px',
                }}
              >
                {email}
              </a>
            </td>
          </tr>

          <tr>
            <td
              width="75"
              height="13"
              style={{
                display: 'table-cell',
                verticalAlign: 'middle',
                backgroundColor: '#018dba',
                color: '#fff',
                borderBottom: '3px solid #fff',
                textAlign: 'left',
                padding: '1px 1px 1px 4px',
              }}
            >
              Web
            </td>

            <td width="235" style={{ paddingLeft: '10px', borderBottom: '2px solid #fff' }}>
              <a
                href="http://www.evo-lite.com"
                style={{
                  color: '#797979',
                  textDecoration: 'none !important',
                }}
              >
                www.evo-lite.com
              </a>
            </td>
          </tr>

          <tr>
            <td colSpan="2">
              <table>
                <tbody>
                  <tr>
                    <td
                      width="32"
                      height="26"
                      style={{
                        display: 'table-cell',
                        verticalAlign: 'bottom',
                      }}
                    >
                      <a href="https://twitter.com/evolitellc" style={{ textDecoration: 'none', textAlign: 'center' }}>
                        <img src="http://www.evo-lite.com/misc/signature/twitter.jpg" height="16" width="16" alt="twitter" />
                      </a>
                    </td>

                    <td
                      width="32"
                      height="26"
                      style={{
                        display: 'table-cell',
                        verticalAlign: 'bottom',
                      }}
                    >
                      <a href="https://www.facebook.com/pages/Evo-Lite/111984808878202" style={{ textDecoration: 'none', textAlign: 'center' }}>
                        <img src="http://www.evo-lite.com/misc/signature/facebook.jpg" height="16" width="16" alt="facebook" />
                      </a>
                    </td>

                    <td
                      width="32"
                      height="26"
                      style={{
                        display: 'table-cell',
                        verticalAlign: 'bottom',
                      }}
                    >
                      <a href="https://www.pinterest.com/evolite/" style={{ textDecoration: 'none', textAlign: 'center' }}>
                        <img src="http://www.evo-lite.com/misc/signature/pinterest.jpg" height="16" width="16" alt="pinterest" />
                      </a>
                    </td>

                    <td
                      width="32"
                      height="26"
                      style={{
                        display: 'table-cell',
                        verticalAlign: 'bottom',
                      }}
                    >
                      <a href="https://www.linkedin.com/company/evo-lite-llc" style={{ textDecoration: 'none', textAlign: 'center' }}>
                        <img src="http://www.evo-lite.com/misc/signature/linkedin.jpg" height="16" width="16" alt="linkedin" />
                      </a>
                    </td>

                    <td
                      width="32"
                      height="26"
                      style={{
                        display: 'table-cell',
                        verticalAlign: 'bottom',
                      }}
                    >
                      <a href="https://www.houzz.com/user/evolite" style={{ textDecoration: 'none', textAlign: 'center' }}>
                        <img src="http://www.evo-lite.com/misc/signature/houzz.jpg" height="16" width="16" alt="houzz" />
                      </a>
                    </td>

                    <td
                      width="32"
                      height="26"
                      style={{
                        display: 'table-cell',
                        verticalAlign: 'bottom',
                      }}
                    >
                      <a href="https://www.instagram.com/evolitellc/" style={{ textDecoration: 'none', textAlign: 'center' }}>
                        <img src="http://www.evo-lite.com/misc/signature/instagram.jpg" height="16" width="16" alt="instagram" />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          <tr>
            <td colSpan="2" width="310" height="110" style={{ verticalAlign: 'bottom' }}>
              <a href="http://www.evo-lite.com/misc/signature/">
                <img src="http://www.evo-lite.com/misc/signature/email-sig-ad.jpg" alt="Special Announcement" />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

Example.defaultProps = {
  // prop: 'default string',
};

Example.propTypes = {
  activePerson: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    title: PropTypes.string,
    directPhone: PropTypes.string,
    cellPhone: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default Example;
