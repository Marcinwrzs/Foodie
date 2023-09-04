import * as Styled from "./SignUp.styled";
import { useForm } from "react-hook-form";
import { Typography, TextField } from "@mui/material";
import { emailRegex } from "common/emailRegex";
import { useMutation } from "api/useMutation/useMutation";
import { useTokenContext } from "context/tokenContext/useTokenContext";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AxiosResponse } from "axios";
import { Paths } from "components/Pages/Pages";

type SignUpTypes = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const SignUp: React.FC = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<SignUpTypes>();
  const { accessToken } = useTokenContext();
  const navigate = useNavigate();

  const onSuccess = useCallback(
    (res: AxiosResponse<SignUpTypes>) => {
      navigate(Paths.Dashboard);
    },
    [navigate]
  );

  const { state, onMutate } = useMutation({
    mutateFn: (axios) => (payload: SignUpTypes) =>
      axios.post(process.env.REACT_APP_API_URL_REGISTER, payload),
    onSuccess,
  });

  useEffect(() => {
    if (accessToken) navigate(Paths.Dashboard);
  });

  return (
    <Styled.SignUpContainer>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit(onMutate)} noValidate>
        <TextField
          variant="standard"
          type="email"
          label="Email"
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
          variant="standard"
          type="firstname"
          label="First name"
          {...register("firstName", {
            required: "This field cannot be empty",
          })}
          error={Boolean(errors.firstName)}
          helperText={errors.firstName?.message}
        />
        <TextField
          variant="standard"
          type="lastname"
          label="Last name"
          {...register("lastName", {
            required: "This field cannot be empty",
          })}
          error={Boolean(errors.lastName)}
          helperText={errors.lastName?.message}
        />
        <TextField
          variant="standard"
          type="password"
          label="Password"
          {...register("password", {
            required: "This field cannot be empty",
          })}
          error={Boolean(errors.password)}
          helperText={errors.password?.message}
        />
        {state.errorMessage && (
          <Typography color="error">{state.errorMessage}</Typography>
        )}
        <Styled.Button type="submit" disabled={state.isLoading}>
          Sign Up
        </Styled.Button>
      </form>
      <Typography>
        Have account already?
        <Styled.Link to={Paths.LogIn}>Click here to login</Styled.Link>
      </Typography>
    </Styled.SignUpContainer>
  );
};

export default SignUp;
