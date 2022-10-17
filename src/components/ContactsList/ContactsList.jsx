import { ContactsItem } from 'components/ContactsItem/ContactsItem';
import { ContactsListItem } from './ContactList.styled';

export const ContactsList = ({ contactsArr, filter, deleteContactItem }) => {
  return (
    <ul>
      {contactsArr.map(
        contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase().trim()) && (
            <ContactsListItem key={contact.id}>
              <ContactsItem
                name={contact.name}
                number={contact.number}
                deleteContactItem={deleteContactItem}
              />
            </ContactsListItem>
          )
      )}
    </ul>
  );
};
