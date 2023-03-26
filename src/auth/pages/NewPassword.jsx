import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';

import { AuthLayout } from '../layout/AuthLayout';

import { useForm } from '../../hooks';
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth';

const formData = {
  email: '',
  password: '',
};

export const NewPassword = () => {
  const { status, errorMessage } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const { email, password, onInputChange } = useForm(formData);

  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  const onSubmit = (event) => {
    event.preventDefault();

    // console.log({ email, password })
    // dispatch(startLoginWithEmailPassword({ email, password }));
  };

  return (
    <AuthLayout title="Introduzca su correo para cambiar la contraseña">
      <form
        onSubmit={onSubmit}
        className="animate__animated animate__fadeIn animate__faster"
      >
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid>

          <Grid container display={!!errorMessage ? '' : 'none'} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button
                disabled={isAuthenticating}
                type="submit"
                variant="contained"
                fullWidth
              >
                ENVIAR
              </Button>
              <Typography align="center" marginTop={1} fontSize={10} sx={{ mr: 1 }}>
                Una vez validado el correo recibirá un correo de contestación con las
                instrucciones para cambiar su contraseña
              </Typography>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="center">
            <Link fontSize={12} component={RouterLink} color="inherit" to="/auth/login">
              Volver al login
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
