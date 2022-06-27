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
   

    const newContact = {
      id: shortid(),
      name,
      number,
    };

   
  };

  deleteContact = contactID => {
    this.setState(prevState => {
      return {
      };
    });
  };

  changeInput = evt => {
    this.setState({});
  };

  visibleContacts = () => {
    const normalizeContact = this.state.filter.toLowerCase();

    
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
