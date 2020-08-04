import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

const TeacherItem = () => {
  return (
    <article className="teacher-item">
    <header>
      <img src="https://avatars2.githubusercontent.com/u/4731098?s=460&u=eeca98d6254c745fc63fd8e70a702d47f95d2edf&v=4" alt="Rian Perassoli" />
      <div>
        <strong>Rian Perassoli</strong>
        <span>Quimica</span>
      </div>
    </header>

    <p>
      Entusiasta das melhores tecnologias de quimica avançada
      <br /><br />
      Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através disso.
    </p>

    <footer>
      <p>
        Preço/hora
        <strong>R$ 80,00</strong>
      </p>

      <button type="button">
        <img src={whatsappIcon} alt="Whatsapp"/>
        Entrar em contato
      </button>
    </footer>
  </article> 
  )
}

export default TeacherItem    