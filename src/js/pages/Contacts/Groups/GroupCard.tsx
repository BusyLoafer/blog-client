import React, { FC, ReactElement } from 'react'
import { Group } from '../../../libs/types'

const GroupCard: FC<Group> = (group): ReactElement => {
  return (
    <div className='card'>
      <div className='card-title fz-24'>{group.title}</div>
      <div className='fz-14'>{group.description}</div>
    </div>
  )
}

export default GroupCard