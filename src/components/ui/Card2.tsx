

type cardProps = {
    title: string,
    description: string
}

const Card2 = ({title, description}:cardProps) => {
  return (
    <div className="bg-linear-to-br from-blue-500/10 to-slate-500/10 flex flex-col items-start gap-6 p-4">
      <h4 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors relative z-10">{title}</h4>
      <p className="text-base text-gray-300 leading-relaxed relative z-10">{description}</p>
    </div>
  )
}

export default Card2
