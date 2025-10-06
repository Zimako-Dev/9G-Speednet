import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { CartProvider } from '@/contexts/CartContext';
import { AuthProvider } from '@/contexts/AuthContext';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: '9G Speednet - Premium WiFi Service Provider',
  description: 'Experience lightning-fast internet with 9G Speednet. Premium WiFi services with unmatched speed, reliability, and customer support.',
  keywords: 'WiFi, Internet, Broadband, High Speed Internet, ISP, 9G Speednet',
  icons: {
    icon: '/logo.png',
  },
  openGraph: {
    title: '9G Speednet - Premium WiFi Service Provider',
    description: 'Experience lightning-fast internet with 9G Speednet. Premium WiFi services with unmatched speed, reliability, and customer support.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '9G Speednet - Premium WiFi Service Provider',
    description: 'Experience lightning-fast internet with 9G Speednet. Premium WiFi services with unmatched speed, reliability, and customer support.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-white`}>
        <AuthProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}