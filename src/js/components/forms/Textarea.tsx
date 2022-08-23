import React, { FC, ReactElement } from 'react'

interface CostumTextarea {
  label?: string,
  value: string,
  placeholder?: string,
  onChange: (value: string) => void
}

const Textarea: FC<CostumTextarea> = (props): ReactElement => {

  const { value, onChange, label, placeholder } = props;

  const changeValue = (event: any) => onChange(event.target.value)

  return (
    <div className='form-block form-textarea'>
      <span>{label}</span>
      <textarea
        className='fz-18'
        value={value}
        placeholder={placeholder || ""}
        onChange={changeValue}
      />
    </div>
  )
}

export default Textarea