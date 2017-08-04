import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return(
      <footer style={{ background: '#292b2c', position: 'fixed', bottom: '0', right: '0', left: '0'}}>
        <div className="text-center container-fluid">
          <p className="footer-text" style={{color: 'white', marginBottom: '0', padding: '.7rem'}}>MLHQ.io | Join us on slack!</p>
        </div>
      </footer>
    );
  }
}