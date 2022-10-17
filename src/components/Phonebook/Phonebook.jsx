import { Component } from 'react';
import { Form, Input, Button } from './Phonebook.styled';

export class Phonebook extends Component {
  state = {
    name: '',
    number: '',
  };

  inputContactHandler = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  submitContactHandler = e => {
    e.preventDefault();
    this.props.formSubmitHandler(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <Form onSubmit={this.submitContactHandler}>
        <label>
          Name
          <Input
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.inputContactHandler}
          />
        </label>
        <label>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.inputContactHandler}
          />
        </label>
        <Button type="submit">Add contacts</Button>
      </Form>
    );
  }
}
