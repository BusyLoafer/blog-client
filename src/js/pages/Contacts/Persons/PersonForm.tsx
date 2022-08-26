import React, { FC, ReactElement, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Button from '../../../components/buttons/Button';
import Input from '../../../components/forms/Input'
import Textarea from '../../../components/forms/Textarea';
import Modal from '../../../components/Modal'
import { toggleModalEditPerson } from '../../../services/StoreServices/ContactStoreService';
import { IRootState } from '../../../store/reducers';

const PersonForm: FC<{}> = (): ReactElement => {

  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [lastName, setLastName] = useState("");
  const [description, setDescription] = useState("");

  const showEditPerson: boolean = useSelector((state: IRootState) => state.showEditPerson);

  const click = () => {}

  return (
    <Modal show={showEditPerson} onExit={toggleModalEditPerson}>
      <div className="group-form">
        <Input
          label="Имя"
          placeholder="Имя"
          value={firstName}
          onChange={setFirstName}
        />
        <Input
          label="Фамилия"
          placeholder="Фамилия"
          value={secondName}
          onChange={setSecondName}
        />
        <Input
          label="Отчество"
          placeholder="Отчество"
          value={lastName}
          onChange={setLastName}
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
          disabled={firstName.trim().length <= 0}
        />
      </div>
    </Modal>
  )
}

export default PersonForm