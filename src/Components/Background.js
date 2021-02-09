import React from 'react';

import ContestPicture from './ContestPicture';
import Logo from './Logo';

function Background({myClass}) {
  return (
    <div>
      <div className={myClass}>
        <ContestPicture />
      </div>
      <div>
        <Logo />
      </div>
    </div>
  );
}

export default Background;
