import React from 'react'
import Pagenation from './pagenation';

function Contbody () {
  return (
    <div className='contbody'>
      <div className="page-title">
        이용자 관리
      </div>
        <Pagenation />
        <div className='pagn-txt'>
          <span>00</span>페이지 중 <span>01</span> 페이지
        </div>
    </div>
  )
}

export default Contbody