import React, { useState } from 'react';
import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from '@mui/material';
import { CameraAlt as CameraAltIcon } from '@mui/icons-material';
import { VisuallyHiddenInput } from '../components/styles/StylesComponents';
import { useInputValidation } from '6pp';
import { usernameValidator } from '../utils/validator';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };

  const name = useInputValidation("");
  const bio = useInputValidation("");
  const username = useInputValidation("", usernameValidator);
  const password = useInputValidation("");

  return (
    <Container component="main" maxWidth="sm" sx={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Paper elevation={3} sx={{ padding: 4, display: "flex", flexDirection: "column", alignItems: "center" }}>
        {isLogin ? (
          <>
            <Typography variant="h5">Login</Typography>
            <form>
              <TextField required fullWidth label="UserName" margin="normal" variant="outlined" value={username.value} onChange={username.changeHandler} />
              <TextField required fullWidth label="Password" type="password" margin="normal" variant="outlined" value={password.value} onChange={password.changeHandler} />
              <Button type="submit" variant="contained" color="primary" fullWidth>Login</Button>
              <Typography textAlign="center">Don't have an account? <Button onClick={toggleLogin} color="primary">Register</Button></Typography>
            </form>
          </>
        ) : (
          <>
            <Typography variant="h5">Register</Typography>
            <form>
              <Stack position="relative" width="10rem" margin="auto">
                <Avatar sx={{ height: "10rem", width: "10rem", objectFit: "cover" }} />
                <IconButton
                  sx={{
                    position: "absolute",
                    bottom: "0.5rem",
                    right: "0.5rem",
                    color: "white",
                    bgcolor: "rgba(0,0,0,0.5)",
                    ":hover": { bgcolor: "rgba(255,255,255,0.7)" }
                  }}
                  component="label"
                  aria-label="Upload Profile Picture"
                >
                  <CameraAltIcon />
                  <VisuallyHiddenInput type="file" />
                </IconButton>
              </Stack>
              <TextField required fullWidth label="Name" margin="normal" variant="outlined" value={name.value} onChange={name.changeHandler} />
              <TextField required fullWidth label="Bio" margin="normal" variant="outlined" value={bio.value} onChange={bio.changeHandler} />
              <TextField required fullWidth label="UserName" margin="normal" variant="outlined" value={username.value} onChange={username.changeHandler} />
              {username.error && (
                <Typography color="error" variant="caption">
                  {username.error}
                </Typography>
              )}
              <TextField required fullWidth label="Password" type="password" margin="normal" variant="outlined" value={password.value} onChange={password.changeHandler} />
              <Button type="submit" variant="contained" color="primary" fullWidth>SIGN UP</Button>
              <Typography textAlign="center">LOGIN INSTEAD? <Button onClick={toggleLogin} color="primary">LOGIN</Button></Typography>
            </form>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default Login;
