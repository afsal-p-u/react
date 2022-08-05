import { useState } from "react";

import { 
    signInWithGooglePopup, 
    createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import './sign-in-form.styles.scss';

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    // console.log(formFields)

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        const {user} = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            

            resetFormFields();
            
        }catch(error){


        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({...formFields, [name]:value});
    };

    return(
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                
                <FormInput 
                    label="Email"
                    type="email" 
                    onChange={handleChange} 
                    name="email" 
                    required
                    value={email}
                />

                <FormInput 
                    label="Password"
                    type="password" 
                    onChange={handleChange} 
                    name="password" 
                    required
                    value={password}
                />

                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button buttonType='google' onClick={signInWithGoogle} >Google Sign In</Button>

                </div>

            </form>
        </div>
    );
};

export default SignInForm;