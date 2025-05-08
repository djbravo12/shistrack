import { NavLink } from "react-router";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Dialog, DialogPanel } from '@headlessui/react'
import { useState } from "react";





const navigation = [
    { name: 'Home', to: '/' },
    { name: 'Dashboards', to: '/Navbar' },
    { name: 'Product', to: '/Product' },
    // { name: 'Pricing', to: '#' },
]





const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)





    return (



        // <header className="bg-white shadow-sm">
        //     {/* <img src="" alt="" /> */}

        //     <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">

        //         <div className="flex lg:flex-1">
        //             <a href="#" className="-m-1.5 p-1.5">
        //                 {/* <span className="sr-only text-[#8c52ff]">Shistrack</span> */}
        //                 <span className="text-[#8c52ff] text-2xl">Shistrack</span>
        //                 {/* <img className="h-8 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt=""/> */}
        //             </a>
        //         </div>


        //         <div className="flex lg:hidden">
        //             <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
        //                 <span className="sr-only">Open main menu</span>
        //                 {/* <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
        //                     <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        //                 </svg> */}
        //             </button>
        //         </div>
        //         <div className="hidden lg:flex lg:gap-x-12">

        //             <NavLink to="/" className={({ isActive }) => `text-sm/6 font-semibold ${isActive ? "text-indigo-700" : "text-gray-900"}`}>Home</NavLink>
        //             <NavLink to="/Solutions" className={({ isActive }) => `text-sm/6 font-semibold ${isActive ? "text-indigo-700" : "text-gray-900"}`}>Solutions</NavLink>
        //             <NavLink to="/Product" className={({ isActive }) => `text-sm/6 font-semibold ${isActive ? "text-indigo-700" : "text-gray-900"}`}>Product</NavLink>
        //             <a href="#" className="text-sm/6 font-semibold text-gray-900">Resources</a>
        //             <a href="#" className="text-sm/6 font-semibold text-gray-900">Pricing</a>
        //         </div>
        //         <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        //             <a href="#" className="text-sm/6 font-semibold text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
        //         </div>
        //     </nav>

        //     <div className="xl:hidden hidden" role="dialog" aria-modal="true">
        //         {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
        //         <div className="fixed inset-0 z-10"></div>
        //         <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        //             <div className="flex items-center justify-between">
        //                 <a href="#" className="-m-1.5 p-1.5">
        //                     <span className="sr-only">Your Company</span>
        //                     <img className="h-8 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="" />
        //                 </a>
        //                 <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
        //                     <span className="sr-only">Close menu</span>
        //                     {/* <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
        //                         <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        //                     </svg> */}
        //                 </button>
        //             </div>
        //             <div className="mt-6 flow-root">
        //                 <div className="-my-6 divide-y divide-gray-500/10">
        //                     <div className="space-y-2 py-6">
        //                         <div className="-mx-3">
        //                             <button type="button" className="flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50" aria-controls="disclosure-1" aria-expanded="false">
        //                                 Product
        //                                 {/* <!--
        //                                 Expand/collapse icon, toggle classNamees based on menu open state.

        //                                 Open: "rotate-180", Closed: ""
        //         --> */}
        //                                 {/* <svg className="size-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
        //                                     <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
        //                                 </svg> */}
        //                             </button>
        //                             {/* <!-- 'Product' sub-menu, show/hide based on menu state. --> */}
        //                             <div className="mt-2 space-y-2" id="disclosure-1">
        //                                 <a href="#" className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50">Analytics</a>
        //                                 <a href="#" className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50">Engagement</a>
        //                                 <a href="#" className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50">Security</a>
        //                                 <a href="#" className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50">Integrations</a>
        //                                 <a href="#" className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50">Automations</a>
        //                                 <a href="#" className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50">Watch demo</a>
        //                                 <a href="#" className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50">Contact sales</a>
        //                             </div>
        //                         </div>
        //                         <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Features</a>
        //                         <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Marketplace</a>
        //                         <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Company</a>
        //                     </div>
        //                     <div className="py-6">
        //                         <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Log in</a>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>

        // </header>



        // For authenticated users, show the Dashboard component with the routes to show the dashboard, profile, Result and  other pages.
        <header className=" inset-x-0 top-0 z-50">
            <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img
                            alt=""
                            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                            className="h-8 w-auto"
                        />
                    </a>
                </div>

                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                {/* <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5"> */}
                {/* <span className="sr-only text-[#8c52ff]">Shistrack</span> */}
                {/* <span className="text-[#8c52ff] text-2xl">Shistrack</span> */}
                {/* <img className="h-8 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt=""/> */}
                {/* </a>
                </div> */}

                <div className="hidden lg:flex lg:gap-x-12">

                    {navigation.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.to}
                            className={({ isActive }) => `text-sm/6 font-semibold  ${isActive ? "text-indigo-700" : "text-gray-900"}`}
                        >
                            {item.name}
                        </NavLink>
                    ))}

                    {/* <NavLink to="/" className={({ isActive }) => `-m-2.5 inline-flex items-center justify-center rounded-md p-2.5  ${isActive ? "text-indigo-700" : "text-gray-900"}`}>Home</NavLink>
                    <NavLink to="/Navbar" className={({ isActive }) => `-m-2.5 inline-flex items-center justify-center rounded-md p-2.5  ${isActive ? "text-indigo-700" : "text-gray-900"}`}>Dashboards</NavLink>
                    <NavLink to="/Product" className={({ isActive }) => `-m-2.5 inline-flex items-center justify-center rounded-md p-2.5  ${isActive ? "text-indigo-700" : "text-gray-900"}`}>Product</NavLink>
                    <a href="#" className="text-sm/6 font-semibold text-gray-900">Resources</a>
                    <a href="#" className="text-sm/6 font-semibold text-gray-900">Pricing</a> */}
                </div>

                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="#" className="text-sm/6 font-semibold text-gray-900">
                        Log in <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </nav>

            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                alt=""
                                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                                className="h-8 w-auto"
                            />
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <NavLink
                                        key={item.name}
                                        to={item.to}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </NavLink>
                                ))}
                            </div>
                            <div className="py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}

export default Header;
// This code defines a functional component called Header in React. The component returns a header element with a title and a subtitle for a To Do List application. The header includes an h1 element for the main title and a paragraph element for the subtitle, both of which are styled using CSS classNamees. The component is then exported for use in other parts of the application.   