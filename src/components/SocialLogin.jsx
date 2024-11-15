import { useContext } from "react";
import { FaGoogle,FaGithub } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";


const SocialLogin = () => {
  const {signWithGoogle,signWithGithub,setUser}=useContext(AuthContext)

const signGoogle =()=>{
  signWithGoogle()
  .then(result=>{
    setUser(result.user);
  })
 
}
const signGithub =()=>{
  signWithGithub()
  .then(result=>{
    setUser(result.user);
  })

}

  return (
    <div>
        <h2 className='font-semibold mb-3'>Social Login</h2>
        <div className="flex flex-col items-center justify-center  gap-2">
            <button onClick={signGoogle} className="btn w-full "> <span><FaGoogle /></span> Login With Google</button>
            <button onClick={signGithub} className="btn w-full"> <span><FaGithub /></span> Login With Github</button>
        </div>
    </div>
    
   
  )
}

export default SocialLogin