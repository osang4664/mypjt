import React, { useState } from 'react';

function GuideSelectbox() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [selectedItem1, setSelectedItem1] = useState<string>('5줄 보기'); 

  const [isOpen2, setIsOpen2] = useState(false);
  const [selectedItem2Title, setSelectedItem2Title] = useState<string>('1차');
  const [selectedItem2Date, setSelectedItem2Date] = useState<string>('2023-07-20');

  const [isOpen3, setIsOpen3] = useState(false);
  const [selectedItem3, setSelectedItem3] = useState<string>('이름'); 

  const [isOpen4, setIsOpen4] = useState(false);
  const [selectedItem4, setSelectedItem4] = useState<string>('NO'); 

  const [isOpen5, setIsOpen5] = useState(false);
  const [selectedItem5, setSelectedItem5] = useState<string>('전체'); 

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

  const handleItemClick2 = (title: string, date: string) => { 
    setSelectedItem2Title(title);
    setSelectedItem2Date(date);
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

  const handleItemClick5 = (item: string) => { 
    setSelectedItem5(item);
    setIsOpen5(false);
  };

  return (
    <div className='guide-container'>
      <div className="guide-inner">
        <h2>가이드페이지</h2>

        <div className='guide-item'>
          <p className='guide-title'>1. 기본타입 셀렉트박스
            <p className='guide-sub'>기본타입 셀렉트박스입니다.</p>
          </p>
          <div className='flex'>
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
          </div>
        </div>

        <div className='guide-item'>
          <p className='guide-title'>2. 화살표 모양이 다른 셀렉트박스
            <p className='guide-sub'>1체크박스에 텍스트가 있는 체크박스입니다.(가로형)</p>
          </p>
          <div className='flex'>
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
        </div>

        <div className='guide-item'>
          <p className='guide-title'>3. 이름 오름차순,내림차순
            <p className='guide-sub'>오른차순, 내림차순 셀렉트박스입니다.</p>
          </p>
          <div className='flex'>
            <div className="selectbox updown">
              <button className={`btn-select ${isOpen3 ? 'on' : ''}`} onClick=           {handleToggle3}>
                <span>
                  {selectedItem3}
                </span>
                <i className='ico select_arrow down'></i>
              </button>
              <ul className={`list-member ${isOpen3 ? 'open' : ''}`}>
                <li><button type="button" onClick={() => handleItemClick3('오름차순')}>오름차순</button></li>
                <li><button type="button" onClick={() => handleItemClick3('내림차순')}>내림차순</button></li>
              </ul>
            </div>
          </div>
        </div>

        <div className='guide-item'>
          <p className='guide-title'>4. 색상 오름차순,내림차순
            <p className='guide-sub'>색상있는 오른차순, 내림차순 셀렉트박스입니다.</p>
          </p>
          <div className='flex'>
            <div className="selectbox updown color">
              <button className={`btn-select ${isOpen4 ? 'on' : ''}`} onClick=           {handleToggle4}>
                <span>
                  {selectedItem4}
                </span>
                <i className='ico select_arrow down'></i>
              </button>
              <ul className={`list-member ${isOpen4 ? 'open' : ''}`}>
                <li><button type="button" onClick={() => handleItemClick4('오름차순')}>오름차순</button></li>
                <li><button type="button" onClick={() => handleItemClick4('내림차순')}>내림차순</button></li>
              </ul>
            </div>
          </div>
        </div>

        <div className='guide-item'>
          <p className='guide-title'>5. 한쪽 보더 타입
            <p className='guide-sub'>한쪽 보더 셀렉트박스입니다.</p>
          </p>
          <div className='flex'>
            <div className="selectbox round_left">
              <button className={`btn-select ${isOpen5 ? 'on' : ''}`} onClick=           {handleToggle5}>
                <span>
                  {selectedItem5}
                </span>
                <i className='ico select_arrow'></i>
              </button>
              <ul className={`list-member ${isOpen5 ? 'open' : ''}`}>
                <li><button type="button" onClick={() => handleItemClick5('기관')}>기관</button></li>
                <li><button type="button" onClick={() => handleItemClick5('이름')}>이름</button></li>
                <li><button type="button" onClick={() => handleItemClick5('아이디')}>아이디</button></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuideSelectbox;
