import React from 'react';
import styled from 'styled-components';

const BaseButton = styled.button`
  border-radius: 4px;
  cursor: pointer;
  padding: 4px 16px;
  font-size: 14px;
`;

const Button = styled(BaseButton)`
  background-color: ${(props) => props.theme.backgroundPrimary};

  :hover,
  :focus {
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.backgroundPrimary};
  }
`;

class ValidationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      name_error: '',
      email_error: '',
    };
  }

  validate() {
    let name_error = '';
    let email_error = '';

    if (!this.state.name) {
      name_error = 'please enter name';
    }
    if (!this.state.email) {
      email_error = 'please enter email';
    }

    const emailPattern = new RegExp(
      "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$",
    );

    if (this.state.email && !emailPattern.test(this.state.email)) {
      email_error = 'please enter valid email address';
    }

    if (name_error || email_error) {
      this.setState({ name_error, email_error });
      return false;
    }

    return true;
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
    this.validate();
  };

  submit = (e) => {
    e.preventDefault();
    if (this.validate()) {
      this.props.onSubmit(this.state);
      this.setState({
        firstName: '',
        lastName: '',
      });
    }
  };

  render() {
    return (
      <div>
        <form className="validation-form">
          <input
            type="text"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          {this.state.name_error && (
            <span className="error">{this.state.name_error}</span>
          )}
          <br />
          <input
            type="text"
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          {this.state.email_error && (
            <span className="error">{this.state.email_error}</span>
          )}
          <br />
          <Button onClick={this.submit}>Submit</Button>
        </form>
      </div>
    );
  }
}

export default ValidationForm;
