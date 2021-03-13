const { createMuiTheme } = require("@material-ui/core");

const theme = createMuiTheme({
    palette: {
        text: {
            primary: '#333333',
            secondary: '#2399CC',
        },
        error: {
            main: '#FF0000'
        },
        background: {
            default: '#FFFFFF',
        },
    },
})

export default theme