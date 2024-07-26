// src/pages/Register/Register.js
import React, { useState } from "react";
import Card from "../../components/card";
import FormInput from "../../components/form input";
import Button from "../../components/button";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic
  };

  return (
    <Card>
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <FormInput
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <FormInput
          label="Phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <FormInput
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button text="Register" type="submit" />
      </form>
    </Card>
  );
};

export default Register;
