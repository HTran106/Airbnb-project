import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../../store/session';
import './SignupForm.css';

const SignupForm = () => {
    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [gridTemplate, setGridTemplate] = useState('repeat(6, 1fr)')
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState([]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);

        const res = dispatch(signup({ firstName, lastName, email, password }))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) {
                    setErrors(data.errors);
                    setGridTemplate('repeat(7, 1fr)')
                }
            });

        if (res.ok) {
            setErrors([])
            setGridTemplate('repeat(6, 1fr)')
            setEmail('')
            setPassword('')
            setFirstName('')
            setLastName('')
        }
    }

    return (
        <div style={{ display: 'grid', gridTemplateRows: { gridTemplate }, height: '100%' }} className="signup-form-container">
            <span className='signup-word'>Sign up</span>
            {errors.length !== 0 && (
                <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
            )}
            <div className='signup-inputs'>
                <input
                    style={{ borderRadius: '10px 10px 0 0' }}
                    type="text"
                    value={firstName}
                    placeholder="First Name"
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                ></input>
            </div>
            <div className='signup-inputs'>
                <input
                    type="text"
                    value={lastName}
                    placeholder="Last Name"
                    onChange={(e) => setLastName(e.target.value)}
                    required
                ></input>
            </div>
            <div className='signup-inputs'>
                <input
                    type="email"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                ></input>
            </div>
            <div className='signup-inputs'>
                <input
                    style={{ borderRadius: '0 0 10px 10px' }}
                    type="password"
                    value={password}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                ></input>
            </div>
            <div className='signup-submit-button'>
                <button onClick={handleSubmit} >Submit</button>
            </div>
        </div>
    )
}

export default SignupForm


//first name
//last name
// email
//password
