import PropTypes from 'prop-types';
import { Component } from 'react';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import { FormLabel } from './PhoneForm.styled';
import { Box } from 'components/Box/Box';

class PhoneForm extends Component {
  static propTypes = {
    addNewContact: PropTypes.func.isRequired,
  };

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
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        p={4}
        border="normal"
        as="form"
        onSubmit={this.submitForm}
      >
        <FormLabel>
          Name
          <Input
            display="block"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.inputChange}
          />
        </FormLabel>
        <FormLabel>
          Number
          <Input
            display="block"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.inputChange}
          />
        </FormLabel>
        <Button type="submit" width={185}>
          Add contact
        </Button>
      </Box>
    );
  }
}

export default PhoneForm;
