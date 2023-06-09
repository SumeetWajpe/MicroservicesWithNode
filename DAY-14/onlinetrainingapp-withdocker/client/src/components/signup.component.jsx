import React, { useState } from "react";
import "./signup.component.css";
import { useNavigate } from "react-router-dom";

function SignUp() {
  let [newuser, setNewUser] = useState({ email: "", password: "", name: "" });
  let navigate = useNavigate();

  return (
    <div className="main-container">
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" className="label" />

        <div className="signup">
          <form
            onSubmit={e => {
              e.preventDefault();
              fetch("http://onlinetraining.com/auth/register", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  ...newuser,
                }),
              })
                .then(res => {
                  if (res.ok) {
                    return res;
                  }
                })
                .then(addeduser => {
                  if (addeduser?.name) {
                    // navigate("/");
                    window.location.href = "/";
                  }
                });
            }}
          >
            <label for="chk" aria-hidden="true" className="label">
              Sign up
            </label>

            <input
              type="text"
              name="txt"
              placeholder="User name"
              required=""
              className="input"
              onInput={e => setNewUser({ ...newuser, name: e.target.value })}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required=""
              className="input"
              onInput={e => setNewUser({ ...newuser, email: e.target.value })}
            />
            <input
              type="password"
              placeholder="Password"
              required=""
              className="input"
              onInput={e =>
                setNewUser({ ...newuser, password: e.target.value })
              }
            />
            <button>Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
