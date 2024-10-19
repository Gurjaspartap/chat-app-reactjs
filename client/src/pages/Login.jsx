import React, { useState } from 'react';
import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from '@mui/material';
import { CameraAlt as CameraAltIcon } from '@mui/icons-material';
import { VisuallyHiddenInput } from '../components/styles/StylesComponents';
import { useFileHandler, useInputValidation, useStrongPassword } from '6pp';
import { usernameValidator } from '../utils/validator';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };

  const name = useInputValidation("");
  const bio = useInputValidation("");
  const username = useInputValidation("", usernameValidator);
  const password = useStrongPassword("");
  const avatar = useFileHandler("single", 2,);
  const handleLogin = (e) => {
    e.preventDefault();

  }
  const handleSignup = (e) => {
    e.preventDefault();

  }
  return (
    <div style={{ backgroundImage: "linear-gradient(rgba(200,200,2000,0.5),rgba(120,110,220,0.5))", height: "100vh" }} >


      <Container component="main" maxWidth="sm" sx={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Paper elevation={3} sx={{ padding: 4, display: "flex", flexDirection: "column", alignItems: "center" }}>
          {isLogin ? (
            <>
              <Typography variant="h5">Login</Typography>
              <form onSubmit={handleLogin} >
                <TextField required fullWidth label="UserName" margin="normal" variant="outlined" value={username.value} onChange={username.changeHandler} />
                <TextField required fullWidth label="Password" type="password" margin="normal" variant="outlined" value={password.value} onChange={password.changeHandler} />
                <Button type="submit" variant="contained" color="primary" fullWidth>Login</Button>
                <Typography textAlign="center">Don't have an account? <Button onClick={toggleLogin} color="primary">Register</Button></Typography>
              </form>
            </>
          ) : (
            <>
              <Typography variant="h5">Register</Typography>
              <form onSubmit={handleSignup} >
                <Stack position="relative" width="10rem" margin="auto">
                  <Avatar sx={{ height: "10rem", width: "10rem", objectFit: "cover" }} src={avatar.preview} />
                  {avatar.error && <Typography m={"1rem auto"} width={"fit-content"} display={"block"} color="error" variant="caption">{avatar.error}</Typography>}
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
                    <VisuallyHiddenInput type="file" onChange={avatar.changeHandler} />
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
                {password.error && (
                  <Typography color="error" variant="caption">
                    {password.error}
                  </Typography>
                )}
                <Button type="submit" variant="contained" color="primary" fullWidth>SIGN UP</Button>
                <Typography textAlign="center">LOGIN INSTEAD? <Button onClick={toggleLogin} color="primary">LOGIN</Button></Typography>
              </form>
            </>
          )}
        </Paper>
      </Container>
    </div>
  );
};

export default Login;
