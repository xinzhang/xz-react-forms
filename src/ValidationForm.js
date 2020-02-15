import React from 'react';

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
      retur false;
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
          <button onClick={this.submit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default ValidationForm;