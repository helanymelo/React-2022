import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./About.module.css"

function About() {
  return (
    <div className={styles.about} >
      <h2>O projeto Mini <strong>Blog</strong></h2>
      <p>Contém React JS no front-end e Firebase no back-end</p>
      <Link to='/post/criar' className='btn'>Criar Post</Link>
    </div>
  )
}

export default About