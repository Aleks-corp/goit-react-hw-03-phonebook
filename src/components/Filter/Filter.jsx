import PropTypes from 'prop-types';
import { Input } from 'components/Phonebook/Phonebook.styled';
import { Label } from './Filter,styled';

export const FilterContacts = ({ filterValue, filterContactsHandler }) => (
  <Label>
    Find contacts by name
    <Input
      type="text"
      name="filter"
      value={filterValue}
      onChange={filterContactsHandler}
    />
  </Label>
);

FilterContacts.propTypes = {
  filterValue: PropTypes.string,
};
