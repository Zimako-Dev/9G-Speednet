'use client';

import { useState } from 'react';
import { Bell, Search, User, LogOut, Home, Settings } from 'lucide-react';
import { useAdmin } from '@/contexts/AdminContext';
import { useAuth } from '@/contexts/AuthContext';

export default function AdminHeader() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { adminUser } = useAdmin();
  const { signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    window.location.href = '/';
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          
          {/* Search */}
          <div className="flex-1 max-w-lg">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-1.5 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 text-sm"
                placeholder="Search products, users, orders..."
              />
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            
            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-lg transition-colors relative"
              >
                <Bell className="h-6 w-6" />
                <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white" />
              </button>

              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-medium text-gray-900">Notifications</h3>
                      <span className="text-sm text-gray-500">3 new</span>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                        <div className="flex-shrink-0">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">New order received</p>
                          <p className="text-sm text-gray-500">Order #12345 for R2,499</p>
                          <p className="text-xs text-gray-400 mt-1">2 minutes ago</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
                        <div className="flex-shrink-0">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">Low stock alert</p>
                          <p className="text-sm text-gray-500">Gigabit Ethernet Switch is out of stock</p>
                          <p className="text-xs text-gray-400 mt-1">1 hour ago</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                        <div className="flex-shrink-0">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">Product updated</p>
                          <p className="text-sm text-gray-500">AX6000 Pro Gaming Router details updated</p>
                          <p className="text-xs text-gray-400 mt-1">3 hours ago</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-3 border-t border-gray-200">
                      <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                        View all notifications
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* User menu */}
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center space-x-3 p-2 text-sm rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-purple rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {adminUser?.full_name?.charAt(0) || adminUser?.email.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div className="hidden md:block text-left">
                  <p className="text-sm font-medium text-gray-900">
                    {adminUser?.full_name || 'Admin User'}
                  </p>
                  <p className="text-xs text-gray-500 capitalize">
                    {adminUser?.role.replace('_', ' ')}
                  </p>
                </div>
              </button>

              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-1">
                    <a
                      href="/"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <Home className="mr-3 h-4 w-4" />
                      Visit Site
                    </a>
                    <a
                      href="/admin/settings"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <Settings className="mr-3 h-4 w-4" />
                      Settings
                    </a>
                    <div className="border-t border-gray-100"></div>
                    <button
                      onClick={handleSignOut}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <LogOut className="mr-3 h-4 w-4" />
                      Sign out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
