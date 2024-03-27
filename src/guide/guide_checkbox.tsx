import React from 'react'
//import Table from '../components/checkbox'

function GuideCheckbox () {
  return (

    <div className='guide-container'>
      <div className="guide-inner">
        <h2>가이드페이지</h2>

        <div className='guide-item'>
          <p className='guide-title'>1. 기본타입 체크박스
            <p className='guide-sub'>기본타입 체크박스입니다.</p>
          </p>
          <div className='flex'>
            <div className="checkbox">
              <input id="agree" type="checkbox" />
              <label htmlFor="agree">
              </label>
            </div>
            <div className="checkbox">
              <input id="agree1" type="checkbox" />
              <label htmlFor="agree1">
              </label>
            </div>
          </div>
        </div>

        <div className='guide-item'>
          <p className='guide-title'>2. 텍스트가 있는 체크박스
            <p className='guide-sub'>체크박스에 텍스트가 있는 체크박스입니다.(가로형)</p>
          </p>
          <div className='flex'>
            <div className="checkbox with_txt">
              <input id="agree3" type="checkbox" />
              <label htmlFor="agree3">
                  <span>개인정보처리 방침에 따라 개인정보 수집ㆍ활용에 동의합니다.</span>
              </label>
            </div>
            <div className="checkbox with_txt">
              <input id="agree4" type="checkbox" />
                <label htmlFor="agree4">
                    <span>개인정보처리 방침에 따라 개인정보 수집ㆍ활용에 동의합니다.</span>
                </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GuideCheckbox