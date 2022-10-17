import { ContactsItem } from 'components/ContactsItem/ContactsItem';
import { ContactsListItem } from './ContactList.styled';
import PropTypes from 'prop-types';

export const ContactsList = ({
  contactsArr,
  filterName,
  deleteContactItem,
}) => {
  const contactsList = filterName
    ? contactsArr.filter(contact =>
        contact.name.toLowerCase().includes(filterName.toLowerCase().trim())
      )
    : contactsArr;
  return (
    <ul>
      {contactsList.map(contact => (
        <ContactsListItem key={contact.id}>
          <ContactsItem
            name={contact.name}
            number={contact.number}
            deleteContactItem={deleteContactItem}
          />
        </ContactsListItem>
      ))}
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
  filterName: PropTypes.string,
};
