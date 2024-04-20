import React from 'react';

function MenuBtn () {

  const toggleActive = () => {
    const aside = document.querySelector('.aside');
    const contbody = document.querySelector('.contbody');
    if (aside && contbody) {
      aside.classList.toggle('active');
      contbody.classList.toggle('active');
    }
  };

  return (
    <div className="menubtn">
      <button onClick={toggleActive}>
        <p></p>
        <p></p>
        <p></p>
      </button>
    </div>
  )
}

export default MenuBtn;