// Admin and RBAC Types
export type UserRole = 'admin' | 'super_admin' | 'user';

export interface AdminUser {
  id: string;
  email: string;
  full_name?: string;
  role: UserRole;
  avatar_url?: string;
  created_at: string;
  updated_at: string;
  last_login?: string;
}

export interface Product {
  id: string | number;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  images: string[];
  category: string;
  features: string[];
  specifications: { [key: string]: string };
  description: string;
  badge?: string;
  inStock: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface CreateProductData {
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  category: string;
  features: string[];
  specifications: { [key: string]: string };
  description: string;
  badge?: string;
  inStock: boolean;
  images: string[];
}

export interface UpdateProductData extends Partial<CreateProductData> {
  id: string | number;
}

export interface DashboardStats {
  totalProducts: number;
  totalUsers: number;
  totalOrders: number;
  totalRevenue: number;
  recentOrders: number;
  lowStockProducts: number;
}

export interface AdminPermissions {
  canCreateProducts: boolean;
  canEditProducts: boolean;
  canDeleteProducts: boolean;
  canViewUsers: boolean;
  canManageUsers: boolean;
  canViewOrders: boolean;
  canManageOrders: boolean;
  canViewAnalytics: boolean;
  canManageSettings: boolean;
}

// RBAC Permission mapping
export const ROLE_PERMISSIONS: Record<UserRole, AdminPermissions> = {
  user: {
    canCreateProducts: false,
    canEditProducts: false,
    canDeleteProducts: false,
    canViewUsers: false,
    canManageUsers: false,
    canViewOrders: false,
    canManageOrders: false,
    canViewAnalytics: false,
    canManageSettings: false,
  },
  admin: {
    canCreateProducts: true,
    canEditProducts: true,
    canDeleteProducts: false,
    canViewUsers: true,
    canManageUsers: false,
    canViewOrders: true,
    canManageOrders: true,
    canViewAnalytics: true,
    canManageSettings: false,
  },
  super_admin: {
    canCreateProducts: true,
    canEditProducts: true,
    canDeleteProducts: true,
    canViewUsers: true,
    canManageUsers: true,
    canViewOrders: true,
    canManageOrders: true,
    canViewAnalytics: true,
    canManageSettings: true,
  },
};
