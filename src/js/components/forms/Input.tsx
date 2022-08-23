import React, { FC, ReactElement } from 'react'

interface CostumInput {
  label?: string,
  value: string,
  placeholder?: string,
  onChange: (value: string) => void
}

const Input: FC<CostumInput> = (props): ReactElement => {

  const { value, onChange, label, placeholder } = props;

  const changeValue = (event: any) => onChange(event.target.value)

  return (
    <div className='form-block form-input'>
      <span>{label}</span>
      <input
        type="text"
        className='fz-18'
        value={value}
        placeholder={placeholder || ""}
        onChange={changeValue}
      />
    </div>
  )
}

export default Input