'use client';

import { useState, useEffect } from 'react';
import { 
  Database, 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  RefreshCw,
  Copy,
  ExternalLink,
  Code,
  Terminal
} from 'lucide-react';
import { testSupabaseConnection, ConnectionTest } from '@/lib/testConnection';
import { ProductService } from '@/lib/productService';

export default function AdminTestPage() {
  const [connectionTest, setConnectionTest] = useState<ConnectionTest | null>(null);
  const [loading, setLoading] = useState(false);
  const [envCheck, setEnvCheck] = useState({
    url: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
    key: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  });
  const [productTest, setProductTest] = useState<any>(null);

  const runTests = async () => {
    setLoading(true);
    try {
      // Test connection
      const connTest = await testSupabaseConnection();
      setConnectionTest(connTest);

      // Test product service
      try {
        const products = await ProductService.getAllProducts();
        const stats = await ProductService.getDashboardStats();
        setProductTest({ products: products.length, stats, error: null });
      } catch (error) {
        setProductTest({ products: 0, stats: null, error: error instanceof Error ? error.message : 'Unknown error' });
      }
    } catch (error) {
      console.error('Test failed:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    runTests();
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard Test</h1>
            <p className="mt-2 text-blue-100">
              Comprehensive testing and debugging for your Supabase setup
            </p>
          </div>
          <button
            onClick={runTests}
            disabled={loading}
            className="flex items-center space-x-2 px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
          >
            <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
            <span>Run Tests</span>
          </button>
        </div>
      </div>

      {/* Environment Check */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Terminal className="w-6 h-6 mr-2 text-gray-600" />
          Environment Variables
        </h2>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              {envCheck.url ? (
                <CheckCircle className="w-5 h-5 text-green-500" />
              ) : (
                <XCircle className="w-5 h-5 text-red-500" />
              )}
              <span className="font-medium">NEXT_PUBLIC_SUPABASE_URL</span>
            </div>
            <div className="text-sm text-gray-600">
              {envCheck.url ? 'Set' : 'Missing'}
            </div>
          </div>

          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              {envCheck.key ? (
                <CheckCircle className="w-5 h-5 text-green-500" />
              ) : (
                <XCircle className="w-5 h-5 text-red-500" />
              )}
              <span className="font-medium">NEXT_PUBLIC_SUPABASE_ANON_KEY</span>
            </div>
            <div className="text-sm text-gray-600">
              {envCheck.key ? 'Set' : 'Missing'}
            </div>
          </div>
        </div>

        {(!envCheck.url || !envCheck.key) && (
          <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h3 className="font-semibold text-yellow-900 mb-2">Missing Environment Variables</h3>
            <p className="text-yellow-800 text-sm mb-3">
              Create a <code className="bg-yellow-100 px-1 rounded">.env.local</code> file in your project root:
            </p>
            <div className="bg-gray-900 text-green-400 p-3 rounded-lg text-sm font-mono relative">
              <button
                onClick={() => copyToClipboard(`NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here`)}
                className="absolute top-2 right-2 p-1 hover:bg-gray-700 rounded"
              >
                <Copy className="w-4 h-4" />
              </button>
              <div>NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co</div>
              <div>NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here</div>
            </div>
          </div>
        )}
      </div>

      {/* Connection Test Results */}
      {connectionTest && (
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Database className="w-6 h-6 mr-2 text-gray-600" />
            Database Connection Test
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {/* Basic Connection */}
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Database Connection</span>
                {connectionTest.database ? (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-500" />
                )}
              </div>
              <p className="text-sm text-gray-600">
                {connectionTest.database ? 'Successfully connected' : 'Connection failed'}
              </p>
            </div>

            {/* Storage */}
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Storage Buckets</span>
                {connectionTest.storage ? (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-500" />
                )}
              </div>
              <p className="text-sm text-gray-600">
                {connectionTest.storage ? 'Buckets configured' : 'Buckets missing'}
              </p>
            </div>

            {/* Auth */}
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Authentication</span>
                {connectionTest.auth ? (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                ) : (
                  <AlertTriangle className="w-5 h-5 text-yellow-500" />
                )}
              </div>
              <p className="text-sm text-gray-600">
                {connectionTest.auth ? 'Auth working' : 'No user logged in'}
              </p>
            </div>

            {/* Sample Data */}
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Sample Data</span>
                {connectionTest.sampleData.products > 0 ? (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                ) : (
                  <AlertTriangle className="w-5 h-5 text-yellow-500" />
                )}
              </div>
              <p className="text-sm text-gray-600">
                {connectionTest.sampleData.products} products found
              </p>
            </div>
          </div>

          {/* Tables Status */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3">Database Tables</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
              {Object.entries(connectionTest.tables).map(([table, exists]) => (
                <div key={table} className="flex items-center space-x-2 p-2 bg-gray-50 rounded">
                  {exists ? (
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  ) : (
                    <XCircle className="w-4 h-4 text-red-500" />
                  )}
                  <span className="text-sm font-medium capitalize">{table}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Error Details */}
          {connectionTest.error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <h3 className="font-semibold text-red-900 mb-2">Connection Error</h3>
              <p className="text-red-800 text-sm font-mono">{connectionTest.error}</p>
            </div>
          )}
        </div>
      )}

      {/* Product Service Test */}
      {productTest && (
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Code className="w-6 h-6 mr-2 text-gray-600" />
            Product Service Test
          </h2>

          {productTest.error ? (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <h3 className="font-semibold text-red-900 mb-2">Service Error</h3>
              <p className="text-red-800 text-sm">{productTest.error}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600">{productTest.products}</div>
                <div className="text-blue-800 font-medium">Products Loaded</div>
              </div>
              
              {productTest.stats && (
                <>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-3xl font-bold text-green-600">{productTest.stats.totalUsers}</div>
                    <div className="text-green-800 font-medium">Total Users</div>
                  </div>
                  
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-3xl font-bold text-purple-600">{productTest.stats.totalOrders}</div>
                    <div className="text-purple-800 font-medium">Total Orders</div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      )}

      {/* Quick Actions */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a
            href="https://supabase.com/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 p-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            <span>Supabase Dashboard</span>
            <ExternalLink className="w-4 h-4" />
          </a>
          
          <a
            href="/SUPABASE_SETUP.md"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <span>Setup Guide</span>
            <ExternalLink className="w-4 h-4" />
          </a>
          
          <a
            href="/QUICK_START.md"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 p-4 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
          >
            <span>Quick Start</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* SQL Scripts */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-xl font-semibold mb-4">SQL Scripts to Run</h2>
        
        <div className="space-y-4">
          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold">1. Database Schema</h3>
              <button
                onClick={() => copyToClipboard('supabase/schema-safe.sql')}
                className="text-blue-600 hover:text-blue-700"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-2">Creates all tables, functions, and triggers</p>
            <code className="text-xs bg-gray-100 px-2 py-1 rounded">supabase/schema-safe.sql</code>
          </div>

          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold">2. Security Policies</h3>
              <button
                onClick={() => copyToClipboard('supabase/rls-policies.sql')}
                className="text-blue-600 hover:text-blue-700"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-2">Sets up Row Level Security and permissions</p>
            <code className="text-xs bg-gray-100 px-2 py-1 rounded">supabase/rls-policies.sql</code>
          </div>

          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold">3. Storage Setup</h3>
              <button
                onClick={() => copyToClipboard('supabase/storage-setup.sql')}
                className="text-blue-600 hover:text-blue-700"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-2">Creates storage buckets for images</p>
            <code className="text-xs bg-gray-100 px-2 py-1 rounded">supabase/storage-setup.sql</code>
          </div>

          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold">4. Sample Data (Optional)</h3>
              <button
                onClick={() => copyToClipboard('supabase/sample-data.sql')}
                className="text-blue-600 hover:text-blue-700"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-2">Adds demo products and categories</p>
            <code className="text-xs bg-gray-100 px-2 py-1 rounded">supabase/sample-data.sql</code>
          </div>
        </div>
      </div>
    </div>
  );
}
