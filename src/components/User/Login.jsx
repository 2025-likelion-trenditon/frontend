import React from 'react'

const Login = () => {
    return (
        <div className='Login_wrap'>
            <h1>로그인</h1>
            <div className="main">
                <input type="text" className='wrong' placeholder='아이디를 입력해주세요'/>
                <input type="password" placeholder='비밀번호를 입력해주세요'/>
                <button>모험 떠나기</button>
            </div>
        </div>
    )
}

export default Login