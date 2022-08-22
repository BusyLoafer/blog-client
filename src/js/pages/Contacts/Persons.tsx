import React, { FC, ReactElement, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Person } from '../../libs/types'
import { IRootState } from '../../store/reducers'

const Persons: FC<{}> = (): ReactElement => {

  const persons: Person[] = useSelector((state: IRootState) => state.persons);

  useEffect(() => {
    console.log('persons', persons);
  }, [persons])
  
  

  return (
    <div>Persons</div>
  )
}

export default Persons