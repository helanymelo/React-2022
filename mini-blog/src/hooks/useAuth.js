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

   




}