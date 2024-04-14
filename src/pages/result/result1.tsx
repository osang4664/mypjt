import React, { useState, ChangeEvent } from 'react'
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

  /* table input */
  const [isActive, setIsActive] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const tableInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setIsActive(event.target.value.length > 0);
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
                <li style={{ display: selectedTab === 0 ? 'block' : 'none' }} className='contents_sub_title'>
                  <div className="flex_wrap">
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
                  </div>
                  <div className="result_wrap">
                    <div className="table_header">
                      <span className="title">선별평가결과</span>
                      <span className="date">날짜 : 2023-03-24 09:35:21</span>
                    </div>
                    <div className="table_wrap">
                      <table>
                        <colgroup>
                          <col width="204px"/>
                          <col width="204px"/>
                          <col width="204px"/>
                          <col width="204px"/>
                          <col width="204px"/>
                          <col width="508px"/>
                        </colgroup>
                        <thead>
                          <tr>
                            <th>진단이력</th>
                            <th>진단명</th>
                            <th>치료여부</th>
                            <th>상담 이력</th>
                            <th>상담 목적</th>
                            <th>상담 여부</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>예</td>
                            <td>q1</td>
                            <td>현재 치료중</td>
                            <td>예</td>
                            <td>1025 q2</td>
                            <td>과거에 치료 받았으나 현재는 치료받고 있지 않음</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="table_wrap">
                      <table>
                        <colgroup>
                          <col width="33.33%"/>
                          <col width="33.33%"/>
                          <col width="33.33%"/>
                        </colgroup>
                        <thead>
                          <tr>
                            <th>전반적 스트레스</th>
                            <th>불면</th>
                            <th>소진감</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>6</td>
                            <td>9</td>
                            <td>9</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="table_header mt40">
                      <span className="title">선별평가결과</span>
                      <span className="date">날짜 : 2023-03-24 09:35:21</span>
                    </div>
                    <div className="table_wrap">
                      <table>
                        <colgroup>
                          <col width="408px"/>
                          <col width="204px"/>
                          <col width="204px"/>
                          <col width="712px"/>
                        </colgroup>
                        <thead>
                          <tr>
                            <th>검사명</th>
                            <th>점수</th>
                            <th>결과</th>
                            <th>결과해석</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>외상 후 스트레스</td>
                            <td>9</td>
                            <td>심한 수준</td>
                            <td className='text-sm'>외상 사건과 관련된 반응으로 심한 불편감을 호소하고 있습니다. 평소보다 일상생활 외상 사건과 관련된 반응으로 심한 불편감을 호소하고 있습니다. 평소보다 일상생활</td>
                          </tr>
                          <tr>
                            <td>외상 후 스트레스</td>
                            <td>9</td>
                            <td>심한 수준</td>
                            <td className='text-sm'>외상 사건과 관련된 반응으로 심한 불편감을 호소하고 있습니다. 평소보다 일상생활 외상 사건과 관련된 반응으로 심한 불편감을 호소하고 있습니다. 평소보다 일상생활</td>
                          </tr>
                          <tr>
                            <td>외상 후 스트레스</td>
                            <td>9</td>
                            <td>심한 수준</td>
                            <td className='text-sm'>외상 사건과 관련된 반응으로 심한 불편감을 호소하고 있습니다. 평소보다 일상생활 외상 사건과 관련된 반응으로 심한 불편감을 호소하고 있습니다. 평소보다 일상생활</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="table_header mt40">
                      <span className="title">선별평가결과</span>
                      <span className="date">날짜 : 2023-03-24 09:35:21</span>
                    </div>
                    <div className="table_wrap">
                      <table>
                        <colgroup>
                          <col width=""/>
                          <col width=""/>
                          <col width=""/>
                          <col width=""/>
                          <col width=""/>
                          <col width=""/>
                          <col width=""/>
                          <col width=""/>
                          <col width=""/>
                          <col width=""/>
                          <col width=""/>
                          <col width=""/>
                          <col width=""/>
                        </colgroup>
                        <thead>
                          <tr>
                            <th rowSpan={2}>구분</th>
                            <th rowSpan={2}>시작 시간</th>
                            <th rowSpan={2}>공간</th>
                            <th rowSpan={2}>중단 시간(ms)</th>
                            <th rowSpan={2}>완료 시간(ms)</th>
                            <th colSpan={2}>긴장도(0-10)</th>
                            <th colSpan={3}>심박수 평균(bpm)</th>
                            <th rowSpan={2}>SDNN</th>
                            <th rowSpan={2}>LF / HF<br/>Radio</th>
                            <th rowSpan={2}>PSI</th>
                          </tr>
                          <tr>
                            <th>체험 전</th>
                            <th>체험 후</th>
                            <th>처험 전</th>
                            <th>체험 중</th>
                            <th>체험 후</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>폐소공간</td>
                            <td>09:23:33</td>
                            <td>극장</td>
                            <td>0</td>
                            <td>60000</td>
                            <td>0</td>
                            <td>0</td>
                            <td>131</td>
                            <td>132</td>
                            <td>122</td>
                            <td>123</td>
                            <td>121</td>
                            <td>103</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="table_header mt40">
                      <span className="title">선별평가결과</span>
                      <span className="date">날짜 : 2023-03-24 09:35:21</span>
                    </div>
                    <div className="table_wrap">
                      <table>
                        <colgroup>
                          <col width=""/>
                          <col width=""/>
                          <col width=""/>
                          <col width=""/>
                          <col width=""/>
                        </colgroup>
                        <thead>
                          <tr>
                            <th>구분</th>
                            <th>알람 일시</th>
                            <th>채취 일시</th>
                            <th>Cortisol</th>
                            <th>DHEA</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>저녁</td>
                            <td>2023-07-19 21:00</td>
                            <td>2023-07-19 21:00</td>
                            <td>
                              <div className={`textfield ${isActive ? 'on' : ''}`}>
                                <label htmlFor="textfield1" className='textfield_box'>
                                  <input 
                                    type="text"
                                    id='textfield1'
                                    value={inputValue}
                                    onChange={tableInputChange}
                                  />
                                  <span className='textfield_place'>입력하세요</span>
                                </label>
                              </div>
                            </td>
                            <td>
                              <div className={`textfield ${isActive ? 'on' : ''}`}>
                                <label htmlFor="textfield1" className='textfield_box'>
                                  <input 
                                    type="text"
                                    id='textfield1'
                                    value={inputValue}
                                    onChange={tableInputChange}
                                  />
                                  <span className='textfield_place'>입력하세요</span>
                                </label>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="btn_wrap align-right mt10">
                      <button className='btn type-line'>저장</button>
                    </div>

                    <div className="result_graphbox">
                      <div className="graphbox"></div>
                      <div className="guide_text">
                        <p className="title">코티솔/DHEA 상관관계 단계</p>
                        <ul>
                          <li>1. 정상 부신기능 상태</li>
                          <li>2. 정상 부신기능 상태 (단, 높은수치의 DHEA가 오래 지속될 경우 의학적 점검 필요)</li>
                          <li>3. 급성기 스트레스에 대한 부신 반응 단계</li>
                          <li>4. 지속되는 급성기 스트레스에 대하여 부산의 기능이 견디고 있는 단계</li>
                          <li>5. 지속되는 스트레스에 대한 1차 부신 저항단계</li>
                          <li>6. 지속되는 스트레스에 대한 2차 부신 저항단계</li>
                          <li>7.8.9. 부신피로단계 (만성적 스트레스로 인한 부신기능 소진상태)</li>
                        </ul>
                      </div>
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