import {db} from '../firebase/config'

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut,
} from 'firebase/auth'

import {useEffect, useState} from 'react'


export const useAuth = () =>{
    const[error, setError]=useState(null)
    const[loading, setLoading]=useState(null)

    const[cancelled, setCancelled]=useState(false)

    const auth = getAuth()

    function checkIfCancelled(){
        if(cancelled){
            return
        }
    }

    const createUser = async (data)=>{
        checkIfCancelled()
        setLoading(false)
        

       try{
            const {user} = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password

            )

            await updateProfile(user, {
                displayName: data.displayName
            })


            return user;    

            }catch(error){
            console.log(error.message)
            console.log(typeof error.message)
            
            let systemErrorMessage
                
            if(error.message.includes('password')){
                systemErrorMessage('A senha precisa conter 6 caracteres')
            }else if(error.message.includes('email-already')){

            }else{
                systemErrorMessage('Ocorreu um erro')
            }

            console.log(systemErrorMessage)
            setError(systemErrorMessage)
       }
    

       setLoading(false)
       
    }

    const logout = () =>{
        checkIfCancelled()
        signOut(auth)
    }

    useEffect(()=>{
        return()=>setCancelled(true)
    },[])    

    return{
        auth,
        createUser,
        error,
        loading,
        logout
    }
}