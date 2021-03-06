import fonts from './fonts';
import colors from './colors';
import spacings from './spacings';
import typography from './typography';

import {DefaultTheme as NavigationTheme} from '@react-navigation/native';
import {configureFonts, DefaultTheme as PaperTheme} from 'react-native-paper';

const fontConfig = {
  default: {
    regular: {
      fontFamily: fonts.regular,
      fontWeight: 'normal',
    },

    medium: {
      fontFamily: fonts.medium,
      fontWeight: 'normal',
    },

    light: {
      fontFamily: fonts.light,
      fontWeight: 'normal',
    },

    thin: {
      fontFamily: fonts.thin,
      fontWeight: 'normal',
    },
  },
};

export const paperTheme = {
  ...PaperTheme,

  fonts: configureFonts(fontConfig),
  roundness: 10,
  colors: {
    ...PaperTheme.colors,
    ...colors,
  },
};

export const navTheme = {
  ...NavigationTheme,
  colors: {
    ...NavigationTheme.colors,
    ...colors,
  },
};

export const FONTS = fonts;
export const COLORS = colors;
export const SPACINGS = spacings;
export const TYPOGRAPHY = typography;
