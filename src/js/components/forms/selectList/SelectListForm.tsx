import React, { FC, ReactElement } from 'react'
import { Group } from '../../../libs/types';
import SelectMinItem from './SelectMinItem';

interface ISelectListForm {
  toggleShowList: () => any;
  selected: Group[];
  onDelete: (id: number) => any;
}

const SelectListForm: FC<ISelectListForm> = (props): ReactElement => {

  const { toggleShowList, selected, onDelete } = props;

  return (
    <div className='select-list-form'>
      <div className="select-list-min-items">
        {
          selected.map((item: Group) => <SelectMinItem
            item={item}
            onDelete={onDelete}
          />)
        }
      </div>
      <i className="icon-search btn-search hill clickable" onClick={toggleShowList} />
    </div>
  )
}

export default SelectListForm