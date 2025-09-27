-- 9G Speednet Quick Setup Script
-- ⚠️  IMPORTANT: This script cannot include other files in Supabase SQL Editor
-- You need to run the scripts manually in this order:

-- STEP-BY-STEP INSTRUCTIONS:
-- 1. First run: supabase/schema-safe.sql
-- 2. Then run: supabase/rls-policies.sql  
-- 3. Then run: supabase/storage-setup.sql
-- 4. Finally run: supabase/sample-data.sql (optional)

-- After running all scripts, run this verification query:

-- Check if tables exist
SELECT 
    table_name,
    CASE WHEN table_name IS NOT NULL THEN '✅ Created' ELSE '❌ Missing' END as status
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name IN ('profiles', 'products', 'orders', 'categories', 'brands')
ORDER BY table_name;

-- Check if storage buckets exist (run this after storage-setup.sql)
-- SELECT 
--     name as bucket_name,
--     '✅ Created' as status
-- FROM storage.buckets 
-- WHERE name IN ('product-images', 'category-images', 'brand-logos', 'user-avatars');

-- Check sample data (run this after sample-data.sql)
-- SELECT 
--     'Products' as table_name,
--     COUNT(*) as record_count
-- FROM products
-- UNION ALL
-- SELECT 
--     'Categories' as table_name,
--     COUNT(*) as record_count
-- FROM categories
-- UNION ALL
-- SELECT 
--     'Brands' as table_name,
--     COUNT(*) as record_count
-- FROM brands;

SELECT 'Verification queries ready - uncomment sections as you complete each step' as message;
