const Carousel = () => {
  return (
    <section className="bg-white py-[94px] px-4" id="about">
      <div className="container mx-auto max-w-[1300px] flex flex-col lg:flex-row justify-center items-center gap-16 lg:gap-[110px]">
        <div className="order-2 lg:order-1 flex flex-col justify-start items-start max-w-[470px]">
          <div className="flex items-center justify-center gap-2 font-medium text-xl text-black">
            <img src="/Shape.png" alt="shape" className="size-[34px]" />Logo
          </div>

          <div className="relative">
            <h2 className="mt-[29px] text-4xl md:text5 lg:text-[55px] font-medium leading-none lg:leading-[60px] flex"><span>
              <img src="/quot-1.svg" alt="quotation" className="absolute top-8 -left-5 hidden lg:block" />
            </span>Make more time for the work that matters most <span>
                <img src="/quot-2.svg" alt="quotation" className="absolute bottom-10 right-32 hidden lg:block" />
              </span></h2>
          </div>

          <p className="text-base md:text-[21px] my-[26px] text-[#00000080] max-w-[330px]">Best software platform for running an internet business.</p>

          <div className="flex gap-2">
            <a href="#">
              <img src="/v.png" alt="arrow" className="size-8 md:size-[50px] hover:scale-150 transition-all duration-200" />
            </a>
            <a href="#">
              <img src="/v.png" alt="arrow" className="size-8 md:size-[50px] hover:scale-150 transition-all duration-200 rotate-180" />
            </a>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <img src="/Carousel.png" alt="Hello" className="object-contain max-w-full" />
        </div>
      </div>
      <img src="/Logos.png" alt="logos" className="object-cover mx-auto mt-[70px]" />

    </section>
  )
}

export default Carousel