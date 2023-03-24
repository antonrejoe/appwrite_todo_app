import React from "react";
import { useState, useEffect } from "react";
import { account } from "../appwrite/appwriteConfig.ts";
import { Link, useNavigate } from "react-router-dom";

import "../assets/css/Signup/index.css";
const Signup = () => {
  const navigate = useNavigate();
  const [user, setuser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const googleLogin = (e) => {
    e.preventDefault();
    account.createOAuth2Session("google", "http://localhost:4000/profile");
  };

  const signUpUser = async (e) => {
    e.preventDefault();

    const promise = account.create(
      crypto.randomUUID(),
      user.email,
      user.password,
      user.name
    );

    promise.then(
      function (response) {
        navigate("/profile"); //success
        response.json();
      },
      function (error) {
        console.log(error);
      }
    );
  };

  return (
    <>
      <div class="signUpItemContainer">
        Anata no
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="moshi moshi"
            onChange={(e) => {
              setuser({
                ...user,
                name: e.target.value,
              });
            }}
          />
        </div>
        <div>
          <label htmlFor="name">Email</label>

          <input
            id="email"
            name="email"
            type="text"
            placeholder="moshi moshi"
            onChange={(e) => {
              setuser({
                ...user,
                email: e.target.value,
              });
            }}
          />
        </div>
        <div>
          <label htmlFor="name">Password</label>

          <input
            id="password"
            name="email"
            type="text"
            placeholder="moshi moshi"
            onChange={(e) => {
              setuser({
                ...user,
                password: e.target.value,
              });
            }}
          />
        </div>
        <button type="submit" onClick={signUpUser} class="submitBtn">
          Submit{" "}
        </button>
        <button onClick={googleLogin}> google</button>
      </div>

      <Link to="/Login">Already an user ?</Link>
    </>
  );
};

export default Signup;
