import { Component } from 'react';
import { nanoid } from 'nanoid';
import s from './App.module.css';
import Contacts from './Contacts/Contacts';
import Phonebook from './Phonebook/Phonebook';
import Section from './Section/Section';
import Filter from './Filter/Filter';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  phonebookValue = (text, number) => {
    const { contacts } = this.state;

    const contact = {
      id: nanoid(),
      name: text,
      number,
    };

    if (contacts.map(e => e.name.toLowerCase()).includes(text.toLowerCase())) {
      return alert(`${text} is already in contacts`);
    }
    if (text !== '' && number !== '') {
      this.setState(prevState => {
        return {
          contacts: [...prevState.contacts, contact],
        };
      });
    } else {
      return alert('Fill in all the fields');
    }
  };

  contactFilter = e => {
    this.setState({ filter: e.target.value });
  };
  visibleContact = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(e =>
      e.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  deleteList = e => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== e),
      };
    });
  };

  render() {
    return (
      <div className={s.App}>
        <Section title="Phonebook">
          <Phonebook phonebookValue={this.phonebookValue} />
        </Section>
        <Section title="Contacts">
          <Filter filter={this.contactFilter} />
          <Contacts
            contacts={this.visibleContact()}
            deleteList={this.deleteList}
          />
        </Section>
      </div>
    );
  }
}