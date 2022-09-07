import React, { FC, ReactElement } from 'react'
import { Group } from '../../../libs/types';

interface ISelectMinItem {
  item: Group;
  onDelete: (id: number) => any;
}
const SelectMinItem: FC<ISelectMinItem> = (props): ReactElement => {

  const {item, onDelete} = props;

  const onClick = () => onDelete(item.id)

  return (
    <div className='select-list-min-item hill'>
      <span>{item.title}</span>
      <i className="icon-cross" onClick={onClick} />
    </div>
  )
}

export default SelectMinItem