import React from 'react';

function GuideMenubar() {

  return (
    <div className='guide-container'>
      <div className="guide-inner">
        <h2>가이드페이지</h2>
        <div className='guide-item'>
          <p className='guide-title'>1. 메뉴바
            <p className='guide-sub'>consult1 type 메뉴바입니다.</p>
          </p>
          <div className='flex'>
            <div className="menu_bar blue">
              <ul>
                <li className='active'>
                  <a href="#!">선별평가결과</a>
                </li>
                <li>
                  <a href="#!">선별평가결과</a>
                </li>
                <li>
                  <a href="#!">선별평가결과</a>
                </li>
                <li>
                  <a href="#!">선별평가결과</a>
                </li>
              </ul>
            </div>
          </div>    
        </div>

        <div className='guide-item'>
          <p className='guide-title'>2. 메뉴바
            <p className='guide-sub'>consult2 type 메뉴바입니다.</p>
          </p>
          <div className='flex'>
            <div className="menu_bar green">
              <ul>
                <li className='title'>
                  정신건강교육
                </li>
                <li className='active'>
                  <a href="#!">선별평가결과</a>
                </li>
                <li>
                  <a href="#!">선별평가결과</a>
                </li>
                <li>
                  <a href="#!">선별평가결과</a>
                </li>
                <li>
                  <a href="#!">선별평가결과</a>
                </li>
              </ul>
            </div>
          </div>    
        </div>

        <div className='guide-item'>
          <p className='guide-title'>3. 메뉴바
            <p className='guide-sub'>consult2 type 메뉴바 두번째 타입 입니다.</p>
          </p>
          <div className='flex'>
            <div className="menu_bar gray">
              <ul>
                <li className='title'>
                  정신건강교육
                </li>
                <li className='active'>
                  <a href="#!">선별평가결과</a>
                </li>
                <li>
                  <a href="#!">선별평가결과</a>
                </li>
                <li>
                  <a href="#!">선별평가결과</a>
                </li>
                <li>
                  <a href="#!">선별평가결과</a>
                </li>
              </ul>
            </div>
          </div>    
        </div>
      </div>
    </div>
  );
}

export default GuideMenubar;
