import React, { FC, ReactElement } from 'react'

interface IRadio {
  title: string;
  value: boolean;
  index: number;
  onClick: (val: number) => void;
}

const Radio: FC<IRadio> = ({ title, value, index, onClick }): ReactElement => {

  const checkClick = () => {
    if (!value) onClick(index);
  }

  return (
    <div
      className='radio'
      onClick={checkClick}
    >
      <div className={"radio-value " + (value ? "radio-value-on" : "")} />
      <span className={"radio-label " + (value ? "radio-label-on" : "")}>
        {title}
      </span>
    </div>
  )
}

export default Radio