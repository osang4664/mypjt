import React from 'react'

function GuideRadiobox () {
  

  return (
    <div className='guide-container'>
      <div className="guide-inner">
        <h2>가이드페이지</h2>

        <div className='guide-item'>
          <p className='guide-title'>1. 기본타입 라디오박스
            <p className='guide-sub'>기본타입 라디오박스입니다.</p>
          </p>
          <div className='flex'>
            <div className="radio-box">
              <label className='radio-btn'>
                <input
                  type="radio"
                  name="radioGroup"
                  />
                <span className='dot'></span>
                <span className="text">2023-04-05</span>
              </label>
            </div>
            <div className="radio-box">
              <label className='radio-btn'>
                <input
                  type="radio"
                  name="radioGroup"
                  />
                <span className='dot'></span>
                <span className="text">2023-04-08</span>
              </label>
            </div>
          </div>
        </div>

        <div className='guide-item'>
          <p className='guide-title'>2. 색상타입 라디오박스
            <p className='guide-sub'>색상타입 라디오박스입니다. .radio-box에 클래스 추가(color-blue, color-green)</p>
          </p>
          <div className='flex'>
            <div className="radio-box color-blue">
              <label className='radio-btn'>
                <input
                  type="radio"
                  name="radioGroup1"
                  />
                <span className='dot'></span>
                <span className="text">2023-04-05</span>
              </label>
            </div>
            <div className="radio-box color-blue">
              <label className='radio-btn'>
                <input
                  type="radio"
                  name="radioGroup1"
                  />
                <span className='dot'></span>
                <span className="text">2023-04-08</span>
              </label>
            </div>

            {/* color green */}
            <div className="radio-box color-green">
              <label className='radio-btn'>
                <input
                  type="radio"
                  name="radioGroup2"
                  />
                <span className='dot'></span>
                <span className="text">2023-04-05</span>
              </label>
            </div>
            <div className="radio-box color-green">
              <label className='radio-btn'>
                <input
                  type="radio"
                  name="radioGroup2"
                  />
                <span className='dot'></span>
                <span className="text">2023-04-08</span>
              </label>
            </div>
          </div>
        </div>

        <div className='guide-item'>
          <p className='guide-title'>3. 라디오박스 아우터
            <p className='guide-sub'>라디오박스 아우터입니다.</p>
          </p>
          <div className='flex'>
            <div className="redio-box-outer">
              <div className="radio-box type-rec">
                <label className='radio-btn'>
                  <input
                    type="radio"
                    name="radioGroup3"
                    checked
                    />
                  <span className='dot'></span>
                  <span className="text">남자</span>
                </label>
                <label className='radio-btn'>
                  <input
                    type="radio"
                    name="radioGroup3"
                    />
                  <span className='dot'></span>
                  <span className="text">여자</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GuideRadiobox