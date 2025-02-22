
const Home = () => {
  return (
    <section className="section">
      <div className="container">
        <div>
          {/* banner */}
          <div className="mt-10 relative h-[650px] rounded-2xl overflow-hidden">
          <img 
            src="banner.jpg" 
            alt="banner-img"
            className="absolute z-10 h-[650px] w-full  object-cover rounded-2xl" 
          />

          <div className="relative z-20 h-full w-full inset-0 bg-black/70 grid place-content-center">
            <h1 
              className='text-center text-3xl md:text-4xl lg:text-6xl font-semibold bg-gradient-to-r from-pink-600 to-purple-500 bg-clip-text text-transparent mb-8 font-secound'
            >Discover Your Style</h1>
            <p
              className='text-gray-300 text-center md:text-[18px]  mb-6 text-[17px] md:text-lg font-secound'
            >
              Shop the latest trends and find your perfect look
            </p>
            <button
              className='w-[180px] py-2 bg-gradient-to-r from-pink-600 to-purple-500 mx-auto font-secound rounded cursor-pointer hover:from-pink-500 hover:to-purple-400 transition-colors duration-300'
            >
              Shop Now
            </button>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home