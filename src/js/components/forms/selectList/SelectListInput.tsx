import React, { FC, ReactElement, useEffect, useRef } from 'react'

interface ISelectListInput {
  show: boolean;
  onChange: (event: any | null) => any;
  value: string;
}
const SelectListInput: FC<ISelectListInput> = (props): ReactElement => {

  const { show, onChange, value } = props;

  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  if (!show) return null;

  return (
    <div className='select-list-input'>
      <input
        type="text"
        ref={inputRef}
        onChange={onChange}
        value={value}
      />
      <i className={"icon-cross " + (value ? "select-list-clean" : "")} />
    </div>
  )
}

export default SelectListInput