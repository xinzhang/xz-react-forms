import React from 'react';

class MyForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
    };
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  submit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      firstName: '',
      lastName: '',
    });
  };

  render() {
    return (
      <div>
        <form className="form">
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={this.state.lastName}
            onChange={this.handleChange}
          />

          <button onClick={this.submit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default MyForm;
