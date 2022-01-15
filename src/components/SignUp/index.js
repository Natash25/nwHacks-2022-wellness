import { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
// import { withRouter } from 'react-router';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

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
        createUserWithEmailAndPassword(auth, email, passwordOne)
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
            <form onSubmit={this.onSubmit}>
                <input
                    name="username"
                    value={username}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Full Name"
                    />
                <input
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Email Address"
                />
                <input
                    name="passwordOne"
                    value={passwordOne}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Password"
                />
                <input
                    name="passwordTwo"
                    value={passwordTwo}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Confirm Password"
                />
                <button disabled={isInvalid} type="submit">Sign Up</button>

                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

const SignUpPage = () => (
    <div>
      <h1>SignUp</h1>
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