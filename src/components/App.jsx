import { Component } from 'react';
import { Section } from './Section/Section';
import { Phonebook } from './Phonebook/Phonebook';
import { ContactsList } from './ContactsList/ContactsList';
import { FilterContacts } from './Filter/Filter';
import { nanoid } from 'nanoid';
import { contactsDefault } from '../contacts';

export class App extends Component {
  state = {
    contacts: [],
    filterValue: '',
  };
  componentDidMount() {
    this.setState({
      contacts: localStorage.getItem('phonebook-contacts')
        ? JSON.parse(localStorage.getItem('phonebook-contacts'))
        : contactsDefault,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(
        'phonebook-contacts',
        JSON.stringify(this.state.contacts)
      );
    }
  }
  onFormSubmit = newContact => {
    newContact.id = nanoid();
    const availableInContactsList = this.state.contacts.some(
      contact =>
        contact.name.toLowerCase().trim() ===
        newContact.name.toLowerCase().trim()
    );

    if (availableInContactsList) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    this.setState(state => ({
      contacts: [newContact, ...state.contacts],
    }));
  };

  filterContactsHandler = e => {
    this.setState({ filterValue: e.currentTarget.value });
  };

  deleteContactItem = id => {
    const contactsList = this.state.contacts.filter(
      contact => contact.id !== id
    );
    this.setState(() => ({
      contacts: [...contactsList],
    }));
  };

  render() {
    return (
      <div
        style={{
          display: 'block',
          marginLeft: '20px',
          fontSize: 24,
          color: '#010101',
        }}
      >
        <Section title="Phonebook">
          <Phonebook formSubmitHandler={this.onFormSubmit} />
        </Section>
        <Section title="Contacts">
          <FilterContacts
            filterValue={this.state.filterValue}
            filterContactsHandler={this.filterContactsHandler}
          />
          {this.state.contacts.length === 0 ? (
            <h2>Your PhoneBook is empty:(</h2>
          ) : (
            <ContactsList
              contactsArr={this.state.contacts}
              normalizedFilterValue={this.state.filterValue
                .toLowerCase()
                .trim()}
              deleteContactItem={this.deleteContactItem}
            />
          )}
        </Section>
      </div>
    );
  }
}
