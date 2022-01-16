import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { SignUpLink } from '../SignUp';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import {Image} from "semantic-ui-react";

const SignInPage = () => (
  <div>
    <div style={{display: 'flex', flexDirection: 'column', height: '95vh', alignItems: 'center', justifyContent:
          'center' }}>
      <Image src="/img/logo.png" style={{width: '18vw'}}/>
      <h1 style={{fontSize: '5em'}}>Sign In</h1>
      <SignInForm />
      <SignUpLink />
    </div>
  </div>
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = async (event) => {
    const {
        username,
        email,
        password
    } = this.state;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          this.setState({ ...INITIAL_STATE }); // empty the input fields as reset
          this.props.history.push(ROUTES.HOME); // re-direct to home, via withRouter
          // ...
      })
      .catch((error) => {
          this.setState({ error: error });
          // ..
      });

      event.preventDefault();
};
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <div >
        <form onSubmit={this.onSubmit} style={{display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center' }}>
          <input
              name="email"
              value={email}
              onChange={this.onChange}
              type="text"
              placeholder="Email Address"
              style={{width: '25vw', height: '50px', margin: '10px', borderRadius: '5px', border: '1px solid #ccc',
                      padding: '25px'}}
          />
          <input
              name="password"
              value={password}
              onChange={this.onChange}
              type="password"
              placeholder="Password"
              style={{width: '25vw', height: '50px', margin: '10px', borderRadius: '5px', border: '1px solid #ccc',
                      padding: '25px'}}
          />
          <button
              disabled={isInvalid}
              type="submit"
              style={{width: '10vw', margin: '10px', borderRadius: '5px', border: '2px solid black',
                padding: '15px'}}
          >
            Sign In
          </button>

          {error && <p style={{color: 'red', margin: '10px'}}>The email address is badly formatted.</p>}
        </form>
      </div>
    );
  }
}

const SignInForm = withRouter(withFirebase(SignInFormBase));

export default SignInPage;

export { SignInForm };
