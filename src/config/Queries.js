import { createTheme, useMediaQuery } from "@mui/material"

export const Queries=()=>{
    const theme= createTheme({
        breakpoints:{
            values:{
                xs: 0,
                sm: 800,
                md: 1200,
                lg: 1200,
                xl: 1536
            }
        },
        palette: {
            themeColor: {
              main: '#a77043',
            }
          }
    })
    const ThemeProps={
        theme:theme,
        mediaQueries:{
            isTablet:useMediaQuery(theme.breakpoints.between('sm','md')),
            isDesktop:useMediaQuery(theme.breakpoints.up('md')),
            isMobile:useMediaQuery(theme.breakpoints.down('sm'))
        }
    }
    
    return ThemeProps;
}