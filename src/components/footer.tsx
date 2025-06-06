export default function Footer() {
  return (
    <footer className="bg-amber-900 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Handcrafted Haven</h3>
            <p className="text-amber-100">
              Connecting artisans with lovers of unique handmade goods since 2023.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
              <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Column 3: Social */}
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" aria-label="Instagram">
                <img src="/svgs/instagram.svg" alt="Instagram" className="h-6 w-6" />
              </a>
              <a href="#" aria-label="Facebook">
                <img src="/svgs/facebook.svg" alt="Facebook" className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-amber-700 mt-8 pt-6 text-center text-sm">
          © {new Date().getFullYear()} Handcrafted Haven. All rights reserved.
        </div>
      </div>
    </footer>
  );
}