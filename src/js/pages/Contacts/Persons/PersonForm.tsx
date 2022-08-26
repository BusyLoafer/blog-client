import React, { FC, ReactElement, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Button from '../../../components/buttons/Button';
import Input from '../../../components/forms/Input'
import RadioGroup from '../../../components/forms/radio/RadioGroup';
import Textarea from '../../../components/forms/Textarea';
import Modal from '../../../components/Modal'
import { Person } from '../../../libs/types';
import { toggleModalEditPerson } from '../../../services/StoreServices/ContactStoreService';
import { IRootState } from '../../../store/reducers';

const PersonForm: FC<{}> = (): ReactElement => {

  const [id, setId] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState(1)
  const [description, setDescription] = useState("");

  const showEditPerson: boolean = useSelector((state: IRootState) => state.showEditPerson);

  const save = () => {
    // const newPerson: Person = {
    //   id: id ? id : undefined,
    //   firstName,
    //   secondName,
    //   lastName,
    //   description,
    //   gender: !!gender,

    // };
  }

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
        <RadioGroup
          items={["Женский", "Мужской"]}
          value={gender}
          label="Пол"
          onChange={setGender}
        />
        <Textarea
          label="Описание"
          placeholder="Описание"
          value={description}
          onChange={setDescription}
        />
        <div className="btn-actions">
          <Button
            text="Сохранить"
            onClick={save}
            disabled={firstName.trim().length <= 0}
          />
        </div>
      </div>
    </Modal>
  )
}

export default PersonForm