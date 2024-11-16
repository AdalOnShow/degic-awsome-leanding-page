import Button from "../components/Button"

const Time = () => {
  return (
    <section className="container mx-auto max-w-[1300px] px-4 py-[87px]">
      <div className="flex flex-col md:flex-row justify-center items-center gap-20 md:gap-5 lg:gap-[150px]">
        <img src="/cake.png" alt="cake" className="w-[350px] md:w-[50%] lg:w-full max-w-[420px] object-cover" />

        <div className="max-w-[460px]">
          <h2 className="text-5xl lg:text-[55px] font-medium leading-[60px]">Make more time for the work</h2>
          <div className="my-6">
            {["Many ways to use illustrations in design", "Simply explained with illustrations", "Make more time for the work"].map((item, i) => (
              <div key={i} className="flex justify-start items-center gap-2.5 mb-[22px]">
                <img src="/ok.png" alt="ok" className="size-6" />
                <p className="text-[21px]">{item}</p>
              </div>
            ))}
          </div>
          <Button text="Learn more" icon="/arrow.svg" className=" bg-[#5F62E226] text-[#5F62E2] hover:bg-[#5F62E2] hover:text-white transition-colors duration-200" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-20 md:gap-5 lg:gap-[150px] mt-[120px]">
        <div className="max-w-[460px] order-2 md:order-1">
          <h2 className="text-5xl lg:text-[55px] font-medium leading-[60px]">Make more time for the work</h2>
          <div className="my-6">
            {["Many ways to use illustrations in design", "Simply explained with illustrations", "Make more time for the work"].map((item, i) => (
              <div key={i} className="flex justify-start items-center gap-2.5 mb-[22px]">
                <img src="/ok.png" alt="ok" className="size-6" />
                <p className="text-[21px]">{item}</p>
              </div>
            ))}
          </div>
          <Button text="Learn more" icon="/arrow.svg" className=" bg-[#5F62E226] text-[#5F62E2] hover:bg-[#5F62E2] hover:text-white transition-colors duration-200" />
        </div>

        <img src="/jul-a.png" alt="cake" className="w-[350px] md:w-[50%] lg:w-full max-w-[420px] object-cover order-1 md:order-2" />
      </div>
    </section>
  )
}

export default Time