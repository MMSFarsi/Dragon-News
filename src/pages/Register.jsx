import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createNewUser, setUser,updateUserProfileData } = useContext(AuthContext);
  const [error, setError] = useState({});
  const navigate=useNavigate()
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    

    if (name.length < 5) {
      return setError((prev) => ({
        ...prev,
        name: "Name must be at least 5 characters long",
      }));
    }

    createNewUser(email, password)
      .then((result) => {
        setUser(result.user);
        updateUserProfileData({displayName:name,photoURL:photo})
        .then(()=>{
          navigate("/")
        })
        .catch(error=>{

        })
        e.target.reset(); // Reset form
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="card bg-base-100 w-full max-w-lg rounded-none p-10 shrink-0">
        <h2 className="text-center text-2xl font-semibold">Register Your Account</h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            {error.name && (
              <label className="label text-red-500">
                <span>{error.name}</span>
              </label>
            )}
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Register</button>
          </div>
        </form>
        <p className="text-center font-semibold">
          Already have an account?{" "}
          <Link className="text-green-500" to="/auth/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
