import Button from "components/Button/Button";
import { UserName, ContactBox, UserNumber } from "./ContactItem.styled";

const ContactItem = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactBox key={id}>
            <UserName>{name}:</UserName>
            <UserNumber>{number}</UserNumber>
            <Button  onClick={() => onDeleteContact(id)}>Delete</Button>
          </ContactBox>
        );
      })}
    </div>
  );
};

export default ContactItem;
