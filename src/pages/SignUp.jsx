import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./SignUp.css";
import { useSignUp } from "./useSignUp";
import { useUser } from "./useUser";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, isLoadingSignUp } = useSignUp();
  const { isAuth, isLoadingUser } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth && !isLoadingUser) navigate("/app");
  }, [isAuth, navigate, isLoadingUser]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!email && !password) return;

    signup(
      { email, password },

      {
        onSettled: () => {
          setPassword("");
        },
      }
    );
  }

  return (
    <div className="signUp">
      <Navbar />
      <div className="signUp__container">
        <form onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <input
            type="email"
            placeholder="Email"
            value={email}
            disabled={isLoadingSignUp || isLoadingUser}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            disabled={isLoadingSignUp || isLoadingUser}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button disabled={isLoadingSignUp || isLoadingUser}>Sign Up</button>
        </form>
      </div>
      <div className="signUp__overlay" />
    </div>
  );
}
