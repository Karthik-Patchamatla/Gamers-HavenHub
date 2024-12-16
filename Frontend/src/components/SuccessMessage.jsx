import React from 'react';
import Lottie from 'lottie-react';
import successAnimation from '../assets/success-animation.json';

function SuccessMessage() {
  return (
    <div className="text-center">
      <Lottie animationData={successAnimation} loop={false} className="w-40 h-40 mx-auto" />
      <h2 className="text-green-500 text-lg mt-4">Registration Successful!</h2>
    </div>
  );
}

export default SuccessMessage;
