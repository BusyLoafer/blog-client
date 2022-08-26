import React, { FC, ReactElement } from 'react'
import Radio from './Radio';

interface IRadioGroup {
  items: string[];
  value: number;
  label: string;
  onChange: (val: number) => void;
}

const RadioGroup: FC<IRadioGroup> = (props): ReactElement => {

  const {items, value, label, onChange} = props;

  return (
    <div
      className='form-block radio-group'
    >
      <span className='form-label'>{label}</span>
      {
        items.map((item: string, index: number) => {
          return <Radio
            title={item}
            value={index === value}
            onClick={onChange}
            index={index}
            key={index}
          />
        })
      }
    </div>
  )
}

export default RadioGroup