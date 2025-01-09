import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-20 px-6">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {/* Column 1: Address */}
        <div>
          <h3 className="text-xl font-bold mb-4">Address</h3>
          <p className="text-gray-300 leading-relaxed">123 Main Street, Karachi Pakistan</p>
          <p className="text-gray-300 mt-3 font-light">(+123) 456 7890</p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-300 hover:text-white font-light transition-all">Home</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white font-light transition-all">About Us</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white font-light transition-all">Portfolio</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white font-light transition-all">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Our Services */}
        <div>
          <h3 className="text-xl font-bold mb-4">Our Services</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-300 hover:text-white font-light transition-all">UX/UI Design</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white font-light transition-all">Mobile App Development</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white font-light transition-all">Web Development</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white font-light transition-all">Cloud Services</a></li>
          </ul>
        </div>

        {/* Column 4: Follow Us */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <p className="text-gray-300 mb-4">
            Stay connected with us through our social media platforms.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              aria-label="Facebook"
              className="p-3 border-2 border-gray-400 rounded-full hover:border-white hover:bg-white hover:text-gray-900 transition-all"
            >
              <FaFacebook className="text-lg" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="p-3 border-2 border-gray-400 rounded-full hover:border-white hover:bg-white hover:text-gray-900 transition-all"
            >
              <FaTwitter className="text-lg" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="p-3 border-2 border-gray-400 rounded-full hover:border-white hover:bg-white hover:text-gray-900 transition-all"
            >
              <FaLinkedin className="text-lg" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="p-3 border-2 border-gray-400 rounded-full hover:border-white hover:bg-white hover:text-gray-900 transition-all"
            >
              <FaInstagram className="text-lg" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6">
        <p className="text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} THF-Ventures. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
