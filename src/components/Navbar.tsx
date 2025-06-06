import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-amber-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <Link href="/" className="text-2xl font-bold">
          Handcrafted Haven
        </Link>
        <div className="space-x-4">
          <Link href="/login">Login</Link>
          <Link href="/cart">Cart</Link>
        </div>
      </div>
    </nav>
  );
}