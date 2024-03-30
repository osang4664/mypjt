import React, {useState, ChangeEvent} from 'react'

function GuideUtilbox () {
  //textfield
  const [isActive, setIsActive] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isActive2, setIsActive2] = useState(false);
  const [inputValue2, setInputValue2] = useState('');
  const [isActive3, setIsActive3] = useState(false);
  const [inputValue3, setInputValue3] = useState('');
  const [isActive4, setIsActive4] = useState(false);
  const [inputValue4, setInputValue4] = useState('');

  //selectbox
  const [isOpen1, setIsOpen1] = useState(false);
  const [selectedItem1, setSelectedItem1] = useState<string>('생년월일');
  const [isOpen2, setIsOpen2] = useState(false);
  const [selectedItem2, setSelectedItem2] = useState<string>('성별');


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
  return (
    <div className='guide-container'>
      <div className="guide-inner">
        <h2>가이드페이지</h2>

        <div className='guide-item'>
          <p className='guide-title'>1. 유틸박스
            <p className='guide-sub'>테이블 위에 사용되는 유틸박스입니다.</p>
          </p>
          <div className='flex'>
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
          </div>
        </div>
        
        <div className='guide-item'>
          <p className='guide-title'>2. 유틸박스
            <p className='guide-sub'>유틸박스 아래 히든컨텐츠 박스입니다.</p>
          </p>
          <div className='flex flex-column'>
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
                  <p className='fieldname'>기관명</p>
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
                    <button className={`btn-select ${isOpen1 ? 'on' : ''}`} onClick={handleToggle1}>
                      <span>
                        {selectedItem1}
                      </span>
                      <i className='ico select_arrow down'></i>
                    </button>
                    <ul className={`list-member ${isOpen1 ? 'open' : ''}`}>
                      <li><button type="button" onClick={() => handleItemClick1('Python')}>Python</button></li>
                      <li><button type="button" onClick={() => handleItemClick1('Java')}>Java</button></li>
                      <li><button type="button" onClick={() => handleItemClick1('JavaScript')}>JavaScript</button></li>
                      <li><button type="button" onClick={() => handleItemClick1('C#')}>C#</button></li>
                      <li><button type="button" onClick={() => handleItemClick1('C/C++')}>C/C++</button></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <p className='fieldname'>성별</p>
                  <div className="selectbox">
                    <button className={`btn-select ${isOpen2 ? 'on' : ''}`} onClick={handleToggle2}>
                      <span>
                        {selectedItem2}
                      </span>
                      <i className='ico select_arrow down'></i>
                    </button>
                    <ul className={`list-member ${isOpen1 ? 'open' : ''}`}>
                      <li><button type="button" onClick={() => handleItemClick2('Python')}>Python</button></li>
                      <li><button type="button" onClick={() => handleItemClick2('Python')}>Python</button></li>
                      <li><button type="button" onClick={() => handleItemClick2('Java')}>Java</button></li>
                      <li><button type="button" onClick={() => handleItemClick2('JavaScript')}>JavaScript</button></li>
                      <li><button type="button" onClick={() => handleItemClick2('C#')}>C#</button></li>
                      <li><button type="button" onClick={() => handleItemClick2('C/C++')}>C/C++</button></li>
                    </ul>
                  </div>
                </li>
              </ul>
              <button className='btn type-bg'>등록하기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GuideUtilbox