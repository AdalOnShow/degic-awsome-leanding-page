import Button from "../components/Button"
import { blogs } from './../constant/index';

const Blog = () => {
  return (
    <section className="container mx-auto max-w-[1300px] pt-[126px] pb-[117px] px-4">
      <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end">
        <div className="">
          <h1 className="text-5xl md:text-[55px] font-medium">Get more from our blog</h1>
          <p className="mt-[16px] text-base md:text-[21px] text-[#00000080] md:leading-[30px] max-w-[460px]">There are a lot of different components that will help you create the perfect look for your project</p>
        </div>

        <Button text="Explore All" icon="/arrow.svg" className="mt-[16px] bg-[#5F62E226] text-[#5F62E2] hover:bg-[#5F62E2] hover:text-white transition-colors duration-200" />
      </div>

      <div className="mt-[47px] grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-[30px]">
        {blogs.map(({ img, shadow, title, des, btn }, i) => (
          <div key={i} className="max-w-[410px] mx-auto">
            <div className="flex justify-center items-center py-[50px] px-[118px] relative bg-[#F6F6FA] rounded-[10px]">
              <img src={img} alt="" className="w-full object-cover" />
              <img src={shadow} alt="" className="absolute top-0 right-0" />
            </div>

            <h4 className="mt-[21px] text-[28px] font-medium max-w-[335px] md:leading-[32px]">{title}</h4>

            <p className="mt-[14px] text-[17px] max-w-[345px] text-[#00000080]">{des}</p>

            <button className="mt-[10px] px-[10px] py-[5px] text-[13px] text-[#2AB691] bg-[#2AB6911C] hover:bg-[#2AB6922C] rounded-[5px]">{btn}</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Blog