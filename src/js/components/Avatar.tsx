import React from 'react'

type AvatarProps = {
  path?: string,
  big: boolean,
}

const Avatar = (props: AvatarProps) => {

  const {path, big} = props;

  return (
    <div className={big ? "avatar avatar-big" : "avatar"}>
      {
        path ?
        <img src={path} alt="avatar" /> :
        <i className='icon-user'/>
      }
    </div>
  )
}

export default Avatar