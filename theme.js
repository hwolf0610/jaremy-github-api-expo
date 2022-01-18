import { extendTheme } from "native-base"

export const theme = extendTheme({
    colors: {
        main: {
            900: '#0E1A50'
        }
    },
    fontConfig: {
        Gilroy: {
            100: {
                normal: 'Gilroy-Light',
            },
            200: {
                normal: 'Gilroy-Light',
            },
            300: {
                normal: 'Gilroy-Light',
            },
            400: {
                normal: 'Gilroy-Regular',
            },
            500: {
                normal: 'Gilroy-Medium',
            },
            600: {
                normal: 'Gilroy-SemiBold',
            },
            700: {
                normal: 'Gilroy-SemiBold',
            },
            800: {
                normal: 'Gilroy-Bold',
            },
            900: {
                normal: 'Gilroy-Bold',
            }
        }
    },
    fonts: {
        heading: 'Gilroy',
        body: 'Gilroy',
        mono: 'Gilroy'
    },
    config: {
        initialColorMode: 'white'
    }
});