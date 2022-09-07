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
      <span className='form-label'>{label}</span>
      <textarea
        className='fz-18 anim hill focusable'
        value={value}
        placeholder={placeholder || ""}
        onChange={changeValue}
      />
    </div>
  )
}

export default Textarea