import React, { FC, ReactElement, useMemo, useState } from 'react'
import { Group } from '../../../libs/types';
import SelectItem from './SelectItem';
import SelectListInput from './SelectListInput';

interface ISelectListItems {
  show: boolean;
  onAdd: (id: number) => any;
  items: Group[];
  searching: boolean;
}

const SelectListItems: FC<ISelectListItems> = (props): ReactElement => {

  const { show, onAdd, items, searching } = props;

  const [search, setSearch] = useState("");

  const onChangeSearch = (event: any | null) => {
    setSearch(event ? event.target.value : "");
  }

  const filtered = useMemo(() => {
    if (search) {
      return items.filter((item: Group) => {
        item.title.includes(search)
      })
    } else return items
  }, [items, search])

  if (!show) return null;

  return (
    <div>
      <SelectListInput
        show={searching}
        onChange={onChangeSearch}
        value={search}
      />
      {
        filtered.map((item: Group) => <SelectItem
          item={item}
          onAdd={onAdd}
        />)
      }
    </div>
  )
}

export default SelectListItems