import React from 'react'
import Avatar from './Avatar'
import CustomDatePicker from './CustomDatePicker';

const Header = () => {
  return (
    <header>
      <div className="header-search">
        <i className="icon-search" />
      </div>

      <input
        type="text"
        placeholder='Search...'
      />

      <CustomDatePicker/>

      <div className="header-notification">
        <i className="icon-envelop" />
      </div>

      <Avatar big={true} />
    </header>
  )
}

export default Header