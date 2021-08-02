const { createTheme } = require("@material-ui/core");

const theme = createTheme({
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
    overrides: {
        MuiButton: {
            root: {
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: '18px',
                lineHeight: '26px',
                textAlign: 'center',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.317116)',
                borderRadius: '5px',
            },
            contained: {
                backgroundColor: '#40D3FD',
                color: '#FFFFFF',
                '&:hover': {
                    backgroundColor: '#2399CC',
                }
            },
        },
        MuiInputBase: {
            root: {
                backgroundColor: '#FFF',
            },
        },
        MuiOutlinedInput: {
            root: {
                borderRadius: 0,
                '&:hover fieldset, &.Mui-focused fieldset': {
                    borderColor: '#40D3FD !important',
                },

            },
        },
        MuiFormLabel: {
            root: {
                color: '#aaa !important',
            },
        },
        MuiLink: {
            root: {
                '&:hover': {
                  transform: "scale3d(1.05, 1.05, 1)",
                },
            },
        },
    }

})

export default theme
