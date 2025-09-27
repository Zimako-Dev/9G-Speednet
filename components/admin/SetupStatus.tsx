'use client';

import { useState, useEffect } from 'react';
import { 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  RefreshCw, 
  Database, 
  Shield, 
  HardDrive, 
  Users,
  Package,
  ExternalLink
} from 'lucide-react';
import { testSupabaseConnection, getConnectionScore, getSetupInstructions, ConnectionTest } from '@/lib/testConnection';

export default function SetupStatus() {
  const [test, setTest] = useState<ConnectionTest | null>(null);
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);

  const runTest = async () => {
    setLoading(true);
    try {
      const result = await testSupabaseConnection();
      setTest(result);
      setScore(getConnectionScore(result));
    } catch (error) {
      console.error('Setup test failed:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    runTest();
  }, []);

  if (loading) {
    return (
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center justify-center space-x-3">
          <RefreshCw className="w-5 h-5 text-primary-500 animate-spin" />
          <span className="text-gray-600">Testing Supabase connection...</span>
        </div>
      </div>
    );
  }

  if (!test) {
    return (
      <div className="bg-red-50 rounded-xl border border-red-200 p-6">
        <div className="flex items-center space-x-3">
          <XCircle className="w-6 h-6 text-red-500" />
          <div>
            <h3 className="font-semibold text-red-900">Connection Test Failed</h3>
            <p className="text-red-700 text-sm">Unable to test Supabase connection</p>
          </div>
        </div>
      </div>
    );
  }

  const instructions = getSetupInstructions(test);
  const isFullySetup = score >= 90;

  return (
    <div className={`rounded-xl border p-6 ${
      isFullySetup 
        ? 'bg-green-50 border-green-200' 
        : score >= 50 
        ? 'bg-yellow-50 border-yellow-200' 
        : 'bg-red-50 border-red-200'
    }`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          {isFullySetup ? (
            <CheckCircle className="w-8 h-8 text-green-500" />
          ) : score >= 50 ? (
            <AlertTriangle className="w-8 h-8 text-yellow-500" />
          ) : (
            <XCircle className="w-8 h-8 text-red-500" />
          )}
          <div>
            <h3 className={`text-lg font-semibold ${
              isFullySetup ? 'text-green-900' : score >= 50 ? 'text-yellow-900' : 'text-red-900'
            }`}>
              Supabase Setup Status
            </h3>
            <p className={`text-sm ${
              isFullySetup ? 'text-green-700' : score >= 50 ? 'text-yellow-700' : 'text-red-700'
            }`}>
              Setup completion: {score}%
            </p>
          </div>
        </div>
        <button
          onClick={runTest}
          className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Retest</span>
        </button>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm mb-2">
          <span className="font-medium">Setup Progress</span>
          <span>{score}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div 
            className={`h-3 rounded-full transition-all duration-500 ${
              isFullySetup 
                ? 'bg-green-500' 
                : score >= 50 
                ? 'bg-yellow-500' 
                : 'bg-red-500'
            }`}
            style={{ width: `${score}%` }}
          ></div>
        </div>
      </div>

      {/* Status Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="flex items-center space-x-2">
          <Database className={`w-5 h-5 ${test.database ? 'text-green-500' : 'text-red-500'}`} />
          <span className="text-sm font-medium">Database</span>
          {test.database ? (
            <CheckCircle className="w-4 h-4 text-green-500" />
          ) : (
            <XCircle className="w-4 h-4 text-red-500" />
          )}
        </div>

        <div className="flex items-center space-x-2">
          <HardDrive className={`w-5 h-5 ${test.storage ? 'text-green-500' : 'text-red-500'}`} />
          <span className="text-sm font-medium">Storage</span>
          {test.storage ? (
            <CheckCircle className="w-4 h-4 text-green-500" />
          ) : (
            <XCircle className="w-4 h-4 text-red-500" />
          )}
        </div>

        <div className="flex items-center space-x-2">
          <Shield className={`w-5 h-5 ${test.auth ? 'text-green-500' : 'text-yellow-500'}`} />
          <span className="text-sm font-medium">Auth</span>
          {test.auth ? (
            <CheckCircle className="w-4 h-4 text-green-500" />
          ) : (
            <AlertTriangle className="w-4 h-4 text-yellow-500" />
          )}
        </div>

        <div className="flex items-center space-x-2">
          <Package className={`w-5 h-5 ${test.sampleData.products > 0 ? 'text-green-500' : 'text-yellow-500'}`} />
          <span className="text-sm font-medium">Data</span>
          {test.sampleData.products > 0 ? (
            <CheckCircle className="w-4 h-4 text-green-500" />
          ) : (
            <AlertTriangle className="w-4 h-4 text-yellow-500" />
          )}
        </div>
      </div>

      {/* Data Summary */}
      {test.sampleData.products > 0 && (
        <div className="bg-white rounded-lg p-4 mb-6 border border-gray-200">
          <h4 className="font-medium text-gray-900 mb-2">Database Content</h4>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600">{test.sampleData.products}</div>
              <div className="text-gray-600">Products</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-green">{test.sampleData.categories}</div>
              <div className="text-gray-600">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-blue">{test.sampleData.brands}</div>
              <div className="text-gray-600">Brands</div>
            </div>
          </div>
        </div>
      )}

      {/* Instructions */}
      <div className="space-y-3">
        <h4 className="font-medium text-gray-900">Setup Instructions</h4>
        {instructions.map((instruction, index) => (
          <div key={index} className="flex items-start space-x-2 text-sm">
            <span className="text-gray-400 mt-0.5">{index + 1}.</span>
            <span className="flex-1">{instruction}</span>
          </div>
        ))}
      </div>

      {/* Quick Links */}
      {!isFullySetup && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <h4 className="font-medium text-gray-900 mb-3">Quick Links</h4>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://supabase.com/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
            >
              <span>Supabase Dashboard</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="/SUPABASE_SETUP.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
              <span>Setup Guide</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
