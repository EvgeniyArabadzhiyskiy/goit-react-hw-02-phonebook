import { Component } from 'react';
import './PhoneForm.css'

class PhoneForm extends Component {
  state = {
    name: '',
    number: '',
  };

  inputChange = evt => {
    const { name, value } = evt.target;

    this.setState({ [name]: value });
  };

  submitForm = evt => {
    evt.preventDefault();
    this.props.addNewContact(this.state);
  };

  render() {
    return (
      <div>
        <form className='phoneForm' onSubmit={this.submitForm}>
          <label className='formLabel'>
            Name
            <input
              className='formInput'
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.inputChange}
            />
          </label>
          <label className='formLabel'>
            Number
            <input
              className='formInput'
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.inputChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}

export default PhoneForm;
