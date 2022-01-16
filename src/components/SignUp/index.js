import { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
// import { withRouter } from 'react-router';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import {Image} from "semantic-ui-react";

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

class SignUpFormBase extends Component {
    // manages the form state in React's local state
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE }; // resets the state after a successful sign up
    }

    onSubmit = (event) => {
        const {
            username,
            email,
            passwordOne
        } = this.state;

        const auth = getAuth();
        const db = getFirestore();
        createUserWithEmailAndPassword(auth, email, passwordOne)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                setDoc(doc(db, "users", user.uid), {
                    name: username,
                    email: user.email,
                });
                console.log("New user added to firestore");
                this.setState({ ...INITIAL_STATE }); // empty the input fields as reset
                this.props.history.push(ROUTES.HOME); // re-direct to home, via withRouter
            })
            .catch((error) => {
                this.setState({ error: error });
                // ..
            });

        event.preventDefault();

    };

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        const isInvalid = passwordOne !== passwordTwo || passwordOne === '' || email === '' || username === '';

        return (
            <div >
              <form onSubmit={this.onSubmit} onSubmit={this.onSubmit} style={{display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center' }}>
                <input
                    name="username"
                    value={username}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Full Name"
                    style={{width: '25vw', height: '50px', margin: '10px', borderRadius: '5px', border: '1px solid #ccc',
                      padding: '25px'}}
                />
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
                    name="passwordOne"
                    value={passwordOne}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Password"
                    style={{width: '25vw', height: '50px', margin: '10px', borderRadius: '5px', border: '1px solid #ccc',
                      padding: '25px'}}
                />
                <input
                    name="passwordTwo"
                    value={passwordTwo}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Confirm Password"
                    style={{width: '25vw', height: '50px', margin: '10px', borderRadius: '5px', border: '1px solid #ccc',
                      padding: '25px'}}
                />
                <button
                    disabled={isInvalid}
                    type="submit"
                    style={{width: '10vw', margin: '10px', borderRadius: '5px', border: '2px solid black',
                      padding: '15px'}}
                >
                  Sign Up
                </button>

                {error && <p style={{color: 'red', margin: '10px'}}>The email address is badly formatted.</p>}
              </form>
            </div>
        );
    }
}

const SignUpPage = () => (
    <div style={{display: 'flex', flexDirection: 'column', height: '95vh', alignItems: 'center', justifyContent:
          'center' }}>
      <Image src="/img/logo.png" style={{width: '18vw'}}/>
      <h1 style={{fontSize: '5em'}}>SignUp</h1>
      <SignUpForm />
    </div>
  );

const SignUpLink = () => (
    <p>
        Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign up here</Link>
    </p>
);

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpPage;
export { SignUpForm, SignUpLink };
