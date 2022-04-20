import React , { useState , useContext  ,useEffect} from 'react'
import { auth ,db } from '../firebase'
import  { Navigate } from 'react-router-dom'


const AuthContext = React.createContext();

export function useAuth()
{
    return useContext(AuthContext);
}

const AuthProvider = ({children}) => {

    const [warning , setWarning] = useState('')
    const [currentUser , setCurrentUser] = useState('')
    const [currentUserID , setCurrentUserID] = useState('')    
    const history = Navigate()

   
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })
      }, [])
    
      

    async function signup(username,password,clgid ,classroom,name){
        try{
            auth.createUserWithEmailAndPassword(username,password).then(auth => {
              if(auth.user)
              {
                setCurrentUserID(auth.user.id) 
                db.collection('users').doc(auth.user.uid).set({'email':username ,'username':name, 'collegeid' : clgid , 'class' : classroom})
                 history.push('/')
            }
            }).catch(e => {
              console.log(e)
            })
           }
           catch(e){
             console.log(e)
           }
    }


    async function signin(username , password){
           
            try{
                await  auth.signInWithEmailAndPassword(username,password)

                if(auth){
                    if(auth.X === 'IzdgmuwWcmcMwPZ891jRq3BZKwL2')
                    {
                        history.push('/home')
                    }
                   else{
                       console.log(auth)
                    history.push('/')
                   }
                    console.log(auth.X)
                }
            }
            catch(e){
                setWarning(e)
            }
        }

        async function forgot(username){
            try{
                await auth.sendPasswordResetEmail(username)
                if(auth)
                    history.push('/signin')
            }
            catch(e){
                setWarning(e)
            }
        }

 async function logout(){
        await auth.signOut()
        history.push('/signin')
    }

    const value = { 
        signup ,
        logout ,
        signin ,
        warning , 
        currentUser,
        currentUserID,
        forgot
    }

   

    

    return (
        <AuthContext.Provider value={ value }>
                { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider
