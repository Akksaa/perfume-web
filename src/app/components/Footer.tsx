import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-8 px-6">
          <div className="max-w-7xl mx-auto text-center crimson">
            <p>&copy; 2024 Perfume Paradise. All Rights Reserved.</p>
            <div className="flex justify-center gap-4 mt-4">
              <a href="#" className="text-purple-400 hover:text-purple-500">Facebook</a>
              <a href="#" className="text-purple-400 hover:text-purple-500">Instagram</a>
              <a href="#" className="text-purple-400 hover:text-purple-500">Twitter</a>
            </div>
          </div>
        </footer>
    </div>
  )
}

export default Footer
