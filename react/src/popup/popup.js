import React from 'react';
import PropTypes from 'prop-types';

import './popup.css';

const Popup = ({ children, customClass, show, closeCallback }) => (
  <div className={`popup ${customClass}`} style={{ display: show ? 'block' : 'none'}}>
    <div className="overlay" onClick={closeCallback}></div>
    <div className="popup_content">
      {children}
      <button title="Close" className="close_popup" onClick={closeCallback}>
        <i className="fas fa-times"></i>
      </button>
    </div>
  </div>
);

Popup.propTypes = {
  children: PropTypes.element,
  customClass: PropTypes.string,
  show: PropTypes.bool,
  closeCallback: PropTypes.func,
};

Popup.defaultProps = {
  children: <div>Empty Popup</div>,
  customClass: '',
  show: false,
  closeCallback: () => (false)
};

export default Popup;
