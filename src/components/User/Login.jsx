import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import {ReactComponent as ErrorIcon} from "../../assets/img/login/ErrorIcon.svg";

const Login = () => {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setUserEmail(e.target.value);
        if (e.target.value) {
            setEmailError(false)
            setLoginError('');
        }

    };

    const handlePasswordChange = (e) => {
        setUserPassword(e.target.value);
        if (e.target.value) {
            setPasswordError(false);
            setLoginError('');
        }

    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setEmailError(!userEmail);
        setPasswordError(!userPassword);

        if (!userEmail || !userPassword) {
            return;
        }

        try {
            const result = await axios.post('https://kavatar-api.duckdns.org/members/login', {
                email: userEmail,
                password: userPassword,
            });

            if (result.data.success) {
                localStorage.setItem('userData', JSON.stringify(result.data.data));
                navigate('/');
            }
        } catch (error) {
            console.error('로그인 실패:', error.response);
            setLoginError(error.response.data.message);
        }
    };

    return (
        <div className='Login_wrap'>
            <h1>로그인</h1>
            <form onSubmit={handleSubmit} className="main">
                <input
                    type="text"
                    className={emailError ? 'wrong' : ''}
                    value={userEmail}
                    onChange={handleEmailChange}
                    placeholder='아이디를 입력해주세요'
                />
                <input
                    type="password"
                    className={passwordError ? 'wrong' : ''}
                    value={userPassword}
                    onChange={handlePasswordChange}
                    placeholder='비밀번호를 입력해주세요'
                />
                <button type="submit">모험 떠나기</button>
                {(emailError || passwordError) && <p className='error-message'><ErrorIcon/>필수 입력 항목입니다.</p>}
                {!(emailError || passwordError) && loginError &&
                    <p className='error-message'><ErrorIcon/>{loginError}</p>}
            </form>
        </div>
    );
};

export default Login;
