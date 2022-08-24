import React, { FC, ReactElement, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import AddButton from '../../../components/buttons/AddButton';
import Modal from '../../../components/Modal';
import { Group } from '../../../libs/types';
import { toggleModalEditGroup } from '../../../services/StoreServices/ContactStoreService';
import { IRootState } from '../../../store/reducers';
import FormGroup from './FormGroup';
import GroupCard from './GroupCard';

const Groups: FC<{}> = (): ReactElement => {

  const groups: Group[] = useSelector((state: IRootState) => state.groups);

  useEffect(() => {
    console.log('groups', groups);
  }, [groups]);

  return (
    <div id="groups" className='base-grid'>
      {
        groups.map((gr: Group) => <GroupCard {...gr} key={gr.id} />)
      }
      <AddButton onClick={toggleModalEditGroup} />

      <FormGroup/>
      

    </div>
  )
}

export default Groups