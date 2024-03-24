import React, {useState, ChangeEvent} from 'react'

function Searchbox () {
  const [isActive, setIsActive] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setIsActive(event.target.value.length > 0);
  };

  return (
    <div className={`searchbox ${isActive ? 'on' : ''}`}>
      <label htmlFor="searchbox_main" className='searchbox_main'>
        <input 
          type="text" 
          id='searchbox_main'
          value={inputValue}
          onChange={handleInputChange}
        />
        <span className='searchbox_place'>검색어 입력</span>
      </label>
      <a href="#!" className='go_search'>
        <i className='ico search'></i>
      </a>
    </div>
  )
}

export default Searchbox