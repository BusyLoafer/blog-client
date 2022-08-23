import React, { FC, ReactElement, useEffect } from 'react'
import { useSelector } from 'react-redux'
import AddButton from '../../../components/buttons/AddButton'
import { Person } from '../../../libs/types'
import { IRootState } from '../../../store/reducers'
import PersonCard from './PersonCard'

const Persons: FC<{}> = (): ReactElement => {

  const persons: Person[] = useSelector((state: IRootState) => state.persons);

  useEffect(() => {
    console.log('persons', persons);
  }, [persons])
  

  const addPerson = () => {

  }
  

  return (
    <div id='persons' className='base-grid'>
      {
        persons.map((prs: Person )=> <PersonCard {...prs} key={prs.id}/>)
      }
      <AddButton onClick={addPerson}/>
    </div>
  )
}

export default Persons