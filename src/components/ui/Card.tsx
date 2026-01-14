

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
    <div className="border border-white p-6 rounded-2xl ">
        <image >{logo}</image>
        <h3 className="font-bold text-white">{title}</h3>
        <p className="text-sm leading-relaxed text-gray-400">{description}</p>
      
    </div>
  )
}

export default Card
