import React,{createContext,useState,useEffect} from 'react' ;
import {auth ,signOut ,signInWithPopup ,provider} from './firebase' ;
const AuthContext = createContext("");
function AuthContextProvider({children}) {
  const [user,setUser] = useState("");
  
    const logIn = async ()=>{
        try{
            const result = await signInWithPopup(auth, provider) ;
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
            setUser(user);
        }catch(error){
            console.log(error);
        }
    }
    async function logOut(){
        try{
            await signOut(auth);
        }catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        const unsub = auth.onAuthStateChanged((user)=>{
            setUser(user);
        })
        return ()=>{
            unsub();
        }
    },[]);
    
  return (
    <AuthContext.Provider value={{user , logIn , logOut }}>
        {children}
    </AuthContext.Provider>
  )
}

export  {AuthContext ,AuthContextProvider}