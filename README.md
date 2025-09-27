# 9G Speednet - ISP Website & Admin Dashboard

A comprehensive Next.js application for 9G Speednet, South Africa's premier internet service provider, featuring a modern website, e-commerce store, and fully functional admin dashboard with Supabase integration.

## 🚀 Features

### Public Website
- **Modern ISP Landing Page** - Professional design with 9G Speednet branding
- **Service Pages** - Dedicated pages for Fibre, Fixed LTE, and Microwave services
- **E-commerce Store** - Product catalog with shopping cart functionality
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **SEO Optimized** - Proper metadata and performance optimization

### Admin Dashboard
- **Role-Based Access Control (RBAC)** - Three user roles: user, admin, super_admin
- **Product Management** - Full CRUD operations for products with image management
- **Order Management** - Track and manage customer orders
- **User Management** - Customer administration and analytics
- **Dashboard Analytics** - Sales statistics and performance metrics
- **Settings Management** - System configuration and preferences

### Technical Features
- **Supabase Integration** - Real-time database with Row Level Security
- **Authentication** - Secure login with automatic admin detection
- **File Storage** - Image uploads with organized bucket structure
- **TypeScript** - Full type safety throughout the application
- **Modern UI** - Radix UI components with custom styling

## 🛠 Technology Stack

- **Framework**: Next.js 15.5.2 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.3.3
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Storage**: Supabase Storage
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **Charts**: Recharts

## 🎨 Brand Identity

- **Primary Color**: Hot Pink (#FF69B4)
- **Accent Colors**: 
  - Green (#10B981)
  - Blue (#3B82F6) 
  - Purple (#8B5CF6)
- **Typography**: Modern, clean fonts
- **Design**: Professional ISP branding with gradient accents

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/9g-speednet.git
   cd 9g-speednet
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Set up Supabase database**
   
   Follow the detailed setup guide in `SUPABASE_SETUP.md`

5. **Start the development server**
   ```bash
   npm run dev
   ```

## 🗄️ Database Schema

### Core Tables
- **profiles** - User profiles with role-based permissions
- **products** - Product catalog with images and specifications
- **categories** - Product categories
- **brands** - Product brands
- **orders** - Customer orders with tracking
- **order_items** - Individual order line items
- **cart_items** - Persistent shopping cart
- **coupons** - Discount codes and promotions
- **site_settings** - Application configuration

### Storage Buckets
- **product-images** - Product photos (up to 5MB each)
- **category-images** - Category thumbnails
- **brand-logos** - Brand logos and assets
- **user-avatars** - User profile pictures

## 👥 User Roles & Permissions

### Super Admin (`super_admin`)
- Full system access
- Manage all products, orders, users
- System settings and configuration
- Delete products and manage critical operations

### Admin (`admin`)
- Product management (create, edit)
- Order management and tracking
- User management and analytics
- Limited system settings access

### User (`user`)
- Browse products and services
- Place orders and track shipments
- Manage personal profile
- Shopping cart and wishlist

## 🔐 Admin Access

### Default Admin Accounts
Create these users in Supabase Auth:
- `admin@9gspeednet.com` (Super Admin)
- `manager@9gspeednet.com` (Admin)
- `staff@9gspeednet.com` (Admin)

### Accessing Admin Dashboard
1. Log in with an admin email address
2. System automatically detects admin role
3. Redirects to `/admin` dashboard
4. Role-based navigation and permissions applied

## 🛒 E-commerce Features

### Product Management
- Dynamic product catalog from Supabase
- Category and brand filtering
- Image galleries with multiple photos
- Detailed specifications and features
- Stock management and availability

### Shopping Experience
- Add to cart functionality
- Persistent cart across sessions
- Wishlist and favorites
- Product search and filtering
- Responsive product grid

### Order Processing
- Secure checkout process
- Order tracking and status updates
- Email notifications (ready for integration)
- Admin order management interface

## 📱 Responsive Design

- **Mobile-first** approach
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch-friendly** interfaces
- **Optimized images** and loading states
- **Accessible** components with proper ARIA labels

## 🔧 Development

### Project Structure
```
├── app/                    # Next.js App Router pages
│   ├── admin/             # Admin dashboard pages
│   ├── store/             # E-commerce store pages
│   └── services/          # Service pages (Fibre, LTE, etc.)
├── components/            # Reusable React components
│   ├── admin/            # Admin-specific components
│   ├── sections/         # Page sections
│   └── ui/               # Base UI components
├── contexts/             # React contexts (Auth, Cart, Admin)
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions and services
├── types/                # TypeScript type definitions
├── supabase/             # Database schema and setup files
└── public/               # Static assets
```

### Key Files
- `lib/productService.ts` - Product data management with Supabase
- `contexts/AdminContext.tsx` - RBAC permissions and admin state
- `hooks/useAuthRedirect.ts` - Authentication routing logic
- `types/admin.ts` - Admin and product type definitions
- `supabase/schema.sql` - Complete database schema

## 🚀 Deployment

### Prerequisites
1. Supabase project set up and configured
2. Environment variables configured
3. Database schema and RLS policies applied
4. Storage buckets created with proper policies

### Deploy to Vercel
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Deploy to Netlify
1. Connect repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `out` (if using static export)
4. Add environment variables

## 🧪 Testing

### Manual Testing Checklist
- [ ] Admin login and role detection
- [ ] Product CRUD operations
- [ ] Image upload functionality
- [ ] Order management workflow
- [ ] Public store functionality
- [ ] Shopping cart persistence
- [ ] Responsive design on all devices

### Automated Testing (Future)
- Unit tests with Jest
- Integration tests with Cypress
- API endpoint testing
- Database migration testing

## 📈 Performance

### Optimization Features
- **Next.js Image Optimization** - Automatic image resizing and WebP conversion
- **Code Splitting** - Automatic route-based code splitting
- **Static Generation** - Pre-rendered pages where possible
- **Lazy Loading** - Components and images loaded on demand
- **Caching** - Supabase query caching and optimization

### Monitoring
- Core Web Vitals tracking
- Database query performance
- Error logging and monitoring
- User analytics (ready for integration)

## 🔒 Security

### Authentication & Authorization
- Supabase Auth with JWT tokens
- Row Level Security (RLS) policies
- Role-based access control (RBAC)
- Protected admin routes
- Secure API endpoints

### Data Protection
- Input validation with Zod schemas
- SQL injection prevention
- XSS protection
- CSRF protection
- Secure file uploads with type validation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

### Documentation
- [Supabase Setup Guide](SUPABASE_SETUP.md)
- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

### Getting Help
- Check the GitHub Issues for common problems
- Review the Supabase dashboard for database issues
- Check browser console for client-side errors
- Review server logs for API issues

## 🎯 Roadmap

### Phase 1 (Current)
- [x] Basic website and admin dashboard
- [x] Supabase integration
- [x] Product management
- [x] User authentication and RBAC

### Phase 2 (Next)
- [ ] Payment processing integration
- [ ] Email notifications
- [ ] Advanced analytics
- [ ] Customer support chat
- [ ] Mobile app (React Native)

### Phase 3 (Future)
- [ ] Multi-tenant support
- [ ] Advanced reporting
- [ ] API for third-party integrations
- [ ] Automated testing suite
- [ ] Performance monitoring

---

**9G Speednet** - Connecting South Africa with premium internet solutions.

For technical support, contact: [tech@9gspeednet.com](mailto:tech@9gspeednet.com)
