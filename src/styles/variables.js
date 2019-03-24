export const colors = {
  black: '#000',
  white: '#fff',
  purple: '#322f7c',
  darkPurple: '#161765',
  green: '#00e5c5',
  gray: '#f0f0f0',
};

export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1440,
};

export const theme = {
  colorBackgroundDefault: colors.white,
  colorBackgroundReversed: colors.black,
  colorTextDefault: colors.black,
  colorTextReversed: colors.white,

  colorPrimary: colors.purple,
  colorSecondary: colors.darkPurple,

  colors,
  breakpoints,

  fontSizes: { xs: '14px', lg: '16px' },
  fontFamily: 'Montserrat',
  fontWeight: 400,
  lineHeight: 1.2,

  gutter: 10,
  transitionTime: '.3s',
};
