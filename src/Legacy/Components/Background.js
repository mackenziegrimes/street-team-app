import React from 'react';

import CardPicture from './ContestPicture';
import Logo from './Logo';

function Background({ myClass, backgroundPictureUrl }) {
  return (
    <div>
      <div
        className={myClass}
        // style="background-image="{contestPictureUrl} //TODO need to use contestPictureUrl somehow here
        style={{
          backgroundImage: `url(${backgroundPictureUrl})`,
        }}
      >
        <CardPicture />
      </div>
      <div>
        <Logo />
      </div>
    </div>
  );
}

export default Background;