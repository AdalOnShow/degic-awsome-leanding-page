import { footerLinks } from "../constant"

const Footer = () => {
  return (
    <section className="bg-black">
      <div className="container mx-auto max-w-[1300px] px-4">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-20  pt-20 pb-14">
          <div className="col-span-2">
            <img src="/degic-1.png" alt="" className="object-cover max-w-160" />
          </div>
          {footerLinks.map(({ title, links }, id) => (
            <div key={id} className="">
              <h4 className="text-xl font-medium text-white mb-5">{title}</h4>
              <div className="flex flex-col justify-start items-start gap-[16px]">
                {links.map((item, i) => (

                  <a key={i} href="/" className="text-xs md:text-[15px] font-medium text-[#FFFFFF80] hover:underline opacity-90">{item}</a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="h-[1px] w-full bg-[#C4C4C4] opacity-20" />

        <div className="py-[34px] flex justify-between items-center">
          <p className="text-xs md:text-[15px] text-[#FFFFFF80] font-medium opacity-90">{`Copyright Degic © ${new Date().getFullYear()}`}</p>

          <div className="flex justify-center items-center gap-[13px]">
            {["/footer-facebook.png", "/footer-instagram.png", "/footer-twitter.png"].map((item, i) => (
              <img key={i} src={item} alt="" className="size-[30px] md:size-[50px] cursor-pointer" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer