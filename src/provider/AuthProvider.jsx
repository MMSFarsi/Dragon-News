import { createContext, useEffect, useState } from "react"
import app from "../components/Firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

export const provider = new GoogleAuthProvider();
import { GithubAuthProvider } from "firebase/auth";

export const GithubProvider = new GithubAuthProvider();


export const AuthContext= createContext();
const auth=getAuth(app)


const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true)
  
    const createNewUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }
    const loginUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signWithGoogle=()=>{
        return signInWithPopup(auth, provider)
    }
    const signWithGithub=()=>{
        return signInWithPopup(auth, GithubProvider)
    }
    const updateUserProfileData=(updateData)=>{
        return updateProfile(auth.currentUser, updateData)

    }
    const authInfo= {
        user,
        setUser,
        createNewUser,
        logOut,
        loginUser,
        signWithGoogle,
        signWithGithub,
        loading,
        updateUserProfileData
    };
    useEffect(()=>{
      const unSubscribe=  onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false);
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