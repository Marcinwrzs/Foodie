import { useNavigate } from "react-router-dom";
import * as Styled from "./LogIn.styled";
import { useForm } from "react-hook-form";
import { useCallback, useEffect, useState } from "react";
import {
  Typography,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { emailRegex } from "common/emailRegex";
import { useMutation } from "api/useMutation/useMutation";
import { useTokenContext } from "context/tokenContext/useTokenContext";
import { AxiosInstance, AxiosResponse } from "axios";
import { Paths } from "components/Pages/Pages";

type LogInTypes = {
  email: string;
  password: string;
};

type LogInResponse = {
  accessToken: string;
};

const LogIn: React.FC = () => {
  const [isRememberMe, setIsRememberMeChecked] = useState<boolean>(false);
  const { onTokenSave, accessToken } = useTokenContext();
  const navigate = useNavigate();

  const onSuccess = useCallback(
    (res: AxiosResponse<LogInResponse>) => {
      onTokenSave({
        newToken: res.data.accessToken,
        storeTokenInStorage: isRememberMe,
      });
      navigate(Paths.Dashboard);
    },
    [isRememberMe, navigate, onTokenSave]
  );

  const { state, onMutate } = useMutation({
    mutateFn: (axios: AxiosInstance) => (payload: LogInTypes) =>
      axios.post<LogInResponse>(process.env.REACT_APP_API_URL_LOGIN, payload),
    onSuccess,
  });

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<LogInTypes>();

  useEffect(() => {
    if (accessToken) navigate(Paths.Dashboard);
  });

  return (
    <Styled.LogInContainer>
      <h1>Log in</h1>
      <form onSubmit={handleSubmit(onMutate)} noValidate>
        <TextField
          type="email"
          label="Email"
          variant="standard"
          {...register("email", {
            required: "This field cannot be empty",
            pattern: {
              value: emailRegex,
              message: "please use valid email",
            },
          })}
          error={Boolean(errors.email)}
          helperText={errors.email?.message}
        />
        <TextField
          type="password"
          label="Password"
          variant="standard"
          {...register("password", {
            required: "This field cannot be empty",
          })}
          error={Boolean(errors.password)}
          helperText={errors.password?.message}
        />
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={isRememberMe}
                onChange={(e) => setIsRememberMeChecked(e.target.checked)}
              />
            }
            label="Remember me"
          />
        </FormGroup>
        {state.errorMessage && (
          <Typography color="error">{state.errorMessage}</Typography>
        )}
        <Styled.Button type="submit" disabled={state.isLoading}>
          Log in
        </Styled.Button>
      </form>
      <Typography>
        Dont have account?
        <Styled.Link to={Paths.SignUp}>Sign Up</Styled.Link>
      </Typography>
    </Styled.LogInContainer>
  );
};

export default LogIn;
