import React from 'react';
import styled, { ThemeProvider as StyledProvider } from 'styled-components';

import { createTheme } from '../../utils/createTheme';

const StyledThemeProvider = StyledProvider || styled.default.ThemeProvider;

export const ThemeProvider = ({ ...props }) => {
  const appTheme = createTheme();

  return <StyledThemeProvider {...props} theme={appTheme} />;
};
