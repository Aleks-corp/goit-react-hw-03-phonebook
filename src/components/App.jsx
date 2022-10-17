import { Component } from 'react';
import { Section } from './Section/Section';
import { Phonebook } from './Phonebook/Phonebook';
import { ContactsList } from './ContactsList/ContactsList';
import { FilterContacts } from './Filter/Filter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      { id: 'id-5', name: 'Aleks Cole', number: '533-23-76' },
    ],
    filter: '',
  };

  onFormSubmit = data => {
    data.id = nanoid();
    const availableInContactsList = this.state.contacts.some(
      contact =>
        contact.name.toLowerCase().trim() === data.name.toLowerCase().trim()
    );

    if (availableInContactsList) {
      alert(`${data.name} is already in contacts.`);
      return;
    }

    this.setState(state => ({
      contacts: [data, ...state.contacts],
    }));
  };

  filterContactsHandler = FilterName => {
    this.setState({ filter: FilterName });
  };

  deleteContactItem = name => {
    const contactsList = this.state.contacts.filter(
      contact => contact.name !== name
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
          <FilterContacts filterContactsHandler={this.filterContactsHandler} />
          <ContactsList
            contactsArr={this.state.contacts}
            filter={this.state.filter}
            deleteContactItem={this.deleteContactItem}
          />
        </Section>
      </div>
    );
  }
}
