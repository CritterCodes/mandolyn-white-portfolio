import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Container with mobile-first responsive design */}
      <div className="max-w-md mx-auto p-6 space-y-8">
        
        {/* Header Section - Headshot, Name, Title */}
        <div className="text-center space-y-4">
          {/* Headshot placeholder */}
          <div className="w-32 h-32 mx-auto relative">
            <div className="w-full h-full bg-gradient-to-br from-purple-200 to-pink-200 rounded-full flex items-center justify-center">
              <span className="text-gray-600 text-sm">Headshot</span>
            </div>
          </div>
          
          {/* Name and Title */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Mandolyn White</h1>
            <p className="text-lg text-purple-600 font-medium">Mural Artist</p>
          </div>
        </div>

        {/* Bio Section */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <p className="text-gray-700 leading-relaxed text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
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
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
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
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
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