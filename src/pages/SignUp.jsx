import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./SignUp.css";
import { useSignUp } from "./useSignUp";
import { useUser } from "./useUser";

export default function SignUp() {
  const { signup, isLoadingSignUp } = useSignUp();
  const { isAuth, isLoadingUser } = useUser();
  const navigate = useNavigate();
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;

  useEffect(() => {
    if (isAuth && !isLoadingUser) navigate("/app");
  }, [isAuth, navigate, isLoadingUser]);

  function onSubmit(data) {
    const { email, password } = data;

    if (!email && !password) return;

    signup(
      { email, password },

      {
        onSettled: () => {
          reset();
        },
      }
    );
  }

  return (
    <div className="signUp">
      <Navbar />
      <div className="signUp__container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Sign Up</h1>
          <div>
            <input
              type="email"
              placeholder="Email"
              disabled={isLoadingSignUp || isLoadingUser}
              {...register("email", { required: "You must enter your email" })}
            />
            {errors.email && <span>{errors?.email?.message}</span>}
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              disabled={isLoadingSignUp || isLoadingUser}
              {...register("password", {
                required: "You must enter your password",
              })}
            />
            {errors.password && <span>{errors?.password?.message}</span>}
          </div>
          <button disabled={isLoadingSignUp || isLoadingUser}>Sign Up</button>
        </form>
      </div>
      <div className="signUp__overlay" />
    </div>
  );
}
