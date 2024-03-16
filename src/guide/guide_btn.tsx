import React from 'react'

function GuideBtn () {
  return (

    <div className='guide-container'>
      <div className="guide-inner">
        <h2>가이드페이지</h2>

        <div className='guide-item'>
          <p className='guide-title'>1. 기본타입 버튼
            <p className='guide-sub'>기본타입 버튼입니다.</p>
          </p>
          <div className='flex'>
            <button className='btn type-bg'>배경있는 버튼</button>
            <button className='btn type-line'>라인있는 버튼</button>
          </div>
        </div>
        <div className='guide-item'>
          <p className='guide-title'>2. hover
            <p className='guide-sub'>hover 버튼입니다.</p>
          </p>
          <div className='flex'>
            <button className='btn type-bg hover'>배경있는 버튼</button>
            <button className='btn type-line hover'>라인있는 버튼</button>
          </div>
        </div>
        <div className='guide-item'>
          <p className='guide-title'>3. 아이콘 있는 버튼
            <p className='guide-sub'>아이콘 버튼입니다.</p>
          </p>
          <div className='flex'>
            <button className='btn type-bg hover'>
              배경있는 버튼 
              <em className='ico plus'></em>
            </button>
            <button className='btn type-line hover'>
              라인있는 버튼
              <em className='ico plus ico-black'></em>
            </button>
          </div>
        </div>
        <div className='guide-item'>
          <p className='guide-title'>4. disabled
            <p className='guide-sub'>disabled 버튼입니다.</p>
          </p>
          <div className='flex'>
            <button className='btn type-bg hover disabled'>
              배경있는 버튼 
              <em className='ico plus'></em>
            </button>
            <button className='btn type-line hover disabled'>
              라인있는 버튼
              <em className='ico plus ico-black'></em>
            </button>
          </div>
        </div>
        <div className='guide-item'>
          <p className='guide-title'>5. 버튼 사이즈
            <p className='guide-sub'>작은 사이즈부터 ~</p>
          </p>
          <div className='flex'>
            <button className='btn type-bg size-sm'>
              배경있는 버튼 
              <em className='ico plus'></em>
            </button>
            <button className='btn type-line size-sm'>
              라인있는 버튼
              <em className='ico plus ico-black'></em>
            </button>
          </div>
        </div>
        <div className='guide-item'>
          <p className='guide-title'>6. 큰 버튼
            <p className='guide-sub'>로그인 페이지에 사용됨</p>
          </p>
          <div className='flex'>
            <button className='btn type-bg size-lg'>
              로그인 
            </button>
          </div>
        </div>
        <div className='guide-item'>
          <p className='guide-title'>7. 기타
            <p className='guide-sub'>테이블 내부에 사용됨. 호버효과 있음</p>
          </p>
          <div className='flex'>
            <a href="#!" className='btn_tb'>
              <span>확인하기</span>
              <em className='ico arrow_right'></em> 
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GuideBtn