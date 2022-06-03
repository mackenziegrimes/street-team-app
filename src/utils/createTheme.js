export const createTheme = theme => {
  const baseTheme = theme || {};

  return {
    ...baseTheme,
    colors: {
      primary: '#614cc3',
      menuPrimary: '#8479EB',
      primaryTint: '#7857B8',
      primaryShade: '#40207D',
      gray: 'gray',
      gray1: '#484848',
      gray2: '#393939',
      gray3: '#1F1F1F',
      black: '#1E1E1E',
      white: 'white',
      yellow: '#fed93e',
      ...baseTheme.colors,
    },
    spacing: {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '32px',
      ...baseTheme.spacing,
    },
    fonts: {
      primary: 'Oswald',
      heading: 'Open Sans',
      code: "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
      ...baseTheme.fonts,
    },
    fontSizes: {
      xs: '13px',
      sm: '14px',
      md: '16px',
      lg: '18px',
      xl: '20px',
      xxl: '30px',
      ...baseTheme.fontSizes,
    },
    fontWeights: {
      medium: 500,
      semibold: 600,
      bold: 700,
      ...baseTheme.fontWeights,
    },
  };
};
