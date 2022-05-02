import { createTheme } from '@mui/material/styles'

import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/inter/900.css'

const typographyWeights = () => {
  const boldHeaders = ['h1', 'h2', 'h3'].reduce((acc: any, t) => {
    acc[t] = {
      fontWeight: 900,
      color: '#212121',
    }

    return acc
  }, {})

  const mediumHeaders = ['h4', 'h5', 'h6'].reduce((acc: any, t) => {
    acc[t] = {
      fontWeight: 700,
      color: '#212121',
    }

    return acc
  }, {})

  const text = ['subtitle1', 'subtitle2', 'body1', 'body2'].reduce((acc: any, t) => {
    acc[t] = {
      color: '#2e2e2e',
    }

    return acc
  }, {})

  const caption = ['caption', 'overline'].reduce((acc: any, t) => {
    acc[t] = {
      color: '#5c5c5c',
    }

    return acc
  }, {})

  return {
    ...boldHeaders,
    ...mediumHeaders,
    ...text,
    ...caption,
  }
}

const theme = createTheme({
  typography: {
    fontFamily: 'Inter, sans-serif',
    ...typographyWeights(),
  },

  palette: {
    primary: {
      main: '#D421A4',
    },
  },
})

export default theme
