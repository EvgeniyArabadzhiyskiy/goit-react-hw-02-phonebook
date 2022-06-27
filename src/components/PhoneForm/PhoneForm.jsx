import PropTypes from 'prop-types';
import { Component } from 'react';
// import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
// import { FormLabel } from './PhoneForm.styled';
import { Box } from 'components/Box/Box';

class PhoneForm extends Component {
  static propTypes = {
    addNewContact: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    
  };

  inputChange = evt => {
    const { name, value } = evt.target;

    
  };

  submitForm = evt => {
    
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
       
       
        <Button type="submit" width={185}>
          Add contact
        </Button>
      </Box>
    );
  }
}

export default PhoneForm;
