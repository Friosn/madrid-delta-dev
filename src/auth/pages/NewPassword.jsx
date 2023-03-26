import 'firebase/auth';

import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { sendPasswordResetEmail } from 'firebase/auth';
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';

import { FirebaseAuth } from '../../firebase/config';
import { useForm } from '../../hooks';
import { AuthLayout } from '../layout/AuthLayout';
const formData = {
  email: '',
};

export const NewPassword = () => {
  const { email, onInputChange } = useForm(formData);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  //   const isAuthenticating = useMemo(() => status === 'checking', [status]);

  const onSubmit = (event) => {
    event.preventDefault();
    sendPasswordResetEmail(FirebaseAuth, email)
      .then(() => {
        setSuccessMessage(
          'Se ha enviado un correo electrónico para restablecer tu contraseña. Por favor, revisa tu bandeja de entrada.',
        );
        setErrorMessage('');
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setSuccessMessage('');
      });
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
              required
            />
          </Grid>

          <Grid container display={errorMessage ? '' : 'none'} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>
          </Grid>
          <Grid container display={successMessage ? '' : 'none'} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <Alert severity="success">{successMessage}</Alert>
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button
                // disabled={isAuthenticating}
                type="submit"
                variant="contained"
                fullWidth
              >
                ENVIAR
              </Button>
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
