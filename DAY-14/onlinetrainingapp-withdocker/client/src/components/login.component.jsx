import React, { useState } from "react";
import "./signup.component.css";
import { useNavigate } from "react-router-dom";

function Login() {
  let [user, setUser] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  return (
    <div className="main">
      <input type="checkbox" id="chk" aria-hidden="true" />

      <div className="signup">
        <form
          onSubmit={e => {
            e.preventDefault();
            fetch("http://localhost:3003/auth/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                ...user,
              }),
            })
              .then(res => res.json())
              .then(msg => {
                if (msg["token"]) {
                  localStorage["jwt-token"] = msg["token"];
                  navigate("/courses");
                }
              });
          }}
        >
          <label htmlFor="chk" aria-hidden="true">
            Sign In
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required=""
            onInput={e => setUser({ ...user, email: e.target.value })}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required=""
            onInput={e => setUser({ ...user, password: e.target.value })}
          />
          <button>Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
