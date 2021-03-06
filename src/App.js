import { Component } from 'react';
import shortid from 'shortid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import userContacts from './userContacts';
import Section from 'components/Section/Section';
import Container from 'components/Container/Container';
import PhoneForm from 'components/PhoneForm/PhoneForm';
import ContactList from 'components/ContactList/ContactList';
import FilterContacts from 'components/FilterContacts/FilterContacts';

export class App extends Component {
  state = {
    contacts: userContacts,
    filter: '',
  };

  addNewContact = ({ name, number }) => {
    const foundТName = this.state.contacts.find(
      contact => contact.name === name
    );

    if (foundТName) {
      toast.error(`${name} is alredy in contacts`);
      return;
    }

    const newContact = {
      id: shortid(),
      name,
      number,
    };

    this.setState(prevState => {
      return {
        contacts: [newContact, ...prevState.contacts],
      };
    });
  };

  deleteContact = contactID => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactID),
      };
    });
  };

  changeInput = evt => {
    this.setState({ filter: evt.target.value });
  };

  visibleContacts = () => {
    const normalizeContact = this.state.filter.toLowerCase();

    return this.state.contacts.filter(({ name }) => {
      return name.toLowerCase().includes(normalizeContact);
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
            <ContactList
              contacts={filtredContacts}
              onDeleteContact={this.deleteContact}
            />
          </Section>
        </Container>
        <ToastContainer
          autoClose={3000}
          position="top-center"
          theme="colored"
          pauseOnHover
        />
      </div>
    );
  }
}
