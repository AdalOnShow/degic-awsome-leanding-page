import Button from './../components/Button';

const Bomb = () => {
  return (
    <section className="bg-[#5F62E2]">
      <div className="container mx-auto max-w-[1300px] h-[500px] md:h-[400px] lg:h-[345px] px-4 flex justify-center md:justify-start items-start md:items-center relative">
        <div className="order-2 md:order-1 mt-4">
          <h1 className="text-white text-4xl lg:text-5xl xl:text-7xl font-semibold">The quickest way to create<br />  awesome presentation</h1>

          <div className="mt-8 flex gap-2.5">
            <Button text="Get Started" className="bg-[#2AB691] text-[#FFFFFF]" />
            <Button text="Learn More" className="bg-[#777AE6] text-[#FFFFFF]" />
          </div>
        </div>

        <div className="order-1 md:order-2">
          <img src="/bomb.png" alt="bomb" className="absolute bottom-0 right-0 z-20" />
        </div>
      </div>
    </section>
  )
}

export default Bomb