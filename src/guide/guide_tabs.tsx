import React, { useState } from 'react';

function GuideTabs() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabClick = (index: number) => {
    setSelectedTab(index);
  };

  return (
    <div className='guide-container'>
      <div className="guide-inner">
        <h2>가이드페이지</h2>

        <div className='guide-item'>
          <p className='guide-title'>1. 기본타입 탭
            <p className='guide-sub'>유저정보박스에 들어가는 탭입니다.</p>
          </p>
          <div className='flex'>
            <div className="tabs">
              <div className="tab">
                <ul>
                  <li onClick={() => handleTabClick(0)} className={selectedTab === 0 ? 'active' : ''}><a href="#!" >탭1</a></li>
                  <li onClick={() => handleTabClick(1)} className={selectedTab === 1 ? 'active' : ''}><a href="#!" >탭2</a></li>
                  <li onClick={() => handleTabClick(2)} className={selectedTab === 2 ? 'active' : ''}><a href="#!" >탭3</a></li>
                </ul>
              </div>
              <div className="tab-cont">
                <ul>
                  <li style={{ display: selectedTab === 0 ? 'block' : 'none' }}>탭1의 컨텐츠</li>
                  <li style={{ display: selectedTab === 1 ? 'block' : 'none' }}>탭2의 컨텐츠</li>
                  <li style={{ display: selectedTab === 2 ? 'block' : 'none' }}>탭3의 컨텐츠</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className='guide-item'>
          <p className='guide-title'>2. tab style2
            <p className='guide-sub'>con-sult에 들어가는 tab입니다.</p>
          </p>
          <div className='flex'>
            <div className="tabs tabs_type2">
              <div className="tab">
                <ul>
                  <li onClick={() => handleTabClick(0)} className={"consult1 " + (selectedTab === 0 ? 'active' : '')}>
                    <a href="#!" >
                      <span>CON-SULT 1</span>
                    </a>
                  </li>
                  <li onClick={() => handleTabClick(1)} className={"consult2 " + (selectedTab === 1 ? 'active' : '')}>
                    <a href="#!" >
                      <span>CON-SULT 2</span>
                    </a>
                  </li>
                </ul>
                <button className='btn type-line hover'>데이터 다운로드 (excel)</button>
              </div>
              <div className="tab-cont">
                <ul>
                  <li style={{ display: selectedTab === 0 ? 'flex' : 'none' }} className='contents_sub_title'>
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
                    <div className='result_btnwrap'>
                      <span>결과지 다운로드(pdf)</span>
                      <div className='btn_wrap'>
                        <button className='btn type-line hover'>선별평가</button>
                        <button className='btn type-line hover'>마음건강설문지</button>
                        <button className='btn type-line hover'>종합결과지</button>
                      </div>
                    </div>
                  </li>
                  <li style={{ display: selectedTab === 1 ? 'block' : 'none' }} className='contents_sub_title'>
                    <div className="menu_bar green">
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
                    <div className="menu_bar gray">
                      <ul>
                        <li className=''>
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
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuideTabs;
