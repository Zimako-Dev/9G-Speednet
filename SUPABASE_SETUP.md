# 9G Speednet Supabase Setup Guide

This guide will help you set up Supabase for your 9G Speednet admin dashboard and e-commerce functionality.

## Prerequisites

1. A Supabase account (sign up at https://supabase.com)
2. Node.js and npm installed
3. Your 9G Speednet project cloned locally

## Step 1: Create a New Supabase Project

1. Go to https://supabase.com/dashboard
2. Click "New Project"
3. Choose your organization
4. Enter project details:
   - Name: `9g-speednet`
   - Database Password: (generate a strong password)
   - Region: Choose closest to your users
5. Click "Create new project"
6. Wait for the project to be created (2-3 minutes)

## Step 2: Get Your Project Credentials

1. In your Supabase dashboard, go to Settings > API
2. Copy the following values:
   - Project URL
   - Anon (public) key

## Step 3: Configure Environment Variables

1. In your project root, copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` and add your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
   ```

## Step 4: Set Up the Database Schema

1. In your Supabase dashboard, go to the SQL Editor
2. Run the following SQL files in order:

### 4.1 Create Tables and Functions
Copy and paste the contents of `supabase/schema.sql` into the SQL Editor and run it.

### 4.2 Set Up Row Level Security
Copy and paste the contents of `supabase/rls-policies.sql` into the SQL Editor and run it.

### 4.3 Configure Storage
Copy and paste the contents of `supabase/storage-setup.sql` into the SQL Editor and run it.

### 4.4 Add Sample Data (Optional)
Copy and paste the contents of `supabase/sample-data.sql` into the SQL Editor and run it.

## Step 5: Create Admin Users

Since the sample data includes placeholder admin users, you need to create actual auth users:

1. Go to Authentication > Users in your Supabase dashboard
2. Click "Add user"
3. Create users with these emails:
   - `admin@9gspeednet.com` (Super Admin)
   - `manager@9gspeednet.com` (Admin)
   - `staff@9gspeednet.com` (Admin)
4. Set temporary passwords for each user
5. The system will automatically assign roles based on email addresses

## Step 6: Verify Storage Buckets

1. Go to Storage in your Supabase dashboard
2. Verify these buckets were created:
   - `product-images` (for product photos)
   - `category-images` (for category images)
   - `brand-logos` (for brand logos)
   - `user-avatars` (for user profile pictures)

## Step 7: Test the Setup

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to `http://localhost:3000`
3. Try logging in with one of the admin accounts
4. You should be automatically redirected to `/admin`
5. Test creating, editing, and deleting products

## Step 8: Configure Production (Optional)

For production deployment:

1. Update your environment variables in your hosting platform
2. Consider setting up database backups
3. Review and adjust RLS policies as needed
4. Set up monitoring and alerts

## Troubleshooting

### Common Issues

1. **"Invalid API key" error**
   - Double-check your environment variables
   - Make sure you're using the anon key, not the service role key

2. **"Row Level Security" errors**
   - Ensure RLS policies are properly set up
   - Check that admin users have the correct roles in the profiles table

3. **Storage upload errors**
   - Verify storage buckets exist
   - Check storage policies are correctly configured

4. **Database connection issues**
   - Verify your project URL is correct
   - Check if your Supabase project is active

### Getting Help

- Check the Supabase documentation: https://supabase.com/docs
- Join the Supabase Discord: https://discord.supabase.com
- Review the console logs for detailed error messages

## Database Schema Overview

### Key Tables

- **profiles**: User profiles with roles (user, admin, super_admin)
- **products**: Product catalog with images, features, specifications
- **categories**: Product categories
- **brands**: Product brands
- **orders**: Customer orders
- **order_items**: Individual items in orders
- **cart_items**: Shopping cart persistence
- **coupons**: Discount codes
- **site_settings**: Application configuration

### User Roles

- **user**: Regular customers (can browse, purchase)
- **admin**: Store managers (can manage products, orders, users)
- **super_admin**: Full access (can manage everything including settings)

## Security Features

- Row Level Security (RLS) on all tables
- Role-based access control (RBAC)
- Secure file uploads with type restrictions
- Automatic user profile creation on signup
- Protected admin routes and API endpoints

## Next Steps

After setup is complete, you can:

1. Customize the product categories and brands
2. Add real product data
3. Configure payment processing
4. Set up email notifications
5. Customize the admin dashboard further
6. Add analytics and reporting features

Your 9G Speednet admin dashboard is now fully functional with Supabase!
