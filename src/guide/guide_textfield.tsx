import React, {useState, ChangeEvent} from 'react'

function GuideTextfield () {
  const [isActive, setIsActive] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setIsActive(event.target.value.length > 0);
  };

  return (
    <div className='guide-container'>
      <div className="guide-inner">
        <h2>가이드페이지</h2>

        <div className='guide-item'>
          <p className='guide-title'>1. 텍스트필드
            <p className='guide-sub'>텍스트필드 입니다.</p>
          </p>
          <div className='flex'>
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
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default GuideTextfield