import React, { useState } from "react";
import {
  Home,
  Search,
  Inbox,
  Bell,
  LayoutDashboard,
  BarChart,
  FileText,
  Receipt,
  Building,
  Trash2,
  Settings,
  Moon,
  Palette,
  HelpCircle,
  User,
  Menu
} from "lucide-react";
import { Link, Outlet } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Toggle Button (Always Visible on Mobile) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 sm:hidden"
        aria-label="Open sidebar"
      >
        <Menu />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white border-r z-50 transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          sm:relative sm:translate-x-0 sm:flex sm:flex-col sm:justify-between sm:p-4`}
      >
        <div>
          <div className="text-xl font-bold text-blue-600 mb-4 px-4 sm:px-0">Pointsale</div>

          <div className="space-y-4 px-4 sm:px-0">
            <div className="flex items-center space-x-2 text-gray-700">
              <Search className="w-4 h-4" />
              <span>Quick search</span>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2 text-gray-700">
                <Inbox className="w-4 h-4" />
                <span>Inbox</span>
              </div>
              <span className="text-xs bg-gray-200 px-2 py-0.5 rounded">12</span>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2 text-gray-700">
                <Bell className="w-4 h-4" />
                <span>Notifications</span>
              </div>
              <span className="text-xs bg-gray-200 px-2 py-0.5 rounded">15+</span>
            </div>

            <div className="text-sm text-gray-500 uppercase mt-6 mb-2">Menu</div>

            <div className="space-y-3">
              {/* <div className="bg-gray-100 rounded px-2 py-1 flex items-center space-x-2 text-blue-600 font-medium">
                <LayoutDashboard className="w-4 h-4" />
                <span><Link to="" className={({ isActive }) => `text-sm/6 font-semibold ${isActive ? "text-indigo-700" : "text-gray-900"}`}>Dashboard</Link></span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <BarChart className="w-4 h-4" />
                <span><Link to="AttendanceReport" className={({ isActive }) => `text-sm/6 font-semibold ${isActive ? "text-indigo-700" : "text-gray-900"}`}>Attendance Reports</Link></span>
              </div> */}
              <div className="flex items-center space-x-2 text-gray-700">
                <FileText className="w-4 h-4" />
                <span>Reporting</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <Receipt className="w-4 h-4" />
                <span>Order summary</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <Receipt className="w-4 h-4" />
                <span>Invoices</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <Building className="w-4 h-4" />
                <span>Manufactures</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <Trash2 className="w-4 h-4" />
                <span>Trash</span>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-3 rounded mt-6">
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Current plan:</span> Pro trial
              </p>
              <button className="mt-2 bg-white border border-blue-500 text-blue-600 text-sm px-3 py-1 rounded hover:bg-blue-100">
                ⚡ Upgrade to Pro
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-3 px-4 sm:px-0">
          <div className="flex items-center space-x-2 text-gray-700">
            <Settings className="w-4 h-4" />
            <span>Preferences</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-700">
            <Moon className="w-4 h-4" />
            <span>Dark mode</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-700">
            <Palette className="w-4 h-4" />
            <span>Themes</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-700">
            <HelpCircle className="w-4 h-4" />
            <span>Help</span>
          </div>

          <div className="border-t pt-4 flex items-center space-x-3">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="User"
              className="w-8 h-8 rounded-full"
            />
            <div>
              <div className="font-medium">Brooklyn</div>
              <div className="text-xs text-gray-500">Pro trial</div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 sm:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      <>
        {/* <Outlet /> */}
      </>
    </div>

  );
};

export default Navbar;
