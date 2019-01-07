import React, { Component } from 'react';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {email : '',
                  password :'',
                  password2 : '',
                  firstname : '',
                  lastname : '',
  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name] : event.target.value });
  }

  handleSubmit(event) {
    alert('Formulaire envoyé avec succés');
    console.log(this.state);
    event.preventDefault();
  }


  render() {
    return (
      <div>
        <h1>{JSON.stringify(this.state,1,1)}</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
           Ecris ton E mail et n'oulie pas le @ sinon tu vas prendre un message d'alerte !!!
          <h3>Email :<input type="email" name="email" value={this.state.mail} onChange={this.handleChange} /></h3>
          <h3>Password :<input type="text" name="password" value={this.state.password} onChange={this.handleChange} /></h3>
          <h3>Confirmation password :<input type="text" name="password2" value={this.state.password2} onChange={this.handleChange} /></h3>
          <h3>Prénom :<input type="text" name="firstname" value={this.state.firstname} onChange={this.handleChange} /></h3>
          <h3>Nom :<input type="text" name="lastname" value={this.state.lastname} onChange={this.handleChange} /></h3>

          </label>
          <input type="submit" value="Soumettre" />
        </form>
      </div>
    );
  }
}

export default Signup;
