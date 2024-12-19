import React, { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import FormHeader from "../components/FormHeader";
import SuccessMessage from "../components/SuccessMessage";
import { BASE_URL } from "../config";

function LoginPage({ onClose, switchToRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await fetch(`${BASE_URL}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 200) {
        setIsLoginSuccessful(true);
        setTimeout(() => {
          setIsLoginSuccessful(false);
          onClose();
        }, 3000);
      } else {
        const errorData = await response.json();
        setError(errorData.error || "Login failed. Please try again.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-black p-8 rounded-lg shadow-lg w-80 relative">
        <button
          className="absolute top-2 right-2 text-2xl text-red-600"
          onClick={onClose}
        >
          &times;
        </button>
        {isLoginSuccessful ? (
          <SuccessMessage name="Login Successful!" />
        ) : (
          <>
            <FormHeader
              title="Welcome to Gamer's Haven"
              subtitle="Sign in to your GH account"
            />
            <form onSubmit={handleLogin}>
              {error && (
                <div className="bg-red-500 text-white p-2 rounded mb-4">
                  {error}
                </div>
              )}
              <InputField
                id="email"
                label="Email"
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputField
                id="password"
                label="Password"
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button type="submit" text="Sign In" />
            </form>
            <div className="flex items-center my-4">
              <hr className="flex-grow border-[#adadad]-100" />
              <span className="mx-2 text-[#adadad] px-3">Or</span>
              <hr className="flex-grow border-[#adadad]-100" />
            </div>
            <div className="text-center">
              <p className="text-white">Don’t have an account?</p>
              <a
                href="#"
                onClick={switchToRegister}
                className="text-green-500 hover:underline"
              >
                Create an account
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginPage;
