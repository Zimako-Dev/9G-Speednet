'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

// Mock admin users - in production, this would come from your database
const MOCK_ADMIN_USERS: Record<string, boolean> = {
  'admin@9gspeednet.com': true,
  'manager@9gspeednet.com': true,
  'staff@9gspeednet.com': true,
};

export function useAuthRedirect() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      const isAdmin = MOCK_ADMIN_USERS[user.email || ''] || false;
      
      if (isAdmin) {
        // Check if we're not already on an admin page
        const currentPath = window.location.pathname;
        if (!currentPath.startsWith('/admin')) {
          router.push('/admin');
        }
      }
    }
  }, [user, loading, router]);

  return { user, loading };
}
