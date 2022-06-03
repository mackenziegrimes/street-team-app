import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const FanMagnetContext = createContext({});

export const SURVEY_SELECTION = {
  LOVE_IT: 'I loved it!',
  OKAY: 'It was okay',
  DISLIKE: "Didn't like it",
};

export const FanMagnetProvider = ({ children }) => {
  const [fanMagnetSurvey, setFanMagnetSurvey] = useState('');

  const handleSetFanMagnetSurvey = selection => {
    setFanMagnetSurvey(selection);
  };

  return (
    <FanMagnetContext.Provider
      value={{
        fanMagnetSurvey,
        setFanMagnetSurvey: handleSetFanMagnetSurvey,
      }}
    >
      {children}
    </FanMagnetContext.Provider>
  );
};

FanMagnetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
