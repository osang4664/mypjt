import React, { useState } from 'react';
import Pagenation from './pagenation';
import Searchbox from './searchbox';

function Contbody () {
  const [isOpen1, setIsOpen1] = useState(false);
  const [selectedItem1, setSelectedItem1] = useState<string>('NO'); 

  const handleToggle1 = () => {
    setIsOpen1(!isOpen1);
  };
  const handleItemClick1 = (item: string) => { 
    setSelectedItem1(item);
    setIsOpen1(false);
  };
  return (
    <div className='contbody'>
      <div className="page-title">
        이용자 관리
      </div>
      <div className="body-inner">
        <Searchbox />
        <div className="utilbox">
          <ul className="active_line">
            {/* Note. 해당 li에 active 클래스 부여 */}
            <li className='active'>
              <a href="#!">전체 선택</a>
            </li>
            <li className=''>
              <a href="#!">수정</a>
            </li>
            <li className='active'>
              <a href="#!">삭제</a>
            </li>
            <li className='add_txt'>
              <a href="#!">5개 선택</a>
            </li>
          </ul>
          <button className='btn type-bg hover'>
            배경있는 버튼 
            <em className='ico plus'></em>
          </button>
        </div>
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
                <th>
                  <div className="checkbox">
                    <input id="agree1" type="checkbox" />
                    <label htmlFor="agree1">
                    </label>
                  </div>
                </th>
                <th>
                  <div className="selectbox updown color">
                    <button className={`btn-select ${isOpen1 ? 'on' : ''}`} onClick={handleToggle1}>
                      <span>
                        {selectedItem1}
                      </span>
                      <i className='ico select_arrow down'></i>
                    </button>
                    <ul className={`list-member ${isOpen1 ? 'open' : ''}`}>
                      <li><button type="button" onClick={() => handleItemClick1('오름차순')}>오름차순</button></li>
                      <li><button type="button" onClick={() => handleItemClick1('내림차순')}>내림차순</button></li>
                    </ul>
                  </div>
                </th>
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
        <Pagenation />
      </div>
    </div>
  )
}

export default Contbody