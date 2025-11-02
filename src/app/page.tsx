import Image from 'next/image'
import { FaFacebook, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa'

export default function Home() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
            {/* Container with mobile-first responsive design */}
            <div className="max-w-md mx-auto p-6 space-y-8">

                {/* Header Section - Headshot, Name, Title */}
                <div className="text-center space-y-4">
                    {/* Professional headshot */}
                    <div className="w-32 h-32 mx-auto relative">
                        <Image
                            src="/images/mandolynHeadshot.jpg"
                            alt="Mandolyn White - Mural Artist"
                            width={128}
                            height={128}
                            className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
                            priority
                        />
                    </div>

                    {/* Name and Title */}
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">Mandolyn White</h1>
                        <p className="text-lg text-purple-600 font-medium">Mural Artist</p>
                    </div>
                </div>

                {/* Bio Section */}
                        {/* Bio Section */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <p className="text-gray-700 leading-relaxed text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Contact Section */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-800 text-center">Contact</h2>
          
          {/* Phone */}
          <a 
            href="tel:+1234567890"
            className="block w-full bg-white border-2 border-gray-200 hover:border-purple-300 text-gray-700 font-medium py-4 px-6 rounded-lg text-center transition-colors duration-200"
          >
            <div className="flex items-center justify-center space-x-3">
              <FaPhone className="w-5 h-5 text-purple-600" />
              <span>(123) 456-7890</span>
            </div>
          </a>

          {/* Email */}
          <a 
            href="mailto:mandolyn@example.com"
            className="block w-full bg-white border-2 border-gray-200 hover:border-purple-300 text-gray-700 font-medium py-4 px-6 rounded-lg text-center transition-colors duration-200"
          >
            <div className="flex items-center justify-center space-x-3">
              <FaEnvelope className="w-5 h-5 text-purple-600" />
              <span>mandolyn@example.com</span>
            </div>
          </a>
        </div>

        {/* Social Links */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-800 text-center">Connect With Me</h2>

          {/* Facebook Link */}
          <a
            href="https://www.facebook.com/share/16NKMtdhBr/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-6 rounded-lg text-center transition-colors duration-200"
          >
            <div className="flex items-center justify-center space-x-3">
              <FaFacebook className="w-5 h-5" />
              <span>Facebook</span>
            </div>
          </a>

          {/* Instagram Link */}
          <a
            href="https://www.instagram.com/mandolynrae_?igsh=cWtuemEzOGNza2gy"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-4 px-6 rounded-lg text-center transition-all duration-200"
          >
            <div className="flex items-center justify-center space-x-3">
              <FaInstagram className="w-5 h-5" />
              <span>Instagram</span>
            </div>
          </a>
        </div>

        {/* Gallery Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 text-center">Gallery</h2>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Placeholder gallery items */}
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-sm">Gallery {item}</span>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <button className="w-full bg-white border-2 border-purple-200 hover:border-purple-300 text-purple-600 font-medium py-3 px-6 rounded-lg transition-colors duration-200">
            View Full Portfolio
          </button>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm pt-4">
          <p>© 2025 Mandolyn White. All rights reserved.</p>
        </div>
            </div>
        </main>
    )
}