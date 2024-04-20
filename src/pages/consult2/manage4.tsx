import React, {useState, ChangeEvent} from 'react'

import Aside from '../../components/aside'
import Pagenation from '../../components/pagenation';
import Searchbox from '../../components/searchbox';

function Manage4 () {
  //selectbox
  const [isOpen1, setIsOpen1] = useState(false);
  const [selectedItem1, setSelectedItem1] = useState<string>('NO');
  const [isOpen2, setIsOpen2] = useState(false);
  const [selectedItem2, setSelectedItem2] = useState<string>('이름'); 
  const [isOpen3, setIsOpen3] = useState(false);
  const [selectedItem3, setSelectedItem3] = useState<string>('5줄 보기'); 
  const [isOpen4, setIsOpen4] = useState(false);
  const [selectedItem4, setSelectedItem4] = useState<string>('생년월일'); 
  const [isOpen5, setIsOpen5] = useState(false);
  const [selectedItem5, setSelectedItem5] = useState<string>('성별'); 
  //selectbox
  const handleToggle1 = () => {
    setIsOpen1(!isOpen1);
  };
  const handleItemClick1 = (item: string) => { 
    setSelectedItem1(item);
    setIsOpen1(false);
  };
  const handleToggle2 = () => {
    setIsOpen2(!isOpen2);
  };
  const handleItemClick2 = (item: string) => { 
    setSelectedItem2(item);
    setIsOpen2(false);
  };
  const handleToggle3 = () => {
    setIsOpen3(!isOpen3);
  };
  const handleItemClick3 = (item: string) => { 
    setSelectedItem3(item);
    setIsOpen3(false);
  };
  const handleToggle4 = () => {
    setIsOpen4(!isOpen4);
  };
  const handleItemClick4 = (item: string) => { 
    setSelectedItem4(item);
    setIsOpen4(false);
  };
  const handleToggle5 = () => {
    setIsOpen5(!isOpen5);
  };
  const handleItemClick5= (item: string) => { 
    setSelectedItem5(item);
    setIsOpen5(false);
  };

  //textfield
  const [isActive, setIsActive] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isActive2, setIsActive2] = useState(false);
  const [inputValue2, setInputValue2] = useState('');
  const [isActive3, setIsActive3] = useState(false);
  const [inputValue3, setInputValue3] = useState('');
  const [isActive4, setIsActive4] = useState(false);
  const [inputValue4, setInputValue4] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setIsActive(event.target.value.length > 0);
  };
  const handleInputChange2 = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue2(event.target.value);
    setIsActive2(event.target.value.length > 0);
  };
  const handleInputChange3 = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue3(event.target.value);
    setIsActive3(event.target.value.length > 0);
  };
  const handleInputChange4 = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue4(event.target.value);
    setIsActive4(event.target.value.length > 0);
  };
  return (
    <div className="wrap">
      <Aside />
      <div className='contbody'>
        <div className="page-title">
          이용자 관리
        </div>
        <div className="body-inner">
          <div className="searchbox_spacer">
            <Searchbox />
          </div>
          <div className="utilbox">
            <ul className="active_line">
              {/* Note. 해당 li에 active 클래스 부여 */}
              <li className=''>
                <a href="#!">전체 선택</a>
              </li>
              <li className=''>
                <a href="#!">수정</a>
              </li>
              <li className=''>
                <a href="#!">삭제</a>
              </li>
            </ul>
            <button className='btn type-bg hover disabled'>
              이용자 등록 
              <em className='ico plus'></em>
            </button>
          </div>

          <div className="util_hiddenbox">
            <ul className="infobox">
              <li>
                <p className='fieldname'>이름</p>
                <div className={`textfield ${isActive ? 'on' : ''}`}>
                  <label htmlFor="textfield1" className='textfield_box'>
                    <input 
                      type="text"
                      id='textfield1'
                      value={inputValue}
                      onChange={handleInputChange}
                    />
                    <span className='textfield_place'>입력하세요</span>
                  </label>
                </div>
              </li>
              <li>
                <p className='fieldname'>아이디/이메일</p>
                <div className={`textfield ${isActive2 ? 'on' : ''}`}>
                  <label htmlFor="textfield2" className='textfield_box'>
                    <input 
                      type="text"
                      id='textfield2'
                      value={inputValue2}
                      onChange={handleInputChange2}
                    />
                    <span className='textfield_place'>입력하세요</span>
                  </label>
                </div>
              </li>
              <li>
                <p className='fieldname'>기관명</p>
                <div className={`textfield ${isActive3 ? 'on' : ''}`}>
                  <label htmlFor="textfield3" className='textfield_box'>
                    <input 
                      type="text"
                      id='textfield3'
                      value={inputValue3}
                      onChange={handleInputChange3}
                    />
                    <span className='textfield_place'>입력하세요</span>
                  </label>
                </div>
              </li>
              <li>
                <p className='fieldname'>연락처</p>
                <div className={`textfield ${isActive4 ? 'on' : ''}`}>
                  <label htmlFor="textfield4" className='textfield_box'>
                    <input 
                      type="text"
                      id='textfield4'
                      value={inputValue4}
                      onChange={handleInputChange4}
                    />
                    <span className='textfield_place'>입력하세요</span>
                  </label>
                </div>
              </li>
              <li>
                <p className='fieldname'>생년월일</p>
                <div className="selectbox">
                  <button className={`btn-select ${isOpen4 ? 'on' : ''}`} onClick={handleToggle4}>
                    <span>
                      {selectedItem4}
                    </span>
                    <i className='ico select_arrow down'></i>
                  </button>
                  <ul className={`list-member ${isOpen4 ? 'open' : ''}`}>
                    <li><button type="button" onClick={() => handleItemClick4('생년월일')}>생년월일</button></li>
                  </ul>
                </div>
              </li>
              <li>
                <p className='fieldname'>성별</p>
                <div className="selectbox">
                  <button className={`btn-select ${isOpen5 ? 'on' : ''}`} onClick={handleToggle5}>
                    <span>
                      {selectedItem5}
                    </span>
                    <i className='ico select_arrow down'></i>
                  </button>
                  <ul className={`list-member ${isOpen5 ? 'open' : ''}`}>
                    <li><button type="button" onClick={() => handleItemClick5('남자')}>남자</button></li>
                    <li><button type="button" onClick={() => handleItemClick5('여자')}>여자</button></li>
                  </ul>
                </div>
              </li>
            </ul>
            <button className='btn type-bg'>등록하기</button>
          </div>

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
                  <th>
                    <div className="selectbox updown color">
                      <button className={`btn-select ${isOpen2 ? 'on' : ''}`} onClick={handleToggle2}>
                        <span>
                          {selectedItem2}
                        </span>
                        <i className='ico select_arrow down'></i>
                      </button>
                      <ul className={`list-member ${isOpen2 ? 'open' : ''}`}>
                        <li><button type="button" onClick={() => handleItemClick2('오름차순')}>오름차순</button></li>
                        <li><button type="button" onClick={() => handleItemClick2('내림차순')}>내림차순</button></li>
                      </ul>
                    </div>
                  </th>
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
                  <td>
                    <div className="checkbox">
                      <input id="agree2" type="checkbox" />
                      <label htmlFor="agree2">
                      </label>
                    </div>
                  </td>
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
                  <td>
                    <div className="checkbox">
                      <input id="agree3" type="checkbox" />
                      <label htmlFor="agree3">
                      </label>
                    </div>
                  </td>
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
                  <td>
                    <div className="checkbox">
                      <input id="agree3" type="checkbox" />
                      <label htmlFor="agree3">
                      </label>
                    </div>
                  </td>
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
                  <td>
                    <div className="checkbox">
                      <input id="agree4" type="checkbox" />
                      <label htmlFor="agree4">
                      </label>
                    </div>
                  </td>
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
                  <td>
                    <div className="checkbox">
                      <input id="agree5" type="checkbox" />
                      <label htmlFor="agree5">
                      </label>
                    </div>
                  </td>
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

export default Manage4