import React, { FC, ReactElement, useCallback, useEffect } from 'react'

interface IModal {
  show: boolean,
  onExit: () => void;
  children?: ReactElement;
}

const Modal: FC<IModal> = (props): ReactElement => {

  const { onExit, children, show } = props;

  if (!show) return null

  return (
    <div
      className='modal'
    // onClick={onExit}
    >
      <div className="modal-body">
        {children}
      </div>
    </div>
  )
}

export default Modal