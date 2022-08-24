import React, { FC, ReactElement, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Button from '../../../components/buttons/Button'
import Input from '../../../components/forms/Input'
import Textarea from '../../../components/forms/Textarea'
import Modal from '../../../components/Modal'
import { Group } from '../../../libs/types'
import { createOrEditGroup, toggleModalEditGroup } from '../../../services/StoreServices/ContactStoreService'
import { IRootState } from '../../../store/reducers'

const FormGroup: FC<{}> = (props): ReactElement => {
  
  const [id, setId] = useState(null)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const editGroup:Group | null = useSelector((state: IRootState) => state.editGroup);
  const showEditGroup:boolean  = useSelector((state: IRootState) => state.showEditGroup);

  useEffect(() => {
    if (editGroup) {
      setId(editGroup.id)
      setTitle(editGroup.title)
      setDescription(editGroup.description)
    } else {
      setId(null)
      setTitle("")
      setDescription("")
    }
  }, [editGroup])

  const click = () => {
    const newGroup: Group = { id: id? id : undefined, title, description};
    createOrEditGroup(newGroup)
  }

  return (
    <Modal show={showEditGroup} onExit={toggleModalEditGroup}>
      <div className="group-form">
        <Input
          label="Название"
          placeholder="Название"
          value={title}
          onChange={setTitle}
        />
        <Textarea
          label="Описание"
          placeholder="Описание"
          value={description}
          onChange={setDescription}
        />
        <Button
          text="Сохранить"
          onClick={click}
          disabled={title.trim().length <= 0}
        />
      </div>
    </Modal>
  )
}

export default FormGroup