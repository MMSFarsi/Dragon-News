import Marquee from "react-fast-marquee"
import { Link } from "react-router-dom"


const LatestNews = () => {
  return (
    <div className="flex items-center gap-2 bg-base-200">
        <p className="bg-[#D72050] text-base-100  px -3 py-1">Latest</p>
       <Marquee pauseOnHover={true}   className="space-x-10 p-2">
        <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, veritatis.</Link>
        <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, veritatis.</Link>
        <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, veritatis.</Link>
       </Marquee>
    </div>
  )
}

export default LatestNews