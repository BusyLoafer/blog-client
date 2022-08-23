import React, { FC, ReactElement, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Contact } from '../../../libs/types';
import { IRootState } from '../../../store/reducers';

const Meets: FC<{}> = (): ReactElement => {

  const contacts: Contact[] = useSelector((state: IRootState) => state.contacts);

  useEffect(() => {
    console.log('contacts', contacts);
  }, [contacts])

  return (
    <div>Meets</div>
  )
}

export default Meets