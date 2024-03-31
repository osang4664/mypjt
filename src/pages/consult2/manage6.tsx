import React, { useState } from 'react'

import Aside from '../../components/aside'
import Pagenation from '../../components/pagenation';

function Manage6 () {
  /* pagenation select */
  const [isOpen3, setIsOpen3] = useState(false);
  const [selectedItem3, setSelectedItem3] = useState<string>('5줄 보기');
  const handleToggle3 = () => {
    setIsOpen3(!isOpen3);
  };
  const handleItemClick3 = (item: string) => { 
    setSelectedItem3(item);
    setIsOpen3(false);
  };
  /* user selectbox */
  const [userInfoDate1, setUserInfoDate1] = useState(false);
  const [selectedDate1, setSelectedDate1] = useState<string>('2023년 4월'); 

  const handleUserInfoDate1 = () => {
    setUserInfoDate1(!userInfoDate1);
  };

  const sethandleDateClick1 = (item: string) => { 
    setSelectedDate1(item);
    setUserInfoDate1(false);
  };

  /* user tabs */
  const [selectedTab, setSelectedTab] = useState(0);
  const handleTabClick = (index: number) => {
    setSelectedTab(index);
  };

  return (
    <div className="wrap">
      <Aside />
      <div className='contbody'>
        <div className="page-title with-btn">
          이용자 관리
          <a href="#!" className='btn'>
            <i className='ico arrow_left'></i>
            뒤로가기
          </a>
        </div>
        <div className="body-inner">
          
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

          <div className="table_wrap">
            <table>
              <colgroup>
                <col width=""/>
              </colgroup>
              <thead>
                <tr>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="pagenation-box ">
            <Pagenation />
            <div className="selectbox">
              <button className={`btn-select ${isOpen3 ? 'on' : ''}`} onClick={handleToggle3}>
                <span>
                  {selectedItem3}
                </span>
                <i className='ico select_arrow down'></i>
              </button>
              <ul className={`list-member ${isOpen3 ? 'open' : ''}`}>
                <li><button type="button" onClick={() => handleItemClick3('Python')}>Python</button></li>
                <li><button type="button" onClick={() => handleItemClick3('Java')}>Java</button></li>
                <li><button type="button" onClick={() => handleItemClick3('JavaScript')}>JavaScript</button></li>
                <li><button type="button" onClick={() => handleItemClick3('C#')}>C#</button></li>
                <li><button type="button" onClick={() => handleItemClick3('C/C++')}>C/C++</button></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Manage6