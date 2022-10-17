import { ContactsItem } from 'components/ContactsItem/ContactsItem';
import { ContactsListItem } from './ContactList.styled';
import PropTypes from 'prop-types';

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

ContactsList.propTypes = {
  contactsArr: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  filter: PropTypes.string,
};
