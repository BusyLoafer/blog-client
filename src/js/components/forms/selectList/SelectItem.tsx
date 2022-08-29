import React, { FC, ReactElement } from 'react'
import { Group } from '../../../libs/types';

interface ISelectItem {
  item: Group;
  onAdd: (id: number) => any;
}
const SelectItem: FC<ISelectItem> = (props): ReactElement => {

  const { item, onAdd } = props;

  const onClick = () => onAdd(item.id)

  return <div className='select-list-item' onClick={onClick}>9{item.title}</div>
}

export default SelectItem