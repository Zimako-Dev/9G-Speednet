-- Fix for infinite recursion in RLS policies
-- Run this in your Supabase SQL Editor

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

-- Recreate products policies without recursion
CREATE POLICY "Admins can view all products" ON public.products
    FOR SELECT USING (
        (SELECT role FROM public.profiles WHERE id = auth.uid()) IN ('admin', 'super_admin')
    );

CREATE POLICY "Admins can insert products" ON public.products
    FOR INSERT WITH CHECK (
        (SELECT role FROM public.profiles WHERE id = auth.uid()) IN ('admin', 'super_admin')
    );

CREATE POLICY "Admins can update products" ON public.products
    FOR UPDATE USING (
        (SELECT role FROM public.profiles WHERE id = auth.uid()) IN ('admin', 'super_admin')
    );

CREATE POLICY "Admins can delete products" ON public.products
    FOR DELETE USING (
        (SELECT role FROM public.profiles WHERE id = auth.uid()) IN ('admin', 'super_admin')
    );

-- Recreate categories policies without recursion
CREATE POLICY "Admins can insert categories" ON public.categories
    FOR INSERT WITH CHECK (
        (SELECT role FROM public.profiles WHERE id = auth.uid()) IN ('admin', 'super_admin')
    );

CREATE POLICY "Admins can update categories" ON public.categories
    FOR UPDATE USING (
        (SELECT role FROM public.profiles WHERE id = auth.uid()) IN ('admin', 'super_admin')
    );

CREATE POLICY "Admins can delete categories" ON public.categories
    FOR DELETE USING (
        (SELECT role FROM public.profiles WHERE id = auth.uid()) IN ('admin', 'super_admin')
    );

-- Recreate brands policies without recursion
CREATE POLICY "Admins can insert brands" ON public.brands
    FOR INSERT WITH CHECK (
        (SELECT role FROM public.profiles WHERE id = auth.uid()) IN ('admin', 'super_admin')
    );

CREATE POLICY "Admins can update brands" ON public.brands
    FOR UPDATE USING (
        (SELECT role FROM public.profiles WHERE id = auth.uid()) IN ('admin', 'super_admin')
    );

CREATE POLICY "Admins can delete brands" ON public.brands
    FOR DELETE USING (
        (SELECT role FROM public.profiles WHERE id = auth.uid()) IN ('admin', 'super_admin')
    );
