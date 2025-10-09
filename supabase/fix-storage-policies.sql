-- Fix for infinite recursion in Storage policies
-- Run this in your Supabase SQL Editor
-- Since buckets are public, we'll allow authenticated users to upload

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

-- Simple policies: Allow authenticated users to upload/manage images
-- You can add admin-only restrictions later after fixing the profiles RLS

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
