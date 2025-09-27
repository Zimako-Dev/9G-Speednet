# 🗄️ Supabase Setup - Correct Order

Follow these steps **in exact order** to set up your 9G Speednet database:

## 📋 Prerequisites

1. ✅ Supabase project created
2. ✅ Environment variables set in `.env.local`
3. ✅ Supabase SQL Editor open

## 🔢 Step-by-Step Setup

### **Step 1: Database Schema** 
📁 **File**: `supabase/schema-safe.sql`

1. Open Supabase SQL Editor
2. Copy and paste **entire contents** of `schema-safe.sql`
3. Click **"Run"**
4. ✅ Should see: "Schema Setup Complete"

**What this does:**
- Creates all database tables
- Sets up functions and triggers
- Handles existing tables safely

---

### **Step 2: Security Policies**
📁 **File**: `supabase/rls-policies.sql`

1. Copy and paste **entire contents** of `rls-policies.sql`
2. Click **"Run"**
3. ✅ Should complete without errors

**What this does:**
- Enables Row Level Security (RLS)
- Sets up user permissions
- Protects your data

---

### **Step 3: Storage Setup**
📁 **File**: `supabase/storage-setup.sql`

1. Copy and paste **entire contents** of `storage-setup.sql`
2. Click **"Run"**
3. ✅ Should see storage buckets created

**What this does:**
- Creates image storage buckets
- Sets up file upload policies
- Configures file permissions

---

### **Step 4: Sample Data (Optional)**
📁 **File**: `supabase/sample-data.sql`

1. Copy and paste **entire contents** of `sample-data.sql`
2. Click **"Run"**
3. ✅ Should see demo products added

**What this does:**
- Adds demo products and categories
- Creates sample brands
- Provides test data for development

---

## ✅ Verification

After each step, you can run these queries to verify:

### **After Step 1 (Schema):**
```sql
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
ORDER BY table_name;
```

### **After Step 3 (Storage):**
```sql
SELECT name, public 
FROM storage.buckets;
```

### **After Step 4 (Sample Data):**
```sql
SELECT 
    'Products' as table_name, COUNT(*) as count FROM products
UNION ALL
SELECT 
    'Categories' as table_name, COUNT(*) as count FROM categories
UNION ALL
SELECT 
    'Brands' as table_name, COUNT(*) as count FROM brands;
```

## 🚨 Common Issues

### **"relation already exists" error**
- ✅ **Solution**: Use `schema-safe.sql` instead of `schema.sql`
- This version handles existing tables gracefully

### **"permission denied" error**
- ✅ **Solution**: Make sure you're using the correct Supabase project
- Check your environment variables

### **"function does not exist" error**
- ✅ **Solution**: Run scripts in correct order
- Schema must be created before policies

## 🎯 Next Steps

After successful setup:

1. **Create Admin Users** in Supabase Auth:
   - `admin@9gspeed.co.za` (Your main admin account)
   - `admin@9gspeednet.com`
   - `manager@9gspeednet.com` 
   - `staff@9gspeednet.com`

2. **Test Connection**:
   - Visit `/admin/test` in your app
   - Check connection status

3. **Start Using**:
   - Visit `/admin` dashboard
   - Add your first product!

## 🆘 Still Having Issues?

1. **Check the test page**: `/admin/test`
2. **Review setup status**: Look for detailed error messages
3. **Check Supabase logs**: In your Supabase dashboard
4. **Verify environment**: Make sure `.env.local` is correct

---

**🎉 Once complete, your admin dashboard will be fully functional with real Supabase data!**
