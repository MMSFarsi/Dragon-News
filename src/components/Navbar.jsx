import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import userIcon from '../assets/user.png'
import { AuthContext } from '../provider/AuthProvider'

const Navbar = () => {
  const {user,logOut}=useContext(AuthContext)

  return (
    <div className='flex justify-between items-center my-3'>
        <div>{ user && user.email}</div>
        <div className="nav space-x-5">
            <Link to='/'>Home</Link>
            <Link to='career'>Career</Link>
            <Link to='/about'>About</Link>
        </div>
        <div className="flex items-center gap-2">
            <div className=''>
                <img src={userIcon} alt="" />
              
            </div>
            {
              user && user?.email? <button onClick={logOut} className='btn btn-neutral rounded-none'>Log Out</button> :  <Link to="/auth/login" className="btn btn-neutral rounded-none">Login</Link>
            }
          
        </div>
    </div>
  )
}

export default Navbar