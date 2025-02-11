import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { createTheme } from '@mui/material/styles'
import { grey } from '@mui/material/colors'

const buttonHeight = '38px'
const borderRadiusRound = '19px'
const bgLight = '#fff'
const bgHoverLight = '#f2f2f2'
const darkGrey = '#333333'
export const iconColor = '#4d4d4d'
export const headerHeight = '60px'
export const headerPaddingX = '14px'
export const scrolledHeaderHeight = '84px'

const LinkBehavior = React.forwardRef((props, ref) => {
  const { href, to, ...other } = props
  // Map href (MUI) -> to (react-router)
  return <RouterLink ref={ref} to={to || href || '#'} {...other} />
})

const initTheme = mode => {
  const darkMode = mode === 'dark'
  return createTheme({
    palette: {
      mode,
      primary: {
        main: '#3DBEFF',
      },
      secondary: {
        main: '#FDD14D',
      },
      info: {
        main: '#2D9CDB',
      },
      canary: {
        main: '#F2F758',
      },
      chestnutRose: {
        main: '#C95F6D',
      },
      ultramarine: {
        main: '#081181',
      },
      darkGrey: {
        main: darkGrey,
      },

      ...(!darkMode
        ? {
            // palette values for light mode
            text: {
              primary: darkGrey,
              secondary: grey[800],
            },
            background: { default: '#fff' },
          }
        : {
            // palette values for dark mode
            text: {
              primary: '#fff',
              secondary: '#fff',
            },
            background: {
              default: grey[900],
              paper: grey[900],
            },
          }),
    },

    typography: {
      datasetTitle: {
        fontWeight: 700,
        fontSize: `1.5rem`,
        lineHeight: 1.2,
        marginBottom: `0.875rem`,
      },
      sectionTitle: {
        fontWeight: 700,
        fontSize: `1rem`,
        lineHeight: 1.2,
        marginBottom: `0.875rem`,
      },
      fieldLabel: {
        fontSize: '0.875rem',
        marginBottom: '0.25rem',
        lineHeight: '1rem',
      },
      fieldValue: {
        fontSize: '1.125rem',
        fontWeight: 500,
        lineHeight: 1.25,
      },
    },

    components: {
      MuiLink: {
        defaultProps: {
          component: LinkBehavior,
        },
      },
      MuiButtonBase: {
        defaultProps: {
          LinkComponent: LinkBehavior,
          disableRipple: true,
        },
      },
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
        styleOverrides: {
          text: {
            ':disabled': {
              color: '#666666',
            },
          },
          containedPrimary: {
            ':hover': {
              backgroundColor: '#36ABE5',
            },
            ':disabled': {
              backgroundColor: '#999999',
              color: '#fff',
            },
          },
          contained: {
            height: buttonHeight,
            borderRadius: borderRadiusRound,
          },
          root: {
            whiteSpace: 'nowrap',
            boxShadow: 'none',
            textTransform: 'none',
          },
        },
      },
      MuiBreadcrumbs: {
        styleOverrides: {
          root: {
            fontSize: '24px',
            color: !darkMode && '#333',
          },
          ol: {
            flexWrap: 'nowrap',
            paddingRight: '12px',
            textShadow:
              darkMode &&
              '0 0 10px rgba(0,0,0,0.5), 0 0 10px rgba(0,0,0,0.5), ' +
                '0 0 10px rgba(0,0,0,0.5), 0 0 10px rgba(0,0,0,0.5)',
          },
          li: {
            whiteSpace: 'nowrap',
            fontWeight: 'bold',

            '.header__link': {
              '.header__link__ellipsis': {
                display: 'none',
              },

              '&.header__link--truncated': {
                '.header__link__text': {
                  display: 'none',
                },
                '.header__link__ellipsis': {
                  display: 'inline',
                },
              },
            },
          },
        },
      },
      MuiAutocomplete: {
        styleOverrides: {
          popupIndicator: {
            display: 'none',
          },
          noOptions: {
            color: darkMode ? '#666666' : '#2D2D2D',
          },
          input: {
            paddingTop: '0 !important',
            paddingBottom: '0 !important',
          },
          inputRoot: {
            height: buttonHeight,
            backgroundColor: `${darkMode ? bgLight : '#f2f2f2'} !important`,
            borderRadius: borderRadiusRound,
            flexWrap: 'nowrap',
            overflow: 'hidden',
            paddingRight: '12px !important',
            paddingTop: '0',
            paddingBottom: '0',
            '&:hover': {
              backgroundColor: `${bgHoverLight} !important`,
            },
            '&:before': {
              content: 'none',
            },
            '&:after': {
              content: 'none',
            },
            color: darkMode ? '#666666' : '#2D2D2D',

            input: {
              boxSizing: 'border-box',
              minWidth: '180px !important',
            },
          },
          inputFocused: {
            backgroundColor: 'transparent',
          },
          popper: {
            marginTop: '12px !important',
          },
          paper: {
            border: 'none',
            borderRadius: '5px',
          },
          listbox: {
            borderRadius: '5px',

            '& .MuiAutocomplete-option': {
              alignItems: 'flex-start',

              '&:hover, &.Mui-focused': {
                backgroundColor: `${bgHoverLight}`,
              },
            },
          },
          option: {
            color: darkMode ? '#666666' : '#2D2D2D',
          },
        },
      },
      MuiInputAdornment: {
        styleOverrides: {
          root: {
            color: darkMode ? '#666666' : '#2D2D2D',
          },
        },
      },
      MuiTypography: {
        defaultProps: {
          variantMapping: {
            datasetTitle: 'h2',
            sectionTitle: 'h6',
            fieldValue: 'p',
            fieldLabel: 'p',
          },
        },
        styleOverrides: {
          gutterBottom: {
            marginBottom: `1rem`,
          },
        },
      },

      MuiLinearProgress: {
        styleOverrides: {
          root: {
            backgroundColor: '#F2F2F2',
          },
        },
      },

      MuiList: {
        variants: [
          {
            props: { variant: 'comparisonMenu' },
            style: {
              width: '300px',
              backgroundColor: '#fff',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
              borderRadius: '10px',
              paddingTop: 0,
              paddingBottom: 0,
            },
          },
        ],
      },

      MuiListItem: {
        variants: [
          {
            props: { variant: 'comparisonMenuItem' },
            style: {
              padding: 8,
              cursor: 'pointer',
            },
          },
        ],
      },

      MuiSkeleton: {
        styleOverrides: {
          root: {
            backgroundColor: 'rgba(80, 80, 80, 0.1)',
          },
        },
      },

      MuiSelect: {
        styleOverrides: {
          filled: {
            color: darkGrey,
            backgroundColor: '#ffffff',
            border: '1px solid #999999',
            borderRadius: '5px',
            fontWeight: 500,
            fontSize: '14px',
            paddingTop: '21px',
            paddingBottom: '5px',
            paddingLeft: '11px',
          },
          icon: {
            color: '#999999',
          },
        },
      },
      MuiMenu: {
        styleOverrides: {
          root: {},
        },
      },
      MuiDivider: {
        defaultProps: {
          color: '#ccc',
        },
      },

      header: {
        height: headerHeight,
        scrolledHeight: scrolledHeaderHeight,
        paddingX: headerPaddingX,
        paddingY: '10px',
        boxShadow: darkMode ? 'none' : '0px 2px 4px rgba(0, 0, 0, 0.25)',
        bgColor: darkMode ? 'rgba(0, 0, 0, 0.0)' : 'rgba(255, 255, 255, 0.9)',
        iconColor: darkMode ? '#ffffff' : iconColor,
        iconHoverColor: darkMode ? '#ffffff' : '#000000',
      },

      NavigateButton: {
        filter:
          darkMode &&
          'drop-shadow(0 0 2px rgba(0,0,0,0.25)) drop-shadow(0 0 5px rgba(0,0,0,0.5))' +
            'drop-shadow(0 0 7px rgba(0,0,0,0.75))',
      },

      SectionNavbar: {
        height: 40,
        bgColor: darkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(255, 255, 255, 1)',
        borderColor: '#CCCCCC',
      },

      sidebar: {
        width: '300px',
      },

      floatingFilter: {
        width: 320,
      },

      autocompleteClearIcon: {
        color: darkMode ? '#666666' : '#2D2D2D',
      },

      Chart: {
        axisColor: '#666666',
        lineColor: '#FDD14D',
        pointBorderColor: '#999999',
        axisLabelColor: '#333333',
        gridColor: '#999999',
        axisFontSize: '14px',
      },
      StaticMap: {
        background: '#0a1216',
        selectedBgColor: '#ff8e3c',
        selectedBorderColor: '#ff8e3c',
        selectedBgOpacity: 0.6,
        otherBgColor: '#1c2636',
        otherBorderColor: '#565A61',
        strokeWidth: 2,
      },
    },
  })
}

export default initTheme
