import LayoutStyles from "./Layout.module.scss"
import LoginLayoutStyles from "./LoginLayout.module.scss"
import { Box, Stack } from "@mui/material"
import Footer from "../components/Footer"

function LoginLayout({children}: {children: React.ReactNode}) {
  return (
    <Stack className={`${LayoutStyles.hl__layout} ${LoginLayoutStyles.layout__wrapper}`}>
      <Box className={LoginLayoutStyles.layout__main} flexGrow={1}>
        {children}
      </Box>
      <Footer/>
    </Stack>
  )
}

export default LoginLayout
