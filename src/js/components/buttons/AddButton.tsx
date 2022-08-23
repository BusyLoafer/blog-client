import React, { FC, ReactElement } from 'react';

interface AddBtn {
  onClick: () => void;
}

const AddButton: FC<AddBtn> = ({ onClick }): ReactElement => (
  <div className='btn-add fz-24' onClick={onClick}>
    <i className="icon-plus" />
  </div>
)

export default AddButton