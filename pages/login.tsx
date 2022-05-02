import type { NextPage } from 'next'
import LoginLayout from '../layouts/LoginLayout'
import { Button, Card, CardContent, Container, Grid, Stack, TextField, Typography } from '@mui/material'

const Login: NextPage = () => {
  return (
    <LoginLayout>
      <Container className="hl-page">
        <Stack spacing={6}>
          <Grid container justifyContent="center" mt={4}>
            <Typography variant="h5">Herbalife Planner</Typography>
          </Grid>

          <Grid container justifyContent="center">
            <Grid item xs sm={7} md={5} lg={4}>
              <Card>
                <CardContent>
                  <Typography variant="subtitle1" fontWeight="600">Inicio de sesión</Typography>

                  { /* Login Form */ }
                  <Stack component="form" mt={2} spacing={2} autoComplete="off">
                    <TextField label="Usuario" required></TextField>
                    <TextField label="Contraseña" type="password" required></TextField>
                    <Button variant="outlined">Ingresar</Button>
                    <Button variant="text">Recuperar contraseña</Button>
                  </Stack>

                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </LoginLayout>
  )
}

export default Login
