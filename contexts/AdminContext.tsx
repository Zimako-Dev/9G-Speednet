'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useAuth } from './AuthContext';
import { AdminUser, UserRole, AdminPermissions, ROLE_PERMISSIONS } from '@/types/admin';
// Remove supabase import as it's not being used correctly

interface AdminContextType {
  adminUser: AdminUser | null;
  permissions: AdminPermissions;
  isAdmin: boolean;
  isSuperAdmin: boolean;
  loading: boolean;
  refreshAdminData: () => Promise<void>;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

// Mock admin users - in production, this would come from your database
const MOCK_ADMIN_USERS: Record<string, UserRole> = {
  'admin@9gspeednet.com': 'super_admin',
  'manager@9gspeednet.com': 'admin',
  'staff@9gspeednet.com': 'admin',
  'admin@9gspeed.co.za': 'super_admin', // Your admin account
};

export function AdminProvider({ children }: { children: ReactNode }) {
  const { user, loading: authLoading } = useAuth();
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);
  const [loading, setLoading] = useState(true);

  const getUserRole = (email: string): UserRole => {
    return MOCK_ADMIN_USERS[email] || 'user';
  };

  const refreshAdminData = async () => {
    if (!user) {
      setAdminUser(null);
      setLoading(false);
      return;
    }

    try {
      const role = getUserRole(user.email || '');
      
      const adminUserData: AdminUser = {
        id: user.id,
        email: user.email || '',
        full_name: user.user_metadata?.full_name || '',
        role,
        avatar_url: user.user_metadata?.avatar_url || '',
        created_at: user.created_at || new Date().toISOString(),
        updated_at: new Date().toISOString(),
        last_login: new Date().toISOString(),
      };

      setAdminUser(adminUserData);
    } catch (error) {
      console.error('Error fetching admin data:', error);
      setAdminUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!authLoading) {
      refreshAdminData();
    }
  }, [user, authLoading]);

  const permissions = adminUser ? ROLE_PERMISSIONS[adminUser.role] : ROLE_PERMISSIONS.user;
  const isAdmin = adminUser?.role === 'admin' || adminUser?.role === 'super_admin';
  const isSuperAdmin = adminUser?.role === 'super_admin';

  const value = {
    adminUser,
    permissions,
    isAdmin,
    isSuperAdmin,
    loading: loading || authLoading,
    refreshAdminData,
  };

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
}

// Higher-order component for protecting admin routes
export function withAdminAuth<P extends object>(Component: React.ComponentType<P>) {
  return function AdminProtectedComponent(props: P) {
    const { isAdmin, loading } = useAdmin();

    if (loading) {
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
        </div>
      );
    }

    if (!isAdmin) {
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h1>
            <p className="text-gray-600 mb-4">You don't have permission to access this page.</p>
            <a href="/" className="text-primary-600 hover:text-primary-700">
              ← Back to Home
            </a>
          </div>
        </div>
      );
    }

    return <Component {...props} />;
  };
}
