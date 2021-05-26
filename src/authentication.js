import React, { useState, useEffect} from 'react';
import App from './App'
import firebase, { firestore, auth} from './firebase';
import {Link} from "react-router-dom"
import './authentication.scss';

function Auth () {
    const [input, setInput] = useState('');
    const [confirmCode, setConfirmCode] = useState('');
    const [sentCode, setSentCode] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(()=> {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
        });
    }, []);

    const sendConfirmCode = async () => {
        const appVerifier = window.recaptchaVerifier;
        if(input.length === 8) {
            try {
                window.confirmationResult = await auth.signInWithPhoneNumber(`+976${input}`, appVerifier)
                setSentCode(true);
            } catch (e) {
                console.log(e);
            } finally {
                setLoading(false);
            }
        } else if( input.length ===0){
            alert ("please enter your phone number")
        } else {
            alert ("it must contain 8 digits")
        }
        
    }
    const login = async () => {
        try {
            const user = await window.confirmationResult.confirm(confirmCode);
        } catch(e) {
            alert("error")
        }
    }
    return (
        <div className="cont flex perfect center column auth">
            <h4>Log in using phone number</h4>
            <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="phone number"
            />
            <div id="sign-in-button"></div>
            {!sentCode && <button onClick={sendConfirmCode}>continue</button>}
            {
                sentCode && (
                    <>
                        <input
                            value={confirmCode}
                            onChange={(event) => setConfirmCode(event.target.value)}
                            placeholder="auth code"
                        />
                        <Link to="/login"><button onClick={login}>log in</button> </Link>
                    </>
                )
            }
        </div>
    )
}

export default Auth;