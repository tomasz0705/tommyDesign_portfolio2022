import React from 'react';

function Header() {
  return (
    <header className='header'>
        <h1 className='header__nameTitle'>tommydesign</h1>
        <p className='header__jobTitle'>
            <span>FRONTEND DEVELOPER</span>
        </p>
        <span className='header__scrollDownIcon'>
            <button>
                <span className="dot"></span>
            </button>
        </span>
    </header>
  )
}

export default Header;