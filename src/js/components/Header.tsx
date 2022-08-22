import React from 'react'
import Avatar from './Avatar'
import CustomDatePicker from './CustomDatePicker';

const Header = () => {
  return (
    <header>
      <i className="icon-search fz-18 m-8" />

      <input
        className='fz-18'
        type="text"
        placeholder='Search...'
      />

      <CustomDatePicker />

      <i className="icon-envelop fz-24 m-8" />

      <Avatar big={true} />
    </header>
  )
}

export default Header