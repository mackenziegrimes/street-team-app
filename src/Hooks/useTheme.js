import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { createTheme } from '../utils/createTheme';

const defaultTheme = createTheme();

export const useTheme = () => {
  const theme = useContext(ThemeContext) || defaultTheme;
  return {
    ...theme,
  };
};
