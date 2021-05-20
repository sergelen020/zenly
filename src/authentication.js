import React, { useState, useEffect} from 'react';
import firebase, { firestore, auth} from './firebase';


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
        setLoading(true)
        const appVerifier = window.recaptchaVerifier;
        try {
            window.confirmationResult = await auth.signInWithPhoneNumber(`+976${input}`, appVerifier)
            setSentCode(true);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
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
        <div>
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
                        <button onClick={login}>log in</button>
                    </>
                )
            }

        </div>
    )
}

export default Auth;