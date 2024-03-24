import React from 'react'

function Pagenation () {

  return (
    <div className='pagenation'>
      <div className='pgn-wrap'>
        <button className='btn ico arrow prev double'></button>
        <button className='btn ico arrow prev'></button>
        <div className='pgn-box'>
          <a href="#!" className='pgn-num active'>1</a>
          <a href="#!" className='pgn-num'>2</a>
          <a href="#!" className='pgn-num'>3</a>
          <a href="#!" className='pgn-num'>4</a>
          <a href="#!" className='pgn-num'>5</a>
        </div>
        <button className='btn ico arrow next'></button>
        <button className='btn ico arrow next double'></button>
      </div>
      <p className='pgn-txt'>00 페이지 중 1페이지</p>
    </div>
  )
}

export default Pagenation