import React, { useState } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';
import FormHeader from '../components/FormHeader';

function LoginPage({ onClose, switchToRegister }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password });
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
        <FormHeader title="Welcome to Gamer's Haven" subtitle="Sign in to your GH account" />
        <form onSubmit={handleLogin}>
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
          <a href="#" onClick={switchToRegister} className="text-green-500 hover:underline">
            Create an account
          </a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
