import React, { useState } from 'react'
import Aside from '../../components/aside'

function Result1 () {
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

  /* long selectbox */
  const [isOpen2, setIsOpen2] = useState(false);
  const [selectedItem2Title, setSelectedItem2Title] = useState<string>('1차');
  const [selectedItem2Date, setSelectedItem2Date] = useState<string>('2023-07-20');
  const handleToggle2 = () => {
    setIsOpen2(!isOpen2);
  };

  const handleItemClick2 = (title: string, date: string) => { 
    setSelectedItem2Title(title);
    setSelectedItem2Date(date);
    setIsOpen2(false);
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

          <div className="select_wrap mt30">
            <div className="selectbox long">
              <button className={`btn-select ${isOpen2 ? 'on' : ''}`} onClick={handleToggle2}>
                <div>
                  <span className='tit'>{selectedItem2Title}</span>
                  <span>{selectedItem2Date}</span>
                </div>
                <i className='ico select_arrow'></i>
              </button>
              <ul className={`list-member ${isOpen2 ? 'open' : ''}`}>
                <li>
                  <button type="button" onClick={() => handleItemClick2('1차', '2023-07-20')}>
                    <span className='tit'>1차</span>
                    <span>2023-07-20</span>
                  </button>
                </li>
                <li>
                  <button type="button" onClick={() => handleItemClick2('2차', '2023-07-21')}>
                    <span className='tit'>2차</span>
                    <span>2023-07-21</span>
                  </button>
                </li>
                <li>
                  <button type="button" onClick={() => handleItemClick2('3차', '2023-07-22')}>
                    <span className='tit'>3차</span>
                    <span>2023-07-22</span>
                  </button>
                </li>
                <li>
                  <button type="button" onClick={() => handleItemClick2('4차', '2023-07-23')}>
                    <span className='tit'>4차</span>
                    <span>2023-07-23</span>
                  </button>
                </li>
                <li>
                  <button type="button" onClick={() => handleItemClick2('5차', '2023-07-24')}>
                    <span className='tit'>5차</span>
                    <span>2023-07-24</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="tabs tabs_type2 mt10">
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
  )
}

export default Result1