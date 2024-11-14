import { FaGoogle,FaGithub } from "react-icons/fa";


const SocialLogin = () => {
  return (
    <div>
        <h2 className='font-semibold mb-3'>Social Login</h2>
        <div className="flex flex-col items-center justify-center  gap-2">
            <button className="btn w-full "> <span><FaGoogle /></span> Login With Google</button>
            <button className="btn w-full"> <span><FaGithub /></span> Login With Github</button>
        </div>
    </div>
    
   
  )
}

export default SocialLogin