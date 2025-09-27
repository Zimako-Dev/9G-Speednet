'use client';

import { useEffect, useState } from 'react';
import { 
  Package, 
  Users, 
  ShoppingCart, 
  DollarSign, 
  TrendingUp, 
  AlertTriangle,
  Eye,
  Plus
} from 'lucide-react';
import Link from 'next/link';
import { ProductService } from '@/lib/productService';
import { DashboardStats, Product } from '@/types/admin';
import { useAdmin } from '@/contexts/AdminContext';
import SetupStatus from '@/components/admin/SetupStatus';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon: React.ElementType;
  href?: string;
}

function StatCard({ title, value, change, changeType = 'neutral', icon: Icon, href }: StatCardProps) {
  const content = (
    <div className="bg-white overflow-hidden shadow-sm rounded-xl border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <div className="p-6">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-purple rounded-xl flex items-center justify-center shadow-lg">
              <Icon className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="ml-4 flex-1 min-w-0">
            <div className="text-sm font-medium text-gray-500 uppercase tracking-wider truncate">{title}</div>
            <div className="text-2xl font-bold text-gray-900 truncate mt-1">{value}</div>
            {change && (
              <div className={`text-sm flex items-center mt-2 ${
                changeType === 'positive' ? 'text-green-600' : 
                changeType === 'negative' ? 'text-red-600' : 'text-gray-600'
              }`}>
                <TrendingUp className={`w-4 h-4 mr-1 ${
                  changeType === 'negative' ? 'rotate-180' : ''
                }`} />
                {change}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [recentProducts, setRecentProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [connectionStatus, setConnectionStatus] = useState<'connecting' | 'connected' | 'error'>('connecting');
  const { permissions } = useAdmin();

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [dashboardStats, products] = await Promise.all([
          ProductService.getDashboardStats(),
          ProductService.getAllProducts()
        ]);

        setStats(dashboardStats);
        // Get 5 most recent products
        const sortedProducts = products
          .sort((a, b) => new Date(b.created_at || '').getTime() - new Date(a.created_at || '').getTime())
          .slice(0, 5);
        setRecentProducts(sortedProducts);
        setConnectionStatus('connected');
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
        setConnectionStatus('error');
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return (
      <div className="animate-pulse">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="h-12 bg-gray-200 rounded mb-4"></div>
              <div className="h-8 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: 'ZAR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="bg-gradient-to-r from-primary-500 to-accent-purple rounded-xl shadow-sm p-6 text-white mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="mt-2 text-primary-100">
              Welcome back! Here's what's happening with your 9G Speednet store.
            </p>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-3 py-2">
              <div className={`w-2 h-2 rounded-full ${
                connectionStatus === 'connected' ? 'bg-green-400' : 
                connectionStatus === 'error' ? 'bg-red-400' : 'bg-yellow-400'
              }`}></div>
              <span className="text-white text-sm font-medium">
                {connectionStatus === 'connected' ? 'Connected' : 
                 connectionStatus === 'error' ? 'Database Error' : 'Connecting...'}
              </span>
            </div>
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <Package className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Setup Status */}
      {connectionStatus === 'error' && (
        <SetupStatus />
      )}

      {/* Stats grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Products"
          value={stats?.totalProducts || 0}
          change="+12% from last month"
          changeType="positive"
          icon={Package}
          href={permissions.canCreateProducts ? "/admin/products" : undefined}
        />
        <StatCard
          title="Total Users"
          value={stats?.totalUsers || 0}
          change="+8% from last month"
          changeType="positive"
          icon={Users}
          href={permissions.canViewUsers ? "/admin/users" : undefined}
        />
        <StatCard
          title="Total Orders"
          value={stats?.totalOrders || 0}
          change="+23% from last month"
          changeType="positive"
          icon={ShoppingCart}
          href={permissions.canViewOrders ? "/admin/orders" : undefined}
        />
        <StatCard
          title="Total Revenue"
          value={formatCurrency(stats?.totalRevenue || 0)}
          change="+15% from last month"
          changeType="positive"
          icon={DollarSign}
        />
      </div>

      {/* Quick actions and alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Quick Actions */}
        <div className="lg:col-span-2">
          <div className="bg-white shadow-sm rounded-xl border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
              <p className="text-sm text-gray-500 mt-1">Manage your store efficiently</p>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {permissions.canCreateProducts && (
                  <Link
                    href="/admin/products/new"
                    className="flex items-center p-4 border border-gray-200 rounded-xl hover:border-primary-300 hover:bg-primary-50 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-purple rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Plus className="w-5 h-5 text-white" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-semibold text-gray-900">Add Product</p>
                      <p className="text-xs text-gray-500">Create a new product</p>
                    </div>
                  </Link>
                )}
                
                {permissions.canViewOrders && (
                  <Link
                    href="/admin/orders"
                    className="flex items-center p-4 border border-gray-200 rounded-xl hover:border-accent-green hover:bg-green-50 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-accent-green to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Eye className="w-5 h-5 text-white" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-semibold text-gray-900">View Orders</p>
                      <p className="text-xs text-gray-500">{stats?.recentOrders} recent orders</p>
                    </div>
                  </Link>
                )}
                
                {permissions.canViewUsers && (
                  <Link
                    href="/admin/users"
                    className="flex items-center p-4 border border-gray-200 rounded-xl hover:border-accent-blue hover:bg-blue-50 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-accent-blue to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-semibold text-gray-900">Manage Users</p>
                      <p className="text-xs text-gray-500">View and manage users</p>
                    </div>
                  </Link>
                )}
                
                {permissions.canViewAnalytics && (
                  <Link
                    href="/admin/analytics"
                    className="flex items-center p-4 border border-gray-200 rounded-xl hover:border-accent-purple hover:bg-purple-50 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-accent-purple to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-semibold text-gray-900">View Analytics</p>
                      <p className="text-xs text-gray-500">Sales and performance</p>
                    </div>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Alerts */}
        <div className="bg-white shadow-sm rounded-xl border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Alerts</h3>
            <p className="text-sm text-gray-500 mt-1">System notifications</p>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              {stats && stats.lowStockProducts > 0 && (
                <div className="flex items-start space-x-2 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <AlertTriangle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-yellow-800">Low Stock Alert</p>
                    <p className="text-xs text-yellow-600">
                      {stats.lowStockProducts} product{stats.lowStockProducts > 1 ? 's' : ''} out of stock
                    </p>
                  </div>
                </div>
              )}
              
              <div className="flex items-start space-x-2 p-3 bg-blue-50 rounded-lg border border-blue-200">
                <TrendingUp className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-sm font-medium text-blue-800">Sales Update</p>
                  <p className="text-xs text-blue-600">
                    {stats?.recentOrders} new orders today
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Products */}
      <div className="bg-white shadow-sm rounded-xl border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Recent Products</h3>
            <p className="text-sm text-gray-500 mt-1">Latest additions to your catalog</p>
          </div>
          {permissions.canCreateProducts && (
            <Link
              href="/admin/products"
              className="text-sm text-primary-600 hover:text-primary-700 font-medium"
            >
              View all →
            </Link>
          )}
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Added
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentProducts.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 rounded-lg object-cover"
                          src={product.images[0]}
                          alt={product.name}
                        />
                      </div>
                      <div className="ml-3 min-w-0">
                        <div className="text-sm font-medium text-gray-900 truncate max-w-[200px]">
                          {product.name}
                        </div>
                        <div className="text-xs text-gray-500">{product.brand}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                    {product.category}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                    {formatCurrency(product.price)}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      product.inStock
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-500">
                    {product.created_at ? new Date(product.created_at).toLocaleDateString() : 'N/A'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
