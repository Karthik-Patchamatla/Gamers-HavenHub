import React, { useState } from 'react';
import axios from 'axios';
import InputField from '../components/InputField';
import Button from '../components/Button';
import FormHeader from '../components/FormHeader';
import SuccessMessage from '../components/SuccessMessage';

function RegisterPage({ onClose, switchToLogin }) {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [mnumber, setMnumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  // Dynamic API URL
  const API_BASE_URL =
    process.env.NODE_ENV === 'production'
      ? 'https://backend-smoky-rho-53.vercel.app/api'
      : 'http://localhost:8080/api';

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}/register`, {
        firstName: fname,
        lastName: lname,
        mobileNumber: mnumber,
        email,
        password,
      });
      if (response.status === 201) {
        setTimeout(() => {
          setIsRegistered(true);
          const interval = setInterval(() => {
            setIsRegistered(false);
            clearInterval(interval);
            onClose();
          }, 3000);
        }, 2000);
      }
    } catch (error) {
      console.error("Registration failed:", error);
      alert("An error occurred while registering. Please try again.");
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
        {isRegistered ? (
          <SuccessMessage />
        ) : (
          <>
            <FormHeader title="Welcome to Gamer's Haven" subtitle="Sign up to your GH account" />
            <form onSubmit={handleRegister}>
              <InputField
                id="fname"
                label="FIRST NAME"
                type="text"
                placeholder="Enter First Name"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
              />
              <InputField
                id="lname"
                label="LAST NAME"
                type="text"
                placeholder="Enter Last Name"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
              />
              <InputField
                id="mnumber"
                label="MOBILE NUMBER"
                type="text"
                placeholder="Enter Mobile Number"
                value={mnumber}
                onChange={(e) => setMnumber(e.target.value)}
              />
              <InputField
                id="email"
                label="EMAIL"
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputField
                id="password"
                label="PASSWORD"
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button type="submit" text="Sign Up" />
            </form>
            <div className="flex items-center my-4">
              <hr className="flex-grow border-[#adadad]-100" />
              <span className="mx-2 text-[#adadad] px-3">Or</span>
              <hr className="flex-grow border-[#adadad]-100" />
            </div>
            <div className="text-center">
              <a href="#" onClick={switchToLogin} className="text-green-500 hover:underline">
                Back to Sign in
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default RegisterPage;
