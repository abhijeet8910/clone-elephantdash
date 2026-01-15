

type cardProps = {
    logo: React.ReactNode,
    title: string,
    description: string,
}

const Card = ({
    logo,
    title,
    description
}:cardProps) => {
  return (
    <div className="border border-blue-400 p-6 rounded-2xl flex flex-col gap-2 bg-blue-900">
      <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-linear-to-br from-blue-500/20 to-cyan-500/20 mb-4">
        <image className="w-6 h-6 text-cyan-400">{logo}</image>
        </div>
        <h3 className="font-bold text-white">{title}</h3>
        <p className="text-sm leading-relaxed text-gray-400 ">{description}</p>
      
    </div>

  )
}

export default Card
