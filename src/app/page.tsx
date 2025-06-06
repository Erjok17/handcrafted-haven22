import Navbar from '@/components/Navbar';
import ProductCard from '@/components/ProductCard';

export default function Home() {
  const sampleProduct = {
    id: '1',
    name: 'Handmade Ceramic Mug',
    price: 25.99,
    description: 'Unique artisan mug with glazed finish',
    imageUrl: '/images/mug.jpg',
  };

  return (
    <main>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold my-8">Featured Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProductCard product={sampleProduct} />
        </div>
      </div>
    </main>
  );
}