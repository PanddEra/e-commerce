export const themeOptions = {
    palette: {
        type: 'light',

        primary: {
            main: '#000000',
            contrastText: '#FFFFFF',
        },

        secondary: {
            main: '#F2F0F1',
            contrastText: '#000000',
        },

        background: {
            default: '#FFFFFF',
            paper: '#F2F0F1',
        },

        text: {
            primary: '#000000',
            secondary: 'rgba(0,0,0,0.6)',
            disabled: 'rgba(0,0,0,0.4)',
        },

        error: {
            main: '#FF3333',
            light: 'rgba(255,51,51,0.1)',
        },

        divider: 'rgba(0,0,0,0.08)',
    },

    typography: {
        fontFamily: '"Satoshi", sans-serif',

        h1: {
            fontSize: '64px',
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: 0,
            verticalAlign: 'middle',
            textTransform: 'uppercase',
        },

        h2: {
            fontSize: '48px',
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: 0,
            verticalAlign: 'middle',
            horizontalAlign: 'center',
            textTransform: 'uppercase',
        },

        h3: {
            fontSize: '36px',
            fontWeight: 700,
            letterSpacing: 0,
            lineHeight: 1,
            verticalAlign: 'middle',
            textAlign: "center",
            textTransform: 'uppercase'
        },

        h4: {
            fontSize: '20px',
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: 0,
            verticalAlign: 'middle',
        },

        h5: {
            fontSize: '16px',
            lineHeight: '18px',
            letterSpacing: "3px",
            fontWeight: 500,
            textTransform: 'uppercase'
        },

        body1: {
            fontSize: '20px',
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: 0,
            verticalAlign: 'middle',
            color: '#000000',
        },

        body2: {
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: "22px",
            letterSpacing: 0,
            verticalAlign: 'middle',
            color: '#00000099',
        },

        button: {
            fontSize: '16px',
            fontWeight: 500,
            lineHeight: 1,
            letterSpacing: 0,
        },
    },

    shape: {
        borderRadius: 20,
    },

    spacing: 8,

    // overrides: {
    //     MuiButton: {
    //         root: {
    //             borderRadius: 999,
    //             padding: '12px 32px',
    //             boxShadow: 'none',
    //             fontWeight: 600,
    //         },
    //
    //         containedPrimary: {
    //             '&:hover': {
    //                 backgroundColor: '#111111',
    //                 boxShadow: 'none',
    //             },
    //         },
    //
    //         outlined: {
    //             borderColor: 'rgba(0,0,0,0.12)',
    //         },
    //     },
    //
    //     MuiCard: {
    //         root: {
    //             borderRadius: 20,
    //             boxShadow: 'none',
    //             backgroundColor: '#F2F0F1',
    //         },
    //     },
    //
    //     MuiPaper: {
    //         rounded: {
    //             borderRadius: 20,
    //         },
    //     },
    //
    //     MuiInputBase: {
    //         root: {
    //             borderRadius: 999,
    //             backgroundColor: '#F2F0F1',
    //             paddingLeft: 16,
    //         },
    //
    //         input: {
    //             padding: '14px 12px',
    //         },
    //     },
    //
    //     MuiOutlinedInput: {
    //         notchedOutline: {
    //             borderColor: 'transparent',
    //         },
    //
    //         root: {
    //             '&:hover .MuiOutlinedInput-notchedOutline': {
    //                 borderColor: 'transparent',
    //             },
    //
    //             '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    //                 borderColor: '#000000',
    //                 borderWidth: 1,
    //             },
    //         },
    //     },
    //
    //     MuiChip: {
    //         root: {
    //             borderRadius: 999,
    //         },
    //     },
    //
    //     MuiContainer: {
    //         root: {
    //             paddingLeft: 24,
    //             paddingRight: 24,
    //         },
    //     },
    // },
};