'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Package, 
  Users, 
  ShoppingCart, 
  BarChart3, 
  Settings, 
  ChevronLeft,
  ChevronRight,
  Zap
} from 'lucide-react';
import { useAdmin } from '@/contexts/AdminContext';

const navigation = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard, permission: null },
  { name: 'Products', href: '/admin/products', icon: Package, permission: 'canViewProducts' },
  { name: 'Users', href: '/admin/users', icon: Users, permission: 'canViewUsers' },
  { name: 'Orders', href: '/admin/orders', icon: ShoppingCart, permission: 'canViewOrders' },
  { name: 'Analytics', href: '/admin/analytics', icon: BarChart3, permission: 'canViewAnalytics' },
  { name: 'Settings', href: '/admin/settings', icon: Settings, permission: 'canManageSettings' },
];

export default function AdminSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();
  const { permissions, adminUser } = useAdmin();

  const filteredNavigation = navigation.filter(item => {
    if (!item.permission) return true;
    return permissions[item.permission as keyof typeof permissions];
  });

  return (
    <>
      {/* Mobile sidebar backdrop */}
      <div className="lg:hidden fixed inset-0 bg-gray-600 bg-opacity-75 z-40" />
      
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 bg-white shadow-lg border-r border-gray-200 transition-all duration-300 ${
        collapsed ? 'w-16' : 'w-64'
      } lg:translate-x-0`}>
        
        {/* Logo and collapse button */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
          {!collapsed && (
            <Link href="/admin" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-purple rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary-500 to-accent-purple bg-clip-text text-transparent">
                9G Admin
              </span>
            </Link>
          )}
          
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {collapsed ? (
              <ChevronRight className="w-5 h-5 text-gray-600" />
            ) : (
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            )}
          </button>
        </div>

        {/* User info */}
        {!collapsed && adminUser && (
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-purple rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">
                  {adminUser.full_name?.charAt(0) || adminUser.email.charAt(0).toUpperCase()}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {adminUser.full_name || 'Admin User'}
                </p>
                <p className="text-xs text-gray-500 truncate capitalize">
                  {adminUser.role.replace('_', ' ')}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <nav className="flex-1 px-2 py-4 space-y-1">
          {filteredNavigation.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/admin' && pathname.startsWith(item.href));
            
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`group flex items-center px-2 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive
                    ? 'bg-primary-50 text-primary-700 border-r-2 border-primary-500'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
                title={collapsed ? item.name : undefined}
              >
                <item.icon
                  className={`flex-shrink-0 w-5 h-5 ${
                    isActive ? 'text-primary-500' : 'text-gray-400 group-hover:text-gray-500'
                  } ${collapsed ? 'mx-auto' : 'mr-3'}`}
                />
                {!collapsed && item.name}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        {!collapsed && (
          <div className="p-4 border-t border-gray-200">
            <div className="text-xs text-gray-500 text-center">
              <p>9G Speednet Admin</p>
              <p>v1.0.0</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
