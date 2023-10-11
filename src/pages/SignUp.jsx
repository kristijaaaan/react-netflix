import { useState } from "react";
import Navbar from "../components/Navbar";
import "./SignUp.css";
import { useSignUp } from "./useSignUp";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, isLoading } = useSignUp();

  function handleSubmit(e) {
    e.preventDefault();

    if (!email && !password) return;

    signup(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
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
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>Sign Up</button>
        </form>
      </div>
      <div className="signUp__overlay" />
    </div>
  );
}
