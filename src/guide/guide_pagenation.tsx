import React, { useState } from 'react';
import Pagenation from '../components/pagenation';

function GuidePagenation () {
  const [isOpen1, setIsOpen1] = useState(false);
  const [selectedItem1, setSelectedItem1] = useState<string>('5줄 보기'); 

  const handleToggle1 = () => {
    setIsOpen1(!isOpen1);
  };

  const handleItemClick1 = (item: string) => { 
    setSelectedItem1(item);
    setIsOpen1(false);
  };
  return (
    <div className='guide-container'>
      <div className="guide-inner">
        <h2>pagenation</h2>
        <div className='guide-item'>
          <p className='guide-title'>1. 기본타입
            <p className='guide-sub'>기본타입입니다.</p>
          </p>
          <Pagenation />
        </div>

        <div className='guide-item'>
          <p className='guide-title'>2. 혼합타입
            <p className='guide-sub'>혼합타입입니다. pgn_wrap으로 감쌉니다.</p>
          </p>
          <div className="pagenation-box">
            <Pagenation />
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
        
      </div>
    </div>
  )
}

export default GuidePagenation