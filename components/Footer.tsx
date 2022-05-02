import { Box, Typography } from "@mui/material"

function Footer() {

  const initialYear = 2022

  const yearRange = () => {
    const currentYear = new Date().getFullYear()
    return initialYear < currentYear ? `${initialYear} - ${currentYear}` : `${currentYear}`
  }

  return (
    <Box textAlign="center" p={1}>
      <Typography variant="caption">
        Todos los derechos reservados © {yearRange()}
      </Typography>
    </Box>
  )
}

export default Footer
