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
    <div className='groups'>
      {
        groups.map((gr: Group )=> (
          <div className="group p-8">
            <div className='fz-24'>{gr.title}</div>
            <div className='fz-18'>{gr.description}</div>
          </div>
        ))
      }
      <AddButton onClick={addGroup}/>
    </div>
  )
}

export default Groups