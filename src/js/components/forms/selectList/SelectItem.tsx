import React, { FC, ReactElement } from 'react'
import { Group } from '../../../libs/types';

interface ISelectItem {
  item: Group;
  onAdd: (id: number) => any;
}
const SelectItem: FC<ISelectItem> = (props): ReactElement => {

  const { item, onAdd } = props;

  const onClick = () => onAdd(item.id)

  return <div className='select-list-item hill' onClick={onClick}>
    {item.title}
    <i className="icon-plus" />
    </div>
}

export default SelectItem