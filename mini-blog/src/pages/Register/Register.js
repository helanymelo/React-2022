
import {useState, useEffect} from 'react'
import { useAuth } from '../../hooks/useAuth'
import styles from '../Register/Register.module.css'


const Register = ()=> {
    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    const {createUser, error: authError, loading} = useAuth()

const handleSubmit = async (e) =>{
    e.preventDefault()
    
    setError('')

    const user= {
        displayName,
        email,
        password,
    
    }
    if(password !== confirmPassword){
        setError('As senhas precisam ser iguais')
        return
    }
        const res = await createUser(user)

        console.log(res)
}

    useEffect(()=>{
        if(authError){
            setError(authError)
        }
    },[authError])


console.log(displayName, email, password, confirmPassword)

  return (
    <div className={styles.register}>
        <h2>Cadastre-se para postar</h2>
        <h3>Crie seu usuário e compartilhe suas histórias!!!</h3>
        <form onSubmit={handleSubmit}>       
            <label>
                <span>Nome:</span>
                <input
                    type='text'
                    name='displayName'
                    required
                    placeholder='Nome do usuário'
                    value={displayName}
                    onChange={(e)=>setDisplayName(e.target.value)}
                />

                <span>E-mail:</span>
                <input
                    type='email'
                    name= 'email'
                    required
                    placeholder='E-mail'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />

                <span>Password:</span>
                <input
                    type='password'
                    name= 'password'
                    required
                    placeholder='Senha'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <span>Confirme sua senha:</span>
                <input
                    type='password'
                    name= 'ConfirmPassword'
                    required
                    placeholder='Confirme a sua senha'
                    value={confirmPassword}
                    onChange={(e)=>setConfirmPassword(e.target.value)}
                />               
            </label>
                {!loading && <button className='btn'>Enviar</button>}
                {loading && <button className='btn' disabled>Aguarde...</button>}
                {error && <p className='error'>{error}</p>}
        </form>
    </div>
  )
}

export default Register

