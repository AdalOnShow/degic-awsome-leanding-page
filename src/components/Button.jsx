const Button = ({ className, text, icone }) => {
  return (
    <button className={`px-3 py-[11px] rounded-[10px] text-base font-[500] ${className}`}>
      {text}
    </button>
  )
}

export default Button