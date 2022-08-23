import React, { FC, ReactElement } from 'react'
import { Person } from '../../../libs/types'



const PersonCard: FC<Person> = (person): ReactElement => {

  const fullName = (p: Person) => {
    return p.secondName + " " + p.firstName + " " + p.lastName
  }

  return (
    <div className='card'>
      <div className='card-title'>{fullName(person)}</div>
      <div className='fz-14'>{person.group?.title || ""}</div>
    </div>
  )
}

export default PersonCard