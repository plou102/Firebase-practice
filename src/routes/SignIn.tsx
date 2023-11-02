import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import {
  Error,
  Form,
  Input,
  Switcher,
  Title,
  Wrapper,
} from "../components/AuthComponents";
import GithubBtn from "../components/GithubBtn";

export default function SignIn() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const {
      target: { name, value },
    } = e;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError("");

    if (isLoading || email === "" || password === "") return;

    try {
      setIsLoading(true);

      await signInWithEmailAndPassword(auth, email, password);

      navigate("/");
    } catch (e) {
      // setError
      if (e instanceof FirebaseError) {
        setError(e.message);
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Wrapper>
      <Title>📋 SignIn</Title>
      <Form onSubmit={onSubmit}>
        <Input
          name="email"
          value={email}
          placeholder="Email"
          type="email"
          onChange={onChange}
          required
        />
        <Input
          name="password"
          value={password}
          placeholder="Password"
          type="password"
          onChange={onChange}
          required
        />
        <Input type="submit" value={isLoading ? "Loading..." : "Sign In"} />
      </Form>
      {error !== "" ? <Error>{error}</Error> : null}
      <Switcher>
        Don't have an account? <Link to="/signup">Sign Up &rarr;</Link>
      </Switcher>

      <GithubBtn />
    </Wrapper>
  );
}
