import ContactItem from './ContactItem/ContactItem';
import { Box } from '../Box/Box';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <Box border="normal" p={4} as="ul">
      <ContactItem contacts={contacts} onDeleteContact={onDeleteContact} />
    </Box>
  );
};

export default ContactList;
