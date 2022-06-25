import ContactItem from './ContactItem/ContactItem';
import { ListContact } from './ContactList.staled';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ListContact>
      <ContactItem contacts={contacts} onDeleteContact={onDeleteContact} />
    </ListContact>
  );
};

export default ContactList;
