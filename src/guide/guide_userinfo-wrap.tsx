import React, { useState } from 'react';

function GuideUserinfoWrap() {
  /* selectbox */
  const [userInfoDate1, setUserInfoDate1] = useState(false);
  const [selectedDate1, setSelectedDate1] = useState<string>('2023년 4월'); 

  const handleUserInfoDate1 = () => {
    setUserInfoDate1(!userInfoDate1);
  };

  const sethandleDateClick1 = (item: string) => { 
    setSelectedDate1(item);
    setUserInfoDate1(false);
  };

  /* tabs */
  const [selectedTab, setSelectedTab] = useState(0);
  const handleTabClick = (index: number) => {
    setSelectedTab(index);
  };

  return (
    <div className='guide-container'>
      <div className="guide-inner">
        <h2>가이드페이지</h2>
        <div className='guide-item'>
          <p className='guide-title'>1. 유저정보박스
            <p className='guide-sub'>consult1 유저정보 박스입니다.</p>
          </p>
          <div className='flex'>

            <div className="userinfo-wrap">
              <div className="box infobox">
                <p className="title">이용자 정보</p>
                <ul>
                  <li>
                    <span>이름</span>
                    <span>김강찬</span>
                  </li>
                  <li>
                    <span>생년월일</span>
                    <span>1990년 03월 20일</span>
                  </li>
                  <li>
                    <span>나이</span>
                    <span>33세</span>
                  </li>
                  <li>
                    <span>성별</span>
                    <span>남자</span>
                  </li>
                  <li>
                    <span>기관</span>
                    <span>메디마인드</span>
                  </li>
                  <li>
                    <span>이메일</span>
                    <span>ab@medimind.kr</span>
                  </li>
                </ul>
              </div>
              <div className="box graphbox">
                <div className="title">
                  차수별 변화 그래프
                  <div className="selectbox">
                    <button className={`btn-select ${userInfoDate1 ? 'on' : ''}`} onClick={handleUserInfoDate1}>
                      <span>
                        {selectedDate1}
                      </span>
                      <i className='ico select_arrow down'></i>
                    </button>
                    <ul className={`list-member ${userInfoDate1 ? 'open' : ''}`}>
                      <li><button type="button" onClick={() => sethandleDateClick1('2023년 4월')}>2023년 4월</button></li>
                    </ul>
                  </div>
                </div>
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
          </div>    
        </div>
        
      </div>
    </div>
  );
}

export default GuideUserinfoWrap;
