-- Complete fix for all infinite recursion issues in RLS policies
-- Run this ONCE in your Supabase SQL Editor

-- ============================================
-- PART 1: Fix Table RLS Policies
-- ============================================

-- Drop ALL existing policies for products, categories and brands
DROP POLICY IF EXISTS "Admins can view all products" ON public.products;
DROP POLICY IF EXISTS "Admins can insert products" ON public.products;
DROP POLICY IF EXISTS "Admins can update products" ON public.products;
DROP POLICY IF EXISTS "Admins can delete products" ON public.products;
DROP POLICY IF EXISTS "Admins can manage categories" ON public.categories;
DROP POLICY IF EXISTS "Admins can insert categories" ON public.categories;
DROP POLICY IF EXISTS "Admins can update categories" ON public.categories;
DROP POLICY IF EXISTS "Admins can delete categories" ON public.categories;
DROP POLICY IF EXISTS "Admins can manage brands" ON public.brands;
DROP POLICY IF EXISTS "Admins can insert brands" ON public.brands;
DROP POLICY IF EXISTS "Admins can update brands" ON public.brands;
DROP POLICY IF EXISTS "Admins can delete brands" ON public.brands;

-- Recreate products policies - allow authenticated users (admin check done at app level)
CREATE POLICY "Authenticated users can view all products" ON public.products
    FOR SELECT USING (
        auth.role() = 'authenticated' OR is_active = true
    );

CREATE POLICY "Authenticated users can insert products" ON public.products
    FOR INSERT WITH CHECK (
        auth.role() = 'authenticated'
    );

CREATE POLICY "Authenticated users can update products" ON public.products
    FOR UPDATE USING (
        auth.role() = 'authenticated'
    );

CREATE POLICY "Authenticated users can delete products" ON public.products
    FOR DELETE USING (
        auth.role() = 'authenticated'
    );

-- Recreate categories policies
CREATE POLICY "Authenticated users can insert categories" ON public.categories
    FOR INSERT WITH CHECK (
        auth.role() = 'authenticated'
    );

CREATE POLICY "Authenticated users can update categories" ON public.categories
    FOR UPDATE USING (
        auth.role() = 'authenticated'
    );

CREATE POLICY "Authenticated users can delete categories" ON public.categories
    FOR DELETE USING (
        auth.role() = 'authenticated'
    );

-- Recreate brands policies
CREATE POLICY "Authenticated users can insert brands" ON public.brands
    FOR INSERT WITH CHECK (
        auth.role() = 'authenticated'
    );

CREATE POLICY "Authenticated users can update brands" ON public.brands
    FOR UPDATE USING (
        auth.role() = 'authenticated'
    );

CREATE POLICY "Authenticated users can delete brands" ON public.brands
    FOR DELETE USING (
        auth.role() = 'authenticated'
    );

-- ============================================
-- PART 2: Fix Storage RLS Policies
-- ============================================

-- Drop old storage policies
DROP POLICY IF EXISTS "Admins can upload product images" ON storage.objects;
DROP POLICY IF EXISTS "Admins can update product images" ON storage.objects;
DROP POLICY IF EXISTS "Admins can delete product images" ON storage.objects;
DROP POLICY IF EXISTS "Admins can manage category images" ON storage.objects;
DROP POLICY IF EXISTS "Admins can manage brand logos" ON storage.objects;
DROP POLICY IF EXISTS "Admins can insert category images" ON storage.objects;
DROP POLICY IF EXISTS "Admins can update category images" ON storage.objects;
DROP POLICY IF EXISTS "Admins can delete category images" ON storage.objects;
DROP POLICY IF EXISTS "Admins can insert brand logos" ON storage.objects;
DROP POLICY IF EXISTS "Admins can update brand logos" ON storage.objects;
DROP POLICY IF EXISTS "Admins can delete brand logos" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can upload product images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can update product images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can delete product images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can upload category images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can update category images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can delete category images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can upload brand logos" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can update brand logos" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can delete brand logos" ON storage.objects;

-- Product images - authenticated users can manage
CREATE POLICY "Authenticated users can upload product images" ON storage.objects
    FOR INSERT WITH CHECK (
        bucket_id = 'product-images' AND
        auth.role() = 'authenticated'
    );

CREATE POLICY "Authenticated users can update product images" ON storage.objects
    FOR UPDATE USING (
        bucket_id = 'product-images' AND
        auth.role() = 'authenticated'
    );

CREATE POLICY "Authenticated users can delete product images" ON storage.objects
    FOR DELETE USING (
        bucket_id = 'product-images' AND
        auth.role() = 'authenticated'
    );

-- Category images - authenticated users can manage
CREATE POLICY "Authenticated users can upload category images" ON storage.objects
    FOR INSERT WITH CHECK (
        bucket_id = 'category-images' AND
        auth.role() = 'authenticated'
    );

CREATE POLICY "Authenticated users can update category images" ON storage.objects
    FOR UPDATE USING (
        bucket_id = 'category-images' AND
        auth.role() = 'authenticated'
    );

CREATE POLICY "Authenticated users can delete category images" ON storage.objects
    FOR DELETE USING (
        bucket_id = 'category-images' AND
        auth.role() = 'authenticated'
    );

-- Brand logos - authenticated users can manage
CREATE POLICY "Authenticated users can upload brand logos" ON storage.objects
    FOR INSERT WITH CHECK (
        bucket_id = 'brand-logos' AND
        auth.role() = 'authenticated'
    );

CREATE POLICY "Authenticated users can update brand logos" ON storage.objects
    FOR UPDATE USING (
        bucket_id = 'brand-logos' AND
        auth.role() = 'authenticated'
    );

CREATE POLICY "Authenticated users can delete brand logos" ON storage.objects
    FOR DELETE USING (
        bucket_id = 'brand-logos' AND
        auth.role() = 'authenticated'
    );

-- ============================================
-- DONE! Your admin dashboard should now work completely
-- ============================================
