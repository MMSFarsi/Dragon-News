import { createContext, useEffect, useState } from "react"
import app from "../components/Firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext= createContext();
const auth=getAuth(app)


const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    console.log(user);
    const createNewUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logOut=()=>{
        return signOut(auth)
    }
    const loginUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const authInfo= {
        user,
        setUser,
        createNewUser,
        logOut,
        loginUser
    };
    useEffect(()=>{
      const unSubscribe=  onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
        })
        return ()=>{
            unSubscribe()
        }

    },[])
  return <AuthContext.Provider value={authInfo}>
    {children}

  </AuthContext.Provider>
}

export default AuthProvider