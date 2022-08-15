import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from '../NavBar/NavBar.module.css'
import { useAuth } from '../../hooks/useAuth'
import { useAuthValue } from '../Context/AuthContext'

const NavBar = () =>{
    const {user} = useAuth()
    return<nav className={styles.navbar}>
        <NavLink to='/' className={styles.brand}>
            Mini-Blog
        </NavLink>
            <ul className={styles.links_list}>
                <li>
                    <NavLink to='/' className={({isActive})=>(isActive ? styles.active : ' ')}>
                        Home
                    </NavLink>               
                </li>

                {!user && (
                    <>
                        <li>
                            <NavLink to='/login' className={({isActive})=>(isActive ? styles.active : ' ')}>
                            Login
                            </NavLink>               
                        </li>

                        <li>
                            <NavLink to='/cadastro' className={({isActive})=>(isActive ? styles.active : ' ')}>
                                Cadastre-se!
                            </NavLink>               
                        </li>
                    </>
            )}
            {user && (
                <>
                    <li>
                        <NavLink to='/posts/criar' className={({isActive})=>(isActive ? styles.active : ' ')}>
                            Novo Post
                        </NavLink>               
                    </li>

                    <li>
                        <NavLink to='/dashboard' className={({isActive})=>(isActive ? styles.active : ' ')}>
                        Dashboard
                        </NavLink>               
                    </li>     
                </>
            )}

            <li>
                <NavLink to='/about' className={({isActive})=>(isActive ? styles.active : ' ')}>
                    Sobre
                </NavLink>
            </li>
        </ul>
        
    </nav>
}

export default NavBar