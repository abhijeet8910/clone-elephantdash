

type cardProps = {
    logo: string,
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
        <image >{logo}</image>
        <h3 className="font-bold text-white">{title}</h3>
        <p className="text-sm leading-relaxed text-gray-400 ">{description}</p>
      
    </div>

  )
}

export default Card
