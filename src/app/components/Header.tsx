import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div>
      <Head>
        <title>Perfume Paradise</title>
        <meta name="description" content="Explore the finest perfumes with enchanting scents." />
      </Head>
      <main className="bg-white">
        <section className="bg-gradient-to-r via-purple-300 from-indigo-300 to-pink-200 text-white py-20 px-6">
        
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl md:text-6xl font-bold mb-4 gravitas">Perfume Paradise</h1>
            <p className="text-lg md:text-xl mb-6 crimson">Discover your signature scent today.</p>
            <button className="bg-white text-purple-500 crimson font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100">
              Shop Now
            </button>
          </div>
        </section>
       </main>
       <nav className="w-full flex justify-center items-center text-gray-900 h-[100px]">
            <ul className=' crimson text-[24px] lg:gap-12 gap-6 hidden md:flex'>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Our Fragrances</Link></li>
              <li><Link href="/products">Our Perfumes</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header
