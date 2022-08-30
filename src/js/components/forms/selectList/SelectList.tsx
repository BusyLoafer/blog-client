import React, { FC, ReactElement, useEffect, useState } from 'react'
import { Group } from '../../../libs/types'
import SelectListForm from './SelectListForm';
import SelectListItems from './SelectListItems';

interface ISelectList {
  items: Group[];
  selected: Group[];
  onAdd: () => any;
  onDelete: (id: number) => any;
  label: string;
}

const SelectList: FC<ISelectList> = (props): ReactElement => {

  const { items, selected, onAdd, onDelete, label } = props;

  const [showList, setShowList] = useState(false);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const selectedIds = selected.map(item => item.id)
    setFiltered(items.filter(item => !selectedIds.includes(item.id)))
  }, [items, selected])


  const toggleShowList = () => {
    setShowList(state => !state);
  }

  return (
    <div className='form-block'>
      <span className='form-label'>{label}</span>
      <div className='select-list'>
        <SelectListForm
          toggleShowList={toggleShowList}
          selected={selected}
          onDelete={onDelete}
        />
        <SelectListItems
          show={showList}
          // items={filtered}
          items={selected}
          onAdd={onAdd}
          searching={true}
        />
      </div>
    </div>
  )
}

export default SelectList