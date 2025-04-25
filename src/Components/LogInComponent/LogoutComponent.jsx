import React from 'react';

const LogoutComponent = ({ onCancel, onLogout }) => {
    return (
        <div className="bg-white">
            {/* <div class="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8"> */}
            <div class="mx-auto max-w-md text-center lg:flex-auto lg:py-32 ">
                <h2 className='text-3xl font-semibold tracking-tight text-balance text-[#8c52ff] sm:text-4xl'>Are you sure you want to logout?</h2>


                <div class="mt-10 flex items-center justify-center gap-x-6">

                    <button
                        onClick={onCancel}
                        className="rounded-md bg-[#8c52ff] px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onLogout}
                        className="border rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-[#8c52ff] shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        Logout
                    </button>

                </div>
            </div>
        </div>
    );
};

export default LogoutComponent;