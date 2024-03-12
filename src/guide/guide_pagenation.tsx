import React from 'react'
import Pagenation from '../components/pagenation';

function GuidePagenation () {

  return (
    <div className='guide-container'>
      <div className="guide-inner">
        <h2>pagenation</h2>
        <div className='guide-item'>
          <p className='guide-title'>1. 기본타입
            <p className='guide-sub'>기본타입입니다.</p>
          </p>
        </div>
        <Pagenation />
      </div>
    </div>
  )
}

export default GuidePagenation