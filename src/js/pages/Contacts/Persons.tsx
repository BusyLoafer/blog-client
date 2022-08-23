import React, { FC, ReactElement, useEffect } from 'react'
import { useSelector } from 'react-redux'
import AddButton from '../../components/buttons/AddButton'
import { Person } from '../../libs/types'
import { IRootState } from '../../store/reducers'

const Persons: FC<{}> = (): ReactElement => {

  const persons: Person[] = useSelector((state: IRootState) => state.persons);

  useEffect(() => {
    console.log('persons', persons);
  }, [persons])
  

  const addPerson = () => {

  }
  

  return (
    <div className='persons p-16'>
      {/* {
        persons.map((gr: Person )=> (
          <div className="group p-12" key={gr.id}>
            <div className='group-title fz-24'>{gr.title}</div>
            <div className='fz-14'>{gr.description}</div>
          </div>
        ))
      } */}
      <AddButton onClick={addPerson}/>
    </div>
  )
}

export default Persons