import { useState } from "react";
import Navbar from "../components/Navbar";
import { useSignIn } from "./useSignIn";
import "./SignIn.css";
import { useForm } from "react-hook-form";

export default function SignIn() {
  const { mutate, isLoading } = useSignIn();
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    const { email, password } = data;

    if (!email && !password) return;

    mutate(
      { email, password },
      {
        onSettled: () => {
          reset();
        },
      }
    );
  }

  return (
    <div className="signIn">
      <Navbar />
      <div className="signIn__container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Sign in</h1>
          <div>
            <input
              type="email"
              placeholder="Email"
              disabled={isLoading}
              {...register("email", {
                required: "Please enter your email address",
              })}
            />
            {errors.email && <span>{errors?.email?.message}</span>}
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              disabled={isLoading}
              {...register("password", {
                required: "Please enter your password",
              })}
            />
            {errors.password && <span>{errors?.password?.message}</span>}
          </div>
          <button disabled={isLoading}>Sign in</button>
        </form>
      </div>
      <div className="signIn__overlay" />
    </div>
  );
}
