import React from 'react'

import Layoutzhalob from '../components/layoutzhalob'
import SEO from '../components/seo'
import ZhalobaStyles from './zhaloba.module.css'

const Zhaloba = () => (
  <Layoutzhalob>
    <SEO title='Оставить жалобу' />
    <div className={ZhalobaStyles.titlewrapper}>
      <p>Сообщить о нарушении прав человека</p>
    </div>
    <p className={ZhalobaStyles.persondata}>Персональные данные</p>

    <div className={ZhalobaStyles.formwrapper}>
      <form
        method='post'
        action='https://getform.io/f/3ae6937f-e3e5-4bf5-9e2e-c19202e0cba8'
      >
        <label className={ZhalobaStyles.formlable}>
          <span> Имя</span>
        </label>
        <input className={ZhalobaStyles.forminput} type='text' name='name' />

        <label className={ZhalobaStyles.formlable}>
          <span>Email</span>
        </label>
        <input className={ZhalobaStyles.forminput} type='email' name='email' />

        <label className={ZhalobaStyles.formlable}>
          <span>Message</span>
        </label>
        <input className={ZhalobaStyles.forminput} type='text' name='message' />
        <button type='submit'>Отправить</button>

      </form>
      </div>

  </Layoutzhalob>
)

export default Zhaloba
