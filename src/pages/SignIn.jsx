import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useSignIn } from "./useSignIn";
import "./SignIn.css";

export default function SignIn() {
  const [email, setEmail] = useState("kikihorvatic@gmail.com");
  const [password, setPassword] = useState("kiki321123");
  const { mutate, isLoading } = useSignIn();

  function handleSubmit(e) {
    e.preventDefault();

    if (!email && !password) return;

    mutate(
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
    <div className="signIn">
      <Navbar />
      <div className="signIn__container">
        <form onSubmit={handleSubmit}>
          <h1>Sign in</h1>
          <input
            type="email"
            placeholder="Email"
            value={email}
            disabled={isLoading}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            disabled={isLoading}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button disabled={isLoading}>Sign in</button>
        </form>
      </div>
      <div className="signIn__overlay" />
    </div>
  );
}
