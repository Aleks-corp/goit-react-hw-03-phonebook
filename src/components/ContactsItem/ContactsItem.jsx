import { Thumb } from './ContactsItem.styled';

export const ContactsItem = ({ name, number, deleteContactItem }) => {
  return (
    <>
      <Thumb>
        {name}: {number}
      </Thumb>
      <button type="button" onClick={() => deleteContactItem(name)}>
        Delete
      </button>
    </>
  );
};
