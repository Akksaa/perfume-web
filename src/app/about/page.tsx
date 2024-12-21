import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <>
    <main className="bg-white">
        <section className="lg:py-16 py-8 px-6 xl:px-32 lg:px-12">
          <div className="w-[100%] grid md:grid-cols-2 gap-8 items-center justify-items-end">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800 gravitas">Our Fragnances</h2>
              <p className="text-gray-600 mb-6 crimson lg:leading-7 lg:text-[23px]">
              At Perfume Paradise, our fragrances are more than scents—they&apos;re experiences. Each bottle is a masterpiece, crafted with precision and care to ignite emotions, evoke memories, and celebrate individuality. From bold and daring notes to soft and romantic aromas, our collection reflects the essence of modern luxury.
             Discover a world where innovation meets tradition, and let our fragrances become the perfect companion to your unique style.</p>
             
            </div>
            <Image
              src="/about1.jpeg"
              alt="Perfume Bottles"
              className="rounded-lg shadow-lg"
              width={350}
              height={350}
            />
          </div>
        </section>
        <section className="py-16 px-6 xl:px-32 lg:px-12">
          <div className="w-[100%] grid md:grid-cols-2 gap-8 items-center justify-items-start">
          <Image
              src="/about2.jpeg"
              alt="Perfume Bottles"
              className="rounded-lg shadow-lg"
              width={400}
              height={400}
            />
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800 gravitas">Our Collection</h2>
              <p className="text-gray-600 mb-6 crimson lg:leading-7 lg:text-[20px]">
              Explore Perfume Paradise&apos;s exclusive collection, where every fragrance is a work of art. From timeless classics to contemporary creations, our range is designed to cater to every mood, style, and occasion. Each scent in our collection tells a story, blending the finest ingredients to create unforgettable olfactory experiences.

Whether you seek bold and captivating aromas or soft and sophisticated tones, our curated selection promises to elevate your fragrance game. Discover your perfect match and let your scent speak volumes about you</p>
              <button className="bg-purple-400 crimson text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-purple-500">
                Learn More
              </button>
            </div>
          </div>
        </section>
        <section className="py-16 px-6 xl:px-32 lg:px-12">
          <div className="w-[100%] grid md:grid-cols-2 gap-8 items-center justify-items-end">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800 gravitas">Our Mission</h2>
              <p className="text-gray-600 mb-6 crimson lg:leading-7 lg:text-[20px]">
              At Perfume Paradise, our mission is to redefine the art of fragrance by offering scents that inspire confidence, creativity, and self-expression. We are dedicated to delivering unparalleled quality and craftsmanship, making luxury accessible to all.</p>
              
            </div>
            <Image
              src="/about3.jpeg"
              alt="Perfume Bottles"
              className="rounded-lg shadow-lg"
              width={350}
              height={350}
            />
          </div>
        </section>
        </main>
    
    </>
  )
}

export default page
