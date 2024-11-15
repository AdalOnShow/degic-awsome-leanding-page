import Button from "../components/Button"

const Hero = () => {
  return (
    <section className="container mx-auto px-4 mt-5 pb-4 md:mt-[100px] max-w-[1300px]">
      <div className="flex flex-col md:flex-row justify-evenly items-center gap-8 md:gap-4">
        <div className="order-2 md:order-1 max-w-[640px]">
          <h1 className="text-black text-4xl lg:text-5xl xl:text-7xl font-semibold">Simply explained <br /> with illustrations</h1>

          <p className="text-base md:text-[21px] text-black/50 max-w-[460px] mt-[22px]">There are a lot of different components that will help you create the perfect look for your project</p>

          <div className="mt-5 md:mt-20 flex gap-2.5">
            <Button text="Get Started" className="bg-[#5F62E2] text-[#ffffff]" />
            <Button text="Learn More" className="bg-[#5F62E2]/15 text-[#5F62E2]" />
          </div>
        </div>

        <div className="order-1 md:order-2">
          <img src="/hero.png" alt="hero image" className="object-contain" />
        </div>
      </div>
    </section>
  )
}

export default Hero