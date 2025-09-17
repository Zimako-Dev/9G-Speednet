-- Create profiles table for storing user information
-- This table will be linked to Supabase auth.users via the id field

CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  phone TEXT,
  date_of_birth DATE,
  address JSONB,
  preferences JSONB DEFAULT '{}',
  is_active BOOLEAN DEFAULT true,
  email_verified BOOLEAN DEFAULT false,
  marketing_consent BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS profiles_email_idx ON public.profiles(email);
CREATE INDEX IF NOT EXISTS profiles_full_name_idx ON public.profiles(full_name);
CREATE INDEX IF NOT EXISTS profiles_created_at_idx ON public.profiles(created_at);
CREATE INDEX IF NOT EXISTS profiles_is_active_idx ON public.profiles(is_active);

-- Enable Row Level Security (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
-- Users can view their own profile
CREATE POLICY "Users can view own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

-- Users can update their own profile
CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

-- Users can insert their own profile
CREATE POLICY "Users can insert own profile" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- Create a function to automatically create a profile when a user signs up
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, email_verified)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', ''),
    true -- Auto-confirm email since we disabled email confirmation
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger to automatically create profile on user signup
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = timezone('utc'::text, now());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update updated_at
DROP TRIGGER IF EXISTS handle_updated_at ON public.profiles;
CREATE TRIGGER handle_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

-- Create a function to get user profile with additional info
CREATE OR REPLACE FUNCTION public.get_user_profile(user_id UUID)
RETURNS TABLE (
  id UUID,
  email TEXT,
  full_name TEXT,
  avatar_url TEXT,
  phone TEXT,
  date_of_birth DATE,
  address JSONB,
  preferences JSONB,
  is_active BOOLEAN,
  email_verified BOOLEAN,
  marketing_consent BOOLEAN,
  created_at TIMESTAMP WITH TIME ZONE,
  updated_at TIMESTAMP WITH TIME ZONE,
  auth_provider TEXT,
  last_sign_in_at TIMESTAMP WITH TIME ZONE
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    p.id,
    p.email,
    p.full_name,
    p.avatar_url,
    p.phone,
    p.date_of_birth,
    p.address,
    p.preferences,
    p.is_active,
    p.email_verified,
    p.marketing_consent,
    p.created_at,
    p.updated_at,
    COALESCE(au.raw_app_meta_data->>'provider', 'email') as auth_provider,
    au.last_sign_in_at
  FROM public.profiles p
  LEFT JOIN auth.users au ON p.id = au.id
  WHERE p.id = user_id AND p.is_active = true;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create function to update user profile
CREATE OR REPLACE FUNCTION public.update_user_profile(
  user_id UUID,
  new_full_name TEXT DEFAULT NULL,
  new_phone TEXT DEFAULT NULL,
  new_date_of_birth DATE DEFAULT NULL,
  new_address JSONB DEFAULT NULL,
  new_preferences JSONB DEFAULT NULL,
  new_marketing_consent BOOLEAN DEFAULT NULL
)
RETURNS BOOLEAN AS $$
BEGIN
  UPDATE public.profiles
  SET 
    full_name = COALESCE(new_full_name, full_name),
    phone = COALESCE(new_phone, phone),
    date_of_birth = COALESCE(new_date_of_birth, date_of_birth),
    address = COALESCE(new_address, address),
    preferences = COALESCE(new_preferences, preferences),
    marketing_consent = COALESCE(new_marketing_consent, marketing_consent),
    updated_at = timezone('utc'::text, now())
  WHERE id = user_id AND auth.uid() = user_id;
  
  RETURN FOUND;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Grant necessary permissions
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT ALL ON public.profiles TO authenticated;
GRANT SELECT ON public.profiles TO anon;

-- Insert some example data (optional - remove in production)
-- INSERT INTO public.profiles (id, email, full_name, phone, preferences) VALUES
-- ('00000000-0000-0000-0000-000000000001', 'john.doe@example.com', 'John Doe', '+27123456789', '{"theme": "dark", "notifications": true}'),
-- ('00000000-0000-0000-0000-000000000002', 'jane.smith@example.com', 'Jane Smith', '+27987654321', '{"theme": "light", "notifications": false}');

-- Create view for easy profile access (optional)
CREATE OR REPLACE VIEW public.user_profiles AS
SELECT 
  p.*,
  au.email_confirmed_at,
  au.last_sign_in_at,
  COALESCE(au.raw_app_meta_data->>'provider', 'email') as auth_provider
FROM public.profiles p
LEFT JOIN auth.users au ON p.id = au.id
WHERE p.is_active = true;

-- Grant access to the view
GRANT SELECT ON public.user_profiles TO authenticated;
