import { createClient } from '@/lib/supabase/client';

export interface ConnectionTest {
  database: boolean;
  storage: boolean;
  auth: boolean;
  tables: {
    profiles: boolean;
    products: boolean;
    categories: boolean;
    brands: boolean;
    orders: boolean;
  };
  sampleData: {
    products: number;
    categories: number;
    brands: number;
  };
  error?: string;
}

export async function testSupabaseConnection(): Promise<ConnectionTest> {
  const supabase = createClient();
  
  const result: ConnectionTest = {
    database: false,
    storage: false,
    auth: false,
    tables: {
      profiles: false,
      products: false,
      categories: false,
      brands: false,
      orders: false,
    },
    sampleData: {
      products: 0,
      categories: 0,
      brands: 0,
    },
  };

  try {
    // Test basic database connection
    const { data: dbTest, error: dbError } = await supabase
      .from('profiles')
      .select('count')
      .limit(1);
    
    if (!dbError) {
      result.database = true;
    }

    // Test each table individually
    try {
      const { error: profilesError } = await supabase.from('profiles').select('id').limit(1);
      if (!profilesError) result.tables.profiles = true;
    } catch (e) {}

    try {
      const { error: productsError } = await supabase.from('products').select('id').limit(1);
      if (!productsError) result.tables.products = true;
    } catch (e) {}

    try {
      const { error: categoriesError } = await supabase.from('categories').select('id').limit(1);
      if (!categoriesError) result.tables.categories = true;
    } catch (e) {}

    try {
      const { error: brandsError } = await supabase.from('brands').select('id').limit(1);
      if (!brandsError) result.tables.brands = true;
    } catch (e) {}

    try {
      const { error: ordersError } = await supabase.from('orders').select('id').limit(1);
      if (!ordersError) result.tables.orders = true;
    } catch (e) {}

    // Test storage
    try {
      const { data: buckets, error: storageError } = await supabase.storage.listBuckets();
      if (!storageError && buckets) {
        result.storage = buckets.some(bucket => bucket.name === 'product-images');
      }
    } catch (e) {
      // Storage not accessible
    }

    // Test auth
    try {
      const { data: { user }, error: authError } = await supabase.auth.getUser();
      result.auth = !authError;
    } catch (e) {
      // Auth not working
    }

    // Count sample data
    if (result.tables.products) {
      try {
        const { count } = await supabase
          .from('products')
          .select('*', { count: 'exact', head: true });
        result.sampleData.products = count || 0;
      } catch (e) {
        // Can't count products
      }
    }

    if (result.tables.categories) {
      try {
        const { count } = await supabase
          .from('categories')
          .select('*', { count: 'exact', head: true });
        result.sampleData.categories = count || 0;
      } catch (e) {
        // Can't count categories
      }
    }

    if (result.tables.brands) {
      try {
        const { count } = await supabase
          .from('brands')
          .select('*', { count: 'exact', head: true });
        result.sampleData.brands = count || 0;
      } catch (e) {
        // Can't count brands
      }
    }

  } catch (error) {
    result.error = error instanceof Error ? error.message : 'Unknown error';
  }

  return result;
}

export function getConnectionScore(test: ConnectionTest): number {
  let score = 0;
  const maxScore = 10;

  // Database connection (2 points)
  if (test.database) score += 2;

  // Tables (5 points - 1 each)
  Object.values(test.tables).forEach(exists => {
    if (exists) score += 1;
  });

  // Storage (1 point)
  if (test.storage) score += 1;

  // Auth (1 point)
  if (test.auth) score += 1;

  // Sample data (1 point)
  if (test.sampleData.products > 0 && test.sampleData.categories > 0) score += 1;

  return Math.round((score / maxScore) * 100);
}

export function getSetupInstructions(test: ConnectionTest): string[] {
  const instructions: string[] = [];

  if (!test.database) {
    instructions.push('❌ Database connection failed - Check your NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local');
  }

  if (!test.tables.profiles || !test.tables.products) {
    instructions.push('❌ Core tables missing - Run supabase/schema-safe.sql in your Supabase SQL editor');
  }

  if (!test.storage) {
    instructions.push('❌ Storage buckets missing - Run supabase/storage-setup.sql in your Supabase SQL editor');
  }

  if (test.database && Object.values(test.tables).every(t => t)) {
    instructions.push('❌ RLS policies missing - Run supabase/rls-policies.sql in your Supabase SQL editor');
  }

  if (test.sampleData.products === 0) {
    instructions.push('⚠️ No sample data - Run supabase/sample-data.sql for demo products (optional)');
  }

  if (!test.auth) {
    instructions.push('⚠️ Create admin users in Supabase Auth dashboard with emails: admin@9gspeednet.com, manager@9gspeednet.com, staff@9gspeednet.com');
  }

  if (instructions.length === 0) {
    instructions.push('✅ Everything looks good! Your Supabase setup is complete.');
  }

  return instructions;
}
