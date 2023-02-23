import React, { Component } from 'react';
import ContactForm from './ContactForm';
class App extends Component {
  state = {
    contacts: [],
  };

  submitFormData = data => {
    console.log(data);
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          fontSize: 40,
          color: '#010101',
          marginTop: 40,
          marginLeft: 40,
        }}
      >
        <ContactForm onSubmit={this.submitFormData} />
      </div>
    );
  }
}

export default App;
