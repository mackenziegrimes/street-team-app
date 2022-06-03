import React from 'react';

import FooterLinks from './FooterLinks';
// import OptinCard from './Cards/1_OptinCard';

function CenterBox({boxContent,displayFooter}) {
  return (
    <div className="center-box">
      {boxContent}
      {displayFooter ? <FooterLinks /> : null}
    </div>
  );
}

export default CenterBox;
