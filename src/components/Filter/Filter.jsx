import { Component } from 'react';
import { Input } from 'components/Phonebook/Phonebook.styled';
import { Label } from './Filter,styled';

export class FilterContacts extends Component {
  state = {
    filter: '',
  };
  filterContactsHandler = e => {
    this.setState({ filter: e.currentTarget.value });
    this.props.filterContactsHandler(e.currentTarget.value);
  };
  render() {
    return (
      <Label>
        Find contacts by name
        <Input
          type="text"
          name="filter"
          value={this.state.filter}
          onChange={this.filterContactsHandler}
        />
      </Label>
    );
  }
}
