-- Fix category field to accept any text value instead of enum
-- Run this in your Supabase SQL Editor

-- Change category column from enum to TEXT
ALTER TABLE public.products 
ALTER COLUMN category TYPE TEXT;

-- Now you can use any category name without restrictions
