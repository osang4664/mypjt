import React, { useState, ChangeEvent } from 'react'

function GuideTable () {
  /* textfield */
  const [EditActive1, setEditActive1] = useState(false);
  const [inputEdit1, setInputEdit1] = useState('');
  const [EditActive2, setEditActive2] = useState(false);
  const [inputEdit2, setInputEdit2] = useState('');
  
  /* textfield */
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputEdit1(event.target.value);
    setEditActive1(event.target.value.length > 0);
  };
  const handleInputChange2 = (event: ChangeEvent<HTMLInputElement>) => {
    setInputEdit2(event.target.value);
    setEditActive2(event.target.value.length > 0);
  };

  const [isActive, setIsActive] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const tableInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setIsActive(event.target.value.length > 0);
  };

  return (

    <div className='guide-container'>
      <div className="guide-inner">
        <h2>가이드페이지</h2>

        <div className='guide-item'>
          <p className='guide-title'>1. 기본타입 테이블
            <p className='guide-sub'>기본타입 테이블입니다.</p>
          </p>
          <div className='flex'>
            <div className="table_wrap">
              <table>
                {/* <colgroup>
                  <col width="20%"/>
                  <col width="20%"/>
                  <col width="20%"/>
                  <col width="20%"/>
                  <col width="20%"/>
                  <col width="20%"/>
                  <col width="20%"/>
                  <col width="20%"/>
                  <col width="20%"/>
                </colgroup> */}
                <thead>
                  <tr>
                    <th>checkbox</th>
                    <th>no selectbox</th>
                    <th>name selectbox</th>
                    <th>아이디/이메일</th>
                    <th>연락처</th>
                    <th>기관명</th>
                    <th>생년월일</th>
                    <th>성별</th>
                    <th>상세보기</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>checkbox</td>
                    <td>1</td>
                    <td>손이나</td>
                    <td>sonene@medimind.kr</td>
                    <td>010-1234-5678</td>
                    <td>메디마인드</td>
                    <td>1988-01-01</td>
                    <td>여자</td>
                    <td>
                      <a href="#!" className='btn_tb'>
                        <span>확인하기</span>
                        <em className='ico arrow_right'></em> 
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>내용1</td>
                    <td>내용1</td>
                    <td>내용1</td>
                    <td>내용1</td>
                    <td>내용1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className='guide-item'>
          <p className='guide-title'>2. 테이블 수정모드
            <p className='guide-sub'>테이블 수정모드 입니다.</p>
          </p>
          <div className='flex'>
            <div className="table_wrap">
              <table>
                <colgroup>
                  <col width="84px"/>
                  <col width="106px"/>
                  <col width="106px"/>
                  <col width="294px"/>
                  <col width="200px"/>
                  <col width="200px"/>
                  <col width="176px"/>
                  <col width="176px"/>
                  <col width=""/>
                </colgroup>
                
                <tbody>
                  <tr className='selected'>
                    <td>
                      <div className="checkbox">
                        <input id="agree" type="checkbox" />
                        <label htmlFor="agree">
                        </label>
                      </div>
                    </td>
                    <td>1</td>
                    <td>
                      <div className={`textfield ${EditActive1 ? 'on' : ''}`}>
                        <label htmlFor="textfield1" className='textfield_box'>
                          <input 
                            type="text"
                            id='textfield1'
                            value={inputEdit1}
                            onChange={handleInputChange}
                          />
                          <span className='textfield_place'>박재민</span>
                        </label>
                      </div>
                    </td>
                    <td>
                      <div className={`textfield ${EditActive2 ? 'on' : ''}`}>
                        <label htmlFor="textfield2" className='textfield_box'>
                          <input 
                            type="text"
                            id='textfield2'
                            value={inputEdit2}
                            onChange={handleInputChange2}
                          />
                          <span className='textfield_place'>이메일</span>
                        </label>
                      </div>
                    </td>
                    <td>sonene@medimind.kr</td>
                    <td>010-1234-5678</td>
                    <td>메디마인드</td>
                    <td>1988-01-01</td>
                    <td>여자</td>
                    <td>
                      <a href="#!" className='btn_tb'>
                        <span>확인하기</span>
                        <em className='ico arrow_right'></em> 
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>내용1</td>
                    <td>내용1</td>
                    <td>내용1</td>
                    <td>내용1</td>
                    <td>내용1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className='guide-item'>
          <p className='guide-title'>2. 테이블 수정모드
            <p className='guide-sub'>테이블 수정모드 입니다.</p>
          </p>
          <div className='flex'>
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
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default GuideTable