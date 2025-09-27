# 🚀 Quick Start Guide - 9G Speednet Admin Dashboard

Get your admin dashboard up and running in 5 minutes!

## ⚡ Prerequisites

- Node.js 18+ installed
- A Supabase account (free at [supabase.com](https://supabase.com))

## 🎯 Step 1: Create Supabase Project

1. Go to [supabase.com/dashboard](https://supabase.com/dashboard)
2. Click **"New Project"**
3. Choose your organization
4. Enter project details:
   - **Name**: `9g-speednet`
   - **Database Password**: Generate a strong password
   - **Region**: Choose closest to your location
5. Click **"Create new project"**
6. Wait 2-3 minutes for setup to complete

## 🔑 Step 2: Get Your Credentials

1. In your Supabase dashboard, go to **Settings > API**
2. Copy these values:
   - **Project URL** (starts with `https://`)
   - **Anon public key** (starts with `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9`)

## 📝 Step 3: Configure Environment

1. In your project root, create `.env.local`:
   ```bash
   # Copy from .env.example
   cp .env.example .env.local
   ```

2. Edit `.env.local` with your credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ```

## 🗄️ Step 4: Set Up Database

1. In Supabase dashboard, go to **SQL Editor**
2. Run these scripts **in order**:

   **Option A: Quick Setup (All-in-one)**
   ```sql
   -- Copy and paste contents of supabase/quick-setup.sql
   ```

   **Option B: Step by Step**
   ```sql
   -- 1. Run supabase/schema-safe.sql
   -- 2. Run supabase/rls-policies.sql  
   -- 3. Run supabase/storage-setup.sql
   -- 4. Run supabase/sample-data.sql (optional)
   ```

## 👤 Step 5: Create Admin Users

1. In Supabase dashboard, go to **Authentication > Users**
2. Click **"Add user"**
3. Create these admin accounts:
   - **Email**: `admin@9gspeed.co.za` (Your Super Admin Account)
   - **Email**: `admin@9gspeednet.com` (Super Admin)
   - **Email**: `manager@9gspeednet.com` (Admin)
   - **Email**: `staff@9gspeednet.com` (Admin)
4. Set temporary passwords for each

## 🎉 Step 6: Test Your Setup

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Open [http://localhost:3000/admin](http://localhost:3000/admin)

3. Log in with one of your admin accounts

4. Check the **Setup Status** component for any issues

## ✅ Verification Checklist

Your dashboard should show:
- ✅ **Green connection indicator** in the header
- ✅ **Real product data** in the Recent Products table
- ✅ **Working "Add Product" button** in Quick Actions
- ✅ **Live statistics** in the dashboard cards

## 🔧 Troubleshooting

### ❌ "Database Error" in header
- Check your `.env.local` file has correct credentials
- Verify your Supabase project is active
- Ensure you've run the database scripts

### ❌ "No products found"
- Run `supabase/sample-data.sql` for demo products
- Check RLS policies are set up correctly

### ❌ "Access Denied"
- Ensure you're logged in with an admin email
- Check the user has admin role in the profiles table

### ❌ Environment variables not working
- Restart your development server after changing `.env.local`
- Ensure file is named exactly `.env.local` (not `.env`)

## 🆘 Need Help?

1. **Setup Status Component**: Check the detailed status in your admin dashboard
2. **Setup Guide**: Read the full [SUPABASE_SETUP.md](SUPABASE_SETUP.md)
3. **Console Logs**: Check browser console for detailed error messages
4. **Supabase Logs**: Check your Supabase dashboard logs

## 🎯 What's Next?

Once setup is complete, you can:
- ✨ Add real products through the admin interface
- 🛒 Test the shopping cart on the store page
- 👥 Manage users and orders
- 📊 View analytics and reports
- ⚙️ Customize settings and preferences

---

**🎉 Congratulations!** Your 9G Speednet admin dashboard is now fully functional with Supabase!
