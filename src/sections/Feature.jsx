import Button from "../components/Button"
import { featureItems } from "../constant"

const Feature = () => {
  return (
    <section className="bg-[#F9F9F9] px-4 py-16 md:py-24 lg:py-[135px]" id="services">
      <div className="container mx-auto max-w-[1300px] flex flex-col lg:flex-row justify-center items-center gap-16 lg:gap-[110px]">
        <div className="grid grid-cols-2 gap-4 md:gap-[30px]">
          {featureItems.map(({ id, img, title, description }) => (
            <div key={id} className="p-4 lg:p-[32px] rounded-[10px] bg-white flex flex-col justify-center items-center max-w-[300px] hover:scale-105 hover:shadow-md transition-all duration-200">
              <img src={img} alt={title} className="size-20 md:size-[130px]" />
              <h4 className="text-xl md:text-2xl pt-[22px] font-medium">{title}</h4>
              <p className="text-center text-xs md:text-[17px] text-[#00000080] pt-[10px]">{description}</p>
            </div>
          ))}
        </div>

        <div className="h-fit flex flex-col justify-between items-start max-w-[460px]">
          <div>
            <h2 className="text-4xl sm:text-[55px] font-medium leading-none sm:leading-[60px]">The quickest way to create modern presentation</h2>
            <p className="text-base sm:text-[21px] text-[#00000080] mt-[16px] mb-[29px]">Best software platform for running an internet business. We build the most powerful and flexible tools for internet commerce.</p>
            <Button text="Explore All" className="bg-[#5F62E226] text-[#5F62E2]" icon="/featureArrow.svg" />
          </div>

          <div className="mt-20 lg:mt-[180px]">
            <p className="text-base text-[#00000080]">Follow us</p>
            <div className="flex justify-center items-center gap-2 pt-5">
              <a href="#">
                <img src="/facebook.png" alt="facebook" className="size-[50px] hover:scale-110 transition-all duration-200" />
              </a>
              <a href="#">
                <img src="/instagram.png" alt="instagram" className="size-[50px] hover:scale-110 transition-all duration-200" />
              </a>
              <a href="#">
                <img src="/twitter.png" alt="twitter" className="size-[50px] hover:scale-110 transition-all duration-200" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feature