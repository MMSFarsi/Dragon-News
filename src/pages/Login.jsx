import { useContext } from "react";
import { Link } from "react-router-dom"
import { AuthContext } from "../provider/AuthProvider";


const Login = () => {
  const {loginUser,setUser}=useContext(AuthContext)
  const handleSubmit =(e)=>{
    e.preventDefault();
    const email= e.target.email.value;
    const password=e.target.password.value;
    console.log({email,password});
    loginUser(email,password)
    .then(result=>{
      setUser(result.user)
    })
    .catch(error=>{
      console.log(error.message);
    })
    
  }
  return (
    <div className="min-h-screen flex items-center justify-center">
       
        <div className="card bg-base-100 w-full max-w-lg rounded-none p-10 shrink-0 ">
        <h2 className="text-center text-2xl font-semibold">Login Your Account</h2>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-neutral rounded-none">Login</button>
        </div>
      </form>
      <p className="text-center font-semibold">Don't have an account? <Link className="text-red-500" to="/auth/register">Register</Link></p>
    </div>
    </div>
  )
}

export default Login