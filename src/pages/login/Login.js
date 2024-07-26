// src/pages/Login/Login.js
import React, { useState } from "react";
import Card from "../../components/card";
import FormInput from "../../components/form input";
import Button from "../../components/button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
  };

  return (
    <Card>
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <FormInput
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button text="Login" type="submit" />
      </form>
    </Card>
  );
};

export default Login;
