// eslint-disable-next-line react/prop-types
const Button = ({ className, text, icon }) => {
  return (
    <button className={`px-3 py-[11px] rounded-[10px] text-base font-[500] hover:scale-105 transition-all duration-200 ${className} ${icon ? "flex items-center justify-center gap-2" : ""}`}>
      {text} {icon ? (
        <img src={icon} alt="icon" className="size-6" />
      ) : ""}
    </button>
  )
}

export default Button