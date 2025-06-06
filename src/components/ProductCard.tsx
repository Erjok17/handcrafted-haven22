import { Product } from '@/types/product';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-xl">{product.name}</h3>
        <p className="text-gray-600">${product.price.toFixed(2)}</p>
        <p className="mt-2 text-sm">{product.description}</p>
        <button className="mt-4 bg-amber-600 text-white py-2 px-4 rounded hover:bg-amber-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
}