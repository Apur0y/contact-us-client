import Lottie from 'lottie-react';
import React, { useState } from 'react';
import RegisterLottie from '../../assets/register.json'

const Contact = () => {

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        message: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
      };


    return (
        <div className='bg-[#E2ECFF] min-h-screen flex justify-around items-center'>
           
            <div>
                <div>
                    <img src="/mainicon.png" alt="" />
                    <p className='text-black'>Welcome back to CyberCreaft Bangladesh,<br />where your creativity thrives. </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4 text-blue-800">
        <div>
          <label className="block text-sm font-medium">Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
            </div>

            <div>
            <Lottie className='size-100' animationData={RegisterLottie} loop={true} />

            </div>






        </div>
    );
};

export default Contact;