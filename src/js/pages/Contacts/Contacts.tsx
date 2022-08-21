import React, { FC, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { checkContacts } from '../../services/StoreServices/ContactStoreService'
import { IRootState } from '../../store/reducers';

const Contacts: FC = () => {

  // ? store
  // const contacts = useSelector((state: IRootState) => state.contacts)
  // const groups = useSelector((state: IRootState) => state.groups)
  // const persons = useSelector((state: IRootState) => state.persons)

  // ? state
  // const [currentDate, setCurrentDate] = useState(new Date(Date.now()))
  const [currentDate, setCurrentDate] = useState(new Date(Date.parse('07 06 2022')))

  // ? Effects
  useEffect(() => {
    checkContacts();
  }, [])
  

  return (
    <div>Contacts
      {/* Встречи */}
      {/* люди */}
    </div>
  )
}

export default Contacts