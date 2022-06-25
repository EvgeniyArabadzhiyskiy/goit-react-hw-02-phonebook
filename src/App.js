import { Component } from 'react';
import shortid from 'shortid';

import Section from 'components/Section/Section';
import Container from 'components/Container/Container';
import PhoneForm from 'components/PhoneForm/PhoneForm';
import ContactList from 'components/ContactList/ContactList';
import FilterContacts from 'components/FilterContacts/FilterContacts';

const userContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  { id: 'id-5', name: 'Helen Rosso', number: '567-12-26' },
  { id: 'id-6', name: 'Henrih Cooper', number: '298-91-45' },
];

export class App extends Component {
  state = {
    contacts: userContacts,
    filter: '',
  };

  addNewContact = ({ name, number }) => {
    const contactNames = this.state.contacts.map(contact => contact.name)

    if (contactNames.includes(name)) {
      alert(`${name} is alredy in contacts`)
      return
    }

    const newContact = {
      id: shortid(),
      name,
      number,
    };

    this.setState(prevState => {
      return {
        contacts: [newContact, ...prevState.contacts ],
      };
    });
  };

  deleteContact = (contactID) => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({id}) => id !== contactID)
      }
    })

  }

  changeInput = evt => {
    this.setState({ filter: evt.target.value });
  };

  visibleContacts = () => {
    const normalizeContact = this.state.filter.toLowerCase();

    return this.state.contacts.filter(({ name }) => {
      return name?.toLowerCase().includes(normalizeContact);
    });
  };

  render() {
    const filtredContacts = this.visibleContacts();

    return (
      <div>
        <Container>
          <Section title="Phonebook">
            <PhoneForm addNewContact={this.addNewContact} />
          </Section>
          <Section title="Find contacts by name">
            <FilterContacts
              value={this.state.filter}
              onChangeInput={this.changeInput}
            />
          </Section>

          <Section title="Contacts">
            <ContactList contacts={filtredContacts} onDeleteContact={this.deleteContact} />
          </Section>
        </Container>
      </div>
    );
  }
}
