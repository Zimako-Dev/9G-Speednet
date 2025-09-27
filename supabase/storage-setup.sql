-- Supabase Storage Setup for 9G Speednet

-- Create storage buckets
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES 
    ('product-images', 'product-images', true, 5242880, ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif']),
    ('category-images', 'category-images', true, 5242880, ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif']),
    ('brand-logos', 'brand-logos', true, 2097152, ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/svg+xml']),
    ('user-avatars', 'user-avatars', true, 1048576, ARRAY['image/jpeg', 'image/png', 'image/webp']);

-- Storage policies for product-images bucket
CREATE POLICY "Anyone can view product images" ON storage.objects
    FOR SELECT USING (bucket_id = 'product-images');

CREATE POLICY "Admins can upload product images" ON storage.objects
    FOR INSERT WITH CHECK (
        bucket_id = 'product-images' AND
        EXISTS (
            SELECT 1 FROM public.profiles 
            WHERE id = auth.uid() AND role IN ('admin', 'super_admin')
        )
    );

CREATE POLICY "Admins can update product images" ON storage.objects
    FOR UPDATE USING (
        bucket_id = 'product-images' AND
        EXISTS (
            SELECT 1 FROM public.profiles 
            WHERE id = auth.uid() AND role IN ('admin', 'super_admin')
        )
    );

CREATE POLICY "Admins can delete product images" ON storage.objects
    FOR DELETE USING (
        bucket_id = 'product-images' AND
        EXISTS (
            SELECT 1 FROM public.profiles 
            WHERE id = auth.uid() AND role IN ('admin', 'super_admin')
        )
    );

-- Storage policies for category-images bucket
CREATE POLICY "Anyone can view category images" ON storage.objects
    FOR SELECT USING (bucket_id = 'category-images');

CREATE POLICY "Admins can manage category images" ON storage.objects
    FOR ALL USING (
        bucket_id = 'category-images' AND
        EXISTS (
            SELECT 1 FROM public.profiles 
            WHERE id = auth.uid() AND role IN ('admin', 'super_admin')
        )
    );

-- Storage policies for brand-logos bucket
CREATE POLICY "Anyone can view brand logos" ON storage.objects
    FOR SELECT USING (bucket_id = 'brand-logos');

CREATE POLICY "Admins can manage brand logos" ON storage.objects
    FOR ALL USING (
        bucket_id = 'brand-logos' AND
        EXISTS (
            SELECT 1 FROM public.profiles 
            WHERE id = auth.uid() AND role IN ('admin', 'super_admin')
        )
    );

-- Storage policies for user-avatars bucket
CREATE POLICY "Anyone can view user avatars" ON storage.objects
    FOR SELECT USING (bucket_id = 'user-avatars');

CREATE POLICY "Users can upload their own avatar" ON storage.objects
    FOR INSERT WITH CHECK (
        bucket_id = 'user-avatars' AND
        (storage.foldername(name))[1] = auth.uid()::text
    );

CREATE POLICY "Users can update their own avatar" ON storage.objects
    FOR UPDATE USING (
        bucket_id = 'user-avatars' AND
        (storage.foldername(name))[1] = auth.uid()::text
    );

CREATE POLICY "Users can delete their own avatar" ON storage.objects
    FOR DELETE USING (
        bucket_id = 'user-avatars' AND
        (storage.foldername(name))[1] = auth.uid()::text
    );
