import { Component } from 'react';
import { nanoid } from 'nanoid';

export default class ContactForm extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleBtnClick = event => {
    this.setState({
      contacts: this.state.contacts.concat({
        id: nanoid(),
        name: this.state.name,
        number: this.state.number,
      }),
      name: '',
      number: '',
    });
  };

  contactData = {
    name: this.state.name,
    number: this.state.number,
  };

  onFilter = event => {
    this.setState({
      filter: event.target.value,
    })
  }

  render() {
    return (
      <div>
        <form>
          <h2>Phonebook</h2>
          <label>
            <p>Name</p>
            <input
              type="text"
              name="name"
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*$"
              title="Name may contain only letters, apostrophe, dash and spaces."
              onChange={this.handleInputChange}
              required
              
            />
          </label>
          <label>
            <p>Number</p>
            <input
              type="tel"
              name="number"
              value={this.state.number}
              pattern="[0-9\-]+"
              title="Phone number must be digits"
              onChange={this.handleInputChange}
              required
            
            />
          </label>
          <button onClick={this.handleBtnClick} type="button">
            Add contact
          </button>
        </form>
        <h2>Contacts</h2>
        <input 
        type='text' 
        name='filter' 
        value={this.state.filter}
        onChange={this.onFilter}>
        
        </input>
        <ul>
          {this.state.contacts.map(contact => (
            <li key={contact.id}>
              <p>
                {contact.name}: {contact.number}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
