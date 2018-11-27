import React, { Component } from 'react';

import Modal from './modal/modal';

import './app.css';

class App extends Component {
  state = {
    showModal: false
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  render() {
    return (
      <div className="app">
        <button className="modal_opener" onClick={this.toggleModal}>
          Click Me! I Don't Bite... <span role="img" aria-label="emoji">😛</span>
        </button>
        
        <Modal
          show={this.state.showModal}
          closeCallback={this.toggleModal}
          customClass="custom_modal_class"
        >
          <React.Fragment>
            <h2>Told Ya!</h2>
            <iframe title="giphy" src="https://giphy.com/embed/l52CGyJ4LZPa0" width="480" height="273" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/sandler-sentences-sounding-l52CGyJ4LZPa0">via GIPHY</a></p>
          </React.Fragment>
        </Modal>
      </div>
    );
  }
}

export default App;
