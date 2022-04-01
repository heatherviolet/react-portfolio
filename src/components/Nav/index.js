import React from 'react';

function Nav() {

  return (
    <header>
         <nav>
    <ul className="flex-row">
      <li className="mx-2">
        <a href="#about">
          About me
        </a>
      </li>
      <li>
      <a href="#Portfolio">
          Portfolio
        </a>
      </li>
      <li>
        <span>Resume</span>
      </li>
      <li>
        <span>Contact</span>
      </li>
    </ul>
  </nav>
    </header>
  );
}

export default Nav;