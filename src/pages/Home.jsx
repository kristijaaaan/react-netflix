import React from "react";
import Navbar from "../components/Navbar";
import "./Home.css";

export default function Home() {
  return (
    <main className="main">
      <Navbar />
      <div className="main__body">
        <h1>Unlimited films, TV programmes and more.</h1>
        <h2>Watch anywhere. Cancel at any time.</h2>
        <h3>
          Ready to watch? Enter your email to create or restart your membership.
        </h3>

        <div className="main__input">
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="jane@doe.com" />
            <button className="main__getStarted">GET STARTED</button>
          </form>
        </div>
      </div>
      <div className="main__gradient" />
    </main>
  );
}
