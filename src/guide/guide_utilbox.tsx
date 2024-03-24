import React from 'react'

function GuideUtilbox () {
  return (

    <div className='guide-container'>
      <div className="guide-inner">
        <h2>가이드페이지</h2>

        <div className='guide-item'>
          <p className='guide-title'>1. 유탈박스
            <p className='guide-sub'>테이블 위에 사용되는 유틸박스입니다.</p>
          </p>
          <div className='flex'>
            <div className="utilbox">
              <ul className="active_line">
                {/* Note. 해당 li에 active 클래스 부여 */}
                <li className='active'>
                  <a href="#!">전체 선택</a>
                </li>
                <li className=''>
                  <a href="#!">수정</a>
                </li>
                <li className='active'>
                  <a href="#!">삭제</a>
                </li>
                <li className='add_txt'>
                  <a href="#!">5개 선택</a>
                </li>
              </ul>
              <button className='btn type-bg hover'>
                배경있는 버튼 
                <em className='ico plus'></em>
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default GuideUtilbox