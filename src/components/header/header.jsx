import React from 'react'
import UserAvatar from '../../assets/img/UserAvatar'
import ArrowUse from '../../assets/img/ArrowUse'

export default function Header() {
  return (
    <header className='header'>
      <div className="container">
        <div className="header-wrapper">
          <h2 className='header-title'>Awesome Kanban Board</h2>
          <div className='profile'>
            <div className='profile__img'>
              <UserAvatar />
            </div>
            <div className='profile__img_arrow'>
              <ArrowUse />
            </div>
            <div className="profile__menu_wrap">
              <div className="profile__menu">
                <a href="#" className="profile__menu_link">Profile</a>
                <a href="#" className="profile__menu_link">Log Out</a>
                <span className="profile__menu_romb"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

