import React from 'react'

function Aside () {

  return (
    <aside className='aside'>
      <a href="#" className='logo'>
        <em></em>
      </a>
      <div className='light-box'>
        <p className='sub'>기관</p>
        <p className='name'>메디마인드</p>
      </div>
      <div className='user-box'>
        <p className='sub'>이름</p>
        <p className='name'>홍길동</p>
        <ul>
          <li>
            <span className='sub'>ID</span>
            <span className='font-weight-bold'>medimind123</span>
          </li>
          <li>
            <span className='sub'>관리자 등급</span>
            <span className='font-weight-bold'>대표관리자</span>
          </li>
        </ul>
      </div>
      
      <ul className='menu-list'>
        <li className='active'>
          <a href="#">이용자 관리</a>
        </li>
        <li>
          <a href="#">기관 보고서</a>
        </li>
      </ul>
      <button className='btn size-sm'>로그아웃</button>
    </aside>
  )
}

export default Aside