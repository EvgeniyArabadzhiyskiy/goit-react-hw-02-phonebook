const ContactItem = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <span>{name}</span>
            <span>{number}</span>
            <button type="button" onClick={() => onDeleteContact(id)}>Delete</button>
          </li>
        );
      })}
    </div>
  );
};

export default ContactItem;
