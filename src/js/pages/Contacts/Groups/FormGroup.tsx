import React, { FC, ReactElement, useState } from 'react'
import Button from '../../../components/buttons/Button'
import Input from '../../../components/forms/Input'
import Textarea from '../../../components/forms/Textarea'
import Modal from '../../../components/Modal'
import { Group } from '../../../libs/types'
import { createGroup } from '../../../services/StoreServices/ContactStoreService'

interface IFormGroup {
  show: boolean,
  onExit: () => void
}

const FormGroup: FC<IFormGroup> = (props): ReactElement => {

  const { show, onExit } = props

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const click = () => {
    const newGroup: Group = {title, description};
    createGroup(newGroup, onExit)
  }

  return (
    <Modal show={show} onExit={onExit}>
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