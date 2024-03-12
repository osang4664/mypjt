import React from 'react'
import Table from '../components/table'

function GuideTable () {
  return (

    <div className='guide-container'>
      <div className="guide-inner">
        <h2>가이드페이지</h2>

        <div className='guide-item'>
          <p className='guide-title'>1. 기본타입 테이블
            <p className='guide-sub'>기본타입 테이블입니다.</p>
          </p>
          <div className='flex'>
            <Table />
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default GuideTable