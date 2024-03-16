import React, { useState } from 'react';
import ImgLogo from '../assets/images/common/con-sult_logo_origin.png';

function Login () {
  const [isIdActive, setIdActive] = useState(false);
  const [isPasswordActive, setPasswordActive] = useState(false);

  const inputIdActive = () => {
    setIdActive(true);
  }

  const inputPasswordActive = () => {
    setPasswordActive(true);
  }

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      setIdActive(false);
    } else {
      setIdActive(true);
    }
  }
  
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      setPasswordActive(false);
    } else {
      setPasswordActive(true);
    }
  }
    
  return (
    <div className='container'>
      <div className="login_wrap">
        <div className="login_box">
          <div className="img_box">
              <img src={ImgLogo} alt="" />
          </div>
          <p className="pagename">관리자 페이지</p>
          <div className="input_info">
            <div className={`text_field ${isIdActive ? 'active' : ''}`} onClick={inputIdActive}>
              <span className="label">아이디</span>
              <input type="text" placeholder="아이디" onChange={handleIdChange} />
            </div>
            <div className={`text_field ${isPasswordActive ? 'active' : ''}`} onClick={inputPasswordActive}>
              <span className="label">비밀번호</span>
              <input type="password" placeholder="비밀번호" onChange={handlePasswordChange}/>
            </div>
            <button className='btn type-bg hover size-lg'>로그인</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Login
