import React from 'react';
import PropTypes from 'prop-types';

import './popup.css';

const Popup = ({ children, show, closeCallback }) => (
  <div className="popup" style={{ display: show ? 'block' : 'none'}}>
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
  show: PropTypes.bool,
  closeCallback: PropTypes.func.isRequired
};

Popup.defaultProps = {
  show: false,
  children: <div>Empty Popup</div>
};

export default Popup;
