import ProductPageClient from './ProductPageClient';
import { ProductService } from '@/lib/productService';

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const resolvedParams = await params;
  const product = await ProductService.getProductById(resolvedParams.id);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <a href="/store" className="text-primary-600 hover:text-primary-700">
            ← Back to Store
          </a>
        </div>
      </div>
    );
  }

  return <ProductPageClient product={product} />;
}