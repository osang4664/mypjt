import React, { useState } from 'react';

function GuideSelectbox() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string>('최애 프로그래밍'); // 문자열 타입으로 설정

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item: string) => { // 매개변수의 타입 명시
    setSelectedItem(item);
    setIsOpen(false);
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
              <button className={`btn-select ${isOpen ? 'on' : ''}`} onClick={handleToggle}>
                <span>
                  {selectedItem}
                </span>
                <i className='ico select_arrow down'></i>
              </button>
              <ul className={`list-member ${isOpen ? 'open' : ''}`}>
                <li><button type="button" onClick={() => handleItemClick('Python')}>Python</button></li>
                <li><button type="button" onClick={() => handleItemClick('Java')}>Java</button></li>
                <li><button type="button" onClick={() => handleItemClick('JavaScript')}>JavaScript</button></li>
                <li><button type="button" onClick={() => handleItemClick('C#')}>C#</button></li>
                <li><button type="button" onClick={() => handleItemClick('C/C++')}>C/C++</button></li>
              </ul>
            </div>
          </div>
        </div>

        <div className='guide-item'>
          <p className='guide-title'>2. 화살표 모양이 다른 셀렉트박스
            <p className='guide-sub'>체크박스에 텍스트가 있는 체크박스입니다.(가로형)</p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default GuideSelectbox;