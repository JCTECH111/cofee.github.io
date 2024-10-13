import React, { useState }  from 'react'
import { Link } from 'react-router-dom';

function VerifyCodeScreen() {
  const [otp, setOtp] = useState('');

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  const handleVerify = () => {
    // Handle OTP verification logic here
    console.log('OTP entered:', otp);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen  p-4">
    <div className="bg-white w-full max-w-md p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Verify Code</h2>
      <p className="text-center text-gray-600 mb-6">Please enter the 4-digit code sent to your email.</p>
      
      <input
        type="text"
        className="w-full border border-gray-300 p-3 rounded-lg text-center text-2xl tracking-widest"
        maxLength={4}
        value={otp}
        onChange={handleChange}
      />
      
      <Link to='/signin'>
      <button
        className="w-full mt-6 bg-brown-600 text-white py-3 rounded-lg hover:bg-brown-700 transition duration-200"
        onClick={handleVerify}
      >
        Verify
      </button>
      </Link>

      <div className="text-center text-gray-500 mt-4">
        Don’t have OTP? <span className="text-brown-600 hover:underline cursor-pointer">Resend Code</span>
      </div>
    </div>
  </div>
  )
}

export default VerifyCodeScreen