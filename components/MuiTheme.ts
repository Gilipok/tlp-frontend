import { blue, grey, red } from "@material-ui/core/colors"
import { createMuiTheme } from "@material-ui/core/styles"

/**
 * material-ui theme color pallete
 * @see https://material-ui.com/style/color/
 */
export const MuiTheme = createMuiTheme({
  palette: {
    primary: {
      light: grey[300],
      main: grey[500],
      dark: grey[700],
      contrastText: grey[900],
    },
    secondary: {
      light: red[300],
      main: red[800],
      dark: red[700],
      contrastText: red[500],
    },
    error: {
      light: blue[300],
      main: blue[500],
      dark: blue[700],
      contrastText: blue[500],
    },
  },
})
