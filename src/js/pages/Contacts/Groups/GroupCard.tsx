import React, { FC, ReactElement } from 'react'
import Info from '../../../components/Info'
import { Group } from '../../../libs/types'
import { choseEditGroup, toggleModalEditGroup } from '../../../services/StoreServices/ContactStoreService';

const GroupCard: FC<Group> = (group): ReactElement => {

  const {title, description} = group;

  return (
    <div className='card'>
      <div className='card-title fz-24'>{title}</div>
      <div className='fz-14'>{description}</div>
      <Info
        icons={[
          {
            title: "pencil",
            func: () => {choseEditGroup(group); toggleModalEditGroup();},
            show: false
          },
          {
            title: "file-text",
            func: () => {},
            show: true
          },
        ]}
      />
    </div>
  )
}

export default GroupCard