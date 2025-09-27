'use client';

import { 
  BarChart3, 
  TrendingUp, 
  DollarSign, 
  ShoppingCart, 
  Users, 
  Package 
} from 'lucide-react';
import dynamic from 'next/dynamic';

// Dynamically import ApexCharts to avoid SSR issues
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function AnalyticsPage() {
  // Sales Trend Chart Configuration
  const salesTrendOptions = {
    chart: {
      type: 'area' as const,
      height: 320,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    colors: ['#FF69B4', '#10B981'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth' as const,
      width: 3,
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.1,
        stops: [0, 90, 100],
      },
    },
    grid: {
      borderColor: '#f1f5f9',
      strokeDashArray: 3,
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: '#64748b',
          fontSize: '12px',
        },
      },
    },
    yaxis: [
      {
        title: {
          text: 'Revenue (ZAR)',
          style: {
            color: '#64748b',
            fontSize: '12px',
          },
        },
        labels: {
          style: {
            colors: '#64748b',
            fontSize: '12px',
          },
          formatter: (value: number) => `R${(value / 1000).toFixed(0)}k`,
        },
      },
      {
        opposite: true,
        title: {
          text: 'Orders',
          style: {
            color: '#64748b',
            fontSize: '12px',
          },
        },
        labels: {
          style: {
            colors: '#64748b',
            fontSize: '12px',
          },
        },
      },
    ],
    tooltip: {
      shared: true,
      intersect: false,
      y: [
        {
          formatter: (value: number) => `R${value.toLocaleString()}`,
        },
        {
          formatter: (value: number) => `${value} orders`,
        },
      ],
    },
    legend: {
      position: 'top' as const,
      horizontalAlign: 'right' as const,
      fontSize: '12px',
      markers: {
        size: 6,
        strokeWidth: 0,
      },
    },
  };

  const salesTrendSeries = [
    {
      name: 'Revenue',
      type: 'area',
      data: [45000, 52000, 48000, 61000, 55000, 67000],
    },
    {
      name: 'Orders',
      type: 'line',
      data: [120, 140, 130, 165, 150, 180],
    },
  ];

  // Sales by Category Chart Configuration
  const categoryOptions = {
    chart: {
      type: 'donut' as const,
      height: 320,
    },
    colors: ['#FF69B4', '#10B981', '#3B82F6', '#8B5CF6', '#F59E0B'],
    labels: ['Routers', 'Extenders', 'Security', 'Power', 'Accessories'],
    dataLabels: {
      enabled: true,
      formatter: (val: number) => `${val.toFixed(1)}%`,
      style: {
        fontSize: '12px',
        fontWeight: 600,
        colors: ['#fff'],
      },
      dropShadow: {
        enabled: true,
        top: 1,
        left: 1,
        blur: 1,
        color: '#000',
        opacity: 0.45,
      },
    },
    stroke: {
      width: 2,
      colors: ['#fff'],
    },
    plotOptions: {
      pie: {
        donut: {
          size: '60%',
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: '16px',
              fontWeight: 600,
              color: '#374151',
            },
            value: {
              show: true,
              fontSize: '24px',
              fontWeight: 700,
              color: '#111827',
              formatter: (val: string) => `${val}%`,
            },
            total: {
              show: true,
              showAlways: true,
              label: 'Total Sales',
              fontSize: '14px',
              fontWeight: 400,
              color: '#6b7280',
              formatter: () => '100%',
            },
          },
        },
      },
    },
    legend: {
      position: 'bottom' as const,
      fontSize: '12px',
      markers: {
        size: 6,
        strokeWidth: 0,
      },
      itemMargin: {
        horizontal: 10,
        vertical: 5,
      },
    },
    tooltip: {
      y: {
        formatter: (val: number) => `${val}%`,
      },
    },
    responsive: [
      {
        breakpoint: 768,
        options: {
          chart: {
            height: 280,
          },
          legend: {
            position: 'bottom' as const,
          },
        },
      },
    ],
  };

  const categorySeries = [35, 25, 20, 12, 8];

  const topProducts = [
    { name: 'AX6000 Pro Gaming Router', sales: 124, revenue: 532596 },
    { name: 'Mesh WiFi System Pro', sales: 89, revenue: 320311 },
    { name: 'Enterprise Firewall', sales: 45, revenue: 404955 },
    { name: 'WiFi 6E Range Extender', sales: 156, revenue: 296244 },
    { name: 'UPS Power Backup 1500VA', sales: 78, revenue: 218322 },
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: 'ZAR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div>
      {/* Page header */}
      <div className="bg-gradient-to-r from-primary-500 to-accent-purple rounded-xl shadow-sm p-6 text-white mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Analytics</h1>
            <p className="mt-2 text-primary-100">
              Track your business performance and insights
            </p>
          </div>
          <div className="hidden md:block">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Key metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-purple rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <div className="ml-4 flex-1">
              <p className="text-sm font-medium text-gray-500">Revenue</p>
              <p className="text-2xl font-bold text-gray-900">R2.8M</p>
              <div className="flex items-center text-sm text-green-600">
                <TrendingUp className="w-4 h-4 mr-1" />
                +15.3%
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-r from-accent-green to-accent-blue rounded-lg flex items-center justify-center">
              <ShoppingCart className="w-6 h-6 text-white" />
            </div>
            <div className="ml-4 flex-1">
              <p className="text-sm font-medium text-gray-500">Orders</p>
              <p className="text-2xl font-bold text-gray-900">856</p>
              <div className="flex items-center text-sm text-green-600">
                <TrendingUp className="w-4 h-4 mr-1" />
                +23.1%
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-r from-accent-blue to-accent-purple rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="ml-4 flex-1">
              <p className="text-sm font-medium text-gray-500">Customers</p>
              <p className="text-2xl font-bold text-gray-900">1,247</p>
              <div className="flex items-center text-sm text-green-600">
                <TrendingUp className="w-4 h-4 mr-1" />
                +8.2%
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-r from-accent-purple to-primary-500 rounded-lg flex items-center justify-center">
              <Package className="w-6 h-6 text-white" />
            </div>
            <div className="ml-4 flex-1">
              <p className="text-sm font-medium text-gray-500">Products</p>
              <p className="text-2xl font-bold text-gray-900">8</p>
              <div className="flex items-center text-sm text-green-600">
                <TrendingUp className="w-4 h-4 mr-1" />
                +12.5%
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        
        {/* Sales trend */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Sales Trend</h3>
              <p className="text-sm text-gray-500 mt-1">Revenue and orders over time</p>
            </div>
            <select className="text-sm border border-gray-300 rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
              <option>Last 6 months</option>
              <option>Last year</option>
            </select>
          </div>
          <div className="h-80">
            <Chart
              options={salesTrendOptions}
              series={salesTrendSeries}
              type="area"
              height={320}
            />
          </div>
        </div>

        {/* Category distribution */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Sales by Category</h3>
            <p className="text-sm text-gray-500 mt-1">Product category distribution</p>
          </div>
          <div className="h-80">
            <Chart
              options={categoryOptions}
              series={categorySeries}
              type="donut"
              height={320}
            />
          </div>
        </div>
      </div>

      {/* Top products */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Top Performing Products</h3>
          <p className="text-sm text-gray-500 mt-1">Best selling products by revenue</p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Product</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Sales</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Revenue</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Performance</th>
              </tr>
            </thead>
            <tbody>
              {topProducts.map((product, index) => (
                <tr key={product.name} className="border-b border-gray-100">
                  <td className="py-4 px-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-purple rounded-lg flex items-center justify-center text-white text-sm font-semibold mr-3">
                        {index + 1}
                      </div>
                      <span className="text-sm font-medium text-gray-900">{product.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-900">{product.sales} units</td>
                  <td className="py-4 px-4 text-sm text-gray-900">{formatCurrency(product.revenue)}</td>
                  <td className="py-4 px-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary-500 to-accent-purple h-2 rounded-full" 
                        style={{ width: `${Math.min((product.sales / 200) * 100, 100)}%` }}
                      ></div>
                    </div>
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
