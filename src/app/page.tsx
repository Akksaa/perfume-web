import Image from 'next/image';

export default function Home() {
  return (
    <>
      <main className="bg-white">
        <section className="md:py-16  px-6 lg:px-16">
          <div className="w-[100%] grid md:grid-cols-2 gap-3 lg:gap-8 items-center justify-items-end">
            <div>
              <h2 className="md:text-4xl text-2xl font-bold mb-4 text-gray-800 gravitas">About Us</h2>
              <p className="text-gray-600 mb-6 crimson lg:leading-9 lg:text-[26px] md:text-[20px] text-[16px] lg:tracking-wider">
                At Perfume Paradise, we offer a wide range of perfumes crafted with passion and care. 
                Let your scent leave a lasting impression wherever you go.
                At Perfume Paradise, we believe that a fragrance is more than just a scent—it&apos;s a statement, a memory, and a part of your unique identity. Whether you&apos;re looking for timeless classics or modern creations, our range caters to every preference and occasion.
              </p>
              <button className="bg-purple-400 crimson text-white font-semibold md:px-6 px-4 md:py-3 py-2 rounded-full shadow-md hover:bg-purple-500">
                Learn More
              </button>
            </div>
            <Image
              src="/about.jpeg"
              alt="Perfume Bottles"
              className="rounded-lg shadow-lg"
              width={500}
              height={500}
            />
          </div>
        </section>

        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="md:text-4xl text-2xl font-bold mb-4 text-gray-800 gravitas">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <Image
                    src={`/perfume${item}.jpeg`}
                    alt={`Perfume ${item}`}
                    className="w-full h-64 object-cover"
                    width={300}
                    height={300}
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

        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="md:text-4xl text-2xl font-bold mb-4 text-gray-800 gravitas">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white rounded-lg shadow-lg p-6">
                  <p className="text-gray-600 mb-4 poppins">
                    &quot;This is the best perfume I have ever used! The fragrance lasts all day and is 
                    simply enchanting.&quot;
                  </p>
                  <h4 className="text-gray-800 font-semibold crimson">Customer {item}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
