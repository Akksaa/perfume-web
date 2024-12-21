import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <div>
      <section className="py-16 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto text-center">
                  <h2 className="md:text-4xl text-2xl font-bold mb-4 text-gray-800 gravitas">Our Perfumes</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                      <div key={item} className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <Image
                          src={`/perfume${item}.jpeg`}
                          alt={`Perfume ${item}`}
                          className="w-full h-[400px] object-cover"
                          width={400}
                          height={400}
                        />
                        <div className="p-6">
                          <h3 className="text-lg font-bold text-gray-800 mb-2 crimson">Perfume {item}</h3>
                          <p className="text-gray-600 roboto">$50.00</p>
                          <button className="mt-4 bg-purple-400 text-white px-4 py-2 rounded-full text-sm hover:bg-purple-500 crimson">
                            Buy Now
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
    </div>
  )
}

export default page
