import { createTheme, createThemeContract, createGlobalTheme } from '@vanilla-extract/css';

export const root = createGlobalTheme('.root', {
  space: {
    small: '4px',
    medium: '8px',
    large: '16px',
  },
  fonts: {
    heading: 'Georgia, Times, Times New Roman, serif',
    body: 'system-ui',
  },
  colors: {
    topBar: {
      background: '#808080',
      color: '#ffff00'
    },
    page1: {
      left: {
        background: '#cecece',
        color: '#2f4f4f'
      },
      right: {
        background: 'white',
        color: '#000000'
      }
    },
    button: {
      background: '#cc0000',
      color: 'white',
    },
    link: {
      normal: '#d3d6dd',
      hover: '#60A5FA',
      active: '#0038ff',
    },
  },
});

const colors = createThemeContract({
  sideBar: {
    background: '#60A5FA',
  },
  topBar: {
    background: '#808080',
    color: '#ffff00'
  },
  page1: {
    left: {
      background: '#cecece',
      color: '#2f4f4f'
    },
    right: {
      background: 'white',
      color: '#000000'
    }
  },
  button: {
    background: '#cc0000',
    color: 'white',
  },
  link: {
    normal: null,
    active: null,
    hover: null,
  },
});

export const lightTheme = createTheme(colors, {
  topBar: {
    background: '#808080',
    color: '#ffff00'
  },
  sideBar: {
    background: '#979393',
  },
  page1: {
    left: {
      background: '#cecece',
      color: '#2f4f4f'
    },
    right: {
      background: 'white',
      color: '#000000'
    }
  },
  button: {
    background: '#cc0000',
    color: 'white',
  },
  link: {
    normal: '#3550AA',
    hover: '#0536E6',
    active: '#0038ff',
  },
});

export const darkTheme = createTheme(colors, {
  sideBar: {
    background: '#808080',
  },
  topBar: {
    background: '#c0c0c0',
    color: '#2f4f4f'
  },
  page1: {
    left: {
      background: 'white',
      color: '#696969'
    },
    right: {
      background: '#008080',
      color: 'white'
    }
  },
  button: {
    background: '#f0f8ff',
    color: '#800080',
  },
  link: {
    normal: '#d3d6dd',
    hover: '#60A5FA',
    active: '#2A89FC',
  },
});

export const vars = { ...root, colors };
