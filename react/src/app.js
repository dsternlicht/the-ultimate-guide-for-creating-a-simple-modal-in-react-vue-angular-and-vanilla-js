import React, { Component } from 'react';

import Popup from './popup/popup';

import './app.css';

class App extends Component {
  state = {
    showPopup: false
  }

  togglePopup = () => {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {
    return (
      <div className="app">
        <button className="popup_opener" onClick={this.togglePopup}>
          Click Me! I Don't Bite... <span role="img" aria-label="emoji">😛</span>
        </button>
        
        <Popup
          show={this.state.showPopup}
          closeCallback={this.togglePopup}
        >
          <React.Fragment>
            <h2>Told Ya!</h2>
            <iframe title="giphy" src="https://giphy.com/embed/l52CGyJ4LZPa0" width="480" height="273" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/sandler-sentences-sounding-l52CGyJ4LZPa0">via GIPHY</a></p>
          </React.Fragment>
        </Popup>
      </div>
    );
  }
}

export default App;
