import { Component } from 'react';
import { nanoid } from 'nanoid'

export default class ContactForm extends Component {
  state = {
    contacts: [],
    name: '',
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
      }),
      name: '',
    });
  };

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
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              onChange={this.handleInputChange}
              required
            />
          </label>
          <button onClick={this.handleBtnClick} type="button">
            Add contact
          </button>
        </form>
        <h2>Contacts</h2>
        <ul>
          {this.state.contacts.map(contact => (
            <li key={contact.id}>
              <p>{contact.name}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
