import React, { useState } from 'react';

const LoginComponent = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        setFormData({ email: '', password: '' }); // Reset form after submission
        // Add login/logout logic here
    };

    return (
        <div className='flex min-h-full flex-col justify-center px-6 py-12 lg:px-8'>
            <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
                <h2 className='text-2xl text-center'>Sign in to your account</h2>
            </div>
            <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
                <form onSubmit={handleSubmit} className="space-y-6">
                   
                   {/* Email Input */}
                    <div>
                        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Email:</label>
                        <div className="mt-2">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>
                    <div >
                        <div className='flex items-center justify-betwee'>
                            <label htmlFor="password" className='block text-sm/6 font-medium text-gray-900'>Password:</label>
                            <div className='text-sm'>
                                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
                                required
                            />
                        </div>
                    </div>

                    <button type="submit" className="flex w-full justify-center rounded-md bg-[#8c52ff] px-3 py-2 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default LoginComponent;