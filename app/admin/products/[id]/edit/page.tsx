import { Suspense } from 'react';
import EditProductClient from './EditProductClient';

interface EditProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditProductPage({ params }: EditProductPageProps) {
  const resolvedParams = await params;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EditProductClient productId={resolvedParams.id} />
    </Suspense>
  );
}