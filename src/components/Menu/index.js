import React from 'react'
import { Link } from 'gatsby'
import MenuStyles from './menu.module.css'
import Component from '../../images/Component.png'
import Group from '../../images/Group.png'
import Pravo from '../../images/pravo.png'
import Map from '../../images/map.png'
import Member from '../../images/member.png'
import News from '../../images/news.png'
import Donate from '../../images/donate.png'

const Menu = () => (
  <div className={MenuStyles.menuwrapper}>
    <Link to='/'>
      <nav>
        <img src={Component} alt='Ask' />
        <p>Что такое ОНК?</p>
      </nav>
    </Link>
    <Link to='/zhaloba'>
      <nav>
        <img src={Group} alt='Group' />
        <p>Сообщить о нарушении прав человека</p>
      </nav>
    </Link>
    <Link to='/'>
      <nav>
        <img src={Pravo} alt='Pravo' />
        <p>Правовая методичка</p>
      </nav>
    </Link>
    <Link to='/map'>
      <nav>
        <img src={Map} alt='Map' />
        <p>Найти ОНК на карте</p>
      </nav>
    </Link>
    <Link to='/'>
      <nav>
        <img src={Member} alt='Member' />
        <p>Стань членом ОНК</p>
      </nav>
    </Link>
    <Link to='/posts'>
      <nav>
        <img src={News} alt='News' />
        <p>Новости ОНК</p>
      </nav>
    </Link>
    <Link to='/'>
      <nav>
        <img src={Donate} alt='Donate' />
        <p>Поддержать проект</p>
      </nav>
    </Link>
  </div>
)

export default Menu
