import React, { useState } from 'react';
import Searchbox from '../components/searchbox';

function GuideSearchbox () {
  const [isOpen5, setIsOpen5] = useState(false);
  const [selectedItem5, setSelectedItem5] = useState<string>('전체');
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
        <h2>searchbox</h2>
        <div className='guide-item'>
          <p className='guide-title'>1. 기본타입
            <p className='guide-sub'>기본타입입니다.</p>
          </p>
          <div className="flex">
            <Searchbox />
          </div>
        </div>

        <div className='guide-item'>
          <p className='guide-title'>2. 셀렉트박스 검색박스
            <p className='guide-sub'>기관관리 내 검색박스입니다.</p>
          </p>
          <div className="flex">
            <div className="combine_searchbox">
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
              <Searchbox />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GuideSearchbox