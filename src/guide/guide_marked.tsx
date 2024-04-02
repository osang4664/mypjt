import React from 'react'

function GuideMarked () {
  return (

    <div className='guide-container'>
      <div className="guide-inner">
        <h2>가이드페이지</h2>

        <div className='guide-item'>
          <p className='guide-title'>1. 표시되는 내용
            <p className='guide-sub'>기본타입/파란타입/초록타입</p>
          </p>
          <div className='flex'>
            <div className="marked">
              <em></em>
            </div>
            <div className="marked blue">
              <em></em>
            </div>
            <div className="marked green">
              <em></em>
            </div>
          </div>
        </div>

        <div className='guide-item'>
          <p className='guide-title'>2. 아래 텍스트 있을 때
            <p className='guide-sub'>기본타입/파란타입/초록타입</p>
          </p>
          <div className='flex'>
            <div className="marked">
              <em></em>
              <p>-</p>
            </div>
            <div className="marked blue">
              <em></em>
              <p>2023-04-26</p>
            </div>
            <div className="marked green">
              <em></em>
              <p>2023-04-26</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default GuideMarked