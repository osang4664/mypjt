import React, { useState } from 'react'
import Aside from '../../components/aside'
import MenuBtn from '../../components/menubtn'

function Manage6 () {
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
          <MenuBtn/>
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

          <div className='btn_wrap mt30'>
            <button className='btn type-bg hover disabled'>
              삭제
            </button>
            <button className='btn type-line hover'>
              <em className='ico plus ico-black'></em>
              새로운 차수 생성
            </button>
          </div>

          <div className="table_wrap type_scroll">
            <div className="table_head">
              <div className='table_th check'>
                <p>전체선택</p>
                <div className="checkbox">
                  <input id="agree1" type="checkbox" />
                  <label htmlFor="agree1">
                  </label>
                </div>
              </div>
              <div className='table_th consult1'>CON-SULT1</div>
              <div className='table_th consult2'>CON-SULT2</div>
              <div className='table_th state'>진행상태</div>
              <div className='table_th detail'>상태보기</div>
            </div>
            <div className="table_body scroll-y">
              <div className="table_body_line">
                <div className="table_td check">
                  <div className="checkbox">
                    <input id="agree2" type="checkbox" />
                    <label htmlFor="agree2">
                    </label>
                  </div>
                  <p className="epi">1차</p>
                  <p className="">2023-04-26</p>
                </div>
                <div className="table_td consult1">
                  <div className='top'>선별평가결과</div>
                  <div className='bot'>
                    <div className="marked blue">
                      <em></em>
                      <p>2023-04-26</p>
                    </div>
                  </div>
                </div>
                <div className="table_td consult1">
                  <div className='top'>마음건강<br/>설문지결과</div>
                  <div className='bot'>
                    <div className="marked blue">
                      <em></em>
                      <p>2023-04-26</p>
                    </div>
                  </div>
                </div>
                <div className="table_td consult1">
                  <div className='top'>불안민감도<br/>VR평가결과</div>
                  <div className='bot'>
                    <div className="marked blue">
                      <em></em>
                      <p>2023-04-26</p>
                    </div>
                  </div>
                </div>
                <div className="table_td consult1">
                  <div className='top'>타액호르몬검사</div>
                  <div className='bot'>
                    <div className="marked blue">
                      <em></em>
                      <p>2023-04-26</p>
                    </div>
                  </div>
                </div>
                <div className="table_td consult2">
                  <div className='top'>타액호르몬검사</div>
                  <div className="depth_2">
                    <div className="mid">모바일 정신건강<br/>교육</div>
                    <div className='bot'>
                      <div className="marked green">
                        <em></em>
                        <p>2023-04-26</p>
                      </div>
                    </div>
                  </div>
                  <div className="depth_2">
                    <div className="mid">VR 스트레스<br/>관리방법</div>
                    <div className='bot'>
                      <div className="marked green">
                        <em></em>
                        <p>2023-04-26</p>
                      </div>
                    </div>
                  </div>
                  <div className="depth_2">
                    <div className="mid">모바일 스트레스<br/>관찰 일기</div>
                    <div className='bot'>
                      <div className="marked green">
                        <em></em>
                        <p>2023-04-26</p>
                      </div>
                    </div>
                  </div>
                  <div className="depth_2">
                    <div className="mid">VR 소진관리</div>
                    <div className='bot'>
                      <div className="marked green">
                        <em></em>
                        <p>2023-04-26</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="table_td consult2">
                  <div className='top'>심리사회적 중재</div>
                  <div className="depth_2">
                    <div className="mid">VR 마음챙김<br/>기술훈련</div>
                    <div className='bot'>
                      <div className="marked green">
                        <em></em>
                        <p>2023-04-26</p>
                      </div>
                    </div>
                  </div>
                  <div className="depth_2">
                    <div className="mid">VR 감정의<br/>이해와 흐름</div>
                    <div className='bot'>
                      <div className="marked green">
                        <em></em>
                        <p>2023-04-26</p>
                      </div>
                    </div>
                  </div>
                  <div className="depth_2">
                    <div className="mid">VR 힐링트립</div>
                    <div className='bot'>
                      <div className="marked green">
                        <em></em>
                        <p>2023-04-26</p>
                      </div>
                    </div>
                  </div>
                  <div className="depth_2">
                    <div className="mid">모바일 문제관리<br/>Plus+</div>
                    <div className='bot'>
                      <div className="marked green">
                        <em></em>
                        <p>2023-04-26</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Note. state에 클래스 추가하여 상태변경 */}
                {/* Note. 완료: fin, 진행중: ing, 강제종료: exit */}
                <div className="table_td state fin">
                  완료
                </div>
                <div className="table_td detail">
                  <a href="#!" className='btn type-line size-xsm'>
                    <span>자세히보기</span>
                    <em className='ico arrow_right ico-size-10 ico-black'></em> 
                  </a>
                </div>
              </div>
              <div className="table_body_line">
                <div className="table_td check">
                  <div className="checkbox">
                    <input id="agree2" type="checkbox" />
                    <label htmlFor="agree2">
                    </label>
                  </div>
                  <p className="epi">1차</p>
                  <p className="">2023-04-26</p>
                </div>
                <div className="table_td consult1">
                  <div className='top'>선별평가결과</div>
                  <div className='bot'>
                    <div className="marked blue">
                      <em></em>
                      <p>2023-04-26</p>
                    </div>
                  </div>
                </div>
                <div className="table_td consult1">
                  <div className='top'>마음건강<br/>설문지결과</div>
                  <div className='bot'>
                    <div className="marked blue">
                      <em></em>
                      <p>2023-04-26</p>
                    </div>
                  </div>
                </div>
                <div className="table_td consult1">
                  <div className='top'>불안민감도<br/>VR평가결과</div>
                  <div className='bot'>
                    <div className="marked blue">
                      <em></em>
                      <p>2023-04-26</p>
                    </div>
                  </div>
                </div>
                <div className="table_td consult1">
                  <div className='top'>타액호르몬검사</div>
                  <div className='bot'>
                    <div className="marked blue">
                      <em></em>
                      <p>2023-04-26</p>
                    </div>
                  </div>
                </div>
                <div className="table_td consult2">
                  <div className='top'>타액호르몬검사</div>
                  <div className="depth_2">
                    <div className="mid">모바일 정신건강<br/>교육</div>
                    <div className='bot'>
                      <div className="marked green">
                        <em></em>
                        <p>2023-04-26</p>
                      </div>
                    </div>
                  </div>
                  <div className="depth_2">
                    <div className="mid">VR 스트레스<br/>관리방법</div>
                    <div className='bot'>
                      <div className="marked green">
                        <em></em>
                        <p>2023-04-26</p>
                      </div>
                    </div>
                  </div>
                  <div className="depth_2">
                    <div className="mid">모바일 스트레스<br/>관찰 일기</div>
                    <div className='bot'>
                      <div className="marked green">
                        <em></em>
                        <p>2023-04-26</p>
                      </div>
                    </div>
                  </div>
                  <div className="depth_2">
                    <div className="mid">VR 소진관리</div>
                    <div className='bot'>
                      <div className="marked green">
                        <em></em>
                        <p>2023-04-26</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="table_td consult2">
                  <div className='top'>심리사회적 중재</div>
                  <div className="depth_2">
                    <div className="mid">VR 마음챙김<br/>기술훈련</div>
                    <div className='bot'>
                      <div className="marked green">
                        <em></em>
                        <p>2023-04-26</p>
                      </div>
                    </div>
                  </div>
                  <div className="depth_2">
                    <div className="mid">VR 감정의<br/>이해와 흐름</div>
                    <div className='bot'>
                      <div className="marked green">
                        <em></em>
                        <p>2023-04-26</p>
                      </div>
                    </div>
                  </div>
                  <div className="depth_2">
                    <div className="mid">VR 힐링트립</div>
                    <div className='bot'>
                      <div className="marked green">
                        <em></em>
                        <p>2023-04-26</p>
                      </div>
                    </div>
                  </div>
                  <div className="depth_2">
                    <div className="mid">모바일 문제관리<br/>Plus+</div>
                    <div className='bot'>
                      <div className="marked green">
                        <em></em>
                        <p>2023-04-26</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Note. state에 클래스 추가하여 상태변경 */}
                {/* Note. 완료: fin, 진행중: ing, 강제종료: exit */}
                <div className="table_td state exit">
                  강제종료
                  <button className='btn type-line size-xsm'>취소</button>
                </div>
                <div className="table_td detail">
                  <a href="#!" className='btn type-line size-xsm'>
                    <span>자세히보기</span>
                    <em className='ico arrow_right ico-size-10 ico-black'></em> 
                  </a>
                </div>
              </div>
              <div className="table_body_line">
                <div className="table_td check">
                  <div className="checkbox">
                    <input id="agree2" type="checkbox" />
                    <label htmlFor="agree2">
                    </label>
                  </div>
                  <p className="epi">1차</p>
                  <p className="">2023-04-26</p>
                </div>
                <div className="table_td consult1">
                  <div className='top'>선별평가결과</div>
                  <div className='bot'>
                    <div className="marked blue">
                      <em></em>
                      <p>2023-04-26</p>
                    </div>
                  </div>
                </div>
                <div className="table_td consult1">
                  <div className='top'>마음건강<br/>설문지결과</div>
                  <div className='bot'>
                    <div className="marked blue">
                      <em></em>
                      <p>2023-04-26</p>
                    </div>
                  </div>
                </div>
                <div className="table_td consult1">
                  <div className='top'>불안민감도<br/>VR평가결과</div>
                  <div className='bot'>
                    <div className="marked blue">
                      <em></em>
                      <p>2023-04-26</p>
                    </div>
                  </div>
                </div>
                <div className="table_td consult1">
                  <div className='top'>타액호르몬검사</div>
                  <div className='bot'>
                    <div className="marked blue">
                      <em></em>
                      <p>2023-04-26</p>
                    </div>
                  </div>
                </div>
                <div className="table_td consult2">
                  <div className='top'>타액호르몬검사</div>
                  <div className="depth_2">
                    <div className="mid">모바일 정신건강<br/>교육</div>
                    <div className='bot'>
                      <div className="marked green">
                        <em></em>
                        <p>2023-04-26</p>
                      </div>
                    </div>
                  </div>
                  <div className="depth_2">
                    <div className="mid">VR 스트레스<br/>관리방법</div>
                    <div className='bot'>
                      <div className="marked green">
                        <em></em>
                        <p>2023-04-26</p>
                      </div>
                    </div>
                  </div>
                  <div className="depth_2">
                    <div className="mid">모바일 스트레스<br/>관찰 일기</div>
                    <div className='bot'>
                      <div className="marked green">
                        <em></em>
                        <p>2023-04-26</p>
                      </div>
                    </div>
                  </div>
                  <div className="depth_2">
                    <div className="mid">VR 소진관리</div>
                    <div className='bot'>
                      <div className="marked green">
                        <em></em>
                        <p>2023-04-26</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="table_td consult2">
                  <div className='top'>심리사회적 중재</div>
                  <div className="depth_2">
                    <div className="mid">VR 마음챙김<br/>기술훈련</div>
                    <div className='bot'>
                      <div className="marked green">
                        <em></em>
                        <p>2023-04-26</p>
                      </div>
                    </div>
                  </div>
                  <div className="depth_2">
                    <div className="mid">VR 감정의<br/>이해와 흐름</div>
                    <div className='bot'>
                      <div className="marked green">
                        <em></em>
                        <p>2023-04-26</p>
                      </div>
                    </div>
                  </div>
                  <div className="depth_2">
                    <div className="mid">VR 힐링트립</div>
                    <div className='bot'>
                      <div className="marked green">
                        <em></em>
                        <p>2023-04-26</p>
                      </div>
                    </div>
                  </div>
                  <div className="depth_2">
                    <div className="mid">모바일 문제관리<br/>Plus+</div>
                    <div className='bot'>
                      <div className="marked green">
                        <em></em>
                        <p>2023-04-26</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Note. state에 클래스 추가하여 상태변경 */}
                {/* Note. 완료: fin, 진행중: ing, 강제종료: exit */}
                <div className="table_td state ing">
                  진행중
                  <button className='btn type-line size-xsm'>강제종료</button>
                </div>
                <div className="table_td detail">
                  <a href="#!" className='btn type-line size-xsm'>
                    <span>자세히보기</span>
                    <em className='ico arrow_right ico-size-10 ico-black'></em> 
                  </a>
                </div>
              </div>
              <div className="table_body_line">
                <div className="table_td check">
                  <div className="checkbox">
                    <input id="agree2" type="checkbox" />
                    <label htmlFor="agree2">
                    </label>
                  </div>
                  <p className="epi">1차</p>
                  <p className="">2023-04-26</p>
                </div>
                <div className="table_td consult1">
                  <div className='top'>선별평가결과</div>
                  <div className='bot'>
                    <div className="marked blue">
                      <em></em>
                      <p>2023-04-26</p>
                    </div>
                  </div>
                </div>
                <div className="table_td consult1">
                  <div className='top'>마음건강<br/>설문지결과</div>
                  <div className='bot'>
                    <div className="marked blue">
                      <em></em>
                      <p>2023-04-26</p>
                    </div>
                  </div>
                </div>
                <div className="table_td consult1">
                  <div className='top'>불안민감도<br/>VR평가결과</div>
                  <div className='bot'>
                    <div className="marked blue">
                      <em></em>
                      <p>2023-04-26</p>
                    </div>
                  </div>
                </div>
                <div className="table_td consult1">
                  <div className='top'>타액호르몬검사</div>
                  <div className='bot'>
                    <div className="marked blue">
                      <em></em>
                      <p>2023-04-26</p>
                    </div>
                  </div>
                </div>
                <div className="table_td consult2">
                  <div className='top'>타액호르몬검사</div>
                  <div className="depth_2">
                    <div className="mid">모바일 정신건강<br/>교육</div>
                    <div className='bot'>
                      <div className="marked green">
                        <em></em>
                        <p>2023-04-26</p>
                      </div>
                    </div>
                  </div>
                  <div className="depth_2">
                    <div className="mid">VR 스트레스<br/>관리방법</div>
                    <div className='bot'>
                      <div className="marked green">
                        <em></em>
                        <p>2023-04-26</p>
                      </div>
                    </div>
                  </div>
                  <div className="depth_2">
                    <div className="mid">모바일 스트레스<br/>관찰 일기</div>
                    <div className='bot'>
                      <div className="marked green">
                        <em></em>
                        <p>2023-04-26</p>
                      </div>
                    </div>
                  </div>
                  <div className="depth_2">
                    <div className="mid">VR 소진관리</div>
                    <div className='bot'>
                      <div className="marked green">
                        <em></em>
                        <p>2023-04-26</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="table_td consult2">
                  <div className='top'>심리사회적 중재</div>
                  <div className="depth_2">
                    <div className="mid">VR 마음챙김<br/>기술훈련</div>
                    <div className='bot'>
                      <div className="marked green">
                        <em></em>
                        <p>2023-04-26</p>
                      </div>
                    </div>
                  </div>
                  <div className="depth_2">
                    <div className="mid">VR 감정의<br/>이해와 흐름</div>
                    <div className='bot'>
                      <div className="marked green">
                        <em></em>
                        <p>2023-04-26</p>
                      </div>
                    </div>
                  </div>
                  <div className="depth_2">
                    <div className="mid">VR 힐링트립</div>
                    <div className='bot'>
                      <div className="marked green">
                        <em></em>
                        <p>2023-04-26</p>
                      </div>
                    </div>
                  </div>
                  <div className="depth_2">
                    <div className="mid">모바일 문제관리<br/>Plus+</div>
                    <div className='bot'>
                      <div className="marked green">
                        <em></em>
                        <p>2023-04-26</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Note. state에 클래스 추가하여 상태변경 */}
                {/* Note. 완료: fin, 진행중: ing, 강제종료: exit */}
                <div className="table_td state">
                  생성
                  <button className='btn type-line size-xsm'>강제종료</button>
                </div>
                <div className="table_td detail">
                  <a href="#!" className='btn type-line size-xsm'>
                    <span>자세히보기</span>
                    <em className='ico arrow_right ico-size-10 ico-black'></em> 
                  </a>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Manage6