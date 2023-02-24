import AuthInputC from "./AuthInputC";
import { makeStyles } from "@mui/styles";
import useAuth from "../../../hooks/use-auth";
import AuthButtonC from "./AuthButtonC";
import { useState } from "react";
import { loginUser } from "../../../api";
import { useDispatch } from "react-redux";

const useStyles = makeStyles(() => ({
  content: {
    display: 'flex',
    flexDirection: 'column',

    position: 'absolute',
    width: 400,
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  title: {
    margin: 0,
    color: ({ colors }) => colors.contentColor
  },
  description: {
    marginTop: 8,
    color: ({ colors }) => colors.hintColor
  }
}))

function AuthContentC() {
  const dispatch = useDispatch()

  const { colors } = useAuth();
  const styles = useStyles({ colors })

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const request = { login, password }
    dispatch(loginUser(request));
  }

  return (
    <div className={styles.content}>
      <h1 className={styles.title}>Welcome back</h1>
      <p className={styles.description}>Welcome back! Please enter your details.</p>
      <form onSubmit={handleSubmit}>

        <AuthInputC label='Login' placeholder='Enter your username'
                    autoComplete="username"
                    value={login} onChange={(e) => setLogin(e.target.value)} />

        <AuthInputC label='Password' placeholder='Enter your password' type='password'
                    autoComplete="current-password"
                    value={password} onChange={(e) => setPassword(e.target.value)} />

        <AuthButtonC>Sign In</AuthButtonC>
      </form>
    </div>
  )
}

export default AuthContentC;