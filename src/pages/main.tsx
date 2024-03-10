import React from 'react'
import { Link } from 'react-router-dom';

function Main () {
  return (
    <div className='mainpage-link'>
      <h2 className='page-title'>홈입니다.</h2>
      <div className="flex">
        <Link to="/guide/guidelink" className='link'>가이드 페이지</Link>
        <Link to="/pages/page_list" className='link'>페이지 진행도</Link>
        <Link to="/pages/pagesouter" className='link'>샘플 바로가기</Link>
      </div>
    </div>
  )
}

export default Main