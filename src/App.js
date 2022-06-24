import { Component } from 'react';
import shortid from 'shortid';
import PhoneForm from 'components/PhoneForm/PhoneForm';
import Section from 'components/Section/Section';
import Container from 'components/Container/Container';


export class App extends Component {

  state = {
    contacts: [],
    
  }

  addNewContact = (userInfo) => {
    console.log(userInfo);

    this.setState((prevState) => {
      const newContact = {
        id: shortid(),
        name: userInfo.name,
        number: userInfo.number
      }

      return {
        contacts: [...prevState.contacts, newContact]
      }
    })
  }


  render() {
    return (
      <div>
        <Container>
          <Section title="Phonebook" >
            <PhoneForm addNewContact={this.addNewContact}  />
          </Section>
        </Container>
        
      </div>
    );
  }
}
