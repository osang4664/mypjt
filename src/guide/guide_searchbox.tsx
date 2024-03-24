import React from 'react'
import Searchbox from '../components/searchbox';

function GuideSearchbox () {

  return (
    <div className='guide-container'>
      <div className="guide-inner">
        <h2>searchbox</h2>
        <div className='guide-item'>
          <p className='guide-title'>1. 기본타입
            <p className='guide-sub'>기본타입입니다.</p>
          </p>
          <div className="flex">
            <Searchbox />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GuideSearchbox