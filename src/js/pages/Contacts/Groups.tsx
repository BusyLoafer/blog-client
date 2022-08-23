import React, { FC, ReactElement, useEffect } from 'react'
import { useSelector } from 'react-redux';
import AddButton from '../../components/buttons/AddButton';
import { Group } from '../../libs/types';
import { IRootState } from '../../store/reducers';

const Groups: FC<{}> = (): ReactElement => {

  const groups: Group[] = useSelector((state: IRootState) => state.groups);

  useEffect(() => {
    console.log('groups', groups);
  }, [groups])

  const addGroup = () => {
    console.log("add")
  }
  

  return (
    <div className='groups p-16'>
      {
        groups.map((gr: Group )=> (
          <div className="group p-12" key={gr.id}>
            <div className='group-title fz-24'>{gr.title}</div>
            <div className='fz-14'>{gr.description}</div>
          </div>
        ))
      }
      <AddButton onClick={addGroup}/>
    </div>
  )
}

export default Groups