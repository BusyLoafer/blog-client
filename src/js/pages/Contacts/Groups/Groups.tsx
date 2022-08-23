import React, { FC, ReactElement, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import AddButton from '../../../components/buttons/AddButton';
import Modal from '../../../components/Modal';
import { Group } from '../../../libs/types';
import { IRootState } from '../../../store/reducers';
import FormGroup from './FormGroup';
import GroupCard from './GroupCard';

const Groups: FC<{}> = (): ReactElement => {

  const groups: Group[] = useSelector((state: IRootState) => state.groups);

  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    console.log('groups', groups);
  }, [groups]);

  const toggleShowModal = () => {
    setShowModal(show => !show)
  }


  return (
    <div id="groups" className='base-grid'>
      {
        groups.map((gr: Group) => <GroupCard {...gr} key={gr.id} />)
      }
      <AddButton onClick={toggleShowModal} />

      <FormGroup
        show={showModal}
        onExit={toggleShowModal}
      />
      

    </div>
  )
}

export default Groups